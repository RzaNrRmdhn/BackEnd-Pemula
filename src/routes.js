const { addBook, showAllBooks, showIDBooks, editBook, deleteBooks, pageNotFound } = require('./handler')

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBook,
    },
    {
        method: 'GET',
        path: '/books',
        handler: showAllBooks
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: showIDBooks
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: editBook
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBooks
    },
    {
        method: '*',
        path: '/{any*}',
        handler: pageNotFound
    }
];

module.exports = routes;