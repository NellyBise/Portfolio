import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import Cookies from 'js-cookie'

export function middleware(request) {
  const token = Cookies.get('token')
  console.log('ici')
  if (token) {
    try {
      jwt.verify(token, process.env.JWT_SECRET)
      return NextResponse.next()
    } catch (error) {
      console.error('Token verification failed:', error)
      return NextResponse.redirect('http://localhost:3000/login')
    }
  } else {
    return NextResponse.redirect('http://localhost:3000/login')
  }
}

export const config = {
  matcher: ['/admin'],
}
