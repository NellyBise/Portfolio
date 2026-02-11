export function useMDXComponents(components) {
  return {
    h2: ({ children }) => (
      <h2
        className="text-2xl font-semibold"
        style={{ marginTop: '44px', marginBottom: '20px' }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        className="font-semibold"
        style={{ marginTop: '16px', marginBottom: '8px' }}
      >
        {children}
      </h3>
    ),
    p: ({ children }) => <p className="my-4 leading-7">{children}</p>,
    a: ({ href, children }) => (
      <a href={href} className="text-blue-600 hover:underline">
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul
        className="my-2"
        style={{
          listStyleType: 'disc',
          listStylePosition: 'inside',
          marginLeft: '10px',
        }}
      >
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol
        className="my-2"
        style={{
          listStyleType: 'number',
          listStylePosition: 'inside',
          marginLeft: '10px',
        }}
      >
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="py-1">{children}</li>,
    ...components,
  }
}
