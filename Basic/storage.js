localStorage.setItem("name", "Lee");
console.log(localStorage.getItem("name"));

sessionStorage.setItem("name", "John");
console.log(sessionStorage.getItem("name"));

document.cookie = "name=Lee; expires=" + new Date(2022, 1, 13).toUTCString();
