import { Text, useCursor } from "@react-three/drei"
import Robots from "./Robots"
import React from "react"
import gsap from "gsap"

import useMainStore from "../../store/useMainStore"
import useDataStore from "../../store/dataStore"

const RobotArea = ({ nodes, materials }) => {

    // Get state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()
    const professors = useDataStore.useProfessors()

    // Set the initial state of the hover states each button
    const [prevHovered, setPrevHovered] = React.useState(false)
    const [nextHovered, setNextHovered] = React.useState(false)
    
    // Calculate the number of slides needed
    const total = professors.length
    const lecturerPerSlide = 3
    const numSlides = Math.ceil(total / lecturerPerSlide)

    // Set the initial slide to index 0
    const [slide, setSlide] = React.useState(0)

    // Create refs for the previous and next buttons, also for the slide
    const prevRef = React.useRef()
    const nextRef = React.useRef()
    const slideRef = React.useRef()

    const onPrevOver = React.useCallback((e) => {
        if (focusTarget === null) {
            e.stopPropagation()
            setPrevHovered(true)
        }
    }, [focusTarget])

    const onPrevOut = React.useCallback(() => {
        if (focusTarget === null) {
            setPrevHovered(false)
        }
    }, [focusTarget])

    const onPrevClick = React.useCallback((e) => {
        if (focusTarget === null) {
            e.stopPropagation()
            setSlide(s => ((s + numSlides - 1) % numSlides))
        }
    }, [focusTarget])

    const onNextOver = React.useCallback((e) => {
        if (focusTarget === null) {
            e.stopPropagation()
            setNextHovered(true)
        }
    }, [focusTarget])

    const onNextOut = React.useCallback(() => {
        if (focusTarget === null) {
            setNextHovered(false)
        }
    }, [focusTarget])

    const onNextClick = React.useCallback((e) => {
        if (focusTarget === null) {
            e.stopPropagation()
            setSlide(s => (s + 1) % numSlides)
        }
    }, [slide, focusTarget])

    React.useEffect(() => {
        if (slideRef.current) {
            gsap.to(slideRef.current.position, {duration: 1, x: 0, y:0, z:slide * 4.5})
        }
    }, [slide])

    useCursor(nextHovered || prevHovered)

    return (
        <>
            <Robots nodes={nodes} materials={materials} ref={slideRef} slide={slide}/>
            
            <mesh name="robot_place" geometry={nodes.robot_place.geometry} material={materials.robot_place} position={[-4.104, 0.043, 0]} rotation={[0, Math.PI / 2, 0]} />
            <group position={[-3.35, 1.5, 3]} rotation={[0, Math.PI/2, 0]} ref={prevRef} onPointerOver={onPrevOver} onPointerOut={onPrevOut} onClick={onPrevClick}>
                <mesh>
                    <planeGeometry args={[.75, .5]}/>
                    <meshStandardMaterial color={'black'} side={2}/>
                </mesh>
                <Text position={[0,0,.01]} fontSize={.2}>prev</Text>
            </group>
            <group position={[-3.35, 1.5, -3]} rotation={[0, Math.PI/2, 0]} ref={nextRef} onPointerOver={onNextOver} onPointerOut={onNextOut} onClick={onNextClick}>
                <mesh>
                    <planeGeometry args={[.75, .5]}/>
                    <meshStandardMaterial color={'black'} side={2}/>
                </mesh>
                <Text position={[0,0,.01]} fontSize={.2}>next</Text>
            </group>
        </>
    )
}

export default RobotArea