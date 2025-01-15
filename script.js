// script.js
let currentInput = ''; // Untuk menyimpan seluruh input (angka dan operasi)
let currentNumber = ''; // Angka yang sedang diketik
let operation = null; // Operasi matematika yang dipilih

// Menampilkan input di layar
function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = currentInput || '0';
}

// Menambahkan angka ke layar
function appendNumber(number) {
    currentNumber += number; // Tambahkan angka ke input saat ini
    currentInput += number; // Tambahkan angka ke string seluruh input
    updateDisplay(); // Update tampilan layar
}

// Memilih operasi matematika
function chooseOperation(op) {
    if (currentNumber === '') return; // Jika belum ada angka, jangan lanjut
    currentInput += ` ${op} `; // Tambahkan operasi ke seluruh input (dengan spasi untuk estetika)
    currentNumber = ''; // Reset angka yang sedang diketik
    operation = op; // Simpan operasi yang dipilih
    updateDisplay(); // Update tampilan layar
}

// Membersihkan layar
function clearDisplay() {
    currentInput = '';
    currentNumber = '';
    operation = null;
    updateDisplay();
}

// Menghitung hasil
function compute() {
    try {
        const result = eval(currentInput.replace('÷', '/').replace('×', '*')); // Hitung hasil operasi
        currentInput = result.toString(); // Simpan hasil ke string seluruh input
        currentNumber = ''; // Reset angka yang sedang diketik
        operation = null; // Reset operasi
        updateDisplay(); // Update tampilan layar
    } catch (e) {
        currentInput = 'Error'; // Tampilkan pesan error jika ada kesalahan
        updateDisplay();
        setTimeout(clearDisplay, 2000); // Hapus setelah 2 detik
    }
}
