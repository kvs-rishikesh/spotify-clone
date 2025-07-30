const audio = new Audio();

let currentPlaylist = [];
let currentTrackIndex = 0;
let isPlaying = false;
let isLoop = false;

const recentlyPlayed = [
  { title: "Sunset Lover", artist: "Petit Biscuit", albumCover: "assets/card1img.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", section: "Recently Played" },
  { title: "Bloom", artist: "ODESZA", albumCover: "assets/card2img.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", section: "Recently Played" },
  { title: "Home", artist: "Doja Cat", albumCover: "assets/card3img.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", section: "Recently Played" },
  { title: "Shelter", artist: "Porter Robinson", albumCover: "assets/card4img.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", section: "Recently Played" },
  { title: "Higher", artist: "Clean Bandit", albumCover: "assets/card5img.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", section: "Recently Played" },
  { title: "Electric", artist: "Alina Baraz", albumCover: "assets/card6img.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3", section: "Recently Played" },
  { title: "Ocean Eyes", artist: "Billie Eilish", albumCover: "assets/card1img.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3", section: "Recently Played" },
  { title: "Heat Waves", artist: "Glass Animals", albumCover: "assets/card2img.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3", section: "Recently Played" },
  { title: "Better Now", artist: "Post Malone", albumCover: "assets/card3img.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3", section: "Recently Played" },
  { title: "Circles", artist: "Post Malone", albumCover: "assets/card4img.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3", section: "Recently Played" }
];

const trendingNowBase = [
  { title: "Levitating", artist: "Dua Lipa", albumCover: "assets/card1img.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3", section: "Trending now near you" },
  { title: "Peaches", artist: "Justin Bieber", albumCover: "assets/card4img.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3", section: "Trending now near you" },
  { title: "Good 4 U", artist: "Olivia Rodrigo", albumCover: "assets/card2img.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3", section: "Trending now near you" },
  { title: "Montero", artist: "Lil Nas X", albumCover: "assets/card5img.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3", section: "Trending now near you" },
  { title: "Save Your Tears", artist: "The Weeknd", albumCover: "assets/card3img.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3", section: "Trending now near you" },
  { title: "Blinding Lights", artist: "The Weeknd", albumCover: "assets/card6img.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3", section: "Trending now near you" },
  { title: "Stay", artist: "The Kid LAROI", albumCover: "assets/card1img.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3", section: "Trending now near you" },
  { title: "Industry Baby", artist: "Lil Nas X", albumCover: "assets/card4img.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-18.mp3", section: "Trending now near you" },
  { title: "Bad Habits", artist: "Ed Sheeran", albumCover: "assets/card2img.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-19.mp3", section: "Trending now near you" },
  { title: "Shivers", artist: "Ed Sheeran", albumCover: "assets/card3img.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-20.mp3", section: "Trending now near you" }
];

const trendingNow = trendingNowBase.filter((_, i) => i % 2 === 0);

const featuredChartsBase = [
  { title: "Save Me", artist: "Lil Wayne", albumCover: "assets/card6img.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", section: "Featured Charts" },
  { title: "Memories", artist: "Maroon 5", albumCover: "assets/card1img.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", section: "Featured Charts" },
  { title: "Happier Than Ever", artist: "Billie Eilish", albumCover: "assets/card5img.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", section: "Featured Charts" },
  { title: "Lovely", artist: "Billie Eilish", albumCover: "assets/card2img.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", section: "Featured Charts" },
  { title: "God's Plan", artist: "Drake", albumCover: "assets/card4img.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3", section: "Featured Charts" },
  { title: "Rockstar", artist: "Post Malone", albumCover: "assets/card3img.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3", section: "Featured Charts" },
  { title: "Sunflower", artist: "Post Malone", albumCover: "assets/card4img.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3", section: "Featured Charts" },
  { title: "Take What You Want", artist: "Post Malone", albumCover: "assets/card1img.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3", section: "Featured Charts" },
  { title: "Circles", artist: "Post Malone", albumCover: "assets/card3img.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3", section: "Featured Charts" },
  { title: "Sunflower", artist: "Swae Lee", albumCover: "assets/card2img.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3", section: "Featured Charts" }
];

const featuredCharts = featuredChartsBase.filter((_, i) => i % 2 === 0);


const sidebarSearchInput = document.getElementById("sidebarSearchInput");
const recentlyPlayedContainer = document.getElementById("recentlyPlayed");
const trendingNowContainer = document.getElementById("trendingNow");
const featuredChartsContainer = document.getElementById("featuredCharts");


const albumArt = document.getElementById("albumArt");
const playPauseBtn = document.getElementById("playPauseBtn");
const playerPrevBtn = document.getElementById("playerPrevBtn");
const playerNextBtn = document.getElementById("playerNextBtn");
const loopBtn = document.getElementById("loopBtn");
const randomTrackBtn = document.getElementById("randomTrackBtn");
const prevTrackBtn = document.getElementById("prevTrackBtn");


const progressBar = document.getElementById("progressBar");
const currentTimeDisplay = document.getElementById("currentTime");
const totalTimeDisplay = document.getElementById("totalTime");


function renderTracks(tracks, container, filterText = "") {
  container.innerHTML = "";
  const filter = filterText.toLowerCase();
  tracks.forEach(track => {
    if (filterText) {
      const titleMatch = track.title.toLowerCase().includes(filter);
      const artistMatch = track.artist.toLowerCase().includes(filter);
      if (!titleMatch && !artistMatch) return;
    }
    const card = document.createElement("div");
    card.className = "card";
    card.title = `${track.title} - ${track.artist}`;
    card.innerHTML = `
      <img src="${track.albumCover}" alt="${track.title}" class="card-img" />
      <p class="card-title" style="background: transparent;">${track.title}</p>
      <p class="card-info" style="background: transparent;">${track.artist}</p>
    `;
    card.addEventListener("click", () => {
      const allTracks = [...recentlyPlayed, ...trendingNow, ...featuredCharts];
      currentPlaylist = allTracks;
      currentTrackIndex = currentPlaylist.findIndex(t => t.title === track.title && t.artist === track.artist);
      loadTrack(currentPlaylist[currentTrackIndex]);
      playAudio();
      sidebarSearchInput.value = "";
      renderAllTracks();
    });
    container.appendChild(card);
  });
}

function renderAllTracks(filterText = "") {
  renderTracks(recentlyPlayed, recentlyPlayedContainer, filterText);
  renderTracks(trendingNow, trendingNowContainer, filterText);
  renderTracks(featuredCharts, featuredChartsContainer, filterText);
}

function formatTime(seconds) {
  if (isNaN(seconds)) return "00:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins < 10 ? "0" + mins : mins}:${secs < 10 ? "0" + secs : secs}`;
}

function loadTrack(track) {
  audio.src = track.preview;
  audio.load();
  albumArt.style.backgroundImage = `url(${track.albumCover})`;
  currentTimeDisplay.textContent = "00:00";
  totalTimeDisplay.textContent = "00:00";
  progressBar.value = 0;
  updatePlayPauseIcon(false);
}

function updatePlayPauseIcon(playing) {
  playPauseBtn.src = playing ? "assets/player_icon3_pause.png" : "assets/player_icon3.png";
  playPauseBtn.title = playing ? "Pause" : "Play";
}

function playAudio() {
  if (!audio.src) return;
  audio.play();
  isPlaying = true;
  updatePlayPauseIcon(true);
}

function pauseAudio() {
  audio.pause();
  isPlaying = false;
  updatePlayPauseIcon(false);
}

function nextTrack() {
  if (!currentPlaylist.length) return;
  currentTrackIndex++;
  if (currentTrackIndex >= currentPlaylist.length) currentTrackIndex = 0;
  loadTrack(currentPlaylist[currentTrackIndex]);
  playAudio();
}

function prevTrack() {
  if (!currentPlaylist.length) return;
  currentTrackIndex--;
  if (currentTrackIndex < 0) currentTrackIndex = currentPlaylist.length - 1;
  loadTrack(currentPlaylist[currentTrackIndex]);
  playAudio();
}

function playRandomTrack() {
  if (!currentPlaylist.length) return;
  let randomIndex = Math.floor(Math.random() * currentPlaylist.length);
  while (randomIndex === currentTrackIndex && currentPlaylist.length > 1) {
    randomIndex = Math.floor(Math.random() * currentPlaylist.length);
  }
  currentTrackIndex = randomIndex;
  loadTrack(currentPlaylist[currentTrackIndex]);
  playAudio();
}

function toggleLoop() {
  isLoop = !isLoop;
  loopBtn.style.opacity = isLoop ? 1 : 0.6;
  loopBtn.title = isLoop ? "Loop Enabled" : "Loop Disabled";
}

sidebarSearchInput.addEventListener("input", () => {
  const val = sidebarSearchInput.value.trim();
  renderAllTracks(val);
});

playPauseBtn.addEventListener("click", () => {
  if (!audio.src) return;
  isPlaying ? pauseAudio() : playAudio();
});

playerPrevBtn.addEventListener("click", prevTrack);
playerNextBtn.addEventListener("click", nextTrack);
loopBtn.style.opacity = 0.6;
loopBtn.addEventListener("click", toggleLoop);

randomTrackBtn.addEventListener("click", playRandomTrack);
prevTrackBtn.addEventListener("click", prevTrack);

progressBar.addEventListener("input", () => {
  audio.currentTime = progressBar.value;
});

audio.addEventListener("timeupdate", () => {
  currentTimeDisplay.textContent = formatTime(audio.currentTime);
  progressBar.value = audio.currentTime;
});

audio.addEventListener("loadedmetadata", () => {
  totalTimeDisplay.textContent = formatTime(audio.duration);
  progressBar.max = audio.duration;
});

audio.addEventListener("ended", () => {
  if (isLoop) {
    audio.currentTime = 0;
    playAudio();
  } else {
    nextTrack();
  }
});

window.addEventListener("DOMContentLoaded", () => {
  currentPlaylist = [...recentlyPlayed, ...trendingNow, ...featuredCharts];
  currentTrackIndex = 0;
  renderAllTracks();
  loadTrack(currentPlaylist[currentTrackIndex]);
});
