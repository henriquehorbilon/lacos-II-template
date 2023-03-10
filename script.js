// --------------- PRÁTICA GUIADA ---------------


//const bimestre1 = [10, 10, 10, 10] // soma = 40 ; media = 10
//const bimestre2 = [8, 5, 7.5, 3]
//const bimestre3 = [6, 7, 8.5, 10]
//const bimestre4 = [3, 5, 2, 0]

//const notasDoAno = [bimestre1, bimestre2, bimestre3, bimestre4]

// for (let i = 0; i < notasDoAno.length; i++) {
//   const bimestreDaVez = notasDoAno[i]

//   let soma = 0
//   let media = 0

//   // construindo laço para percorrer cada apartamento do andar
//   for (let j = 0; j < bimestreDaVez.length; j++) {
//     const nota = bimestreDaVez[j]
//     soma = soma + nota
//   }

//   media = soma / bimestreDaVez.length

//   console.log(`A soma das notas do bimestre ${[i + 1]} é ${soma} \nA média das notas do bimestre ${[i + 1]} é ${media}`)
// }



for (let indice in notasDoAno) {
  indice = Number(indice)

  let soma = 0
  let media = 0

  for (let elemento of notasDoAno[indice]) {
    soma = soma + elemento
  }
  media = soma / notasDoAno[indice].length

  console.log(`A soma das notas do bimestre ${indice + 1} é ${soma} \nA média das notas do bimestre ${indice + 1} é ${media}`)
}






// --------------- EXERCÍCIO DE FIXAÇÃO ---------------
const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

for (let indice in filmes) {
  const filme = filmes[indice]
  const titulo = filme.titulo
  const ano = filme.ano
  const diretor = filme.diretor
  const elenco = filme.elenco

  const frase = `${titulo}, de ${ano}, dirigido por ${diretor}.`
  console.log(frase)

  for (let artista of elenco) {
    const indiceArtista = elenco.indexOf(artista)

    const fraseElenco = `Atriz/Ator ${indiceArtista + 1}: ${artista}`

    console.log(fraseElenco)
  }
}

// escreva seu código abaixo 👇🏻


// for (let i = 0; i < filmes.length; i++) {
//   const filme = filmes[i]
//   const elenco = filme.elenco

//   const frase = `${filme.titulo}, de ${filme.ano}, dirigido por ${filme.diretor}.`

//   console.log(frase)

//   for (let j = 0; j < elenco.length; j++) {
//     const fraseElenco = `Atriz/Ator ${j + 1}: ${elenco[j]}`

//     console.log(fraseElenco)
//   }
// }