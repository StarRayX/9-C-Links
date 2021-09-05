
setInterval(showTime, 1000);
var link = "";
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    am_pm = "AM";
  
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 12 && min >= 01) {
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
  
    let currentTime = hour + ":" 
            + min + " "+ am_pm;
    
    var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Friday";
        weekday[5] = "Thursday";
        weekday[6] = "Saturday";

    //variable for Subject display
    var subject = 'NaN';
    
    var displayDay = weekday[time.getDay()];
    //Checks if weekend
    var isWeekend = Boolean(displayDay == "Friday");
    if (displayDay == "Saturday") {
        isWeekend = true
    } else if (displayDay == "Thursday" && hour >= 3) {
        isWeekend = true
    };

    //Applies weekend action
    if (isWeekend) {
        subject = "Bro it's weekend why are you here?"
    };

    //Pre-Class Period
    if ((hour == 7 && min < 50) && (hour >= 0 && min >= 01) && !isWeekend) {
        subject = "Class Starts at 7:50";
        link = "https://us02web.zoom.us/j/4608858066?pwd=d0VGWVZUT0RhNk54YUVVbTBEREM4dz09"
    };

    //Attendance Period
    if ((hour <= 8) && (hour >= 7 && (min >= 50 || min == 00)) && !isWeekend) {
        subject = "Attendance";
        link = "https://us02web.zoom.us/j/4608858066?pwd=d0VGWVZUT0RhNk54YUVVbTBEREM4dz09"
        console.log("wow")
    };

    //Advisers Period
    if ((hour == 8 && min <= 05) && (hour == 8 && min >= 00) && !isWeekend) {
        subject = "Advisers period";
        link = "https://us02web.zoom.us/j/4608858066?pwd=d0VGWVZUT0RhNk54YUVVbTBEREM4dz09"
    };

    //First Period
    if ((hour == 8 && min <= 45) && (hour == 8 && min >= 05) && !isWeekend && (displayDay == "Sunday") && am_pm == "AM") {
        subject = "Filipino";
        link = "";
    } else if ((hour == 8 && min <= 45) && (hour == 8 && min >= 05) && !isWeekend && (displayDay == "Monday") && am_pm == "AM") {
        subject = "ICT";
        link = "";
    } else if ((hour == 8 && min <= 45) && (hour == 8 && min >= 05) && !isWeekend && (displayDay == "Tuesday") && am_pm == "AM") {
        subject = "MEC";
        link = "";
    } else if ((hour == 8 && min <= 45) && (hour == 8 && min >= 05) && !isWeekend && (displayDay == "Wednesday") && am_pm == "AM") {
        subject = "Filipino";
        link = "";
    } else if ((hour == 8 && min <= 45) && (hour == 8 && min >= 05) && !isWeekend && (displayDay == "Thursday") && am_pm == "AM") {
        subject = "Science"
    };

    //Second Period
    if ((hour == 9 && min <= 30) && (hour >= 8 && min >= 50) && !isWeekend && (displayDay == "Sunday") && am_pm == "AM") {
        subject = "Filipino - FLD";
        link = "";
    } else if ((hour == 9 && min <= 30) && (hour >= 8 && min >= 50) && !isWeekend && (displayDay == "Monday") && am_pm == "AM") {
        subject = "ICT - FLD";
        link = "";
    } else if ((hour == 9 && min <= 30) && (hour >= 8 && min >= 50) && !isWeekend && (displayDay == "Tuesday") && am_pm == "AM") {
        subject = "MEC - FLD";
        link = "";
    } else if ((hour == 9 && min <= 30) && (hour >= 8 && min >= 50) && !isWeekend && (displayDay == "Wednesday") && am_pm == "AM") {
        subject = "Filipino - FLD";
        link = "";
    } else if ((hour == 9 && min <= 30) && (hour >= 8 && min >= 50) && !isWeekend && (displayDay == "Thursday") && am_pm == "AM") {
        subject = "Science - FLD";
        link = "";
    };

    //Break
    if ((hour == 9 && min <= 50) && (hour == 9 && min >= 30) && !isWeekend && (displayDay == "Sunday") && am_pm == "AM") {
        subject = "Morning Break";
        link = "";
    } else if ((hour == 9 && min <= 50) && (hour == 9 && min >= 30) && !isWeekend && (displayDay == "Monday") && am_pm == "AM") {
        subject = "Morning Break";
        link = "";
    } else if ((hour == 9 && min <= 50) && (hour == 9 && min >= 30) && !isWeekend && (displayDay == "Tuesday") && am_pm == "AM") {
        subject = "Morning Break";
        link = "";
    } else if ((hour == 9 && min <= 50) && (hour == 9 && min >= 30) && !isWeekend && (displayDay == "Wednesday") && am_pm == "AM") {
        subject = "Morning Break"
    } else if ((hour == 9 && min <= 50) && (hour == 9 && min >= 30) && !isWeekend && (displayDay == "Thursday") && am_pm == "AM") {
        subject = "Morning Break";
        link = "";
    };

    //Third Period
    if ((hour == 10 && min <= 30) && (hour >= 9 && min >= 50) && !isWeekend && (displayDay == "Sunday") && am_pm == "AM") {
        subject = "English";
        link = "";
    } else if ((hour == 10 && min <= 30) && (hour >= 9 && min >= 50) && !isWeekend && (displayDay == "Monday") && am_pm == "AM") {
        subject = "PE";
        link = "";
    } else if ((hour == 10 && min <= 30) && (hour >= 9 && min >= 50) && !isWeekend && (displayDay == "Tuesday") && am_pm == "AM") {
        subject = "English - REC";
        link = "";
    } else if ((hour == 10 && min <= 30) && (hour >= 9 && min >= 50) && !isWeekend && (displayDay == "Wednesday") && am_pm == "AM") {
        subject = "Arabic";
        link = "";
    } else if ((hour == 10 && min <= 30) && (hour >= 9 && min >= 50) && !isWeekend && (displayDay == "Thursday") && am_pm == "AM") {
        subject = "Arabic";
        link = "";
    };

    //Fourth Period
    if ((hour == 11 && min <= 15) && (hour >= 10 && min >= 35) && !isWeekend && (displayDay == "Sunday") && am_pm == "AM") {
        subject = "English FLD";
        link = "";
    } else if ((hour == 11 && min <= 15) && (hour >= 10 && min >= 35) && !isWeekend && (displayDay == "Monday") && am_pm == "AM") {
        subject = "PE - FLD";
        link = "";
    } else if ((hour == 11 && min <= 15) && (hour >= 10 && min >= 35) && !isWeekend && (displayDay == "Tuesday") && am_pm == "AM") {
        subject = "Filipino - REC";
        link = "";
    } else if ((hour == 11 && min <= 15) && (hour >= 10 && min >= 35) && !isWeekend && (displayDay == "Wednesday") && am_pm == "AM") {
        subject = "Arabic - FLD";
        link = "";
    } else if ((hour == 11 && min <= 15) && (hour >= 10 && min >= 35) && !isWeekend && (displayDay == "Thursday") && am_pm == "AM") {
        subject = "Arabic - FLD";
        link = "";
    }

    //5th Period
    if ((hour <= 12) && (hour >= 11 && min >= 20) && !isWeekend && (displayDay == "Sunday") && am_pm == "AM") {
        subject = "Math";
        link = "";
    } else if ((hour <= 12) && (hour >= 11 && min >= 20) && !isWeekend && (displayDay == "Monday") && am_pm == "AM") {
        subject = "Math";
        link = "";
    } else if ((hour <= 12) && (hour >= 11 && min >= 20) && !isWeekend && (displayDay == "Tuesday") && am_pm == "AM") {
        subject = "TLE";
        link = "";
    } else if ((hour <= 12) && (hour >= 11 && min >= 20) && !isWeekend && (displayDay == "Wednesday") && am_pm == "AM") {
        subject = "English";
        link = "";
    } else if ((hour <= 12) && (hour >= 11 && min >= 20) && !isWeekend && (displayDay == "Thursday") && am_pm == "AM") {
        subject = "Math";
        link = "";
    }

    //lunch Break
    if ((hour == 12 && min <= 40) && (hour >= 12 && min >= 00) && !isWeekend && (displayDay == "Sunday") && am_pm == "AM") {
        subject = "Lunch Break";
        link = "";
    } else if ((hour == 12 && min <= 40) && (hour >= 12 && min >= 00) && !isWeekend && (displayDay == "Monday") && am_pm == "AM") {
        subject = "Lunch Break";
        link = "";
    } else if ((hour == 12 && min <= 40) && (hour >= 12 && min >= 00) && !isWeekend && (displayDay == "Tuesday") && am_pm == "AM") {
        subject = "Lunch Break";
        link = "";
    } else if ((hour == 12 && min <= 40) && (hour >= 12 && min >= 00) && !isWeekend && (displayDay == "Wednesday") && am_pm == "AM") {
        subject = "Lunch Break";
        link = "";
    } else if ((hour == 12 && min <= 40) && (hour >= 12 && min >= 00) && !isWeekend && (displayDay == "Thursday") && am_pm == "AM") {
        subject = "Lunch Break";
        link = "";
    }

    //6th Period
    if ((hour <= 13 && min <= 20) && (hour >= 12 && min >= 40) && !isWeekend && (displayDay == "Sunday")) {
        subject = "Math - FLD";
        link = "";
    } else if ((hour <= 13 && min <= 20) && (hour >= 12 && min >= 40) && !isWeekend && (displayDay == "Monday")) {
        subject = "Science - FLD";
        link = "";
    } else if ((hour <= 13 && min <= 20) && (hour >= 12 && min >= 40) && !isWeekend && (displayDay == "Tuesday")) {
        subject = "TLE - FLD";
        link = "";
    } else if ((hour <= 13 && min <= 20) && (hour >= 12 && min >= 40) && !isWeekend && (displayDay == "Wednesday")) {
        subject = "English - FLD";
        link = "";
    } else if ((hour <= 13 && min <= 20) && (hour >= 12 && min >= 40) && !isWeekend && (displayDay == "Thursday")) {
        subject = "Math - FLD";
        link = "";
    }

    //7th Period
    if ((hour <= 2) && (hour >= 1 && min >= 25) && !isWeekend && (displayDay == "Sunday") && am_pm == "PM") {
        subject = "AP";
        link = "";
    } else if ((hour <= 2) && (hour >= 1 && min >= 25) && !isWeekend && (displayDay == "Monday") && am_pm == "PM") {
        subject = "AP";
        link = "";
    } else if ((hour <= 2) && (hour >= 1 && min >= 25) && !isWeekend && (displayDay == "Tuesday") && am_pm == "PM") {
        subject = "Math - REC";
        link = "";
    } else if ((hour <= 2) && (hour >= 1 && min >= 25) && !isWeekend && (displayDay == "Wednesday") && am_pm == "PM") {
        subject = "Music";
        link = "";
    } else if ((hour <= 2) && (hour >= 1 && min >= 25) && !isWeekend && (displayDay == "Thursay") && am_pm == "PM") {
        subject = "UAE SS";
        link = "";
    }
    
    //8th Period
    if ((hour <= 2 && min <= 50) && (hour >= 2 && min >= 10) && !isWeekend && (displayDay == "Sunday") && am_pm == "PM") {
        subject = "AP";
        link = "";
    } else if ((hour <= 2 && min <= 50) && (hour >= 2 && min >= 10) && !isWeekend && (displayDay == "Monday") && am_pm == "PM") {
        subject = "AP - REC";
        link = "";
    } else if ((hour <= 2 && min <= 50) && (hour >= 2 && min >= 10) && !isWeekend && (displayDay == "Tuesday") && am_pm == "PM") {
        subject = "Science - REC";
        link = "";
    } else if ((hour <= 2 && min <= 50) && (hour >= 2 && min >= 10) && !isWeekend && (displayDay == "Wednesday") && am_pm == "PM") {
        subject = "Arts";
        link = "";
    } else if ((hour <= 2 && min <= 50) && (hour >= 2 && min >= 10) && !isWeekend && (displayDay == "Thursay") && am_pm == "PM") {
        subject = "UAE SS - FLD";
        link = "";
    }

    document.getElementById("clock")
            .innerHTML = subject + '<br>' + '<h5 class="time">' + currentTime + '</h5>';
    
}
var lightModeStatus = false;
var roll = document.getElementById("lightMode")
function lightMode() {

    if (lightModeStatus == false) {
        lightModeStatus = true;
        roll.style.display = "block"
    } else {
        lightModeStatus = false;
        roll.style.display = "none"
    }
  console.log(lightModeStatus)
};

document.getElementById("colorButton").addEventListener("click", lightMode);

function updateLink() {

    if (!link) {
        alert("Zoom link is not yet available");
    };
    document.getElementById("getLink").setAttribute("href", link);
}

document.getElementById("getLink").addEventListener("click", updateLink);

showTime();