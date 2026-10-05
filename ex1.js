// Vinicius Queiroz Santos
class Fila {
    #itens = [];

    // Coloca uma pessoa no final da fila.
    enfileirar(nome) {
        this.#itens.push(nome);
    }

    // Remove e devolve a pessoa que está no início da fila.
    desenfileirar() {
        if (this.vazia()) {
            return null;
        }

        return this.#itens.shift();
    }

    // Devolve a primeira pessoa da fila sem removê-la.
    primeiro() {
        if (this.vazia()) {
            return null;
        }

        return this.#itens[0];
    }

    // Verifica se a fila está vazia.
    vazia() {
        return this.#itens.length === 0;
    }

    // Retorna a quantidade de pessoas na fila.
    tamanho() {
        return this.#itens.length;
    }
}

// Dados de teste
const f = new Fila();

f.enfileirar('Ana');
f.enfileirar('Bruno');
f.enfileirar('Carla');

console.log(f.tamanho());
console.log(f.primeiro());
console.log(f.desenfileirar());
console.log(f.desenfileirar());
console.log(f.tamanho());
console.log(f.desenfileirar());
console.log(f.desenfileirar());
console.log(f.vazia());

/*
Saída esperada:

3
Ana
Ana
Bruno
1
Carla
null
true

Para pensar:
Tentar acessar f.#itens fora da classe gera um erro de
sintaxe, pois #itens é um campo privado da classe.
Isso é chamado de encapsulamento.
*/