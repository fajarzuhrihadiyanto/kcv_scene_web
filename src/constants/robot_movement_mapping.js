import { FOCUS_BOOKS, FOCUS_COMMUNITY_SERVICE, FOCUS_RESEARCH, FOCUS_SUBJECT, FOCUS_SUBJECT_DETAIL } from "."

const robot_base_state = {
    robotJoint1Ref: [Math.PI / 2, -.1, 0],
    robotJoint2Ref: [Math.PI / 2, Math.PI / 4, 0],
    robotJoint3Ref: [Math.PI / 2, Math.PI / 6, 0],
    robotJoint4Ref: [Math.PI / 2, Math.PI / 3, 0],
    robotHookRotateJointRef: [0, 0, 0],
    robotHookArm11Ref: [0, 0, -0.813],
    robotHookArm21Ref: [Math.PI, 0, 2.329],
    robotHookJoint1Ref: [-Math.PI / 2, -1.033, 0],
    robotHookJoint2Ref: [-Math.PI / 2, -1.028, 0],
    duration: 1,
    ease: 'power4.inOut',
    chipRef: [0, 0, 0]
}

const robot_movement_mapping = [{
    null: [
        robot_base_state
    ],
    'nullinitialized1': [
        {
            robotJoint1Ref: [Math.PI / 2, 1, Math.PI / 4 + .05],
            robotJoint2Ref: [Math.PI / 2, Math.PI / 4 + .2, 0],
            robotJoint3Ref: [Math.PI / 2, Math.PI / 6 - .9, 0],
            robotJoint4Ref: [Math.PI / 2, Math.PI / 3 - .9, 0],
            duration: 1,
            ease: 'power4.inOut'
        },
        {
            ...robot_base_state,
            robotHookJoint1Ref: [-Math.PI / 2, -1.033 - .5, 0],
            robotHookJoint2Ref: [-Math.PI / 2, -1.028 - .5, 0],
            duration: 1,
            ease: 'power4.in'
        },
        {
            robotJoint1Ref: [Math.PI / 2, .6, -Math.PI / 2-.195],
            robotJoint2Ref: [Math.PI / 2, Math.PI / 4 + .1, 0],
            robotJoint3Ref: [Math.PI / 2, Math.PI / 6 - .1, 0],
            robotJoint4Ref: [Math.PI / 2, Math.PI / 3 - .1, 0],
            robotHookRotateJointRef: [0,Math.PI / 2,0],
            robotHookArm11Ref: [0, 0, -0.813],
            robotHookArm21Ref: [Math.PI, 0, 2.329],
            robotHookJoint1Ref: [-Math.PI / 2, -1.033 - .5, 0],
            robotHookJoint2Ref: [-Math.PI / 2, -1.028 - .5, 0],
            duration: 1,
            ease: 'power4.out'
        },
        robot_base_state
    ],
    [FOCUS_SUBJECT + 'into']: [
        {
            robotJoint1Ref: [Math.PI / 2, .6, -Math.PI / 2-.195],
            robotJoint2Ref: [Math.PI / 2, Math.PI / 4 + .1, 0],
            robotJoint3Ref: [Math.PI / 2, Math.PI / 6 - .1, 0],
            robotJoint4Ref: [Math.PI / 2, Math.PI / 3 - .1, 0],
            robotHookRotateJointRef: [0,Math.PI / 2,0],
            robotHookArm11Ref: [0, 0, -0.813],
            robotHookArm21Ref: [Math.PI, 0, 2.329],
            robotHookJoint1Ref: [-Math.PI / 2, -1.033 - .5, 0],
            robotHookJoint2Ref: [-Math.PI / 2, -1.028 - .5, 0],
            duration: 1,
            ease: 'power4.inOut'
        },
        {
            ...robot_base_state,
            robotHookRotateJointRef: [0, Math.PI/2, 0],
            chipRef: [1, 1, 1],
            robotHookJoint1Ref: [-Math.PI / 2, -1.033 - .5, 0],
            robotHookJoint2Ref: [-Math.PI / 2, -1.028 - .5, 0],
            duration: 1,
            ease: 'power4.in'
        },
        {
            robotJoint1Ref: [Math.PI / 2, 1, Math.PI / 4 + .05],
            robotJoint2Ref: [Math.PI / 2, Math.PI / 4 + .2, 0],
            robotJoint3Ref: [Math.PI / 2, Math.PI / 6 - .9, 0],
            robotJoint4Ref: [Math.PI / 2, Math.PI / 3 - .9, 0],
            duration: 1,
            ease: 'power4.out'
        },
        robot_base_state
    ],
    [FOCUS_SUBJECT_DETAIL]: [
        {
            robotJoint1Ref: [Math.PI / 2, .6, -Math.PI / 2-.125],
            robotJoint2Ref: [Math.PI / 2, Math.PI / 4 + .1, 0],
            robotJoint3Ref: [Math.PI / 2, Math.PI / 6 - .1, 0],
            robotJoint4Ref: [Math.PI / 2, Math.PI / 3 - .1, 0],
            robotHookRotateJointRef: [0,Math.PI / 2,0],
            robotHookArm11Ref: [0, 0, -0.813],
            robotHookArm21Ref: [Math.PI, 0, 2.329],
            robotHookJoint1Ref: [-Math.PI / 2, -1.033 - .5, 0],
            robotHookJoint2Ref: [-Math.PI / 2, -1.028 - .5, 0],
            duration: 1,
            ease: 'power4.inOut'
        },
        {
            ...robot_base_state,
            robotHookRotateJointRef: [0, Math.PI/2, 0],
            robotHookJoint1Ref: [-Math.PI / 2, -1.033 - .5, 0],
            robotHookJoint2Ref: [-Math.PI / 2, -1.028 - .5, 0],
            duration: 1,
            chipRef: [1, 1, 1],
            ease: 'power4.in'
        },
        {
            robotJoint1Ref: [Math.PI / 2, 1, Math.PI / 4 + .05],
            robotJoint2Ref: [Math.PI / 2, Math.PI / 4 + .2, 0],
            robotJoint3Ref: [Math.PI / 2, Math.PI / 6 - .9, 0],
            robotJoint4Ref: [Math.PI / 2, Math.PI / 3 - .9, 0],
            duration: 1,
            ease: 'power4.out'
        },
        robot_base_state
    ],
    [FOCUS_SUBJECT + 'outto']: [
        {
            robotJoint1Ref: [Math.PI / 2, 1, Math.PI / 4 + .05],
            robotJoint2Ref: [Math.PI / 2, Math.PI / 4 + .2, 0],
            robotJoint3Ref: [Math.PI / 2, Math.PI / 6 - .9, 0],
            robotJoint4Ref: [Math.PI / 2, Math.PI / 3 - .9, 0],
            duration: 1,
            ease: 'power4.inOut'
        },
        {
            ...robot_base_state,
            robotHookRotateJointRef: [0, Math.PI/2, 0],
            robotHookJoint1Ref: [-Math.PI / 2, -1.033 - .5, 0],
            robotHookJoint2Ref: [-Math.PI / 2, -1.028 - .5, 0],
            duration: 1,
            chipRef: [1, 1, 1],
            ease: 'power4.in'
        },
        {
            robotJoint1Ref: [Math.PI / 2, .6, -Math.PI / 2-.125],
            robotJoint2Ref: [Math.PI / 2, Math.PI / 4 + .1, 0],
            robotJoint3Ref: [Math.PI / 2, Math.PI / 6 - .1, 0],
            robotJoint4Ref: [Math.PI / 2, Math.PI / 3 - .1, 0],
            robotHookRotateJointRef: [0,Math.PI / 2,0],
            robotHookArm11Ref: [0, 0, -0.813],
            robotHookArm21Ref: [Math.PI, 0, 2.329],
            robotHookJoint1Ref: [-Math.PI / 2, -1.033 - .5, 0],
            robotHookJoint2Ref: [-Math.PI / 2, -1.028 - .5, 0],
            duration: 1,
            ease: 'power4.Out'
        },
        robot_base_state
    ]
}, {
    null: [
        robot_base_state,
    ],
    'nullinitialized2': [
        {
            robotJoint1Ref: [Math.PI / 2, 1, Math.PI / 4 + .05],
            robotJoint2Ref: [Math.PI / 2, Math.PI / 4 + .2, 0],
            robotJoint3Ref: [Math.PI / 2, Math.PI / 6 - .9, 0],
            robotJoint4Ref: [Math.PI / 2, Math.PI / 3 - .9, 0],
            duration: 1,
            ease: 'power4.inOut'
        },
        {
            ...robot_base_state,
            robotHookJoint1Ref: [-Math.PI / 2, -1.033 - .5, 0],
            robotHookJoint2Ref: [-Math.PI / 2, -1.028 - .5, 0],
            duration: 1,
            ease: 'power4.in'
        },
        {
            robotJoint1Ref: [Math.PI / 2, .6, -Math.PI / 2-.125],
            robotJoint2Ref: [Math.PI / 2, Math.PI / 4 + .1, 0],
            robotJoint3Ref: [Math.PI / 2, Math.PI / 6 - .1, 0],
            robotJoint4Ref: [Math.PI / 2, Math.PI / 3 - .1, 0],
            robotHookRotateJointRef: [0,Math.PI / 2,0],
            robotHookArm11Ref: [0, 0, -0.813],
            robotHookArm21Ref: [Math.PI, 0, 2.329],
            robotHookJoint1Ref: [-Math.PI / 2, -1.033 - .5, 0],
            robotHookJoint2Ref: [-Math.PI / 2, -1.028 - .5, 0],
            duration: 1,
            ease: 'power4.out'
        },
        robot_base_state
    ],
    [FOCUS_SUBJECT + 'outto']: [
        { 
            ...robot_base_state,
            chipRef: [1, 1, 1],
            robotHookRotateJointRef: [0, Math.PI / 2, 0],
            robotHookJoint1Ref: [-Math.PI / 2, -1.033 - .5, 0],
            robotHookJoint2Ref: [-Math.PI / 2, -1.028 - .5, 0],
        },
        { 
            ...robot_base_state,
            chipRef: [1, 1, 1],
            robotHookRotateJointRef: [0, Math.PI / 2, 0],
            robotHookJoint1Ref: [-Math.PI / 2, -1.033 - .5, 0],
            robotHookJoint2Ref: [-Math.PI / 2, -1.028 - .5, 0],
        },
        {
            robotJoint1Ref: [Math.PI / 2, 1, Math.PI / 4 + .05],
            robotJoint2Ref: [Math.PI / 2, Math.PI / 4 + .2, 0],
            robotJoint3Ref: [Math.PI / 2, Math.PI / 6 - .9, 0],
            robotJoint4Ref: [Math.PI / 2, Math.PI / 3 - .9, 0],
            robotHookJoint1Ref: [-Math.PI / 2, -1.033 - .5, 0],
            robotHookJoint2Ref: [-Math.PI / 2, -1.028 - .5, 0],
            duration: 1,
            ease: 'power4.out'
        },
        { 
            ...robot_base_state
        }
    ],
    [FOCUS_SUBJECT_DETAIL]: [
        {
            robotJoint1Ref: [Math.PI / 2, 1, Math.PI / 4 + .05],
            robotJoint2Ref: [Math.PI / 2, Math.PI / 4 + .2, 0],
            robotJoint3Ref: [Math.PI / 2, Math.PI / 6 - .9, 0],
            robotJoint4Ref: [Math.PI / 2, Math.PI / 3 - .9, 0],
            robotHookJoint1Ref: [-Math.PI / 2, -1.033 - .5, 0],
            robotHookJoint2Ref: [-Math.PI / 2, -1.028 - .5, 0],
            duration: 1,
            ease: 'power4.out'
        },
        { 
            ...robot_base_state,
            robotHookRotateJointRef: [0, Math.PI/2, 0],
            robotHookJoint1Ref: [-Math.PI / 2, -1.033 - .5, 0],
            robotHookJoint2Ref: [-Math.PI / 2, -1.028 - .5, 0],
            chipRef: [1, 1, 1],
        }
    ],
    [FOCUS_RESEARCH]: [
        {
            robotJoint1Ref: [Math.PI / 2, .6, -Math.PI / 2-.195],
            robotJoint2Ref: [Math.PI / 2, Math.PI / 4 + .1, 0],
            robotJoint3Ref: [Math.PI / 2, Math.PI / 6 - .1, 0],
            robotJoint4Ref: [Math.PI / 2, Math.PI / 3 - .1, 0],
            robotHookRotateJointRef: [0,Math.PI / 2,0],
            robotHookArm11Ref: [0, 0, -0.813],
            robotHookArm21Ref: [Math.PI, 0, 2.329],
            robotHookJoint1Ref: [-Math.PI / 2, -1.033 - .5, 0],
            robotHookJoint2Ref: [-Math.PI / 2, -1.028 - .5, 0],
            duration: 1,
            ease: 'power4.inOut'
        },
        {
            ...robot_base_state,
            robotHookRotateJointRef: [0, Math.PI/2, 0],
            robotHookJoint1Ref: [-Math.PI / 2, -1.033 - .5, 0],
            robotHookJoint2Ref: [-Math.PI / 2, -1.028 - .5, 0],
            chipRef: [1, 1, 1],
            duration: 1,
            ease: 'power4.in'
        },
        {
            robotJoint1Ref: [Math.PI / 2, 1, Math.PI / 4 + .05],
            robotJoint2Ref: [Math.PI / 2, Math.PI / 4 + .2, 0],
            robotJoint3Ref: [Math.PI / 2, Math.PI / 6 - .9, 0],
            robotJoint4Ref: [Math.PI / 2, Math.PI / 3 - .9, 0],
            duration: 1,
            ease: 'power4.out'
        },
        robot_base_state
    ],
    [FOCUS_COMMUNITY_SERVICE]: [
        {
            robotJoint1Ref: [Math.PI / 2, .6, -Math.PI / 2-.125],
            robotJoint2Ref: [Math.PI / 2, Math.PI / 4 + .1, 0],
            robotJoint3Ref: [Math.PI / 2, Math.PI / 6 - .1, 0],
            robotJoint4Ref: [Math.PI / 2, Math.PI / 3 - .1, 0],
            robotHookRotateJointRef: [0,Math.PI / 2,0],
            robotHookArm11Ref: [0, 0, -0.813],
            robotHookArm21Ref: [Math.PI, 0, 2.329],
            robotHookJoint1Ref: [-Math.PI / 2, -1.033 - .5, 0],
            robotHookJoint2Ref: [-Math.PI / 2, -1.028 - .5, 0],
            duration: 1,
            ease: 'power4.inOut'
        },
        {
            ...robot_base_state,
            robotHookRotateJointRef: [0, Math.PI/2, 0],
            robotHookJoint1Ref: [-Math.PI / 2, -1.033 - .5, 0],
            robotHookJoint2Ref: [-Math.PI / 2, -1.028 - .5, 0],
            chipRef: [1, 1, 1],
            duration: 1,
            ease: 'power4.in'
        },
        {
            robotJoint1Ref: [Math.PI / 2, 1, Math.PI / 4 + .05],
            robotJoint2Ref: [Math.PI / 2, Math.PI / 4 + .2, 0],
            robotJoint3Ref: [Math.PI / 2, Math.PI / 6 - .9, 0],
            robotJoint4Ref: [Math.PI / 2, Math.PI / 3 - .9, 0],
            duration: 1,
            ease: 'power4.out'
        },
        robot_base_state
    ],
    [FOCUS_BOOKS]: [
        {
            robotJoint1Ref: [Math.PI / 2, .6, -Math.PI / 2-.055],
            robotJoint2Ref: [Math.PI / 2, Math.PI / 4 + .1, 0],
            robotJoint3Ref: [Math.PI / 2, Math.PI / 6 - .1, 0],
            robotJoint4Ref: [Math.PI / 2, Math.PI / 3 - .1, 0],
            robotHookRotateJointRef: [0,Math.PI / 2,0],
            robotHookArm11Ref: [0, 0, -0.813],
            robotHookArm21Ref: [Math.PI, 0, 2.329],
            robotHookJoint1Ref: [-Math.PI / 2, -1.033 - .5, 0],
            robotHookJoint2Ref: [-Math.PI / 2, -1.028 - .5, 0],
            duration: 1,
            ease: 'power4.inOut'
        },
        {
            ...robot_base_state,
            robotHookRotateJointRef: [0, Math.PI/2, 0],
            robotHookJoint1Ref: [-Math.PI / 2, -1.033 - .5, 0],
            robotHookJoint2Ref: [-Math.PI / 2, -1.028 - .5, 0],
            chipRef: [1, 1, 1],
            duration: 1,
            ease: 'power4.in'
        },
        {
            robotJoint1Ref: [Math.PI / 2, 1, Math.PI / 4 + .05],
            robotJoint2Ref: [Math.PI / 2, Math.PI / 4 + .2, 0],
            robotJoint3Ref: [Math.PI / 2, Math.PI / 6 - .9, 0],
            robotJoint4Ref: [Math.PI / 2, Math.PI / 3 - .9, 0],
            duration: 1,
            ease: 'power4.out'
        },
        robot_base_state
    ]
}]

export default robot_movement_mapping