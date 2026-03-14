const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(1, 32, 32),
    new THREE.MeshBasicMaterial({ color: 0x0077ff })
);
scene.add(sphere);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);

    // Bounce
    sphere.position.y = Math.abs(Math.sin(Date.now() * 0.005)) * 2;

    // Color shift
    sphere.material.color.setHSL(Math.sin(Date.now() * 0.001), 1, 0.5);

    renderer.render(scene, camera);
}
animate();

