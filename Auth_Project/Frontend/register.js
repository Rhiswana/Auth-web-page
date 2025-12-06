 function Register(){
    const username = document.getElementById("Name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("Password").value;

    fetch("https://auth-web-page.onrender.com/register",({
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({username,email,password})
    }))
    .then(res=>res.text())
    .then(data=>{
         document.getElementById("errorMsg").innerText=data;
        if(data=="successfully register"){
              window.location.href="./index.html"
        }
    })
 }
        
        
    