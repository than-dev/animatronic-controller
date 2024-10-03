const positionMapper = {
  left: 0,  // Posição inicial do olho esquerdo ajustada
  right: 0 // Posição inicial do olho direito ajustada
};

// Inicializar as rotações dos olhos
leftEye.rotation.y = THREE.Math.degToRad(positionMapper.left);
rightEye.rotation.y = THREE.Math.degToRad(positionMapper.right);

function rotateEye(eye, direction) {
  const rotationStep = 15; // Graus que o olho deve mover
  const pin = eye === leftEye ? 12 : 11; // Definindo o pino correspondente

  // Se for o olho esquerdo
  if (eye === leftEye) {
    console.log('OLHO ESQUERDA', positionMapper.left)
      if (direction === 'left') {
          // Permitir movimento para a esquerda até 90 graus
          if (positionMapper.left < 90) {
              positionMapper.left += rotationStep;  // Mover para a esquerda
              leftEye.rotation.y = THREE.Math.degToRad(positionMapper.left);
          }
      } else if (direction === 'right') {
          // Permitir movimento para a direita até 0 graus
          if (positionMapper.left > -90) {
              positionMapper.left -= rotationStep;  // Mover para a direita
              leftEye.rotation.y = THREE.Math.degToRad(positionMapper.left);
          }
      }
  } 
  // Se for o olho direito
  else if (eye === rightEye) {
      console.log('OLHO DIREITA', positionMapper.right)

      if (direction === 'left') {
          // Permitir movimento para a esquerda até 90 graus
          if (positionMapper.right < 90) {
              positionMapper.right += rotationStep;  // Mover para a esquerda
              rightEye.rotation.y = THREE.Math.degToRad(positionMapper.right);
          }
      } else if (direction === 'right') {
          // Permitir movimento para a direita até -90 graus
          if (positionMapper.right > -90) {
              positionMapper.right -= rotationStep;  // Mover para a direita
              rightEye.rotation.y = THREE.Math.degToRad(positionMapper.right);
          }
      }
  }

  moveServo(pin, direction); // Faz a chamada HTTP para mover o servo
}

// Adicionando ouvintes de eventos para os botões
document.getElementById('leftEyeLeft').addEventListener('click', () => {
  rotateEye(leftEye, 'left');
});

document.getElementById('leftEyeRight').addEventListener('click', () => {
  rotateEye(leftEye, 'right');
});

document.getElementById('rightEyeLeft').addEventListener('click', () => {
  rotateEye(rightEye, 'left');
});

document.getElementById('rightEyeRight').addEventListener('click', () => {
  rotateEye(rightEye, 'right');
});
