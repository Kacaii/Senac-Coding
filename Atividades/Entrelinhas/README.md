<!-- markdownlint-disable MD013 -->

# Atividade 27/11/2024

## Resumo da Atividade

> Como exercício de casa, elabore um algoritmo que reproduza ações do seu projeto
> integrador com pelo menos 3 funcões.

## Equipe

- THAISE RENAUX
- JOAO ANTONIO
- PEDRO AYRES
- IAN LUCAS
- ANDRE LUIZ

## Estrutura Do Script

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
  - [x] Selecionar usuario
