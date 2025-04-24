// Objetos


Aluno = Antonio, Matricula = 123 , nota = 7
Aluno = Pedro, Matricula = 999 , nota = 8
Aluno = João, Matricula = 555 , nota = 9



const aluno = [ 
    { Aluno: "Antonio", Matricula: 123, nota: 7 },
    { Aluno: "Pedro", Matricula: 999, nota: 8 },
    { Aluno: "João", Matricula: 555, nota: 9 }
  ];
  
  
  
  console.log(aluno)
  console.log(aluno[1])
  

  
  for( let i = 0; i < aluno.length; i++){
    console.log(` O aluno ${aluno[i].Aluno}, matricula ${aluno[i].Matricula}, teve nota ${aluno[i].nota} `);
  }
    
  
    