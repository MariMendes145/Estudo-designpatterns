class Sanduiche {
  //Classe Abstrata: Sanduíche
  getPreco() {
    return 0;
  }
  getTipo() {
    return "Sanduíche de Carne";
  }
}

class FrangoAssado extends Sanduiche {
  //Classe Concreta: Sanduíche de Frango assado
  getPreco() {
    return 4.5;
  }
  getTipo() {
    return `Sanduíche de frango assado`;
  }
}

class DecoratorSanduiche extends Sanduiche {
  //Classe Abstrata: Decorador do Sanduíche
  constructor(sanduiche) {
    super();
    this.sanduiche = sanduiche;
  }
  //Implementações delegadas pelos métodos abstratos para o decorator
  getTipo() {
    return this.sanduiche.getTipo();
  }
  getPreco() {
    return this.sanduiche.getPreco();
  }
}

class Pepperoni extends DecoratorSanduiche {
  //Classe Concreta: Adicional de Pepperoni usando decorator
  constructor(sanduiche) {
    super(sanduiche);
  }

  getTipo() {
    return `${this.sanduiche.getTipo()} com pepperoni`;
  }
  getPreco() {
    return this.sanduiche.getPreco() + 0.99; //Adciona o custo do peperonni
  }
}

class QueijoMussarelaRalado extends DecoratorSanduiche {
  //Classe Concreta: Adicional de Queijo Mussarela Ralado
  constructor(sanduiche) {
    super(sanduiche);
  }

  getTipo() {
    return this.sanduiche.getTipo() + ", Queijo Mussarela Ralado";
  }
  getPreco() {
    return this.sanduiche.getPreco() + 2;
  }
}

// Cria um sanduíche de frango assado decorado com queijo mussarela ralado e pepperoni
const sanduicheBase = new FrangoAssado(); // Sanduíche de frango assado
const sanduicheDecorado = new QueijoMussarelaRalado(
  new Pepperoni(sanduicheBase)
);

console.log(
  `Pedido: ${sanduicheDecorado.getTipo()} \nCusto: $${sanduicheDecorado.getPreco()}`
);
