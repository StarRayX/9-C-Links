
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
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

    //variable for Subject display
    var subject = 'NaN';
    
    var displayDay = weekday[time.getDay()];
    //Checks if weekend
    var isWeekend = Boolean(displayDay == "Friday");
    if (displayDay == "Saturday") {
        isWeekend = true
    } else if (hour >= 3) {
        isWeekend = true
    };

    //Applies weekend action
    if (isWeekend) {
        subject = "Bro it's weekend why are you here?"
    };

    //Pre-class Period
    if ((hour == 8 && min <= 00) && (hour >= 7 && min >= 50) && !isWeekend) {
        subject = "Attendance";
        link = "https://us02web.zoom.us/j/4608858066?pwd=d0VGWVZUT0RhNk54YUVVbTBEREM4dz09"
    };

    //Advisers Period
    if ((hour == 8 && min <= 05) && (hour == 8 && min >= 00) && !isWeekend) {
        subject = "Advisers period";
        link = ""
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