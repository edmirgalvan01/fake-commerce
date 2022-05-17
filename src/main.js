const URL_CATEGORIES = 'https://api.escuelajs.co/api/v1/categories';
const URL_ALL_PRODUCTS =
   'https://api.escuelajs.co/api/v1/products?offset=0&limit=10';

async function getAllCategories() {
   const response = await fetch(URL_CATEGORIES);
   const data = await response.json();

   categoriesListContainer.innerText = '';
   data.map((category) => {
      const div = document.createElement('div');
      const img = document.createElement('img');
      const p = document.createElement('p');

      div.classList.add('category');
      img.classList.add('category--img');
      p.classList.add('category--title');

      img.setAttribute('src', category.image);
      img.setAttribute('alt', category.name);
      p.innerText = category.name;

      div.appendChild(img);
      div.appendChild(p);
      categoriesListContainer.appendChild(div);
   });
}

async function getAllProducts() {
   const response = await fetch(URL_ALL_PRODUCTS);
   const data = await response.json();

   productsListContainer.innerText = '';
   data.map((product) => {
      const card = document.createElement('div');
      const img = document.createElement('img');
      const info = document.createElement('div');
      const title = document.createElement('p');
      const price = document.createElement('p');

      card.classList.add('product');
      img.classList.add('product--img');
      info.classList.add('product--info');
      title.classList.add('product--info__title');
      price.classList.add('product--info__price');

      title.innerText = product.title;
      price.innerText = `$${product.price}`;
      info.appendChild(title);
      info.appendChild(price);
      img.setAttribute('src', product.images[0]);
      img.setAttribute('alt', product.title);
      card.appendChild(img);
      card.appendChild(info);

      productsListContainer.appendChild(card);

      card.addEventListener('click', () => {
         console.log('Holaaa');
      });
   });
}

getAllProducts();
getAllCategories();
