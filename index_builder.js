var PersonagemBuilder = /** @class */ (function () {
    function PersonagemBuilder() {
        this.reset();
    }
    PersonagemBuilder.prototype.reset = function () {
        this.personagem = new Personagem();
    };
    PersonagemBuilder.prototype.definirNome = function (nome) {
        this.personagem.aspectos.push("Nome: ".concat(nome));
    };
    PersonagemBuilder.prototype.definirClasse = function (classe) {
        this.personagem.aspectos.push("Classe: ".concat(classe));
    };
    PersonagemBuilder.prototype.definirRaca = function (raca) {
        this.personagem.aspectos.push("Ra\u00E7a: ".concat(raca));
    };
    PersonagemBuilder.prototype.definirHabilidade = function (hab) {
        this.personagem.aspectos.push("Habilidade: ".concat(hab));
    };
    PersonagemBuilder.prototype.definirEquipamento = function (equip) {
        this.personagem.aspectos.push("Equipamento: ".concat(equip));
    };
    PersonagemBuilder.prototype.finalizarPersonagem = function () {
        var personagemFinal = this.personagem;
        this.reset();
        return personagemFinal;
    };
    PersonagemBuilder.prototype.listarAspectos = function () {
        this.personagem.listarAspectos();
    };
    return PersonagemBuilder;
}());
var Personagem = /** @class */ (function () {
    function Personagem() {
        this.aspectos = [];
    }
    Personagem.prototype.listarAspectos = function () {
        console.log("Aspectos do personagem: \n".concat(this.aspectos.join(', \n'), "\n"));
    };
    return Personagem;
}());
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.setBuilder = function (builder) {
        this.builder = builder;
    };
    Director.prototype.buildAspectos = function (nome, classe, raca, hab, equip) {
        this.builder.definirNome(nome);
        this.builder.definirClasse(classe);
        this.builder.definirRaca(raca);
        this.builder.definirHabilidade(hab);
        this.builder.definirEquipamento(equip);
    };
    return Director;
}());
function clientCode(diretor) {
    var builder = new PersonagemBuilder();
    diretor.setBuilder(builder);
    diretor.buildAspectos("Helena", "Professora", "Branca", "Encantar os alunos", "Caneta");
    var personagem = builder.finalizarPersonagem();
    personagem.listarAspectos(); // Exibir aspectos do personagem
}
clientCode(new Director());
