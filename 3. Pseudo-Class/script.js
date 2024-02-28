const checkbox = document.querySelector('#togg;e')
const html = document.querySelector('html')
// Mengambil element menggunakan DOM Selector


checkbox.addEventListener('click', function() { //Melakukan event
    checkbox.checked ? html.classList.add('dark') : html.classList.remove('dark')
    // Melakukan pengecekan dengan ternary
})