function Timeline() {
  const items = [
    {
      year: '2005',
      labo: {
        title: 'Republic Technologies',
        role: 'Technicienne contrôle qualité',
      },
    },
    {
      year: '2006',
      labo: {
        title: 'Lycée Jean Lurçat',
        role: 'Préparatrice',
      },
    },
    {
      year: '2007',
      labo: {
        title: 'CAMP',
        role: 'Technicienne labo (pesticides)',
      },
    },
    {
      year: '2012',
      labo: {
        title: 'CAMP',
        role: 'Technicienne labo (eau)',
        desc: 'Responsable des analyses, référente hygiène et sécurité',
      },
      dev: {
        title: 'CAMP',
        role: 'Mission informatique',
        desc: 'Automatisation de tâches techniques et administratives',
      },
    },
    {
      year: '2024',
      dev: {
        title: 'OpenClassrooms',
        role: 'Formation diplômante en Développement web',
      },
    },
    {
      year: '2025',
      labo: {
        title: 'Colas',
        role: 'Technicienne labo',
      },
      dev: {
        title: 'Projets personnels',
        role: 'Développement web',
        desc: 'Applications React',
      },
    },
  ]

  return (
    <section id="parcours" className="mx-auto max-w-5xl md:px-6">
      <h2 className="text-4xl pt-20 mb-20 text-center dark:text-secondary-color">
        Mon parcours
      </h2>

      <div className="relative flex flex-col items-center p-2 md:p-10">
        {/* Flèche centrale */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 md:w-12 bg-blue-500">
          <div
            className="absolute -top-12 left-1/2 -translate-x-1/2 w-20 h-0 
                        border-l-[40px] border-r-[40px] border-b-[50px] 
                        border-l-transparent border-r-transparent border-b-blue-500"
          ></div>
        </div>

        <div className="space-y-12 w-full max-w-2xl">
          {items.reverse().map((item, i) => (
            <div
              key={i}
              className="relative flex items-center justify-between gap-12"
            >
              {item.labo ? (
                <div className="bg-teal-600 text-white px-2 md:px-4 py-3 rounded-lg shadow-lg w-64 text-sm text-center">
                  <div className="font-bold">{item.labo.title}</div>
                  <div>{item.labo.role}</div>
                  <div>{item.labo.desc}</div>
                </div>
              ) : (
                <div className="w-64"></div>
              )}

              <div className="absolute left-1/2 -translate-x-1/2 text-white text-xs md:text-sm px-3 py-1">
                {item.year}
              </div>

              {item.dev ? (
                <div className="bg-purple-600 text-white px-2 md:px-4 py-3 rounded-lg shadow-lg w-64 text-sm text-center">
                  <div className="font-bold">{item.dev.title}</div>
                  <div>{item.dev.role}</div>
                  <div>{item.dev.desc}</div>
                </div>
              ) : (
                <div className="w-64"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline
