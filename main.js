const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / (window.innerHeight), 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, (window.innerHeight));
document.body.appendChild(renderer.domElement);
camera.position.set(20, 5, 10);
camera.rotation.set(0, 1, 0);

const loader = new THREE.GLTFLoader();
loader.load('./practice_sofa.glb', function (gltf) {
	gltf.scene.position.y += 1;
	gltf.scene.rotation.x += 0.1;
	gltf.scene.rotation.y += 0.1;
	scene.add(gltf.scene);

	
	const light = new THREE.DirectionalLight(0xffffff);
	light.intensity = 5; // 光の強さを倍に
	light.position.set(100, 100, 100);
	scene.add(light);

	function animate() {
		requestAnimationFrame(animate);
		gltf.scene.rotation.y += 0.01;
		renderer.render(scene, camera);
	}
	animate();
	
}, undefined, function (error) {
	console.error('未定義');
	console.error(error);
});