let BPM = 154;
let BPMCALC = 1000/((4*BPM)/60);
const selectedCol = "pink";
const unselectedCol = "grey";

let path = "sounds/1539/";

let hatSound = new Audio(path + "hat.mp3");
let snareSound = new Audio(path + "snare.mp3");
let kickSound = new Audio(path + "kick.mp3");
let openhatSound = new Audio(path + "openhat.mp3");
let percSound = new Audio(path + "perc.mp3");
let clapSound = new Audio(path + "clap.mp3");
let extraSound = new Audio(path + "extra.mp3");

// THE POSITION ON THE TRACK
let pos = 0;

// WHETHER THE TRACK IS PAUSED OR NOT
let paused = false;

/*

---- PAUSE BUTTON ----

*/

let pause = document.getElementById("pausebutton");

pause.addEventListener("mousedown", function() {
    pauseFunction();
});

function pauseFunction() {
    pause.style.backgroundImage = paused ? "url('images/pause.png')" : "url('images/play.png')";
    paused = !paused;
}

/*

---- SET UP ALL THE DRUM BUTTONS ----

*/

const counts = document.querySelectorAll(".countbutton");

counts.forEach(function(count) {
    count.addEventListener("mousedown", function(event) {

        // clears the entire countrow
        counts.forEach(function(count) {
            count.style.backgroundColor = unselectedCol;
        });

        // selects the countrow that was clicked
        pos = Array.from(counts).indexOf(event.target);
        let btn = document.getElementById("count" + pos);
        btn.style.backgroundColor = selectedCol;
    });
});

const hats = document.querySelectorAll(".hatbutton");

hats.forEach(function(hat) {
    hat.addEventListener("mousedown", function(event) {
        let i = Array.from(hats).indexOf(event.target);
        let btn = document.getElementById("hat" + i);

        if(btn.style.backgroundColor == selectedCol) {
            btn.style.backgroundColor = unselectedCol;
        }
        else {
            btn.style.backgroundColor = selectedCol;
        }
    });
});

const snares = document.querySelectorAll(".snarebutton");

snares.forEach(function(snare) {
    snare.addEventListener("mousedown", function(event) {
        let i = Array.from(snares).indexOf(event.target);
        let btn = document.getElementById("snare" + i);

        if(btn.style.backgroundColor == selectedCol) {
            btn.style.backgroundColor = unselectedCol;
        }
        else {
            btn.style.backgroundColor = selectedCol;
        }
    });
});

const kicks = document.querySelectorAll(".kickbutton");

kicks.forEach(function(kick) {
    kick.addEventListener("mousedown", function(event) {
        let i = Array.from(kicks).indexOf(event.target);
        let btn = document.getElementById("kick" + i);

        if(btn.style.backgroundColor == selectedCol) {
            btn.style.backgroundColor = unselectedCol;
        }
        else {
            btn.style.backgroundColor = selectedCol;
        }
    });
});

const openhats = document.querySelectorAll(".openhatbutton");

openhats.forEach(function(openhat) {
    openhat.addEventListener("mousedown", function(event) {
        let i = Array.from(openhats).indexOf(event.target);
        let btn = document.getElementById("openhat" + i);

        if(btn.style.backgroundColor == selectedCol) {
            btn.style.backgroundColor = unselectedCol;
        }
        else {
            btn.style.backgroundColor = selectedCol;
        }
    });
});

const percs = document.querySelectorAll(".percbutton");

percs.forEach(function(perc) {
    perc.addEventListener("mousedown", function(event) {
        let i = Array.from(percs).indexOf(event.target);
        let btn = document.getElementById("perc" + i);

        if(btn.style.backgroundColor == selectedCol) {
            btn.style.backgroundColor = unselectedCol;
        }
        else {
            btn.style.backgroundColor = selectedCol;
        }
    });
});

const claps = document.querySelectorAll(".clapbutton");

claps.forEach(function(clap) {
    clap.addEventListener("mousedown", function(event) {
        let i = Array.from(claps).indexOf(event.target);
        let btn = document.getElementById("clap" + i);

        if(btn.style.backgroundColor == selectedCol) {
            btn.style.backgroundColor = unselectedCol;
        }
        else {
            btn.style.backgroundColor = selectedCol;
        }
    });
});

const extras = document.querySelectorAll(".extrabutton");

extras.forEach(function(extra) {
    extra.addEventListener("mousedown", function(event) {
        let i = Array.from(extras).indexOf(event.target);
        let btn = document.getElementById("extra" + i);

        if(btn.style.backgroundColor == selectedCol) {
            btn.style.backgroundColor = unselectedCol;
        }
        else {
            btn.style.backgroundColor = selectedCol;
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

const percFill = document.getElementById("percfill");
const percErase = document.getElementById("percerase");

percFill.addEventListener("mousedown", function() {
    percs.forEach(function(perc) {
        perc.style.backgroundColor = selectedCol;
    });
});
percErase.addEventListener("mousedown", function() {
    percs.forEach(function(perc) {
        perc.style.backgroundColor = unselectedCol;
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

const extraFill = document.getElementById("extrafill");
const extraErase = document.getElementById("extraerase");

extraFill.addEventListener("mousedown", function() {
    extras.forEach(function(extra) {
        extra.style.backgroundColor = selectedCol;
    });
});
extraErase.addEventListener("mousedown", function() {
    extras.forEach(function(extra) {
        extra.style.backgroundColor = unselectedCol;
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
    percSound.load();
    clapSound.load();
    extraSound.load();
}

// plays the audio for the column with index num
function playSoundCol(num) {
    for(let i = 0; i < hats.length; i++) {
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
        if(document.getElementById("perc" + num).style.backgroundColor == selectedCol) {
            percSound.currentTime = 0;
            percSound.play();
        }
        if(document.getElementById("clap" + num).style.backgroundColor == selectedCol) {
            clapSound.currentTime = 0;
            clapSound.play();
        }
        if(document.getElementById("extra" + num).style.backgroundColor == selectedCol) {
            extraSound.currentTime = 0;
            extraSound.play();
        }
    }
}

let starttime;
function increment(timestamp, duration) {
    let runtime = timestamp - starttime;
    if(runtime > duration && !paused) {
        starttime = timestamp;
        update();
    }
    requestAnimationFrame(function(timestamp) {
        increment(timestamp, BPMCALC);
    });
}

function start() {
    requestAnimationFrame(function(timestamp) {
        starttime = timestamp;
        increment(timestamp, BPMCALC);
    });
}

loadSound();
start();

function update() {
    if(paused == false) {

        if(pos >= snares.length) {
            pos = 0;
        }
        document.getElementById("count" + pos).style.backgroundColor = selectedCol;
        
        let prev;
        if(pos > 0) {
            prev = pos - 1;
        }
        else {
            prev = snares.length - 1;
        }
        document.getElementById("count" + prev).style.backgroundColor = unselectedCol;
        playSoundCol(pos);

        pos++;
    }
}

/*

---- SLIDER ----

*/

let slider = document.getElementById("bpmslider");
let bpmlabel = document.getElementById("bpmlabel");

slider.oninput = function() {
    BPM = slider.value;
    BPMCALC = 1000/((4*BPM)/60);
    bpmlabel.innerHTML = BPM + " BPM";
    start(BPMCALC);
}

/*

---- DROPDOWN ----

*/

let kitmenu = document.getElementById("kitmenu");

// change all the sound paths to whatevers in the dropdown menu
kitmenu.onchange = function() {

    path = "sounds/" + kitmenu.value + "/";
    
    hatSound.src = path + "hat.mp3";
    snareSound.src = path + "snare.mp3";
    kickSound.src = path + "kick.mp3";
    openhatSound.src = path + "openhat.mp3";
    percSound.src = path + "perc.mp3";
    clapSound.src = path + "clap.mp3";
    extraSound.src = path + "extra.mp3";
}

// TODO add volume slider
// TODO clean up code using class names