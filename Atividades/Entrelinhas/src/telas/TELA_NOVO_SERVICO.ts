import { Tela, TServico } from "../types/index.d.ts";
import { TCategoria } from "../types/index.d.ts";
import { exibirTela } from "../main.ts";
import { green } from "@std/fmt/colors";

export function solicitarServico(): string {
  const servicoNovo: TServico = {
    id: Math.floor(Math.random()),
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

export const TELA_NOVO_SERVICO: Tela = {
  nome: "TelaNovoServico",
  ASCII: `
███████╗███╗   ██╗████████╗██████╗ ███████╗██╗     ██╗███╗   ██╗██╗  ██╗ █████╗ ███████╗
██╔════╝████╗  ██║╚══██╔══╝██╔══██╗██╔════╝██║     ██║████╗  ██║██║  ██║██╔══██╗██╔════╝
█████╗  ██╔██╗ ██║   ██║   ██████╔╝█████╗  ██║     ██║██╔██╗ ██║███████║███████║███████╗
██╔══╝  ██║╚██╗██║   ██║   ██╔══██╗██╔══╝  ██║     ██║██║╚██╗██║██╔══██║██╔══██║╚════██║
███████╗██║ ╚████║   ██║   ██║  ██║███████╗███████╗██║██║ ╚████║██║  ██║██║  ██║███████║
╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝
========================================================================================
    `,
  subtitulo: "==> Do que você precisa?",
  conteudo: "",
  rodape: `
                                                                        Beekeepers, 2024
========================================================================================
`,
  main: (): void => {
    prompt(`Pressione ENTER para ${green("VOLTAR")}`);
    exibirTela("TelaDoCliente");
  },
};
