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
      }
    ]
  });
  export default myFonts;