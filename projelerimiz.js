// Basit SPA (tek sayfa uygulaması) navigasyonu için JS
// Proje detayları burada tanımlanıyor:
const projects = {
  p1: {
    title: "Proje 1: Web Uygulaması",
    desc: "Kısa açıklama: Modern arayüz, hızlı performans.",
    content: "Bu proje, HTML, CSS ve JavaScript kullanılarak geliştirilmiş bir web uygulamasıdır. Modern tasarım ve yüksek performans ön plandadır."
  },
  p2: {
    title: "Proje 2: Mobil Oyun",
    desc: "Kısa açıklama: Bağımlılık yapıcı oynanış ve görseller.",
    content: "Mobil oyun projesi; Unity veya Godot kullanılarak geliştirilmiştir. Oynanış döngüsü, ses efektleri ve karakter tasarımları özel olarak hazırlanmıştır."
  },
  p3: {
    title: "Proje 3: UX Tasarım",
    desc: "Kısa açıklama: Kullanıcı odaklı tasarım çalışması.",
    content: "Bu proje, kullanıcı deneyimi (UX) odaklı bir tasarım sürecini içerir. Araştırma, prototipleme ve test aşamaları ile detaylandırılmıştır."
  }
};

// Gerekli HTML elementleri
const homePage = document.getElementById("home-page");
const detailPage = document.getElementById("detail-page");
const detailTitle = document.getElementById("detailTitle");
const detailDesc = document.getElementById("detailDesc");
const detailContent = document.getElementById("detailContent");
const backBtn = document.getElementById("backBtn");

// Fonksiyonlar
function showHome() {
  homePage.classList.add("active");
  detailPage.classList.remove("active");
  document.title = "Projelerimiz - Anasayfa";
}

function showDetail(id) {
  const p = projects[id];
  if (!p) return showHome();

  // Sayfa görünümü değiştir
  homePage.classList.remove("active");
  detailPage.classList.add("active");

  // Bilgileri doldur
  detailTitle.textContent = p.title;
  detailDesc.textContent = p.desc;
  detailContent.textContent = p.content;
  document.title = p.title;

  // URL hash değiştir (örnek: #p1)
  history.pushState({ page: id }, "", "#" + id);
}

// Proje kutularına tıklama
document.querySelectorAll(".project").forEach(el => {
  el.addEventListener("click", () => {
    const id = el.getAttribute("data-id");
    showDetail(id);
  });
});

// Sidebar bağlantıları
document.querySelectorAll(".link[data-target]").forEach(link => {
  link.addEventListener("click", e => {
    const id = e.currentTarget.getAttribute("data-target");
    showDetail(id);
  });
});

// "Anasayfa" bağlantısı
document.getElementById("goHome").addEventListener("click", showHome);

// Geri butonu
backBtn.addEventListener("click", () => {
  history.back();
});

// Tarayıcı geri/ileri tuşları
window.addEventListener("popstate", ev => {
  const state = ev.state;
  if (state && state.page) showDetail(state.page);
  else showHome();
});

// Sayfa ilk yüklendiğinde hash varsa otomatik o projeyi göster
document.addEventListener("DOMContentLoaded", () => {
  const hash = location.hash.replace("#", "");
  if (hash && projects[hash]) showDetail(hash);
});
