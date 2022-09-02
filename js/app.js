const loadCategories = async ()=>{
    const url =`https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
    displayCategories(data.data.news_category)
}

const displayCategories = categories =>{
    const categoriesContainer = document.getElementById('categories-container');

    categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('col');
        categoryDiv.innerHTML=`
        <button onclick="loadCategoryDetail(${category.category_id})" class="btn btn-sm border-0 ">${category.category_name} </button>
        `;
        categoriesContainer.appendChild(categoryDiv);
       
    });
 
}


const loadNews =async()=>{
    const url =`  https://openapi.programming-hero.com/api/news/category/01`;
    const res = await fetch(url);
    const data = await res.json();
    displayNews(data.data); 
}

const displayNews = (allnews) =>{
    const newsContainer = document.getElementById('news-container');

    allnews.forEach(news => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('card');
        newsDiv.innerHTML=`
        <div class="row   ">
    <div class="col-md-4 ">
      <img src="${news.image_url}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8 ">
      <div class="card-body ">
        <h5 class="card-title">${news.title}</h5>
        <p class="card-text">${news.details}</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
        `;
        newsContainer.appendChild(newsDiv)
    });
 
}

loadNews();

const loadCategoryDetail = async id =>{
const url =` https://openapi.programming-hero.com/api/news/category/{category_id}`;
const res = await fetch(url);
const data = await res.json();
displayCategoryDetail(data.data); 

}

const displayCategoryDetail = news =>{
    const detailContainer =document.getElementById('detail-container');

    const newsDiv = document.createElement('div');
    newsDiv.classList.add('card');
    newsDiv.innerHTML=`
    <div class="row   ">
    <div class="col-md-4 ">
      <img src="${news.image_url}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8 ">
      <div class="card-body ">
        <h5 class="card-title">${news.title}</h5>
        <p class="card-text">${news.details}</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
    `;

    detailContainer.appendChild(newsDiv)
}


loadCategories();