document.addEventListener("DOMContentLoaded", function () {
    console.log("Script carregado com sucesso!");
  
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const toggleToRegisterBtn = document.getElementById("toggleToRegister");
    const toggleToLoginBtn = document.getElementById("toggleToLogin");
  
    // Alterna do formulário de Login para Cadastro
    toggleToRegisterBtn.addEventListener("click", function () {
      loginForm.style.display = "none";
      registerForm.style.display = "block";
    });
  
    // Alterna do formulário de Cadastro para Login
    toggleToLoginBtn.addEventListener("click", function () {
      registerForm.style.display = "none";
      loginForm.style.display = "block";
    });
  });
  