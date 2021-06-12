const id = new URLSearchParams(window.location.search).get('id')
const container = document.querySelector('.details')

const renderDetails = async () =>{
  
  const res = await fetch('http://localhost:3000/post/' +id)
  const post = await res.json()
  
  const template = `
    <h1>${post.title}</h1>
    <p>${post.body}</p>
  `

  container.innerHTML = template
}

window.addEventListener('DOMContentLoaded', ()=> renderDetails())




// url3.searchParams.get('hello'); // zerocho
// url3.searchParams.getAll('hi'); // ['world', 'js']
// url3.searchParams.append('bye', 'java');
// url3.search; // ?hello=zerocho&hi=world&hi=js&bye=java
// url3.searchParams.append('bye', 'ruby');
// url3.search; // ?hello=zerocho&hi=world&hi=js&bye=java&bye=ruby
// url3.searchParams.set('bye', 'python');
// url3.search; // ?hello=zerocho&hi=world&hi=js&bye=python
// url3.searchParams.delete('bye');
// url3.search; // ?hello=zerocho&hi=world&hi=js