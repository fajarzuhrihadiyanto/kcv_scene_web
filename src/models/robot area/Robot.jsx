import React from "react";
import { useCursor, useGLTF } from "@react-three/drei"
import * as SkeletonUtils from 'three/addons/utils/SkeletonUtils.js';
import { useGraph } from "@react-three/fiber";
import { Select } from "@react-three/postprocessing";
import { Plane, Vector3 } from "three";

import RobotFemale from "./RobotFemale"
import RobotMale from "./RobotMale"
import Tooltip from "../../components/Tootlip";
import useMainStore from "../../store/useMainStore";
import { FOCUS_LECTURER } from "../../constants";
import LecturerPage from "../../html/LecturerPage";

const Robot = ({ nodes, materials, lecturer, gender='male', isShow, ...props }) => {
    // Get state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()
    const setFocusTarget = useMainStore.useSetFocusTarget()
    const setCameraPosition = useMainStore.useSetCameraPosition()
    const setControlsTargetOffset = useMainStore.useSetControlsTargetOffset()

    const { scene, materials: robot_materials } = useGLTF(process.env.REACT_APP_ROBOT_MODEL_URL)
    const scene_clone = SkeletonUtils.clone(scene)

    const { nodes: robot_nodes } = useGraph(scene_clone)

    const ref = React.useRef()

    // get global z position of the robot
    const positionZ = ref.current?.getWorldPosition(new Vector3()).z

    // Define left and right boundary for robots to appear
    const clippingPlaneRight = new Plane(new Vector3(0, 0, 1), 2.5)
    const clippingPlaneLeft = new Plane(new Vector3(0, 0, -1), 2.5)
    
    // Setting materials so it only appears inside the box with clipping planes
    materials['robot_case_base.001'].clippingPlanes = [clippingPlaneRight, clippingPlaneLeft]
    materials['robot_case_light.001'].clippingPlanes = [clippingPlaneRight, clippingPlaneLeft]
    materials['robot_case_glass.001'].clippingPlanes = [clippingPlaneRight, clippingPlaneLeft]
    robot_materials['Alpha_Joints_MAT'].clippingPlanes = [clippingPlaneRight, clippingPlaneLeft]
    robot_materials['Alpha_Body_MAT'].clippingPlanes = [clippingPlaneRight, clippingPlaneLeft]
    robot_materials['Beta_Joints_MAT1'].clippingPlanes = [clippingPlaneRight, clippingPlaneLeft]
    robot_materials['Beta_HighLimbsGeoSG3'].clippingPlanes = [clippingPlaneRight, clippingPlaneLeft]

    const [isHovered, setIsHovered] = React.useState(false)
    const [isFocused, setIsFocused] = React.useState(false)

    const onPointerOver = React.useCallback(() => {
        if (focusTarget === null) {
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
            setIsFocused(true)
            setFocusTarget(FOCUS_LECTURER)
            setCameraPosition([-2, 1.5, positionZ])
            setControlsTargetOffset([-.01,0,0])
        }
    }, [focusTarget, positionZ])

    React.useEffect(() => {
        if (focusTarget === null && isFocused) {
            setIsFocused(false)
        }
    }, [focusTarget, isFocused])

    useCursor(isHovered && positionZ < 2 && positionZ > -2)

    return (
        <>
            <Select enabled={isHovered && positionZ < 2 && positionZ > -2}>
                <group {...props} onPointerOver={onPointerOver} onPointerOut={onPointerOut} ref={ref} onClick={onClick}>
                    <group name="robot_case_base" rotation={[0, Math.PI / 2, 0]}>
                        <mesh name="Cylinder041" geometry={nodes.Cylinder041.geometry} material={materials['robot_case_base.001']} />
                        <mesh name="Cylinder041_1" geometry={nodes.Cylinder041_1.geometry} material={materials['robot_case_light.001']} />
                    </group>
                    <group name="robot_case_ceil" position={[0, 2.2, 0]} rotation={[0, Math.PI / 2, 0]}>
                        <mesh name="Cylinder042" geometry={nodes.Cylinder042.geometry} material={materials['robot_case_base.001']} />
                        <mesh name="Cylinder042_1" geometry={nodes.Cylinder042_1.geometry} material={materials['robot_case_light.001']} />
                    </group>
                    <mesh name="robot_case_glass" geometry={nodes.robot_case_glass.geometry} material={materials['robot_case_glass.001']} position={[0, 1.103, 0]} rotation={[0, Math.PI / 2, 0]} scale={[1, 10, 1]} />

                    {lecturer.gender === 'male'
                    ? <RobotMale nodes={robot_nodes} materials={robot_materials} position={[0, 0.1, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
                    : <RobotFemale nodes={robot_nodes} materials={robot_materials} position={[0, 0.1, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01}/>}
        
                    <Tooltip
                        opacity={Number(isHovered && positionZ < 2 && positionZ > -2)}
                        position={[0, 3, 0]}
                        rotation={[0, Math.PI/2, 0]}>
                        <p style={{
                            margin: 0,
                            fontSize: '6pt',
                            textAlign: 'center'
                        }}>{lecturer.name}</p>
                    </Tooltip>

                    <LecturerPage lecturer={lecturer} shown={isFocused} position={[0,1.25,-1.75]} scale={[.1, .1, .1]} rotation={[0, Math.PI / 2, 0]}/>
                </group>
            </Select>
        </>
    )
}

useGLTF.preload(process.env.REACT_APP_ROBOT_MODEL_URL)

export default Robot