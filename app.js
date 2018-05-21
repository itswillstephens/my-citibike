$(document).ready(function() { 

    let api = "https://gbfs.citibikenyc.com/gbfs/en/station_status.json";

    $.getJSON(api, function(citibike) {
        //HOME - station id: 641
        let lastReportedUnixHome = citibike.data.stations[641].last_reported;
        let lastReportedDateHome = new Date(lastReportedUnixHome * 1000);
        let lastReportedHourHome = lastReportedDateHome.getHours();
        let lastReportedMinutesHome = lastReportedDateHome.getMinutes();
        let lastReportedSecHome = lastReportedDateHome.getSeconds();
        let bikesHome = citibike.data.stations[641].num_bikes_available;
        let docksHome = citibike.data.stations[641].num_docks_available;

        //Grab
        $("#last-updated-home").html(`Last reported: ${lastReportedHourHome}:${lastReportedMinutesHome}:${lastReportedSecHome}`);
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
    })    

});