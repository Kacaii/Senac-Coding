import { Tela, TServico, TCategoria } from "../types/index.d.ts";
import { exibirTela } from "../main.ts";

import { green } from "@std/fmt/colors";

export function solicitarServico(): string {
  console.clear();

  const servicoNovo: TServico = {
    id: Math.floor(Math.random() * 200),
    usuario: prompt("Qual o seu usuario?") || "",
    categoria: prompt("Qual a categoria?") as TCategoria,
    descricao: prompt("Descreva seu pedido") || "",
    localizacao: {
      cidade: prompt("Em qual cidade você mora?") || "",
      estado: prompt("Em qual estado você mora?") || "",
    },
  };
  return `
----------------------------------------------------------------------------------------
🆔 - ID: ${servicoNovo.id}
🐱 - CATEGORIA: ${servicoNovo.categoria}
🐝 - USUÁRIO: @${servicoNovo.usuario}
📄 - DESCRIÇÃO: ${servicoNovo.descricao}
🗺️ - LOCALIZAÇÃO: ${servicoNovo.localizacao.cidade} - ${servicoNovo.localizacao.estado}
----------------------------------------------------------------------------------------
`;
}

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
        exibirTela("TelaNovoServico", {
          counteudoPersonalizado: solicitarServico(),
        });
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
