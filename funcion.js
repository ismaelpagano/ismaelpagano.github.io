var texto = "Querés aprender programación de videojuegos?";

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
            }, 50)
            else{
                this.setTimeout(function(){
                    tex2 = '';
                    loop(tex1, tex2, 0);
                }, 5000)
            }
    }
    loop(texto, texto2, 0)
}

function flecha(x, y){
    for(var i=0; i<y; i++){
        var r = "r" + i;
        var row = document.createElement("tr");
        row.id = "r" + i;
        document.getElementById("tabla").appendChild(row);
        for(var h=0; h<x; h++){
            var data = document.createElement("td");
            data.id = "p" + i + h;
            data.className = "pixel";
            document.getElementById("r"+i).appendChild(data);
        }
    }
}


var dibujo = new Array("p02","p12","p22","p32","p42","p52","p62","p70","p72","p74","p81","p82","p83","p92");

function dibujar(dib, x, y){
    for(var i=0; i<y; i++){
        for(var h=0; h<x; h++){
            var bool = dib.includes("p" + i + h);
            if(bool){
                document.getElementById("p" + i + h).style.backgroundColor = "white";
            }
        }
    }
}

escribir(texto);

