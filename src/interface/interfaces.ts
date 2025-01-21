interface Iformdata{
    username:string,
    password:string,
    repassword:string
}
interface IuserData { 
     firstname: string ,
     lastname: string ,
     phone: string ,
     address: string ,
     userId: string ,
}
interface Iuser{
     address: string,
      createdAt: Date | string,
      firstname: string,
      lastname: string,
      phone: string,
      role: string,
      updatedAt: Date,
      username: string,
      __v: number,
      _id: string,
}
interface IBook{
    _id?:string,
    name:string,
    price:number,
    author:string,
    publisher:string,
    numberpage:number,
    datepublish:Date ,
    image:string ,
    categories:string
}
interface Icategories{
    name:string,
   _id:string
}


export type {Iformdata,IuserData,Iuser,Icategories,IBook}