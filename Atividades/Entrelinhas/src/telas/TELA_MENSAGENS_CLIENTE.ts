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
 *   ==> Mensagens (Cliente)
 *
 *   ...mensagens
 *
 *                                                                         Beekeepers, 2024
 * ========================================================================================
 * ```
 */
export const TELA_MENSAGENS_CLIENTE: Tela = {
  nome: "TelaMensagensCliente",
  ASCII: `
███████╗███╗   ██╗████████╗██████╗ ███████╗██╗     ██╗███╗   ██╗██╗  ██╗ █████╗ ███████╗
██╔════╝████╗  ██║╚══██╔══╝██╔══██╗██╔════╝██║     ██║████╗  ██║██║  ██║██╔══██╗██╔════╝
█████╗  ██╔██╗ ██║   ██║   ██████╔╝█████╗  ██║     ██║██╔██╗ ██║███████║███████║███████╗
██╔══╝  ██║╚██╗██║   ██║   ██╔══██╗██╔══╝  ██║     ██║██║╚██╗██║██╔══██║██╔══██║╚════██║
███████╗██║ ╚████║   ██║   ██║  ██║███████╗███████╗██║██║ ╚████║██║  ██║██║  ██║███████║
╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝
========================================================================================
`,
  subtitulo: "==> Exibindo conversa mais recente:",
  conteudo: `
                                                                                   10:09
                                                                                bom dia!
Maria das Dores | 10:19                                                                 
Bom dia! Como posso ajudar?                                                             
                                                                                   10:38
                                               fui atacado por lobos minha camisa rasgou
                                                                                        
Maria das Dores | 10:38                                                                 
misericórdia.. 🙀                                                                       
________________________________________________________________________________________
`,
  listaDeOpcoes: ["---", "---", "Voltar"],
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
        // TODO:
        break;
      }
      default: {
        exibirTela("TelaDoCliente"); // Voltando ao menu
      }
    }
  },
};