onst url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
const parágrafo = document.createElement ('P')
parágrafo.clossList.add('gráficos_container__texto')
}

vizualizarInformacoesGlobais()
