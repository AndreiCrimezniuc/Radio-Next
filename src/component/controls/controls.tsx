import {ReactElement, useState} from "react";
import {PlayControlProps, PlayStatus} from "./play-controls-types";
import {ReactComponent as Pause} from "../../assets/pause.svg";
import {ReactComponent as Play} from "../../assets/play.svg";

function AudioControls(playProps: PlayControlProps): ReactElement {
    function onPlayPauseClick(status: boolean) {
        playProps.changeGlobalPlayStatus(status)
    }

    const [localPlayStatus, setLocalPlaystatus] = useState(false)

    return (
        <div className="audio-controls">
            {playProps.isPlaying ? (
                <button
                    type="button"
                    className="pause"
                    onClick={() => onPlayPauseClick(false)}
                    aria-label="Pause"
                >
                    <Pause/>
                </button>
            ) : (
                <button
                    type="button"
                    className="play"
                    onClick={() => onPlayPauseClick(true)}
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