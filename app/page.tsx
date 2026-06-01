export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          SaaS Analytics
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Find Where Trial Users Drop Off
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Stop guessing why trials don't convert. Track every step of your trial funnel and pinpoint the exact moments users abandon — so you can fix leaks and grow revenue.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $16/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>

        {/* Stats row */}
        <div className="mt-14 grid grid-cols-3 gap-6 border border-[#30363d] rounded-xl bg-[#161b22] p-6">
          <div>
            <div className="text-2xl font-bold text-[#58a6ff]">3x</div>
            <div className="text-xs text-[#8b949e] mt-1">Avg conversion lift</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#58a6ff]">&lt;5 min</div>
            <div className="text-xs text-[#8b949e] mt-1">Setup time</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#58a6ff]">Real-time</div>
            <div className="text-xs text-[#8b949e] mt-1">Funnel analytics</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="border border-[#58a6ff] rounded-2xl bg-[#161b22] p-8 text-center shadow-lg">
          <div className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$16</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] font-bold mt-0.5">✓</span>Full funnel drop-off tracking</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] font-bold mt-0.5">✓</span>Real-time event analytics dashboard</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] font-bold mt-0.5">✓</span>Session replay & cohort analysis</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] font-bold mt-0.5">✓</span>Slack & email drop-off alerts</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] font-bold mt-0.5">✓</span>Unlimited trial users tracked</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl bg-[#161b22] p-6">
            <h3 className="font-semibold text-white mb-2">How does it track trial user behavior?</h3>
            <p className="text-sm text-[#8b949e]">You add a lightweight JS snippet to your app. It captures events like feature usage, page visits, and inactivity, then maps them to each trial user's journey in your dashboard.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl bg-[#161b22] p-6">
            <h3 className="font-semibold text-white mb-2">Do I need to change my existing stack?</h3>
            <p className="text-sm text-[#8b949e]">No. It works alongside any SaaS stack. One script tag or SDK call is all you need — no database migrations or backend changes required.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl bg-[#161b22] p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Cancel with one click from your billing portal. No questions asked, no lock-in contracts.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Trial Conversion Leak Finder. All rights reserved.
      </footer>
    </main>
  )
}
