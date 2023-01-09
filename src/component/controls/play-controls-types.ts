import {Station} from "../../model/station";

export interface PlayControlProps  {
    station?: Station
    isPlaying: boolean
    changeGlobalPlayStatus: CallableFunction
}

export interface PlayStatus {
    isPlaying: boolean
}
