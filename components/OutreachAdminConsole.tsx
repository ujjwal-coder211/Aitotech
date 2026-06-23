'use client';

import { useState, useCallback, useEffect } from 'react';

const adminFetch = (input: RequestInfo | URL, init?: RequestInit) =>
  fetch(input, { ...init, credentials: 'same-origin' });

type UserRow = {
  id: string;
  name: string;
  email: string;
  bankName?: string;
  branchName?: string;
  pinCodes?: string[];
  accountStatus: string;
  createdAt: string;
};

type CredentialPopup = {
  userId: string;
  name: string;
  email: string;
  password: string;
};

function CredentialModal({
  data,
  onClose,
  onSendMail,
  sending,
}: {
  data: CredentialPopup;
  onClose: () => void;
  onSendMail: () => void;
  sending: boolean;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-md rounded-2xl border border-zinc-700 bg-zinc-900 p-6 shadow-xl">
        <h3 className="font-display text-lg font-bold text-white">Login credentials ready</h3>
        <p className="mt-1 text-sm text-zinc-500">{data.name}</p>

        <div className="mt-5 space-y-3 rounded-lg bg-zinc-950 p-4">
          <div>
            <p className="text-xs uppercase tracking-wide text-zinc-500">Email ID (Login)</p>
            <p className="mt-1 font-mono text-sm text-emerald-300">{data.email}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-zinc-500">Password</p>
            <p className="mt-1 font-mono text-lg font-bold text-white">{data.password}</p>
          </div>
        </div>

        <p className="mt-4 text-xs text-zinc-500">
          Approve ho gaya. Ab &quot;Send mail&quot; dabayein — user ke email pe ID + password jayega.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <button type="button" className="btn-primary flex-1" onClick={onSendMail} disabled={sending}>
            {sending ? 'Sending…' : 'Send mail'}
          </button>
          <button type="button" className="btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function OutreachAdminConsole() {
  const [msg, setMsg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [pending, setPending] = useState<UserRow[]>([]);
  const [loadingPending, setLoadingPending] = useState(false);
  const [approvingId, setApprovingId] = useState<string | null>(null);
  const [popup, setPopup] = useState<CredentialPopup | null>(null);
  const [sendingMail, setSendingMail] = useState(false);
  const [importing, setImporting] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    bankName: '',
    branchName: '',
    pinCodes: '',
    autoPassword: true,
  });

  const loadPending = useCallback(async () => {
    setLoadingPending(true);
    setErr(null);
    try {
      const res = await adminFetch('/api/outreach-admin?action=list-users&status=pending');
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to load');
      setPending(data.users || []);
    } catch (e) {
      setErr(e instanceof Error ? e.message : 'Load failed');
    } finally {
      setLoadingPending(false);
    }
  }, []);

  useEffect(() => {
    loadPending();
  }, [loadPending]);

  const showCredentials = (userId: string, name: string, email: string, password: string) => {
    setPopup({ userId, name, email, password });
  };

  const createUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg(null);
    setErr(null);
    if (!form.autoPassword && form.password.length < 8) {
      setErr('Password must be at least 8 characters');
      return;
    }
    try {
      const pinCodes = form.pinCodes
        .split(/[\s,]+/)
        .map((p) => p.trim())
        .filter((p) => /^\d{6}$/.test(p));

      const res = await adminFetch('/api/outreach-admin?action=create-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.autoPassword ? undefined : form.password,
          bankName: form.bankName,
          branchName: form.branchName,
          pinCodes,
          sendEmail: false,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Create failed');

      showCredentials(data.user.id, data.user.name, data.email || form.email, data.password);
      setForm({ name: '', email: '', password: '', bankName: '', branchName: '', pinCodes: '', autoPassword: true });
    } catch (e) {
      setErr(e instanceof Error ? e.message : 'Create failed');
    }
  };

  const approve = async (u: UserRow) => {
    setErr(null);
    setApprovingId(u.id);
    try {
      const res = await adminFetch(`/api/outreach-admin?action=approve-user&id=${u.id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sendEmail: false }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Approve failed');

      if (data.password) {
        showCredentials(u.id, data.user?.name || u.name, data.email || u.email, data.password);
      }
      setMsg('User approved');
      loadPending();
    } catch (e) {
      setErr(e instanceof Error ? e.message : 'Approve failed');
    } finally {
      setApprovingId(null);
    }
  };

  const sendMail = async () => {
    if (!popup) return;
    setSendingMail(true);
    setErr(null);
    try {
      const res = await adminFetch(`/api/outreach-admin?action=send-credentials&id=${popup.userId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: popup.password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Send failed');
      setMsg(`Email sent to ${popup.email}`);
      setPopup(null);
    } catch (e) {
      setErr(e instanceof Error ? e.message : 'Send failed');
    } finally {
      setSendingMail(false);
    }
  };

  const importFile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMsg(null);
    setErr(null);
    setImporting(true);
    const fd = new FormData(e.currentTarget);
    try {
      const res = await adminFetch('/api/outreach-admin?action=import-registry', {
        method: 'POST',
        body: fd,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Import failed');
      setMsg(
        `✅ Server pe upload ho gaya — ${data.inserted} naye, ${data.updated} update, total ${data.totalRows} rows. App mein PIN + date se dikhega.`
      );
      (e.target as HTMLFormElement).reset();
    } catch (ex) {
      setErr(ex instanceof Error ? ex.message : 'Import failed');
    } finally {
      setImporting(false);
    }
  };

  const logout = async () => {
    await fetch('/api/outreach-admin/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
      body: JSON.stringify({ action: 'logout' }),
    });
    window.location.href = '/products/outreach/admin/login';
  };

  return (
    <>
      {popup ? (
        <CredentialModal data={popup} onClose={() => setPopup(null)} onSendMail={sendMail} sending={sendingMail} />
      ) : null}

      <div className="space-y-10">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
          <p className="text-sm text-zinc-500">Signed in as Outreach admin</p>
          <button type="button" className="btn-secondary text-sm" onClick={logout}>
            Log out
          </button>
        </div>

        {msg ? (
          <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-200">{msg}</div>
        ) : null}
        {err ? (
          <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">{err}</div>
        ) : null}

        <section className="card p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-display text-xl font-bold text-white">Pending access requests</h2>
            <button type="button" className="btn-secondary text-sm" onClick={loadPending} disabled={loadingPending}>
              {loadingPending ? 'Loading…' : 'Refresh'}
            </button>
          </div>
          <p className="mt-2 text-sm text-zinc-500">
            Jo register/request kare → <strong className="text-zinc-400">Approve</strong> dabayein → popup mein Email + Password →{' '}
            <strong className="text-zinc-400">Send mail</strong>.
          </p>
          <ul className="mt-4 space-y-3">
            {pending.length === 0 ? (
              <li className="text-sm text-zinc-600">Koi pending request nahi — Refresh dabayein.</li>
            ) : (
              pending.map((u) => (
                <li key={u.id} className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-zinc-800 p-4">
                  <div>
                    <p className="font-medium text-white">{u.name}</p>
                    <p className="text-sm text-zinc-500">{u.email}</p>
                    {u.bankName ? (
                      <p className="text-xs text-zinc-600">
                        {u.bankName} · {u.branchName}
                        {u.pinCodes?.length ? ` · PIN: ${u.pinCodes.join(', ')}` : ''}
                      </p>
                    ) : null}
                  </div>
                  <button
                    type="button"
                    className="btn-primary text-sm"
                    onClick={() => approve(u)}
                    disabled={approvingId === u.id}
                  >
                    {approvingId === u.id ? 'Approving…' : 'Approve'}
                  </button>
                </li>
              ))
            )}
          </ul>
        </section>

        <section className="card p-6 sm:p-8">
          <h2 className="font-display text-xl font-bold text-white">Create login manually</h2>
          <p className="mt-2 text-sm text-zinc-500">Seedha ID/password allot karein (auto-generate default on).</p>
          <form onSubmit={createUser} className="mt-6 grid gap-4 sm:grid-cols-2">
            {(['name', 'email', 'bankName', 'branchName'] as const).map((key) => (
              <label key={key} className="block text-sm">
                <span className="text-zinc-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                <input
                  className="input mt-1 w-full"
                  type={key === 'email' ? 'email' : 'text'}
                  required={key === 'name' || key === 'email'}
                  value={form[key]}
                  onChange={(ev) => setForm((f) => ({ ...f, [key]: ev.target.value }))}
                />
              </label>
            ))}
            <label className="flex items-center gap-2 text-sm sm:col-span-2">
              <input
                type="checkbox"
                checked={form.autoPassword}
                onChange={(ev) => setForm((f) => ({ ...f, autoPassword: ev.target.checked }))}
              />
              <span className="text-zinc-400">Auto-generate password</span>
            </label>
            {!form.autoPassword ? (
              <label className="block text-sm sm:col-span-2">
                <span className="text-zinc-400">Password</span>
                <input
                  className="input mt-1 w-full"
                  type="text"
                  required
                  minLength={8}
                  value={form.password}
                  onChange={(ev) => setForm((f) => ({ ...f, password: ev.target.value }))}
                />
              </label>
            ) : null}
            <label className="block text-sm sm:col-span-2">
              <span className="text-zinc-400">PIN codes (comma separated)</span>
              <input
                className="input mt-1 w-full"
                placeholder="400001, 400002"
                value={form.pinCodes}
                onChange={(ev) => setForm((f) => ({ ...f, pinCodes: ev.target.value }))}
              />
            </label>
            <div className="sm:col-span-2">
              <button type="submit" className="btn-primary">
                Create user
              </button>
            </div>
          </form>
        </section>

        <section className="card p-6 sm:p-8">
          <h2 className="font-display text-xl font-bold text-white">MCA / GST Excel upload</h2>
          <p className="mt-2 text-sm text-zinc-500">
            File yahan upload → Railway server pe save → officers app mein <strong className="text-zinc-400">Companies → PIN + date</strong> se search karenge.
          </p>
          <form onSubmit={importFile} className="mt-6 space-y-4">
            <label className="block text-sm">
              <span className="text-zinc-400">Excel / CSV file</span>
              <input className="mt-2 block w-full text-sm text-zinc-400" name="file" type="file" accept=".xlsx,.xls,.csv" required />
            </label>
            <label className="block text-sm">
              <span className="text-zinc-400">Data date (registration date)</span>
              <input className="input mt-1" name="dataDate" type="date" defaultValue={new Date().toISOString().slice(0, 10)} />
            </label>
            <button type="submit" className="btn-primary" disabled={importing}>
              {importing ? 'Uploading to server…' : 'Upload to server'}
            </button>
          </form>
        </section>
      </div>
    </>
  );
}
