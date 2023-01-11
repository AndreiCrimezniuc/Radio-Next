import {ReactElement, useState, useEffect} from "react";
import {PlayControlProps} from "./play-controls-types";
import {ReactComponent as Pause} from "../../assets/pause.svg";
import {ReactComponent as Play} from "../../assets/play.svg";

function AudioControls(playProps: PlayControlProps): ReactElement {
    const [localPlayStatus, setLocalPlayStatus] = useState(false)

    function onPlayPauseClick() {
        setLocalPlayStatus(!localPlayStatus)
        playProps.changeGlobalPlayStatus(Number(playProps.station?.ID))
    }

    return (
        <div className="audio-controls">
            {localPlayStatus ? (
                <button
                    type="button"
                    className="pause"
                    onClick={() => onPlayPauseClick()}
                    aria-label="Pause"
                >
                    <Pause/>
                </button>
            ) : (
                <button
                    type="button"
                    className="play"
                    onClick={() => onPlayPauseClick()}
                    aria-label="Play"
                >
                    <Play/>
                </button>
            )}
        </div>
    )
}


export function Controls(props: PlayControlProps): ReactElement {
    return (
        <div>
            <AudioControls changeGlobalPlayStatus={props.changeGlobalPlayStatus} isPlaying={props.isPlaying}/>

            {/*<Backdrop*/}
            {/*    trackIndex={trackIndex}*/}
            {/*    activeColor={color}*/}
            {/*    isPlaying={isPlaying}*/}
            {/*/>*/}
        </div>
    );
}