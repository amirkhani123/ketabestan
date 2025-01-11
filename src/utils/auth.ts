var bcrypt = require('bcryptjs');
const hashedPasswordFa=async(password:string)=>{
    const newPassword=await bcrypt.hash(password,12);
     return newPassword;
}
const checkedPasswordFa=async(password:string,hashedPassword:string)=>{
    const isValid=await bcrypt.compare(password,hashedPassword);
     return isValid;
}
export {hashedPasswordFa,checkedPasswordFa}