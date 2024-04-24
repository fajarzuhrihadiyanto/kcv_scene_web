const LogoArea = ({ nodes, materials }) => {
    return (
        <>
            <mesh name="logo_text" geometry={nodes.logo_text.geometry} material={materials.logo_text} position={[6.201, 3.348, -1.403]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
            <group name="logo_image" position={[6.201, 3.225, -2.403]} rotation={[0, -Math.PI / 2, 0]}>
                <mesh name="Cube008" geometry={nodes.Cube008.geometry} material={materials['Material.008']} />
                <mesh name="Cube008_1" geometry={nodes.Cube008_1.geometry} material={materials['Material.009']} />
            </group>
        </>
    )
}

export default LogoArea