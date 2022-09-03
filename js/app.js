const loadCategory = async()=>{
const url = `https://openapi.programming-hero.com/api/news/categories`
const res = await fetch(url);
const data = await res.json();
displayCategory(data.data.news_category)
}

const displayCategory = allnews =>{
  const categoryNews = document.getElementById('category-news');
allnews.forEach(news => {
  const categoryDiv = document.createElement('div');
  categoryDiv.classList.add('col')
  categoryDiv.classList.add('user')
  categoryDiv.innerHTML=`
  <button > ${news.category_name} </button>
  `;
  categoryNews.appendChild(categoryDiv);
});
}

loadCategory()