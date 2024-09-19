function Card({ cover, name }) {
  return (
    <article>
      <div
        style={{ backgroundImage: `url('${cover}')` }}
        className="block relative mx-auto rounded-xl shadow-def shadow-black/10 dark:shadow-white/20 overflow-hidden h-[56.25vw] md:h-[28vw]  lg:w-full lg:h-[290px] lg:w-[485px] bg-cover"
      >
        <div className="bg-gradient-to-t from-secondary-color to-transparent absolute bottom-0 md:opacity-0 duration-300 hover:opacity-100 flex flex-col justify-end pb-2 md:pb-0 md:justify-center items-center rounded-xl md:bg-secondary-color/80 h-36 md:h-full w-full">
          <h3 className="block relative text-3xl sm:text-4xl text-main-color">
            {name}
          </h3>
          <span
            className="hidden md:block absolute bottom-2 right-2 text-main-color aria-hidden"
            aria-hidden="true"
          >
            Voir plus -&gt;
          </span>
        </div>
      </div>
    </article>
  )
}

export default Card
