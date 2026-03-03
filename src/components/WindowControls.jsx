import useWindowStore from "#store/window";
import React from "react";

const WindowControls = ({ target }) => {
    const { closeWindow } = useWindowStore();

    return (
        <div id="window-controls">
            <button
                type="button"
                className="close"
                onClick={() => closeWindow(target)}
                aria-label="Close window"
            />
            <button
                type="button"
                className="minimize"
                aria-label="Minimize window"
                onClick={() => {
                    /* minimize handler can be added later */
                }}
            />
            <button
                type="button"
                className="maximize"
                aria-label="Maximize window"
                onClick={() => {
                    /* maximize handler can be added later */
                }}
            />
        </div>
    );
};

export default WindowControls;
