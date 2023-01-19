# Repositório para um sample de testes do Blog do Agibank


## Estrutura
* Pasta fixtures

        Local onde ficam armazenadas as massas de dados por página

* Pasta support/pages

        Local onde fica o mapa de elementos e o page_object de cada página

* Pasta e2e

        Local onde ficam os specs de teste


<br>

## Como instalar?
Clone o repositório na sua máquina e utilize o seguinte comando para instalar as dependências:

```
yarn
```

## Como rodar os testes em modo Headless?
```
yarn test
```

## Como rodar os testes em modo visual?
```
yarn cypress open
```

Na janela que irá abrir, escolha a opção:

-> E2E Testing

<br>
Escolha o navegador desejado, e rode o spec agi.spec