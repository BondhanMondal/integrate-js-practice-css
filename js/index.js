const topPlayer = document.getElementById('top-player');
topPlayer.style.color = 'blue';

const topBlog = document.getElementById('top-blog');
topBlog.style.color = 'blue';

const playerSection = document.getElementById('player-section');
playerSection.style.backgroundColor = 'rgba(163, 149, 132, 0.4)';
playerSection.style.borderRadius = '10px';

// add item button event handler
document.getElementById('additem-button').addEventListener('click', function(){

    //creating new list
    const newList = document.createElement('li');
    newList.innerText = 'item added from js';
    //append new list
    const listContainer = document.getElementById('list-container');
    listContainer.appendChild(newList);
    //listContainer.append(newList);


});

//click me button event handler
document.getElementById('click-me').addEventListener('click', function(){
    const clickMeButon = document.getElementById('click-me');
    const inputField = document.getElementById('input-field');
    const inputValue = parseInt(inputField.value);
    const newValue = inputValue + 1;
    inputField.value = newValue;
    if(newValue == 5){
        clickMeButon.disabled = true;
    }

    /* if(newValue <= 5){
        inputField.value = newValue;
    }
    else{
        clickMeButon.disabled = true;
    } */

})

// see next task event handler