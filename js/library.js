
    let bookshelf = document.getElementById('bookshelf');

    let books = [
        {
            title: "book 1",
            author: "Benjamin B. Lahey",
            image: "img/img1.jpg"
        },
        {
            title: "book 2",
            author: "Calvin S. Hall",
            image: "img/img2.jpg"
        },
        {
            title: "book 3",
            author: "Douglas Downing",
            image: "img/img3.jpg"
        },
        {
            title: "book 4",
            author: "Francis A. Carey",
            image: "img/img4.jpg"
        },
        {
            title: "book 5",
            author: "Jearl Walker",
            image: "img/img5.jpg"
        },
        {
            title: "book 6",
            author: "John E. McMurry",
            image: "img/img6.jpg"
        },
        {
            title: "book 7",
            author: "Lee Strobel",
            image: "img/img7.jpg"
        },
        {
            title: "book 8",
            author: "Michael A. Palladino",
            image: "img/img8.jpg"
        },
        {
            title: "book 9",
            author: "Paul A. Tipler, Gene Mosca",
            image: "img/img9.jpg"
        }
    ];

    books.forEach(myFunction);
    function myFunction(value, index, arr) {
        let book = document.createElement('div'),
            img = document.createElement('img'),
            title = document.createElement('p'),
            author = document.createElement('p');

        book.classList.add('book');
        img.classList.add('img');
        img.setAttribute('src', arr[index].image);
        title.classList.add('title');
        author.classList.add('author');

        title.innerHTML = "<span>" + "Title:" + "</span>" + arr[index].title;
        author.innerHTML = "<span>" + "Author:" + "</span>" + arr[index].author;

        book.appendChild(img);
        book.appendChild(title);
        book.appendChild(author);

        bookshelf.appendChild(book);
    }

    function displayForm() {
        let form = document.getElementById('form');
        form.style.display = 'block';
    }

    function validation() {
        let addTitle = document.getElementById('titleName').value,
            addAuthor = document.getElementById('authorName').value,
            input = document.getElementById('imgLink'),
            addImg = input.value;
        if (!((addTitle !== "") && isNaN(addTitle))) {
            document.getElementById('titleError').style.display = 'block';
            document.getElementById('titleError').textContent = 'you must input the title and it must not be a number.';
            return false;
        }
        if (!((addAuthor !== "") && isNaN(addAuthor))) {
            document.getElementById('authorError').style.display = 'block';
            document.getElementById('authorError').textContent = 'you must input the author and it must not be a number.';
            return false;
        }
        if (!isValidUrl(addImg)) {
            document.getElementById('imgError').style.display = 'block';
            document.getElementById('imgError').textContent = 'you must input link of image of book and it must not be valid.';
            return false;
        }
        return addBook();
    }

    function addBook() {
        let addTitle = document.getElementById('titleName').value,
            addAuthor = document.getElementById('authorName').value,
            addImg = document.getElementById('imgLink').value;

        books.push({
            title: addTitle,
            author: addAuthor,
            image: addImg
        });
        bookshelf.innerHTML = '';
        books.forEach(myFunction);
    }

    function cancelForm() {
        let form = document.getElementById('form');
        document.getElementById('titleName').value = '';
        document.getElementById('authorName').value = '';
        document.getElementById('imgLink').value = '';
        document.getElementById('titleError').style.display = 'none';
        document.getElementById('authorError').style.display = 'none';
        document.getElementById('imgError').style.display = 'none';
        form.style.display = 'none';
    }

    function isValidUrl(string) {
        try {
            new URL(string);
        } catch (_) {
            return false;
        }
        return true;
    }

    function downArrow() {
        document.getElementById('arrowImg').src = 'up.png';
    }
    function upArrow() {
        document.getElementById('arrowImg').src = 'down.png';
    }


