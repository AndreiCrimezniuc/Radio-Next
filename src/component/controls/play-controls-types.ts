import {Station} from "../../model/station";

export interface PlayControlProps  {
    station?: Station
    isPlaying: number
    changeGlobalPlayStatus: CallableFunction
}

export interface PlayStatus {
    isPlaying: boolean
}
