/** Telas Disponíveis */
type T_NomeTela = "MenuPrincipal" | "TelaDoCliente" | "TelaDaCostureira";

type T_Tela = {
  nome: T_NomeTela;
  ASCII: string;
  subtitulo: string;
  listaDeOpcoes: string[];
  rodape: string;
  /** Realiza a funcionalidade principal da tela selecionada. */
  executarFuncionalidade: () => unknown;
};

/** Usar essa constante no `stdout` ou `console.log()` resulta em um som de notificação. */
const TOCAR_SINO = "\u0007";

/**
 * ```help
 * ███████╗███╗   ██╗████████╗██████╗ ███████╗██╗     ██╗███╗   ██╗██╗  ██╗ █████╗ ███████╗
 * ██╔════╝████╗  ██║╚══██╔══╝██╔══██╗██╔════╝██║     ██║████╗  ██║██║  ██║██╔══██╗██╔════╝
 * █████╗  ██╔██╗ ██║   ██║   ██████╔╝█████╗  ██║     ██║██╔██╗ ██║███████║███████║███████╗
 * ██╔══╝  ██║╚██╗██║   ██║   ██╔══██╗██╔══╝  ██║     ██║██║╚██╗██║██╔══██║██╔══██║╚════██║
 * ███████╗██║ ╚████║   ██║   ██║  ██║███████╗███████╗██║██║ ╚████║██║  ██║██║  ██║███████║
 * ╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝
 * ========================================================================================
 *
 *   = MENU PRINCIPAL = Selecione um usuário ⬇️
 *
 *   1 - Cliente
 *   2 - Profissional
 *   3 - Sair
 *                                                                         Beekeepers, 2024
 * ========================================================================================
 * ```
 */
const MENU_PRINCIPAL: T_Tela = {
  nome: "MenuPrincipal",
  subtitulo: "= MENU PRINCIPAL = Selecione um usuário ⬇️",
  listaDeOpcoes: ["Cliente", "Profissional", "Sair"],
  ASCII: `
███████╗███╗   ██╗████████╗██████╗ ███████╗██╗     ██╗███╗   ██╗██╗  ██╗ █████╗ ███████╗
██╔════╝████╗  ██║╚══██╔══╝██╔══██╗██╔════╝██║     ██║████╗  ██║██║  ██║██╔══██╗██╔════╝
█████╗  ██╔██╗ ██║   ██║   ██████╔╝█████╗  ██║     ██║██╔██╗ ██║███████║███████║███████╗
██╔══╝  ██║╚██╗██║   ██║   ██╔══██╗██╔══╝  ██║     ██║██║╚██╗██║██╔══██║██╔══██║╚════██║
███████╗██║ ╚████║   ██║   ██║  ██║███████╗███████╗██║██║ ╚████║██║  ██║██║  ██║███████║
╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝
========================================================================================
`,
  rodape: `
                                                                        Beekeepers, 2024
========================================================================================
`,
  executarFuncionalidade(): void {
    const usuarioSelecionado = prompt("");

    switch (usuarioSelecionado) {
      case "1": {
        exibirTela("TelaDoCliente");
        break;
      }
      case "2": {
        exibirTela("TelaDaCostureira");
        break;
      }
      default: {
        console.clear();
        Deno.exit();
      }
    }
  },
};

/**
 * ```help
 * ███████╗███╗   ██╗████████╗██████╗ ███████╗██╗     ██╗███╗   ██╗██╗  ██╗ █████╗ ███████╗
 * ██╔════╝████╗  ██║╚══██╔══╝██╔══██╗██╔════╝██║     ██║████╗  ██║██║  ██║██╔══██╗██╔════╝
 * █████╗  ██╔██╗ ██║   ██║   ██████╔╝█████╗  ██║     ██║██╔██╗ ██║███████║███████║███████╗
 * ██╔══╝  ██║╚██╗██║   ██║   ██╔══██╗██╔══╝  ██║     ██║██║╚██╗██║██╔══██║██╔══██║╚════██║
 * ███████╗██║ ╚████║   ██║   ██║  ██║███████╗███████╗██║██║ ╚████║██║  ██║██║  ██║███████║
 * ╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝
 * ========================================================================================
 *
 *   ==> Cliente
 *
 *   1 -
 *   2 -
 *   3 -
 *                                                                         Beekeepers, 2024
 * ========================================================================================
 * ```
 */
const TELA_CLIENTE: T_Tela = {
  nome: "TelaDoCliente",
  ASCII: `
███████╗███╗   ██╗████████╗██████╗ ███████╗██╗     ██╗███╗   ██╗██╗  ██╗ █████╗ ███████╗
██╔════╝████╗  ██║╚══██╔══╝██╔══██╗██╔════╝██║     ██║████╗  ██║██║  ██║██╔══██╗██╔════╝
█████╗  ██╔██╗ ██║   ██║   ██████╔╝█████╗  ██║     ██║██╔██╗ ██║███████║███████║███████╗
██╔══╝  ██║╚██╗██║   ██║   ██╔══██╗██╔══╝  ██║     ██║██║╚██╗██║██╔══██║██╔══██║╚════██║
███████╗██║ ╚████║   ██║   ██║  ██║███████╗███████╗██║██║ ╚████║██║  ██║██║  ██║███████║
╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝
========================================================================================
`,
  subtitulo: "==> Cliente",
  listaDeOpcoes: ["", "", ""],
  rodape: `
                                                                        Beekeepers, 2024
========================================================================================
`,
  executarFuncionalidade(): void {
    const opcaoSelecionada = prompt("Pressione ENTER");

    switch (opcaoSelecionada) {
      case "1": {
        break;
      }
      case "2": {
        break;
      }
      default: {
        console.clear();
        exibirTela("MenuPrincipal"); // Voltando ao menu
      }
    }
  },
};

/**
 * ```help
 * ███████╗███╗   ██╗████████╗██████╗ ███████╗██╗     ██╗███╗   ██╗██╗  ██╗ █████╗ ███████╗
 * ██╔════╝████╗  ██║╚══██╔══╝██╔══██╗██╔════╝██║     ██║████╗  ██║██║  ██║██╔══██╗██╔════╝
 * █████╗  ██╔██╗ ██║   ██║   ██████╔╝█████╗  ██║     ██║██╔██╗ ██║███████║███████║███████╗
 * ██╔══╝  ██║╚██╗██║   ██║   ██╔══██╗██╔══╝  ██║     ██║██║╚██╗██║██╔══██║██╔══██║╚════██║
 * ███████╗██║ ╚████║   ██║   ██║  ██║███████╗███████╗██║██║ ╚████║██║  ██║██║  ██║███████║
 * ╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝
 * ========================================================================================
 *
 *   ==> Profissional
 *
 *   1 -
 *   2 -
 *   3 -
 *                                                                         Beekeepers, 2024
 * ========================================================================================
 * ```
 */
const TELA_COSTUREIRA: T_Tela = {
  nome: "TelaDaCostureira",
  ASCII: `
███████╗███╗   ██╗████████╗██████╗ ███████╗██╗     ██╗███╗   ██╗██╗  ██╗ █████╗ ███████╗
██╔════╝████╗  ██║╚══██╔══╝██╔══██╗██╔════╝██║     ██║████╗  ██║██║  ██║██╔══██╗██╔════╝
█████╗  ██╔██╗ ██║   ██║   ██████╔╝█████╗  ██║     ██║██╔██╗ ██║███████║███████║███████╗
██╔══╝  ██║╚██╗██║   ██║   ██╔══██╗██╔══╝  ██║     ██║██║╚██╗██║██╔══██║██╔══██║╚════██║
███████╗██║ ╚████║   ██║   ██║  ██║███████╗███████╗██║██║ ╚████║██║  ██║██║  ██║███████║
╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝
========================================================================================
`,
  subtitulo: "==> Profissional",
  listaDeOpcoes: ["", "", ""],
  rodape: `
                                                                        Beekeepers, 2024
========================================================================================
`,
  executarFuncionalidade(): void {
    const opcaoSelecionada = prompt("Pressione ENTER");

    switch (opcaoSelecionada) {
      case "1": {
        break;
      }
      case "2": {
        break;
      }
      default: {
        console.clear();
        exibirTela("MenuPrincipal"); // Voltando ao menu
      }
    }
  },
};

/**
 * Mapa contendo todas as telas do script
 * Use `MapaDeTelas.get()` passando o nome de uma {@linkcode T_NomeTela} para acessar seus conteudo.
 */
const MapaDeTelas = new Map<T_NomeTela, T_Tela>([
  ["MenuPrincipal", MENU_PRINCIPAL],
  ["TelaDoCliente", TELA_CLIENTE],
  ["TelaDaCostureira", TELA_COSTUREIRA],
]);

/**
 * Exibe a tela e executa sua funcionalidade.
 */
function exibirTela(tela: T_NomeTela): void {
  console.clear();
  console.log(MapaDeTelas.get(tela)?.ASCII);
  console.log("  " + MapaDeTelas.get(tela)?.subtitulo + "\n");

  // Inserindo cada uma das opções
  MapaDeTelas.get(tela)?.listaDeOpcoes.forEach((value, index) => {
    console.log(`  ${index + 1} - ${value}`);
  });

  console.log(MapaDeTelas.get(tela)?.rodape);
  MapaDeTelas.get(tela)?.executarFuncionalidade();
}

// Inicia o script
if (import.meta.main) {
  console.clear(); // Limpe a tela antes de tudo
  console.log(TOCAR_SINO); // 🔔
  exibirTela("MenuPrincipal");
}
