const items = document.getElementsByClassName('item');
for(const item of items){
    item.addEventListener('click', function(event){
        event.target.parentNode.removeChild(event.target);
    })
}
// friend option.......

document.getElementById('frd-id').addEventListener('click', function(){
    const frdContainer = document.getElementById('friend-container');
    

    const li = document.createElement('li');
    li.innerText = 'Rakib sazzad Ahemd';
    li.classList.add('friend-list');
    frdContainer.appendChild(li);
})

const friendList = document.getElementById('friend-container').addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target)
});