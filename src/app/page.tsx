"use server "
import HomePageT from "@/components/template/HomePageT";
import connectDB from "@/connections/connectDB";

  export default  async function Home() {
    await connectDB()
    const res=await fetch(`${process.env.MY_URL}/api/book`,{cache:"force-cache"});
    let result=await res.json();
    result=JSON.parse(JSON.stringify(result.data))
    result.splice(4)
  return (
  <HomePageT data={result}/>
  );
}
