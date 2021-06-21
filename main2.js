// seleksi elemen submit

// Simpan data inputan pada variabel


    // masukkan ke Rak 1 yang sudah selesai di baca
    // if
    // masukkan ke Rak 2 yang belum selesai dibaca
    // else

// Pindahkan buku
    // if

    // else

// Hapus Buku

// Cari Buku


class Buku {
    constructor(id, title, author, year, isComplete){
        this.id = id,
        this.title = title,
        this.author = author,
        this.year = year,
        this.isComplete = isComplete;
    }
    
}

const inputBook = document.querySelector("#inputBook");
const inputBookTitle = document.querySelector("#inputBookTitle");
const inputBookAuthor = document.querySelector("#inputBookAuthor");
const inputBookYear = document.querySelector("#inputBookYear");
const inputBookIsComplete = document.querySelectorAll("input[type=checkbox")[0];

inputBook.addEventListener("submit", simpan);

function simpan(e){
    e.preventDefault();
    const idBook = +newDate();
    const textJudulBuku = document.createTextNode(inputBookTitle.value);
    const namaPenulis = document.createTextNode(inputBookAuthor.value);
    const angkaTahun = document.createTextNode(inputBookYear.value);
    const ceklis = document.createTextNode(inputBookIsComplete.value)
    
    let siap = new Buku (idBook, textJudulBuku, namaPenulis, angkaTahun, ceklis);
    console.log(siap);
}


