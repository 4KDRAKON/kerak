var elform =document.querySelector( ".form")
var elInput =document.querySelector( ".input")
var elbtn =document.querySelector( ".btn")
var elList =document.querySelector( ".list")
var elitem =document.querySelector( ".item")
var array = []
elform.addEventListener("submit", function(evt){
    evt.preventDefault()
    var input = elInput.value.trim()
    var newli = document.createElement("li")
    newli.setAttribute("class", "item")
    newli.textContent = input;
    array.unshift(input)
    elList.appendChild(newli)
    window.localStorage.setItem("name", JSON.stringify({Malumot:input}))
    JSON.parse(window.localStorage.getItem("name"))
})