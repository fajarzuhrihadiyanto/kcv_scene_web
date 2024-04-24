const FrontDesk = ({ nodes, materials }) => {
    return (
        <>
            <mesh name="lab_desk_bottom" geometry={nodes.lab_desk_bottom.geometry} material={materials['lab desk_bottom']} position={[2.575, 0.8, 0]} />
            <mesh name="lab_desk_top" geometry={nodes.lab_desk_top.geometry} material={materials['lab desk_top']} position={[2.575, 0.8, 0]} />
        </>
    )
}

export default FrontDesk