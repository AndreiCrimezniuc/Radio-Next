import React, {useEffect, useState} from "react";
import {ReactElement} from "react";
import {Station} from "../../model/station";
import {getStations} from "../../api/station/stationAPI";

export function RadioBox(): ReactElement {
    const [stations, setStations] = useState<Station[]>([])

    useEffect(() => {
        async function fetchData() {
            const data = await getStations();
            setStations(data);
        }
        fetchData();
    }, []);

    return (
        <div className="radio-box">
            <ul>
                {stations.map(station => (
                    <li key={station.id}>{station.name}</li>
                ))}
            </ul>
        </div>
    )
}

