import mapboxgl from "mapbox-gl";


function markerBuilder (type,coordinatesArray){
    const markerDomEl = document.createElement("div");
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    if (type === 'hotel'){
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
    }
    else if (type === 'restaurant'){
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
    }
    else if (type === 'activity') {
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
    }
    return new mapboxgl.Marker(markerDomEl).setLngLat(coordinatesArray)
    //.addTo(map);
}

export default markerBuilder;







// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map); // [-87.641, 41.895] for Chicago