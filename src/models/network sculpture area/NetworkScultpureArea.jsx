import GeneralInformation from "../../html/GeneralInformation"
import NetworkSculpture from "./NetworkSculpture"
import NetworkSculptureBase from "./NetworkScultptureBase"

const NetworkSculptureArea = ({ nodes, materials }) => {
    return (
        <>
            <NetworkSculpture nodes={nodes} materials={materials} />
            <NetworkSculptureBase nodes={nodes} materials={materials} />
            <GeneralInformation />
        </>
    )
}

export default NetworkSculptureArea