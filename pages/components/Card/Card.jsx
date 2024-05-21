function Card() {
  return (
    <article>
      <a
        href="#"
        className="block relative rounded-xl shadow-lg overflow-hidden h-72 bg-cover bg-[url('/kasa.jpg')]"
      >
        <div className="absolute opacity-0 duration-500 hover:opacity-100 flex flex-col justify-center items-center rounded-xl bg-secondary-color/80 h-72 w-full">
          <h2 className="block relative text-4xl text-main-color">
            PROJET D'ÉTUDES KASA
          </h2>
          <p className="absolute bottom-2 right-2 text-main-color">
            Voir plus -&gt;
          </p>
        </div>
      </a>
    </article>
  )
}

export default Card
