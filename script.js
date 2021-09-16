
setInterval(showTime, 1000);
var link = "";
$(function() {
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

    var quote = $('.quote-text');
    getQuote(quote);
    if (hour >= 0 && min >= 01 && am_pm == "AM") {
        event.preventDefault();
        getQuote(quote);
    };
});

function getQuote(quote) {
    var url = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?';
    $.getJSON(url, function(data) {
        quote.html("\""+ data.quoteText+"\"");
    });
}
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
    
    console.log(min);

    var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

    //variable for Subject display
    var subject = 'NaN';
    
    var displayDay = weekday[time.getDay()];
    //Checks if weekend
    var isWeekend = Boolean(displayDay == "Friday");
    if (displayDay == "Saturday") {
        isWeekend = true
    } else if (displayDay == "Thursday" && hour == 3 && min >= 01 && am_pm == "PM") {
        isWeekend = true
    };

    //Applies weekend action
    if (isWeekend) {
        subject = "Bro it's weekend why are you here?"
    };

    //Pre-Class Period
    if ((hour == 7 && min < 50) && (hour >= 0 && min >= 01) && !isWeekend && am_pm == "AM") {
        subject = "Class Starts at 7:50";
        link = "https://us02web.zoom.us/j/4608858066?pwd=d0VGWVZUT0RhNk54YUVVbTBEREM4dz09"
    };

    //Attendance Period
    if ((hour <= 8) && (hour >= 7 && (min >= 50 || min == 00)) && !isWeekend && am_pm == "AM") {
        subject = "Attendance";
        link = "https://us02web.zoom.us/j/4608858066?pwd=d0VGWVZUT0RhNk54YUVVbTBEREM4dz09"
    };

    //Advisers Period
    if ((hour == 8 && min <= 05) && (hour == 8 && min >= 00) && !isWeekend && am_pm == "AM") {
        subject = "Advisers period";
        link = "https://us02web.zoom.us/j/4608858066?pwd=d0VGWVZUT0RhNk54YUVVbTBEREM4dz09"
    };

    //First Period
    if ((hour == 8 && min <= 45) && (hour == 8 && min >= 05) && !isWeekend && (displayDay == "Sunday") && am_pm == "AM") {
        subject = "Filipino";
        link = "https://us02web.zoom.us/j/5028306988?pwd=QllVOGF3bmpPczBneFBBL1pXelJWZz09";
    } else if ((hour == 8 && min <= 45) && (hour == 8 && min >= 05) && !isWeekend && (displayDay == "Monday") && am_pm == "AM") {
        subject = "ICT";
        link = "https://us04web.zoom.us/j/5974021172?pwd=dmh0cDRkaGUxYUphWUh0UGFrYjF1QT09";
    } else if ((hour == 8 && min <= 45) && (hour == 8 && min >= 05) && !isWeekend && (displayDay == "Tuesday") && am_pm == "AM") {
        subject = "MEC";
        link = "https://zoom.us/j/9443013776?pwd=K1pUc21aaEtmeFNEYkg0T0JxL0hmQT09";
    } else if ((hour == 8 && min <= 45) && (hour == 8 && min >= 05) && !isWeekend && (displayDay == "Wednesday") && am_pm == "AM") {
        subject = "Filipino";
        link = "https://us02web.zoom.us/j/5028306988?pwd=QllVOGF3bmpPczBneFBBL1pXelJWZz09";
    } else if ((hour == 8 && min <= 45) && (hour == 8 && min >= 05) && !isWeekend && (displayDay == "Thursday") && am_pm == "AM") {
        subject = "Science"
        link = "https://bit.ly/TPS-Science_MsDonna";
    };

    //Second Period
    if ((hour >= 8 && min >= 45) && !isWeekend && (displayDay == "Sunday") && am_pm == "AM") {
        subject = "Filipino - FLD";
        link = "https://us02web.zoom.us/j/5028306988?pwd=QllVOGF3bmpPczBneFBBL1pXelJWZz09";
    } else if ((hour >= 8 && min >= 45) && !isWeekend && (displayDay == "Monday") && am_pm == "AM") {
        subject = "ICT - FLD";
        link = "https://us04web.zoom.us/j/5974021172?pwd=dmh0cDRkaGUxYUphWUh0UGFrYjF1QT09";
    } else if ((hour >= 8 && min >= 45) && !isWeekend && (displayDay == "Tuesday") && am_pm == "AM") {
        subject = "MEC - FLD";
        link = "https://zoom.us/j/9443013776?pwd=K1pUc21aaEtmeFNEYkg0T0JxL0hmQT09";
    } else if ((hour >= 8 && min >= 45) && !isWeekend && (displayDay == "Wednesday") && am_pm == "AM") {
        subject = "Filipino - FLD";
        link = "https://us02web.zoom.us/j/5028306988?pwd=QllVOGF3bmpPczBneFBBL1pXelJWZz09";
    } else if ((hour >= 8 && min >= 45) && !isWeekend && (displayDay == "Thursday") && am_pm == "AM") {
        subject = "Science - FLD";
        link = "https://bit.ly/TPS-Science_MsDonna";
    };
    if ((hour == 9 && min <= 30) && !isWeekend && (displayDay == "Sunday") && am_pm == "AM") {
        subject = "Filipino - FLD";
        link = "https://us02web.zoom.us/j/5028306988?pwd=QllVOGF3bmpPczBneFBBL1pXelJWZz09";
    } else if ((hour == 9 && min <= 30) && !isWeekend && (displayDay == "Monday") && am_pm == "AM") {
        subject = "ICT - FLD";
        link = "https://us04web.zoom.us/j/5974021172?pwd=dmh0cDRkaGUxYUphWUh0UGFrYjF1QT09";
    } else if ((hour == 9 && min <= 30) && !isWeekend && (displayDay == "Tuesday") && am_pm == "AM") {
        subject = "MEC - FLD";
        link = "https://zoom.us/j/9443013776?pwd=K1pUc21aaEtmeFNEYkg0T0JxL0hmQT09";
    } else if ((hour == 9 && min <= 30) && !isWeekend && (displayDay == "Wednesday") && am_pm == "AM") {
        subject = "Filipino - FLD";
        link = "https://us02web.zoom.us/j/5028306988?pwd=QllVOGF3bmpPczBneFBBL1pXelJWZz09";
    } else if ((hour == 9 && min <= 30) && !isWeekend && (displayDay == "Thursday") && am_pm == "AM") {
        subject = "Science - FLD";
        link = "https://bit.ly/TPS-Science_MsDonna";
    };
    //Break
    if ((hour == 9 && min >= 30) && !isWeekend && (displayDay == "Sunday") && am_pm == "AM") {
        subject = "Morning Break";
        link = "";
    } else if ((hour == 9 && min >= 30) && !isWeekend && (displayDay == "Monday") && am_pm == "AM") {
        subject = "Morning Break";
        link = "";
    } else if ((hour == 9 && min >= 30) && !isWeekend && (displayDay == "Tuesday") && am_pm == "AM") {
        subject = "Morning Break";
        link = "";
    } else if ((hour == 9 && min >= 30) && !isWeekend && (displayDay == "Wednesday") && am_pm == "AM") {
        subject = "Morning Break"
    } else if ((hour == 9 && min >= 30) && !isWeekend && (displayDay == "Thursday") && am_pm == "AM") {
        subject = "Morning Break";
        link = "";
    };

    //Third Period
    if ((hour >= 9 && min >= 50) && !isWeekend && (displayDay == "Sunday") && am_pm == "AM") {
        subject = "English";
        link = "https://us04web.zoom.us/j/5499489330?pwd=VU4wRE9NUVRLdHUwUVNCRWxBZUJ2dz09";
    } else if ((hour >= 9 && min >= 50) && !isWeekend && (displayDay == "Monday") && am_pm == "AM") {
        subject = "PE";
        link = "https://us02web.zoom.us/j/89877661443?pwd=T0VlNGNtYlFyUTNsN2l0aGdvUWlFUT09";
    } else if ((hour >= 9 && min >= 50) && !isWeekend && (displayDay == "Tuesday") && am_pm == "AM") {
        subject = "English - REC";
        link = "https://us04web.zoom.us/j/5499489330?pwd=VU4wRE9NUVRLdHUwUVNCRWxBZUJ2dz09";
    } else if ((hour >= 9 && min >= 50) && !isWeekend && (displayDay == "Wednesday") && am_pm == "AM") {
        subject = "Arabic";
        link = "https://us02web.zoom.us/j/9851884971?pwd=WWEvTDNUcFZ6ZUNzcVAwak50Wk9uQT09";
    } else if ((hour >= 9 && min >= 50) && !isWeekend && (displayDay == "Thursday") && am_pm == "AM") {
        subject = "Arabic";
        link = "https://us02web.zoom.us/j/9851884971?pwd=WWEvTDNUcFZ6ZUNzcVAwak50Wk9uQT09";
    };
    if ((hour == 10 && min <= 30) && !isWeekend && (displayDay == "Sunday") && am_pm == "AM") {
        subject = "English";
        link = "https://us04web.zoom.us/j/5499489330?pwd=VU4wRE9NUVRLdHUwUVNCRWxBZUJ2dz09";
    } else if ((hour == 10 && min <= 30) && !isWeekend && (displayDay == "Monday") && am_pm == "AM") {
        subject = "PE";
        link = "";
    } else if ((hour == 10 && min <= 30) && !isWeekend && (displayDay == "Tuesday") && am_pm == "AM") {
        subject = "English - REC";
        link = "https://us04web.zoom.us/j/5499489330?pwd=VU4wRE9NUVRLdHUwUVNCRWxBZUJ2dz09";
    } else if ((hour == 10 && min <= 30) && !isWeekend && (displayDay == "Wednesday") && am_pm == "AM") {
        subject = "Arabic";
        link = "https://us02web.zoom.us/j/9851884971?pwd=WWEvTDNUcFZ6ZUNzcVAwak50Wk9uQT09";
    } else if ((hour == 10 && min <= 30) && !isWeekend && (displayDay == "Thursday") && am_pm == "AM") {
        subject = "Arabic";
        link = "https://us02web.zoom.us/j/9851884971?pwd=WWEvTDNUcFZ6ZUNzcVAwak50Wk9uQT09";
    };

    //Fourth Period
    if ((hour == 10 && min >= 30) && !isWeekend && (displayDay == "Sunday") && am_pm == "AM") {
        subject = "English FLD";
        link = "https://us04web.zoom.us/j/5499489330?pwd=VU4wRE9NUVRLdHUwUVNCRWxBZUJ2dz09";
    } else if ((hour >= 10 && min >= 30) && !isWeekend && (displayDay == "Monday") && am_pm == "AM") {
        subject = "PE - FLD";
        link = "";
    } else if ((hour >= 10 && min >= 30) && !isWeekend && (displayDay == "Tuesday") && am_pm == "AM") {
        subject = "Filipino - REC";
        link = "https://us02web.zoom.us/j/5028306988?pwd=QllVOGF3bmpPczBneFBBL1pXelJWZz09";
    } else if ((hour >= 10 && min >= 30) && !isWeekend && (displayDay == "Wednesday") && am_pm == "AM") {
        subject = "Arabic - FLD";
        link = "https://us02web.zoom.us/j/9851884971?pwd=WWEvTDNUcFZ6ZUNzcVAwak50Wk9uQT09";
    } else if ((hour >= 10 && min >= 30) && !isWeekend && (displayDay == "Thursday") && am_pm == "AM") {
        subject = "Arabic - FLD";
        link = "https://us02web.zoom.us/j/9851884971?pwd=WWEvTDNUcFZ6ZUNzcVAwak50Wk9uQT09";
    };
    if (hour == 11 && min <= 15 && !isWeekend && (displayDay == "Sunday") && am_pm == "AM") {
        subject = "English FLD";
        link = "https://us04web.zoom.us/j/5499489330?pwd=VU4wRE9NUVRLdHUwUVNCRWxBZUJ2dz09";
    } else if (hour == 11 && min <= 15 && !isWeekend && (displayDay == "Monday") && am_pm == "AM") {
        subject = "PE - FLD";
        link = "";
    } else if (hour == 11 && min <= 15 && !isWeekend && (displayDay == "Tuesday") && am_pm == "AM") {
        subject = "Filipino - REC";
        link = "https://us02web.zoom.us/j/5028306988?pwd=QllVOGF3bmpPczBneFBBL1pXelJWZz09";
    } else if (hour == 11 && min <= 15 && !isWeekend && (displayDay == "Wednesday") && am_pm == "AM") {
        subject = "Arabic - FLD";
        link = "https://us02web.zoom.us/j/9851884971?pwd=WWEvTDNUcFZ6ZUNzcVAwak50Wk9uQT09";
    } else if (hour == 11 && min <= 15 && !isWeekend && (displayDay == "Thursday") && am_pm == "AM") {
        subject = "Arabic - FLD";
        link = "https://us02web.zoom.us/j/9851884971?pwd=WWEvTDNUcFZ6ZUNzcVAwak50Wk9uQT09";
    }

    //5th Period
    if ((hour == 11 && min >= 15) && !isWeekend && (displayDay == "Sunday") && am_pm == "AM") {
        subject = "Math";
        link = "https://us02web.zoom.us/j/81500282176?pwd=OUdVZlIvQzNjSjVyNUZ1bEZhRHhaZz09";
    } else if ((hour == 11 && min >= 15) && !isWeekend && (displayDay == "Monday") && am_pm == "AM") {
        subject = "Science";
        link = "https://bit.ly/TPS-Science_MsDonna";
    } else if ((hour == 11 && min >= 15) && !isWeekend && (displayDay == "Tuesday") && am_pm == "AM") {
        subject = "TLE";
        link = "https://us04web.zoom.us/j/8089598889?pwd=ck83Z0NZaEJnQmFyaTQwQkovdUxJQT09";
    } else if ((hour == 11 && min >= 15) && !isWeekend && (displayDay == "Wednesday") && am_pm == "AM") {
        subject = "English";
        link = "https://us04web.zoom.us/j/5499489330?pwd=VU4wRE9NUVRLdHUwUVNCRWxBZUJ2dz09";
    } else if ((hour == 11 && min >= 15) && !isWeekend && (displayDay == "Thursday") && am_pm == "AM") {
        subject = "Math";
        link = "https://us02web.zoom.us/j/81500282176?pwd=OUdVZlIvQzNjSjVyNUZ1bEZhRHhaZz09";
    }
    if ((hour == 12) && !isWeekend && (displayDay == "Sunday")) {
        subject = "Math";
        link = "https://us02web.zoom.us/j/81500282176?pwd=OUdVZlIvQzNjSjVyNUZ1bEZhRHhaZz09";
    } else if ((hour == 12) && !isWeekend && (displayDay == "Monday") ) {
        subject = "Science";
        link = "https://bit.ly/TPS-Science_MsDonna";
    } else if ((hour == 12) && !isWeekend && (displayDay == "Tuesday")) {
        subject = "TLE";
        link = "https://us04web.zoom.us/j/8089598889?pwd=ck83Z0NZaEJnQmFyaTQwQkovdUxJQT09";
    } else if ((hour == 12) && !isWeekend && (displayDay == "Wednesday")) {
        subject = "English";
        link = "https://us04web.zoom.us/j/5499489330?pwd=VU4wRE9NUVRLdHUwUVNCRWxBZUJ2dz09";
    } else if ((hour == 12) && !isWeekend && (displayDay == "Thursday")) {
        subject = "Math";
        link = "https://us02web.zoom.us/j/81500282176?pwd=OUdVZlIvQzNjSjVyNUZ1bEZhRHhaZz09";
    }

    //lunch Break
    if ((hour >= 12 && min <= 40) && !isWeekend && (displayDay == "Sunday") && am_pm == "PM") {
        subject = "Lunch Break";
        link = "";
    } else if ((hour >= 12 && min <= 40) && !isWeekend && (displayDay == "Monday") && am_pm == "PM") {
        subject = "Lunch Break";
        link = "";
    } else if ((hour >= 12 && min <= 40) && !isWeekend && (displayDay == "Tuesday") && am_pm == "PM") {
        subject = "Lunch Break";
        link = "";
    } else if ((hour >= 12 && min <= 40) && !isWeekend && (displayDay == "Wednesday") && am_pm == "PM") {
        subject = "Lunch Break";
        link = "";
    } else if ((hour >= 12 && min <= 40) && !isWeekend && (displayDay == "Thursday") && am_pm == "PM") {
        subject = "Lunch Break";
        link = "";
    }
    //6th Period
    if ((hour >= 12 && min >= 40) && !isWeekend && (displayDay == "Sunday") && am_pm == "PM") {
        subject = "Math - FLD";
        link = "https://us02web.zoom.us/j/81500282176?pwd=OUdVZlIvQzNjSjVyNUZ1bEZhRHhaZz09";
    } else if ((hour >= 12 && min >= 40) && !isWeekend && (displayDay == "Monday") && am_pm == "PM") {
        subject = "Science - FLD";
        link = "https://bit.ly/TPS-Science_MsDonna";
    } else if ((hour >= 12 && min >= 40) && !isWeekend && (displayDay == "Tuesday") && am_pm == "PM") {
        subject = "TLE - FLD";
        link = "https://us04web.zoom.us/j/8089598889?pwd=ck83Z0NZaEJnQmFyaTQwQkovdUxJQT09";
    } else if ((hour >= 12 && min >= 40) && !isWeekend && (displayDay == "Wednesday") && am_pm == "PM") {
        subject = "English - FLD";
        link = "https://us04web.zoom.us/j/5499489330?pwd=VU4wRE9NUVRLdHUwUVNCRWxBZUJ2dz09";
    } else if ((hour >= 12 && min >= 40) && !isWeekend && (displayDay == "Thursday") && am_pm == "PM") {
        subject = "Math - FLD";
        link = "https://us02web.zoom.us/j/81500282176?pwd=OUdVZlIvQzNjSjVyNUZ1bEZhRHhaZz09";
    }

    if (hour == 01 && min <= 20 && !isWeekend && (displayDay == "Sunday") && am_pm == "PM") {
        subject = "Math - FLD";
        link = "https://us02web.zoom.us/j/81500282176?pwd=OUdVZlIvQzNjSjVyNUZ1bEZhRHhaZz09";
    } else if ((hour == 01 && min <= 20) && !isWeekend && (displayDay == "Monday") && am_pm == "PM") {
        subject = "Science - FLD";
        link = "https://bit.ly/TPS-Science_MsDonna";
    } else if ((hour == 01 && min <= 20) && !isWeekend && (displayDay == "Tuesday") && am_pm == "PM") {
        subject = "TLE - FLD";
        link = "https://us04web.zoom.us/j/8089598889?pwd=ck83Z0NZaEJnQmFyaTQwQkovdUxJQT09";
    } else if ((hour == 01 && min <= 20) && !isWeekend && (displayDay == "Wednesday") && am_pm == "PM") {
        subject = "English - FLD";
        link = "https://us04web.zoom.us/j/5499489330?pwd=VU4wRE9NUVRLdHUwUVNCRWxBZUJ2dz09";
    } else if ((hour == 01 && min <= 20) && !isWeekend && (displayDay == "Thursday") && am_pm == "PM") {
        subject = "Math - FLD";
        link = "https://us02web.zoom.us/j/81500282176?pwd=OUdVZlIvQzNjSjVyNUZ1bEZhRHhaZz09";
    }

    //7th Period
    if ((hour == 01 && min >= 20) && !isWeekend && (displayDay == "Sunday") && am_pm == "PM") {
        subject = "AP";
        link = "https://us02web.zoom.us/j/4608858066?pwd=d0VGWVZUT0RhNk54YUVVbTBEREM4dz09";
    } else if ((hour == 01 && min >= 20) && !isWeekend && (displayDay == "Monday") && am_pm == "PM") {
        subject = "AP";
        link = "https://us02web.zoom.us/j/4608858066?pwd=d0VGWVZUT0RhNk54YUVVbTBEREM4dz09";
    } else if ((hour == 01 && min >= 20) && !isWeekend && (displayDay == "Tuesday") && am_pm == "PM") {
        subject = "Math - REC";
        link = "https://us02web.zoom.us/j/81500282176?pwd=OUdVZlIvQzNjSjVyNUZ1bEZhRHhaZz09";
    } else if ((hour == 01 && min >= 20) && !isWeekend && (displayDay == "Wednesday") && am_pm == "PM") {
        subject = "Music";
        link = "https://us02web.zoom.us/j/89877661443?pwd=T0VlNGNtYlFyUTNsN2l0aGdvUWlFUT09";
    } else if ((hour == 01 && min >= 20) && !isWeekend && (displayDay == "Thursday") && am_pm == "PM") {
        subject = "UAE SS";
        link = "https://us02web.zoom.us/j/4608858066?pwd=d0VGWVZUT0RhNk54YUVVbTBEREM4dz09";
    }
    if ((hour == 2 && min >= 00) && !isWeekend && (displayDay == "Sunday") && am_pm == "PM") {
        subject = "AP";
        link = "https://us02web.zoom.us/j/4608858066?pwd=d0VGWVZUT0RhNk54YUVVbTBEREM4dz09";
    } else if ((hour == 2 && min >= 00) && !isWeekend && (displayDay == "Monday") && am_pm == "PM") {
        subject = "AP";
        link = "https://us02web.zoom.us/j/4608858066?pwd=d0VGWVZUT0RhNk54YUVVbTBEREM4dz09";
    } else if ((hour == 2 && min >= 00) && !isWeekend && (displayDay == "Tuesday") && am_pm == "PM") {
        subject = "Math - REC";
        link = "https://us02web.zoom.us/j/81500282176?pwd=OUdVZlIvQzNjSjVyNUZ1bEZhRHhaZz09";
    } else if ((hour == 2 && min >= 00) && !isWeekend && (displayDay == "Wednesday") && am_pm == "PM") {
        subject = "Music";
        link = "https://us02web.zoom.us/j/89877661443?pwd=T0VlNGNtYlFyUTNsN2l0aGdvUWlFUT09";
    } else if ((hour == 2 && min >= 00) && !isWeekend && (displayDay == "Thursday") && am_pm == "PM") {
        subject = "UAE SS";
        link = "https://us02web.zoom.us/j/4608858066?pwd=d0VGWVZUT0RhNk54YUVVbTBEREM4dz09";
    }

    //8th Period
    if ((hour <= 2 && min <= 50) && (hour >= 2 && min >= 05) && !isWeekend && (displayDay == "Sunday") && am_pm == "PM") {
        subject = "AP - FLD";
        link = "https://us02web.zoom.us/j/4608858066?pwd=d0VGWVZUT0RhNk54YUVVbTBEREM4dz09";
    } else if ((hour <= 2 && min <= 50) && (hour >= 2 && min >= 05) && !isWeekend && (displayDay == "Monday") && am_pm == "PM") {
        subject = "AP - REC";
        link = "https://us02web.zoom.us/j/4608858066?pwd=d0VGWVZUT0RhNk54YUVVbTBEREM4dz09";
    } else if ((hour <= 2 && min <= 50) && (hour >= 2 && min >= 05) && !isWeekend && (displayDay == "Tuesday") && am_pm == "PM") {
        subject = "Science - REC";
        link = "https://bit.ly/TPS-Science_MsDonna";
    } else if ((hour <= 2 && min <= 50) && (hour >= 2 && min >= 05) && !isWeekend && (displayDay == "Wednesday") && am_pm == "PM") {
        subject = "Arts";
        link = "https://us02web.zoom.us/j/89877661443?pwd=T0VlNGNtYlFyUTNsN2l0aGdvUWlFUT09";
    } else if ((hour <= 2 && min <= 50) && (hour >= 2 && min >= 05) && !isWeekend && (displayDay == "Thursday") && am_pm == "PM") {
        subject = "UAE SS - FLD";
        link = "https://us02web.zoom.us/j/4608858066?pwd=d0VGWVZUT0RhNk54YUVVbTBEREM4dz09";
    }

    document.getElementById("clock")
            .innerHTML = subject + '<br>' + '<h5 class="time">' + currentTime + '</h5>';
    
    var dababyBool = Boolean(Cookies.get('daBaby') === "true")
    var atten = document.getElementById("attendance");
    if (dababyBool) {
        atten.style.display = "block";
    } else {
        atten.style.display = "none";
    }

}
var lightModeStatus = false;
var roll = document.getElementById("lightMode")
var rollIcon = document.getElementById("lighticon")
function lightMode() {

    if (lightModeStatus == false) {
        lightModeStatus = true;
        roll.style.display = "block"
        rollIcon.setAttribute("src", "images/moon.png")
    } else {
        lightModeStatus = false;
        roll.style.display = "none"
        rollIcon.setAttribute("src", "images/sun.png")
    }
  console.log(lightModeStatus)
};

document.getElementById("colorButton").addEventListener("click", lightMode);


//cookies
var isDababy = false;

function oCookie() {
    Cookies.set('daBaby', isDababy, { expires: 10000000 })
    if (isDababy == false) {
        isDababy = true
    } else {
        isDababy = false
    }

    console.log(Cookies.get('daBaby'))
};

document.getElementById("smile").addEventListener("click", oCookie);


function updateLink() {

    if (!link) {
        alert("Zoom link is not yet available");
    };
    document.getElementById("getLink").setAttribute("href", link);
}

document.getElementById("getLink").addEventListener("click", updateLink);


showTime();
plyr.setup("#plyr-video");
  function removeLoader(){
      
      $( "#loader" ).fadeOut(500, function() {
        // fadeOut complete. Remove the loading div
        $( "#loader" ).remove(); //makes page more lightweight 
        $('html, body').css({
            'overflow': 'auto',
            'height': 'auto',
            'overflow-x': 'hidden'
          })
    });  
  }

function hideNotif() {
    document.getElementById("notif").style.display = "none";
}

document.getElementById("hideNotif").addEventListener("click", hideNotif);