document.querySelector("#btn-calc").onclick = function(){
    let $edades = document.querySelectorAll(".familiar input");
    const edades = [];
    for(let i of $edades){
        edades.push(Number(i.value));
    };

    mostrarResultados();

    obtenerMayorNumber(edades);
    obtenerMenorNumber(edades);
    calcularPromedio(edades);
    console.log(edades);
    mostrarLabelEInputSalarios();
    mostrarBotonIngresarFamiliaresQueTrabajan()
};


function obtenerMayorNumber(arr){
    let mayorNum = arr[0];

    for(let i=1;i<arr.length;i++){
        if(arr[i]>mayorNum){
            mayorNum = arr[i];
        };
    };

    document.querySelector("#edad-mayor").textContent = `${mayorNum}`;
};

function obtenerMenorNumber(arr){
    let menorNum = arr[0];

    for(let i=1;i<arr.length;i++){
        if(arr[i]<menorNum && arr[i]!==0){
            menorNum=arr[i];
        };
    };

    document.querySelector("#edad-menor").textContent = `${menorNum}`;
};

function calcularPromedio(arr){
    let sum=0;
    for(let i of arr){
        sum+=i;
    };

    resultado = sum/arr.length;

    document.querySelector("#edad-promedio").textContent = `${resultado.toFixed(2)}`;
};

function ocultarResultados(){
    document.querySelector("#resultados").className = "oculto";
};

function mostrarResultados(){
    document.querySelector("#resultados").className = "";
};

function mostrarResultadosSalarios(){
    document.querySelector("#resultados-salarios").className = "";
};

function ocultarResultadosSalarios(){
    document.querySelector("#resultados-salarios").className = "oculto";
};

// salario anual mas alto, salario anual mas bajo, salario anual promedio y salario mensual promedio.

document.querySelector("#btn-calc-salarios").onclick = function(){
    let $salarios = document.querySelectorAll(".input-salario input")

    let salarios = [];

    for(let i=0; i<$salarios.length;i++){
        salarios.push(Number($salarios[i].value));
    };

    console.log(salarios);
    calcularSalarioMasAlto(salarios);
    calcularSalarioMasBajo(salarios);
    calcularSalarioPromedio(salarios);
    calcularSalarioMensualPromedio(salarios);
    mostrarResultadosSalarios()

};


function calcularSalarioMasAlto(arr){
    let numMasAlto = arr[0];

    for(let i=1; i<arr.length;i++){
        if(arr[i]>numMasAlto){
            numMasAlto=arr[i];
        };
    };

    document.querySelector("#salario-anual-mas-alto").textContent = numMasAlto;
};

function calcularSalarioMasBajo(arr){
    let numMasBajo = arr[0];

    for(let i=1; i<arr.length;i++){
        if(arr[i]<numMasBajo){
            numMasBajo=arr[i];
        };
    };

    document.querySelector("#salario-anual-mas-bajo").textContent = numMasBajo;
};

function calcularSalarioPromedio(arr){
    let suma=0;

    for(let i=0; i<arr.length;i++){
        suma+=arr[i];
    };

    resultado = suma/arr.length;

    document.querySelector("#salario-anual-promedio").textContent = Number(resultado.toFixed(2));
};

function calcularSalarioMensualPromedio(arr){
    let suma=0;

    for(let i=0; i<arr.length;i++){
        suma+=calcularSalarioMensual(arr[i]);
    };

    resultado = suma/arr.length;

    document.querySelector("#salario-mensual-promedio").textContent = Number(resultado.toFixed(2));
};


function calcularSalarioMensual(num){
    return num/12;
};