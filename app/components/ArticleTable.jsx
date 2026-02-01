export default function ArticleTable({ columns, rows, caption }) {
  return (
    <figure className="my-10 text-center">
      {caption && (
        <figcaption className="my-2 text-sm text-gray-600">
          {caption}
        </figcaption>
      )}
      <div className="relative overflow-x-auto ">
        <table className="min-w-full border-collapse rounded-xl border border-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((col, i) => (
                <th
                  key={i}
                  scope="col"
                  className="px-4 py-3 text-center font-semibold text-gray-700 border border-gray-200"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {rows.map((row, i) => (
              <tr
                key={i}
                className="even:bg-gray-50/50 hover:bg-gray-50 transition-colors "
              >
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className="px-4 py-3 text-gray-800 align-top border border-gray-200"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  )
}
