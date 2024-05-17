export function Card() {
  return (
    <article>
      <a
        href="#"
        className="block relative rounded-xl overflow-hidden h-96 bg-cover bg-[url('/kasa.jpg')]"
      >
        <div className="absolute opacity-0 duration-500 hover:opacity-100 flex flex-col justify-center items-center rounded-xl bg-main-color/80 h-96 w-full">
          <h2 className="block relative text-4xl">PROJET D'ÉTUDES KASA</h2>
          <p className="absolute bottom-2 right-2">Voir plus -&gt;</p>
        </div>
      </a>
    </article>
  )
}
