function converterParaReal(numero){
    return numero.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
}

export default {
    converterParaReal
}