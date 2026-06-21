import { redirect } from 'next/navigation';

/** Legacy URL — product is Routely */
export default function AkshRedirectPage() {
  redirect('/routely');
}
