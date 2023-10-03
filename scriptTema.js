const stylePadraoButton = document.getElementById('stylePadrao');
const styleClaroButton = document.getElementById('styleClaro');
const styleEscuroButton = document.getElementById('styleEscuro');
const themeStyle = document.getElementById('theme-style');

// Funções para alternar temas
function setTheme(theme) {
    themeStyle.href = `${theme}.css`;
    localStorage.setItem('selectedTheme', theme);
}

stylePadraoButton.addEventListener('click', () => setTheme('stylePadrao'));
styleClaroButton.addEventListener('click', () => setTheme('styleClaro'));
styleEscuroButton.addEventListener('click', () => setTheme('styleEscuro'));

// Aplicar o tema padrão ao carregar a página
const savedTheme = localStorage.getItem('selectedTheme');
if (savedTheme) {
    setTheme(savedTheme); // Aplicar o tema anteriormente selecionado ao carregar a página
} else {
    setTheme('stylePadrao'); // Tema padrão se nenhum tema foi selecionado anteriormente
}