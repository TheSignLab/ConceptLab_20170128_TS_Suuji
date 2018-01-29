$(document).ready(function () {
    var xLat;
    var yLat;

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
            
        }
    }

    function showPosition(position) {
        xLat = position.coords.latitude;
        yLat = position.coords.longitude;




        var geocodingAPI = "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + xLat + "," + yLat + "&sensor=false";

        console.log(geocodingAPI)

        $.getJSON(geocodingAPI, function (json) {
            if (json.status == "OK") {
                //Check result 0
                var result = json.results[0];
                //look for locality tag and administrative_area_level_1
                var city = "";
                var state = "";
                for (var i = 0, len = result.address_components.length; i < len; i++) {
                    var ac = result.address_components[i];
                    if (ac.types.indexOf("administrative_area_level_1") >= 0) state = ac.short_name;
                }
                if (state != '') {
                    console.log("Hello to you out there in " + city + ", " + state + "!");
                    


                    kmDiff = calcCrow(xLat, yLat, 4.698699, -74.030875);
                    console.log("The Diference es " + kmDiff);

                    kmDiff_p = parseFloat(Math.round(kmDiff * 100) / 100).toFixed(2);


                    $($(".bg-num")[0]).html(kmDiff_p);
                    
                    
                    if(state == "Bogotá"){
                        $("#gps_target").html("  ti");
                    }else{
                         $("#gps_target").html(city + " " + state);
                    }
                    
                    

                }
            }

        });

    }
try{
    getLocation();
}catch(e){
    $("#gpsMessageText").hide();
}
    
    
    console.log("sdfsd")


});


//This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
function calcCrow(lat1, lon1, lat2, lon2) {
    var R = 6371; // km
    var dLat = toRad(lat2 - lat1);
    var dLon = toRad(lon2 - lon1);
    var lat1 = toRad(lat1);
    var lat2 = toRad(lat2);

    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
}

// Converts numeric degrees to radians
function toRad(Value) {
    return Value * Math.PI / 180;
}
