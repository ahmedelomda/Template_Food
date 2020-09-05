const card = [
    {img: 'Image/sandwich.jpg', name: 'The Perfect Sandwich, A Real NYC Classic', description: 'Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.'},
    {img: 'Image/steak.jpg', name: 'Let Me Tell You About This Steak', description: 'Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.'},
    {img: 'Image/cherries.jpg', name: 'Cherries, interrupted', description: 'Lorem ipsum text praesent tincidunt ipsum lipsum.What else?'},
    {img: 'Image/wine.jpg', name: 'Once Again, Robust Wine and Vegetable Pasta', description: 'Lorem ipsum text praesent tincidunt ipsum lipsum'},
    {img: 'Image/popsicle.jpg', name: 'All I Need Is a Popsicle', description: 'Lorem ipsum text praesent tincidunt ipsum lipsum.'},
    {img: 'Image/salmon.jpg', name: 'Salmon For Your Skin', description: 'Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.'},
    {img: 'Image/sandwich.jpg', name: 'The Perfect Sandwich, A Real Classic', description: 'Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.'},
    {img: 'Image/croissant.jpg', name: 'Le French', description: 'Lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.'}
];

// localStorage.setItem("card", JSON.stringify(card)); // Saving

const foodStyle = `
    font-size: 2em;
    font-weight: 500;
    color: white;
`;

//------------ Sidebar ---------------
const sidebarArray = [
    'Close Menu',
    'Food',
    'About'
];

const sidebarCollectionStyle = `
    padding: 8px 8px 8px 32px;
    margin-bottom: 30px; 
    text-decoration: none; 
    font-size: 35px; 
    color: black; 
    display: block; 
    transition: 0.3s;
`;
//----------End of Sidebar------------

const semicardStyle = `
    height: 360px;
    width: 100%;
`;

//--------------Pagination------------
const paginationArray = [
    '<<',
    '1',
    '2',
    '3',
    '4',
    '>>'
];

const normalPaginationStyle = `
    padding: 8px 12px;
    text-decoration: none;
    color:black;
`;

const firstPaginationStyle = `
    padding: 8px 16px;
    text-decoration: none;
    background-color: black;
    color:white;
`;
//----------End of Pagination---------

//--------------Paragraph-------------
const paragraphArray = [
    'Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
    'Coded by Omda',
];

const fisrtParagraphStyle = `
    font-size: 20px;
    line-height: 1.5;
    padding-top: 12px;
`;

const secondParagraphStyle =`
    font-size: 20px;
    line-height: 1.5;
`; 
//---------End of Paragraph-----------

//-------------Popular Tags Names-----
const popularTagsNames = [
    'Travel',
    'New York',
    'Dinner',
    'Salmon',
    'France', 
    'Drinks', 
    'Ideas', 
    'Flavors',
    'Cuisine',
    'Chicken',
    'Dressing',
    'Fried',
    'Fish',
    'Duck'
];

const normalPopularTagStyle = `
    display: inline-block;
    padding: 2px 10px;
    font-size: 16px;
    text-align: center;
    color: #fff;
    background-color: #616161;
    margin-bottom: 20px;
    margin-right: 5px;
`;

const firstPopularTagStyle =  `
    display: inline-block;
    padding: 2px 10px;
    font-size: 20px;
    text-align: center;
    color: #fff;
    background-color: #000;
    margin-bottom: 20px;
    margin-right: 5px;
`;
//-----End of Popular Tags Names------