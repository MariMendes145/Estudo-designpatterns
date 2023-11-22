class SistemaSeguranca {
  private static instancia: SistemaSeguranca;
  private senhaBaseSecreta: string = "SenhaBaseSecreta$%!*!";

  private constructor() {
    // Inicialização do sistema de segurança
    console.log("Inicializando o sistema de segurança!");
  }

  public static obterInstancia(): SistemaSeguranca {
    if (!SistemaSeguranca.instancia) {
      SistemaSeguranca.instancia = new SistemaSeguranca();
    }
    return SistemaSeguranca.instancia;
  }

  public acessarBaseSecreta(senhaInserida: string): void {
    if (senhaInserida === this.senhaBaseSecreta) {
      console.log("Acesso concedido à Base Secreta!");
    } else {
      console.log("Acesso negado. Senha incorreta!");
    }
  }
}

// Programa principal
const agente = SistemaSeguranca.obterInstancia();
const senha = "SenhaBaseSecreta$%!*!";

agente.acessarBaseSecreta(senha);
