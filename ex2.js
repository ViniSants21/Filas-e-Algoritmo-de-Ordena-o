//Vinicius Queiroz Santos
class FilaPrioridade {
    #itens = [];

    // Adiciona um paciente na posição correta de acordo com sua prioridade.
    enfileirar(paciente, prioridade) {
        const novo = {
            paciente: paciente,
            prioridade: prioridade
        };

        // Procura o primeiro item com prioridade maior.
        // Assim, itens com a mesma prioridade permanecem na ordem de chegada.
        const indice = this.#itens.findIndex(
            item => item.prioridade > prioridade
        );

        if (indice === -1) {
            this.#itens.push(novo);
        } else {
            this.#itens.splice(indice, 0, novo);
        }
    }

    // Remove e devolve o próximo paciente a ser atendido.
    desenfileirar() {
        if (this.#itens.length === 0) {
            return null;
        }

        return this.#itens.shift();
    }

    // Retorna os nomes dos pacientes na ordem de atendimento.
    listar() {
        return this.#itens.map(item => item.paciente);
    }
}

// Dados de teste
const t = new FilaPrioridade();

t.enfileirar('Marcos', 3);
t.enfileirar('Júlia', 1);
t.enfileirar('Pedro', 3);
t.enfileirar('Rita', 2);
t.enfileirar('Iara', 1);

console.log(t.listar());
console.log(t.desenfileirar());
console.log(t.desenfileirar());
console.log(t.listar());

/*
Saída esperada:

[ 'Júlia', 'Iara', 'Rita', 'Marcos', 'Pedro' ]
{ paciente: 'Júlia', prioridade: 1 }
{ paciente: 'Iara', prioridade: 1 }
[ 'Rita', 'Marcos', 'Pedro' ]
*/