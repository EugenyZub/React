import { URL } from "url";

export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    async getResource (url) {
        const res = await fetch(`${this._apiBase}${url}`);
    

        if (!res.ok) {
            throw new Error(`COuld not featch ${URL}, status: ${res.status}`);
        }

        return await res.json();
    };
    getAllCharacters() {
        return this.getResource('/characters?page=5&pageSize=10');
    }
    getCharacter(id) {
        return this.getResource(`/characters/${id}`);
    }

    getAllBooks() {
        return this.getResource('/books');
    }
    getBook(id) {
        return this.getResource(`/books/${id}`);
    }

    getAllHouses() {
        return this.getResource('/houses?page=2&pageSize=10');
    }
    getHouse(id) {
        return this.getResource(`/houses/${id}`);
    }

}

const got = new GotService();
// ПЕРСОНАЖИ
got.getAllCharacters()
    .then(res => {
       res.forEach( item => console.log(item.name));
    });

got.getCharacter(6)
    .then(res => console.log(res));

// КНИГИ
got.getAllBooks()
    .then(res => {
       res.forEach( item => console.log(item.name));
    });

got.getBook(6)
    .then(res => console.log(res));

// ДОМА   
got.getAllHouses()
    .then(res => {
       res.forEach( item => console.log(item.name));
    });

got.getHouse(6)
    .then(res => console.log(res));