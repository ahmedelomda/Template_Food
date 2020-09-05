const body = document.getElementsByTagName('body')[0];
body.style.margin = '0';

const scriptLocalization = document.getElementsByTagName('script')[0];

//------------Multiple Attributes----------
function setAttributes(el, attrs) {
    for(var key in attrs) {              //list of associative array keys, used to store key-value pairs
        el.setAttribute(key, attrs[key]);
     } 
 } 
 //------------End of Function-------------
//--------------------------------------Header--------------------------------------
const header = document.createElement('header');
header.style.cssText = `
    width: 100%; 
    background-color: #9e9e9e4d; 
    position: sticky;
    top: 0;
`;

const nav = document.createElement('div');
const ul = document.createElement('ul');
ul.style.cssText = `
    display: flex; 
    list-style-type: none; 
    justify-content: space-between;
`;

const icon = document.createElement('li');
icon.style.marginTop = '18px';
const btn = document.createElement('button');
btn.setAttribute('onclick' , 'openNav()'); 
btn.innerText = '☰';
btn.style.cssText = `
    border: 0px; 
    background-color: #d6d6d3; 
    font-size: 22px; 
    cursor: pointer
`;

icon.appendChild(btn);
const food = document.createElement('li');
const myfood = document.createElement('h2');
myfood.innerText = 'My Food';
myfood.style.cssText = foodStyle;

food.appendChild(myfood);
const mail = document.createElement('li');
const email = document.createElement('h2');
email.innerText = 'Mail';
email.style.cssText = foodStyle;

mail.appendChild(email);
ul.innerHTML += icon.outerHTML + food.outerHTML + mail.outerHTML;  // append multiple elements in one element
nav.appendChild(ul);
header.appendChild(nav);
body.insertBefore(header, scriptLocalization);               //Syntax: parentNode.insertBefore(newNode, existingNode)

//--------------------------Sidebar By default (hidden)-----------------------------
const sidebarNav = document.createElement('div');
sidebarNav.style.cssText = `
    height: 100%; width: 0; 
    position: fixed; 
    z-index: 1; 
    top: 0; 
    left: 0; 
    background-color: #fff; 
    overflow-x: hidden; 
    transition: 0.5s; 
    padding-top: 30px; 
    box-shadow: 1px 0px 4px 0px darkgrey;
`;

const sidebar = document.createElement('div');

sidebarArray.map((item , index) => {               //Create 3 Tag Link 

    const sidebarLink = document.createElement('a');
    sidebarLink.innerText = item;
    setAttributes(sidebarLink, {
        'onmouseover': 'addHover(this)',
        'onmouseout': 'removeHover(this)'
    });
 
    sidebarLink.style.cssText = sidebarCollectionStyle; 

    if (index === 0) {

        setAttributes(sidebarLink, {
            'href': 'javascript:void(0)',
            'onclick': 'closeNav()'
        });

    }else {
        sidebarLink.setAttribute('href', '#');  
    }

    sidebar.appendChild(sidebarLink);
});

sidebarNav.appendChild(sidebar);
body.insertBefore(sidebarNav, scriptLocalization);

//----------- Hover on Elements------------
function addHover(x) {
    x.style.backgroundColor = 'darkgray';
}

function removeHover(x) {
    x.style.backgroundColor = 'white';
}
//------------end of hover----------------

//----Function Open and Close Sidebar-----
function openNav() {
    sidebarNav.style.width = "550px";
}
  
function closeNav() {
    sidebarNav.style.width = "0";
}
//------------End of Function-------------

//-------------Media Query----------------
function sidebarMedia(x) {
    if (x.matches) { 
        sidebarNav.style.maxWidth = "300px";
    } else {
        sidebarNav.style.maxWidth = "550px";
    }
}
  
var x = window.matchMedia("(max-width: 700px)");   //returns a MediaQueryList object
sidebarMedia(x);                                  //Call listener function at run time
x.addListener(sidebarMedia);                     //Attach listener function on state changes, to responsive manner
//--------- End of Media Query-------------
//---------------------------------End of Sidebar-----------------------------------
//---------------------------------End of Header------------------------------------

//---------------------------------Section of Cards---------------------------------
// var card = JSON.parse(localStorage.getItem("card")); // Retrieving
const container = document.createElement('div');
    container.style.cssText = `
        display:flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 25px 25px;
        // margin-top: 20px;
    `;

card.map(renderCard);

function renderCard (card) {                    //Create List of Cards
     
    const cards = document.createElement('div');
    cards.style.cssText = `
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.1s;
        width: 22%;
        background-color: #f5f5f582;
        padding: 15px 15px;
        margin-bottom: 40px;
    `;

    const semicard = document.createElement('div');
    semicard.style.cssText = semicardStyle;

    const image = document.createElement('img');
    setAttributes(image, {
        'src': card.img,
        'alt': '...'
    });
    
    image.style.cssText = semicardStyle;
    semicard.appendChild(image);

    const cardBody = document.createElement('div');
    const h3 = document.createElement('h3');
    h3.innerText = card.name;
    h3.style.cssText = `
        font-size: 1.9em;
        text-align: center;
        font-weight: 500;
        line-height: 1.5;
    `;

    const p = document.createElement('p');
    p.innerText = card.description;
    p.style.cssText = `
        font-size: 1.3em;
        line-height: 1.5;
        text-align: center;
    `;

    cardBody.innerHTML += h3.outerHTML + p.outerHTML;
    cards.innerHTML += semicard.outerHTML + cardBody.outerHTML; 
    container.appendChild(cards);
    body.insertBefore(container, scriptLocalization);

    //-------------Media Query----------------
    function cardMedia(z) {

        if (z.matches) { 
            cards.style.width = '45%';
        }else {
            cards.style.width = '22%';
        }
    }
    
    var z = window.matchMedia("(max-width: 800px)");  //returns a MediaQueryList object
    cardMedia(z);                                    //Call listener function at run time
    z.addListener(cardMedia);                       // Attach listener function on state changes, to responsive manner
    //--------- End of Media Query-------------
}
//------------------------------------End of Cards----------------------------------

//---------------------------------------Pagination---------------------------------
const combine = document.createElement('div');
combine.style.cssText = `
    width: 100%;
    text-align: center;
`;

const pagination = document.createElement('div');
pagination.style.cssText = `
    padding: 32px 0px;
    margin-bottom: 42px;
    font-size: 20px;
`;

paginationArray.map((item , index) => {                //Create Some of Pagination Links

    const paginationLink = document.createElement('a');
    paginationLink.innerText = item;

    if (index === 1) {
        paginationLink.style.cssText = firstPaginationStyle; 
        paginationLink.setAttribute('href' , '#');
    }else {
        paginationLink.style.cssText = normalPaginationStyle;
        setAttributes(paginationLink, {
            'href': '#',
            'onmouseover': 'additionHover(this)',
            'onmouseout': 'deleteHover(this)'
        });
    }

    pagination.appendChild(paginationLink);
});


//----------- Hover on Elements------------
function additionHover(x) {
    x.style.backgroundColor = 'black';
    x.style.color = 'white';
}

function deleteHover(x) {
    x.style.backgroundColor = 'white';
    x.style.color = 'black';
}
//------------end of hover----------------

const divHr = document.createElement('div');
divHr.style.cssText = `
    margin: 30px 0;
`;

const hr = document.createElement('hr');
hr.style.cssText = `
    border: 0;
    border-top: 1px solid #eee;
`;

divHr.appendChild(hr);
combine.innerHTML += pagination.outerHTML + divHr.outerHTML;
container.appendChild(combine);
//------------------------------------End of Pagination-----------------------------

//--------------------------------------About Section-------------------------------
const section = document.createElement('div');
section.style.cssText = `
    padding-top: 12px;
    padding-bottom: 32px;
    text-align:center;
`; 

const aboutMe = document.createElement('div');
const aboutName = document.createElement('h3');
aboutName.innerText = 'About Me, The Food Man';
aboutName.style.cssText = `
    font-weight: 500;
    margin-top: 18px;
    margin-bottom: 28px;
    font-size: 28px;
`; 

const br = document.createElement('br');
const aboutImg = document.createElement('img');
aboutImg.setAttribute('src', 'Image/chef.jpg');
aboutImg.style.cssText = `
    width: 995px;
    max-width: 100%;
    height: auto;
`;

aboutMe.innerHTML += aboutName.outerHTML + br.outerHTML + aboutImg.outerHTML;
const aboutBody = document.createElement('div');
aboutBody.style.cssText = `
    padding-top: 32px;
    padding-bottom: 64px;
`;

const h4 = document.createElement('h4');
h4.innerText = 'I am Who I Am!';
h4.style.cssText = `
    font-weight: bold;
    margin: 10px 0;
    font-size: 24px;
`;

const h6 = document.createElement('h6');
h6.innerText = 'With Passion For Real, Good Food';
h6.style.cssText = `
    font-weight: 400;
    margin: 18px 0;
    font-size: 20px;
    font-style: italic;
`;

const paragraph = document.createElement('p');
paragraph.innerText = 'Just me, myself and I, exploring the universe of unknownment. I have a heart of love and an interest of lorem ipsum and mauris neque quam blog. I want to share my world with you. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.';
paragraph.style.cssText = `
    font-size: 19px;
    line-height: 1.5;
    margin: 17px 0px;
    padding: 0px 30px;
    font-family: "Karma", sans-serif;
`;

aboutBody.innerHTML += h4.outerHTML + h6.outerHTML + paragraph.outerHTML;
const aboutHr = document.createElement('hr');
aboutHr.style.cssText = `
    border: 0;
    border-top: 1px solid #eee;
`;

section.innerHTML += aboutMe.outerHTML + aboutBody.outerHTML + aboutHr.outerHTML;
body.insertBefore(section, scriptLocalization);

//----------------------------------End of About Section----------------------------

//--------------------------------------- Footer -----------------------------------
const footer = document.createElement('footer');
footer.style.cssText = `
    padding: 32px 16px;
    display:flex;
    flex-wrap: wrap;
`;

const sideFooter = document.createElement('div');
sideFooter.style.cssText = `
    padding: 0 16px;
    width: 30%;
`;

const footerName = document.createElement('h3');
footerName.innerText = 'FOOTER';
footerName.style.cssText = `
    margin: 12px 0;
    font-size: 28px;
    font-weight:400;
`;

sideFooter.appendChild(footerName);

paragraphArray.map((item, index ) => {                  //Create 2 Paragraph

    const footerParagraph = document.createElement('p');
    footerParagraph.innerText = item;
    footerParagraph.style.cssText = index === 0 ? fisrtParagraphStyle : secondParagraphStyle ;
    sideFooter.appendChild(footerParagraph);
});

const blogPost = document.createElement('div');
blogPost.style.cssText = `
    padding: 0 16px;
    width: 30%;
`;

const blogName = document.createElement('h3');
blogName.innerText = 'BLOG POSTS';
blogName.style.cssText = `
    margin: 12px 0;
    font-size: 28px;
    font-weight:400;
`;

const blogUl = document.createElement('ul');
blogUl.style.cssText = `
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

const blogItem1 = document.createElement('li');
blogItem1.style.cssText = `
    padding: 24px 16px;
    border-bottom: 1px solid #ddd;
`;

const blogImg1 = document.createElement('img');
blogImg1.setAttribute('src', 'Image/workshop.jpg');
blogImg1.style.cssText = `
    width: 60px;
    margin-right: 16px;
    float: left;
`;

const lorem = document.createElement('span');
lorem.innerText = 'Lorem';
lorem.style.cssText = `
    font-size: 25px;
`;

const br1 = document.createElement('br');
const sed = document.createElement('span');
sed.innerText = 'Sed mattis nunc';
sed.style.cssText = `
    font-size: 20px;
    line-height: 1.7;
`;

blogItem1.innerHTML += blogImg1.outerHTML + lorem.outerHTML + br1.outerHTML + sed.outerHTML;
const blogItem2 = document.createElement('li');
blogItem2.style.cssText = `
    padding: 24px 16px;
`;

const blogImg2 = document.createElement('img');
blogImg2.setAttribute('src', 'Image/gondol.jpg');
blogImg2.style.cssText = `
    width: 60px;
    margin-right: 16px;
    float: left;
`;

const ipsum = document.createElement('span');
ipsum.innerText = 'Ipsum';
ipsum.style.cssText = `
    font-size: 25px;
`;

const br2 = document.createElement('br');
const praes = document.createElement('span');
praes.innerText = 'Praes tinci sed';
praes.style.cssText = `
    font-size: 20px;
    line-height: 1.7;
`;

blogItem2.innerHTML += blogImg2.outerHTML + ipsum.outerHTML + br2.outerHTML + praes.outerHTML;
blogUl.innerHTML += blogItem1.outerHTML + blogItem2.outerHTML;
blogPost.innerHTML += blogName.outerHTML + blogUl.outerHTML;

const popularTags = document.createElement('div');
popularTags.style.cssText = `
    padding: 0 16px;
    width: 30%;
`;

const popularName = document.createElement('h3');
popularName.innerText = 'POPULAR TAGS';
popularName.style.cssText = `
    margin: 12px 0;
    font-size: 28px;
    font-weight:400;
`;

const contentSpan = document.createElement('div');
contentSpan.style.cssText = `
    margin: 16px 0;
    padding: 22px 0;
    width: 400px;
`;

popularTagsNames.map((item, index ) => {         //Create Collection of Tag <span>  

    const span = document.createElement('span');
    span.innerText = item;
    span.style.cssText = index === 0 ? firstPopularTagStyle : normalPopularTagStyle ;
    contentSpan.appendChild(span);
});
 
popularTags.innerHTML += popularName.outerHTML + contentSpan.outerHTML;
footer.innerHTML += sideFooter.outerHTML + blogPost.outerHTML + popularTags.outerHTML;
body.insertBefore(footer, scriptLocalization);

//--------------------------------------End of Footer-------------------------------





