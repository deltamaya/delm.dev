import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Vaporwave() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const VAPOR_PINK = 0xffffff
        const DEEP_PURPLE = 0x000000
        const movementSpeed = 0.05
        const gridSize = 1000
        const divisions = 200
        const resetThreshold = gridSize / divisions

        const width = container.clientWidth
        const height = container.clientHeight

        const scene = new THREE.Scene()
        scene.background = new THREE.Color(DEEP_PURPLE)
        scene.fog = new THREE.Fog(DEEP_PURPLE, 1, 150)

        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
        camera.position.set(0, 5, 0)

        const renderer = new THREE.WebGLRenderer({ antialias: true })
        renderer.setSize(width, height)
        renderer.setPixelRatio(window.devicePixelRatio)
        container.appendChild(renderer.domElement)

        const gridHelper = new THREE.GridHelper(gridSize, divisions, VAPOR_PINK, VAPOR_PINK)
        gridHelper.position.y = 0
            ; (gridHelper.material as THREE.Material).opacity = 0.6
            ; (gridHelper.material as THREE.Material).transparent = true
        scene.add(gridHelper)

        const ambientLight = new THREE.AmbientLight(0x404040, 2)
        scene.add(ambientLight)

        let animationFrameId: number

        function onWindowResize() {
            const newWidth = container!.clientWidth
            const newHeight = container!.clientHeight
            camera.aspect = newWidth / newHeight
            camera.updateProjectionMatrix()
            renderer.setSize(newWidth, newHeight)
        }

        function animate() {
            animationFrameId = requestAnimationFrame(animate)
            gridHelper.position.z += movementSpeed
            if (gridHelper.position.z >= resetThreshold) {
                gridHelper.position.z -= resetThreshold
            }
            renderer.render(scene, camera)
        }

        animate()
        window.addEventListener('resize', onWindowResize, false)

        return () => {
            cancelAnimationFrame(animationFrameId)
            window.removeEventListener('resize', onWindowResize, false)
            renderer.dispose()
            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement)
            }
        }
    }, [])

    return <div ref={containerRef} className="vaporwave-grid-container" />
}
