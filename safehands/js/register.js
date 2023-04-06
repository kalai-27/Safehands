const form = document.querySelector('.form form'),
submitbtn = form.querySelector('.submit input'),
errortxt = form.querySelector('.error-text');

form.onsubmit = (e) => {
    e.preventDefault();
}

submitbtn.onclick = () =>{
    //start ajax

    let xhr = new XMLHttpRequest0(); //create xml object
    xhr.open("POST",".php/signup.php" ,true);
    xhr.onload = () => {
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status== 200){   
                let data = xhr.response;
                if(date == "success"){
                     location.herf ="./verify.php"
                }
                else{
                    errortxt.textContent = data;
                    error.style.display ="block" ;
                }
            }
        }
    }
    //send data through ajax to php 
    let formData = new formData(form); //creating new object form data
    xhr.send(formData); // sending data to php
}













