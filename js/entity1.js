var camera, scene, renderer;
var geometry, material, mesh;

init();
animate();

function init() {

    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
    camera.position.z = 1;

    scene = new THREE.Scene();

    geometry = new THREE.SphereGeometry( 0.2, 12, 12 );
    material = new THREE.MeshBasicMaterial({color: 0x7777ff,wireframe:true});
    
    mesh = new THREE.Mesh( geometry, material );
    geometry = new THREE.SphereGeometry( 0.1, 10, 10 );
    mesh2 = new THREE.Mesh( geometry, material );
    
    
    scene.add( mesh );
    scene.add( mesh2 );

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

}

function animate() {

    requestAnimationFrame( animate );

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;

    renderer.render( scene, camera );

}