import { Html } from "@react-three/drei"

import styles from './styles/HologramScreen.module.css'
import React, { useEffect } from "react"
import useMainStore from "../store/useMainStore"
import { FOCUS_BOOKS, FOCUS_COMMUNITY_SERVICE, FOCUS_RESEARCH, FOCUS_SUBJECT, FOCUS_SUBJECT_DETAIL } from "../constants"
import HologramSubjectPage from "./HologramSubjectPage"
import HologramSubjectDetailPage from "./HologramSubjectDetailPage"
import HologramResearchPage from "./HologramResearchPage"
import HologramCommunityServicePage from "./HologramCommunityServicePage"
import HologramBookPage from "./HologramBookPage"

const contents = {
    [FOCUS_SUBJECT]: <HologramSubjectPage />,
    [FOCUS_SUBJECT_DETAIL]: <HologramSubjectDetailPage />,
    [FOCUS_RESEARCH]: <HologramResearchPage />,
    [FOCUS_COMMUNITY_SERVICE]: <HologramCommunityServicePage />,
    [FOCUS_BOOKS]: <HologramBookPage />
}

const HologramScreen = () => {

    // Get state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()
    const setFocusTarget = useMainStore.useSetFocusTarget()
    const subjectData = useMainStore.useSubjectData()

    const ref = React.useRef()
    const screenRef = React.useRef()
    
    const [currentContent, setCurrentContent] = React.useState(null)
    const [initialized, setInitialized] = React.useState(false)

    useEffect(() => {
        if (screenRef.current) {
            setTimeout(() => {
                screenRef.current.scrollTo(0,0)
            }, 1500)
            if (focusTarget === null) {
                if (initialized) {
                    setTimeout(() => {
                        screenRef.current.style.opacity = 0
                    }, 1000)
                } else {
                    screenRef.current.style.opacity = 0
                }
            } else {
                setInitialized(true)

                if (focusTarget === FOCUS_SUBJECT) {
                    if (subjectData === null) {
                        setTimeout(() => {
                            setCurrentContent(contents[focusTarget])
                            screenRef.current.style.opacity = .9
                        }, 3000)
                    } else {
                        setTimeout(() => {
                            screenRef.current.style.opacity = 0
                        }, 1000)
                        setTimeout(() => {
                            console.log('screen on b')
                            setCurrentContent(contents[focusTarget])
                            screenRef.current.style.opacity = .9
                        }, 3000)
                    }
                } else if (focusTarget === FOCUS_SUBJECT_DETAIL) {
                    setTimeout(() => {
                        (screenRef.current.style.opacity = 0)
                    }, 1000)
                    setTimeout(() => {
                        console.log('screen on c')
                        setCurrentContent(contents[focusTarget])
                        screenRef.current.style.opacity = .9
                    }, 3000)
                } else if ([FOCUS_RESEARCH, FOCUS_COMMUNITY_SERVICE, FOCUS_BOOKS].includes(focusTarget)) {
                    setTimeout(() => {
                        setCurrentContent(contents[focusTarget])
                        screenRef.current.style.opacity = .9
                    }, 3000)
                }
            }
        }
    }, [focusTarget, subjectData])

    

    return (
        <>
            <group scale={[.05, .05, .05]} rotation={[0, -Math.PI / 2, 0]} position={[2.641, 1.495, 0]} ref={ref}>
                <Html
                    ref={screenRef}
                    transform
                    className={styles.html}
                    style={{
                        opacity: 0
                    }}
                >
                    <div
                        className={styles.container}
                    >
                        {currentContent}
                    </div>
                </Html>
            </group>
        </>
    )
}

export default HologramScreen