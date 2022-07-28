let chave;
let chaveQuebrada;
let uf;
let emissao;
let cnpj;
let modelo;
let serie;
let numero;
let fe;
let codNumerico;
let dv;

function quebraChave() {
    chave = document.getElementById('chavenf').value;
    if (chave == '') {
        return;
    }
    chaveQuebrada = chave.split('')
    let uf = chaveQuebrada.slice(0, 2).join('');
    let emissao = chaveQuebrada.slice(2, 6).join('');
    let cnpj = chaveQuebrada.slice(6, 20).join('');
    let modelo = chaveQuebrada.slice(20, 22).join('');
    let serie = chaveQuebrada.slice(22, 25).join('');
    let numero = chaveQuebrada.slice(25, 34).join('');
    let fe = chaveQuebrada.slice(34, 35).join('');
    let codNumerico = chaveQuebrada.slice(35, 43).join('');
    let dv = chaveQuebrada.slice(43, 44).join('');
    document.getElementById('uf').value = uf;
    document.getElementById('emissao').value = emissao;
    document.getElementById('cnpj').value = cnpj;
    document.getElementById('modelo').value = modelo;
    document.getElementById('serie').value = serie;
    document.getElementById('numero').value = numero;
    document.getElementById('fe').value = fe;
    document.getElementById('cod-numerico').value = codNumerico;
    document.getElementById('dv').value = '';
    document.getElementById('chavenf').value = '';
}

function montaChave() {
    uf = document.getElementById('uf').value;
    emissao = document.getElementById('emissao').value;
    cnpj = document.getElementById('cnpj').value;
    modelo = document.getElementById('modelo').value;
    serie = document.getElementById('serie').value;
    numero = document.getElementById('numero').value;
    fe = document.getElementById('fe').value;
    codNumerico = document.getElementById('cod-numerico').value;

    let partesChave = uf + emissao + cnpj + modelo + serie + numero + fe + codNumerico
    let concatPartesChave = partesChave.split('');
    let chaveQuebradaDv = concatPartesChave.reverse();
    let multiplicador = 2;
    const chaveMultiplicada = chaveQuebradaDv.map((item) => {
        if (multiplicador <= 9) {
            return Number(item) * multiplicador++;
        } else {
            multiplicador = 2;
            return Number(item) * multiplicador++;
        }
    });
    let total = 0;
    for (var i = 0; i < chaveMultiplicada.length; i++) {
        total += chaveMultiplicada[i];
    }
    let dve = 0;
    let sum = total % 11;
    if (sum == 0 || sum == 1) {
        dve = 0;
    } else {
        dve = 11 - sum;
    }

    if (document.getElementById('dv').value != '') {
        dv = document.getElementById('dv').value
    } else {
        dv = dve;
    }

    if (uf, emissao, cnpj, modelo, serie, numero, fe, codNumerico == '') {
        return;
    }

    document.getElementById('chavenf').value = `${uf}${emissao}${cnpj}${modelo}${serie}${numero}${fe}${codNumerico}${dv}`
    document.getElementById('uf').value = '';
    document.getElementById('emissao').value = '';
    document.getElementById('cnpj').value = '';
    document.getElementById('modelo').value = '';
    document.getElementById('serie').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('fe').value = '';
    document.getElementById('cod-numerico').value = '';
    document.getElementById('dv').value = '';

}

function copiaChave() {

    if (document.getElementById('chavenf').value.length === 44) {
        let msg = document.getElementById('msg');
        msg.style = 'display: inline'

        var content = document.getElementById('chavenf').value;

        navigator.clipboard.writeText(content)
            .then(() => {
                setTimeout(() => {
                    let msg = document.getElementById('msg');
                    msg.style = 'display: none'
                }, 2000);
            })
            .catch(err => {
                alert('Erro:', err)
            })
    }


}

function limpaTela() {
    document.getElementById('chavenf').value = '';
    document.getElementById('uf').value = '';
    document.getElementById('emissao').value = '';
    document.getElementById('cnpj').value = '';
    document.getElementById('modelo').value = '';
    document.getElementById('serie').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('fe').value = '';
    document.getElementById('cod-numerico').value = '';
    document.getElementById('dv').value = '';
}

