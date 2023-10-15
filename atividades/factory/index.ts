// Interface comum para produtos
interface Computer {
  getRAM(): string;
  getHD(): string;
  getCPU(): string;
  getType(): string;
  toString(): string;
}

// Implementação concreta de um PC
class PC implements Computer {
  constructor(
    private ram: string,
    private hd: string,
    private cpu: string,
    private type: string
  ) {}

  getRAM() {
    return this.ram;
  }

  getHD() {
    return this.hd;
  }

  getCPU() {
    return this.cpu;
  }

  getType() {
    return "PC";
  }

  toString() {
    return `${this.type} - RAM: ${this.ram} GB, HD: ${this.hd} GB, CPU: ${this.cpu} GHz`;
  }
}

// Implementação concreta de um Server
class Server implements Computer {
  constructor(
    private ram: string,
    private hd: string,
    private cpu: string,
    private type: string
  ) {}

  getRAM() {
    return this.ram;
  }

  getHD() {
    return this.hd;
  }

  getCPU() {
    return this.cpu;
  }

  getType() {
    return "Server";
  }

  toString() {
    return `${this.type} - RAM: ${this.ram} GB, HD: ${this.hd} GB, CPU: ${this.cpu} GHz`;
  }
}

//fábrica
class ComputerFactory {
  createComputer(ram: string, hd: string, cpu: string, type: string) {
    if (type === "PC") {
      return new PC(ram, hd, cpu, type);
    } else if (type === "Server") {
      return new Server(ram, hd, cpu, type);
    } else {
      throw new Error("Tipo de computador desconhecido");
    }
  }
}

// Exemplo
const factory = new ComputerFactory();
const pc = factory.createComputer("4", "250", "3.4", "PC");
const server = factory.createComputer("32", "1000", "2.8", "Server");

console.log(pc.toString());
console.log(server.toString());
