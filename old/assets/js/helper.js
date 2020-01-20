var calculatePixelPosition = function(lat, lon) {
	var imageNorthLat = 49.012654;  // Latitude of the image's northern edge
	var imageSouthLat = 25.05;  // Latitude of the image's southern edge
	var imageWestLong = -124.7297457; // Longitude of the image's western edge
	var imageEastLong = -66.831690;   // Longitude of the image's eastern edge
	var pixelsPerLat = 230 / (imageNorthLat - imageSouthLat);
    var pixelsPerLong = 430 / (imageEastLong - imageWestLong);
    
	var x = (lon-imageWestLong) * pixelsPerLong;
	var y = Math.abs(lat-imageNorthLat) * pixelsPerLat;

    const element = document.querySelector('img.site');    
    element.style.top = (y - 10) + "px";
    element.style.left = (x - 40)+ "px";
}(28.60822681, -80.60428186);

function convertToAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();

    var ampm = hours >= 12 ? 'P.M.' : 'A.M.';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return {hour: hours, minute: minutes, ampm: ampm};
  }