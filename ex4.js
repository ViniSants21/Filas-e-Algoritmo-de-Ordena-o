// Vinicius Queiroz Santos
const alunos = [
    { nome: 'Bruno', nota: 7.5, idade: 18 },
    { nome: 'Ana', nota: 9.2, idade: 17 },
    { nome: 'Carla', nota: 7.5, idade: 19 },
    { nome: 'Diego', nota: 6.0, idade: 18 },
    { nome: 'Édson', nota: 9.2, idade: 20 },
    { nome: 'Fabiana', nota: 8.1, idade: 17 }
];

// Cria uma listagem por nota, da maior para a menor.
const porNota = [...alunos].sort((a, b) => b.nota - a.nota);

console.log('A) Por nota:');

for (const aluno of porNota) {
    console.log(`${aluno.nome} (${aluno.nota})`);
}


// Cria uma listagem por nome em ordem alfabética.
const porNome = [...alunos].sort((a, b) =>
    a.nome.localeCompare(b.nome)
);

console.log('\nB) Por nome:');

for (const aluno of porNome) {
    console.log(`${aluno.nome} (${aluno.nota})`);
}


// Cria uma listagem por nota decrescente.
// Em caso de empate, usa o nome como segundo critério.
const porNotaENome = [...alunos].sort((a, b) => {
    const diferencaNota = b.nota - a.nota;

    if (diferencaNota !== 0) {
        return diferencaNota;
    }

    return a.nome.localeCompare(b.nome);
});

console.log('\nC) Por nota e nome:');

for (const aluno of porNotaENome) {
    console.log(`${aluno.nome} (${aluno.nota})`);
}


// Cria uma cópia e pega somente os três primeiros.
const tresPrimeiros = [...porNotaENome].slice(0, 3);

console.log('\nD) Três primeiros:');

for (const aluno of tresPrimeiros) {
    console.log(`${aluno.nome} (${aluno.nota})`);
}


/*
Saída esperada da listagem C:

Ana (9.2)
Édson (9.2)
Fabiana (8.1)
Bruno (7.5)
Carla (7.5)
Diego (6)

Observação:

Usamos localeCompare() para ordenar corretamente nomes
com acentos, como "Édson".

Também usamos [...alunos] antes do sort() para não alterar
o array original.
*/