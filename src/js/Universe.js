import * as THREE from 'three'

export default class Universe
{
    constructor(_options)
    {
        this.container = new THREE.Object3D()

        this.setPosition()
    }

    setPosition()
    {
        this.stars = {}
        this.stars.geometry = new THREE.Geometry()
    
        for(let i = 0; i < 3500; i++)
        {
            const vertice = new THREE.Vector3()

            const distance = 200
            let theta = THREE.Math.randFloatSpread(360) 
            let phi = THREE.Math.randFloatSpread(360) 
    
            vertice.x = distance * Math.sin(theta) * Math.cos(phi) * 3
            vertice.y = distance * Math.sin(theta) * Math.sin(phi) * 3
            vertice.z = distance * Math.cos(theta) * 3
    
            this.stars.geometry.vertices.push(vertice)
            }
    
            this.stars.material = new THREE.PointsMaterial
            ({
                size: 1,
                color: 0xffffff,
                sizeAttenuation: true,
            })
    
            this.stars.points = new THREE.Points(this.stars.geometry, this.stars.material)
            this.container.add(this.stars.points)
    }
}