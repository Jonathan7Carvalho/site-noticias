document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});




// document.addEventListener('DOMContentLoaded', function() {
//     console.log('DOM fully loaded and parsed');

//     let offset = 0;
//     const limit = 5;

//     function loadArticles() {
//         const url = `http://localhost/SITE2/php/get_articles.php?limit=${limit}&offset=${offset}`;
//         console.log('Fetching articles from URL:', url);

//         document.addEventListener('DOMContentLoaded', function() {
//             const menuToggle = document.getElementById('menu-toggle');
//             const menu = document.getElementById('menu');
        
//             menuToggle.addEventListener('click', function() {
//                 menu.classList.toggle('active');
//             });
//         });
//         document.addEventListener('DOMContentLoaded', function() {
//             const menuToggle = document.getElementById('menu-toggle');
//             const menu = document.getElementById('menu');
        
//             menuToggle.addEventListener('click', function() {
//                 menu.classList.toggle('active');
//             });
//         });
//         fetch(url)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 console.log('Fetched data:', data);
//                 const newsSection = document.getElementById('news');
//                 data.forEach(article => {
//                     const articleElement = document.createElement('article');
//                     articleElement.innerHTML = `<h2>${article.title}</h2><p>${article.content}</p>`;
//                     newsSection.appendChild(articleElement);
//                 });
//                 offset += limit;
//             })
//             .catch(error => {
//                 console.error('There was a problem with the fetch operation:', error);
//             });
//     }

//     loadArticles();

//     const loadMoreButton = document.getElementById('load-more');
//     if (loadMoreButton) {
//         console.log('Load More button found');
//         loadMoreButton.addEventListener('click', loadArticles);
//     } else {
//         console.error('Load More button not found');
//     }

//     //const searchInput = document.createElement('input');
//     //searchInput.setAttribute('type', 'text');
//     //searchInput.setAttribute('placeholder', 'Search articles...');
//     //searchInput.setAttribute('id', 'search-input');
//     //const header = document.querySelector('header');
//     if (header) {
//         header.appendChild(searchInput);

//         searchInput.addEventListener('input', function() {
//             const query = searchInput.value.toLowerCase();
//             const articles = document.querySelectorAll('article');
//             articles.forEach(article => {
//                 const title = article.querySelector('h2').innerText.toLowerCase();
//                 const content = article.querySelector('p').innerText.toLowerCase();
//                 if (title.includes(query) || content.includes(query)) {
//                     article.style.display = '';
//                 } else {
//                     article.style.display = 'none';
//                 }
//             });
//         });
//     } else {
//         console.error('Header not found');
//     }
// });
