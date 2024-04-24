import React from "react"
import { Html } from "@react-three/drei"

import styles from './styles/FacilitiesPage.module.css'
import useMainStore from "../store/useMainStore"
import { FOCUS_FACILITIES } from "../constants"

const FacilitiesPage = () => {

    // Get state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()

    // setting ref for the screen
    const screenRef = React.useRef()

    React.useEffect(() => {
        if (screenRef.current) {
            if (focusTarget === FOCUS_FACILITIES) {
                screenRef.current.scale.set(.1, .1, .1)
            } else {
                // hide the screen after .2s
                setTimeout(() => {
                    screenRef.current.scale.set(0, 0, 0)
                }, 200)
            }
        }
    }, [focusTarget])
    
    return (
        <group scale={[0, 0, 0]} rotation={[-Math.PI/2,0,0]} ref={screenRef}>
            <Html
                transform
                className={styles.html}
                style={{
                    transition: 'opacity .2s',
                    opacity: Number(focusTarget === FOCUS_FACILITIES)
                }}
            >
                <div className={styles.container} >
                    <ul className={styles.list}>
                        <li>Processor Intel Core i3 Gen-3, i5 Gen-8,  Intel® Xeon® E5-2640 dengan RAM 4GB-16GB, Sampai dengan Processor i9 Generasi 12 GPU 3080TI</li>
                        <li>Untuk HDD sebagian besar minimal 1TB.</li>
                        <li>Semua monitor berukuran 19″ untuk memudahkan mahasiswa dalam melakukan penelitian dan pembelajaran.</li>
                        <li>Dilengkapi LED TV 55″ untuk mahasiswa dalam melakukan demo pembelajaran.</li>
                        <li>LCD Projector untuk memudahkan mahasiswa yang membutuhkan beberapa display.</li>
                        <li>Ploter Untung menunjang kebutuhan mahasiswa mencetak hasil tugas2 yang dibutuhkan.</li>
                    </ul>
                </div>
            </Html>
        </group>
    )
}

export default FacilitiesPage