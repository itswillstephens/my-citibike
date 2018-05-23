$(document).ready(function() { 

 function getData() {


    let api = "https://gbfs.citibikenyc.com/gbfs/en/station_status.json";

    $.getJSON(api, function(citibike) {
        
        //-----------Current Time

        let date = new Date();
        let humanTimeNow = date.toLocaleTimeString();

        //------------HOME
        
        let lastReportedUnixHome = citibike.data.stations[639].last_reported;
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
            lastReportedSecHome = "0" + lastReportedMinutesHome.toString();
        }

        let bikesHome = citibike.data.stations[639].num_bikes_available;
        let docksHome = citibike.data.stations[639].num_docks_available;

        
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
        //----------------BREWERY 

        let breweryID = citibike.data.stations[597].station_id;
        let lastReportedUnixBrewery = citibike.data.stations[597].last_reported;
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

        let bikesBrewery = citibike.data.stations[597].num_bikes_available;
        let docksBrewery = citibike.data.stations[597].num_docks_available;

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


        $("#last-checked-time").html(`as of ${humanTimeNow}`);


        setTimeout(getData, 15000);
    })    
 }
 getData(); 
});