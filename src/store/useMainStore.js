import create from 'zustand'
import { createSelectorHooks } from 'auto-zustand-selectors-hook'

const useMainStoreBase = create(
  set => ({
    focusTarget: null,
    setFocusTarget: focusTarget => set({ focusTarget }),

    cameraPosition: [-1.5,2,0],
    // ROBOT VIEW (DEVELOPMENT ONLY)
    // cameraPosition: [4.201 - 1.5, 1.5, -1.3],
    // CHIP VIEW (DEVELOPMENT ONLY)
    // cameraPosition: [5.659 - 1.5, .95, 1.485],
    // HOLOGRAM VIEW (DEVELOPMENT ONLY)
    // cameraPosition: [2.641 - 1.5, 0.9, 0],
    setCameraPosition: cameraPosition => set({ cameraPosition }),

    controlsTargetOffset: [1.5,0,0],
    setControlsTargetOffset: controlsTargetOffset => set({ controlsTargetOffset }),

    subjectData: null,
    setSubjectData: subjectData => set({ subjectData }),

    scene: null,
    setScene: scene => set({ scene }),

    isIndustrialRobotFocused: false,
    setIsIndustrialRobotFocused: isIndustrialRobotFocused => set({ isIndustrialRobotFocused }),

    back: () => {
      set({ focusTarget: null })
      set({ cameraPosition: [0,2,0] })
      set({ controlsTargetOffset: [-.01,2,0] })
    }
  })
)

const useMainStore = createSelectorHooks(useMainStoreBase)

export default useMainStore