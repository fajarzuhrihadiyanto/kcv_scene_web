import React from "react"
import { useCursor } from "@react-three/drei"
import { Select } from "@react-three/postprocessing"

import Tooltip from "../../components/Tootlip"
import useMainStore from "../../store/useMainStore"
import { FOCUS_FACILITIES } from "../../constants"
import FacilitiesPage from "../../html/FacilitiesPage"

const CommandCenterArea = ({ nodes, materials }) => {

    // Get state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()
    const setFocusTarget = useMainStore.useSetFocusTarget()
    const setCameraPosition = useMainStore.useSetCameraPosition()
    const setControlsTargetOffset = useMainStore.useSetControlsTargetOffset()
    const ref = React.useRef()

    const [isHovered, setIsHovered] = React.useState(false)

    const onPointerOver = React.useCallback(() => {
        if (focusTarget === null)  {
            setIsHovered(true)
        }
    }, [focusTarget])

    const onPointerOut = React.useCallback(() => {
        if (focusTarget === null) {
            setIsHovered(false)
        }
    }, [focusTarget])

    const onClick = React.useCallback(() => {
        if (focusTarget === null) {
            setIsHovered(false)
            setFocusTarget(FOCUS_FACILITIES)
            setCameraPosition([-1.897, 1.5, -3.5])
            setControlsTargetOffset([0,0,-.01])
        }
    }, [focusTarget])

    useCursor(isHovered)

    return (
        <>
            <Select enabled={isHovered}>
                <group ref={ref} onPointerOver={onPointerOver} onPointerOut={onPointerOut} onClick={onClick}>
                    <group name="command_center_screen_5" position={[-1.897, 1.5, -4.405]} rotation={[Math.PI / 2, 0, 0]} scale={[0.5, 1, 0.5]}>
                        <mesh name="Plane007" geometry={nodes.Plane007.geometry} material={materials['command center_frame']} />
                        <mesh name="Plane007_1" geometry={nodes.Plane007_1.geometry} material={materials['command center_side']} />
                        <mesh name="Plane007_2" geometry={nodes.Plane007_2.geometry} material={materials['command center_white screen']}>
                            <meshStandardMaterial color="#000000" />
                        </mesh>
                        <FacilitiesPage />
                    </group>
                    <group name="command_center_screen_6" position={[-0.897, 1.5, -4.405]} rotation={[Math.PI / 2, 0, 0]} scale={[0.5, 1, 0.5]}>
                        <mesh name="Plane008" geometry={nodes.Plane008.geometry} material={materials['command center_frame']} />
                        <mesh name="Plane008_1" geometry={nodes.Plane008_1.geometry} material={materials['command center_side']} />
                        <mesh name="Plane008_2" geometry={nodes.Plane008_2.geometry} material={materials['command center_white screen']} />
                    </group>
                    <group name="command_center_screen_4" position={[-2.897, 1.5, -4.405]} rotation={[Math.PI / 2, 0, 0]} scale={[0.5, 1, 0.5]}>
                        <mesh name="Plane009" geometry={nodes.Plane009.geometry} material={materials['command center_frame']} />
                        <mesh name="Plane009_1" geometry={nodes.Plane009_1.geometry} material={materials['command center_side']} />
                        <mesh name="Plane009_2" geometry={nodes.Plane009_2.geometry} material={materials['command center_white screen']} />
                    </group>
                    <group name="command_center_screen_2" position={[-1.897, 2.447, -4.161]} rotation={[2.094, 0, 0]} scale={[0.5, 1, 0.5]}>
                        <mesh name="Plane010" geometry={nodes.Plane010.geometry} material={materials['command center_frame']} />
                        <mesh name="Plane010_1" geometry={nodes.Plane010_1.geometry} material={materials['command center_side']} />
                        <mesh name="Plane010_2" geometry={nodes.Plane010_2.geometry} material={materials['command center_white screen']} />
                    </group>
                    <group name="command_center_screen_3" position={[-0.897, 2.447, -4.161]} rotation={[2.094, 0, 0]} scale={[0.5, 1, 0.5]}>
                        <mesh name="Plane011" geometry={nodes.Plane011.geometry} material={materials['command center_frame']} />
                        <mesh name="Plane011_1" geometry={nodes.Plane011_1.geometry} material={materials['command center_side']} />
                        <mesh name="Plane011_2" geometry={nodes.Plane011_2.geometry} material={materials['command center_white screen']} />
                    </group>
                    <group name="command_center_screen_1" position={[-2.897, 2.447, -4.161]} rotation={[2.094, 0, 0]} scale={[0.5, 1, 0.5]}>
                        <mesh name="Plane012" geometry={nodes.Plane012.geometry} material={materials['command center_frame']} />
                        <mesh name="Plane012_1" geometry={nodes.Plane012_1.geometry} material={materials['command center_side']} />
                        <mesh name="Plane012_2" geometry={nodes.Plane012_2.geometry} material={materials['command center_white screen']} />
                    </group>
                    <group name="command_center_control_1" position={[-2.883, 0.743, -3.966]} rotation={[Math.PI / 6, 0, 0]} scale={[0.302, 1, 0.5]}>
                        <mesh name="Plane013" geometry={nodes.Plane013.geometry} material={materials['command center_frame']} />
                        <mesh name="Plane013_1" geometry={nodes.Plane013_1.geometry} material={materials['command center_side']} />
                        <mesh name="Plane013_2" geometry={nodes.Plane013_2.geometry} material={materials['command center_screen']} />
                    </group>
                    <group name="command_center_control_2" position={[-1.895, 0.743, -3.966]} rotation={[Math.PI / 6, 0, 0]} scale={[0.671, 1, 0.5]}>
                        <mesh name="Plane014" geometry={nodes.Plane014.geometry} material={materials['command center_frame']} />
                        <mesh name="Plane014_1" geometry={nodes.Plane014_1.geometry} material={materials['command center_side']} />
                        <mesh name="Plane014_2" geometry={nodes.Plane014_2.geometry} material={materials['command center_screen']} />
                    </group>
                    <group name="command_center_control_3" position={[-0.907, 0.743, -3.966]} rotation={[Math.PI / 6, 0, 0]} scale={[0.302, 1, 0.5]}>
                        <mesh name="Plane015" geometry={nodes.Plane015.geometry} material={materials['command center_frame']} />
                        <mesh name="Plane015_1" geometry={nodes.Plane015_1.geometry} material={materials['command center_side']} />
                        <mesh name="Plane015_2" geometry={nodes.Plane015_2.geometry} material={materials['command center_screen']} />
                    </group>
                    <mesh name="command_center_base" geometry={nodes.command_center_base.geometry} material={materials['command center_base']} position={[-1.897, 0.45, -3.905]} scale={[1.5, 0.45, 0.5]} />
                </group>
            </Select>
            <Tooltip
                position={[-1.897,3.5,-4.161]}
                opacity={Number(isHovered)}>
                <p
                    style={{
                        margin: 0,
                        fontSize: '8pt',
                        textAlign: 'center'
                    }}
                >
                    Fasilitas
                </p>
            </Tooltip>
        </>
    )
}

export default CommandCenterArea