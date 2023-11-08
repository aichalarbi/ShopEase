    const addIcons = document.querySelectorAll(".add");
    const minusIcons = document.querySelectorAll(".minus");
    const trashIcons = Array.from(document.getElementsByClassName("fa-trash-alt"));
    const heartIcons = document.querySelectorAll(".fas.fa-heart");
    addIcons.forEach(function (addIcon, index) {
    addIcon.addEventListener("click", function () {
    addIcon.nextElementSibling.innerHTML++;
    updateTotalPrice();
    });
    });

    minusIcons.forEach(function (minusIcon, index) {
    minusIcon.addEventListener("click", function () {
        if (minusIcon.previousElementSibling.innerHTML > 0) {
            minusIcon.previousElementSibling.innerHTML--;
        }
        updateTotalPrice();
    });
    });
    heartIcons.forEach(function (heartIcon, index) {
        heartIcon.addEventListener("click", function () {
            toggleLike(index);
        });
    });
    
    function toggleLike(index) {
        const heartIcon = document.querySelectorAll(".fas.fa-heart")[index];
        heartIcon.classList.toggle("liked");
    }
    

        for (let i=0; i<trashIcons.length; i++) {
        trashIcons[i].addEventListener("click", function () {
        trashIcons[i].parentNode.remove();
        updateTotalPrice();
        });
    }

    function updateTotalPrice() {
        totalPrice = 0;
        var priceElements = Array.from(document.getElementsByClassName("price"));
        var totalElement = document.getElementById("total");
        const quantityElements = Array.from(document.querySelectorAll(".qte"));
        for (let i = 0; i < priceElements.length; i++) {
            totalPrice += quantityElements[i].innerHTML * priceElements[i].innerHTML ;
        }
    console.log(totalPrice);
    return (totalElement.innerHTML = totalPrice);
    }
