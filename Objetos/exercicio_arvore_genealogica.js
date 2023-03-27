/* 
Arvore Genealogica Simples

1. Crie um objeto "pessoa" com as propriedades "nome", "idade", "sexo" e "parentesco". 
2.  Em seguida, crie um objeto "arvore" que contém uma lista de pessoas e suas respectivas informações. 
3. Em seguida, crie uma função que exiba o nome dos filhos de uma determinada pessoa.

*/

let arvoreGenealogica = {
    pessoas: [
      { nome: "Maria", idade: 70, sexo: "feminino", parentesco: "avó", filhos: ["João", "Pedro", "Ana"] },
      { nome: "João", idade: 50, sexo: "masculino", parentesco: "filho", filhos: ["Lucas", "Julia"] },
      { nome: "Pedro", idade: 45, sexo: "masculino", parentesco: "filho", filhos: ["Mariana", "Gabriel", "Luiza"] },
      { nome: "Ana", idade: 40, sexo: "feminino", parentesco: "filha", filhos: ["Rafael", "Isabela"] },
      { nome: "Lucas", idade: 20, sexo: "masculino", parentesco: "neto" },
      { nome: "Julia", idade: 18, sexo: "feminino", parentesco: "neta" },
      { nome: "Mariana", idade: 15, sexo: "feminino", parentesco: "neta" },
      { nome: "Gabriel", idade: 10, sexo: "masculino", parentesco: "neto" },
      { nome: "Luiza", idade: 8, sexo: "feminino", parentesco: "neta" },
      { nome: "Rafael", idade: 5, sexo: "masculino", parentesco: "neto" },
      { nome: "Isabela", idade: 3, sexo: "feminino", parentesco: "neta" }
    ]
  };
  