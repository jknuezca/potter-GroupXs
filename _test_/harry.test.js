const Harry = require('../src/harry');

describe('Harry Potter Books', function() {

    test('a single book should cost 8 EUR', function() {
            const harry = new Harry();
            const number = 1;
            harry.addToBasket(harry.createBook(number));
            expect(harry.checkout()).toBe(8);
        });

    test('5% discount on those two books', function() {
        const harry = new Harry();
        const book = harry.createBook(1);
        const book2 = harry.createBook(2);
        harry.addToBasket(book);
        harry.addToBasket(book2);
        expect(harry.checkout()).toBe(15.2);
    });

    test('3 different books for 10% discount', function() {
        const harry = new Harry();
        const book = harry.createBook(1);
        const book2 = harry.createBook(2);
        const book3 = harry.createBook(3);
        harry.addToBasket(book);
        harry.addToBasket(book2);
        harry.addToBasket(book3);
        expect(harry.checkout()).toBe(21.6);
    });

    test('4 different books for 20% discount', function() {
        const harry = new Harry();
        const book = harry.createBook(1);
        const book2 = harry.createBook(2);
        const book3 = harry.createBook(3);
        const book4 = harry.createBook(4);
        harry.addToBasket(book);
        harry.addToBasket(book2);
        harry.addToBasket(book3);
        harry.addToBasket(book4);
        expect(harry.checkout()).toBe(25.6);
    });

    test('buy all 5, you get a huge 25% discount', function() {
        const harry = new Harry();
        const book = harry.createBook(1);
        const book2 = harry.createBook(2);
        const book3 = harry.createBook(3);
        const book4 = harry.createBook(4);
        const book5 = harry.createBook(5);
        harry.addToBasket(book);
        harry.addToBasket(book2);
        harry.addToBasket(book3);
        harry.addToBasket(book4);
        harry.addToBasket(book5);
        expect(harry.checkout()).toBe(30);
    });

    test('...buying five different books and one duplicate', function() {

        const harry = new Harry();
        const book = harry.createBook(1);
        const book2 = harry.createBook(2);
        const book3 = harry.createBook(3);
        const book4 = harry.createBook(4);
        const book5 = harry.createBook(5);
        harry.addToBasket(book);
        harry.addToBasket(book);
        harry.addToBasket(book2);
        harry.addToBasket(book3);
        harry.addToBasket(book4);
        harry.addToBasket(book5);
        expect(harry.checkout()).toBe(38);

    });

    test('...buying five different books, and four additional same books', function() {

        const harry = new Harry();
        const book = harry.createBook(1);
        const book2 = harry.createBook(2);
        const book3 = harry.createBook(3);
        const book4 = harry.createBook(4);
        const book5 = harry.createBook(5);
        harry.addToBasket(book);
        harry.addToBasket(book);
        harry.addToBasket(book);
        harry.addToBasket(book);
        harry.addToBasket(book);
        harry.addToBasket(book2);
        harry.addToBasket(book3);
        harry.addToBasket(book4);
        harry.addToBasket(book5);
        expect(harry.checkout()).toBe(62);

    });

    test(`example : 
        2 copies of the first book
        2 copies of the second book
        2 copies of the third book
        1 copy of the fourth book
        1 copy of the fifth book = 51.60`, 
    function() {

        const harry = new Harry();
        const book = harry.createBook(1);
        const book2 = harry.createBook(2);
        const book3 = harry.createBook(3);
        const book4 = harry.createBook(4);
        const book5 = harry.createBook(5);

        harry.addToBasket(book);
        harry.addToBasket(book);
        harry.addToBasket(book2);
        harry.addToBasket(book2);
        harry.addToBasket(book3);
        harry.addToBasket(book3);
        harry.addToBasket(book4);
        harry.addToBasket(book5);

        expect(harry.checkout()).toBe(51.60);
    });

});
