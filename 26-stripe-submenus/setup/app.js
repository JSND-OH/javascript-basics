import sublinks from "./data";

const toggleBtn = document.querySelector(".toggle-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebarWrapper = document.querySelector(".sidebar-links");
const linksBtns = [...document.querySelectorAll(".link-btn")];
const submenu = document.querySelector(".submenu");
const hero = document.querySelector(".hero");
const nav = document.querySelector(".nav");

toggleBtn.addEventListener("click", () => {
  sidebarWrapper.classList.add("show");
});
closeBtn.addEventListener("click", () => {
  sidebarWrapper.classList.remove("show");
});

sidebarWrapper.innerHTML = sublinks
  .map((item) => {
    return `<article >
    <h4>${page}</h4>
    <div class="sidebar-sublinks">
    ${links
      .map((link) => {
        return `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`;
      })
      .join("")}
    </div>
    </article>`;
  })
  .join("");

linksBtns.forEach((btn) => {
  btn.addEventListener("mouseover", function (e) {
    const text = e.currentTarget.textContent;
    const tempBtn = e.currentTarget.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const buttom = tempBtn.buttom - 3;

    const tempPage = sublinks.find((link) => link.page === text);
    if (tempPage) {
      const { page, links } = tempPage;
      sublinks.classList.add("show");
      submenu.style.left = `${center}px`;
      submenu.style.top = `${buttom}px`;
    }
  });
});

hero.addEventListener.addEventListener("mouseover", function (e) {
  submenu.classList.add("show");
});
nav.addEventListener("mouseover", function (e) {
  if (!e.target.classList.contains("link-btn"))
    submenu.classList.remove("show");
});
