import { immer } from "zustand/middleware/immer";
import { create } from "zustand";
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants";

const useWindowStore = create(
    immer((set) => ({
        // clone initial config so mutations don't affect the original constant
        windows:
            typeof structuredClone === "function"
                ? structuredClone(WINDOW_CONFIG)
                : JSON.parse(JSON.stringify(WINDOW_CONFIG)),
        nextZIndex: INITIAL_Z_INDEX + 1,

        openWindow: (windowKey, data = undefined) =>
            set((state) => {
                const win = state.windows[windowKey];
                if (!win) {
                    console.warn(`openWindow: invalid key "${windowKey}"`);
                    return;
                }
                win.isOpen = true;
                win.zIndex = state.nextZIndex;
                // only preserve existing data when caller omits second arg (undefined)
                win.data = data === undefined ? win.data : data;
                state.nextZIndex++;
            }),

        closeWindow: (windowKey) =>
            set((state) => {
                const win = state.windows[windowKey];
                if (!win) {
                    console.warn(`closeWindow: invalid key "${windowKey}"`);
                    return;
                }
                win.isOpen = false;
                win.zIndex = INITIAL_Z_INDEX;
                win.data = null;
            }),

        focusWindow: (windowKey) =>
            set((state) => {
                const win = state.windows[windowKey];
                if (!win) {
                    console.warn(`focusWindow: invalid key "${windowKey}"`);
                    return;
                }
                win.zIndex = state.nextZIndex++;
            }),
    })),
);

export default useWindowStore;
