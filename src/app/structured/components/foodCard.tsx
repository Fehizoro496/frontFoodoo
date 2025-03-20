"use client"

import Image from "next/image";
import { useRouter } from 'next/navigation';
import HeartIcon from './icons/heartIcon';
import { useEffect, useState } from "react";
import StarRatingComponent from 'react-star-rating-component';

interface IFoodCardDesc{
    id:number,
    name : string,
    duration : number,
    description : string,
    imageURL : string
}

export default function FoodCard(recipe:IFoodCardDesc){

    const router = useRouter()
    const [rating,setRating] = useState(Math.floor((Math.random()*100)%6))
    const [isFavorite,setIsFavorite] = useState(rating>=3)
    const handleStarClick = (nextValue:number,prevValue:number,name:string)=>{
        if (nextValue===prevValue) setRating(0)
        else setRating(nextValue)
    }

    function goToRecipe(){
        router.push(`/recipe/${recipe.id}`)
    } 

    return(<>
        <div className="aspect-5/6 grid grid-rows-3 rounded-lg">
            <div className="row-span-3 rounded-t-lg bg-white overflow-hidden relative p-3">
                <button onClick={()=>setIsFavorite(!isFavorite)} className={`absolute right-5 top-5 ${isFavorite?'text-red-500':"text-slate-100 opacity-60 hover:text-red-300"}`}>
                    <HeartIcon fillColor={true}/>
                </button>
                <Image src={recipe.imageURL} unoptimized width={1} height={1} style={{minHeight:'100%',minWidth:'100%', objectFit:'cover'}} className="rounded-lg" alt={`${recipe.name} image`} />
            </div>
            <div className="row-span-1 rounded-b-lg bg-white flex flex-col items-stretch px-4">
                <div className="flex-1 font-bold content-center text-center items-center flex flex-col">
                    <div>{recipe.name}</div>
                    <div className="flex items-center">
                        <StarRatingComponent
                            name='rate'
                            starCount={5}
                            value={rating}
                            onStarClick={handleStarClick}
                            emptyStarColor={'#ffb40044'}
                        />
                    </div>
                </div>
                <hr className="pb-3 opacity-50" />
                <div className="mb-3 flex items-center justify-between">
                    <div className="text-sm font-medium text-gray-400 text-center">
                        {recipe.duration} min.
                    </div>
                    <button onClick={goToRecipe} className="bg-green-50 font-semibold text-xs text-green-500 py-2 px-5 rounded-md">View Recipe</button>
                    {/* <button onClick={()=>router?.push(`/recipe/${recipe.id}`)} className="bg-green-50 font-semibold text-xs text-green-500 py-2 px-5 rounded-md">View Recipe</button> */}
                </div>
            </div>
        </div>
    </>)
}