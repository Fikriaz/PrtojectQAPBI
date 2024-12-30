# Web Automation Testing untuk Jubelio

Proyek ini dibuat dalam rangka penyelesaian tugas akhir Project Based Internship Rakamin Academy X Jubelio

## Fitur Utama

- Pengujian login dengan kredensial yang valid.
- Pengujian kasus negatif seperti:
  - Email kosong.
  - Format email tidak valid.
  - Password kosong.
  - Kombinasi skenario email dan password yang tidak valid.
  - Password terlalu pendek.
- Rekaman otomatis saat menjalankan pengujian untuk dokumentasi evidence.

## Persyaratan

1. **Node.js** versi terbaru.
2. **Google Chrome** versi terbaru.
3. **ChromeDriver** yang kompatibel dengan versi Google Chrome Anda.
4. **Selenium WebDriver**.
5. Paket tambahan yang dibutuhkan:
   - `selenium-webdriver`
   - `node-screen-recorder`

## Instalasi

1. Clone repository ini:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Cara Menjalankan

1. Pastikan ChromeDriver telah terkonfigurasi dengan benar di PATH sistem Anda.
2. Jalankan skrip pengujian:
   ```bash
   node index.js
   ```

## Struktur Proyek

```plaintext
|-- index.js            # File utama untuk menjalankan pengujian
|-- package.json        # Konfigurasi Node.js dan dependencies
|-- README.md           # Dokumentasi proyek
```

## Hasil Pengujian

| No  | Test Case                                      | Status  |
|-----|-----------------------------------------------|---------|
| 1   | Email dan Password kosong                     | Passed  |
| 2   | Format email tidak valid                      | Passed  |
| 3   | Login dengan Password kosong                  | Passed  |
| 4   | Login dengan Email kosong                     | Passed  |
| 5   | Password terlalu pendek                       | Passed  |
| 6   | Login dengan kredensial valid                 | Passed  |



