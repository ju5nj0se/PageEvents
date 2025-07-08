const sectionEvents = document.getElementById('events');
const btnDesktop = document.getElementById('desktop');
const content = document.getElementById("content");
const url = "http://localhost:3000"

const sectionAdminEvents = "<h3 class='text-3xl font-bold'>Administrar eventos</h3><div class='flex justify-start mt-6 ml-6'><button class='p-2 rounded-full bg-green-500 hover:-translate-y-1 hover:scale-105 transition-transform cursor-pointer font-bold' id='addEvent'>Añadir nuevo evento</button></div><div id='listEvents'class='m-6 ml-9'></div>";


// Fuction to print the principal layout in the DOM
async function PrintLayoutEvents() {
    content.innerHTML = sectionAdminEvents
    const btnAddEvent = document.getElementById("addEvent");
    const listEvents = document.getElementById("listEvents");

    try{
        listEvents.innerHTML += '<p>Cargando eventos...</p>'
        const response = await fetch("http://localhost:3000/events");
        const data = response.json()
        document.querySelector('#listEvents p').remove()
        
        data.then(arr => {
            
           for (let i of arr) {
                let styleActive = ""
                if (i.state == "inactivo") {
                    styleActive = "<p class='text-red-700'>Inactivo</p>"
                } else if (i.state == "activo") {
                    styleActive = "<p class='text-green-700'>Activo</p>"
                }
 
                listEvents.innerHTML += `<div id='event' class='flex flex-wrap border-2 border-solid rounded-4xl h-auto p-5 m-3 w-2/4 w-max-auto'><img src='${i.urlIMG}' class='rounded-3xl w-1/4 h-auto'><div class="ml-5"><h3 class="text-xl font-bold w-1/3">${i.title}</h3><p class='p-3 w-3/4 text-justify'>${i.description}</p></div><dl class="w-1/3"><dt class="font-bold">Fecha</dt><dd>${i.date}</dd><dt class="font-bold">Estado</dt><dd>${styleActive}</dd></dl></div>`
            }
        })
        
    } catch (err) {
        console.error(`ERROR: ${err.message}`);
        listEvents.innerHTML = '<p>Ocurrio un error 😥</p>'
    }  

    btnAddEvent.addEventListener("click", () => {

    })
}

//Function for addEvent
function addEvent(){
    

}


sectionEvents.addEventListener("click", (e) => {
    e.preventDefault();

    PrintLayoutEvents()
})  
  






