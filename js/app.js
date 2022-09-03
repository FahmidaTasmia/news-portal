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
  <button onclick ="loadNews('${news.category_id}')"> ${news.category_name} </button>
  `;
  categoryNews.appendChild(categoryDiv);
});
}

loadCategory()

//loader-spinner 
const loadSpinner = isLoading =>{
  const loader = document.getElementById('loader');
  if(isLoading){
    loader.classList.remove('d-none')
  }
  else{
    loader.classList.add('d-none')
  }
}

//show all news details
 const loadNews = async(id) =>{
  loadSpinner(true);
  const url = `https://openapi.programming-hero.com/api/news/category/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayNews(data.data))
 }


 const displayNews = categoryId =>{
  const displayAllNews = document.getElementById('display-all-news');
  displayAllNews.innerText=categoryId.length;
  const newsContainer = document.getElementById('news-container');
  newsContainer.innerHTML = '';
  categoryId.forEach(id=>{
    const newsDiv = document.createElement('div');
    newsDiv.classList.add('col');
    newsDiv.innerHTML=`
    <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${id.thumbnail_url}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${id.title}</h5>
        <p class="card-text cards">${id.details}</p>
        
        <div class="d-flex justify-content-around align-items-center">
       <div> <img class="img-fluid img" src="${id.author.img}" alt="">  ${id.author.name ? id.author.name : "No found name"}</div>
       <div class=""> 
       <p>  <p/>
      <p> <i class="fa-solid fa-eye"></i> ${id.total_view ? id.total_view : 'Not Found'}</p>
       </div>
       
       <a onclick="detailModal('${id._id}')" data-bs-toggle="modal" data-bs-target="#exampleModal" class="text-dark fs-6"> <button type="button" class="btn btn-danger btn-sm">Show More</button></a>
        </div>
    
      </div>
    </div>
  </div>
</div>
    `;
    newsContainer.appendChild(newsDiv)

  })
  loadSpinner(false)
 }
