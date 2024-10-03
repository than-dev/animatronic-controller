// Função para criar o olho com pupila
function createEye() {
    const eyeGroup = new THREE.Group();
    
    // Criação da geometria do olho (esfera)
    const eyeGeometry = new THREE.SphereGeometry(1, 32, 32); // Tamanho da esfera do olho
    const eyeMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff }); // Cor branca do olho
    const eye = new THREE.Mesh(eyeGeometry, eyeMaterial);

    // Criar a pupila (esfera menor)
    const pupilGeometry = new THREE.SphereGeometry(0.3, 32, 32); // Tamanho da pupila
    const pupilMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 }); // Cor preta da pupila
    const pupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
    pupil.position.set(0, 0, 0.8); // Colocar a pupila na frente do olho
    eye.add(pupil); // Adiciona a pupila ao olho

    eyeGroup.add(eye);
    return eyeGroup;
}

// Função para criar uma sobrancelha curvada
function createCurvedEyebrow(position) {
    const points = [];
    // Criar pontos para a curva da sobrancelha
    points.push(new THREE.Vector3(-1, 0.1, 0)); // Início da sobrancelha
    points.push(new THREE.Vector3(0, 0.3, 0)); // Ponto mais alto da curva
    points.push(new THREE.Vector3(1, 0.1, 0)); // Final da sobrancelha

    const eyebrowCurve = new THREE.CatmullRomCurve3(points);
    const eyebrowGeometry = new THREE.TubeGeometry(eyebrowCurve, 20, 0.05, 8, false);
    const eyebrowMaterial = new THREE.MeshBasicMaterial({ color: '#000' }); // Cor marrom para a sobrancelha
    const eyebrow = new THREE.Mesh(eyebrowGeometry, eyebrowMaterial);

    // Ajustar a posição da sobrancelha
    eyebrow.position.set(position.x, position.y, position.z);
    
    return eyebrow;
}

// Criar os dois olhos
const leftEye = createEye();
const rightEye = createEye();

// Posicionar os olhos
leftEye.position.set(-1.5, 0, 0);  // Olho esquerdo
rightEye.position.set(1.5, 0, 0);  // Olho direito

// Adicionar os olhos na cena
scene.add(leftEye);
scene.add(rightEye);

// Criar sobrancelhas curvadas para os olhos
const leftEyebrow = createCurvedEyebrow(new THREE.Vector3(-1.6, 1.2, 0)); // Ajuste a posição conforme necessário
const rightEyebrow = createCurvedEyebrow(new THREE.Vector3(1.6, 1.2, 0)); // Ajuste a posição conforme necessário

// Adicionar sobrancelhas à cena
scene.add(leftEyebrow);
scene.add(rightEyebrow);