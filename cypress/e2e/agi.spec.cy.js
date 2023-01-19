import HomePage from '../support/pages/home'
import SearchResultsPage from '../support/pages/searchResults';
import { el } from '../support/pages/home/elements';
import { home } from '../fixtures/home';
import { article } from '../fixtures/articles';

describe('Agi busca de artigos', () => {
  context(
    'Quando eu clico na lupa',
    () => {
      beforeEach(function () {
        HomePage.acessar()
      });

      it('Deve abrir o campo de busca', () => {
        cy.get(el.lupa).click();
        cy.get(el.campo_busca)
          .should('be.visible');
      });

      it('Deve mostrar o placeholder', () => {
        cy.get(el.lupa).click();
        cy.get(el.campo_busca)
          .invoke('attr', 'placeholder')
          .should('eq', home.placeholder)
      });
    },
  );

  context(
    'Quando eu faço uma busca',
    () => {
      before(function () {
        HomePage.acessar()
        HomePage.buscar('Agibank')
      });

      it('Deve trazer o cabeçalho da página de busca com o texto Agibank', () => {
        SearchResultsPage.valida_cabecalho_busca('Agibank')
      })
    },
  );

  context(
    'Quando eu busco pelo título do artigo',
    () => {
      before(function () {
        HomePage.acessar()
        HomePage.buscar(article.titulo)
      });

      it('Deve trazer resultados com o título correspondente', () => {
        SearchResultsPage.valida_resultado_busca(article.titulo_expect)
      })
    },
  );

  context(
    'Quando eu busco pelo conteúdo do artigo',
    () => {
      before(function () {
        HomePage.acessar()
        HomePage.buscar(article.conteudo)
      });

      it('Deve trazer resultados com o título correspondente', () => {
        SearchResultsPage.valida_resultado_busca(article.conteudo_expect)
      })
    },
  );

  context(
    'Quando eu busco por um artigo inexistente',
    () => {
      before(function () {
        HomePage.acessar()
        HomePage.buscar(article.texto_inexistente)
      });

      it('Deve trazer a mensagem de nenhum resultado encontrado', () => {
        SearchResultsPage.valida_resultado_vazio()
      })
    },
  );
});