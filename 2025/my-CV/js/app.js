document.addEventListener("DOMContentLoaded", () => {
  const chatbotAvatar = document.getElementById("chatbot-avatar");
  const bubble = document.getElementById("chat-bubble");
  const panel = document.getElementById("chatbot-panel");

  const messages = [
    { text: "WELCOME TO MY PROFILE ✨✨✨", target: "#home" },
    { text: "🔥 Bạn muốn xem kỹ năng của tôi không?", target: "#skill" },
    { text: "🚀 Click để xem Project!", target: "#project" },
    { text: "📩 Liên hệ với tôi ngay nhé!", target: "#contact" }
  ];

  let msgIndex = 0;

  function showMessage(index) {
    bubble.innerText = messages[index].text;
    bubble.dataset.target = messages[index].target;
    bubble.classList.add("show");
    setTimeout(() => { bubble.classList.remove("show"); }, 4500);
  }

  setTimeout(() => showMessage(0), 1200);
  setInterval(() => {
    msgIndex = (msgIndex + 1) % messages.length;
    showMessage(msgIndex);
  }, 7500);

  bubble.addEventListener("click", () => {
    const target = bubble.dataset.target;
    if (target) {
      document.querySelector(target).scrollIntoView({ behavior: "smooth" });
    }
  });

  chatbotAvatar.addEventListener("click", () => {
    panel.classList.toggle("show");
  });

  document.querySelectorAll(".chatbot-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.target;
      if (target) {
        document.querySelector(target).scrollIntoView({ behavior: "smooth" });
        panel.classList.remove("show");
      }
    });
  });

  const chatbotImg = document.querySelector("#chatbot img");
  setInterval(() => {
    chatbotImg.style.animation = "blink 0.3s linear";
    setTimeout(() => { chatbotImg.style.animation = ""; }, 300);
  }, 6000);

  setInterval(() => {
    chatbotImg.style.transform = "rotate(-6deg)";
    setTimeout(() => { chatbotImg.style.transform = "rotate(0deg)"; }, 400);
  }, 8000);

  // ==================== PROJECT MODAL ====================
  const projects = document.querySelectorAll(".listProject .item");
  const modal = document.getElementById("project-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-description");
  const modalTech = document.getElementById("modal-tech");
  const modalLink = document.getElementById("modal-link");
  const modalClose = document.getElementById("modal-close");

  const projectData = [
    {
      title: "Music Player App",
      desc: "Ứng dụng nghe nhạc với playlist, phát nhạc online/offline.",
      tech: ["JavaScript", "HTML5", "CSS3"],
      link: "https://github.com/demo/music-player"
    },
    {
      title: "Burger Store",
      desc: "Website bán burger với giỏ hàng và thanh toán.",
      tech: ["ReactJS", "Firebase", "Bootstrap"],
      link: "https://github.com/demo/burger-store"
    },
    {
      title: "Resort Management",
      desc: "Quản lý resort: đặt phòng, dịch vụ, khách hàng.",
      tech: ["Java Spring Boot", "MySQL", "JWT"],
      link: "https://github.com/demo/resort-management"
    },
    {
      title: "Sporting Goods Store",
      desc: "E-commerce shop bán dụng cụ thể thao.",
      tech: ["Angular", "Firebase", "NodeJS"],
      link: "https://github.com/demo/sporting-goods"
    },
    {
      title: "Social Network App",
      desc: "Ứng dụng mạng xã hội với đăng bài, chat, follow.",
      tech: ["React Native", "NodeJS", "MongoDB"],
      link: "https://github.com/demo/social-network"
    },
    {
      title: "Fast Food Store",
      desc: "App đặt đồ ăn nhanh với thanh toán online.",
      tech: ["VueJS", "ExpressJS", "Firebase"],
      link: "https://github.com/demo/fastfood-store"
    }
  ];

  projects.forEach((proj, i) => {
    proj.addEventListener("click", () => {
      const data = projectData[i];
      modalTitle.textContent = data.title;
      modalDesc.textContent = data.desc;
      modalTech.innerHTML = data.tech.map(t => `<li>${t}</li>`).join("");
      modalLink.href = data.link;
      modal.style.display = "flex";
    });
  });

  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
