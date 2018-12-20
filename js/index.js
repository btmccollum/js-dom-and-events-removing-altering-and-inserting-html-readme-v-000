//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
var newDiv = document.createElement('div');
newDiv.innerHTML = 'Hello, DOM!';
newDiv.style.backgroundColor = '#f9f9f9';
newDiv.style.textAlign = 'center';
document.body.appendChild(newDiv);

var ul = document.createElement('ul');
 
for (let i = 0; i < 3; i++) {
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}
 
newDiv.appendChild(ul);

ul.style.textAlign = 'left';

//remove an element from dom
ul.removeChild(ul.querySelector('li:nth-child(2)'));

ul.remove();