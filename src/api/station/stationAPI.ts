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

export function getStations(): Promise<Station[] | null> {
    return axios.get(apiUrl + "ru/stations", {
        headers: {
            Accept: 'application/json'
        },
    })
        .then((res) => {
            return res.data
        }).catch(e => {
        console.log(e)
        return null
    })
}
