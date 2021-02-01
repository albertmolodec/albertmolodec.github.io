module.exports = {
  wishlist: {
    id: 'apppJBdNlpiff8yfq',
    table: {
      giftIdeas: 'Gift Ideas',
      recipients: 'Recipients',
    },
    fields: ['Item', 'URL', 'Done', 'Own'],
    sort: [
      { field: 'Done', direction: 'asc' },
      { field: 'Own', direction: 'asc' },
    ],
  },
  bookshelf: {
    id: 'appleCVB5WGCpICcX',
    table: {
      books: 'Books',
      authors: 'Authors',
    },
  },
  podcasts: {
    id: 'appLVB5hLNVxsSvP6',
    table: {
      podcasts: 'Podcasts',
      studios: 'Studios',
    },
  },
}