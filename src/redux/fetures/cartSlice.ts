import { setTotalprice, setTotalQty } from "@/helper/helpers";
import { IBook, IstateCard } from "@/interface/interfaces"
import {  createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import toast from "react-hot-toast";
const initialState: IstateCard ={
    books: [],
    totalQty: 0,
    totalPrice: 0
};
const cartSlice=createSlice({
    name:"cartSlice",
    initialState,
    reducers:{
        addBook:(state,action:PayloadAction<IBook>)=>{
            const existed=state.books.find((item)=>item._id===action.payload._id);
            if(!existed){
                state.books.push({...action.payload,qty:1});
                state.totalQty=setTotalQty(state.books);
                state.totalPrice=setTotalprice(state.books);
                toast.success("با موفقیت اضافه شد😀");
            } 
        },
        deleteBook:(state,action:PayloadAction<IBook>)=>{
            const index=state.books.findIndex(item=>item._id===action.payload._id);
            if(index>=0){
                state.books.splice(index,1);
                state.totalQty=setTotalQty(state.books);
                state.totalPrice=setTotalprice(state.books);
                toast.success("با موفقیت حذف شد🥲");
            }
        },
        increment:(state,action:PayloadAction<IBook>)=>{
            const findBook=state.books.find((item)=>item._id ===action.payload._id);
            if(findBook){
                findBook.qty++;
                state.totalQty=setTotalQty(state.books);
              state.totalPrice=setTotalprice(state.books);
              toast.success("با موفقیت افزایش یافت 😀")
            }
        },
        decrement:(state,action:PayloadAction<IBook>)=>{
            const findBook=state.books.find((item)=>item._id ===action.payload._id);
            if(findBook){
                findBook.qty--;
                state.totalQty=setTotalQty(state.books);
                state.totalPrice=setTotalprice(state.books);
                toast.success("با موفقیت کم شد 🥲");
            }
        },
        checkOut:(state)=>{
            state.books=[];
            state.totalPrice=0;
            state.totalQty=0;
        }
    }
});
export const useGetCart=()=>useSelector((state:RootState)=>state.cartSlice);
export default cartSlice.reducer;
export const {increment,decrement,deleteBook,addBook,checkOut}=cartSlice.actions;