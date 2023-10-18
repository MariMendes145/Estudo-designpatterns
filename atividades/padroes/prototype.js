class Veiculo {
  constructor(modelo, marca, cor, numeroRodas) {
    this.modelo = modelo;
    this.marca = marca;
    this.cor = cor;
    this.numeroRodas = numeroRodas;
  }

  clone() {
    const constructor = this.constructor;
    return new constructor(this.modelo, this.marca, this.cor, this.numeroRodas);
  }

  represent() {
    return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Número de Rodas: ${this.numeroRodas}`;
  }
}

class Carro extends Veiculo {
  constructor(modelo, marca, cor, numeroRodas, numeroPortas) {
    super(modelo, marca, cor, numeroRodas);
    this.numeroPortas = numeroPortas;
  }

  clone() {
    const constructor = this.constructor;
    return new constructor(
      this.modelo,
      this.marca,
      this.cor,
      this.numeroRodas,
      this.numeroPortas
    );
  }

  represent() {
    return `${super.represent()}, Número de Portas: ${this.numeroPortas}`;
  }
}

class Moto extends Veiculo {
  constructor(modelo, marca, cor, numeroRodas, cilindradas) {
    super(modelo, marca, cor, numeroRodas);
    this.cilindradas = cilindradas;
  }

  clone() {
    const constructor = this.constructor;
    return new constructor(
      this.modelo,
      this.marca,
      this.cor,
      this.numeroRodas,
      this.cilindradas
    );
  }

  represent() {
    return `${super.represent()}, Cilindradas: ${this.cilindradas}`;
  }
}

// Classe de Aplicação
class Aplicacao {
  static criarVeiculos() {
    const veiculos = [
      new Carro("Amarok", "Wolkswagem", "Preto", 4, 4),
      new Carro("Strada", "Fiat", "Vermelho", 4, 2),
      new Carro("Hb20", "Hyundai", "Prata", 4, 2),
      new Moto("trail", "Harley Davison", "Verde", 2, 500),
      new Moto("custom", "Harley Davison", "Preto", 2, 750),
      new Moto("street", "Yamaha", "Branco", 2, 600),
    ];

    return veiculos;
  }

  static clonarVeiculos(veiculos) {
    const veiculosClonados = veiculos.map((veiculo) => veiculo.clone());
    return veiculosClonados;
  }
}

const veiculos = Aplicacao.criarVeiculos();
const veiculosClonados = Aplicacao.clonarVeiculos(veiculos);

veiculosClonados.forEach((veiculo) => {
  console.log(veiculo.represent());
});
