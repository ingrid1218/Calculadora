// Teclas
const keys = document.querySelectorAll(".buttons .numbers button:not(#clear)");
const clear = document.querySelector("#clear");

// Operações
const ops = document.querySelectorAll(".buttons .operators button");

// Visor
const screen = document.querySelector(".screen");

// Eventos Teclas
keys.forEach(function(key){
    key.addEventListener("click" , function(){
        const keyValue = key.getAttribute("data-val") 
        insertValue(keyValue);
    });
});

// Eventos Operações
ops.forEach(function(op){
    op.addEventListener("click", function(){
        if (op.innerText == "="){
            showResult(screen.innerText);
        }else{
            const opValue = op.getAttribute("data-val")
            insertValue(opValue);
        }
    });
});

clear.addEventListener("click", function(){
    screen.innerText = "";
});

// Inserir Operação
const insertValue = function(value){
    if (screen.innerText.length > 13) return;

    screen.innerText = screen.innerText + value;
}

// Executar Operação
const showResult = function(operation){
    screen.innerText = eval(operation);
}
