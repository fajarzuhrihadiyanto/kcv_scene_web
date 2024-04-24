import React from "react"
import gsap from "gsap"

import useMainStore from "../../store/useMainStore"
import { FOCUS_BOOKS, FOCUS_COMMUNITY_SERVICE, FOCUS_RESEARCH, FOCUS_SUBJECT } from "../../constants"
import { ChipBody } from "./Chip"
import robot_movement_mapping from "../../constants/robot_movement_mapping"


const IndustrialRobot = ({ nodes, materials, flag, ...props }) => {

    // Get state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()
    const subjectData = useMainStore.useSubjectData()

    const robotJoint1Ref = React.useRef()
    const robotJoint2Ref = React.useRef()
    const robotJoint3Ref = React.useRef()
    const robotJoint4Ref = React.useRef()
    const robotHookRotateJointRef = React.useRef()
    const robotHookArm11Ref = React.useRef()
    const robotHookArm21Ref = React.useRef()
    const robotHookJoint1Ref = React.useRef()
    const robotHookJoint2Ref = React.useRef()
    const chipRef = React.useRef()

    const [initialized, setInitialized] = React.useState(null)

    React.useEffect(() => {
        let index = focusTarget

        if (focusTarget !== null) {
            if (focusTarget === FOCUS_SUBJECT) setInitialized(1)
            if ([FOCUS_RESEARCH, FOCUS_COMMUNITY_SERVICE, FOCUS_BOOKS].includes(focusTarget)) setInitialized(2)
        }

        if (focusTarget === FOCUS_SUBJECT && subjectData === null) index = focusTarget + 'into'
        if (focusTarget === FOCUS_SUBJECT && subjectData !== null) index = focusTarget + 'outto'
        if (focusTarget === null && initialized) index = focusTarget + 'initialized' + initialized

        if (robotJoint1Ref.current && robotJoint2Ref.current && robotJoint3Ref.current && robotJoint4Ref.current && robotHookRotateJointRef.current && robotHookJoint1Ref.current && robotHookJoint2Ref.current && chipRef.current) {

            if (robot_movement_mapping[flag][index]) {
                const tl = gsap.timeline()
                robot_movement_mapping[flag][index].forEach((rotation, index) => {
                    rotation.robotJoint1Ref && tl.to(robotJoint1Ref.current.rotation, {duration: rotation.duration, ease: rotation.ease, x: rotation.robotJoint1Ref[0], y: rotation.robotJoint1Ref[1], z: rotation.robotJoint1Ref[2], order: 'XZY' }, index * rotation.duration )
                    rotation.robotJoint2Ref && tl.to(robotJoint2Ref.current.rotation, {duration: rotation.duration, ease: rotation.ease, x: rotation.robotJoint2Ref[0], y: rotation.robotJoint2Ref[1], z: rotation.robotJoint2Ref[2]}, index * rotation.duration )
                    rotation.robotJoint3Ref && tl.to(robotJoint3Ref.current.rotation, {duration: rotation.duration, ease: rotation.ease, x: rotation.robotJoint3Ref[0], y: rotation.robotJoint3Ref[1], z: rotation.robotJoint3Ref[2]}, index * rotation.duration )
                    rotation.robotJoint4Ref && tl.to(robotJoint4Ref.current.rotation, {duration: rotation.duration, ease: rotation.ease, x: rotation.robotJoint4Ref[0], y: rotation.robotJoint4Ref[1], z: rotation.robotJoint4Ref[2]}, index * rotation.duration )
                    rotation.robotHookRotateJointRef && tl.to(robotHookRotateJointRef.current.rotation, {duration: rotation.duration, ease: rotation.ease, x: rotation.robotHookRotateJointRef[0], y: rotation.robotHookRotateJointRef[1], z: rotation.robotHookRotateJointRef[2]}, index * rotation.duration)
                    rotation.robotHookArm11Ref && tl.to(robotHookArm11Ref.current.rotation, {duration: rotation.duration, ease: rotation.ease, x: rotation.robotHookArm11Ref[0], y: rotation.robotHookArm11Ref[1], z: rotation.robotHookArm11Ref[2]}, index * rotation.duration )
                    rotation.robotHookArm21Ref && tl.to(robotHookArm21Ref.current.rotation, {duration: rotation.duration, ease: rotation.ease, x: rotation.robotHookArm21Ref[0], y: rotation.robotHookArm21Ref[1], z: rotation.robotHookArm21Ref[2]}, index * rotation.duration )
                    rotation.robotHookJoint1Ref && tl.to(robotHookJoint1Ref.current.rotation, {duration: rotation.duration, ease: rotation.ease, x: rotation.robotHookJoint1Ref[0], y: rotation.robotHookJoint1Ref[1], z: rotation.robotHookJoint1Ref[2]}, index * rotation.duration )
                    rotation.robotHookJoint2Ref && tl.to(robotHookJoint2Ref.current.rotation, {duration: rotation.duration, ease: rotation.ease, x: rotation.robotHookJoint2Ref[0], y: rotation.robotHookJoint2Ref[1], z: rotation.robotHookJoint2Ref[2]}, index * rotation.duration )
                    rotation.chipRef && tl.to(chipRef.current.scale, {duration: 0, ease: rotation.ease, x: rotation.chipRef[0], y: rotation.chipRef[1], z: rotation.chipRef[2]}, index * rotation.duration)
                })
            }
        }
    }, [focusTarget, initialized])

    console.log('initialized',initialized)

    return (
        <group name="a" {...props}>
            <mesh name="industrial_robot_base" geometry={nodes.industrial_robot_base.geometry} material={materials['industrial robot_base']}/>
            <group name="industrial_robot_joint_1" position={[0, 0.195, 0]} rotation={[Math.PI / 2, -.1, 0]} ref={robotJoint1Ref}>
                <mesh name="Cylinder002" geometry={nodes.Cylinder002.geometry} material={materials.industrial_robot_joint_main} />
                <mesh name="Cylinder002_1" geometry={nodes.Cylinder002_1.geometry} material={materials['industrial robot_joint_accent']} />
                <mesh name="industrial_robot_arm_1" geometry={nodes.industrial_robot_arm_1.geometry} material={materials['industrial robot_arm']} position={[0, 0, -0.001]} rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="industrial_robot_joint_2" position={[0, 0.406, 0]} rotation={[Math.PI / 2, Math.PI / 4, 0]} ref={robotJoint2Ref}>
                        <mesh name="Cylinder004" geometry={nodes.Cylinder004.geometry} material={materials.industrial_robot_joint_main} />
                        <mesh name="Cylinder004_1" geometry={nodes.Cylinder004_1.geometry} material={materials['industrial robot_joint_accent']} />
                        <mesh name="industrial_robot_arm_2" geometry={nodes.industrial_robot_arm_2.geometry} material={materials['industrial robot_arm']} position={[0, 0, 0.006]} rotation={[-Math.PI / 2, 0, 0]}>
                            <group name="industrial_robot_joint_3" position={[0, 0.606, 0]} rotation={[Math.PI / 2, Math.PI / 6, 0]} ref={robotJoint3Ref}>
                                <mesh name="Cylinder006" geometry={nodes.Cylinder006.geometry} material={materials.industrial_robot_joint_main} />
                                <mesh name="Cylinder006_1" geometry={nodes.Cylinder006_1.geometry} material={materials['industrial robot_joint_accent']} />
                                <mesh name="industrial_robot_arm_3" geometry={nodes.industrial_robot_arm_3.geometry} material={materials['industrial robot_arm']} position={[0, 0, 0.006]} rotation={[-Math.PI / 2, 0, 0]}>
                                    <group name="industrial_robot_joint_4" position={[0, 0.606, 0]} rotation={[Math.PI / 2, Math.PI / 3, 0]} ref={robotJoint4Ref}>
                                        <mesh name="Cylinder008" geometry={nodes.Cylinder008.geometry} material={materials.industrial_robot_joint_main} />
                                        <mesh name="Cylinder008_1" geometry={nodes.Cylinder008_1.geometry} material={materials['industrial robot_joint_accent']} />
                                        <mesh name="industrial_robot_hook_base" geometry={nodes.industrial_robot_hook_base.geometry} material={materials['industrial robot_arm']} position={[0, 0, 0.006]} rotation={[-Math.PI / 2, 0, 0]}>
                                            <mesh name="industrial_robot_hook_rotate_joint" geometry={nodes.industrial_robot_hook_rotate_joint.geometry} material={materials['industrial robot_base']} position={[0, 0.113, 0]} rotation={[0,0,0]} ref={robotHookRotateJointRef}>
                                                <mesh name="industrial_robot_hook_arm_11" geometry={nodes.industrial_robot_hook_arm_11.geometry} material={nodes.industrial_robot_hook_arm_11.material} position={[0, 0.027, 0]} rotation={[0, 0, -0.813]} ref={robotHookArm11Ref}>
                                                    <mesh name="industrial_robot_hook_joint_1" geometry={nodes.industrial_robot_hook_joint_1.geometry} material={materials.industrial_robot_joint_main} position={[0, 0.1, 0]} rotation={[-Math.PI / 2, -1.033, 0]} ref={robotHookJoint1Ref}>
                                                        <mesh name="industrial_robot_hook_arm_12" geometry={nodes.industrial_robot_hook_arm_12.geometry} material={nodes.industrial_robot_hook_arm_12.material} rotation={[Math.PI / 2, 0, 0]} />
                                                    </mesh>
                                                </mesh>
                                                <mesh name="industrial_robot_hook_arm_21" geometry={nodes.industrial_robot_hook_arm_21.geometry} material={nodes.industrial_robot_hook_arm_21.material} position={[0, 0.027, 0]} rotation={[Math.PI, 0, 2.329]} ref={robotHookArm21Ref}>
                                                    <mesh name="industrial_robot_hook_joint_2" geometry={nodes.industrial_robot_hook_joint_2.geometry} material={materials.industrial_robot_joint_main} position={[0, 0.1, 0]} rotation={[-Math.PI / 2, -1.028, 0]} ref={robotHookJoint2Ref}>
                                                        <mesh name="industrial_robot_hook_arm_22" geometry={nodes.industrial_robot_hook_arm_22.geometry} material={nodes.industrial_robot_hook_arm_22.material} rotation={[Math.PI / 2, 0, 0]} />
                                                    </mesh>
                                                </mesh>
                                                <ChipBody nodes={nodes} materials={materials} position={[0,.2,0]} rotation={[Math.PI,0,-Math.PI/2]} ref={chipRef}/>
                                            </mesh>
                                        </mesh>
                                    </group>
                                </mesh>
                                <mesh name="industrial_robot_cable_3" geometry={nodes.industrial_robot_cable_3.geometry} material={materials['industrial robot_cable']} position={[0, -0.092, -0.296]} rotation={[-Math.PI / 2, 0, 0]} />
                            </group>
                        </mesh>
                        <mesh name="industrial_robot_cable_2" geometry={nodes.industrial_robot_cable_2.geometry} material={materials['industrial robot_cable']} position={[0, -0.108, -0.314]} rotation={[-Math.PI / 2, 0, 0]} />
                    </group>
                </mesh>
                <mesh name="industrial_robot_cable_1" geometry={nodes.industrial_robot_cable_1.geometry} material={materials['industrial robot_cable']} position={[0, -0.131, -0.205]} rotation={[-Math.PI / 2, 0, 0]} />
            </group>
            <group name="industrial_robot_place" position={[0, -.425, 0]}>
                <mesh name="Cylinder012" geometry={nodes.Cylinder012.geometry} material={materials['industrial robot_place_main']} />
                <mesh name="Cylinder012_1" geometry={nodes.Cylinder012_1.geometry} material={materials['industrial robot_place_light']} />
            </group>
        </group>
    )
}

export default IndustrialRobot