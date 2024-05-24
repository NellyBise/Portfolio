export default function Tags({ tagsContent }) {
  return (
    <div className="flex gap-2 pl-6">
      {tagsContent.map((tag) => (
        <div
          className="text-center rounded-3xl border bg-light-color dark:bg-dark-color my-6 px-3 text-s md:text-lg "
          key={tag}
        >
          {tag}
        </div>
      ))}
    </div>
  )
}
