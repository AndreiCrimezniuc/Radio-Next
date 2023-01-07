import React, {ReactElement, useEffect, useState} from "react";
import {Station} from "../../model/station";
import {getStations} from "../../api/station/stationAPI";
import './radio-container.css'
import 'bootstrap/dist/css/bootstrap.css';

export function RadioContainer(): ReactElement {
    const [stations, setStations] = useState<Station[] | null>(null);

    // useEffect(() => {
    //     getStations().then(rep =>
    //         setStations(rep)
    //     )
    // }, []);


    useEffect(() => {
        setStations(getStations())
    })

    return (
        <div className="container box">
            <div className="row row-cols-4">
                {stations ? stations.map((x) => (
                    <div key={x.ID} className="col radio">
                        <p>Name: {x.Name}, id: {x.ID} </p>
                        <div>
                            <p><audio controls src={x.Stream}> H</audio></p>
                        </div>
                    </div>
                )) : <div>Nothing here</div>}
            </div>
        </div>
    );
}
