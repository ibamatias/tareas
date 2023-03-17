/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

let $inputCantFamiliares = document.querySelector(`#cantidad-familiares`);

document.querySelector("#boton-ingresar-familiares").onclick = function(){
    let cantidadIntegrantes = $inputCantFamiliares.value;
    borrarIntegrantesAnteriores();
    reset();
    crearIntegrantes(cantidadIntegrantes);
    



};

function crearIntegrantes(cant){
    if(cant>0){
        mostrarBotonCalc();
    } else {
        ocultarBotonCalc();
    }

    for(let i=0; i<cant;i++){
        crearIntegrante(i);
    };
};

document.querySelector("#resetear").onclick = reset;



function crearIntegrante(i){
    const $newDiv = document.createElement("div");
    $newDiv.className = "familiar";

    const $newLabel = document.createElement("label");
    $newLabel.textContent = `Edad de familiar #${i+1}: `;
    const $newInput = document.createElement("input");
    $newInput.type = "number";

    $newDiv.appendChild($newLabel);
    $newDiv.appendChild($newInput);

    document.querySelector("#familiares").appendChild($newDiv);
};

function borrarIntegrantesAnteriores(){
    const cantFam = document.querySelectorAll(".familiar"); //esto es un array
    for(let i=0; i<cantFam.length;i++){
        cantFam[i].remove();
    };
};

function mostrarBotonCalc(){
    document.querySelector("#btn-calc").className = "";
};

function ocultarBotonCalc(){
    document.querySelector("#btn-calc").className = "oculto";
}

function reset(){
    borrarIntegrantesAnteriores();
    ocultarBotonCalc();
    ocultarResultados();
    ocultarResultadosSalarios();
    borrarInputSalarioAnteriores();
    ocultarBotonCalcSalario();
    ocultarLabelEInputSalarios();
    ocultarBotonIngresarFamiliaresQueTrabajan();
};

function ocultarResultados(){
    document.querySelector("#resultados").className = "oculto";
};

function mostrarResultados(){
    document.querySelector("#resultados").className = "";
};



document.querySelector("#btn-ingresar-ctos-trabajan").onclick = function(){

    let cantTrabajan = document.querySelector("#input-cuantos-trabajan").value;

    borrarInputSalarioAnteriores();
    crearInputSalarioNuevos(cantTrabajan);


};


function borrarInputSalarioAnteriores(){
    let inputs = document.querySelectorAll(".input-salario");

    for(let i=0; i<inputs.length;i++){
        inputs[i].remove();
    };
};

function crearInputSalarioNuevos(cant){
    if(cant>0){
        mostrarBotonCalcSalarios();
    } else {
        ocultarBotonCalcSalario();
    };

    for(let i=0; i<cant; i++){
        crearInputSalarioNuevo(i);
    }
};

function crearInputSalarioNuevo(cant){
    let $newDiv = document.createElement("div");

    $newDiv.className = "input-salario";

    let $newLabel = document.createElement("label");
    $newLabel.textContent = `Ingrese salario anual de familiar #${cant+1}`;

    let $newInput = document.createElement("input");
    $newInput.type = "number";

    $newDiv.appendChild($newLabel);
    $newDiv.appendChild($newInput);

    document.querySelector("#fam-trabajan").appendChild($newDiv);
};

function mostrarBotonCalcSalarios(){
    document.querySelector("#btn-calc-salarios").className = "";
}

function ocultarBotonCalcSalario(){
    document.querySelector("#btn-calc-salarios").className = "oculto";
}

function mostrarLabelEInputSalarios(){
    document.querySelector("#label-inputs").className = ""
    document.querySelector("#input-cuantos-trabajan").className = "";
};

function ocultarLabelEInputSalarios(){
    document.querySelector("#label-inputs").className = "oculto"
    document.querySelector("#input-cuantos-trabajan").className = "oculto"; 
};

function mostrarBotonIngresarFamiliaresQueTrabajan(){
    document.querySelector("#btn-ingresar-ctos-trabajan").className = "";
};

function ocultarBotonIngresarFamiliaresQueTrabajan(){
    document.querySelector("#btn-ingresar-ctos-trabajan").className = "oculto";
}