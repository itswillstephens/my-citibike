$(document).ready(function() { 

 function getData(stationID) {


    let api = "https://gbfs.citibikenyc.com/gbfs/en/station_status.json";

    $.getJSON(api, function(citibike) {
        
        // current Time
        let date = new Date();
        let humanTimeNow = date.toLocaleTimeString();
<<<<<<< HEAD
        
        let lastReportedUnixHome = citibike.data.stations[this.stationID].last_reported;
=======

        //------------HOME
        console.log(citibike.data.stations[597].station_id)
        
        let lastReportedUnixHome = citibike.data.stations[638].last_reported;
>>>>>>> 367dfa5862e385b51ab0547a3d4d8d6e197b988c
        let lastReportedDateHome = new Date(lastReportedUnixHome * 1000);
        let lastReportedHourHome = lastReportedDateHome.getHours();
        let lastReportedHourHomeMilitaryTime = lastReportedDateHome.getHours();
        let lastReportedMinutesHome = lastReportedDateHome.getMinutes();
        let lastReportedSecHome = lastReportedDateHome.getSeconds();

        if(lastReportedHourHome > 12) {
            lastReportedHourHome = lastReportedHourHome - 12;
        }

        if(lastReportedMinutesHome < 10) {
            lastReportedMinutesHome = "0" + lastReportedMinutesHome.toString();
        }
        if(lastReportedSecHome < 10) {
            lastReportedSecHome = "0" + lastReportedSecHome.toString();
        }

<<<<<<< HEAD
        let bikesHome = citibike.data.stations[this.stationID].num_bikes_available;
        let docksHome = citibike.data.stations[this.stationID].num_docks_available;
=======
        let bikesHome = citibike.data.stations[638].num_bikes_available;
        let docksHome = citibike.data.stations[638].num_docks_available;
>>>>>>> 367dfa5862e385b51ab0547a3d4d8d6e197b988c

        
        if(lastReportedHourHomeMilitaryTime >= 12 && lastReportedHourHomeMilitaryTime < 24) {
            $("#last-updated-home").html(`Last bike change: ${lastReportedHourHome}:${lastReportedMinutesHome}:${lastReportedSecHome} PM`);
        } else if(lastReportedHourHomeMilitaryTime < 12 || lastReportedHourHomeMilitaryTime === 24) {
            $("#last-updated-home").html(`Last bike change: ${lastReportedHourHome}:${lastReportedMinutesHome}:${lastReportedSecHome} AM`);
        }
    
        $("#bikes-home").html(bikesHome + " bikes");
        $("#docks-home").html(docksHome + " docks");
        
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
<<<<<<< HEAD
=======
        //----------------BREWERY 

        let breweryID = citibike.data.stations[596].station_id;
        let lastReportedUnixBrewery = citibike.data.stations[596].last_reported;
        let lastReportedDateBrewery = new Date(lastReportedUnixBrewery * 1000);
        let lastReportedHourBrewery = lastReportedDateBrewery.getHours();
        let lastReportedHourBreweryMilitaryTime = lastReportedDateBrewery.getHours();
        let lastReportedMinutesBrewery = lastReportedDateBrewery.getMinutes();
        let lastReportedSecBrewery = lastReportedDateBrewery.getSeconds();

        if(lastReportedHourBrewery > 12) {
            lastReportedHourBrewery = lastReportedHourBrewery - 12;
        }

        if(lastReportedMinutesBrewery < 10) {
            lastReportedMinutesBrewery = "0" + lastReportedMinutesBrewery.toString();
        }
        if(lastReportedSecBrewery < 10) {
            lastReportedSecBrewery = "0" + lastReportedSecBrewery.toString();
        }

        let bikesBrewery = citibike.data.stations[596].num_bikes_available;
        let docksBrewery = citibike.data.stations[596].num_docks_available;

        if(lastReportedHourBreweryMilitaryTime >= 12 && lastReportedHourBreweryMilitaryTime < 24) {
            $("#last-updated-brewery").html(`Last bike change: ${lastReportedHourBrewery}:${lastReportedMinutesBrewery}:${lastReportedSecBrewery} PM`);
        } else if(lastReportedHourBreweryMilitaryTime < 12 || lastReportedHourBreweryMilitaryTime === 24) {
            $("#last-updated-brewery").html(`Last bike change: ${lastReportedHourBrewery}:${lastReportedMinutesBrewery}:${lastReportedSecBrewery} AM`);
        }
        
        $("#bikes-brewery").html(bikesBrewery + " bikes");
        $("#docks-brewery").html(docksBrewery + " docks");
        
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

>>>>>>> 367dfa5862e385b51ab0547a3d4d8d6e197b988c

        $("#last-checked-time").html(` last update: ${humanTimeNow}`);
        
        //check for updates every n secs
        setTimeout(getData, 30000);
    })    
 }
 getData(638);
 getData(596);

});


//home: 638, brewery: 596