/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "40%";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0%";
}


$("#menu").on('click',function(){
    localStorage.setItem("leccion","menu");   
});

$("#salir").on('click',function(){
    var r = confirm("¿Realmente desea salir?");
    if(r==true){
        localStorage.removeItem("usuario");
        window.location.replace("index.html");
    }
});
