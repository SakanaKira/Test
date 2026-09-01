const nama = "akana akira";
let usia = 22;

function generateBiodata() {
    if (usia <= 30) {
        // INI ADALAH KONDISI PERTAMA
        console.log('anda dewasa');
    } else {
        // INI ADALAH JIKA KONDISI TIDAK TERPENUHI
        console.log('anda anak-anak')
    }
    console.log(`nama saya adalah ${nama} dan usia saya ${usia} tahun`); 
}

console.log(nama);
console.log(usia);

generateBiodata();