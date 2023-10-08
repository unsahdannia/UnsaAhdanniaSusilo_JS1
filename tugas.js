//Unsa Ahdannia Susilo - WebC - Pagi

//if,else,nested if
let tinggi = 155;

if (tinggi >= 190) {
  console.log("Tinggi Anda adalah Sangat Tinggi");
} else if (tinggi >= 170) {
  console.log("Tinggi Anda adalah Cukup");
} else if (tinggi >= 160) {
  console.log("Tinggi Anda adalah Kurang Tinggi");
} else {
  console.log("Tinggi Anda adalah Pendek");
}

//switchcase
let hari = "Anggur";

switch (hari) {
  case "Apel":
    console.log("Buah berwarna merah");
    break;
  case "Pisang":
  case "Durian":
    console.log("Buah berwarna kuning");
    break;
  default:
    console.log("Buah tidak valid");
}

//for statement
for (let unsa = 5; unsa<= 10; unsa++) {
  console.log("Unsa ke-" + unsa);
}

//while
let angka = 3;

while (angka <= 9) {
  console.log("Nilai angka: " + angka);
  angka++;
}

//dowhile
let nilai = 2;

do {
  console.log("Nilai ke - " + nilai);
  nilai++;
} while (nilai <= 8);


//function
function kalikan(a, b) {
  return a * b;
}

let hasil = kalikan(5, 3);
console.log("Hasil perkalian =" + hasil);
