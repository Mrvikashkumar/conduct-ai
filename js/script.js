//* show dropdown menu
let dropdownContainer = document.querySelectorAll('.dropdown-container');
dropdownContainer.forEach(element => {
  element.addEventListener('click', ()=>{
    let dropdownMenu = element.querySelector('.dropdown-menu');
    element.classList.toggle('show-dropdown-menu');
  })
})