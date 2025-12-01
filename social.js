// Tıklama logu (isteğe bağlı)
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        console.log(card.textContent.trim() + " açıldı.");
    });
});
