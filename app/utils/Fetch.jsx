export default async function fetchData(endpoint) {
  const apiUrl = 'http://localhost:3000//api' || process.env.NEXT_PUBLIC_API_URL
  const response = await fetch(`${apiUrl}/${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  })
  if (!response.ok) {
    throw new Error(`Failed to fetch ${endpoint}: ${response.status}`)
  }
  return await response.json()
}
