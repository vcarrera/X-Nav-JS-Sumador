function add(){
        var vari = document.getElementById("op").innerHTML;
        var num = vari.split("+");
        var a = parseInt(num[0]);
        var b = parseInt(num[1]);
        var c = a+ b;
        var res = document.getElementById("res");
        res.innerHTML="="+c.toString();
    };

function rand(){
        var vari = document.getElementById("op");
        vari.innerHTML=(Math.floor(Math.random()*10+1)+"+"+Math.floor(Math.random()*10+1));
}

