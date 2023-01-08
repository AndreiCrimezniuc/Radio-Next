import {ReactElement, useState} from "react";
import {PlayControlProps} from "./play-controls-types";
import {ReactComponent as Pause} from "../../assets/pause.svg";
import {ReactComponent as Play} from "../../assets/play.svg";

function AudioControls(): ReactElement {
    const [isPlaying, setIsPlaying] = useState(false)

    function onPlayPauseClick() {
        setIsPlaying(!isPlaying)
    }

    return (
        <div className="audio-controls">
            {isPlaying ? (
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
            <AudioControls />

            {/*<Backdrop*/}
            {/*    trackIndex={trackIndex}*/}
            {/*    activeColor={color}*/}
            {/*    isPlaying={isPlaying}*/}
            {/*/>*/}
        </div>
    );
}