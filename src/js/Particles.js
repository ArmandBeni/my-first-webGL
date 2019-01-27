import * as THREE from 'three'
import * as dat from 'dat.gui'


export default class Particles
{
    constructor(_options)
    {
        this.container = new THREE.Object3D()

        this.setBelt()
        this.setBelt2()
        this.setBelt3()
        this.setBelt4()
        this.setAnimation()
    }

    setBelt()       //Blue particles
    {

        this.belt = {}
        this.belt.geometry = new THREE.Geometry()

        let a = 0
        for (let i = 0; i < 1500; i++)
        {
            a += 0.7
            const angle = a 
            const distance = 6.5 + a

            const vertice = new THREE.Vector3()
            
            vertice.x = Math.sin(angle) * distance
            vertice.y = 1.5
            vertice.z = Math.cos(angle) * distance

            this.belt.geometry.vertices.push(vertice)            
        }

        this.belt.material = new THREE.PointsMaterial
        ({
            size: 1,
            color: 0x007fff,
            sizeAttenuation: true      
        })

        this.belt.points = new THREE.Points(this.belt.geometry, this.belt.material)
        this.container.add(this.belt.points)
    }

    setBelt2()      //Purple particles
    {
        this.belt2 = {}
        this.belt2.geometry = new THREE.Geometry()

        let b = 0
        for (let i = 0; i < 1500; i++)
        {
            b += 0.7
            const angle2 = b
            const distance2 = 6.5 + b

            const vertice2 = new THREE.Vector3()

            vertice2.x = Math.sin(angle2) * - distance2
            vertice2.y = 0.75
            vertice2.z = Math.cos(angle2) * - distance2

            this.belt2.geometry.vertices.push(vertice2)
        }

        this.belt2.material = new THREE.PointsMaterial
        ({
            size: 1,
            color: 0xff00ff,
            sizeAttenuation: true
        })

        this.belt2.points = new THREE.Points(this.belt2.geometry, this.belt2.material)
        this.container.add(this.belt2.points)
    }

    setBelt3()      //Yellow particles
    {
        this.belt3 = {}
        this.belt3.geometry = new THREE.Geometry()

        let c = 0
        for (let i = 0; i < 1500; i++)
        {
            c += 0.7
            const angle3 = c
            const distance3 = 6.5 + c

            const vertice3 = new THREE.Vector3()
            vertice3.x = Math.sin(angle3) * - distance3
            vertice3.y = -0.75
            vertice3.z = Math.cos(angle3) * - distance3

            this.belt3.geometry.vertices.push(vertice3)
        }

        this.belt3.material = new THREE.PointsMaterial
        ({
            size: 1,
            color: 0xffff00,
            sizeAttenuation: true
        })

        this.belt3.points = new THREE.Points(this.belt3.geometry, this.belt3.material)
        this.container.add(this.belt3.points)
        }

    setBelt4()      //White particles
    {
        this.belt4 = {}
        this.belt4.geometry = new THREE.Geometry()
    
        let d = 0
        for (let i = 0; i < 1500; i++)
        {
            d += 0.7
            const angle4 = d
            const distance4 = 6.5 + d
    
            const vertice3 = new THREE.Vector3()
            vertice3.x = Math.sin(angle4) * distance4
            vertice3.y = -0.75
            vertice3.z = Math.cos(angle4) * distance4
    
            this.belt4.geometry.vertices.push(vertice3)
        }
    
        this.belt4.material = new THREE.PointsMaterial
        ({
            size: 1,
            color: 0xffffff,
            sizeAttenuation: true
        })
    
        this.belt4.points = new THREE.Points(this.belt4.geometry, this.belt4.material)
        this.container.add(this.belt4.points)
    }

    setAnimation()
    {

        const gui = new dat.GUI()
        
        let vertice1 = function()
        {
            this.rotationX = 0
            this.rotationY = 0
            this.speed = 0
        }

        let vertice2 = function()
        {
            this.rotationX = 0
            this.rotationY = 0
            this.speed = 0
        }

        let vertice3 = function()
        {
            this.rotationX = 0
            this.rotationY = 0
            this.speed = 0
        }

        let vertice4 = function()
        {
            this.rotationX = 0
            this.rotationY = 0
            this.speed = 0
        }
        
        let myVertice = new vertice1()
        let myVertice2 = new vertice2()
        let myVertice3 = new vertice3()
        let myVertice4 = new vertice4()

        let firstFolder = gui.addFolder('Blue vertice')
        firstFolder.add(myVertice,'rotationX', -2, 2, 0.0002)
        firstFolder.add(myVertice,'rotationY', -2, 2, 0.0002)
        firstFolder.open()

        let secondFolder = gui.addFolder('Purple vertice')
        secondFolder.add(myVertice2,'rotationX', -2, 2, 0.0002)
        secondFolder.add(myVertice2,'rotationY', -2, 2, 0.0002)

        let thirdFolder = gui.addFolder('Yellow vertice')
        thirdFolder.add(myVertice3,'rotationX', -2, 2, 0.0002)
        thirdFolder.add(myVertice3,'rotationY', -2, 2, 0.0002)

        let fourthFolder = gui.addFolder('White vertice')
        fourthFolder.add(myVertice4,'rotationX', -2, 2, 0.0002)
        fourthFolder.add(myVertice4,'rotationY', -2, 2, 0.0002)

        let speedFolder = gui.addFolder('General Speed')
        speedFolder.add(myVertice, 'speed', { Stopped: 0, Slow: 0.0009, Normal: 0.009, Fast: 1 } )
        speedFolder.open()


        const loop = () =>
        {
            window.requestAnimationFrame(loop)

            this.belt.points.rotation.x = myVertice.rotationX
            this.belt.points.rotation.y = myVertice.rotationY
            this.container.rotation.y += parseFloat(myVertice.speed)
            this.container.rotation.x += parseFloat(myVertice.speed)

            this.belt2.points.rotation.x = myVertice2.rotationX
            this.belt2.points.rotation.y = myVertice2.rotationY
            this.container.rotation.y += parseFloat(myVertice2.speed)
            this.container.rotation.x += parseFloat(myVertice2.speed)

            this.belt3.points.rotation.x = myVertice3.rotationX
            this.belt3.points.rotation.y = myVertice3.rotationY
            this.container.rotation.y += parseFloat(myVertice3.speed)
            this.container.rotation.x += parseFloat(myVertice3.speed)

            this.belt4.points.rotation.x = myVertice4.rotationX
            this.belt4.points.rotation.y = myVertice4.rotationY
            this.container.rotation.y += parseFloat(myVertice4.speed)
            this.container.rotation.x += parseFloat(myVertice4.speed)
        }
        loop()
    }
}