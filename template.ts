export abstract class Televisao {
  abstract propriedades: any;
  public templateMethod(): void {
    // define o esqueleto do algoritmo
    this.ligar();
    this.operacao_requerida1();
    this.mudarCanalCima();
    this.mudarCanalBaixo();
    this.aumentarVolume();
    this.hook();
    this.operacao_requerida2();
    this.desligar();
  }

  // metodos implementados
  protected ligar(): void {
    console.log("Ligando TV!");
  }
  protected operacao_requerida1() {
    console.log("Modifique na subclasse");
  }
  protected mudarCanalCima(): void {
    console.log("Mudando canal para cima!");
  }
  protected mudarCanalBaixo(): void {
    console.log("Mudando canal para baixo!");
  }

  protected aumentarVolume(): void {
    console.log("Aumentar volume!");
  }

  protected hook(): void {
    console.log("Posso ser sobrescrito!");
  }

  protected operacao_requerida2() {
    console.log("Modifique na subclasse");
  }
  protected desligar() {
    console.log("Desligando a TV!");
  }
}

class Samsung extends Televisao {
  propriedades = {
    largura: "78",
    altura: "126,4",
  };

  protected ligar(): void {
    console.log("Ligando TV Samsung!");
  }
  protected operacao_requerida1() {
    console.log("Conectando na Wifi");
  }

  protected operacao_requerida2() {
    console.log("Espelhando dispositivo na TV!");
  }
  protected desligar() {
    console.log("Desligando a TV Samsung!");
  }
}

class Lg extends Televisao {
  propriedades = {
    largura: "90",
    altura: "159,4",
  };
  protected ligar(): void {
    console.log("Ligando TV LG!");
  }

  protected operacao_requerida1() {
    console.log("TV antiga sem conexão com wifi!");
  }

  protected operacao_requerida2() {
    console.log("TV antiga sistema nao suporta espelhamento!");
  }
  protected desligar() {
    console.log("Desligando a TV LG!");
  }
}
//funcao para chamar o metodo template
function codigo_cliente(Televisao: Televisao) {
  Televisao.templateMethod();
}
console.log("Mesmo codigo funciona para diferentes subclasses");
codigo_cliente(new Samsung());
console.log("");
codigo_cliente(new Lg());
console.log("");
