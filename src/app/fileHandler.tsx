import {promises as fs} from "fs" ;

export async function getData(){
    // const path = process.cwd()+"../../../../public/recipes.json"
    const path = process.cwd()+"/public/recipes.json"
    const file = await fs.readFile(path,'utf-8')
    return JSON.parse(file)
  }