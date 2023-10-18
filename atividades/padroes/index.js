// Implementação concreta de um PC
var PC = /** @class */ (function () {
    function PC(ram, hd, cpu, type) {
        this.ram = ram;
        this.hd = hd;
        this.cpu = cpu;
        this.type = type;
    }
    PC.prototype.getRAM = function () {
        return this.ram;
    };
    PC.prototype.getHD = function () {
        return this.hd;
    };
    PC.prototype.getCPU = function () {
        return this.cpu;
    };
    PC.prototype.getType = function () {
        return "PC";
    };
    PC.prototype.toString = function () {
        return "".concat(this.type, " - RAM: ").concat(this.ram, " GB, HD: ").concat(this.hd, " GB, CPU: ").concat(this.cpu, " GHz");
    };
    return PC;
}());
// Implementação concreta de um Server
var Server = /** @class */ (function () {
    function Server(ram, hd, cpu, type) {
        this.ram = ram;
        this.hd = hd;
        this.cpu = cpu;
        this.type = type;
    }
    Server.prototype.getRAM = function () {
        return this.ram;
    };
    Server.prototype.getHD = function () {
        return this.hd;
    };
    Server.prototype.getCPU = function () {
        return this.cpu;
    };
    Server.prototype.getType = function () {
        return "Server";
    };
    Server.prototype.toString = function () {
        return "".concat(this.type, " - RAM: ").concat(this.ram, " GB, HD: ").concat(this.hd, " GB, CPU: ").concat(this.cpu, " GHz");
    };
    return Server;
}());
//fábrica
var ComputerFactory = /** @class */ (function () {
    function ComputerFactory() {
    }
    ComputerFactory.prototype.createComputer = function (ram, hd, cpu, type) {
        if (type === "PC") {
            return new PC(ram, hd, cpu, type);
        }
        else if (type === "Server") {
            return new Server(ram, hd, cpu, type);
        }
        else {
            throw new Error("Tipo de computador desconhecido");
        }
    };
    return ComputerFactory;
}());
// Exemplo
var factory = new ComputerFactory();
var pc = factory.createComputer("4", "250", "3.4", "PC");
var server = factory.createComputer("32", "1000", "2.8", "Server");
console.log(pc.toString());
console.log(server.toString());
