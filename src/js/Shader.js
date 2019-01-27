import * as THREE from 'three'

export default class Shader
{
    constructor(_options)
    {
        this.container = new THREE.Object3D()

        this.setElement()
    }

    setElement()
    {   
        this.element = {}
        this.element.geometry = new THREE.SphereGeometry(6, 55, 55)
        this.element.material = new THREE.ShaderMaterial
        ({ 
            wireframe: true,
            blending: THREE.NormalBlending, 
            depthTest: true,
            vertexShader:
            `
                varying vec3 vNormal;

                void main() 
                {
                    vNormal = normalize( normalMatrix * normal );
                    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
                }
            `,
            fragmentShader:
            `
                varying vec3 vNormal;

                void main() 
                {
                    float intensity = pow( 0.7 - dot( vNormal, vec3( 0.0, 0.0, 1.8 ) ), 0.5 ); 
                    gl_FragColor = vec4( 0.0, 4.0, 5.0, 0.0 ) * intensity;
                }
                `,
            })

        this.element.mesh = new THREE.Mesh(this.element.geometry, this.element.material)
        this.container.add(this.element.mesh)
    }
}