// var musik = 'Pesawat Kertas 365 Hari - JKT 48 (Acoustic Version by Sisca) Lirik _ hidup bagaikan pesawat kertas.mp3';

AOS.init({ once: true });

var audio = document.querySelector('.audio');
if (musik) {
  audio.src = musik;
}
function mulai() {
  audio.play();
  document.querySelector('.open').style = 'opacity: 0;';
  document.querySelector('.body').style = 'overflow-y: scroll;';
  setTimeout(function () {
    document.querySelector('.open').style.display = 'none';
  }, 1000);
}
function wa(isi) {
  // window.open('https://api.whatsapp.com/send?text= Makasih ya udah inget ulang tahun aku, di hari spesial ini aku pengin ' + isi);
  window.open('https://zalo.me/6289516234770');
}
async function tanya() {
  var { value: kado } = await swal.fire({ title: 'I love you Chi', input: 'text', showCancelButton: false });
  if (kado) {
    await swal.fire('Kirim ke sini ya Chii');
    wa(kado);
  } else {
    await swal.fire('Jangan dikosongin dong');
    tanya();
  }
}
