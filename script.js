let calcular = document.getElementById('calcular');

    function soma () {
        let n1 = parseFloat(document.getElementById('nota1').value);
        let n2 = parseFloat(document.getElementById('nota2').value);
        let n3 = parseFloat(document.getElementById('nota3').value);
        let n4 = parseFloat(document.getElementById('nota4').value);

        let mediaAluno = ((n1 + n2 + n3 + n4)/4) ;

        if (mediaAluno < 5){
            resultado.innerText = `ALUNO REPROVADO com média ${mediaAluno} `;
        } else if (mediaAluno == 6 ) {
            resultado.innerText = `ALUNO EM RECUPERAÇÃO com média ${mediaAluno} `;
        } else if (mediaAluno > 7) {
            resultado.innerText = `PARABÉNS!! Aluno APROVADO com média ${mediaAluno} `; 
        }

    }
calcular.addEventListener('click', soma);