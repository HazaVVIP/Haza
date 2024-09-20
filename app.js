// Mengambil data dari URL atau form sebelumnya
const urlParams = new URLSearchParams(window.location.search);
const namaUser = urlParams.get('nama') || 'Pengguna';

// Daftar data acak
const ras = ['Manusia Kadal', 'Orc', 'Elf', 'Manusia Serigala', 'Naga'];
const peran = ['Pedagang', 'Prajurit', 'Penyihir', 'Pemburu', 'Petualang'];

const stats = {
    kekuatan: Math.floor(Math.random() * 100),
    kesehatan: Math.floor(Math.random() * 100),
    kelincahan: Math.floor(Math.random() * 100),
    dimana: Math.floor(Math.random() * 20)
};

const keterampilan = [
    'Keahlian Logistik (Peringkat E)',
    'Manajemen Inventaris (Peringkat S)',
    'Rahasia Dagang (Peringkat F)',
    'Tawar-menawar (Peringkat S)',
    'Akumulasi Kekayaan (Peringkat E)'
];

const judul = [
    'Juru Selamat Kerajaan (Peringkat S)',
    'Raja Ahli Nujum (Peringkat A)',
    'Pedagang Terbaik (Peringkat B)'
];

// Fungsi untuk mendapatkan item acak dari array
function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Mengisi data ke dalam halaman HTML
document.getElementById('namaUser').textContent = namaUser;
document.getElementById('ras').textContent = getRandomItem(ras);
document.getElementById('peran').textContent = getRandomItem(peran);
document.getElementById('kekuatan').textContent = stats.kekuatan;
document.getElementById('kesehatan').textContent = stats.kesehatan;
document.getElementById('kelincahan').textContent = stats.kelincahan;
document.getElementById('dimana').textContent = stats.dimana;

// Menampilkan keterampilan acak (maksimal 3)
const keterampilanList = document.getElementById('keterampilan');
for (let i = 0; i < 3; i++) {
    const li = document.createElement('li');
    li.textContent = getRandomItem(keterampilan);
    keterampilanList.appendChild(li);
}

// Menampilkan judul acak (maksimal 2)
const judulList = document.getElementById('judul');
for (let i = 0; i < 2; i++) {
    const li = document.createElement('li');
    li.textContent = getRandomItem(judul);
    judulList.appendChild(li);
}
