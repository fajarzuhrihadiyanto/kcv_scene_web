import Helix from "./Helix"

const HelixArea = ({ nodes, materials }) => {
    return (
        <>
            <Helix nodes={nodes} materials={materials} position={[0.531, 0.05, -4.043]}/>
            <Helix nodes={nodes} materials={materials} position={[2.031, 0.05, -4.043]}/>
        </>
    )
}

export default HelixArea