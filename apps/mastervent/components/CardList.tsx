export default function CardList({ children }) {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mt-12 max-w-lg mx-auto grid gap-5 md:grid-cols-2 md:max-w-none">
          {children}
        </div>
      </div>
    </div>
  )
}