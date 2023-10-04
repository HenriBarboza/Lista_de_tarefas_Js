const stylePadraoButton = document.getElementById('stylePadrao');
const styleClaroButton = document.getElementById('styleClaro');
const styleEscuroButton = document.getElementById('styleEscuro');
const btnSelected = document.querySelectorAll('.btn-theme');
const themeStyle = document.getElementById('theme-style');

// Funções para alternar temas
function setTheme(theme) {
    themeStyle.href = `${theme}.css`;
    localStorage.setItem('selectedTheme', theme);
}

btnSelected.forEach((btn) => {
    btn.addEventListener('click', () => {
        // Remove a classe "selecionado" de todos os botões
        btnSelected.forEach((b) => b.classList.remove('selecionado'));
        
        // Adiciona a classe "selecionado" ao botão clicado
        btn.classList.add('selecionado');

        // Salva o ID do botão selecionado no localStorage
        localStorage.setItem('ultimoBotaoSelecionado', btn.id);
    });
});

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

const ultimoBotaoSelecionado = localStorage.getItem('ultimoBotaoSelecionado');
if (ultimoBotaoSelecionado) {
    const botaoSelecionado = document.getElementById(ultimoBotaoSelecionado);
    if (botaoSelecionado) {
        botaoSelecionado.click();
    }
}