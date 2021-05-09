var texto = "Querés aprender programación?";

function escribir(texto1){
    var texto2 = '';

    function loop(tex1, tex2, i){
            var char = tex1[i];
            tex2 += char;
            i++;
            texto2 = tex2;
            document.getElementById("texto").innerHTML = texto2;
            if(i<tex1.length)
                this.setTimeout(function(){
                    loop(tex1, tex2, i);
            }, 100);
        console.log("hola");
    }
    
    loop(texto, texto2, 0)

    console.log(texto2)
}


escribir(texto);
