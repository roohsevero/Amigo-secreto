let amigos = [];


function adicionar(){
    let amigo = document.getElementById('nome-amigo');
    if(amigo.value ==''){
        alert('Informe o nome do amigo!');
        return;
    }

    if(amigos.includes(amigo.value)){
        alert('Nome já adicionado');
        return;
    }

    let listaAmigo = document.getElementById('lista-amigos');
    amigos.push(amigo.value);
    
    if(listaAmigo.textContent == ''){
        listaAmigo.textContent = amigo.value;
    }else{
        listaAmigo.textContent = listaAmigo.textContent + ', ' + amigo.value;
    }
    amigo.value = ''
}

function sortear(){
    if(amigos.length < 4){
        alert('Adicione pelo menos 4 amigos!');
        return;
    }

    embaralha(amigos);
    let listaSorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++){

        if(i == amigos.length -1 ){
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + '--> ' + amigos[0] + '<br>'
        }else{
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + '--> ' + amigos[i + 1] + '<br>'
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar (){
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';

}