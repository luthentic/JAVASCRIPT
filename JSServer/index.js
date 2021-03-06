const container = document.querySelector('.blogs')

const renderPosts = async () =>{
  let url = 'http://localhost:3000/post?_sort=id&_order=desc'

  const res = await fetch(url)
  const posts = await res.json()
  
  let template = ''
  posts.forEach(element => {
    template += `
    <div class='post'>
      <h2>${element.title}</h2>
      <p>${element.id}<small>ID</small></p> 
      <p>${element.body.slice(0, 200)}</p>
      <a href="/details.html?id=${element.id}">Read more</a>
    </div>
    `
  })

  container.innerHTML = template
}

window.addEventListener('DOMContentLoaded', ()=> renderPosts())