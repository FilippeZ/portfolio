import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const isAuthenticated = request.cookies.get('auth')?.value === 'true';

    // If already logged in and visiting /login, redirect to home
    if (isAuthenticated && pathname === '/login') {
        return NextResponse.redirect(new URL('/', request.url));
    }

    // If NOT logged in and NOT on /login, redirect to /login
    if (!isAuthenticated && pathname !== '/login') {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
