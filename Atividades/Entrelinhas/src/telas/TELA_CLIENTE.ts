import { Tela } from "../types/index.d.ts";
import { exibirTela } from "../main.ts";

import { green } from "@std/fmt/colors";

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
 *   1 - Novo serviço 🆕
 *   2 - Ver mensagens recentes 🗨️
 *   3 - Voltar 🔙
 *                                                                         Beekeepers, 2024
 * ========================================================================================
 * ```
 */
export const TELA_CLIENTE: Tela = {
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
  listaDeOpcoes: ["Novo serviço 🆕", "Ver mensagens recentes 🗨️", "Voltar 🔙"],
  rodape: `
                                                                        Beekeepers, 2024
========================================================================================
`,
  main(): void {
    const opcaoSelecionada = prompt(`Pressione ENTER para ${green("VOLTAR")}`);

    switch (opcaoSelecionada) {
      case "1": {
        // TODO:
        break;
      }
      case "2": {
        exibirTela("TelaMensagensCliente");
        break;
      }
      default: {
        exibirTela("TelaPrincipal"); // Voltando ao menu
      }
    }
  },
};
