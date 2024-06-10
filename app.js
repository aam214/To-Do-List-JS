const toDo = document.getElementsByClassName("toDo")[0];
const removeItems = document.getElementById('removeItems');
const allItems = document.getElementById('allItems');
const personInput = document.getElementById('personInput');


removeItems.addEventListener('click', function(){
  allItems.innerHTML = ' ';

})

personInput.addEventListener('keydown', function(event){
if(event.key==='Enter')
  enterItem();
})

function enterItem(){
  let h3 = document.createElement('h3');
  h3.innerHTML = '- ' + personInput.value;
}