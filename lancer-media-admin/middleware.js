export function middleware(request) {
  const currentUser = request.cookies.get('__session')?.value
 
  if (!currentUser && !request.nextUrl.pathname.startsWith('/sign-in')) {
    console.log("not login", request.url, request.nextUrl);
    return Response.redirect(new URL('/sign-in', request.url))
  }
  
}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}