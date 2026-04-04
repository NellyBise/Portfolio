export const metadata = {
  title: 'Notices de poste – Nelly Bise',
  description:
    'Créez facilement vos notices de poste à partir des données Seirich',
  images: [
    {
      url: 'https://nelly-bise.fr/posts/notice-poste.jpg',
      type: 'image/jpg',
    },
  ],
}

export default function prestationsLayout({ children }) {
  return <section className="mx-auto max-w-5xl pt-24 pb-12">{children}</section>
}
