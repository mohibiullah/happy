function showBirthdayWish() {
    const name = document.getElementById("name").value;
    const birthdayWishElement = document.getElementById("birthday-wish");

    if (name.trim() === "") {
        alert("Please enter your name!");
        return;
    }

    const birthdayMessage = `🎂 Happy Birthday, ${name}! 🎂\nWishing you a day filled with love, joy, and lots of cake! 🎉`;

    birthdayWishElement.textContent = birthdayMessage;
}
