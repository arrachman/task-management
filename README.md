# Nama Aplikasi Anda (Ganti dengan Nama Sebenarnya)

Aplikasi web sederhana yang dibangun menggunakan React.js dengan fitur Task Management dan Toko Online.

## Daftar Isi

- [Panduan Instalasi](#panduan-instalasi)
- [Dokumentasi Aplikasi](#dokumentasi-aplikasi)
  - [Task Management](#task-management)
  - [Toko Online (Halaman Produk)](#toko-online-halaman-produk)
  - [Autentikasi (Login & Registrasi)](#autentikasi-login--registrasi)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Kontribusi](#kontribusi)
- [Lisensi](#lisensi)

## Panduan Instalasi

Berikut adalah langkah-langkah untuk menjalankan aplikasi ini di lingkungan pengembangan Anda:

1.  **Pastikan Node.js dan npm (atau yarn) terinstal di sistem Anda.** Anda dapat memverifikasinya dengan menjalankan perintah berikut di terminal:
    ```bash
    node -v
    npm -v
    # atau
    yarn --version
    ```
    Jika salah satu perintah tidak dikenali, Anda perlu menginstal Node.js dari [https://nodejs.org/](https://nodejs.org/).

2.  **Clone repositori proyek ini** (jika Anda belum melakukannya). Ganti `<URL_Repositori>` dengan URL repositori GitHub atau platform lainnya:
    ```bash
    git clone <URL_Repositori>
    cd <Nama_Proyek>
    ```
    Ganti `<Nama_Proyek>` dengan nama folder proyek Anda (misalnya, `test-dot-fe`).

3.  **Instal dependensi proyek.** Di dalam direktori proyek, jalankan salah satu perintah berikut tergantung pada *package manager* yang Anda gunakan:
    ```bash
    npm install
    # atau
    yarn install
    ```
    Perintah ini akan mengunduh semua *library* dan *package* yang dibutuhkan oleh aplikasi.

4.  **Jalankan aplikasi dalam mode pengembangan.** Setelah dependensi terinstal, jalankan perintah berikut:
    ```bash
    npm start
    # atau
    yarn start
    ```
    Ini akan memulai *development server* dan biasanya secara otomatis membuka aplikasi di *browser* Anda (biasanya di `http://localhost:3000`).

## Dokumentasi Aplikasi

### Task Management

Halaman Task Management memungkinkan pengguna untuk mengelola daftar tugas mereka. Fitur-fitur utama meliputi:

* **Menambah Tugas Baru:** Pengguna dapat memasukkan teks tugas baru dan menambahkannya ke daftar.
* **Menandai Tugas Selesai:** Setiap tugas memiliki *checkbox* yang dapat dicentang untuk menandai tugas sebagai selesai atau belum selesai. Tugas yang selesai akan dipindahkan ke bagian "Tugas Selesai".
* **Menghapus Tugas:** Setiap tugas memiliki tombol "Hapus" yang memungkinkan pengguna untuk menghapus tugas dari daftar.
* **Tampilan Tugas:** Tugas dibagi menjadi dua bagian: "Tugas Belum Selesai" dan "Tugas Selesai" untuk memudahkan pengelolaan.

### Toko Online (Halaman Produk)

Halaman Daftar Produk menampilkan daftar produk yang tersedia. Fitur-fitur utama meliputi:

* **Melihat Daftar Produk:** Pengguna dapat melihat daftar produk dalam format *grid*. Setiap produk menampilkan informasi dasar seperti nama dan harga (saat ini data produk bersifat statis atau *dummy*).
* **Melihat Detail Produk:** Tombol "Lihat Detail" (saat ini belum diimplementasikan sepenuhnya) akan mengarahkan pengguna ke halaman detail produk.
* **Menambah ke Keranjang:** Tombol "Tambah ke Keranjang" (saat ini belum diimplementasikan sepenuhnya) memungkinkan pengguna untuk menambahkan produk ke keranjang belanja.

### Autentikasi (Login & Registrasi)

Fitur autentikasi memungkinkan pengguna untuk membuat akun dan masuk ke aplikasi.

* **Registrasi:** Pengguna dapat mengisi formulir pendaftaran dengan nama lengkap, email, dan kata sandi untuk membuat akun baru. Setelah pendaftaran berhasil (simulasi di sisi *client*), informasi pengguna akan disimpan dalam sesi *browser*.
* **Login:** Pengguna dapat memasukkan *username* atau email dan kata sandi untuk masuk ke aplikasi. Jika kredensial cocok (simulasi dengan *username* "testuser" dan *password* "password"), pengguna akan dianggap berhasil login dan informasi sesi akan disimpan.
* **Sesi:** Informasi pengguna yang login disimpan dalam `localStorage` sehingga sesi akan tetap ada meskipun halaman di-refresh.
* **Logout:** Pengguna dapat mengklik tombol "Logout" di *navbar* untuk menghapus informasi sesi dan kembali ke halaman login.

## Teknologi yang Digunakan

Aplikasi ini dibangun menggunakan teknologi berikut:

* **React.js:** *Library* JavaScript untuk membangun antarmuka pengguna.
* **TypeScript:** *Superset* dari JavaScript yang menambahkan *static typing*.
* **React Router DOM:** Untuk *routing* dan navigasi antar halaman.
* **AdminLTE:** Tema UI berbasis Bootstrap untuk tata letak dan *styling* (sebagian).
* **npm** atau **yarn:** *Package manager* untuk mengelola dependensi.
* **Font Awesome:** Untuk ikon-ikon UI.

## Kontribusi

Jika Anda ingin berkontribusi pada proyek ini, silakan ikuti langkah-langkah berikut:

1.  *Fork* repositori ini.
2.  Buat *branch* untuk fitur atau perbaikan Anda (`git checkout -b fitur-baru`).
3.  Lakukan perubahan dan *commit* perubahan Anda (`git commit -am 'Tambahkan fitur baru'`).
4.  *Push* ke *branch* Anda (`git push origin fitur-baru`).
5.  Buat *Pull Request*.

## Lisensi

[MIT](https://opensource.org/licenses/MIT) (Anda dapat mengganti dengan lisensi yang sesuai dengan proyek Anda).