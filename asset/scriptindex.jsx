document.addEventListener("DOMContentLoaded", function() {
    // Mengambil testimoni yang ada dari Local Storage
    const testimoniList = JSON.parse(localStorage.getItem("testimoniList")) || [];

    // Menampilkan testimoni yang ada di halaman (hanya tiga terbaru)
    displayRecentTestimonials(testimoniList);

    // Menambahkan event listener pada form
    document.getElementById("testimoni-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Mencegah reload halaman setelah submit

        // Ambil nilai input
        var nama = document.getElementById("nama").value;
        var testimoni = document.getElementById("testimoni-input").value;

        // Buat objek testimoni
        const newTestimoni = {
            nama: nama,
            isi: testimoni
        };

        // Tambahkan testimoni baru ke daftar
        testimoniList.push(newTestimoni);
        
        // Simpan kembali ke Local Storage
        localStorage.setItem("testimoniList", JSON.stringify(testimoniList));

        // Hanya simpan 3 testimoni terbaru
        if (testimoniList.length > 3) {
            testimoniList.shift(); // Menghapus testimoni paling awal
        }

        // Tampilkan testimoni terbaru
        displayRecentTestimonials(testimoniList);

        // Reset form setelah submit
        document.getElementById("testimoni-form").reset();
    });

    function displayRecentTestimonials(testimoniList) {
        // Kosongkan daftar testimoni sebelum menampilkannya lagi
        document.getElementById("testimoni-list").innerHTML = "";
        
        // Menampilkan hanya tiga testimoni terbaru
        const recentTestimonials = testimoniList.slice(-3);
        recentTestimonials.forEach(function(testimoni) {
            addTestimoniToDOM(testimoni.nama, testimoni.isi);
        });
    }

    function addTestimoniToDOM(nama, testimoni) {
        // Buat elemen baru untuk testimoni
        var newTestimoniElement = document.createElement("div");
        newTestimoniElement.classList.add("testimoni-item");
        newTestimoniElement.innerHTML = `<p>"${testimoni}" - ${nama}</p>`;
        
        // Tambahkan testimoni baru ke daftar
        document.getElementById("testimoni-list").appendChild(newTestimoniElement);
    }
});

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