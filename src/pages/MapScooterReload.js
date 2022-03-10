import React from 'react';

const MapScooterReload = () => {
    return (
        <div className="view--map">
            <iframe src="https://map.openchargemap.io/?mode=embedded" allow="geolocation" frameBorder="0" width="100%" height="670px"/>
        </div>
    );
};

export default MapScooterReload;