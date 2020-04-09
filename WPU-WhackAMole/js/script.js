const tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');
const papanSkor = document.querySelector('.papan-skor');
const pop = document.querySelector('#pop');

let tanahSebelumnya;
let selesai;
let skor;

function randomWaktu(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomTanah(tanah) {
    const t = Math.floor(Math.random() * tanah.length); //pembulatan ada 3: floor(kebawah), round(terdekat), ceil(keatas)
    const tRandom = tanah[t];
    if (tRandom == tanahSebelumnya) {
        randomTanah(tanah);
    }
    tanahSebelumnya = tRandom;
    return tRandom;
}

function munculkanTikus() {
    const tRandom = randomTanah(tanah);
    const wRandom = randomWaktu(300, 1000);
    tRandom.classList.add('muncul');
    setTimeout(() => {
        tRandom.classList.remove('muncul');
        if (!selesai) {
            munculkanTikus();
        }
    }, wRandom);

}

function mulai() {
    skor = 0;
    selesai = false;
    papanSkor.textContent = 0;
    pop.play();
    munculkanTikus();
    setTimeout(() => {
        selesai = true;

    }, 10000);
}

function pukul() {
    skor++;
    this.parentNode.classList.remove('muncul');
    this.style.transition = "TOP 0s";
    papanSkor.textContent = skor;
}

tikus.forEach(t => {
    t.addEventListener('click', pukul);
});