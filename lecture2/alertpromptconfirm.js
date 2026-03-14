alert("are you sure to visit this website?")

let name = prompt("what is your name?")

let answer = confirm("hii " + name + ", do you want to visit this website?")
if(answer==true){
    alert(`hello, ${name} welcome to my website!`)
}
else{
    alert("goodbye, see you later!")
}