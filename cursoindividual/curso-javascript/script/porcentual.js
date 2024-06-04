function readImage() {
 
    if (this.files && this.files[0]) { 

        console.log(this.files[0])
        var file = new FileReader();
      
        file.onload = function(e) {
            var resulta = e.target.result;
            document.getElementById("img-perfil-menu").src = resulta;  
            document.querySelector("#foto-perfil img").src = resulta;
            console.log(e.target.result)
        };  
      
        file.readAsDataURL(this.files[0]);

    }
}


document.getElementById("inputImg").addEventListener("change", readImage, false);