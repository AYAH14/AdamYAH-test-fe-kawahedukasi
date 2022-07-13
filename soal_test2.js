const validasi = (nama) => {
  let validasiHuruf = /^[a-zA-Z ]+$/;
  let nama = document.getElementById("nama");
  let input1 = "hallo jesika24 selamat datang!"
  if (nama.value.match(validasiHuruf)) {
     alert("Hallo " + nama.value + "Selamat Datang");
  } else {
     alert("Sistem menolak inputan anda");
     nama.value="";
     nama.focus();
     return false;
  }
}