import React from "react"
import { Select } from "@react-three/postprocessing"

import useMainStore from "../../store/useMainStore"
import Chip from "./Chip"
import FrontDesk from "./FrontDesk"
import Hologram from "./Hologram"
import IndustrialRobot from "./IndustrialRobot"
import RearDesk from "./RearDesk"

const IndustrialRobotArea = ({ nodes, materials }) => {

    // Get state and setter from the store
    const isIndustrialRobotFocused = useMainStore.useIsIndustrialRobotFocused()
    
    return (
        <>
            <Select enabled={isIndustrialRobotFocused}>
                <IndustrialRobot flag={0} nodes={nodes} materials={materials} position={[4.201, 0.8, -1.2]} rotation={[0, Math.PI / 2, 0]} />
                <IndustrialRobot flag={1} nodes={nodes} materials={materials} position={[4.201, 0.8, 1.2]} rotation={[0, Math.PI / 2, 0]} scale={[-1,1,1]}/>

                <FrontDesk nodes={nodes} materials={materials} />
                <RearDesk nodes={nodes} materials={materials} />

                <Hologram nodes={nodes} materials={materials} />

                <Chip nodes={nodes} materials={materials} position={[5.659, .95, -1.485]} rotation={[0,0,-Math.PI / 2]}/>
                <Chip nodes={nodes} materials={materials} position={[5.659, .95, -1.385]} rotation={[0,0,-Math.PI / 2]}/>

                <Chip nodes={nodes} materials={materials} position={[5.659, .95, 1.285]} rotation={[0,0,-Math.PI / 2]}/>
                <Chip nodes={nodes} materials={materials} position={[5.659, .95, 1.385]} rotation={[0,0,-Math.PI / 2]}/>
                <Chip nodes={nodes} materials={materials} position={[5.659, .95, 1.485]} rotation={[0,0,-Math.PI / 2]}/>
            </Select>
        </>
    )
}

export default IndustrialRobotArea