/**
 * Imports and configuration
 */
import './css/style.styl'
import * as THREE from 'three'
import Particles from "./js/Particles.js"
import Universe from './js/Universe.js'
import Shader from './js/Shader.js'
import { BloomEffect, EffectComposer, EffectPass, RenderPass } from "postprocessing"


/**
 * Sizes
 */
const sizes = {}
sizes.width = window.innerWidth
sizes.height = window.innerHeight

window.addEventListener('resize', () =>
{
    //update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    //update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    //update renderer
    renderer.setSize(sizes.width, sizes.height)
})


/**
* Cursor
*/
const cursor = {}
cursor.x = 0.5
cursor.y = 0.5
window.addEventListener('mousemove', (event) =>
{
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = event.clientY / sizes.height - 0.5
})


/**
 * Scene
 */
const scene = new THREE.Scene()


/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 10000)
camera.position.z = 150
camera.updateMatrixWorld()
scene.add(camera)
  

/**
 * Particles
 */
const particles = new Particles()
scene.add(particles.container)


/**
 * Universe
 */
const universe = new Universe()
scene.add(universe.container)


/**
 * Shader
 */
const shader = new Shader()
scene.add(shader.container)


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer()
renderer.setSize(sizes.width, sizes.height)
document.body.appendChild(renderer.domElement)
renderer.render(scene, camera)


/**
 * Postprocessing JS for the bloomeffect
 */
const composer = new EffectComposer(renderer)
let bloomEffect = new BloomEffect
({
    resolutionScale: 1,
    distinction: 1
})

bloomEffect.blendMode.opacity.value = 8
const effectPass = new EffectPass(camera, bloomEffect)
effectPass.renderToScreen = true

composer.addPass(new RenderPass(scene, camera))
composer.addPass(effectPass)
effectPass.renderToScreen = true


/**
 * Loop
 */
const loop = () =>
{
    window.requestAnimationFrame(loop)

    // Update camera
    camera.position.x = cursor.x * 200
    camera.position.y = - cursor.y * 200
    camera.lookAt(scene.position)

    // Render
    composer.render(scene, camera)
}
loop()