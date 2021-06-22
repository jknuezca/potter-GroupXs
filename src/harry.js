class Harry {
    constructor() {
      this.basket = [];
    }
  
      addToBasket(book) {
        this.basket.push(book);
      }
  
      checkout() {
        let bookCollection = [];
  
        for (let i = 0; i < 5; i++) {
          const number = i + 1;
          const books = getBooksWithNumber(number, this.basket);
          bookCollection.push(books);
        }
  
        let gTotal = 0;
        const size = getLongestArrayLength(bookCollection);
  
        for (let x = 0; x < size; x++) {
          let totalBooks = 0;
  
          for (let y = 0; y < bookCollection.length; y++) {
            if (bookCollection[y][x]) {
              totalBooks++;
            }
          }
  
          let cost = totalBooks * 8;
          let discount = 0;
  
          switch (totalBooks) {
            case 2:
              discount = (cost / 100) * 5;
              cost = cost - discount;
              break;
            case 3:
              discount = (cost / 100) * 10;
              cost = cost - discount;
              break;
            case 4:
              discount = (cost / 100) * 20;
              cost = cost - discount;
              break;
            case 5:
              discount = (cost / 100) * 25;
              cost = cost - discount;
              break;
          }
  
          gTotal += cost;
        }
  
        return Number(gTotal.toFixed(2));
      }
      
      createBook(number) {
        return {
          number,
        };
      }
    }
  
    function getBooksWithNumber(number, books) {
      return books.filter((book) => book.number === number);
    }
  
    function getLongestArrayLength(bookCollection) {
      let size = 0;
      bookCollection.forEach(function (books) {
        if (books.length > size) {
          size = books.length;
        }
      });
      return size;
    }
  
  module.exports = Harry;
  