import React from "react"

import { FOCUS_BOOKS, FOCUS_COMMUNITY_SERVICE, FOCUS_RESEARCH, FOCUS_SUBJECT, FOCUS_SUBJECT_DETAIL } from "../../constants"
import HologramScreen from "../../html/HologramScreen"
import useMainStore from "../../store/useMainStore"

const Hologram = ({ nodes, materials }) => {

    // Get state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()
    const subjectData = useMainStore.useSubjectData()

    materials.hologram_light.transparent = true

    const [initialized, setInitialized] = React.useState(false)

    React.useEffect(() => {

        if (focusTarget === null) {
            if (initialized) {
                setTimeout(() => {
                    materials.hologram_light.opacity = 0
                }, 1000)
            } else {
                materials.hologram_light.opacity = 0
            }
        } else {
            setInitialized(true)

            if (focusTarget === FOCUS_SUBJECT) {
                if (subjectData === null) {
                    setTimeout(() => {
                        materials.hologram_light.opacity = .1
                    }, 3000)
                } else {
                    setTimeout(() => {
                        materials.hologram_light.opacity = 0
                    }, 1000)
                    setTimeout(() => {
                        materials.hologram_light.opacity = .1
                    }, 3000)
                }
            } else if (focusTarget === FOCUS_SUBJECT_DETAIL) {
                setTimeout(() => {
                    materials.hologram_light.opacity = 0
                }, 1000)
                setTimeout(() => {
                    materials.hologram_light.opacity = .1
                }, 3000)
            } else if ([FOCUS_RESEARCH, FOCUS_COMMUNITY_SERVICE, FOCUS_BOOKS].includes(focusTarget)) {
                setTimeout(() => {
                    materials.hologram_light.opacity = .1
                }, 3000)
            }
        }
    }, [focusTarget, subjectData])

    return (
        <>
            <group name="hologram_base" position={[2.641, 0.9, 0]} rotation={[0, Math.PI / 2, 0]}>
                <mesh name="Cube002" geometry={nodes.Cube002.geometry} material={materials.hologram_base} />
                <mesh name="Cube002_1" geometry={nodes.Cube002_1.geometry} material={materials.hologram_base_light} />
                <mesh name="Cube002_2" geometry={nodes.Cube002_2.geometry} material={materials.hologram_base_accent} />
            </group>
            <mesh name="hologram_light" geometry={nodes.hologram_light.geometry} material={materials.hologram_light} position={[2.641, 1.088, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} visible={true} />
            <HologramScreen />
        </>
    )
}

export default Hologram