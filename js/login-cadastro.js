function toggleScreen() {
    const loginScreen = document.getElementById('loginScreen');
    const registerScreen = document.getElementById('registerScreen');

    if (loginScreen.style.display === 'none') {
        loginScreen.style.display = 'block';
        registerScreen.style.display = 'none';
    } else {
        loginScreen.style.display = 'none';
        registerScreen.style.display = 'block';
    }
}

function validateForm() {
    const nome = document.getElementById('registerNome').value;
    const cpf = document.getElementById('registerCPF').value;
    const senha = document.getElementById('registerSenha').value;
    const confirmSenha = document.getElementById('confirmSenha').value;

    if (nome === '' || cpf === '' || senha === '' || confirmSenha === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    if (senha !== confirmSenha) {
        alert('As senhas não coincidem.');
        return false;
    }

    if (cpf.length !== 11 || isNaN(cpf)) {
        alert('CPF inválido. Deve conter 11 números.');
        return false;
    }

    // Salvar o CPF e a senha no localStorage
    localStorage.setItem('registeredCPF', cpf);
    localStorage.setItem('registeredSenha', senha);

    alert('Cadastro realizado com sucesso!');
    toggleScreen();
    return true;
}

function login() {
    const cpf = document.getElementById('loginCPF').value.trim();
    const senha = document.getElementById('loginSenha').value.trim();

    if (cpf === '' || senha === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Recuperar o CPF e a senha do localStorage
    const storedCPF = localStorage.getItem('registeredCPF');
    const storedSenha = localStorage.getItem('registeredSenha');

    if (cpf === storedCPF && senha === storedSenha) {
        alert('Login bem-sucedido!');
        window.location.href = 'pages/home.html'; 
    } else {
        alert('CPF ou senha incorretos. Tente novamente.');
    }
}
