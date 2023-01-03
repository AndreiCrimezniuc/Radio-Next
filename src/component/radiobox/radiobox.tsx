import React from "react";
import {ReactElement} from "react";
import {getStationById, getStations} from "../../repository/station/stationRepository";
import {Station} from "../../model/station";
import {stat} from "fs";


export function RadioBox(): ReactElement {
    let stations: Station[] | undefined

    getStations().then(responseStations => {
        stations = responseStations;
    }).catch(e => {
        console.log('No such station', e);
    });

    let renderStations:JSX.Element[] = []

    if (typeof stations !== 'undefined' && stations.length > 0) {
         renderStations = stations.map(x =>(
            <div id={x.id}>
                Name: {x.name}, <br/>
                <audio controls>
                    <source src={x.stream} />
                </audio>
            </div>))
    } else {
         renderStations = [<div> <p> No stations, sry</p></div>]
    }

    return (
        <div className="radio-box">
            {renderStations}
        </div>
    )
}

