import React, {ReactElement, useEffect, useState} from "react";
import {Station} from "../../model/station";
import {getStations} from "../../api/station/stationAPI";

export function RadioBox(): ReactElement {
    const [stations, setStations] = useState<Station[] | null>(null);

    useEffect(() => {
        getStations().then(rep =>
            setStations(rep)
        )
    }, []);

    return (
        <div className="radio-box">
            <p>Hello</p>
            <ul>
                {stations ? stations.map((x) => (
                    <li key={x.ID}>
                        <p>Name: {x.Name}, id: {x.ID}</p>
                    </li>
                )) : <div>Nothing here</div>}
            </ul>
        </div>
    );
}
