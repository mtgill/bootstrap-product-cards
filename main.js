const products = [
    {
        title: 'product1',
        description: 'bla bla bla',
        imageUrl: 'https://media.treehugger.com/assets/images/2017/06/Asian_giant_softshell_turtle_hatchling.jpg.860x0_q70_crop-scale.jpg',
        size: '4" x 4"',
        weight: '8 oz.',
        price1: '$1.99',
        price2: '$1.49',
        price3: '$0.99',
        validUntil: '04/01/2016',
    },
    {
        title: 'product2',
        description: 'bla bla bla',
        imageUrl: 'https://media.treehugger.com/assets/images/2017/06/Asian_giant_softshell_turtle_hatchling.jpg.860x0_q70_crop-scale.jpg',
        size: '4" x 4"',
        weight: '8 oz.',
        price1: '$1.99',
        price2: '$1.49',
        price3: '$0.99',
        validUntil: '04/01/2016',
    },
    {
        title: 'product3',
        description: 'bla bla bla',
        imageUrl: 'https://media.treehugger.com/assets/images/2017/06/Asian_giant_softshell_turtle_hatchling.jpg.860x0_q70_crop-scale.jpg',
        size: '4" x 4"',
        weight: '8 oz.',
        price1: '$1.99',
        price2: '$1.49',
        price3: '$0.99',
        validUntil: '04/01/2016',
    },
    {
        title: 'product4',
        description: 'bla bla bla',
        imageUrl: 'https://media.treehugger.com/assets/images/2017/06/Asian_giant_softshell_turtle_hatchling.jpg.860x0_q70_crop-scale.jpg',
        size: '4" x 4"',
        weight: '8 oz.',
        price1: '$1.99',
        price2: '$1.49',
        price3: '$0.99',
        validUntil: '04/01/2016',
    },
    {
        title: 'product5',
        description: 'bla bla bla',
        imageUrl: 'https://media.treehugger.com/assets/images/2017/06/Asian_giant_softshell_turtle_hatchling.jpg.860x0_q70_crop-scale.jpg',
        size: '4" x 4"',
        weight: '8 oz.',
        price1: '$1.99',
        price2: '$1.49',
        price3: '$0.99',
        validUntil: '04/01/2016',
    },
];

console.log('products', products);

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

    const domStringBuilder = () => {
        let domString = "";
       products.forEach((product) => {
       
        domString += `<div class="card col-4 product" ><h2>${product.title}</h2>`;
        domString += `<img src=${product.imageUrl}></img>`;
        domString += `<div class="card-body">`
        domString += `<h3>${product.description}</h3>`;
        domString += `<h3>${product.size}</h3>`;
        domString += `<h3>${product.weight}</h3>`;
        domString += `<h3>${product.price1}</h3>`;
        domString += `<h3>${product.price2}</h3>`;
        domString += `<h3>${product.price3}</h3>`;
        domString += `<h3>${product.validUntil}</h3>`;
        domString += `</div>`;
        domString += `</div>`;
           
       });
       printToDom('product-div', domString);
    };




const init = () => {
domStringBuilder();
};

init();


        