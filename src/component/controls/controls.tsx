import {ReactElement, useEffect, useRef, useState} from "react";
import {PlayControlProps} from "./play-controls-types";
import {ReactComponent as Pause} from "../../assets/pause.svg";
import {ReactComponent as Play} from "../../assets/play.svg";

function playPauseAction(playProps: PlayControlProps, localPlayStatus: boolean, audioRef: React.MutableRefObject<HTMLAudioElement>) {
    if (playProps.isPlaying === playProps.station?.ID && localPlayStatus) {
        audioRef.current.play()
    } else {
        audioRef.current.pause()
    }
}

function AudioControls(playProps: PlayControlProps): ReactElement {
    const [localPlayStatus, setLocalPlayStatus] = useState(false)

    function onPlayPauseClick(state: boolean) {
        playProps.changeGlobalPlayStatus(playProps.station?.ID)
        setLocalPlayStatus(state)

        playPauseAction(playProps, localPlayStatus, audioRef)
    }

    useEffect(() => {
        playPauseAction(playProps, localPlayStatus, audioRef);
    })

    const audioRef = useRef(new Audio(playProps.station?.Stream));

    return (
        <div className="audio-controls">
            {localPlayStatus && (playProps.isPlaying === playProps.station?.ID) ? (
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
            <AudioControls station={props.station} changeGlobalPlayStatus={props.changeGlobalPlayStatus}
                           isPlaying={props.isPlaying}/>

            {/*<Backdrop*/}
            {/*    trackIndex={trackIndex}*/}
            {/*    activeColor={color}*/}
            {/*    isPlaying={isPlaying}*/}
            {/*/>*/}
        </div>
    );
}