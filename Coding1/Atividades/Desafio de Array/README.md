<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD013 -->

# Desafio de Array 2024-10-23

## Grupo

- [Eloi](https://github.com/Eloi-0001)
- [Ayres](https://github.com/Kacaii)
- [Matheus](https://github.com/eumatheuslucena)

## Enunciado: Um sistema de aluguel de carros

> Crie um `array` de carros. Em seguida, realize as seguintes operações:

- [x] **Remover** um carro da lista.
- [x] **Adicionar** um novo carro na lista.
- [x] **Mostrar** o número de total de carros na lista.
- [x] Crie as variáveis, use a função `prompt()` e o `console.log()`
      para interagir com o usuário.

---

```javascript
module LocadoraDeCarros
const LocadoraDeCarros: {
    listaParaInteragir: string[];
    EXIT_COMMANDS: Set<string>; // [":q", ":quit", ":exit"]
    exibeLista(): void;
    exibeMensagemFeedback(mensagem: string, nomeDoCarro?: string | undefined, corTexto?: string | undefined): void;
    removeCarro(id?: string | undefined): void;
    iniciarRemocaoDeCarros(): void;
    adicionaCarro(lista: string[], nomeCarro?: string | undefined): void;
    iniciarAdicaoDeCarros(): void;
}

// Módulo contendo métodos e recursos necessários para interação do usuário com a lista de carros.
```

## Instruções

- Adicionar ou remover carros da tabela é **opcional**.
- Durante a execução do código, os carros são exibidos no terminal em forma de tabelas.
- Recomendo executar o código no **terminal**,
  apesar dele também funcionar no [CodePen](https://codepen.io/pen/).

---

- Lista de Dependências:

  - Um ambiente de execução Javascript com suporte ao método [`prompt()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt).
  - Um ambiente de execução Javascript com suporte ao método [`console.table()`](https://developer.mozilla.org/en-US/docs/Web/API/console/table_static).

- Lista de Recomendações

  - [Nerd Fonts](https://www.nerdfonts.com/font-downloads). (Suporte para ícones)
  - [Deno](https://deno.com/) NodeJS, só que melhor. 😸

> [!NOTE]
> O usuário pode optar por **sair** do loop ao digitar `":exit"` ou `":q"`
> durante a interação.

```javascript
const LocadoraDeCarros = {
  EXIT_COMMANDS: [":q", ":exit"],
  // Restante do código.
};
```

## TODO List ✅

- [x] Deixar o código mais bonitinho.
- [x] Verificar se ele continua funcionando.
- [x] Adicionar todos os membros da equipe na documentação.
- [x] Enviar o código para a professora.

---

- [x] Evitar a _repetição_ de código.
- [x] Melhorar a legibilidade.
- [x] Agora é possível **adicionar** ou **remover** vários carros da lista!
- [x] Funções documentadas.

<details>
<summary>Exibindo feedback para o usuário 💻</summary>

---

```javascript
/**
 * Exibe uma mensagem de feedback no console sobre a adição ou remoção de um carro.
 *
 * @param {string} mensagem - Mensagem a ser exibida no console.
 * @param {string} [nomeDoCarro="Nenhum carro"] - Nome do carro removido ou adicionado.
 * @param {string} [corTexto="yellow"] - Cor do texto do **nome** do carro, em _inglês_.
 */
#exibeMensagemFeedback(
  mensagem,
  nomeDoCarro = "Nenhum carro",
  corTexto = "yellow",
) {
  console.log(
    `%c${nomeDoCarro} %c${mensagem}`,
    `color:${corTexto}`,
    "color:white",
  );
}
```

  </details>

---

![Cat Coding](https://c.tenor.com/g3y2q5VQxvAAAAAC/cat-computer.gif)
