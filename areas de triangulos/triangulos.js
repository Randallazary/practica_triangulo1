function calculadora(){
var L1= parseFloat(document.getElementById("L1").value);
var L2= parseFloat(document.getElementById("L2").value);
var L3= parseFloat(document.getElementById("L3").value);
 if(L1 + L2>L3 && L1+L3 > L2 && L2+L3>L1){
 var p = L1+L2+L3;
 
 var s = (L1+L2+L3)/2;

 var area = Math.sqrt(s*(s-L1)*(s-L2)*(s-L3));
 document.getElementById("res").innerHTML="el perimetro es"+p.toFixed(2);
 document.getElementById("r").innerHTML="el semiperimetro es "+s.toFixed(2);
 document.getElementById("resultado").innerHTML="el area es "+area.toFixed(2);

}
else{
    document.getElementById("resultado").innerHTML="los lados ingresados no forman ningun triangulo valido"
}
}