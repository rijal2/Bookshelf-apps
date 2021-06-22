// seleksi elemen submit
const rakBuku = [];
const inputBook = document.querySelector("#inputBook");
const inputBookTitle = document.querySelector("#inputBookTitle");
const inputBookAuthor = document.querySelector("#inputBookAuthor");
const inputBookYear = document.querySelector("#inputBookYear");
const inputBookIsComplete = document.getElementById("inputBookIsComplete");


// Simpan data inputan pada variabel
inputBook.addEventListener("submit", simpan);
function simpan (e){
    e.preventDefault();
        const idBook = Date.now();
        // const textJudulBuku = document.createTextNode(inputBookTitle.textContent);
        // const namaPenulis = document.createTextNode(inputBookAuthor.value);
        // const angkaTahun = document.createTextNode(inputBookYear.value);
        
        // console.log(textJudulBuku)
        const tampung = {
            id : idBook,
            title : inputBookTitle.value,
            author : inputBookAuthor.value,
            year : parseInt(inputBookYear.value),
            isComplete : inputBookIsComplete.checked,  // tambahan methode .checked membuat checklist box bisa diketahui nilainya ketika di centang
        } 
    
    const confirmSimpan = confirm(`Apakah anda yakin ingin menambahkan buku dengan \nJudul : ${inputBookTitle.value}\nPenulis : ${inputBookAuthor.value}\nTahun : ${parseInt(inputBookYear.value)}`);
    if(confirmSimpan){
        rakBuku.push(tampung);
    
    } 
    inputBookTitle.value = "";
    inputBookAuthor.value = "";
    inputBookYear.value = "";
    inputBookIsComplete.checked = false;
    // console.log(rakBuku)
   
}

    // Telusur status buku
    const finished = rakBuku.filter(m => m.isComplete = true)
    console.log(finished)
    // masukkan ke Rak 1 yang sudah selesai di baca
    // if
    // masukkan ke Rak 2 yang belum selesai dibaca
    // else

// Pindahkan buku
    // if

    // else

// Hapus Buku

// Cari Buku

