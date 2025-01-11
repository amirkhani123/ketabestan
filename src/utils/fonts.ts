import localFont from "next/font/local";
const vazirmatn=localFont({
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
      }
    ]
  });
  export default vazirmatn;