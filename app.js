$(document).ready(function() { 

    function getData() {
   
       let api = "https://gbfs.citibikenyc.com/gbfs/en/station_status.json";

       $.getJSON(api, function(citibike) {
        
            let homeArrayPosition = 0;
            let breweryArrayPosition = 0;

            //grab station ids
            let stationObj = citibike.data.stations;

            for(let i = 0; i < stationObj.length; i++) {
                if(stationObj[i].station_id === "3486") {
                    homeArrayPosition = i;
                    break;
                }
            }

            for(let j = 0; j < stationObj.length; j++) {
                if(stationObj[j].station_id === "3419") {
                    breweryArrayPosition = j;
                    break;
                }
            }

           //------------HOME
           console.log(homeArrayPosition);
           console.log(breweryArrayPosition);

           let bikesHome = citibike.data.stations[homeArrayPosition].num_bikes_available;
           let docksHome = citibike.data.stations[homeArrayPosition].num_docks_available;

            if(citibike.data.stations[homeArrayPosition].station_id !== "3486") {
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
           let bikesBrewery = citibike.data.stations[breweryArrayPosition].num_bikes_available;
           let docksBrewery = citibike.data.stations[breweryArrayPosition].num_docks_available;
           
            if(citibike.data.stations[breweryArrayPosition].station_id !== "3419") {
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