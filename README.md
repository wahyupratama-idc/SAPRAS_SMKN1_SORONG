# WEBSITE MANAJEMEN SAPRAS SEKOLAH (HTML + JS + SUPABASE)

## ISI FITUR
- Login admin dan petugas dengan pengelolaan basis data Supabase.
- Dashboard ringkasan statistik sarana dan prasarana.
- CRUD inventaris barang (Tambah, Edit, Hapus, dan Lihat data).
- Laporan kerusakan barang lengkap dengan pembaruan status dan tindak lanjut.
- Pencatatan riwayat peminjaman serta pengembalian barang.

## CARA INSTALASI & MENJALANKAN LOKAL
1. Pastikan Anda memiliki browser modern dan teks editor (seperti VS Code).
2. Clone atau ekstrak seluruh folder proyek ini ke direktori lokal komputer Anda.
3. Hubungkan dengan database Supabase:
   - Buat project baru di [Supabase](https://supabase.com).
   - Buat tabel yang dibutuhkan (`users`, `barang`, `laporan_kerusakan`, `peminjaman`).
   - Atur Row Level Security (RLS) dan berikan *Policy* `INSERT` & `SELECT` untuk akses publik/anonim agar registrasi dan login berjalan lancar.
4. Buka file `js/supabase.js` dan masukkan konfigurasi kredensial Anda:
   ```javascript

   UNTUK ADMIN BISA LOGIN DENGAN:
   usr: admin
   pw: admin123
   const SUPABASE_URL = 'https://TRVSZ_ID_ANDA.supabase.co';
   const SUPABASE_ANON_KEY = 'PUBLISHABLE_KEY_ANDA';
