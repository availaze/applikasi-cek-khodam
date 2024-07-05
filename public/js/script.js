const { ipcRenderer } = require('electron');
const minimize = document.getElementById('minimize');
const closeApp = document.getElementById('closeApp');
const bar = document.getElementById('bar');
const sidebar = document.getElementById('sidebar');
const input = document.getElementById('nama');
const submit = document.getElementById('submit');
const title = document.getElementById('title');
const khodam = document.getElementById('khodam');


const minimizeWindow = () => ipcRenderer.send('minimize');
const closeWindow = () => ipcRenderer.send('closeApp');

const openBar = () => {
    bar.classList.toggle('bar-active');
    sidebar.classList.toggle('sidebar-active');
}


const cekKhodam = (nama) => {
    nama = nama.trim();

    let namaKhodam = [
        "Harimau Putih",
        "Harimau Sumatra",
        "Harimau Afrika",
        "Nyi Loro Kidul",
        "Bagas Mejikom",
        "Pocong Elpiji",
        "Bloody Mary",
        "Vampir Sumatra",
        "Vampir Ireng",
        "Bagas Ambatron",
        "Udin Gorengan",
        "Bagus Elpiji",
        "Ultraman",
        "Zombie Cikadap",
        "Tidak Ada",
        "Tidak Ada",
        "Tidak Ada",
        "Tidak Ada",
        "Tidak Ada",
        "Tidak Ada",
        "Tidak Ada"
    ];

    // Ambil indeks acak dari namaKhodam
    let randomIndex = Math.floor(Math.random() * namaKhodam.length);

    if (nama !== '') {
        title.innerHTML = nama;
        khodam.innerHTML = namaKhodam[randomIndex];
        input.value = ''; // Kosongkan nilai input
    } else {
        title.innerHTML = "Tuliskan Nama Anda";
        khodam.innerHTML = '???';
    }
};
minimize.addEventListener('click', minimizeWindow);
closeApp.addEventListener('click', closeWindow);
submit.addEventListener('click', () => cekKhodam(input.value));
