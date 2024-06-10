import React from "react"
import { Html } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"

import styles from './styles/GeneralInformation.module.css'
import buttonStyles from './styles/Buttons.module.css'
import useMainStore from "../store/useMainStore"
import { FOCUS_BOOKS, FOCUS_COMMUNITY_SERVICE, FOCUS_RESEARCH, FOCUS_SUBJECT } from "../constants"
import { useResponsiveScreen } from "../utils"

const GeneralInformation = () => {

    // Get state and setter from the store
    const setFocusTarget = useMainStore.useSetFocusTarget()
    const setCameraPosition = useMainStore.useSetCameraPosition()
    const setControlsTargetOffset = useMainStore.useSetControlsTargetOffset()
    const isIndustrialRobotFocused = useMainStore.useIsIndustrialRobotFocused()
    const setIsIndustrialRobotFocused = useMainStore.useSetIsIndustrialRobotFocused()
    const {isMobile} = useResponsiveScreen()

    const ref = React.useRef()
    const buttonRef = React.useRef()
    const screenRef = React.useRef()
    const buttonScreenRef = React.useRef()

    const { camera } = useThree()

    // Show general information hologram based on camera position
    const threshold = -.8
    useFrame(() => {
        if (screenRef.current && ref.current && buttonRef.current && buttonScreenRef.current) {
            if (camera.position.x < threshold) {
                screenRef.current.style.opacity = isIndustrialRobotFocused ? .1 : .9
                ref.current.scale.set(.05, .05, .05)

                buttonScreenRef.current.style.opacity = .9
                buttonRef.current.scale.set(.05, .05, .05)
            } else {
                screenRef.current.style.opacity = 0
                buttonScreenRef.current.style.opacity = 0
                setTimeout(() => {
                    ref.current.scale.set(0,0,0)
                    buttonRef.current.scale.set(0,0,0)
                }, 200)
            }
        }
    })

    const onButtonOver = React.useCallback(() => {
        setIsIndustrialRobotFocused(true)
    }, [])

    const onButtonOut = React.useCallback(() => {
        setIsIndustrialRobotFocused(false)
    }, [])

    const onButtonClick = React.useCallback(focusTarget => {
        const cameraPosition = isMobile ? [.9,1.5,0] : [2,1.5,0]
        setIsIndustrialRobotFocused(false)
        setFocusTarget(focusTarget)
        setCameraPosition(cameraPosition)
        setControlsTargetOffset([.01,0,0])
    }, [])

    return (
        <>
            <group scale={[.05, .05, .05]} rotation={[0, -Math.PI / 2, 0]} position={[-.5,2,0]} ref={ref}>
                <Html
                    ref={screenRef}
                    transform
                    className={styles.html}>
                    <div className={styles.container}>
                        <h1 className={styles.title}>Selamat Datang di halaman Laboratorium Komputasi Cerdas dan Visi.</h1>
                        <p className={styles.description}>Di Laboratorium ini ditawarkan bidang keahlian yang ditekankan pada kemampuan lulusan dalam memanipulasi dan menganalisis data citra pada berbagai bidang aplikasi (a.l. biomedika, industri), kemampuan menerapkan metode sistem cerdas pada berbagai bidang aplikasi dan kemampuan memodelkan dan mengoptimasikan sistem nyata.</p>
                    </div>
                </Html>
            </group>

            <group scale={[.05, .05, .05]} rotation={[0, -Math.PI / 2, 0]} position={[-.5,2.4,0]} ref={buttonRef}>
                <Html
                    ref={buttonScreenRef}
                    transform
                    className={buttonStyles.html}>
                    <div className={buttonStyles.container}>
                        <button className={buttonStyles.button} onPointerOver={onButtonOver} onPointerOut={onButtonOut} onClick={() => {onButtonClick(FOCUS_SUBJECT)}}>Mata Kuliah</button>
                        <button className={buttonStyles.button} onPointerOver={onButtonOver} onPointerOut={onButtonOut} onClick={() => {onButtonClick(FOCUS_RESEARCH)}}>Penelitian</button>
                        <button className={buttonStyles.button} onPointerOver={onButtonOver} onPointerOut={onButtonOut} onClick={() => {onButtonClick(FOCUS_COMMUNITY_SERVICE)}}>Pengabdian Masyarakat</button>
                        <button className={buttonStyles.button} onPointerOver={onButtonOver} onPointerOut={onButtonOut} onClick={() => {onButtonClick(FOCUS_BOOKS)}}>Buku</button>
                    </div>
                </Html>
            </group>
        </>
    )
}

export default GeneralInformation