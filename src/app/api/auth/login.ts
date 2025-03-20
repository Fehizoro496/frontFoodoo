import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req:NextApiRequest,res:NextApiResponse) {
    if (req.method!=="POST") return res.status(405).json({message:'Méthode non authorisée'})

    try {

        const {email, password} = req.body
        const response = await axios.post('localhost:3001/auth/login',{email,password})
        const {access_token, refresh_token} = response.data;

        res.setHeader("Set-Cookie", [
            `access_token=${access_token}; HttpOnly; Path=/; Max-Age=900; Secure; SameSite=Strict`,
            `refresh_token=${refresh_token}; HttpOnly; Path=/api/auth/refresh; Max-Age=604800; Secure; SameSite=Strict`,
        ]);

        res.status(200).json({message:'Login réussi'})
        
    } catch (error) {
        res.status(401).json({message:"Identifiant invalide"})
    }
}