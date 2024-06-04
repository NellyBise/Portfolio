export function Loader() {
  return (
    <div className="pt-36">
      <p className="flex justify-center text-xl mb-12">
        Chargement en cours...
      </p>
      <div class="flex flex-row justify-center gap-2">
        <div class="w-4 h-4 rounded-full bg-main-color dark:bg-secondary-color animate-bounce"></div>
        <div class="w-4 h-4 rounded-full bg-main-color dark:bg-secondary-color animate-bounce [animation-delay:-.3s]"></div>
        <div class="w-4 h-4 rounded-full bg-main-color dark:bg-secondary-color animate-bounce [animation-delay:-.5s]"></div>
      </div>
    </div>
  )
}
