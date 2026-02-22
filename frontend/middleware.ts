import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const authCookie = request.cookies.get('auth');
    const { pathname } = request.nextUrl;

    // If the user is authenticated and tries to access /login, redirect to home
    if (authCookie && pathname === '/login') {
        return NextResponse.redirect(new URL('/', request.url));
    }

    // If the user is NOT authenticated and tries to access protected routes, redirect to /login
    // We exclude /login and /api from redirection
    if (!authCookie && pathname !== '/login' && !pathname.startsWith('/api') && !pathname.startsWith('/_next') && !pathname.includes('.')) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
