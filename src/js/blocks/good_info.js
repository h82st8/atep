window.onload = function () {
    document.querySelector('.buttons-header').addEventListener('click', fButtons);

    function fButtons(event) {
        console.log(event.target.className == 'button');
        if(event.target.className == 'button'){
            var dataButton = event.target.getAttribute('data-button');
            var button = document.getElementsByClassName('button');
            for(var i = 0; i < button.length; i++) {
                button[i].classList.remove('active');
            }

            event.target.classList.add('active');

            var contentItem = document.getElementsByClassName('item');
            for(var i = 0; i < contentItem.length; i++){
                if (dataButton == i) {
                    contentItem[i].style.display = 'block';
                }else {
                    contentItem[i].style.display = 'none';
                }
            }

            var priceItem = document.getElementsByClassName('price-item');
            for(var i = 0; i < priceItem.length; i++){
                if (dataButton == i) {
                    priceItem[i].style.display = 'block';
                }else {
                    priceItem[i].style.display = 'none';
                }
            }
        }
    }