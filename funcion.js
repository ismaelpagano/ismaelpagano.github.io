var texto = "Querés aprender programación de videojuegos?";

var y = 0;

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


function funcion(event){
    var dy = event.deltaY;
    y = y - dy;
    var obj = document.getElementById("contenedor");
    var h = getComputedStyle(obj);
    var obj2 = document.getElementById("pagina");
    var h2 = getComputedStyle(obj2)
    h2 = parseInt(h2.height,10);
    h = parseInt(h.height, 10);
    h = -h2 + h;
    if(y > 0){
        y = 0;
    } else if ( y < h){
        y = h;
    }
    document.getElementById("pagina").style.top = y + "px"; 
}

function scroll1(event){
    var arr = new Array(0, 1, 2, 3);
    var dy = event.deltaY;
    if(dy > 0 && y != 3){
        y++;
    } else  if (dy < 0 && y != 0){
        y--;
    }
    var sec = "sec" + y; 
    var h = document.getElementById(sec);
    h = h.offsetTop;
    document.getElementById("pagina").style.top = -h + "px"; 
    console.log(h);
    console.log(y);
}


