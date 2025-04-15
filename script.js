const form = document.getElementById('loginForm');
    const errorMsg = document.getElementById('errorMsg');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();

      if (username === '' || password === '') {
        errorMsg.textContent = 'Por favor, preencha todos os campos.';
        return;
      }

      if (password.length < 6) {
        errorMsg.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        return;
      }

      // Aqui você pode adicionar sua lógica de autenticação
      errorMsg.style.color = 'green';
      errorMsg.textContent = 'Login bem-sucedido!';
      window.location.href = "cadastro.html";
    });

    function toggleMode() {
      document.body.classList.toggle('dark');
    }

    const cadastroForm = document.getElementById('cadastroForm');
    const cadastroMsg = document.getElementById('cadastroMsg');

    cadastroForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();
      const confirmPassword = document.getElementById('confirmPassword').value.trim();

      if (!nome || !email || !username || !password || !confirmPassword) {
        cadastroMsg.textContent = 'Por favor, preencha todos os campos.';
        return;
      }

      if (password.length < 6) {
        cadastroMsg.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        return;
      }

      if (password !== confirmPassword) {
        cadastroMsg.textContent = 'As senhas não coincidem.';
        return;
      }

      // Simulação de sucesso
      cadastroMsg.textContent = 'Cadastro realizado com sucesso!';
      cadastroMsg.classList.add('success');
      cadastroMsg.classList.remove('error');
    });

    function toggleMode() {
      document.body.classList.toggle('dark');
    }