import axios from "axios";
import { NEXT_PUBLIC_API_URL } from "../../constant";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req:NextApiRequest, res: NextApiResponse) {
    try {
        const token = req.cookies.access_token

        if (!token) return res.status(401).json({message:'Non authentifié'});

        const response = await axios.get(`http://${NEXT_PUBLIC_API_URL}/auth/me`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        
        return res.status(200).json(response.data);
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}