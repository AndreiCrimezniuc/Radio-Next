import {Station} from "../../model/station";

export type PlayControlProps = {
    station: Station
    globalPlayStatus: boolean
}

export type PlayStatus = {
    isPlaying: boolean,
}