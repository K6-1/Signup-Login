let userName=["Kanchan","Anish","Nishan","Abhi"];
function signup(str){
   let filteredData=userName.filter((el,i)=> el==str);
if(filteredData.length==0){
    //i need to push
    userName.push(str)
    console.log("Signup Sucessfull.....")
}
else{
    console.log("Already Resistered")
}
}
signup("Ajay")
signup("Ajay")




function login(str,password){
    let filteredData=userName.filter((el,i)=> el==str);
 if(filteredData.length==0){
     
     console.log("User Not Found.....Please Signup")
 }else{
    if(password=="Emp@123"){
        console.log("Login Sucessfull....")
    }else{
      console.log("Wrong Password.....")
    }
 }
 }
 login("Kanchan","Emp@123")