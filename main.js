// membuat form submit bekerja dengan baik
const inputBook = document.querySelector("#inputBook");

inputBook.addEventListener("submit", simpan);

function simpan(e){
    e.preventDefault();

    // membuat elemen baru jika buku selesai dibaca
    const inputBookIsComplete = document.querySelector("#inputBookIsComplete");
    if(inputBookIsComplete){
        const inputBookTitle = document.querySelector("#inputBookTitle");
        const inputBookYear = document.querySelector("#inputBookYear");
        const inputBookAuthor = document.querySelector("#inputBookAuthor");

        // Membuat element div untuk tiap jenis buku
        const completeBookshelfList = document.createElement('div');
        completeBookshelfList.className = "book_list";

        // Membuat list artikel buku
        const newArticle = document.createElement('article');
        newArticle.className = "book_item";

                // Membuat list buku
                const judulBuku = document.createElement('h3');
                const textJudulBuku = document.createTextNode(inputBookTitle);
                judulBuku.appendChild(textJudulBuku);

                const penulis = document.createElement('p');
                const namaPenulis = document.createTextNode(inputBookAuthor);
                penulis.appendChild(namaPenulis);

                const tahun = document.createElement('p');
                const angkaTahun = document.createTextNode(inputBookYear);
                tahun.appendChild(angkaTahun);

            // Memasukkan list buku kedalam elemen artikel
            newArticle.appendChild(judulBuku);
            newArticle.appendChild(penulis);
            newArticle.appendChild(tahun);

        // Menyusun div action
        const action = document.createElement("div");
        action.className = "action";

                // Membuat button
                const status = document.createElement("button");
                status.className = "green"
                const tulisanStatus = document.createTextNode("Belum Selesai Dibaca")
                status.appendChild(tulisanStatus);

                const hapus = document.createElement("button");
                hapus.className = "red";
                const tulisanHapus = document.createTextNode("Hapus Buku");
                hapus.appendChild(tulisanHapus);

            // Memasukkan button kedalam div action
            action.appendChild(status);
            action.appendChild(hapus);

        // Memasukkan elemen artikel dan div button kedalam div jenis buku
        completeBookshelfList.appendChild(newArticle);
        completeBookshelfList.appendChild(action);

        console.log(completeBookshelfList);
    }

}

