document.addEventListener('DOMContentLoaded', function() {
    // Sembunyikan loader saat halaman selesai dimuat
    const loader = document.getElementById('loader');
    if (loader) loader.style.display = 'none';
    const container = document.querySelector('.result-container');
    const items = container.querySelectorAll('.result-item');
    
    let totalHeight = 0;
    let currentPosition = 0;

    // Hitung tinggi total dari semua item
    items.forEach(item => {
        totalHeight += item.clientHeight;
    });

    // Fungsi untuk menjalankan animasi scroll
    function startScroll() {
        currentPosition -= 1;
        container.scrollTop = -currentPosition;

        // Reset posisi ketika mencapai akhir
        if (-currentPosition >= totalHeight) {
            currentPosition = 0;
        }
    }

    // Mulai animasi scroll setiap 20ms
    setInterval(startScroll, 50);
});

document.querySelectorAll('.otp-input').forEach((input, index, inputs) => {
    input.addEventListener('input', () => {
        if (input.value.length === input.maxLength) {
            if (index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && input.value.length === 0 && index > 0) {
            inputs[index - 1].focus();
        }
    });
});