import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    res.setHeader("Set-Cookie", [
        `access_token=; HttpOnly; Path=/; Max-Age=0; Secure; SameSite=Strict`,
        `refresh_token=; HttpOnly; Path=/api/auth/refresh; Max-Age=0; Secure; SameSite=Strict`,
    ]);

    res.status(200).json({mesage:"Déconnexion réussie"})

    
}