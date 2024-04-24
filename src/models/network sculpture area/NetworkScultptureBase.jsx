const NetworkSculptureBase = ({ nodes, materials }) => {
    return (
        <group name="network_sculpture_base" position={[0, 0.5, 0]}>
            <mesh name="Cylinder" geometry={nodes.Cylinder.geometry} material={materials['network sculpture_base_main']} />
            <mesh name="Cylinder_1" geometry={nodes.Cylinder_1.geometry} material={materials['network sculpture_base_light']} />
        </group>
    )
}

export default NetworkSculptureBase