import useMainStore from "../../store/useMainStore"

const NetworkSculpture = ({ nodes, materials }) => {

    // Get state and setter from the store
    const isIndustrialRobotFocused = useMainStore.useIsIndustrialRobotFocused()

    materials['network sculpture_dots'].transparent = true
    materials['network sculpture_wire'].transparent = true

    if (isIndustrialRobotFocused) {
        materials['network sculpture_dots'].opacity = .1
        materials['network sculpture_wire'].opacity = .1
    } else {
        materials['network sculpture_dots'].opacity = 1
        materials['network sculpture_wire'].opacity = 1
    }
    
    return (
        <group name="network_sculpture" position={[0.143, 1.839, 0]} rotation={[0.66, -0.977, -2.377]}>
            <mesh name="Plane001" geometry={nodes.Plane001.geometry} material={materials['network sculpture_dots']} />
            <mesh name="Plane001_1" geometry={nodes.Plane001_1.geometry} material={materials['network sculpture_wire']} />
        </group>
    )
}

export default NetworkSculpture