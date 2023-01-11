import React, { useEffect } from "react";

// @ts-ignore
const Backdrop = ({ activeColor, trackIndex, isPlaying }) => {
    useEffect(() => {
        document.documentElement.style.setProperty("--active-color", activeColor);
    }, [trackIndex, activeColor]);

    return <div className={`color-backdrop ${isPlaying ? "playing" : "idle"}`} />;
};

export default Backdrop;
