import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export function middleware(request) {
  console.log('ici')
  const cookieStore = cookies()
  const session = cookieStore.get('session')
  if (session) {
    return NextResponse.next()
  } else {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: ['/admin'],
}
