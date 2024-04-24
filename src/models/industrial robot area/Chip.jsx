import React from "react"

const Chip = ({ nodes, materials, ...props }) => {
    return (
        <group {...props}>
            <ChipBody nodes={nodes} materials={materials} position={[.025,0,0]} rotation={[Math.PI / 2, 0, 0]}/>
            <group name="chip_dock" position={[0.116, 0, 0]}>
                <mesh name="Cube004" geometry={nodes.Cube004.geometry} material={materials.chip_dock_main} />
                <mesh name="Cube004_1" geometry={nodes.Cube004_1.geometry} material={materials.chip_dock_edge} />
                <mesh name="Cube004_2" geometry={nodes.Cube004_2.geometry} material={materials.chip_dock_indicator} />
            </group>
        </group>
    )
}

export const ChipBody = React.forwardRef(({ nodes, materials, isShow=true, ...props }, ref) => {
    return (
        <group name="chip" {...props} ref={ref}>
            <mesh name="Cube003" geometry={nodes.Cube003.geometry} material={materials.chip_main} />
            <mesh name="Cube003_1" geometry={nodes.Cube003_1.geometry} material={materials.chip_top} />
            <mesh name="Cube003_2" geometry={nodes.Cube003_2.geometry} material={materials.chip_gold} />
            <mesh name="Cube003_3" geometry={nodes.Cube003_3.geometry} material={materials.chip_silver} />
        </group>
    )
})

export default Chip