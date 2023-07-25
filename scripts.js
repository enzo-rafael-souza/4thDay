// Coloque o código JavaScript aqui
let numeroInicial;
let tentativas;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function resetGame() {
  numeroInicial = getRandomNumber(0, 10);
  tentativas = 3;
  document.getElementById('chute').disabled = false;
  document.getElementById('chute').value = '';
  document.getElementById('chute').focus();
  document.getElementById('resultado').textContent = '';
}

function adivinharNumero() {
  const chuteInput = document.getElementById('chute');
  const resultadoDiv = document.getElementById('resultado');
  const chute = parseInt(chuteInput.value);

  if (isNaN(chute) || chute < 0 || chute > 10) {
    resultadoDiv.textContent = 'Por favor, digite um número válido entre 0 e 10.';
    chuteInput.value = '';
    chuteInput.focus();
    return;
  }

  if (chute === numeroInicial) {
    resultadoDiv.textContent = 'Parabéns! Você acertou! 🎉';
    chuteInput.disabled = true;
  } else {
    tentativas--;
    if (tentativas > 0) {
      resultadoDiv.textContent = `Tente novamente! Você tem mais ${tentativas} tentativa(s). 🙁`;
      chuteInput.value = '';
      chuteInput.focus();
    } else {
      resultadoDiv.textContent = `Suas tentativas acabaram. 😞 O número inicial era ${numeroInicial}.`;
      chuteInput.disabled = true;
    }
  }
}

resetGame(); // Inicia o jogo ao carregar a página