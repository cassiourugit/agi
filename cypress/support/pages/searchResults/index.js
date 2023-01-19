import { el } from './elements'
import { article } from '../../../fixtures/articles'

class SearchResultsPage {
    valida_resultado_busca(titulo_expect) {
        cy.get(el.artigos)
        .find(el.titulo_artigo)
        .contains(titulo_expect)
    }

    valida_resultado_vazio() {
        cy.contains('Nenhum resultado')
        cy.get(el.mensagem_vazio)
        .contains(article.nenhum_resultado)
    }

    valida_cabecalho_busca(texto) {
        cy.contains('Resultados da busca por: ' + texto)
    }  
}

export default new SearchResultsPage()