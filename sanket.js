document.addEventListener('DOMContentLoaded', () => {
    const quantityInputs = document.querySelectorAll('.item-quantity');
    const totalPriceElement = document.getElementById('total-price');

    quantityInputs.forEach(input => {
        input.addEventListener('change', updateCart);
    });

    function updateCart() {
        let total = 0;

        document.querySelectorAll('.cart-item').forEach(item => {
            const priceElement = item.querySelector('.item-price');
            const quantityInput = item.querySelector('.item-quantity');
            const totalPriceElement = item.querySelector('.item-total-price');

            const price = parseFloat(priceElement.dataset.price);
            const quantity = parseInt(quantityInput.value);

            const itemTotal = price * quantity;
            totalPriceElement.textContent = `$${itemTotal.toFixed(2)}`;

            total += itemTotal;
        });

        totalPriceElement.textContent = total.toFixed(2);
    }

    // Initial update to set the correct total price on load
    updateCart();
});
