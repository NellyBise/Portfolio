function Card({ cover, name }) {
  return (
    <article>
      <div
        style={{ backgroundImage: `url('${cover}')` }}
        className="block relative rounded-xl shadow-lg overflow-hidden h-72 bg-cover"
      >
        <div className="bg-gradient-to-t from-secondary-color to-transparent absolute bottom-0 md:opacity-0 duration-500 hover:opacity-100 flex flex-col justify-end pb-2 md:pb-0 md:justify-center items-center rounded-xl md:bg-secondary-color/80 h-36 md:h-72 w-full">
          <h3 className="block relative text-4xl text-main-color">{name}</h3>
          <p className="hidden md:block absolute bottom-2 right-2 text-main-color">
            Voir plus -&gt;
          </p>
        </div>
      </div>
    </article>
  )
}

export default Card
