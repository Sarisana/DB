window.addEventListener("scroll", function() {
    // Mendapatkan posisi scroll saat ini
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Memeriksa jika scroll mencapai bagian bawah halaman
    if (scrollPosition >= documentHeight) {
        document.getElementById("scrollToTopPopup").style.display = "block"; // Tampilkan popup
    } else {
        document.getElementById("scrollToTopPopup").style.display = "none"; // Sembunyikan popup
    }
});

// Mengembalikan ke atas saat popup diklik
document.getElementById("scrollToTopPopup").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Efek smooth saat scroll
    });
});

function sendToWhatsApp() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const whatsappNumber = '1234567890'; // Ganti dengan nomor WhatsApp Anda
    const whatsappMessage = `Nama: ${name}\nEmail: ${email}\nPesan: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    const whatsappUrl = `https://wa.me/${+6281353791264}?text=${encodedMessage}`;

    // Arahkan pengguna ke WhatsApp
    window.open(whatsappUrl, '_blank');
}


document.addEventListener('DOMContentLoaded', function() {
    // Mengatur loading
    function hideLoading() {
        document.body.classList.add('loaded'); // Menambahkan kelas 'loaded' ke body
    }
    
    setTimeout(hideLoading, 500); // Menjalankan hideLoading setelah 1,5 detik
});

