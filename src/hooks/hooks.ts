import {  IuseCategories } from "@/interface/interfaces";
import useSWR from "swr"
const fetcher = (url:string) => fetch(url).then((res) => res.json());
const useCategories=():IuseCategories=>{
    const {data,isLoading}=useSWR("/api/book/categories",fetcher);
    return {
        categories:data,isLoading
    }
}
export {useCategories}