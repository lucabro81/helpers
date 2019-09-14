/**
 * Apre l'app delle mappe o Google Maps con la destinazione impostatata
 *
 * @param lat
 * @param lng
 * @param hasCordova
 * @param hasIos
 * @param hasAndroid
 */
export let openMap = (lat, lng, hasCordova = false, hasIos = false, hasAndroid = false) => {
    if (hasCordova) {
        if (hasIos) {
            window.open("maps://?daddr=" + lat + "," + lng, "_system");
        }
        else if (hasAndroid) {
            window.open("geo:" + lat + "," + lng, "_system");
        }
        else {
            window.open("http://maps.google.com/?daddr=" + lat + "," + lng, "_blank");
        }
    }
    else {
        window.open("http://maps.google.com/?daddr=" + lat + "," + lng, "_blank");
    }
};
