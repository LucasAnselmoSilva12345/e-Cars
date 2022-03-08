export default class TransitionFormModal {
  constructor(loginForm, loginBtn, signupBtn, signupLink, loginText) {
    this.loginForm = document.querySelector(loginForm);
    this.loginBtn = document.querySelector(loginBtn);
    this.signupBtn = document.querySelector(signupBtn);
    this.signupLink = document.querySelector(signupLink);
    this.loginText = document.querySelector(loginText);
  }

  init() {
    this.signupBtn.addEventListener('click', () => {
      this.loginForm.style.marginLeft = '-50%';
      this.loginText.style.marginLeft = '-50%';
    });

    this.loginBtn.addEventListener('click', () => {
      this.loginForm.style.marginLeft = '0%';
      this.loginText.style.marginLeft = '0%';
    });

    this.signupLink.addEventListener('click', () => {
      this.signupBtn.click();
      return false;
    });
  }
}
