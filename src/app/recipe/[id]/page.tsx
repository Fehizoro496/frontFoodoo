// "use client"
import Image from "next/image";
// import { useRouter } from "next/navigation";
import Nav from "./nav";

// export async function getServerSideProps(){
//   const res = await fetch(`localhost:3001/recipes/1`)
//   const data = res.json()
//   return {
//     props : {
//       data,
//     }
//   }
// }


export default async function Page({params} : { params : Promise<{id : string}> } ) {
  
  // const allRecipes : Array<IRecipe> = await getData()
  const recipeId = (await params).id
  // const [recipe,setRecipe] = useState(null)
  const data = await fetch(`http://localhost:3001/recipes/${recipeId}`)
  const recipe = await data.json()
  // const router = useRouter()
  // return <>{recipe.name}</>
  return (
  <div className='h-screen w-screen bg-amber-100 grid grid-rows-10 p-4 gap-4'>
    <div className="row-span-1 bg-red-200 flex items-center px-4">
      {/* <button onClick={()=>useRouter()?.back()}>retour</button> */}
      <Nav/>
    </div>

    <div className="row-span-9 grid grid-cols-11 gap-4">
      <div className='col-span-3 bg-blue-200 p-4 overflow-scroll'>   
        <div className="text-2xl font-extrabold">
              {recipe.name}
        </div>
        <div className='h-60 w-80 overflow-hidden'>
          <Image src={`http://127.0.0.1:3001/images/${recipe.name}.jpg`} unoptimized width={1} height={1} style={{minHeight:'100%',minWidth:'100%', objectFit:'cover'}} alt={`${recipe['name']} image`} />
        </div>
        <div className=''>
          <div className='text-xl font-semibold'>Description</div>
            {recipe.description}
        </div>
        <br />
        <span className='text-xl font-semibold'>Ingredients</span>
        <ul>
          {recipe.ingredients.map((el:string)=><li>{el}</li>)}
        </ul>
      </div>

      <div className="col-span-8 bg-green-200 p-4">
        <span className='text-xl font-semibold'>Steps</span>
        <ul>
          {recipe.steps.map((el:string)=><li>{el}</li>)}
        </ul>
      </div>
    </div>
  </div>
)
}