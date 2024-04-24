const RobotMale = ({ nodes, materials, ...props }) => {
    return (
        <group name="robot_male" {...props}>
          <primitive object={nodes.mixamorigHips_1} />
          <skinnedMesh name="Alpha_Joints" geometry={nodes.Alpha_Joints.geometry} material={materials['Alpha_Joints_MAT']} skeleton={nodes.Alpha_Joints.skeleton}/>
          <skinnedMesh name="Alpha_Surface" geometry={nodes.Alpha_Surface.geometry} material={materials['Alpha_Body_MAT']} skeleton={nodes.Alpha_Surface.skeleton}/>
        </group>
    )
}

export default RobotMale