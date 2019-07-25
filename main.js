console.log('siema! Skąd się tu wziąłeś drogi czytelniku?');
const name = 'Ania';
const age = 36;
console.log('name');
console.log('age');
console.log(`Nazywam się ${name} i mam ${age} lat`);
const mainHeader = document.querySelector('.mainHeader');

console.log(mainHeader);
const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);
const header = document.querySelector('.mainHeader');
function calculate (x){
    x=x+3
    console.log (x)
    return x*7
}
calculate(1);
const welcome = (name, age)=>{
    console.log ('Witaj ${age} masz ${wiek}lat')
}
const button = document.querySelector('.header__button--js');
console.log(button)

button.addEventListener ('click', (e)=> {
    const header = document.querySelector ('.header__title--js');
    header.innerHTML = 'klik, klik';
    header.classList.add('header__title--red');
});
const navigationSwitcher = document.querySelector ('.navigation_switcher--js')

navigationSwitcher.addEventListener('click', (e) => {
    console.log('test')
    const navigationList = document.querySelector ('.navigation_list--js')
    navigationList.classList.toggle('navigation_list--visible');
});