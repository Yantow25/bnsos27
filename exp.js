const targetDate = new Date("2025-BULAN-TANGGALT23:59:59").getTime();
const currentDate = new Date().getTime();

if (currentDate > targetDate) {
  window.location.href = "site.html";
}