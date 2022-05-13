const floatExpand = document.getElementById('float');


//NAVBAR SCROLL LOCK-add_remove Class onScroll
function onScroll() {
    if(scrollY > 0) {
        navigation.classList.add('header-scroll')
    } else {
        navigation.classList.remove('header-scroll')
    }
};


//FLOAT BUTTON EXPAND-add_remove Class onClick
function floatExpanded() {
    if (float.classList.contains('float-expand')) {
        float.classList.remove('float-expand')
    } else {
        float.classList.add('float-expand')
    }
}

//ELEMENT HORIZONTAL SCROLL
function scrollHorizontally() {
    
}
