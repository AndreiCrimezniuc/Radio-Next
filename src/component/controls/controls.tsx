import {ReactElement, useState} from "react";
import {PlayControlProps} from "./play-controls-types";
import {ReactComponent as Pause} from "../../assets/pause.svg";
import {ReactComponent as Play} from "../../assets/play.svg";

function AudioControls(playProps: PlayControlProps): ReactElement {
    function onPlayPauseClick(status: boolean) {
        setLocalPlayStatus(!localPlayStatus)
    }
    // how to manipulate with global state to react correct behavior?
    const [localPlayStatus, setLocalPlayStatus] = useState(false)

    return (
        <div className="audio-controls">
            {localPlayStatus ? (
                <button
                    type="button"
                    className="pause"
                    onClick={() => onPlayPauseClick(true)}
                    aria-label="Pause"
                >
                    <Pause/>
                </button>
            ) : (
                <button
                    type="button"
                    className="play"
                    onClick={() => onPlayPauseClick(false)}
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