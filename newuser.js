const personName = document.querySelector(".name_section")
const email = document.querySelector(".email_section")
const password =document.querySelector(".password")
const toConfirmThePassword = document.querySelector(".confirm_password")
const summitBtn = document. querySelector(".btm")
const dataBase=[]

summitBtn.addEventListener("click", activity )

function activity() {
    const inputedName = personName.value.trim()
    const inputedEmail =email.value.trim()
    const inputedpassword = password. value.trim()
    const secondConfirm = toConfirmThePassword.value.trim()
   


    if(inputedName=="" || inputedEmail=="" || inputedpassword=="" || secondConfirm==""){
        alert("all field are required")
        
    } else if(!inputedEmail.includes("@gmail.com")){
        alert("this is not an email")

    }
    else if (inputedpassword !==secondConfirm){
        alert("the inputted password must be the same as the confirmed password")
        

}
else if (inputedpassword.length < 8){
    alert("password must be up to 8 characters ")
}

else {
    const obj ={
        username: inputedName,
        userEmail: inputedEmail,
        userPassword:inputedpassword,
    }
    dataBase.push(obj)
    personName.value=""
    email.value =""
    password.value=""
    toConfirmThePassword. value=""

    

}

}