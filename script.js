// script.js
// document.getElementById("pesan").textContent = "Hello World";
// console.log("Hello World");

// Alert dan prompt
// const namaPengguna = prompt("Masukkan nama Anda:", "");
// if (namaPengguna && namaPengguna.trim() !== "") {
//   alert("Halo, " + namaPengguna + "!");
//   document.getElementById("pesan").textContent =
//     "Selamat datang, " + namaPengguna + ".";
// } else {
//   alert("Nama belum diisi.");
// }

// Function dan operasi aritmetika
// function operasiDasar(a, b) {
//   console.log("Penjumlahan:", a + b);
//   console.log("Pengurangan:", a - b);
//   console.log("Perkalian:", a * b);
//   console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
//   console.log("Modulus:", a % b);
// }
// operasiDasar(9, 4);

//Seleksi kondisi if–else
// const inputNilai = prompt("Masukkan nilai (0–100):");
// const nilaiMahasiswa = Number(inputNilai);
// if (
//   inputNilai === null ||
//   inputNilai.trim() === "" ||
//   Number.isNaN(nilaiMahasiswa) ||
//   nilaiMahasiswa < 0 ||
//   nilaiMahasiswa > 100
// ) {
//   alert("Input nilai tidak valid.");
// } else if (nilaiMahasiswa >= 60) {
//   alert("Lulus");
// } else {
//   alert("Belum lulus");
// }

// Seleksi kondisi switch
// const inputPilihan = prompt("Masukkan angka 1–5:");
// switch (inputPilihan) {
//   case "1":
//     alert("Bilangan satu");
//     break;
//   case "2":
//     alert("Bilangan dua");
//     break;
//   case "3":
//     alert("Bilangan tiga");
//     break;
//   case "4":
//     alert("Bilangan empat");
//     break;
//   case "5":
//     alert("Bilangan lima");
//     break;
//   default:
//     alert("Pilihan tidak tersedia");
// }

// Form bilangan genap atau ganjil
function cekBilangan() {
  const input = document.getElementById("bilangan").value;
  const angka = Number(input);
  const hasil = document.getElementById("hasilBilangan");
  if (input.trim() === "" || !Number.isInteger(angka)) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
  } else if (angka % 2 === 0) {
    hasil.textContent = "Bilangan genap";
  } else {
    hasil.textContent = "Bilangan ganjil";
  }
}

// Mengubah warna halaman
function ubahWarnaLatar(warna) {
  document.body.style.backgroundColor = warna;
}

// DOM dan checkbox menu makanan
const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => {
  item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
  let total = 0;
  daftarMenu.forEach((item) => {
    if (item.checked) total += Number(item.value);
  });
  document.getElementById("total").textContent = total.toLocaleString("id-ID");
}

//kalkulator mahasiswa

function hitungNilaiAkhir(tugas, uts, uas) {
  return tugas * 0.3 + uts * 0.3 + uas * 0.4;
}

function tentukanPredikat(nilai) {
  if (nilai >= 85) return "A";
  if (nilai >= 75) return "B";
  if (nilai >= 60) return "C";
  if (nilai >= 50) return "D";
  return "E";
}

function tentukanStatus(nilai) {
  return nilai >= 60 ? "Lulus" : "Belum lulus";
}

function validasiNilai(nilai) {
  return (
    nilai !== "" &&
    Number.isFinite(Number(nilai)) &&
    Number(nilai) >= 0 &&
    Number(nilai) <= 100
  );
}

function tampilkanHasil(nilaiAkhir) {
  document.getElementById("nilaiAkhir").textContent = nilaiAkhir.toFixed(2);

  document.getElementById("predikat").textContent =
    tentukanPredikat(nilaiAkhir);

  const status = document.getElementById("status");
  status.textContent = tentukanStatus(nilaiAkhir);

  status.className = nilaiAkhir >= 60 ? "lulus" : "tidak-lulus";

  document.getElementById("hasil").hidden = false;
}

document
  .getElementById("formNilai")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const tugas = document.getElementById("tugas").value;
    const uts = document.getElementById("uts").value;
    const uas = document.getElementById("uas").value;
    const pesan = document.getElementById("pesan");

    pesan.textContent = "";

    if (!validasiNilai(tugas) || !validasiNilai(uts) || !validasiNilai(uas)) {
      pesan.textContent = "Semua nilai harus berada pada rentang 0 sampai 100.";
      document.getElementById("hasil").hidden = true;
      return;
    }

    const akhir = hitungNilaiAkhir(Number(tugas), Number(uts), Number(uas));

    tampilkanHasil(akhir);
  });

//

// function operasiDasar(a, b) {
//   console.log("Penjumlahan:", a + b);
//   console.log("Pengurangan:", a - b);
//   console.log("Perkalian:", a * b);
//   console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
//   console.log("Modulus:", b !== 0 ? a % b : "Tidak dapat dibagi nol");
// }

// // Meminta input dari pengguna
// const inputA = prompt("Masukkan bilangan pertama:");
// const inputB = prompt("Masukkan bilangan kedua:");

// // Mengonversi input menjadi number
// const a = Number(inputA);
// const b = Number(inputB);

// // Memeriksa input
// if (
//   inputA === null ||
//   inputB === null ||
//   inputA.trim() === "" ||
//   inputB.trim() === "" ||
//   !Number.isFinite(a) ||
//   !Number.isFinite(b)
// ) {
//   alert("Input harus berupa bilangan yang valid!");
// } else {
//   operasiDasar(a, b);
// }

// Perulangan
for (let i = 1; i <= 10; i++) {
  console.log("7 x " + i + " = " + 7 * i);
}

// Buat function cekGenap(angka) yang mengembalikan true jika angka genap.

function cekGenap(angka) {
  return angka % 2 === 0;
}

const input = prompt("Masukkan sebuah angka:");
const angka = Number(input);

if (input === null || input.trim() === "" || !Number.isInteger(angka)) {
  alert("Masukkan bilangan bulat yang valid!");
} else if (cekGenap(angka)) {
  alert(angka + " adalah bilangan genap.");
} else {
  alert(angka + " adalah bilangan ganjil.");
}

// validasi form agar tidak kosong

document.getElementById("formMahasiswa").onsubmit = function (event) {
  event.preventDefault();

  let nama = document.getElementById("nama").value;
  let nim = document.getElementById("nim").value;

  if (nama == "" || nim == "") {
    alert("Nama dan NIM tidak boleh kosong!");
  } else {
    alert("Data berhasil dikirim!");
  }
};

// sembunyikan dan tampilkan
function sembunyikanTeks() {
  document.getElementById("teks").style.display = "none";
}

function tampilkanTeks() {
  document.getElementById("teks").style.display = "block";
}
