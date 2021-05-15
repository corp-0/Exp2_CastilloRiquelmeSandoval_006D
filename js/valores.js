var free=0;
var silver=19.99; 
var gold=54.99;

var dict ={
    "free": free,
    "silver": silver,
    "gold": gold
}
function dropdownc(dropdownd){
    
   var dolar=document.getElementById("valordolar");
   dolar.innerHTML=dict[dropdownd.value]+" USD";
  

   let url="https://mindicador.cl/api/dolar";
  (function($) {
      $.get(url,function(respuesta)
          {            
             var x=Math.round(respuesta["serie"][0]["valor"]*dict[dropdownd.value]);
             $("#valorclp").text(x+" clp");
          }, "json")
  })(jQuery);
} 
 
