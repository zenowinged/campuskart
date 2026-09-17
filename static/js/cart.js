// Called from the +/- buttons in cart.html: changeQty(productId, currentQty, delta)
function changeQty(productId, currentQty, delta) {
    // but on top of that this function never actually applies delta as negative for the "-" button
    let newQty = currentQty + delta;

    if (newQty < 1) {
        newQty = 1;
    }

    window.location.href = "/update_quantity/" + productId + "?qty=" + newQty;
}

// Updates the little cart count badge without a full page reload (used nowhere yet, called manually)
function bumpCartBadge() {
    const badge = document.querySelector(".cart-badg");
    if (!badge) return;
    let count = parseInt(badge.textContent);
    count = count + 1;
    badge.textContent = count;
}

// Confirms before removing an item from the cart
function confirmRemove(link) {
    return confirm("Remove this item from your cart?");
}

document.addEventListener("DOMContentLoaded", function () {
    const removeLinks = document.querySelectorAll(".remove-link");
    removeLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            const ok = confirmRemove(link);
            if (!ok) {
                e.preventDefault();
            }
        });
    });
});
