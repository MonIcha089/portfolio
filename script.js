const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-link");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuBtn.textContent = navLinks.classList.contains("active") ? "✕" : "☰";
});

document.querySelectorAll(".nav-link a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuBtn.textContent = "☰";
  });
});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const phoneNumber = "6289676329058";
  const text = `Halo! Saya ${name} (${email}) ingin menghubungi anda.\n\nPesan: ${message}`;
  const encodedText = encodeURIComponent(text);

  const waLink = `https://wa.me/${phoneNumber}?text=${encodedText}`;

  window.open(waLink, "_blank");

  contactForm.reset();
});
