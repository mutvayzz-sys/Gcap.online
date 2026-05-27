export default function NotificationCard() {
  return (
    <div className="bg-[#111111] text-[#F9F7F3] rounded-2xl border border-white/10 p-7 font-mono">
      <div className="space-y-3 text-[15px] leading-relaxed">
        <div className="flex items-center gap-3">
          <span className="text-green-400">✓</span>
          <span>Research task — complete</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-green-400">✓</span>
          <span>Competitive memo — delivered</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-green-400">✓</span>
          <span>Board report — ready</span>
        </div>
      </div>
      <div className="mt-5 pt-4 border-t border-white/10 text-xs text-white/40 tracking-wide">
        Headmaster · 3 tasks · 4h 22m
      </div>
    </div>
  );
}
