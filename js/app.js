$(function () {
    var products = [


        { name: 'Apple Computer', price: 22000, id: 1, description: 'Apple Computer', picture: 'images/computer.jpg', category: 'Elektronik' },
        { name: 'Camera', price: 1499, id: 2, description: 'camera', picture: 'https://picsum.photos/300/?image=30', category: 'Elektronik' },
        { name: 'Shampoo', price: 35, id: 3, description: 'Shampoo', picture: 'https://picsum.photos/300/?image=100', category: 'Elektronik' },
        { name: 'Tandborste', price: 50, id: 4, description: 'Tandborsta', picture: 'https://picsum.photos/300/?image=20', category: 'Elektronik' },
        { name: 'Kontor Stol', price: 800, id: 5, description: 'Kontor stol', picture: 'https://picsum.photos/300/?image=10', category: 'Elektronik' },
        { name: 'Skrivbord', price: 300, id: 6, description: 'Skrivbord', picture: 'https://picsum.photos/300/?image=400', category: 'Elektronik' },
        { name: 'Skrivbord', price: 200, id: 6, description: 'Skrivbord', picture: 'https://picsum.photos/300/?image=400', category: 'Elektronik' },
        { name: 'Skrivbord', price: 100, id: 6, description: 'Skrivbord', picture: 'https://picsum.photos/300/?image=400', category: 'Elektronik' },
        { name: 'Skrivbord', price: 1000, id: 6, description: 'Skrivbord', picture: 'https://picsum.photos/300/?image=400', category: 'Elektronik' },
        { name: 'Skrivbord', price: 3000, id: 6, description: 'Skrivbord', picture: 'https://picsum.photos/300/?image=400', category: 'Elektronik' }
    ];
    var products1 = [


        { name: 'Apple Computer', price: 1500, id: 1, description: 'Apple Computer', picture: 'images/computer.jpg', category: 'Klader' },
        { name: 'Camera', price: 755, id: 2, description: 'camera', picture: 'https://picsum.photos/300/?image=30', category: 'Klader' },
        { name: 'Shampoo', price: 25, id: 3, description: 'Shampoo', picture: 'https://picsum.photos/300/?image=100', category: 'Klader' },
        { name: 'Tandborste', price: 20, id: 4, description: 'Tandborsta', picture: 'https://picsum.photos/300/?image=20', category: 'Klader' },
        { name: 'Kontor Stol', price: 800, id: 5, description: 'Kontor stol', picture: 'https://picsum.photos/300/?image=10', category: 'Klader' },
        { name: 'Skrivbord', price: 2000, id: 6, description: 'Skrivbord', picture: 'https://picsum.photos/300/?image=400', category: 'Klader' },
        { name: 'Skrivbord', price: 2000, id: 6, description: 'Skrivbord', picture: 'https://picsum.photos/300/?image=400', category: 'Klader' },
        { name: 'Skrivbord', price: 2000, id: 6, description: 'Skrivbord', picture: 'https://picsum.photos/300/?image=400', category: 'Klader' },
        { name: 'Skrivbord', price: 2000, id: 6, description: 'Skrivbord', picture: 'https://picsum.photos/300/?image=400', category: 'Klader' },
        { name: 'Skrivbord', price: 2000, id: 6, description: 'Skrivbord', picture: 'https://picsum.photos/300/?image=400', category: 'Klader' }
    ];
    var products2 = [


        { name: 'Apple Computer', price: 1500, id: 1, description: 'Apple Computer', picture: 'images/computer.jpg', category: 'Leksaker' },
        { name: 'Camera', price: 755, id: 2, description: 'camera', picture: 'https://picsum.photos/300/?image=30', category: 'Leksaker' },
        { name: 'Shampoo', price: 25, id: 3, description: 'Shampoo', picture: 'https://picsum.photos/300/?image=100', category: 'Leksaker' },
        { name: 'Tandborste', price: 20, id: 4, description: 'Tandborsta', picture: 'https://picsum.photos/300/?image=20', category: 'Leksaker' },
        { name: 'Kontor Stol', price: 800, id: 5, description: 'Kontor stol', picture: 'https://picsum.photos/300/?image=10', category: 'Leksaker' },
        { name: 'Skrivbord', price: 2000, id: 6, description: 'Skrivbord', picture: 'https://picsum.photos/300/?image=400', category: 'Leksaker' },
        { name: 'Skrivbord', price: 2000, id: 6, description: 'Skrivbord', picture: 'https://picsum.photos/300/?image=400', category: 'Leksaker' },
        { name: 'Skrivbord', price: 2000, id: 6, description: 'Skrivbord', picture: 'https://picsum.photos/300/?image=400', category: 'Leksaker' },
        { name: 'Skrivbord', price: 2000, id: 6, description: 'Skrivbord', picture: 'https://picsum.photos/300/?image=400', category: 'Leksaker' },
        { name: 'Skrivbord', price: 2000, id: 6, description: 'Skrivbord', picture: 'https://picsum.photos/300/?image=400', category: 'Leksaker' }
    ];
    var products3 = [


        { name: 'Apple Computer', price: 1500, id: 1, description: 'Apple Computer', picture: 'images/computer.jpg', category: 'Telefoner' },
        { name: 'Camera', price: 755, id: 2, description: 'camera', picture: 'https://picsum.photos/300/?image=30', category: 'Telefoner' },
        { name: 'Shampoo', price: 25, id: 3, description: 'Shampoo', picture: 'https://picsum.photos/300/?image=100', category: 'Telefoner' },
        { name: 'Tandborste', price: 20, id: 4, description: 'Tandborsta', picture: 'https://picsum.photos/300/?image=20', category: 'Telefoner' },
        { name: 'Kontor Stol', price: 800, id: 5, description: 'Kontor stol', picture: 'https://picsum.photos/300/?image=10', category: 'Telefoner' },
        { name: 'Skrivbord', price: 2000, id: 6, description: 'Skrivbord', picture: 'https://picsum.photos/300/?image=400', category: 'Telefoner' },
        { name: 'Skrivbord', price: 2000, id: 6, description: 'Skrivbord', picture: 'https://picsum.photos/300/?image=400', category: 'Telefoner' },
        { name: 'Skrivbord', price: 2000, id: 6, description: 'Skrivbord', picture: 'https://picsum.photos/300/?image=400', category: 'Telefoner' },
        { name: 'Skrivbord', price: 2000, id: 6, description: 'Skrivbord', picture: 'https://picsum.photos/300/?image=400', category: 'Telefoner' },
        { name: 'Skrivbord', price: 2000, id: 6, description: 'Skrivbord', picture: 'https://picsum.photos/300/?image=400', category: 'Telefoner' }
    ];
    var products4 = [


        { name: 'Apple Computer', price: 1500, id: 1, description: 'Apple Computer', picture: 'images/computer.jpg', category: 'Sport' },
        { name: 'Camera', price: 755, id: 2, description: 'camera', picture: 'https://picsum.photos/300/?image=30', category: 'Sport' },
        { name: 'Shampoo', price: 25, id: 3, description: 'Shampoo', picture: 'https://picsum.photos/300/?image=100', category: 'Sport' },
        { name: 'Tandborste', price: 20, id: 4, description: 'Tandborsta', picture: 'https://picsum.photos/300/?image=20', category: 'Sport' },
        { name: 'Kontor Stol', price: 800, id: 5, description: 'Kontor stol', picture: 'https://picsum.photos/300/?image=10', category: 'Sport' },
        { name: 'Skrivbord', price: 2000, id: 6, description: 'Skrivbord', picture: 'https://picsum.photos/300/?image=400', category: 'Sport' },
        { name: 'Skrivbord', price: 2000, id: 6, description: 'Skrivbord', picture: 'https://picsum.photos/300/?image=400', category: 'Sport' },
        { name: 'Skrivbord', price: 2000, id: 6, description: 'Skrivbord', picture: 'https://picsum.photos/300/?image=400', category: 'Sport' },
        { name: 'Skrivbord', price: 2000, id: 6, description: 'Skrivbord', picture: 'https://picsum.photos/300/?image=400', category: 'Sport' },
        { name: 'Skrivbord', price: 2000, id: 6, description: 'Skrivbord', picture: 'https://picsum.photos/300/?image=400', category: 'Sport' }
    ];
    var products5 = [


        { name: 'Apple Computer', price: 1500, id: 1, description: 'Apple Computer', picture: 'images/computer.jpg', category: 'Sport skor' },
        { name: 'Camera', price: 755, id: 2, description: 'camera', picture: 'https://picsum.photos/300/?image=30', category: 'Sport skor' },
        { name: 'Shampoo', price: 25, id: 3, description: 'Shampoo', picture: 'https://picsum.photos/300/?image=100', category: 'Sport skor' },
        { name: 'Tandborste', price: 20, id: 4, description: 'Tandborsta', picture: 'https://picsum.photos/300/?image=20', category: 'Sport skor' },
        { name: 'Kontor Stol', price: 800, id: 5, description: 'Kontor stol', picture: 'https://picsum.photos/300/?image=10', category: 'Sport skor' },
        { name: 'Skrivbord', price: 2000, id: 6, description: 'Skrivbord', picture: 'https://picsum.photos/300/?image=400', category: 'Sport skor' },
        { name: 'Skrivbord', price: 2000, id: 6, description: 'Skrivbord', picture: 'https://picsum.photos/300/?image=400', category: 'Sport skor' },
        { name: 'Skrivbord', price: 2000, id: 6, description: 'Skrivbord', picture: 'https://picsum.photos/300/?image=400', category: 'Sport skor' },
        { name: 'Skrivbord', price: 2000, id: 6, description: 'Skrivbord', picture: 'https://picsum.photos/300/?image=400', category: 'Sport skor' },
        { name: 'Skrivbord', price: 2000, id: 6, description: 'Skrivbord', picture: 'https://picsum.photos/300/?image=400', category: 'Sport skor' }
    ];
    

    var cart = [];
    var cart1 = [];
    var cart2 = [];
    var cart3 = [];
    var cart4 = [];
    var cart5 = [];

    var appendList = function (array, location) {
        var template = array.map(function (item, id) {
            return `<li class="product col-3">
                <img src="${item.picture}" alt="">
                <div class="product-content">
                <h4>${item.name} -
                    <span class="category">${item.category}</span> <small>${item.price}kr</small>
                 </h4>
                  <p>${item.description}</p>
                </div>
                <button type="button" id="${item.id}">Köp Nu</button>
            </li>`;
        });
        $(location).html(template);
    };
    appendList(products, $('.product-list'));
    appendList(products1, $('.product-list1'));
    appendList(products2, $('.product-list2'));
    appendList(products3, $('.product-list3'));
    appendList(products4, $('.product-list4'));
    appendList(products5, $('.product-list5'));
    

});