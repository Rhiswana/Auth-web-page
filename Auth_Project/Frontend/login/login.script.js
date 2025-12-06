
function login(){
     const email = document.getElementById("Email").value;
     const password = document.getElementById("password").value;
     fetch("https://auth-web-page.onrender.com/login",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({email,password})

     })
     .then(res=>res.text())
     .then(data=>{
          document.getElementById("errorMsg").innerText=data;
         if(data == "Successfully login"){
             window.location.href = "../Dashboard/Dashboard.html";
         }
     })
     
}


