$(document).ready(function()
{
    alert("Bienvenido");
    var uno=0,dos=0,tres=0,cuatro=0,cinco=0,seis=0,siete=0,ocho=0,nueve=0;
    function verificar(){
        if((uno+dos+tres)=='6')
        {
            Ganador();
        }
        if((cuatro+cinco+seis)=='15')
        {
            Ganador();
        }
        if((siete+ocho+nueve)=='24')
        {
            Ganador();
        }
        if((uno+cuatro+siete)=='12')
        {
            Ganador();
        }
        if((dos+cinco+ocho)=='15')
        {
            Ganador();
        }
        if((tres+seis+nueve)=='18')
        {
            Ganador();
        }
        if((uno+cinco+nueve)=='15')
        {
            Ganador();
        }
        if((tres+cinco+siete)=='15')
        {
            Ganador();
        }
    }
    function Ganador() {
        alert("GANASTES!!")
    }
    function Ganador2() {
        alert("HAS PERDIDO!!!! :(")
    }
    function Compu(){
        var i=0;
        do{
        var x=Math.floor(Math.random() * 10);
        if (x== '1' && uno==0)
        {
            $("#1").css({"background-color":"red"})
            $("#1").text('O').css({"font-size":"15px", "color":"#ffffff"})
            i=1;
        }
        if (x=='2' && dos==0)
        {
            $("#2").css({"background-color":"red"})
            $("#2").text('O').css({"font-size":"15px", "color":"#ffffff"})
            i=1;
        }
        if (x=='3' && tres==0)
        {
            $("#3").css({"background-color":"red"})
            $("#3").text('O').css({"font-size":"15px", "color":"#ffffff"})
            i=1;
        }
        if (x=='4' && cuatro==0)
        {
            $("#4").css({"background-color":"red"})
            $("#4").text('O').css({"font-size":"15px", "color":"#ffffff"})
            i=1;
        }
        if (x=='5' && cinco==0)
        {
            $("#5").css({"background-color":"red"})
            $("#5").text('O').css({"font-size":"15px", "color":"#ffffff"})
            i=1;
        }
        if (x=='6' && seis==0)
        {
            $("#6").css({"background-color":"red"})
            $("#6").text('O').css({"font-size":"15px", "color":"#ffffff"})
            i=1;
        }
        if (x=='7' && siete==0)
        {
            $("#7").css({"background-color":"red"})
            $("#7").text('O').css({"font-size":"15px", "color":"#ffffff"})
            $("#7").html(img);
            i=1;
        }
        if (x=='8' && ocho==0)
        {
            $("#8").css({"background-color":"red"})
            $("#8").text('O').css({"font-size":"15px", "color":"#ffffff"})
            i=1;
        }
        if (x=='9' && nueve==0)
        {
            $("#9").css({"background-color":"red"})
            $("#9").text('O').css({"font-size":"15px", "color":"#ffffff"})
            i=1;
        }
        }while(i!=1)
    }
    // function Equis(){
    //         ().css({"background-color":"blue"})
    //         ().text('X').css({"font-size":"20px"});
    //     }
        $("#1").click(function(){
            if(uno==0){
            uno=1;
            $("#1").css({"background-color":"blue"})
            $("#1").text('X').css({"font-size":"15px", "color":"#ffffff"})
            verificar();
            Compu();
            }
        })
        $("#2").click(function(){
            if(dos==0){
            dos=2;
            $("#2").css({"background-color":"blue"})
            $("#2").text('X').css({"font-size":"15px", "color":"#ffffff"})
            verificar();
            Compu();
            }
        })
        $("#3").click(function(){
            if(tres==0){
            tres=3;
            $("#3").css({"background-color":"blue"})
            $("#3").text('X').css({"font-size":"15px", "color":"#ffffff"})
            verificar();
            Compu();
            }
        })
        $("#4").click(function(){
            if(cuatro==0){
            cuatro=4;
            $("#4").css({"background-color":"blue"})
            $("#4").text('X').css({"font-size":"15px", "color":"#ffffff"})
            verificar();
            Compu();
            }
        })
        $("#5").click(function(){
            if(cinco==0){
            cinco=5;
            $("#5").css({"background-color":"blue"})
            $("#5").text('X').css({"font-size":"15px", "color":"#ffffff"})
            verificar();
            Compu();
            }
        })
        $("#6").click(function(){
            if(seis==0){
            seis=6;
            $("#6").css({"background-color":"blue"})
            $("#6").text('X').css({"font-size":"15px", "color":"#ffffff"})
            verificar();
            Compu();
            }
        })
        $("#7").click(function(){
            if(siete==0){
            siete=7;
            $("#7").css({"background-color":"blue"})
            $("#7").text('X').css({"font-size":"15px", "color":"#ffffff"})
            verificar();      
            Compu();
            }      
        })
        $("#8").click(function(){
            if(ocho==0){
            ocho=8;
            $("#8").css({"background-color":"blue"})
            $("#8").text('X').css({"font-size":"15px", "color":"#ffffff"})
            verificar();
            Compu();
            }
        })
        $("#9").click(function(){
            if(nueve==0){
            nueve=9;
            $("#9").css({"background-color":"blue"})
            $("#9").text('X').css({"font-size":"15px", "color":"#ffffff"})
            verificar();
            Compu();
            }
        })
});