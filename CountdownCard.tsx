export default function CountdownCard() {
  return (
    <div className="rounded-2xl bg-card p-6 border border-white/10">
      <h2 className="mb-3 text-lg font-bold">شمارش معکوس بازی بعدی</h2>
      <div className="text-4xl font-black text-yellow-400">12:34:56</div>
      <p className="mt-2 text-sm text-gray-400">تا شروع دیدار بعدی باقی مانده</p>
    </div>
  );
}
