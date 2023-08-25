document.addEventListener("DOMContentLoaded", function () {
    const partners = document.querySelectorAll(".partner");

    function animatePartners() {
        partners.forEach((partner, index) => {
            setTimeout(() => {
                partner.classList.add("show");
            }, index * 30);
        });
    }

    animatePartners();
});
