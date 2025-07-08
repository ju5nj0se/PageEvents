const btnLogin = document.getElementById("login");
const user = document.getElementById("user");
const pass = document.getElementById("pass");
const main = document.querySelector("main");
const div = document.createElement("div");


btnLogin.addEventListener("click", async(e) => {
    e.preventDefault()
    if (user.value == ""|| pass.value=="") {
        
        div.innerHTML = "<p class='text-red-700'>⚠ Llena todos los campos ⚠</p>"
        main.appendChild(div);
    } else {
        try{
            const response = await fetch('http://localhost:3000/userAdmin');

            const data = response.json()
            
            data.then(res => {
                if (res.userName === user.value && res.password === pass.value ){
                    window.location.assign("./home.html")
                } else {
                    div.innerHTML = "<p class='text-red-700'>⚠ Usuario o contraseña incorrecta ⚠</p>"
                    main.appendChild(div)
                }
                
            })
            
            
        } catch (err) {
            console.error(err.message);
        }
    }
    
    
})

