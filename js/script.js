function newItem() {

    //1. Adding a new item to the list:

    let li = $('<li></li>');
    let inputValue = $('#input').val();
    let text = inputValue;
    li.append(text);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        let list =$('#list');
        list.append(li);
        $('#list').val(''); // delete previous input text
    }

    //2. Crossing an item out:

    function crossOut() {
        li.classList.toggle("strike");
    }

    li.on("dblclick",crossOut);

    //3(i). Adding a delete button

    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on("click", deleteListItem);

    //3(ii) Adding CLASS DELETE (Display:none) from the CSS:
    function deleteListItem(){
        li.addClass("delete")
    }

    //4. Reordering the items
    $('#list').sortable();

}