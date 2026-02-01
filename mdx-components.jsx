export function useMDXComponents(components) {
  return {
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold mt-12">{children}</h2>
    ),
    h3: ({ children }) => <h3 className="font-semibold mt-8">{children}</h3>,
    p: ({ children }) => <p className="my-4 leading-7">{children}</p>,
    a: ({ href, children }) => (
      <a href={href} className="text-blue-600 hover:underline">
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul
        className="mb-1 pl-4"
        style={{ listStyleType: 'disc', listStylePosition: 'inside' }}
      >
        {children}
      </ul>
    ),
    li: ({ children }) => <li className="py-1">{children}</li>,
    ...components,
  }
}
