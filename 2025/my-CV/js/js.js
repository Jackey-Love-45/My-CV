// document.addEventListener("DOMContentLoaded", () => {
//   const chatbotAvatar = document.getElementById("chatbot-avatar");
//   const bubble = document.getElementById("chat-bubble");
//   const panel = document.getElementById("chatbot-panel");
//
//   const messages = [
//     { text: "WELCOME TO MY PROFILE ✨✨✨", target: "#home" },
//     { text: "🔥 Bạn muốn xem kỹ năng của tôi không?", target: "#skill" },
//     { text: "🚀 Click để xem Project!", target: "#project" },
//     { text: "📩 Liên hệ với tôi ngay nhé!", target: "#contact" }
//   ];
//
//   let msgIndex = 0;
//
//   function showMessage(index) {
//     bubble.innerText = messages[index].text;
//     bubble.dataset.target = messages[index].target;
//     bubble.classList.add("show");
//     setTimeout(() => { bubble.classList.remove("show"); }, 4500);
//   }
//
//   // Hiện tin nhắn đầu tiên
//   setTimeout(() => showMessage(0), 1200);
//
//   // Luân phiên tin nhắn
//   setInterval(() => {
//     msgIndex = (msgIndex + 1) % messages.length;
//     showMessage(msgIndex);
//   }, 7500);
//
//   // Click bong bóng → scroll section
//   bubble.addEventListener("click", () => {
//     const target = bubble.dataset.target;
//     if (target) {
//       document.querySelector(target).scrollIntoView({ behavior: "smooth" });
//     }
//   });
//
//   // Click avatar → toggle panel
//   chatbotAvatar.addEventListener("click", () => {
//     panel.classList.toggle("show");
//   });
//
//   // Click nút panel
//   document.querySelectorAll(".chatbot-btn").forEach(btn => {
//     btn.addEventListener("click", () => {
//       const target = btn.dataset.target;
//       if (target) {
//         document.querySelector(target).scrollIntoView({ behavior: "smooth" });
//         panel.classList.remove("show");
//       }
//     });
//   });
// });
//
// // Hiệu ứng chớp mắt + vẫy tay
// const chatbotImg = document.querySelector("#chatbot img");
// setInterval(() => {
//   chatbotImg.style.animation = "blink 0.3s linear";
//   setTimeout(() => { chatbotImg.style.animation = ""; }, 300);
// }, 6000);
//
// setInterval(() => {
//   chatbotImg.style.transform = "rotate(-6deg)";
//   setTimeout(() => { chatbotImg.style.transform = "rotate(0deg)"; }, 400);
// }, 8000);
// document.addEventListener("DOMContentLoaded", () => {
//   const avatar = document.getElementById("avatar");
//   const menu = document.getElementById("menu");
//
//   avatar.addEventListener("click", () => {
//     menu.classList.toggle("hidden");
//   });
// });
