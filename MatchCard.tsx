export default function MatchCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0F172A] p-5">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-400">گروه A</span>
        <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">
          آینده
        </span>
      </div>
      <div className="mt-4 flex items-center justify-between text-lg font-bold">
        <span>ایران</span>
        <span className="text-yellow-400">VS</span>
        <span>آرژانتین</span>
      </div>
      <button className="mt-5 w-full rounded-xl bg-yellow-400 px-4 py-3 font-bold text-black transition hover:opacity-90">
        ثبت پیش‌بینی
      </button>
    </div>
  );
}
