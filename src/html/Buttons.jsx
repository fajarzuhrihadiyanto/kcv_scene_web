import { Html } from "@react-three/drei"

import styles from './styles/Buttons.module.css'
import React from "react"
import { useFrame, useThree } from "@react-three/fiber"

const Buttons = () => {

    const ref = React.useRef()
    const screenRef = React.useRef()

    const { camera } = useThree()

    // Show general information hologram based on camera position
    const threshold = -.8
    useFrame(() => {
        if (screenRef.current && ref.current) {
            if (camera.position.x < threshold) {
                screenRef.current.style.opacity = .9
                ref.current.scale.set(.05, .05, .05)
            } else {
                screenRef.current.style.opacity = 0
                setTimeout(() => {
                    ref.current.scale.set(0,0,0)
                }, 200)
            }
        }
    })

    return (
        <group scale={[.05, .05, .05]} rotation={[0, -Math.PI / 2, 0]} position={[-.5,2.4,0]} ref={ref}>
            <Html
                ref={screenRef}
                transform
                className={styles.html}
            >
                <div
                    className={styles.container}
                >
                    <button className={styles.button}>Mata Kuliah</button>
                    <button className={styles.button}>Penelitian</button>
                    <button className={styles.button}>Pengabdian Masyarakat</button>
                    <button className={styles.button}>Buku</button>
                </div>
            </Html>
        </group>
    )
}

export default Buttons