// UI
const showyear = document.getElementById('showyear');

const date = new Date();

const getyear = date.getUTCFullYear();

showyear.innerText = getyear;