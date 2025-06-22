import { NextResponse } from "next/server";
import { NEXT_PUBLIC_API_URL } from "@/app/constant";
import axios from "axios";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, password } = body;

        const response = await axios.post(`${NEXT_PUBLIC_API_URL}/auth/login`, 
            { email, password },
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        );

        const { data } = response;
        
        // Set the auth cookie from the backend response if needed
        const res = NextResponse.json(data);
        res.cookies.set('auth_token', data.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/'
        });

        return res;
    } catch (error: any) {
        return NextResponse.json(
            { message: error.response?.data?.message || 'Login failed' },
            { status: error.response?.status || 500 }
        );
    }
}
