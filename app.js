let anniversary = "2024-06-19";
let date = new Date(anniversary);
let dateVal = date.getTime();
let today = new Date();
let now = today.getTime();
let value = now - dateVal;
let day = Math.floor(value / (1000 * 60 * 60 * 24));
let month = Math.floor(value / (1000 * 60 * 60 * 24 * 30.4375));
let year = Math.floor(value / (1000 * 60 * 60 * 24 * 365.25));

console.log(value);

document.getElementById("days").textContent = day.toString();
document.getElementById("months").textContent = month.toString();
document.getElementById("years").textContent = year.toString();


let musicPlayer = document.querySelector(".music-container");
let togglePlayer = document.querySelector(".toggle-player");

let trackInfo = document.querySelector(".track-info");
let trackName = document.querySelector(".trackname");
let trackArtist = document.querySelector(".trackartist");
let trackNav = document.querySelector(".track-nav");

let playPauseBtn = document.querySelector(".playpause-track");
let nextBtn = document.querySelector(".next-track");
let prevBtn = document.querySelector(".prev-track");

let trackIndex = 0;
let isPlaying = false;
let isHidden = true;

let currentTrack = document.createElement("audio");
let soundBars = document.querySelector(".sound-bars");

togglePlayer.addEventListener("click", function() {
    isHidden = !isHidden;
    if(isHidden){
        musicPlayer.classList.remove("hide");
        togglePlayer.innerHTML = '<img class="w-[98%]" src="close.svg">';
        trackInfo.style.transitionDelay = "0.4s";
        trackNav.style.transitionDelay = "0.4s";
    } else {
        musicPlayer.classList.add("hide");
        togglePlayer.innerHTML = '<img class="w-full" src="plus.svg">';
        trackInfo.style.transitionDelay = "0s";
        trackNav.style.transitionDelay = "0s";
    }
});

let soundBarsLottie = bodymovin.loadAnimation({
    container: soundBars,
    renderer: "svg",
    loop: true,
    autoPLay: false,
    path: "https://lottie.host/9ec12a7e-e429-453a-9f22-a2af1dcb4dca/2zeuy4rwtP.json",
});


let trackList = [
    {
        name: "00:00",
        artist: "siddhartha",
        path: "00.mp3",
    },
    {
        name: "505",
        artist: "arctic monkeys",
        path: "505.mp3",
    },
    {
        name: "Love in october",
        artist: "girl in red",
        path: "we fell in love in october.mp3",
    },
    {
        name: "I Wanna Be Yours",
        artist: "Arctic Monkeys",
        path: "I Wanna Be Yours.mp3",
    },
    {
        name: "Amapolas",
        artist: "Leo Rizzi",
        path: "amapolas.mp3",
    },
    {
        name: "Hasta la raiz",
        artist: "Natalia Lafourcade",
        path: "hasta la raiz.mp3",
    },
    {
        name: "Locos",
        artist: "León Larregui",
        path: "locos.mp3",
    },
    {
        name: "Luna",
        artist: "Zoé",
        path: "luna.mp3",
    },
    {
        name: "Mi secreto",
        artist: "Los temerarios",
        path: "mi secreto.mp3",
    },
];

// EVENT LISTENERS
playPauseBtn.addEventListener("click", playPauseTrack);
nextBtn.addEventListener("click", nextTrack);
prevBtn.addEventListener("click", prevTrack);

function loadTrack(trackIndex){
    currentTrack.src = trackList[trackIndex].path;
    trackName.textContent = trackList[trackIndex].name;
    trackArtist.textContent = trackList[trackIndex].artist;
    currentTrack.addEventListener("ended", nextTrack);
    currentTrack.load();
}

loadTrack(trackIndex);

function playPauseTrack(){
    if(isPlaying == false){
        playTrack();
    }else{
        pauseTrack();
    }
}

function playTrack(){
    currentTrack.play();
    isPlaying = true;
    playPauseBtn.innerHTML = '<img class="w-8" src="pause.svg">';
    soundBarsLottie.play();
}

function pauseTrack(){
    currentTrack.pause();
    isPlaying = false;
    playPauseBtn.innerHTML = '<img class="w-8" src="play.svg">';
    soundBarsLottie.stop();
}

function nextTrack(){
    if(trackIndex < trackList.length - 1){
        trackIndex += 1;
        loadTrack(trackIndex);
        playTrack();
    }else{
        trackIndex = 0;
        loadTrack(trackIndex);
        playTrack();
    } 
}

function prevTrack(){
    if(trackIndex > 0){
        trackIndex -= 1;
        loadTrack(trackIndex);
        playTrack();
    }else{
        trackIndex = trackList.length - 1;
        loadTrack(trackIndex);
        playTrack();
    }
}