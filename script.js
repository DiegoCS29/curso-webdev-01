//Básico
console.log('Hello World');
console.info('Informação');
console.warn('Aviso');
console.error('Erro');

//Tabelas
console.table([
    { id: 1, objetivo: 'Aprender JS' },
    { id: 2, objetivo: "Trablhar" }
]);

//Agrupamento
console.group('Alunos');
console.log('Diego');
console.log('Felps');
console.log('Lucas');
console.log('Romulo');
console.groupEnd();

//Medir o tempo
console.time('Timer');
console.log('Medindo o tempo');
console.timeEnd('Timer');

//Declaração de variáveis 

//Var (mais antigo)
var antigo = "Forma antiga de declarar uma variável";

//Let (escopo de bloco, pode ser reatribuída)
let name = "Diego";
name = 'Lucas'; // permitido

//Const (escopo de bloco, não pode ser reatribuída)
const API_URL = "https://api.example.com";
// API_URL = "..."; // Erro

//Dados Primitivos
let texto = 'Olá'; //string
console.log(texto, typeof texto);

let numero = 81; //number
console.log(numero, typeof numero);

let bool = false; //Booleano
console.log(bool, typeof bool);

let semValor; //Undefined
console.log(semValor, typeof semValor);

let uniqueId = Symbol("id"); //Symbol
console.log(uniqueId, typeof uniqueId);

let bigNumero = 888888888888888888n; //BigInt
console.log(bigNumero, typeof bigNumero);

//Objetos
/*let task = {
  id: 1,
  title: "Aprender JavaScript",
  completed: false,
  assignee: {
    name: "João",
    email: "joao@example.com"
  },
  toggleComplete() {
    this.completed = !this.completed;
  }
};*/ 

//Vetores (Arrays)
let tasks = [
  { id: 1, title: "Tarefa 1", completed: false },
  { id: 2, title: "Tarefa 2", completed: true }
];

//Datas
let hoje = new Date();
console.log(hoje)
let aniversario = new Date("03-29-2026");
console.log(aniversario)