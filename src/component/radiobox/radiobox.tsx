import React, {ReactElement, useEffect, useState} from "react";
import {Station} from "../../model/station";
import {getStations} from "../../api/station/stationAPI";

export function RadioBox(): ReactElement {
    const [stations, setStations] = useState<Station[]>()

    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const data = await getStations();
    //             setStations(data);
    //         } catch (e) {
    //             console.log("error IDK WHY", e)
    //         }
    //     }
    //     fetchData();
    // }, []);

    useEffect(() => {
        getStations().then(res => setStations(res));
    }, []);

    let renderStations

    if (stations) {
         renderStations = stations.map(x => <li> <p>Name: {x.name} , <audio src={x.stream}> {x.id}</audio></p></li>)
    } else {
         renderStations = <div> "Nothing here" </div>
    }

    return (
        <div className="radio-box">
            <p>Hello</p>
            <ul>
                {renderStations}
            </ul>
        </div>
    )
}
