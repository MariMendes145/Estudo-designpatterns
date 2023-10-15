interface Builder {
    definirNome(nome: string): void;
    definirClasse(classe: string): void;
    definirRaca(raca: string): void;
    definirHabilidade(hab: string): void;
    definirEquipamento(equip: string): void;
}

class PersonagemBuilder implements Builder {

    private personagem: Personagem;

    constructor() {
        this.reset();
    }

    public reset() {
        this.personagem = new Personagem();
    }

    public definirNome(nome: string): void {
        this.personagem.aspectos.push(`Nome: ${nome}`);
    }
    public definirClasse(classe: string): void {
        this.personagem.aspectos.push(`Classe: ${classe}`);
    }
    public definirRaca(raca: string): void {
        this.personagem.aspectos.push(`Raça: ${raca}`);
    }
    public definirHabilidade(hab: string): void {
        this.personagem.aspectos.push(`Habilidade: ${hab}`);
    }
    public definirEquipamento(equip: string): void {
        this.personagem.aspectos.push(`Equipamento: ${equip}`);
    }

    public finalizarPersonagem(): Personagem {
        const personagemFinal = this.personagem;
        this.reset();
        return personagemFinal;
    }

    public listarAspectos(): void {
        this.personagem.listarAspectos();
    }
    
}

class Personagem {
    public aspectos: string[] = [];
    
    public listarAspectos(): void {
        console.log(`Aspectos do personagem: \n${this.aspectos.join(', \n')}\n`);
    }
}

class Director {
    private builder: Builder;

    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    public buildAspectos(nome: string, classe: string, raca: string, hab: string, equip: string): void {
        this.builder.definirNome(nome);
        this.builder.definirClasse(classe);
        this.builder.definirRaca(raca);
        this.builder.definirHabilidade(hab);
        this.builder.definirEquipamento(equip);
    }
}

function clientCode(diretor: Director): void {
    const builder = new PersonagemBuilder();
    diretor.setBuilder(builder);

    diretor.buildAspectos("Helena", "Professora", "Branca", "Encantar os alunos", "Caneta");
    
    const personagem = builder.finalizarPersonagem();
    personagem.listarAspectos(); // Exibir aspectos do personagem
}

clientCode(new Director());
