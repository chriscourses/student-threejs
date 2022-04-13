import * as THREE from 'three'
import * as dat from 'dat.gui'
import { GLTFLoader } from './loaders/GLTFLoader.js'

const loader = new GLTFLoader()
loader.load('./assets/tri.gltf', (gltf) => {
  console.log(gltf)
})

const gui = new dat.GUI()
 const world = {
  plane: {
    width: 10,
    height: 10,
    widthSegments: 10,
    heightSegments: 10
  }
 }

gui.add(world.plane, 'width', 1, 20).
 onChange(generatePlane)
gui.add(world.plane, 'height', 1, 20).
  onChange(generatePlane)
gui.add(world.plane, 'heightSegments', 1, 20).
  onChange(generatePlane)
gui.add(world.plane, 'widthSegments', 1, 20).
  onChange(generatePlane)

function generatePlane() {
  plane.geometry.dispose()
plane.geometry = new THREE.PlaneGeometry(
  world.plane.width,
  world.plane.height,
  world.plane.widthSegments,
  world.plane.heightSegments
  )

const {array} = plane.geometry.attributes.position
for (let i = 0; i < array.length; i += 3)  {
  const x = array[i]
  const y = array[i + 1]
  const z = array[i + 2]

  array[i + 2] = z + Math.random()
  }

}
  const scene = new THREE.Scene();
  const camera = new THREE.
  PerspectiveCamera(
    75,
    innerWidth / innerHeight,
    0.1,
    1000
    )
  const renderer = new THREE.WebGLRenderer()

renderer.setSize(innerWidth, innerHeight)
renderer.setPixelRatio(devicePixelRatio)
document.body.appendChild(renderer.
  domElement)

const planeGeometry = new THREE.PlaneGeometry( 5, 5, 10, 10 );
const material_plane = new THREE.
MeshPhongMaterial( {
  color: 0x000088,
  side: THREE.DoubleSide,
  flatShading: THREE.FlatShading
} );
const plane = new THREE.Mesh( planeGeometry, material_plane );
scene.add( plane );

const {array} = plane.geometry.attributes.position

for (let i = 0; i < array.length; i += 3)  {
  const x = array[i]
  const y = array[i + 1]
  const z = array[i + 2]

  array[i + 2] = z + Math.random()
  console.log(array[i])

}

const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(0, 0, 1)
scene.add(light)

camera.position.z = 10

function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}

animate()
