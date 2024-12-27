// JS for product filtering
/* --------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('productSearchInput');
    const productItems = document.querySelectorAll('.product-item');

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();

        productItems.forEach(item => {
            const name = item.getAttribute('data-name').toLowerCase();
            const category = item.getAttribute('data-category').toLowerCase();

            // Check if search term is included anywhere in name or category
            const isVisible = name.includes(searchTerm) || 
                            category.includes(searchTerm);

            item.style.display = isVisible ? 'block' : 'none';
        });
    });
});
/* --------------------------------------------------------------------- */




// JS for order modal
/* --------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function() {
    const orderModal = document.getElementById('orderModal');
    const productNameInput = document.getElementById('orderProductName');
    const productPriceInput = document.getElementById('orderProductPrice');
    const quantityInput = document.getElementById('orderQuantity');
    const decreaseQuantityBtn = document.getElementById('decreaseQuantity');
    const increaseQuantityBtn = document.getElementById('increaseQuantity');
    const confirmOrderBtn = document.getElementById('confirmOrderBtn');

    const trackOrderBtn = document.getElementById('trackOrder');
    trackOrderBtn.addEventListener('click', function() {
    // create and show the Track Order modal
    const trackOrderModal = new bootstrap.Modal(document.getElementById('trackOrderModal'));
    trackOrderModal.show();
    });

    // add event listeners to all "Place Order" buttons
    document.querySelectorAll('.order-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const productName = this.getAttribute('data-product-name');
            const productPrice = this.getAttribute('data-product-price');

            productNameInput.value = productName;
            productPriceInput.value = `$${productPrice}`;
            quantityInput.value = 1;
        });
    });

    // quantity controls
    decreaseQuantityBtn.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });

    increaseQuantityBtn.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue < 10) {
            quantityInput.value = currentValue + 1;
        }
    });

    // confirm order
    confirmOrderBtn.addEventListener('click', function() {
        const productName = productNameInput.value;
        const productPrice = productPriceInput.value;
        const quantity = quantityInput.value;
        const deliveryAddress = document.getElementById('orderDeliveryAddress').value;
        const specialInstructions = document.getElementById('orderSpecialInstructions').value;

        // basic validation
        if (!deliveryAddress.trim()) {
            alert('Please enter a delivery address');
            return;
        }

        // close the modal
        const modalInstance = bootstrap.Modal.getInstance(orderModal);
        modalInstance.hide();
    });
});
/* --------------------------------------------------------------------- */





// JS for transparent navbar and solid navbar
/* --------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY >650) {
            navbar.classList.add("navbar-solid");
            navbar.classList.remove("navbar-transparent");
        } else {
            navbar.classList.add("navbar-transparent");
            navbar.classList.remove("navbar-solid");
        }
    });
});
/* --------------------------------------------------------------------- */


