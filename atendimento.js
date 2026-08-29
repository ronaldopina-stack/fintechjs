// const fila = ["luiza","ana","roberta"];
// console.log ("fila inicial:" + fila);
 let fila  = [ ];

 function adicionarCliente(){
    let nome = prompt ("digite o nome do cliente:")
    if(nome){
        let confirma = confirm (`Deseja adicionar o cliente ${nome} ?`)
        if(confirma){
                fila.push(nome);

        }
 }else {
    alert("Voce não digitou o nome")
 }

 }
 function atenderCliente(){
    if (fila.length > 0){
        let nome = fila.shift();
        alert(`Cliente ${nome} atendido`)
    }else{
        alert("Fila vazia!");
    }

 }