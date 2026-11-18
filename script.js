'use strict';

// Tema tercihi sadece bu tarayıcıda saklanır.
const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
const saved = (() => { try { return localStorage.getItem('hamza-theme'); } catch { return null; } })();
if (saved === 'light' || saved === 'dark') root.dataset.theme = saved;

toggle.addEventListener('click', () => {
  const next = root.dataset.theme === 'light' ? 'dark' : 'light';
  root.dataset.theme = next;
  toggle.setAttribute('aria-label', next === 'light' ? 'Koyu görünüme geç' : 'Açık görünüme geç');
  try { localStorage.setItem('hamza-theme', next); } catch { /* Storage olmayabilir. */ }
});

const toast = document.getElementById('toast');
const copyButton = document.getElementById('copyLink');
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 2600);
}
copyButton.addEventListener('click', async () => {
  const url = location.protocol === 'file:' ? 'Bu bağlantıyı yayınlandıktan sonra kopyalayabilirsin.' : location.href.split('#')[0];
  if (location.protocol === 'file:') { showToast(url); return; }
  try {
    await navigator.clipboard.writeText(url);
    showToast('Bağlantı kopyalandı!');
  } catch {
    showToast('Bağlantı: ' + url);
  }
});
document.getElementById('currentYear').textContent = new Date().getFullYear();
