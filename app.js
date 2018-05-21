$(document).ready(function() { 

    let api = "https://gbfs.citibikenyc.com/gbfs/en/station_status.json";

    $.getJSON(api, function(citibike) {
        //------------HOME - station id: 641

        //Time
        let lastReportedUnixHome = citibike.data.stations[641].last_reported;
        let lastReportedDateHome = new Date(lastReportedUnixHome * 1000);
        let lastReportedHourHome = lastReportedDateHome.getHours();
        let lastReportedHourHomeMilitaryTime = lastReportedDateHome.getHours();
        let lastReportedMinutesHome = lastReportedDateHome.getMinutes();
        let lastReportedSecHome = lastReportedDateHome.getSeconds();

        //Use non military time
        if(lastReportedHourHome > 12) {
            lastReportedHourHome = lastReportedHourHome - 12;
        }

        if(lastReportedMinutesHome < 10) {
            lastReportedMinutesHome = "0" + lastReportedMinutesHome.toString();
        }
        if(lastReportedSecHome < 10) {
            lastReportedSecHome = "0" + lastReportedMinutesHome.toString();
        }


        let bikesHome = citibike.data.stations[641].num_bikes_available;
        let docksHome = citibike.data.stations[641].num_docks_available;

        
        if(lastReportedHourHomeMilitaryTime >= 12 || lastReportedHourHomeMilitaryTime < 24) {
            $("#last-updated-home").html(`Last change: ${lastReportedHourHome}:${lastReportedMinutesHome}:${lastReportedSecHome} PM`);
        } else if(lastReportedHourHomeMilitaryTime < 12 || lastReportedHourHomeMilitaryTime === 24) {
            $("#last-updated-home").html(`Last change: ${lastReportedHourHome}:${lastReportedMinutesHome}:${lastReportedSecHome} AM`);
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
        //----------------BREWERY station id: 598

        let breweryID = citibike.data.stations[598].station_id;
        let lastReportedUnixBrewery = citibike.data.stations[598].last_reported;
        let lastReportedDateBrewery = new Date(lastReportedUnixBrewery * 1000);
        let lastReportedHourBrewery = lastReportedDateBrewery.getHours();
        let lastReportedHourBreweryMilitaryTime = lastReportedDateBrewery.getHours();
        let lastReportedMinutesBrewery = lastReportedDateBrewery.getMinutes();
        let lastReportedSecBrewery = lastReportedDateBrewery.getSeconds();

        //Use non military time
        if(lastReportedHourBrewery > 12) {
            lastReportedHourBrewery = lastReportedHourBrewery - 12;
        }

        if(lastReportedMinutesBrewery < 10) {
            lastReportedMinutesBrewery = "0" + lastReportedMinutesBrewery.toString();
        }
        if(lastReportedSecBrewery < 10) {
            lastReportedSecBrewery = "0" + lastReportedSecBrewery.toString();
        }

        let bikesBrewery = citibike.data.stations[598].num_bikes_available;
        let docksBrewery = citibike.data.stations[598].num_docks_available;

        if(lastReportedHourBreweryMilitaryTime >= 12 || lastReportedHourBreweryMilitaryTime < 24) {
            $("#last-updated-brewery").html(`Last change: ${lastReportedHourBrewery}:${lastReportedMinutesBrewery}:${lastReportedSecBrewery} PM`);
        } else if(lastReportedHourBreweryMilitaryTime < 12 || lastReportedHourBreweryMilitaryTime === 24) {
            $("#last-updated-brewery").html(`Last change: ${lastReportedHourBrewery}:${lastReportedMinutesBrewery}:${lastReportedSecBrewery} AM`);
        }

        //Grab
        $("#last-updated-brewery").html(`Last change: ${lastReportedHourBrewery}:${lastReportedMinutesBrewery}:${lastReportedSecBrewery}`);
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

    })    

});