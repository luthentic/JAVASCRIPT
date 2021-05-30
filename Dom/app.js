document.addEventListener('DOMContentLoaded',e=>{
  let le = document.getElementsByTagName('li');
Array.from(le).forEach(function(item){
  console.log(item);
})
// dom gettag class return htmlcollection

const banner = document.querySelector('#page-banner');
console.log('type is:',banner.nodeType);
console.log('naem is:',banner.nodeName);
console.log('parent node is:',banner.parentNode);
console.log(banner.children);
console.log(banner.nextSibling);
console.log(banner.nextElementSibling);
console.log(banner.previousSibling);
console.log(banner.previousElementSibling);

let btn = document.querySelector('#book-list ul');

  btn.addEventListener('click',function(e){
    if(e.target.className == 'delete'){
      const a = e.target.parentNode;
      btn.removeChild(a);
    }
  })

const addForm = document.forms['add-book'];
addForm.addEventListener('submit',function(e){
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;
  
  let li = document.createElement('li');
  let bookName = document.createElement('span')
  let deleteBtn = document.createElement('span')

  bookName.append(value)
  deleteBtn.textContent ='delete'

  bookName.classList.add('name')
  deleteBtn.classList.add('delete')

  li.append(bookName)
  li.append(deleteBtn)
  btn.append(li)
})

const hideBox = document.querySelector('#hide')
hideBox.addEventListener('change',e =>{
  if(hideBox.checked){
    btn.style.display = 'none'
  }else{
    btn.style.display = 'initial'
  }
})


// let blk = document.querySelector('.delete')
// blk.addEventListener('click',function(e){
//   let q = e.target.parentElement;
//   q.parentElement.removeChild(q);
// })
})

