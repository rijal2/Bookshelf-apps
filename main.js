
// Seleksi element
const inputBook = document.querySelector("#inputBook"); // No.1
// No. 2
const inputBookIsComplete = document.querySelector("#inputBookIsComplete");
const rak2 = document.querySelector("#rak2");
const rak1 = document.querySelector("#rak1");
// No.3
const completeBookshelfList = document.createElement('div');
const incompleteBookshelfList = document.createElement('div');

//No. 4
const inputBookTitle = document.querySelector("#inputBookTitle");
const inputBookYear = document.querySelector("#inputBookYear");
const inputBookAuthor = document.querySelector("#inputBookAuthor");
const newArticle = document.createElement('article');

// No.5
const judulBuku = document.createElement('h3');
// No.6
const penulis = document.createElement('p');
// No. 7
const tahun = document.createElement('p');
// No. 8
const action = document.createElement("div");
// No. 9
const status = document.createElement("button");
// No. 10
const hapus = document.createElement("button");

const buat = function(){
    // Membuat element div untuk tiap jenis buku
       

        // Membuat list artikel buku
        // No.4
        newArticle.className = "book_item";

                // Membuat list buku
                // No. 5
                const textJudulBuku = document.createTextNode(inputBookTitle.value);
                judulBuku.appendChild(textJudulBuku);

                // No. 6
                const namaPenulis = document.createTextNode("Penulis : " + inputBookAuthor.value);
                penulis.appendChild(namaPenulis);

                // No. 7
                const angkaTahun = document.createTextNode("Tahun : " + inputBookYear.value);
                tahun.appendChild(angkaTahun);

            // Memasukkan list buku kedalam elemen artikel
            newArticle.appendChild(judulBuku);
            newArticle.appendChild(penulis);
            newArticle.appendChild(tahun);

        // Menyusun div action
        // No. 8
        action.className = "action";

                // Membuat button
                // No.9
                status.className = "green"
                const tulisanStatus = document.createTextNode("Belum Selesai Dibaca")
                status.appendChild(tulisanStatus);

                // No. 10
                hapus.className = "red";
                const tulisanHapus = document.createTextNode("Hapus Buku");
                hapus.appendChild(tulisanHapus);

            // Memasukkan button kedalam div action
            action.appendChild(status);
            action.appendChild(hapus);

            // Memasukkan div action ke dalam artikel
            newArticle.appendChild(action);

        
}


// membuat form submit bekerja dengan baik
inputBook.addEventListener("submit", simpan); // No.1

function simpan(e){
    e.preventDefault();

    // membuat elemen baru jika buku selesai dibaca
    // No. 2
    if(inputBookIsComplete){
        buat();
        // No. 3
        completeBookshelfList.className = "book_list";
        // Memasukkan elemen artikel dan div button kedalam div jenis buku
        completeBookshelfList.appendChild(newArticle);
        console.log(completeBookshelfList);
        rak2.appendChild(completeBookshelfList);
    } else {
        buat();
        // No. 3
        incompleteBookshelfList.className = "book_list";
        // Memasukkan elemen artikel dan div button kedalam div jenis buku
        incompleteBookshelfList.appendChild(newArticle);
        console.log(completeBookshelfList);
        rak1.appendChild(completeBookshelfList);
    }

}

