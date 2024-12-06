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
