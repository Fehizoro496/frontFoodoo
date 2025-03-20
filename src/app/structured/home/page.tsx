"use client"

import axiosInstance from "@/app/api/axios";
import FoodCard from "../components/foodCard";
import { useEffect, useState } from "react";
import { NEXT_PUBLIC_API_URL } from "@/app/constant";
import { isAxiosError } from "axios";

export interface IRecipe{
  id:number,
  name:string,
  image:string,
  description:string,
  ingredients:Array<string>,
  steps:Array<string>,
  categorie:string
}

const fetchRecipes = async () => {
  try {
    console.log('Attempting to fetch recipes...');
    const response = await axiosInstance.get('/recipes/');
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error('Axios error:', {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data
      });
    }
    throw error;
  }
}

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        const data = await fetchRecipes();
        setRecipes(data);
        setError(null);
      } catch (error) {
        setRecipes([]);
        setError('Failed to fetch recipes. Please check the console for details.');
      }
    };
    
    loadRecipes();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {recipes && recipes.map((el:IRecipe) =>
        <li key={el.id}>
          <FoodCard duration={30} name={el.name} id={el.id} key={el.id} description={el.description} imageURL={`${axiosInstance.defaults.baseURL}/images/${el.name}.jpg`}/>
        </li>
      )}
    </>
  );
}