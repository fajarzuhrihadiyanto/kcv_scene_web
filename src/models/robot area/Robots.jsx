import React from "react"

import Robot from "./Robot"
import useDataStore from "../../store/dataStore"

const Robots = React.forwardRef(({ nodes, materials, slide, ...props }, ref) => {
    const professors = useDataStore.useProfessors()
    console.log(professors)
    return (
        <group {...props} ref={ref}>
           {professors.map((lecturer, i) => (
            <Robot nodes={nodes} materials={materials}
                position={[-4.104, 0.2, 1.5 - i * 1.5]} 
                key={i}
                gender="female"
                lecturer={lecturer}
                
                // only show robot inside the box
                isShow={i >= slide * 3 && i < (slide+1) * 3} />
            ))}
        </group>
    )
})

export default Robots