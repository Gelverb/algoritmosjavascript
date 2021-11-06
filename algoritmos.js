
function operacionesBasicas(){
    //Primero declaramos las variables a utilizar en el
    //algoritmo

    var a = 0;
    var b = 0;
    var suma = 0;
    var resta = 0;
    var multi = 0;
    var divi = 0;
    
    a = parseFloat(prompt("Por favor ingrese el primer valor numerico"));
    b = parseFloat(prompt("Por favor ingrese el segundo valor nuemrico"));
    
    suma = a + b;
    resta = a - b;
    multi = a * b;
    divi = a / b;
    
    alert("El resultado de la suma es: " + suma);
    alert("El resultado de la resta es: " + resta);
    alert("El resultado de la multi es: " + multi);
    alert("El resultado de la divi es: " + divi);
}

function promedio(){
    //El promedio se calcula la cantidad de notas
    //y dividir el resultado de la suma en esta cantidad

    var nota1 = 0;
    var nota1 = 0;
    var nota1 = 0;
    var nota1 = 0;
    var nota1 = 0;
    var promedio = 0;

    nota1 = parseFloat(prompt("Por favor ingrese la primera nota"));
    nota2 = parseFloat(prompt("Por favor ingrese la segunda nota"));
    nota3 = parseFloat(prompt("Por favor ingrese la tercera nota"));
    nota4 = parseFloat(prompt("Por favor ingrese la cuarta nota"));
    nota5 = parseFloat(prompt("Por favor ingrese la quinta nota"));

    promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
    if (promedio <= 2.9) {
        alert("REPROBO, su promedio es de: " + promedio);
    } else {
        alert("APROBO, su promedio es de: " + promedio);
    }
}

function mayor();{
    //Determinar el mayor de dos numeros

    var a = 0;
    var b = 0;
    var c = 0;

    a = parseFloat(prompt("Por favor ingrese el primer valor numerico"));
    b = parseFloat(prompt("Por favor ingrese el segundo valor numerico"));

    if (a = b) {
        alert("Los valores suministrados son iguales");
    }

    if (a > b) {
        alert("El numero mayor es: " + a);
    }

    if (b > a) {
        alert("El numero mayor es: " + b);
    }
}

function menor();{
    //Determinar el menor de tres numeros

    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;

    a = parseFloat(prompt("Por favor ingrese el primer valor numerico"));
    b = parseFloat(prompt("Por favor ingrese el segundo valor numerico"));
    c = parseFloat(prompt("Por favor ingrese el tercer valor numerico"));

    if (a <= b && a <= c){
        d = a;
    } else if(b <= a && b <= c){
        d = b;
    } else {
        d = c;
    }
    alert("El numero menor es: " + d);
}

function paroimpar();{
    //Determinar si un numero es par o inpar

    var numero = 0;

    numero = parseFloat(prompt("Por favor ingrese un valor numerico"));

    if (numero %2 == 0);{
        alert("El numero" + numero + "es par");
    } else {
        alert("El numero" + numero + "es impar");
    }
}

function cuadrado();{
    //Determinar el cuadrado de un numero

    var a = 0;
    var numero = 0;

    numero = parseFloat(prompt("Por favor ingrese un valor numerico"));

    a = numero^2;
    alert("El cuadrado es: " + a);
}

function area();{
    //Determinar el area de un triangulo

    var a = 0;
    var b = 0;
    var c = 0;

    a = parseFloat(prompt("Por favor ingrese la base del triangulo"));
    b = parseFloat(prompt("Por favor ingrese la altura del triangulo"));
    
    c = (a * b)/2;

    alert("El area del triangulo es: " + c);
}

function centimetros();{
    //Determinar los centimetros de un valor dado en metros por el usuario

    var a = 0;
    var b = 0;

    a = parseFloat(prompt("Por favor ingrese un valor en metros"));
    
    b = a * 1000;

    alert("El valor en centimetros es: " + b);
}

function edad();{
    //Determinar el año en que nacio ingresando su edad

    var a = 0;
    var b = 0;
    var c = 0;

    a = parseFloat(prompt("Por favor ingrese su edad"));
    b = parseFloat(prompt("Por favor ingrese el año actual"));

    c = b - a;

    alert("El año en que nacio es: " + c);
}

function interes();{
    //Determinar 

    var c = 0;
    var m = 0;
    var i = 0;
    var r = 0;
    var m = 0;

    c = parseFloat(prompt("Por favor ingrese la suma de dinero que desea invertir")); 
    r = c * 0.02;

    alert("La ganancia que tiene en un mes es: " + r);

    n = parseFloat(prompt("Por favor ingrese el numero de meses que desea invertir su dinero")); 
    m = r * n;

    alert("La ganacia que obtine durante" + n + "es: " + m);
}

function descuento(){
    //Determinar el descuento de los diferentes kilos de manzanas por medio de la tabla

    var a;
    var b;

    a = parseFloat(prompt("Por favor ingrese la cantidad de kilos que compro"));
    
    if (a <= 2){
        b = a * 4500;
    }else if(a <= 5){
        b = (a * 4500) - ((10 * 4500) / 100);
    }else if(a <= 10){
        b = (a * 4500) - ((15 * 4500) / 100);
    }else if(a => 11){
        b = (a * 4500) - ((20 * 4500) / 100);
    }
    alert("El valor a pagar es: " + b);
}