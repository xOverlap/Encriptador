    function mostrar(){
        if(document.getElementById("output").value!=""){
            document.getElementById("output").style.display = "block";
            document.getElementById("copiar").style.display = "block";
            document.getElementById("sin-mensaje").style.display = "none";
        }
        if(document.getElementById("output").value===""){
            document.getElementById("sin-mensaje").style.display = "block"; 
        }
    }

    function acentos(cadena){
        return cadena.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-zA-Z0-9 ]/g,"");  
    }

    function copiar(){
        navigator.clipboard.writeText(document.getElementById("output").value); return false;
    }

    let llaves=["e","i","a","o","u","enter","imes","ai","ober","ufat"];
    let output=document.getElementById("output");
    let input=document.getElementById("input");

    input.addEventListener("keyup", e=>{
        input.value=acentos(input.value.toLowerCase());
    });

    let botonEncriptar=document.getElementById("boton-1");
    let botonDesencriptar=document.getElementById("boton-2");
    let botonCopiar=document.getElementById("copiar");

    function encriptar(){
        output.value=input.value;
        for(let x=0;x<5;x++){
            output.value=output.value.replaceAll(llaves[x],llaves[x+5]);
        }
        mostrar();
        return false;
    }

    function desencriptar(){
        output.value=input.value;
        for(let x=4;x>=0;x--){
            output.value=output.value.replaceAll(llaves[x+5],llaves[x]);
        }
        mostrar(); 
        return false;
    }
    
    botonEncriptar.onclick=encriptar; 
    botonDesencriptar.onclick=desencriptar;
    botonCopiar.onclick=copiar;