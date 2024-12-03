<!-- markdownlint-disable MD013 -->

# Atividade 27/11/2024

## Resumo da Atividade

> Como exercício de casa, elabore um algoritmo que reproduza ações do seu projeto
> integrador com pelo menos 3 funcões.

## Beekeepers

- THAISE RENAUX
- JOAO ANTONIO
- PEDRO AYRES
- IAN LUCAS
- ANDRE LUIZ

## Recursos

```plaintext
EntreLinhas/
│
├── bin/                # Arquivos compilados
├── src/                # Código fonte do projeto
│   │
│   ├── telas/
│   │   ├── ...
│   │   └── index.ts    # Exportando telas
│   │
│   ├── types/
│   │   ├── ...
│   │   └── index.d.ts  # Exportando tipos
│   │
│   └── main.ts         # Arquivo pricipal <--
│
└── README.md           # Descrição do projeto
```

## Progresso

### Metas Iniciais

- Implementar a "interface" das três telas principais. 💻

  - [x] Tela Principal

  ```plaintext
  ███████╗███╗   ██╗████████╗██████╗ ███████╗██╗     ██╗███╗   ██╗██╗  ██╗ █████╗ ███████╗
  ██╔════╝████╗  ██║╚══██╔══╝██╔══██╗██╔════╝██║     ██║████╗  ██║██║  ██║██╔══██╗██╔════╝
  █████╗  ██╔██╗ ██║   ██║   ██████╔╝█████╗  ██║     ██║██╔██╗ ██║███████║███████║███████╗
  ██╔══╝  ██║╚██╗██║   ██║   ██╔══██╗██╔══╝  ██║     ██║██║╚██╗██║██╔══██║██╔══██║╚════██║
  ███████╗██║ ╚████║   ██║   ██║  ██║███████╗███████╗██║██║ ╚████║██║  ██║██║  ██║███████║
  ╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝
  ========================================================================================

    = MENU PRINCIPAL = Selecione um usuário ⬇️

    1 - Profissional
    2 - Cliente
    3 - Sair
                                                                          Beekeepers, 2024
  ========================================================================================
  ```

  - [x] Tela do Cliente

  ```plaintext
  ███████╗███╗   ██╗████████╗██████╗ ███████╗██╗     ██╗███╗   ██╗██╗  ██╗ █████╗ ███████╗
  ██╔════╝████╗  ██║╚══██╔══╝██╔══██╗██╔════╝██║     ██║████╗  ██║██║  ██║██╔══██╗██╔════╝
  █████╗  ██╔██╗ ██║   ██║   ██████╔╝█████╗  ██║     ██║██╔██╗ ██║███████║███████║███████╗
  ██╔══╝  ██║╚██╗██║   ██║   ██╔══██╗██╔══╝  ██║     ██║██║╚██╗██║██╔══██║██╔══██║╚════██║
  ███████╗██║ ╚████║   ██║   ██║  ██║███████╗███████╗██║██║ ╚████║██║  ██║██║  ██║███████║
  ╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝
  ========================================================================================

    ==> Cliente

    1 - Preciso de um profissional de costura! (╥﹏╥)
    2 - Ver mensagens recentes 
    3 - Voltar
                                                                          Beekeepers, 2024
  ========================================================================================
  ```

  - [ ] Tela do Profissional de Costura

  ```plaintext

  ```

### Funcionalidades

- Menu Principal

  - [x] Selecionar usuário
  - [x] Sair do script

- Tela de Cliente

  - [ ] Solicitar servico.
  - [ ] Chat

- Tela do Profissional

  - [ ] Servicos disponiveis

    - Serviços esperando para serem pegos
    - Ajustes de calças jeans, de vestido, cofecção de cosplay, etc.)
    - Nome da cliente, prazo de entrega.

    ```typescript
    [
      {
        id: 124,
        usuarioCliente: "@joaninha_da_silva",
        descricao: "Me ajuda minha camisa rasgou socorro.",
      },
      {
        id: 1243,
        usuarioCliente: "@jonas_conceicao",
        descricao: "socorro meu terno pegou fogo",
      },
    ];
    ```

  - [ ] Chat

    - Igual a tela de cliente mas ao contrário.
