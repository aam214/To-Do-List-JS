const toDo = document.getElementsByClassName("toDo")[0];
const removeItems = document.getElementById('removeItems');
const allItems = document.getElementById('allItems');
const personInput = document.getElementById('personInput');



removeItems.addEventListener("click", function(){
  allItems.innerHTML = "";
  console.log(removeItems);
})


personInput.addEventListener('keydown', function(event){
  if (event.key == "Enter")
    addItem();
})

function addItem(){
let h3 =document.createElement('h3');
h3.innerHTML = '- ' + personInput.value;

h3.addEventListener('click', function(){
  h3.style.textDecoration = "line-through";

})
allItems.insertAdjacentElement("beforeend", h3);
personInput.value = "";

}