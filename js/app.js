let amigos = []

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    if(amigo.value == '') {
        alert ('informe o nome do Amigo!');
        return;
    }

    if (amigos.includes (amigo.value)) {
        alert ('Nome ja adicinado!');
        return;
    }

    let lista = document.getElementById('lista-amigos');
    amigos.push(amigo.value);

    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ' ,' + amigo.value;
    }
    amigo.value = '';
}

function sortear() {
    embaralha (amigos);
    let sorteio = document.getElementById ('lista-sorteio');

    if (amigos.length < 4) {
        alert ('Adicione no minímo 4 participantes!');
        return;
    }

    for ( let i = 0; i < amigos.length; i ++) {

        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' -->' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' -->' + amigos[i=+1] + '<br>';
        }
    }

}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        let indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

    function reiniciar() {
        amigos = [];
        document.getElementById('lista-amigos').innerHTML = '';
        document.getElementById ('lista-sorteio').innerHTML = '';
    }