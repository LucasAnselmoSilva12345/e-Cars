export function initTransitionFormModal() {
  const loginForm = document.querySelector('form.login');
  const loginBtn = document.querySelector('label.login');
  const signupBtn = document.querySelector('label.signup');
  const signupLink = document.querySelector('.signup-link a');
  const loginText = document.querySelector('.title-text .login');

  signupBtn.addEventListener('click', () => {
    loginForm.style.marginLeft = '-50%';
    loginText.style.marginLeft = '-50%';
  });
  loginBtn.addEventListener('click', () => {
    loginForm.style.marginLeft = '0%';
    loginText.style.marginLeft = '0%';
  });
  signupLink.addEventListener('click', () => {
    signupBtn.click();
    return false;
  });
}
