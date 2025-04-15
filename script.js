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
    });

    function toggleMode() {
      document.body.classList.toggle('dark');
    }