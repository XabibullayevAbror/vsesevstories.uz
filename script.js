document.querySelector(".login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;

  if (username.trim() === "") {
    alert("Iltimos, foydalanuvchi nomini kiriting!");
    return;
  }

  // localStorage ga foydalanuvchini saqlash (istasa ishlatadi)
  localStorage.setItem("user", username);

  // home sahifaga yo‘naltirish
  window.location.href = "home.html";
});

// Bu yerda JS hozircha animatsiya kerak emas, ammo foydalanuvchi nomi ko‘rsatish uchun ishlatish mumkin
const username = localStorage.getItem("user");
if (username) {
  document.querySelector(".welcome-text").textContent = `Xush kelibsiz, ${username}!`;
}
