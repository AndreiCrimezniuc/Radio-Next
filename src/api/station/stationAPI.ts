import axios from "axios";
import {apiUrl} from "../../env";
import {Station} from "../../model/station";

export async function getStationById(id: string): Promise<Station> {
    const response = await axios.get(apiUrl + `ru/stations/${id}`, {
        headers: {
            Accept: 'application/json'
        },
    });

    return response.data;
}

export async function getStations(): Promise<Station[]> {
    const response = await axios.get(apiUrl + `ru/stations`, {
        headers: {
            Accept: 'application/json'
        },
    });

    return response.data;
}
