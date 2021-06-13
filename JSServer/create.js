const form  = document.querySelector('form')

const createPost = async (e) =>{
  e.preventDefault()

  const doc ={
    title: form.title.valueOf,
    body: form.body.valueOf,
    
  }

  await fetch('http://localhost:3000/post',{
    method:'POST',
    body: JSON.stringify(doc),
    headers:{'Content-Type':'applicaion/json'}
  })
  window.location.replace('submit',createPost)
}


form.addEventListener('submit',createPost)