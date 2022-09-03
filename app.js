var BPM = 154;
const selectedCol = "pink";
const unselectedCol = "grey";

var path = "sounds/trap/";

var hatSound = new Audio(path + "hat.mp3");
var snareSound = new Audio(path + "snare.mp3");
var kickSound = new Audio(path + "kick.mp3");
var openhatSound = new Audio(path + "openhat.mp3");
var rimSound = new Audio(path + "rim.mp3");
var clapSound = new Audio(path + "clap.mp3");

// THE POSITION ON THE TRACK
var pos = 0;

// WHETHER THE TRACK IS PAUSED OR NOT
var paused = false;

/*

---- PAUSE BUTTON ----

*/

var pause = document.getElementById("pausebutton");

pause.addEventListener("mousedown", function() {
    if(paused) {
        pause.style.backgroundImage = "url('images/pause.png')";
    }
    else {
        pause.style.backgroundImage = "url('images/play.png')";
    }

    paused = !paused;
});

/*

---- SET UP ALL THE DRUM BUTTONS ----

*/

const counts = document.querySelectorAll(".countbutton");

counts.forEach(function(count) {
    count.addEventListener("mousedown", function(event) {
        // newpos ensures it never goes to -1
        /*var newpos = pos>0 ? pos-1 : 0;
        var btnold = document.getElementById("count" + newpos);
        btnold.style.backgroundColor = unselectedCol;*/

        // clears the entire countrow
        counts.forEach(function(count) {
            count.style.backgroundColor = unselectedCol;
        });

        // selects the countrow that was clicked
        pos = Array.from(counts).indexOf(event.target);
        var btn = document.getElementById("count" + pos);
        btn.style.backgroundColor = selectedCol;
    });
});

const hats = document.querySelectorAll(".hatbutton");

hats.forEach(function(hat) {
    hat.addEventListener("mousedown", function(event) {
        var i = Array.from(hats).indexOf(event.target);
        var btn = document.getElementById("hat" + i);

        if(btn.style.backgroundColor == selectedCol) {
            btn.style.backgroundColor = unselectedCol;
        }
        else {
            btn.style.backgroundColor = selectedCol;

            //hatSound.currentTime = 0;
            //hatSound.play();
        }
    });
});

const snares = document.querySelectorAll(".snarebutton");

snares.forEach(function(snare) {
    snare.addEventListener("mousedown", function(event) {
        var i = Array.from(snares).indexOf(event.target);
        var btn = document.getElementById("snare" + i);

        if(btn.style.backgroundColor == selectedCol) {
            btn.style.backgroundColor = unselectedCol;
        }
        else {
            btn.style.backgroundColor = selectedCol;

            //snareSound.currentTime = 0;
            //snareSound.play();
        }
    });
});

const kicks = document.querySelectorAll(".kickbutton");

kicks.forEach(function(kick) {
    kick.addEventListener("mousedown", function(event) {
        var i = Array.from(kicks).indexOf(event.target);
        var btn = document.getElementById("kick" + i);

        if(btn.style.backgroundColor == selectedCol) {
            btn.style.backgroundColor = unselectedCol;
        }
        else {
            btn.style.backgroundColor = selectedCol;

            //kickSound.currentTime = 0;
            //kickSound.play();
        }
    });
});

const openhats = document.querySelectorAll(".openhatbutton");

openhats.forEach(function(openhat) {
    openhat.addEventListener("mousedown", function(event) {
        var i = Array.from(openhats).indexOf(event.target);
        var btn = document.getElementById("openhat" + i);

        if(btn.style.backgroundColor == selectedCol) {
            btn.style.backgroundColor = unselectedCol;
        }
        else {
            btn.style.backgroundColor = selectedCol;

            //openhatSound.currentTime = 0;
            //openhatSound.play();
        }
    });
});

const rims = document.querySelectorAll(".rimbutton");

rims.forEach(function(rim) {
    rim.addEventListener("mousedown", function(event) {
        var i = Array.from(rims).indexOf(event.target);
        var btn = document.getElementById("rim" + i);

        if(btn.style.backgroundColor == selectedCol) {
            btn.style.backgroundColor = unselectedCol;
        }
        else {
            btn.style.backgroundColor = selectedCol;

            //rimSound.currentTime = 0;
            //rimSound.play();
        }
    });
});

const claps = document.querySelectorAll(".clapbutton");

claps.forEach(function(clap) {
    clap.addEventListener("mousedown", function(event) {
        var i = Array.from(claps).indexOf(event.target);
        var btn = document.getElementById("clap" + i);

        if(btn.style.backgroundColor == selectedCol) {
            btn.style.backgroundColor = unselectedCol;
        }
        else {
            btn.style.backgroundColor = selectedCol;

            //clapSound.currentTime = 0;
            //clapSound.play();
        }
    });
});

/*

---- SET UP ALL THE SHORTCUT/OPTION BUTTONS ----

*/

const hatFill = document.getElementById("hatfill");
const hatErase = document.getElementById("haterase");

hatFill.addEventListener("mousedown", function() {
    hats.forEach(function(hat) {
        hat.style.backgroundColor = selectedCol;
    });
});
hatErase.addEventListener("mousedown", function() {
    hats.forEach(function(hat) {
        hat.style.backgroundColor = unselectedCol;
    });
});

const snareFill = document.getElementById("snarefill");
const snareErase = document.getElementById("snareerase");

snareFill.addEventListener("mousedown", function() {
    snares.forEach(function(snare) {
        snare.style.backgroundColor = selectedCol;
    });
});
snareErase.addEventListener("mousedown", function() {
    snares.forEach(function(snare) {
        snare.style.backgroundColor = unselectedCol;
    });
});

const kickFill = document.getElementById("kickfill");
const kickErase = document.getElementById("kickerase");

kickFill.addEventListener("mousedown", function() {
    kicks.forEach(function(kick) {
        kick.style.backgroundColor = selectedCol;
    });
});
kickErase.addEventListener("mousedown", function() {
    kicks.forEach(function(kick) {
        kick.style.backgroundColor = unselectedCol;
    });
});

const openhatFill = document.getElementById("openhatfill");
const openhatErase = document.getElementById("openhaterase");

openhatFill.addEventListener("mousedown", function() {
    openhats.forEach(function(openhat) {
        openhat.style.backgroundColor = selectedCol;
    });
});
openhatErase.addEventListener("mousedown", function() {
    openhats.forEach(function(openhat) {
        openhat.style.backgroundColor = unselectedCol;
    });
});

const rimFill = document.getElementById("rimfill");
const rimErase = document.getElementById("rimerase");

rimFill.addEventListener("mousedown", function() {
    rims.forEach(function(rim) {
        rim.style.backgroundColor = selectedCol;
    });
});
rimErase.addEventListener("mousedown", function() {
    rims.forEach(function(rim) {
        rim.style.backgroundColor = unselectedCol;
    });
});

const clapFill = document.getElementById("clapfill");
const clapErase = document.getElementById("claperase");

clapFill.addEventListener("mousedown", function() {
    claps.forEach(function(clap) {
        clap.style.backgroundColor = selectedCol;
    });
});
clapErase.addEventListener("mousedown", function() {
    claps.forEach(function(clap) {
        clap.style.backgroundColor = unselectedCol;
    });
});

/*

---- SET UP ALL THE SOUND STUFF ----

*/

function loadSound() {
    hatSound.load();
    snareSound.load();
    kickSound.load();
    openhatSound.load();
    rimSound.load();
    clapSound.load();
}

// plays the audio for the column with index num
function playSoundCol(num) {
    for(var i = 0; i < hats.length; i++) {
        if(document.getElementById("hat" + num).style.backgroundColor == selectedCol) {
            hatSound.currentTime = 0;
            hatSound.play();
        }
        if(document.getElementById("snare" + num).style.backgroundColor == selectedCol) {
            snareSound.currentTime = 0;
            snareSound.play();
        }
        if(document.getElementById("kick" + num).style.backgroundColor == selectedCol) {
            kickSound.currentTime = 0;
            kickSound.play();
        }
        if(document.getElementById("openhat" + num).style.backgroundColor == selectedCol) {
            openhatSound.currentTime = 0;
            openhatSound.play();
        }
        if(document.getElementById("rim" + num).style.backgroundColor == selectedCol) {
            rimSound.currentTime = 0;
            rimSound.play();
        }
        if(document.getElementById("clap" + num).style.backgroundColor == selectedCol) {
            clapSound.currentTime = 0;
            clapSound.play();
        }
    }
}

var intervalID = setInterval(update, 1000/((2*BPM)/60));

function update() {
    if(paused == false) {

        if(pos >= snares.length) {
            pos = 0;
        }
        document.getElementById("count" + pos).style.backgroundColor = selectedCol;
        
        var prev;
        if(pos > 0) {
            prev = pos - 1;
        }
        else {
            prev = snares.length - 1;
        }
        document.getElementById("count" + prev).style.backgroundColor = unselectedCol;

        //loadSound();
        playSoundCol(pos);

        pos++;
    }
}

/*

---- SLIDER ----

*/

var slider = document.getElementById("bpmslider");
var bpmlabel = document.getElementById("bpmlabel");

slider.oninput = function() {
    BPM = slider.value;
    bpmlabel.innerHTML = BPM + " BPM";
    clearInterval(intervalID);
    intervalID = setInterval(update, 1000/((2*BPM)/60));
}

/*

---- DROPDOWN ----

*/

var kitmenu = document.getElementById("kitmenu");

// change all the sound paths to whatevers in the dropdown menu
kitmenu.onchange = function() {

    path = "sounds/" + kitmenu.value + "/";
    
    hatSound.src = path + "hat.mp3";
    snareSound.src = path + "snare.mp3";
    kickSound.src = path + "kick.mp3";
    openhatSound.src = path + "openhat.mp3";
    rimSound.src = path + "rim.mp3";
    clapSound.src = path + "clap.mp3";
}