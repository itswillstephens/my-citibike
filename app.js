$(document).ready(function() { 

 function getData(stationID) {


    let api = "https://gbfs.citibikenyc.com/gbfs/en/station_status.json";

    $.getJSON(api, function(citibike) {
        
        // current Time
        let date = new Date();
        let humanTimeNow = date.toLocaleTimeString();
        
        let lastReportedUnixHome = citibike.data.stations[this.stationID].last_reported;
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

        let bikesHome = citibike.data.stations[this.stationID].num_bikes_available;
        let docksHome = citibike.data.stations[this.stationID].num_docks_available;

        
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

        $("#last-checked-time").html(` last update: ${humanTimeNow}`);
        
        //check for updates every n secs
        setTimeout(getData, 30000);
    })    
 }
 getData(638);
 getData(596);

});


//home: 638, brewery: 596