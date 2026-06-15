const btnMau = document.getElementById('btn-mau');
const btnEngga = document.getElementById('btn-engga');
const question = document.getElementById('question');
const gifImage = document.getElementById('gif-image');

// Variabel untuk menyimpan ukuran font awal tombol "Mau" (dalam rem)
let currentSize = 1;

// List teks penolakan kocak/imut saat dia klik "Engga"
const texts = [
    "Yakin engga? 🥺",
    "Pikir-pikir dulu dong... 😢",
    "Ih jahat banget! 😭",
    "Gak ada pilihan lain pokoknya! 😡",
    "Harus MAU! titik. 💖"
];
let textIndex = 0;

btnEngga.addEventListener('click', () => {
    // 1. Perbesar tombol "Mau"
    currentSize += 0.5; // Menambah ukuran font setiap diklik
    btnMau.style.fontSize = `${currentSize}rem`;
    btnMau.style.padding = `${12 + (currentSize * 2)}px ${25 + (currentSize * 5)}px`;

    // 2. Ubah teks pertanyaan jadi makin maksa imut
    if (textIndex < texts.length) {
        question.innerText = texts[textIndex];
        textIndex++;
    } else {
        question.innerText = "Gak bisa, kamu harus jadi pacar aku! 😤💕";
    }

    // 3. Ganti GIF jadi ekspresi sedih
    gifImage.src = "https://media.tenor.com/u79a9wT9V3gAAAAi/pentol.gif"; 
});

// Aksi ketika tombol "Mau" akhirnya diklik
btnMau.addEventListener('click', () => {
    question.innerText = "YAYYY! I Love You More! 🥳 tracking status: Berpacaran 💖✨";
    gifImage.src = "https://media.tenor.com/g9vN64eD_w8AAAAi/milk-and-mocha.gif"; // Ganti jadi GIF senang/pelukan
    
    // Sembunyikan tombol setelah sukses
    btnMau.style.display = 'none';
    btnEngga.style.display = 'none';
});