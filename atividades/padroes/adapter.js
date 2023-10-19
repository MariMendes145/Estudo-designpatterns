// Classe Pato
class Pato {
  grasnar() {
    console.log("Quack!Quack!");
  }

  nadar() {
    console.log("Estou nadando!");
  }
}

class Galinha {
  cacarejar() {
    console.log("Cocoricó! Cocoricó!");
  }
  voar() {
    console.log("Voando curto!");
  }
}

// Classe AdaptadorPato que age como uma Galinha
class AdaptadorPato {
  constructor(pato) {
    this.pato = pato;
  }

  cacarejar() {
    // O método de adaptação
    this.pato.grasnar();
  }

  voar() {
    this.pato.nadar();
  }
}

// Classe AdaptadorPatoDemo para demonstrar o uso do adaptador
class AdaptadorPatoDemo {
  static main() {
    const pato = new Pato();
    const galinha = new Galinha();
    const adaptador = new AdaptadorPato(pato);

    console.log("Pato:");
    pato.grasnar();
    pato.nadar();

    console.log("\nGalinha: ");
    galinha.cacarejar();
    galinha.voar();

    console.log("\nGalinha (Pato Adaptado):");
    adaptador.cacarejar();
    adaptador.voar();
  }
}

// Executar a demonstração
AdaptadorPatoDemo.main();
