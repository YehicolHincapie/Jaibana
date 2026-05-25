// Array with all the artwork information
const artworks = [
    // Large Artworks (39 x 48 in)
    {
        id: 1,
        title: 'Artwork #1',
        technique: 'Acrylic on canvas',
        size: '39 x 48 in',
        price: '$3,000 USD',
        category: 'grande',
        image: 'img/obra1.webp',
        year: '2024'
    },
    {
        id: 2,
        title: 'Artwork #2',
        technique: 'Acrylic on canvas',
        size: '28.74 x 28.74 in',
        price: '$1,000 USD',
        category: 'pequeño',
        image: 'img/obra2.webp',
        year: '2024'
    },
    {
        id: 3,
        title: 'Artwork #3',
        technique: 'Acrylic on canvas',
        size: '28.74 x 28.74 in',
        price: '$1,000 USD',
        category: 'pequeño',
        image: 'img/obra3.webp',
        year: '2024'
    },
    {
        id: 4,
        title: 'Artwork #4',
        technique: 'Acrylic on canvas',
        size: '39 x 39 in',
        price: '$2,000 USD',
        category: 'mediano',
        image: 'img/obra4.webp',
        year: '2024'
    },
    {
        id: 5,
        title: 'Artwork #5',
        technique: 'Acrylic on canvas',
        size: '28.74 x 28.74 in',
        price: '$1,000 USD',
        category: 'pequeño',
        image: 'img/obra5.webp',
        year: '2024'
    },
    {
        id: 6,
        title: 'Artwork #6',
        technique: 'Acrylic on canvas',
        size: '39 x 39 in',
        price: '$2,000 USD',
        category: 'mediano',
        image: 'img/obra6.webp',
        year: '2024'
    },
    {
        id: 7,
        title: 'Artwork #7',
        technique: 'Acrylic on canvas/iron',
        size: '39 x 39 in',
        price: '$2,200 USD',
        category: 'mediano',
        image: 'img/obra7.webp',
        year: '2024'
    },
    {
        id: 8,
        title: 'Artwork #8',
        technique: 'Acrylic on canvas/iron',
        size: '39 x 39 in',
        price: '$2,200 USD',
        category: 'mediano',
        image: 'img/obra8.webp',
        year: '2024'
    },
    {
        id: 9,
        title: 'Artwork #9',
        technique: 'Acrylic on canvas',
        size: '66.93 x 47.24 in',
        price: '$3,000 USD',
        category: 'grande',
        image: 'img/obra9.webp',
        year: '2024'
    },
    {
        id: 10,
        title: 'Artwork #10',
        technique: 'Acrylic on canvas',
        size: '28.74 x 28.74 in',
        price: '$1,000 USD',
        category: 'pequeño',
        image: 'img/obra10.webp',
        year: '2024'
    },
    {
        id: 11,
        title: 'Artwork #11',
        technique: 'Acrylic on canvas',
        size: '28.74 x 28.74 in',
        price: '$1,000 USD',
        category: 'pequeño',
        image: 'img/obra11.webp',
        year: '2024'
    },
    {
        id: 12,
        title: 'Artwork #12',
        technique: 'Acrylic on canvas',
        size: '66.93 x 47.24 in',
        price: '$3,000 USD',
        category: 'grande',
        image: 'img/obra12.webp',
        year: '2024'
    },
    {
        id: 13,
        title: 'Artwork #13',
        technique: 'Acrylic on canvas',
        size: '39 x 39 in',
        price: '$2,000 USD',
        category: 'mediano',
        image: 'img/obra13.webp',
        year: '2024'
    },
    {
        id: 14,
        title: 'Artwork #14',
        technique: 'Acrylic on canvas',
        size: '39 x 39 in',
        price: '$2,000 USD',
        category: 'mediano',
        image: 'img/obra14.webp',
        year: '2024'
    },
    {
        id: 15,
        title: 'Artwork #15',
        technique: 'Acrylic on canvas',
        size: '28.74 x 28.74 in',
        price: '$1,000 USD',
        category: 'pequeño',
        image: 'img/obra15.webp',
        year: '2024'
    },
    {
        id: 16,
        title: 'Artwork #16',
        technique: 'Acrylic on canvas',
        size: '66.93 x 47.24 in',
        price: '$3,200 USD',
        category: 'grande',
        image: 'img/obra16.webp',
        year: '2024'
    },
    {
        id: 17,
        title: 'Artwork #17',
        technique: 'Acrylic on canvas',
        size: '28.74 x 28.74 in',
        price: '$1,000 USD',
        category: 'pequeño',
        image: 'img/obra17.webp',
        year: '2024'
    },
    {
        id: 18,
        title: 'Artwork #18',
        technique: 'Acrylic on canvas',
        size: '28.74 x 28.74 in',
        price: '$1,000 USD',
        category: 'pequeño',
        image: 'img/obra18.webp',
        year: '2024'
    },
    {
        id: 19,
        title: 'Artwork #19',
        technique: 'Acrylic on canvas',
        size: '28.74 x 28.74 in',
        price: '$1,000 USD',
        category: 'pequeño',
        image: 'img/obra19.webp',
        year: '2024'
    },
    {
        id: 20,
        title: 'Artwork #20',
        technique: 'Acrylic on canvas',
        size: '28.74 x 28.74 in',
        price: '$1,000 USD',
        category: 'pequeño',
        image: 'img/obra20.webp',
        year: '2024'
    },
    {
        id: 21,
        title: 'Artwork #21',
        technique: 'Acrylic on canvas',
        size: '1.22 cm x 1.80 cm',
        price: '$3,300 USD',
        category: 'grande',
        image: 'img/obra21.webp',
        year: '2024'
    },
    {
        id: 22,
        title: 'Artwork #22',
        technique: 'Acrylic on canvas',
        size: '39 x 39 in',
        price: '$2,300 USD',
        category: 'mediano',
        image: 'img/obra22.webp',
        year: '2024'
    },
    {
        id: 23,
        title: 'Artwork #23',
        technique: 'Acrylic on canvas',
        size: '28.74 x 28.74 in',
        price: '$3,400 USD',
        category: 'pequeño',
        image: 'img/obra23.webp',
        year: '2024'
    }
];