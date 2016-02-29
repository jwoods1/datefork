$(document).ready(function() {
    $.ajax({
        url: "/events/getEvent"
    }).then(function(data) {
       $('.event-activity').append(data.activityName);
       $('.event-location').append(data.locationName);
    });
});