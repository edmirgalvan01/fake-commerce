window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
   if (location.hash.startsWith('#profile')) {
      console.log('Profile');
   } else if (location.hash.startsWith('#saved')) {
      console.log('Saved');
   } else if (location.hash.startsWith('#category')) {
      categories();
      console.log('Category');
   } else {
      console.log('Home');
   }
}

function categories() {
   categoriesContainer.classList.add('hidden');
   postContainer.classList.add('hidden');
}
