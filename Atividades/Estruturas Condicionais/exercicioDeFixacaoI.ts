import { toPascalCase } from "@std/text/to-pascal-case";

type Result<T> = [T, null] | [null, Error];

type DadosPaciente = string | number | null;
type DadosValidos = Exclude<DadosPaciente, null>;

type Paciente = {
  nome: DadosPaciente;
  idade: DadosPaciente;
  servico: DadosPaciente;
};

const paciente: Paciente = {
  nome: null,
  idade: null,
  servico: null,
};

console.clear();
const inputNome = prompt(
  "\nBem vindo(a) ao Sistema de Saúde!  \nQual o seu nome? \n\n>",
);

function validaInput(input: DadosPaciente): Result<DadosValidos> {
  // Limpando o Console
  console.clear();
  if (input === null || input === "") {
    return [null, new Error("\nInput vazio!")];
  } else {
    return [input, null];
  }
}

const [nome, erroNome] = validaInput(inputNome);

if (erroNome) {
  console.error(erroNome.message);
} else {
  typeof nome === "string" && isNaN(Number(nome))
    ? (paciente.nome = toPascalCase(nome))
    : console.error("\nNome Inválido ");
}

const inputIdade = prompt(
  `\nOi ${paciente.nome}! Seja bem vindo(a) <3 \nQual a sua idade? \n\n>`,
);

const [idade, erroIdade] = validaInput(inputIdade);

if (erroIdade) {
  console.error(erroIdade.message);
} else {
  const parsedIdade = Number(idade);
  typeof parsedIdade === "number" && !isNaN(parsedIdade)
    ? (paciente.idade = parsedIdade)
    : console.error("\nIdade Inválida ");
}

const inputServico = prompt("\nEntendido, como posso lhe ajudar? \n\n>");

const [servico, erroServico] = validaInput(inputServico);

if (erroServico) {
  console.error(erroServico.message);
} else {
  typeof servico === "string" && isNaN(Number(nome))
    ? (paciente.servico = servico)
    : console.error("\nServiço Inválido! ");
}

console.clear();
console.log("\n");

Object.entries(paciente).forEach(([key, value]) => {
  value === null
    ? console.error(`Faltaram algumas informações  ( ${toPascalCase(key)} )`)
    : console.log(`%c${toPascalCase(key)} verificado(a)! `, "color:green");
});

const validaPaciente: boolean = Object.values(paciente).every(
  (value) => value != null,
);

validaPaciente
  ? console.log("\n%cPaciente valido! ", "color: blue")
  : console.error("\n%cPaciente Invalido! ", "color: red");

console.log("\n"); // Apenas adicionando um espaço 󰯖
console.info(paciente, "\n");
