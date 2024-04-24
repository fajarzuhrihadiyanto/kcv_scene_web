const RearDesk = ({ nodes, materials }) => {
    return (
        <>
            <mesh name="lab_desk_bottom001" geometry={nodes.lab_desk_bottom001.geometry} material={materials['lab desk_bottom']} position={[5.812, 0.46, 0]} />
            <mesh name="lab_desk_top001" geometry={nodes.lab_desk_top001.geometry} material={materials['lab desk_top']} position={[5.812, 0.488, 0]} />
        </>
    )
}

export default RearDesk