function Form() {
  return (
    <section className="flex flex-col items-center py-24" id="contact">
      <h2 className="text-4xl mt-2 mb-10 text-center text-main-color">
        CONTACTEZ-MOI
      </h2>
      <form className="mt-8 flex flex-col w-2/5">
        <label htmlFor="email">Email</label>
        <input
          className="p-2 drop-shadow-lg rounded-l"
          id="email"
          type="email"
          placeholder="email@mail.com"
        ></input>
        <label className="mt-8" htmlFor="message">
          Votre message
        </label>
        <textarea
          className="h-36 p-2 drop-shadow-lg rounded-l"
          id="message"
        ></textarea>
        <button className="w-1/3 self-end pointer-events-auto rounded-3xl bg-secondary-color my-12 px-3 py-1 sm:text-xs md:text-lg drop-shadow-lg duration-500 hover:bg-main-color hover:text-white">
          Envoyer
        </button>
      </form>
    </section>
  )
}

export default Form
