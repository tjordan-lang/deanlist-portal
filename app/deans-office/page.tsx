import Link from 'next/link';

export const metadata = {
  title: "Dean's Office · Deanlist Portal",
  description: 'A hidden administrative corridor for the Deanlist Portal.'
};

export default function DeansOfficePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#120c1f] via-[#1b1240] to-[#0d0a14] px-4 py-10 text-[#f6efe5] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/12 bg-white/8 p-6 shadow-portal backdrop-blur-xl sm:p-8">
        <p className="text-[10px] uppercase tracking-[0.45em] text-white/45">Restricted corridor</p>
        <h1 className="mt-3 text-4xl font-black uppercase tracking-[0.14em] text-white sm:text-6xl">Dean&apos;s Office</h1>
        <p className="mt-5 text-sm leading-7 text-white/76 sm:text-base">
          This room exists for approvals, policy tweaks, and the ceremonial rubber-stamping of unusually stylish student portals.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.4rem] border border-[#EBA40A]/25 bg-[#EBA40A]/12 p-4">
            <div className="text-xs uppercase tracking-[0.3em] text-[#F8D676]">Office hours</div>
            <div className="mt-2 text-lg font-bold text-white">Always almost open</div>
          </div>
          <div className="rounded-[1.4rem] border border-[#D90416]/25 bg-[#D90416]/12 p-4">
            <div className="text-xs uppercase tracking-[0.3em] text-[#ffb8c0]">Status</div>
            <div className="mt-2 text-lg font-bold text-white">Hidden, but not gone</div>
          </div>
        </div>
        <p className="mt-8 text-xs uppercase tracking-[0.32em] text-white/45">
          Return to the main portal when you are done touring the hallway.
        </p>
        <Link
          href="/"
          className="mt-5 inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-white/85 transition hover:bg-white/12 hover:text-white"
        >
          Back to student portal
        </Link>
      </div>
    </main>
  );
}
