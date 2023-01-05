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
    return axios.get(apiUrl + `ru/stations`, {
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

// export function getStations(): Promise<Station[]> {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const stations: Station[] = [
//                 {
//                     id: "1",
//                     name: "Station 1",
//                     stream: "http://station1.com/stream",
//                 },
//                 {
//                     id: "2",
//                     name: "Station 2",
//                     stream: "http://station2.com/stream",
//                 }
//             ];
//             resolve(stations);
//         }, 1000);
//     });
// }
