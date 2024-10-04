document.addEventListener('DOMContentLoaded', function() {
    // Mengatur loading
    function hideLoading() {
        document.body.classList.add('loaded'); // Menambahkan kelas 'loaded' ke body
    }
    
    setTimeout(hideLoading, 500); // Menjalankan hideLoading setelah 1,5 detik
});


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

