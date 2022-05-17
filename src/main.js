const URL_CATEGORIES = 'https://api.escuelajs.co/api/v1/categories';
const URL_ALL_PRODUCTS =
   'https://api.escuelajs.co/api/v1/products?offset=0&limit=10';
const URL_PRODUCTS_BY_CATEGORY = (idCategory) =>
   `https://api.escuelajs.co/api/v1/categories/${idCategory}/products`;

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

      div.addEventListener('click', () => {
         location.hash = `#category=${category.name}`;
      });
   });
}

async function getAllProducts() {
   const response = await fetch(URL_ALL_PRODUCTS);
   const data = await response.json();

   productsListContainer.innerText = '';
   productsTitle.innerText = 'Products';

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

async function getProductsByCategory(idCategory) {
   const response = await fetch(URL_PRODUCTS_BY_CATEGORY(idCategory));
   const data = await response.json();

   const url = window.location.href;
   const urlSplit = url.split('=');
   console.log(urlSplit);
}

getProductsByCategory(1);
getAllProducts();
getAllCategories();
