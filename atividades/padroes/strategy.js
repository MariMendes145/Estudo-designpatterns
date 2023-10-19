const prompt = require("prompt-sync")({ sigint: true });

// Interface Strategy
class Strategy {
  execute(num1, num2) {}
}

// 3 Classes concretas soma, subtracao, multiplicacao
class SomaStrategy extends Strategy {
  execute(num1, num2) {
    return num1 + num2;
  }
}

class SubtracaoStrategy extends Strategy {
  execute(num1, num2) {
    return num1 - num2;
  }
}

class MultiplicacaoStrategy extends Strategy {
  execute(num1, num2) {
    return num1 * num2;
  }
}

class Calculadora {
  constructor(strategy) {
    this.strategy = strategy;
  }

  calcular(num1, num2) {
    return this.strategy.execute(num1, num2);
  }
}

const num1 = parseInt(prompt("Digite um número: "));
const num2 = parseInt(prompt("Digite mais um número: "));
const operacao = prompt("Escolha entre +|-|*");

let strategy;

//Escolhendo qual opcao irá realizar
if (operacao === "+") {
  strategy = new SomaStrategy();
} else if (operacao === "-") {
  strategy = new SubtracaoStrategy();
} else if (operacao === "*") {
  strategy = new MultiplicacaoStrategy();
} else {
  console.log("Operação inválida");
}

// Usando a Strategy para calcular e exibir o resultado
const calculadora = new Calculadora(strategy);
const resultado = calculadora.calcular(num1, num2);

console.log(`Resultado da operação: ${resultado}`);
