type NomeTela = "TelaPrincipal" | "TelaCliente" | "TelaCostureira";

type Tela = {
  nome: NomeTela;
  ASCII: string;
  subtitulo: string;
  listaDeOpcoes: string[];
  rodape: string;
  executarFuncionalidade: () => void;
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
const TELA_PRINCIPAL: Tela = {
  nome: "TelaPrincipal",
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
  executarFuncionalidade() {
    const usuarioSelecionado = prompt("");

    switch (usuarioSelecionado) {
      case "1": {
        exibirTela("TelaCliente");
        break;
      }
      case "2": {
        exibirTela("TelaCostureira");
        break;
      }
      default: {
        console.clear();
        Deno.exit();
      }
    }
  },
};

// TODO: Implementar TELA_CLIENTE  '

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
const TELA_CLIENTE: Tela = {
  nome: "TelaCliente",
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
  executarFuncionalidade() {
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
        exibirTela("TelaPrincipal"); // Voltando ao menu
      }
    }
  },
};

// TODO: Implementar TELA_PROFISSIONAL  '

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
const TELA_COSTUREIRA: Tela = {
  nome: "TelaCostureira",
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
  executarFuncionalidade() {
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
        exibirTela("TelaPrincipal"); // Voltando ao menu
      }
    }
  },
};

/**
 * Mapa contendo todas as telas do script
 * Use `MapaDeTelas.get()` passando o nome de uma {@linkcode NomeTela} para acessar seus conteudo.
 */
const MapaDeTelas = new Map<NomeTela, Tela>([
  ["TelaPrincipal", TELA_PRINCIPAL],
  ["TelaCliente", TELA_CLIENTE],
  ["TelaCostureira", TELA_COSTUREIRA],
]);

/**
 * Exibe a tela e executa sua funcionalidade.
 */
function exibirTela(tela: NomeTela) {
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
  exibirTela("TelaPrincipal");
}
