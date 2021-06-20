
// Seleksi element
const inputBook = document.querySelector("#inputBook"); // No.1
// No. 2
const rak2 = document.querySelector("#rak2");
const rak1 = document.querySelector("#rak1");
// No.3

//No. 4

const buat = function(){
    
}

// membuat form submit bekerja dengan baik
inputBook.addEventListener("submit", simpan); // No.1

function simpan(e){
    e.preventDefault();

    // membuat elemen baru jika buku selesai dibaca
    // No. 2
    const inputBookIsComplete = document.querySelectorAll("input[type=checkbox")[0];
    
    if(inputBookIsComplete.checked == true){
        // Membuat list artikel buku
        // No.4
        const newArticle = document.createElement('article');
        newArticle.className = "book_item";

                // Membuat list buku
                // No. 5
                const inputBookTitle = document.querySelector("#inputBookTitle");
                const textJudulBuku = document.createTextNode(inputBookTitle.value);
                const judulBuku = document.createElement('h3');
                judulBuku.appendChild(textJudulBuku);

                // No. 6
                const inputBookAuthor = document.querySelector("#inputBookAuthor");
                const namaPenulis = document.createTextNode("Penulis : " + inputBookAuthor.value);
                const penulis = document.createElement('p');
                penulis.appendChild(namaPenulis);

                // No. 7
                const inputBookYear = document.querySelector("#inputBookYear");
                const angkaTahun = document.createTextNode("Tahun : " + inputBookYear.value);
                const tahun = document.createElement('p');
                tahun.appendChild(angkaTahun);

            

        // Menyusun div action
        // No. 8
        const action = document.createElement("div");
        action.className = "action";

                // Membuat button
                // No.9
                const status = document.createElement("button");
                status.className = "green"
                const tulisanStatus = document.createTextNode("Belum Selesai Dibaca")
                status.appendChild(tulisanStatus);

                // No. 10
                const hapus = document.createElement("button");
                hapus.className = "red";
                const tulisanHapus = document.createTextNode("Hapus Buku");
                hapus.appendChild(tulisanHapus);

            // Memasukkan button kedalam div action
            action.appendChild(status);
            action.appendChild(hapus);

            // Memasukkan list buku & div action kedalam elemen artikel
            newArticle.appendChild(judulBuku);
            newArticle.appendChild(penulis);
            newArticle.appendChild(tahun);
            newArticle.appendChild(action);
        // No. 3
        const completeBookshelfList = document.createElement('div');
        completeBookshelfList.className = "book_list";
        // Memasukkan elemen artikel dan div button kedalam div jenis buku
        completeBookshelfList.appendChild(newArticle);
        console.log(completeBookshelfList);
        rak2.appendChild(completeBookshelfList);
    } else {
        // Membuat list artikel buku
        // No.4
        const newArticle = document.createElement('article');
        newArticle.className = "book_item";

                // Membuat list buku
                // No. 5
                const inputBookTitle = document.querySelector("#inputBookTitle");
                const textJudulBuku = document.createTextNode(inputBookTitle.value);
                const judulBuku = document.createElement('h3');
                judulBuku.appendChild(textJudulBuku);

                // No. 6
                const inputBookAuthor = document.querySelector("#inputBookAuthor");
                const namaPenulis = document.createTextNode("Penulis : " + inputBookAuthor.value);
                const penulis = document.createElement('p');
                penulis.appendChild(namaPenulis);

                // No. 7
                const inputBookYear = document.querySelector("#inputBookYear");
                const angkaTahun = document.createTextNode("Tahun : " + inputBookYear.value);
                const tahun = document.createElement('p');
                tahun.appendChild(angkaTahun);

            

        // Menyusun div action
        // No. 8
        const action = document.createElement("div");
        action.className = "action";

                // Membuat button
                // No.9
                const status = document.createElement("button");
                status.className = "green"
                const tulisanStatus = document.createTextNode("Belum Selesai Dibaca")
                status.appendChild(tulisanStatus);

                // No. 10
                const hapus = document.createElement("button");
                hapus.className = "red";
                const tulisanHapus = document.createTextNode("Hapus Buku");
                hapus.appendChild(tulisanHapus);

            // Memasukkan button kedalam div action
            action.appendChild(status);
            action.appendChild(hapus);

            // Memasukkan list buku & div action kedalam elemen artikel
            newArticle.appendChild(judulBuku);
            newArticle.appendChild(penulis);
            newArticle.appendChild(tahun);
            newArticle.appendChild(action);
        const incompleteBookshelfList = document.createElement('div');
        incompleteBookshelfList.className = "book_list";
    
        // Memasukkan elemen artikel dan div button kedalam div jenis buku
        incompleteBookshelfList.appendChild(newArticle);
        console.log(incompleteBookshelfList);
        rak1.appendChild(incompleteBookshelfList);
    }

}

