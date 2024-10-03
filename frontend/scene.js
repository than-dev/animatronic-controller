// Inicialização da cena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Criação da luz
const light = new THREE.DirectionalLight('#fff', 1);
light.position.set(20, 20, 50).normalize();
light.castShadow = false; 
scene.add(light);

// Posicionar a câmera
camera.position.z = 4;

// Função de animação
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
