var tit = document.querySelector('.tit'),
    lis = document.querySelectorAll('.tit li'),
    content = document.querySelector('.content'),
    content2 = document.querySelector('.content2');

lis.forEach((item, i) => {

    item.onclick = () => {
        item.classList.remove('active');
        // for (var i = 0; i < lis.length; i++) {
        //     lis[i].classList.add('active');
        // }

        if (i == 1) {
            content.innerHTML = '';
            content2.classList.remove('current')
        } else if (i == 0) {
            content2.classList.add('current')
        }
    }
});