
// ========== COLLAPSIBLE SECTIONS ==========
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.collapsible-header').forEach(header => {
        header.addEventListener('click', () => {
            header.parentElement.classList.toggle('open');
        });
    });
});

// ========== SEARCH FILTER ==========
function filterQuestions() {
    const query = document.getElementById('questionSearch').value.toLowerCase();
    const cards = document.querySelectorAll('.q-card');
    
    cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(query) ? 'block' : 'none';
    });
}

// ========== DARK MODE TOGGLE ==========
document.addEventListener('DOMContentLoaded', function() {
    // Create toggle button
    const btn = document.createElement('div');
    btn.className = 'theme-toggle';
    btn.innerHTML = '🌙 Theme';
    document.body.appendChild(btn);
    
    // Check saved preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark');
        btn.innerHTML = '☀️ Theme';
    }
    
    // Toggle handler
    btn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const isDark = document.body.classList.contains('dark');
        localStorage.setItem('darkMode', isDark);
        btn.innerHTML = isDark ? '☀️ Theme' : '🌙 Theme';
    });
});
