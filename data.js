// Array con toda la información de las obras de arte
const artworks = [
    // Obras Grandes (39 x 48 in)
    {
        id: 1,
        title: 'Obra de Arte #1',
        technique: 'Acrílico sobre lienzo',
        size: '39 x 48 in',
        price: '$3.000 USD',
        category: 'grande',
        image: 'img/obra1.webp',
        year: '2024'
    },
    {
        id: 2,
        title: 'Obra de Arte #2',
        technique: 'Acrílico sobre lienzo',
        size: '28.74 x 28.74 in',
        price: '$1.000 USD',
        category: 'pequeño',
        image: 'img/obra2.webp',
        year: '2024'
    },
    {
        id: 3,
        title: 'Obra de Arte #3',
        technique: 'Acrílico sobre lienzo',
        size: '28.74 x 28.74 in',
        price: '$1.000 USD',
        category: 'pequeño',
        image: 'img/obra3.webp',
        year: '2024'
    },
    {
        id: 4,
        title: 'Obra de Arte #4',
        technique: 'Acrílico sobre lienzo',
        size: '39 x 39 in',
        price: '$2.000 USD',
        category: 'mediano',
        image: 'img/obra4.webp',
        year: '2024'
    },
    {
        id: 5,
        title: 'Obra de Arte #5',
        technique: 'Acrílico sobre lienzo',
        size: '28.74 x 28.74 in',
        price: '$1.000 USD',
        category: 'pequeño',
        image: 'img/obra5.webp',
        year: '2024'
    },
    {
        id: 6,
        title: 'Obra de Arte #6',
        technique: 'Acrílico sobre lienzo',
        size: '39 x 39 in',
        price: '$2.000 USD',
        category: 'mediano',
        image: 'img/obra6.webp',
        year: '2024'
    },
    {
        id: 7,
        title: 'Obra de Arte #7',
        technique: 'Acrílico sobre lienzo/hierro',
        size: '39 x 39 in',
        price: '$2.200 USD',
        category: 'mediano',
        image: 'img/obra7.webp',
        year: '2024'
    },
    {
        id: 8,
        title: 'Obra de Arte #8',
        technique: 'Acrílico sobre lienzo/hierro',
        size: '39 x 39 in',
        price: '$2.200 USD',
        category: 'mediano',
        image: 'img/obra8.webp',
        year: '2024'
    },
    {
        id: 9,
        title: 'Obra de Arte #9',
        technique: 'Acrílico sobre lienzo',
        size: '66.93 x 47.24 in',
        price: '$3.000 USD',
        category: 'grande',
        image: 'img/obra9.webp',
        year: '2024'
    },
    {
        id: 10,
        title: 'Obra de Arte #10',
        technique: 'Acrílico sobre lienzo',
        size: '28.74 x 28.74 in',
        price: '$1.000 USD',
        category: 'pequeño',
        image: 'img/obra10.webp',
        year: '2024'
    },
    {
        id: 11,
        title: 'Obra de Arte #11',
        technique: 'Acrílico sobre lienzo',
        size: '28.74 x 28.74 in',
        price: '$1.000 USD',
        category: 'pequeño',
        image: 'img/obra11.webp',
        year: '2024'
    },
    {
        id: 12,
        title: 'Obra de Arte #12',
        technique: 'Acrílico sobre lienzo',
        size: '66.93 x 47.24 in',
        price: '$3.000 USD',
        category: 'grande',
        image: 'img/obra12.webp',
        year: '2024'
    },
    {
        id: 13,
        title: 'Obra de Arte #13',
        technique: 'Acrílico sobre lienzo',
        size: '39 x 39 in',
        price: '$2.000 USD',
        category: 'mediano',
        image: 'img/obra13.webp',
        year: '2024'
    },
    {
        id: 14,
        title: 'Obra de Arte #14',
        technique: 'Acrílico sobre lienzo',
        size: '39 x 39 in',
        price: '$2.000 USD',
        category: 'mediano',
        image: 'img/obra14.webp',
        year: '2024'
    },
    {
        id: 15,
        title: 'Obra de Arte #15',
        technique: 'Acrílico sobre lienzo',
        size: '28.74 x 28.74 in',
        price: '$1,000 USD',
        category: 'pequeño',
        image: 'img/obra15.webp',
        year: '2024'
    },
    {
        id: 16,
        title: 'Obra de Arte #16',
        technique: 'Acrílico sobre lienzo',
        size: '66.93 x 47.24 in',
        price: '$3.200 USD',
        category: 'grande',
        image: 'img/obra16.webp',
        year: '2024'
    },
    {
        id: 17,
        title: 'Obra de Arte #17',
        technique: 'Acrílico sobre lienzo',
        size: '28.74 x 28.74 in',
        price: '$1.000 USD',
        category: 'pequeño',
        image: 'img/obra17.webp',
        year: '2024'
    },
    {
        id: 18,
        title: 'Obra de Arte #18',
        technique: 'Acrílico sobre lienzo',
        size: '28.74 x 28.74 in',
        price: '$1.000 USD',
        category: 'pequeño',
        image: 'img/obra18.webp',
        year: '2024'
    },
    {
        id: 19,
        title: 'Obra de Arte #19',
        technique: 'Acrílico sobre lienzo',
        size: '28.74 x 28.74 in',
        price: '$1.000 USD',
        category: 'pequeño',
        image: 'img/obra19.webp',
        year: '2024'
    },
    {
        id: 20,
        title: 'Obra de Arte #20',
        technique: 'Acrílico sobre lienzo',
        size: '28.74 x 28.74 in',
        price: '$1.000 USD',
        category: 'pequeño',
        image: 'img/obra20.webp',
        year: '2024'
    },
    {
        id: 21,
        title: 'Obra de Arte #21',
        technique: 'Acrílico sobre lienzo',
        size: '1.22cm x 1.80 cm',
        price: '$3.300 USD',
        category: 'grande',
        image: 'img/obra21.webp',
        year: '2024'
    },
    {
        id: 22,
        title: 'Obra de Arte #22',
        technique: 'Acrílico sobre lienzo',
        size: '39 x 39 in',
        price: '$2.300 USD',
        category: 'mediano',
        image: 'img/obra22.webp',
        year: '2024'
    },
    {
        id: 23,
        title: 'Obra de Arte #23',
        technique: 'Acrílico sobre lienzo',
        size: '28.74 x 28.74 in',
        price: '$3.400 USD',
        category: 'pequeño',
        image: 'img/obra23.webp',
        year: '2024'
    }
];