$(document).ready(function() { 

    function getData() {
        let homeArrayPosition;
        const homeID = homeArrayPosition;
        const breweryID = 596;
   
       let api = "https://gbfs.citibikenyc.com/gbfs/en/station_status.json";

       $.getJSON(api, function(citibike) {
   
           //grab station ids
           let stationObj = citibike.data.stations;
           for(let i = 0; i < stationObj.length; i++) {
                if(stationObj[i] === 3486) {
                    homeArrayPosition = i;
                    break;
                }
                console.log(homeArrayPosition);
            }
        
        
           //------------HOME
           let bikesHome = citibike.data.stations[homeID].num_bikes_available;
           let docksHome = citibike.data.stations[homeID].num_docks_available;
           
            console.log(citibike.data.stations[homeID]);
            console.log(citibike.data.stations[breweryID]);


            if(citibike.data.stations[homeID].station_id !== "3486") {
                $("#bikes-home").html("error");
            } else {
                $("#bikes-home").html(bikesHome + " bikes");
                $("#docks-home").html(docksHome + " docks");
            }
           
           //Warning colors
           if(bikesHome < 4) {
               $("#bikes-home").css("color", "red");
           } else if(bikesHome < 7) {
               $("#bikes-home").css("color", "orange");
           }
           if(docksHome < 4) {
               $("#docks-home").css("color", "red");
           } else if(docksHome < 7) {
               $("#docks-home").css("color", "orange");
           } 

           //--------------BREWERY 
           let bikesBrewery = citibike.data.stations[breweryID].num_bikes_available;
           let docksBrewery = citibike.data.stations[breweryID].num_docks_available;
           
            if(citibike.data.stations[breweryID].station_id !== "3419") {
                $("#bikes-brewery").html("error");
            } else {
                $("#bikes-brewery").html(bikesBrewery + " bikes");
                $("#docks-brewery").html(docksBrewery + " docks");
            }

           //Warning colors
           if(bikesBrewery < 4) {
               $("#bikes-brewery").css("color", "red");
           } else if(bikesBrewery < 7) {
               $("#bikes-brewery").css("color", "orange");
           }
           if(docksBrewery < 4) {
               $("#docks-brewery").css("color", "red");
           } else if(docksBrewery < 7) {
               $("#docks-brewery").css("color", "orange");
           } 
       })    

        // get last-updated time
        let date = new Date();
        let humanTimeNow = date.toLocaleTimeString();
        $("#last-checked-time").html(` last update: ${humanTimeNow}`);

        //refresh every n seconds
        setTimeout(getData, 30000);
    }

    getData(); 
});