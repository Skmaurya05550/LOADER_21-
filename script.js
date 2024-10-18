// Create Scene
const scene = new THREE.Scene();

// Create Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a 3D Torus (Donut) Geometry
const geometry = new THREE.TorusGeometry(1, 0.3, 16, 100);
const material = new THREE.MeshBasicMaterial({ color: 0x00ffcc, wireframe: true });
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

// Animate the Loader
function animate() {
    requestAnimationFrame(animate);

    // Rotate the Torus for Loader Effect
    torus.rotation.x += 0.03;
    torus.rotation.y += 0.03;

    renderer.render(scene, camera);
}

animate();

// Handle Window Resizing
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});


