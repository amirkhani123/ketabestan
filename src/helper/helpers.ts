import { IBook } from "@/interface/interfaces";

const setTotalQty=(books:IBook[])=>{
    return books.reduce((acc,cur)=>acc+cur.qty,0);
};
const setTotalprice=(books:IBook[])=>{
    return books.reduce((acc,cur)=>acc+(cur.price *cur.qty),0);
};
export {setTotalQty,setTotalprice}