  let form = document.getElementById('addform');
  let itemList = document.getElementById('items');
  let filter = document.getElementById('filter');

 //Form submit event
 form.addEventListener('submit', addItem);
 //Delete event
 itemList.addEventListener('click', removeItem);
 //Filter event
 filter.addEventListener('keyup', filterItems);

 function addItem(e) {
     e.preventDefault();
     
        //get input value
     let newItem = document.getElementById('item').value;

     //creata new li element
     let li = document.createElement('li');
     li.className= 'list-group-item';
   

     //add input value with text node
     li.appendChild(document.createTextNode(newItem));
        //create btn
     let deleteBtn = document.createElement('button');
     // add classname to deleteBtn
     deleteBtn.className='btn btn-danger btn-sm float-right delete';
     // Append the textNode
     deleteBtn.appendChild(document.createTextNode('X'));
     // Append button to li
     li.appendChild(deleteBtn);
     itemList.appendChild(li);


 }

 function removeItem(e) {
     if(e.target.classList.contains('delete')){
      if(confirm('Are you sure?')) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
      }
     }
 }
 function filterItems(e) {
     //convert text to lowercase
     let text = e.target.value.toLowerCase();

     //Get list item
     let items = document.getElementsByTagName('li');
     //Convert to an array
     Array.from(items).forEach(function(item){
     let itemName = item.firstChild.textContent;
     if(itemName.toLowerCase().indexOf(text) !=-1){
         item.style.display = 'block';

     } else {
        item.style.display = 'none';
     }

     });

    

 }


