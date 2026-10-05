// Vinicius Queiroz Santos
function bubbleSort(v) {
    const a = [...v];
    let comparacoes = 0;
    let trocas = 0;

    for (let i = 0; i < a.length - 1; i++) {
        let trocou = false;

        for (let j = 0; j < a.length - 1 - i; j++) {
            comparacoes++;

            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
                trocas++;
                trocou = true;
            }
        }

        // Se não houve troca, o vetor já está ordenado.
        if (!trocou) {
            break;
        }
    }

    return {
        ordenado: a,
        comparacoes: comparacoes,
        trocas: trocas
    };
}

// Ordena usando Selection Sort e retorna o resultado e as métricas.
function selectionSort(v) {
    const a = [...v];
    let comparacoes = 0;
    let trocas = 0;

    for (let i = 0; i < a.length - 1; i++) {
        let menor = i;

        for (let j = i + 1; j < a.length; j++) {
            comparacoes++;

            if (a[j] < a[menor]) {
                menor = j;
            }
        }

        if (menor !== i) {
            [a[i], a[menor]] = [a[menor], a[i]];
            trocas++;
        }
    }

    return {
        ordenado: a,
        comparacoes: comparacoes,
        trocas: trocas
    };
}

// Ordena usando Insertion Sort e retorna o resultado e as métricas.
function insertionSort(v) {
    const a = [...v];
    let comparacoes = 0;
    let trocas = 0;

    for (let i = 1; i < a.length; i++) {
        const atual = a[i];
        let j = i - 1;

        while (j >= 0) {
            comparacoes++;

            if (a[j] > atual) {
                a[j + 1] = a[j];
                trocas++;
                j--;
            } else {
                break;
            }
        }

        a[j + 1] = atual;
    }

    return {
        ordenado: a,
        comparacoes: comparacoes,
        trocas: trocas
    };
}


// Dados de teste
const base = [29, 10, 14, 37, 14, 2, 8];

const jaOrdenado = [2, 8, 10, 14, 14, 29, 37];

const invertido = [37, 29, 14, 14, 10, 8, 2];

const algoritmos = {
    bubble: bubbleSort,
    selection: selectionSort,
    insertion: insertionSort
};

const vetores = {
    base: base,
    jaOrdenado: jaOrdenado,
    invertido: invertido
};

const resultados = [];

for (const [nome, algoritmo] of Object.entries(algoritmos)) {
    for (const [rotulo, vetor] of Object.entries(vetores)) {
        const resultado = algoritmo(vetor);

        resultados.push({
            algoritmo: nome,
            vetor: rotulo,
            comparacoes: resultado.comparacoes,
            trocas: resultado.trocas
        });
    }
}

console.table(resultados);

/*
PERGUNTAS

1. Qual algoritmo fez menos comparações com o vetor já ordenado?

Resposta:
O Bubble Sort fez menos comparações.

Ele realizou apenas 6 comparações e 0 trocas, porque possui
uma flag que identifica que o vetor já está ordenado e
interrompe o algoritmo após a primeira passagem.

2. Qual fez menos trocas no vetor invertido?

Resposta:
O Selection Sort fez menos trocas.

Ele procura o menor elemento e realiza no máximo uma troca
por rodada. Por isso, mesmo com o vetor invertido, realiza
poucas trocas em comparação com os outros algoritmos.

3. O vetor possui dois valores 14. Depois de ordenar, dá para
saber qual deles veio primeiro no array original?

Resposta:
Como os dois valores são iguais, apenas olhando os números
não é possível diferenciá-los.

Isso está relacionado à estabilidade. Um algoritmo estável
mantém a ordem relativa dos elementos que possuem o mesmo
valor.
*/