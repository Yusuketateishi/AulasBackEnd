const juros_simples = (capital, taxa, tempo) => {
    const juros = capital * (taxa/100) * tempo
    const objeRetorno = {
        capital: capital,
        tempo: tempo,
        taxa: taxa,
        juros: juros,
        total: capital + juros
    }
    return objeRetorno;
}


const juros_compostos = (capital, taxa, tempo) => {
    const juros = capital * (1 + taxa/100) ** tempo
    const objeRetorno = {
        capital: capital,
        tempo: tempo,
        taxa: taxa,
        juros: montante - capital,
        total: montante
    }
    return objeRetorno;
}

module.exports = { juros_simples , juros_compostos}