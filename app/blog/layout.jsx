export const metadata = {
  title: 'Prévention du risque chimique – Nelly Bise',
  description:
    'Retrouvez mes articles sur la prévention du risque chimique en entreprise',
}

export default function prestationsLayout({ children }) {
  return (
    <section className="mx-auto max-w-5xl px-2 md:px-6 pt-24 pb-12">
      {children}
    </section>
  )
}
