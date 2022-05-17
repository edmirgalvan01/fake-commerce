const URL_CATEGORIES = 'https://api.escuelajs.co/api/v1/categories';

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

getAllCategories();
