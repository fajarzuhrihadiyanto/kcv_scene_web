const RobotFemale = ({ nodes, materials, ...props }) => {
    return (
        <group name="robot_female" {...props}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="Beta_Joints" geometry={nodes.Beta_Joints.geometry} material={materials['Beta_Joints_MAT1']} skeleton={nodes.Beta_Joints.skeleton} />
          <skinnedMesh name="Beta_Surface" geometry={nodes.Beta_Surface.geometry} material={materials['Beta_HighLimbsGeoSG3']} skeleton={nodes.Beta_Surface.skeleton} />
        </group>
    )
}

export default RobotFemale