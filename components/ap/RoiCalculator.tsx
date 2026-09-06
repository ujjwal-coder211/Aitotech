'use client';

import Link from 'next/link';
import { useMemo, useRef, useState } from 'react';
import { track } from '@/lib/analytics';

/** Working days assumed per month, and minutes per repetitive task. */
const WORKING_DAYS = 22;
const MINUTES_PER_TASK = 10;
/** Share of the measured hours we assume is automatable — stated, not hidden. */
const AUTOMATABLE = 0.6;

interface SliderProps {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  suffix?: string;
  onChange: (value: number) => void;
}

function Slider({ id, label, value, min, max, step = 1, suffix, onChange }: SliderProps) {
  return (
    <div>
      <div className="mb-3 flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-[14.5px] font-semibold">
          {label}
        </label>
        <span className="font-heading text-[15px] font-bold text-azure-deep">
          {value}
          {suffix ? ` ${suffix}` : ''}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-1 w-full cursor-pointer appearance-none rounded-full bg-[#dfe7f1] accent-azure-deep outline-none"
      />
    </div>
  );
}

export default function RoiCalculator() {
  const engaged = useRef(false);

  /** Report the first interaction only — one signal per visitor, not per drag. */
  const onInteract = <T,>(setter: (value: T) => void) => (value: T) => {
    if (!engaged.current) {
      engaged.current = true;
      track('roi_calculated');
    }
    setter(value);
  };

  const [enquiries, setEnquiries] = useState(300);
  const [employees, setEmployees] = useState(8);
  const [followup, setFollowup] = useState(12);
  const [tasks, setTasks] = useState(6);

  const { enquiryHours, taskHours, total, redirect } = useMemo(() => {
    const enquiryHours = Math.round((enquiries * followup) / 60);
    const taskHours = Math.round((employees * tasks * MINUTES_PER_TASK * WORKING_DAYS) / 60);
    const total = enquiryHours + taskHours;
    return { enquiryHours, taskHours, total, redirect: Math.round(total * AUTOMATABLE) };
  }, [enquiries, employees, followup, tasks]);

  return (
    <div className="ap-card grid items-start gap-9 p-7 sm:p-9 lg:grid-cols-2 lg:gap-12">
      <div className="grid gap-7">
        <Slider
          id="roi-enquiries"
          label="Enquiries per month"
          value={enquiries}
          min={20}
          max={2000}
          step={10}
          onChange={onInteract(setEnquiries)}
        />
        <Slider
          id="roi-employees"
          label="Employees doing routine work"
          value={employees}
          min={1}
          max={120}
          onChange={onInteract(setEmployees)}
        />
        <Slider
          id="roi-followup"
          label="Minutes spent per enquiry"
          value={followup}
          min={2}
          max={60}
          suffix="min"
          onChange={onInteract(setFollowup)}
        />
        <Slider
          id="roi-tasks"
          label="Repetitive tasks per person, per day"
          value={tasks}
          min={0}
          max={30}
          onChange={onInteract(setTasks)}
        />
      </div>

      <div className="rounded-2xl bg-navy p-7 text-white sm:p-8">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-azure">
          Estimated, per month
        </p>

        <p className="font-heading text-[44px] font-extrabold leading-none">
          {total.toLocaleString('en-IN')}{' '}
          <span className="text-lg font-semibold text-[#a9bdd8]">hours</span>
        </p>
        <p className="mt-1.5 text-sm text-[#a9bdd8]">currently handled manually</p>

        <div className="my-5 h-px bg-white/[0.14]" />

        <div className="flex flex-wrap gap-7">
          <div>
            <p className="mb-1 text-[12.5px] text-[#a9bdd8]">Enquiry handling</p>
            <p className="font-heading text-xl font-bold">{enquiryHours} h</p>
          </div>
          <div>
            <p className="mb-1 text-[12.5px] text-[#a9bdd8]">Repetitive tasks</p>
            <p className="font-heading text-xl font-bold">{taskHours} h</p>
          </div>
        </div>

        <div className="my-5 h-px bg-white/[0.14]" />

        <p className="font-heading text-3xl font-extrabold text-azure">
          ~{redirect.toLocaleString('en-IN')} hours
        </p>
        <p className="mt-1.5 text-[13.5px] text-[#a9bdd8]">
          could be redirected if roughly {Math.round(AUTOMATABLE * 100)}% of this is automated — the
          audit confirms what actually can be.
        </p>

        <Link href="/contact" className="ap-btn ap-btn-pri mt-6 w-full">
          Book Free Automation Audit
        </Link>
      </div>
    </div>
  );
}
