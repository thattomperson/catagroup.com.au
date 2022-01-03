import Header from '../components/Header'

export default function Web() {
  return (
    <>
      <div className="h-screen bg-slate-900">
        <Header />
        <div className="max-w-7xl mx-auto">
          <h1 className="text-7xl text-white">Slate</h1>
        </div>
      </div>
      <div className="h-screen bg-gray-900">
        <Header />
        <div className="max-w-7xl mx-auto">
          <h1 className="text-7xl text-white">Gray</h1>
        </div>
      </div>
      <div className="h-screen bg-zinc-900">
        <Header />
        <div className="max-w-7xl mx-auto">
          <h1 className="text-7xl text-white">Zinc</h1>
        </div>
      </div>
      <div className="h-screen bg-neutral-900">
        <Header />
        <div className="max-w-7xl mx-auto">
          <h1 className="text-7xl text-white">Neutral</h1>
        </div>
      </div>
      <div className="h-screen bg-stone-900">
        <Header />
        <div className="max-w-7xl mx-auto">
          <h1 className="text-7xl text-white">Stone</h1>
        </div>
      </div>
    </>
  );
}
