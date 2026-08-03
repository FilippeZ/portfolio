import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { username, password } = body;

        if (username === 'admin' && password === 'portfolio2026') {
            const response = NextResponse.json({ success: true, message: 'Authenticated successfully' });
            response.cookies.set({
                name: 'auth',
                value: 'true',
                path: '/',
                maxAge: 86400,
                sameSite: 'strict',
                httpOnly: false,
            });
            return response;
        }

        return NextResponse.json({ success: false, error: 'Invalid username or password' }, { status: 401 });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Authentication failed' }, { status: 500 });
    }
}
