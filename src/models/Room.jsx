const Room = ({ nodes, materials }) => {
    return (
        <>
            <group name="Plane">
                <mesh name="Plane_1" geometry={nodes.Plane_1.geometry} material={materials.room} />
                <mesh name="Plane_2" geometry={nodes.Plane_2.geometry} material={materials.room_light} />
            </group>

            {/* DOOR */}
            <mesh name="door_left_body" geometry={nodes.door_left_body.geometry} material={materials['Material.004']} position={[-1, 0, 4.514]} rotation={[Math.PI / 2, 0, 0]} scale={[0.5, 1, 1.125]} />
            <group name="door_left_in_handle" position={[-0.15, 1.138, 4.569]}>
                <mesh name="Cylinder044" geometry={nodes.Cylinder044.geometry} material={materials.door_handle_base} />
                <mesh name="Cylinder044_1" geometry={nodes.Cylinder044_1.geometry} material={materials.door_handle_light} />
                <mesh name="Cylinder044_2" geometry={nodes.Cylinder044_2.geometry} material={materials['Material.005']} />
            </group>
            <mesh name="door_right_body" geometry={nodes.door_right_body.geometry} material={materials['Material.004']} position={[1, 0, 4.514]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[0.5, 1, 1.125]} />
            <group name="door_right_in_handle" position={[0.15, 1.138, 4.569]}>
                <mesh name="Cylinder045" geometry={nodes.Cylinder045.geometry} material={materials.door_handle_base} />
                <mesh name="Cylinder045_1" geometry={nodes.Cylinder045_1.geometry} material={materials.door_handle_light} />
                <mesh name="Cylinder045_2" geometry={nodes.Cylinder045_2.geometry} material={materials['Material.005']} />
            </group>
            <mesh name="door_frame" geometry={nodes.door_frame.geometry} material={materials['Material.007']} position={[0, 2.325, 4.539]} scale={[1, 0.075, 0.1]} />
            <group name="door_left_out_handle" position={[-0.15, 1.138, 4.509]} rotation={[Math.PI, 0, Math.PI]}>
                <mesh name="Cylinder046" geometry={nodes.Cylinder046.geometry} material={materials.door_handle_base} />
                <mesh name="Cylinder046_1" geometry={nodes.Cylinder046_1.geometry} material={materials.door_handle_light} />
                <mesh name="Cylinder046_2" geometry={nodes.Cylinder046_2.geometry} material={materials['Material.005']} />
            </group>
            <group name="door_right_out_handle" position={[0.15, 1.138, 4.509]} rotation={[Math.PI, 0, Math.PI]}>
                <mesh name="Cylinder047" geometry={nodes.Cylinder047.geometry} material={materials.door_handle_base} />
                <mesh name="Cylinder047_1" geometry={nodes.Cylinder047_1.geometry} material={materials.door_handle_light} />
                <mesh name="Cylinder047_2" geometry={nodes.Cylinder047_2.geometry} material={materials['Material.005']} />
            </group>
        </>
    )
}

export default Room