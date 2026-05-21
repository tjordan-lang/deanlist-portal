"use client";

import { useMemo, useState } from 'react';

type MerchItem = {
  name: string;
  price: string;
  note: string;
  accent: string;
};

type Track = {
  code: string;
  title: string;
  detail: string;
  time: string;
};

const portalStamp = 'Thursday, May 21, 2026';

const merchItems: MerchItem[] = [
  { name: 'Varsity Patch Hoodie', price: '$68', note: 'Heavyweight fleece. Gold thread crest.', accent: 'bg-[#D90416]' },
  { name: 'Campus ID Lanyard', price: '$18', note: 'Library-safe clip and faux barcode.', accent: 'bg-[#EBA40A]' },
  { name: 'Deanlist Spiral Notebook', price: '$14', note: 'For lecture graffiti and attendance alibis.', accent: 'bg-[#262494]' },
  { name: 'Registrar Mug', price: '$22', note: 'Congo brown glaze, hot coffee only.', accent: 'bg-[#5B4039]' }
];

const syllabusTracks: Track[] = [
  { code: '101', title: 'Orientation Hallway', detail: 'First-contact walk-through and badge assignment', time: '03:14' },
  { code: '203', title: 'Dean’s List Dreams', detail: 'GPA management, staff stamps, and late-slip diplomacy', time: '04:26' },
  { code: '307', title: 'Midterm Noticeboard', detail: 'File review, room changes, and bulletin etiquette', time: '02:58' },
  { code: '411', title: 'Commencement Afterparty', detail: 'Alumni networking with glittering portal energy', time: '05:01' }
];

const letterPrefixes = ['EL', 'REG', 'DL', 'AD'];

function randomEnrollmentId() {
  const prefix = letterPrefixes[Math.floor(Math.random() * letterPrefixes.length)];
  const digits = Math.floor(100000 + Math.random() * 900000);
  return `${prefix}-${digits}`;
}

function buildLetter(name: string, studentId: string, term: string) {
  const safeName = name.trim() || 'Student';
  const safeId = studentId.trim() || 'EL-000000';
  const safeTerm = term.trim() || 'Fall 2004';

  return `DEANLIST UNIVERSITY\nENROLLMENT VERIFICATION LETTER\nIssued ${portalStamp}\n\nThis is to certify that ${safeName} (${safeId}) is provisionally registered for ${safeTerm}.\n\nThe bearer is cleared for orientation, registrar services, and campus-approved merchandise pickup.\n\nAuthorized by the Dean’s Office.`;
}

export default function PortalHome() {
  const [studentName, setStudentName] = useState('Avery Stone');
  const [studentId, setStudentId] = useState('EL-204821');
  const [term, setTerm] = useState('Fall 2004');
  const [selectedMerch, setSelectedMerch] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const enrollmentLetter = useMemo(
    () => buildLetter(studentName, studentId, term),
    [studentId, studentName, term]
  );

  const reserveMerch = (name: string) => {
    setSelectedMerch((current) =>
      current.includes(name) ? current.filter((item) => item !== name) : [...current, name]
    );
  };

  const copyLetter = async () => {
    await navigator.clipboard.writeText(enrollmentLetter);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="relative isolate min-h-screen overflow-hidden text-[#f6efe5]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-4 pt-5 sm:px-6 lg:px-8">
        <div>
          <p className="text-[11px] uppercase tracking-[0.45em] text-white/60">Deanlist access portal</p>
          <h1 className="mt-2 text-3xl font-black uppercase tracking-[0.18em] text-white sm:text-5xl">
            Student Portal
          </h1>
        </div>
        <div className="hidden rounded-full border border-white/15 bg-white/8 px-4 py-2 text-right text-[10px] uppercase tracking-[0.35em] text-white/70 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] sm:block">
          <div>Registered session</div>
          <div className="mt-1 text-[#EBA40A]">Monza / Gamboge / Jacksons Purple / Congo Brown</div>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl gap-6 px-4 pb-14 pt-6 sm:px-6 lg:grid-cols-[1.25fr_0.95fr] lg:px-8">
        <section className="space-y-6">
          <section className="overflow-hidden rounded-[2rem] border border-white/12 bg-white/8 shadow-portal backdrop-blur-xl">
            <div className="grid gap-6 p-6 sm:p-8 xl:grid-cols-[1.25fr_0.75fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#EBA40A]/35 bg-[#EBA40A]/12 px-4 py-1 text-[11px] uppercase tracking-[0.35em] text-[#F8D676]">
                  Freshly stamped for the semester
                </div>
                <h2 className="mt-5 max-w-2xl text-4xl font-black uppercase leading-none tracking-[0.08em] text-white sm:text-6xl">
                  Campus intranet with a suspiciously polished soul.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/76 sm:text-base">
                  The portal leans into 2000s university energy: marble-ish gradients, loud cabinet labels, and a little calculated spam — but executed like a premium student dashboard.
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.24em] text-white/70">
                  <span className="rounded-full border border-[#D90416]/40 bg-[#D90416]/12 px-3 py-2">Enrollment letter generator</span>
                  <span className="rounded-full border border-[#EBA40A]/35 bg-[#EBA40A]/12 px-3 py-2">Registrar merch shop</span>
                  <span className="rounded-full border border-[#262494]/40 bg-[#262494]/15 px-3 py-2">Syllabus tracklist</span>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-[#120c1f]/70 p-5 shadow-insetPortal">
                <p className="text-[10px] uppercase tracking-[0.4em] text-white/48">Portal bulletin</p>
                <ul className="mt-4 space-y-3 text-sm text-white/78">
                  <li className="rounded-2xl border border-white/8 bg-white/5 p-3">Status: active. Lobby music: implied.</li>
                  <li className="rounded-2xl border border-white/8 bg-white/5 p-3">Forms: official enough to be believable.</li>
                  <li className="rounded-2xl border border-white/8 bg-white/5 p-3">Dean’s Office: hidden, but absolutely here.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="grid gap-6 xl:grid-cols-[1.12fr_0.88fr]">
            <div className="rounded-[2rem] border border-white/12 bg-white/8 p-6 shadow-portal backdrop-blur-xl sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.45em] text-white/50">Enrollment letter generator</p>
                  <h3 className="mt-2 text-2xl font-black uppercase tracking-[0.16em] text-white">Dynamic student letter</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setStudentId(randomEnrollmentId())}
                  className="rounded-full border border-[#EBA40A]/35 bg-[#EBA40A] px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-[#1b1028] transition hover:scale-[1.02]"
                >
                  Reroll ID
                </button>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <label className="grid gap-2 text-xs uppercase tracking-[0.24em] text-white/55">
                  Student name
                  <input
                    value={studentName}
                    onChange={(event) => setStudentName(event.target.value)}
                    className="rounded-2xl border border-white/10 bg-[#0f0b19]/80 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-white/28 focus:border-[#EBA40A]/70"
                    placeholder="Avery Stone"
                  />
                </label>
                <label className="grid gap-2 text-xs uppercase tracking-[0.24em] text-white/55">
                  Student ID
                  <input
                    value={studentId}
                    onChange={(event) => setStudentId(event.target.value)}
                    className="rounded-2xl border border-white/10 bg-[#0f0b19]/80 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-white/28 focus:border-[#D90416]/70"
                    placeholder="EL-204821"
                  />
                </label>
                <label className="grid gap-2 text-xs uppercase tracking-[0.24em] text-white/55">
                  Term
                  <input
                    value={term}
                    onChange={(event) => setTerm(event.target.value)}
                    className="rounded-2xl border border-white/10 bg-[#0f0b19]/80 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-white/28 focus:border-[#262494]/70"
                    placeholder="Fall 2004"
                  />
                </label>
              </div>

              <div className="mt-5 rounded-[1.5rem] border border-[#D90416]/20 bg-[#0f0b19]/90 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                <pre className="whitespace-pre-wrap font-mono text-sm leading-6 text-[#f8f0d8]">{enrollmentLetter}</pre>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={copyLetter}
                  className="rounded-full border border-[#D90416]/35 bg-[#D90416] px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-white transition hover:scale-[1.02]"
                >
                  {copied ? 'Copied to clipboard' : 'Copy letter'}
                </button>
                <div className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/60">
                  Issued {portalStamp}
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/12 bg-white/8 p-6 shadow-portal backdrop-blur-xl sm:p-7">
              <p className="text-[10px] uppercase tracking-[0.45em] text-white/50">Quick status</p>
              <div className="mt-4 grid gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                  <div className="text-xs uppercase tracking-[0.24em] text-white/50">Access level</div>
                  <div className="mt-2 text-2xl font-black text-[#EBA40A]">Deanlist pending</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                  <div className="text-xs uppercase tracking-[0.24em] text-white/50">Office tone</div>
                  <div className="mt-2 text-sm leading-6 text-white/76">Administrative, slightly theatrical, and very ready to stamp your paperwork.</div>
                </div>
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-[#262494]/30 bg-[#262494]/15 p-4">
                <p className="text-[10px] uppercase tracking-[0.45em] text-[#b9b8ff]">Hidden systems note</p>
                <p className="mt-2 text-sm leading-6 text-white/80">
                  The Dean&apos;s Office is technically present, but it prefers privacy. Look for the subtle link in the footer if you need the restricted hallway.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] border border-white/12 bg-white/8 p-6 shadow-portal backdrop-blur-xl sm:p-7">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.45em] text-white/50">Registrar</p>
                <h3 className="mt-2 text-2xl font-black uppercase tracking-[0.16em] text-white">Merch shop</h3>
              </div>
              <div className="text-right text-xs uppercase tracking-[0.28em] text-white/50">
                Reserved items: <span className="text-[#EBA40A]">{selectedMerch.length}</span>
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {merchItems.map((item) => {
                const reserved = selectedMerch.includes(item.name);
                return (
                  <article key={item.name} className="rounded-[1.6rem] border border-white/10 bg-[#120c1f]/80 p-4">
                    <div className={`h-2 w-16 rounded-full ${item.accent}`} />
                    <div className="mt-4 flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-lg font-bold text-white">{item.name}</h4>
                        <p className="mt-2 text-sm leading-6 text-white/72">{item.note}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-black text-[#EBA40A]">{item.price}</div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => reserveMerch(item.name)}
                      className={`mt-4 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.26em] transition ${reserved ? 'border border-[#EBA40A]/45 bg-[#EBA40A] text-[#1b1028]' : 'border border-white/12 bg-white/6 text-white hover:bg-white/10'}`}
                    >
                      {reserved ? 'Added to pickup list' : 'Reserve item'}
                    </button>
                  </article>
                );
              })}
            </div>
          </section>
        </section>

        <aside className="space-y-6">
          <section className="rounded-[2rem] border border-white/12 bg-white/8 p-6 shadow-portal backdrop-blur-xl sm:p-7">
            <p className="text-[10px] uppercase tracking-[0.45em] text-white/50">Syllabus</p>
            <h3 className="mt-2 text-2xl font-black uppercase tracking-[0.16em] text-white">Tracklist</h3>
            <div className="mt-5 space-y-3">
              {syllabusTracks.map((track, index) => (
                <article key={track.code} className="rounded-[1.4rem] border border-white/10 bg-[#120c1f]/80 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.35em] text-white/45">Track {index + 1} · {track.code}</div>
                      <h4 className="mt-2 text-lg font-bold text-white">{track.title}</h4>
                    </div>
                    <div className="rounded-full border border-[#EBA40A]/25 bg-[#EBA40A]/12 px-3 py-1 text-xs font-bold text-[#F8D676]">{track.time}</div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/72">{track.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-[#D90416]/28 bg-[#D90416]/12 p-6 shadow-portal backdrop-blur-xl sm:p-7">
            <p className="text-[10px] uppercase tracking-[0.45em] text-[#ffb8c0]">Campus memo</p>
            <h3 className="mt-2 text-2xl font-black uppercase tracking-[0.16em] text-white">Dean&apos;s Office</h3>
            <p className="mt-4 text-sm leading-7 text-white/80">
              A restricted corridor for policy edits, late approvals, and very confidential coffee. The entry point is intentionally understated.
            </p>
            <a
              href="/deans-office"
              className="mt-5 inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-white/85 transition hover:bg-white/12 hover:text-white"
            >
              Open the hidden link
            </a>
          </section>

          <section className="rounded-[2rem] border border-white/12 bg-[#120c1f]/85 p-6 shadow-portal backdrop-blur-xl sm:p-7">
            <p className="text-[10px] uppercase tracking-[0.45em] text-white/50">Portal credits</p>
            <div className="mt-4 space-y-3 text-sm leading-7 text-white/74">
              <p>Design language: 2000s university intranet, tuned for modern readability.</p>
              <p>Palette: Monza, Gamboge, Jacksons Purple, and Congo Brown.</p>
              <p>Execution mode: polished, persuasive, and a little bit spammy.</p>
            </div>
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/6 p-4 text-xs uppercase tracking-[0.3em] text-white/55">
              Session stamp: {portalStamp}
            </div>
          </section>
        </aside>
      </main>

      <footer className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 pb-8 text-[11px] uppercase tracking-[0.32em] text-white/45 sm:px-6 lg:px-8">
        <span>Deanlist Portal / campus intranet prototype</span>
        <a href="/deans-office" className="opacity-15 transition hover:opacity-100">
          Dean&apos;s Office
        </a>
      </footer>
    </div>
  );
}
