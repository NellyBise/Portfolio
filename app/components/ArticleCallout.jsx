import Image from 'next/image'

export default function Callout({ title, items, img, variant = 'default' }) {
  const styles = {
    default: 'border-gray-200 bg-gray-50',
    info: 'border-blue-200 bg-blue-50',
    warning: 'border-amber-200 bg-amber-50',
    insight: 'border-emerald-200 bg-emerald-50',
  }

  return (
    <aside
      className={`my-10 rounded-xl border-l-4 p-5 max-w-[600px] mx-auto ${styles[variant]}`}
    >
      {img ? (
        <Image
          className="max-h-28 w-auto mx-auto"
          src={img}
          width="500"
          height="100"
        />
      ) : (
        ''
      )}
      {title && (
        <p className="mb-3 text-center font-semibold text-gray-800">{title}</p>
      )}

      <ul className="space-y-2 text-gray-800">
        {items.map((item, i) => (
          <li key={i} className="leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    </aside>
  )
}
