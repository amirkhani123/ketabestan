import localFont from "next/font/local";
const myFonts=localFont({
    src:[
      {
        path:"../../public/fonts/Vazirmatn-Regular.woff2",
        style:"normal",
        weight:"200",
      },{
        path:"../../public/fonts/Vazirmatn-Medium.woff2",
        style:"normal",
        weight:"300",
      },{
        path:"../../public/fonts/Vazirmatn-SemiBold.woff2",
        style:"normal",
        weight:"400",
      },{
        path:"../../public/fonts/Vazirmatn-Bold.woff2",
        style:"normal",
        weight:"500",
      },{
        path:"../../public/fonts/NotoNastaliqUrdu-Bold.ttf",
        style:"normal",
        weight:"700",
      }
    ]
  });
  export default myFonts;