    document.getElementById('signupForm').addEventListener('submit', function(e) {
      e.preventDefault();

      document.querySelectorAll('.error').forEach(el => el.textContent = '');

      const firstName = document.getElementById('firstName').value.trim();
      const lastName = document.getElementById('lastName').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
      const contact = document.getElementById('contact').value.trim();
      const whySupport = document.getElementById('whySupport').value.trim();
      const sex = document.querySelector('input[name="sex"]:checked');

      let valid = true;
      if (!firstName) {
        document.getElementById('error-fn').textContent = 'required';
        valid = false;
      }
      if (!lastName) {
        document.getElementById('error-ln').textContent = 'required';
        valid = false;
      }
      if (!sex) {
        document.getElementById('error-sex').textContent = 'required';
        valid = false;
      }
      if (!email) {
        document.getElementById('error-email').textContent = 'required';
        valid = false;
      }
      if (!password) {
        document.getElementById('error-password').textContent = 'required';
        valid = false;
      }
      if (!whySupport) {
        document.getElementById('error-why').textContent = 'required';
        valid = false;
      }

      if (valid) {
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('email', email);
        localStorage.setItem('sex', sex.value);
        localStorage.setItem('whySupport', whySupport);
        window.location.href = 'proj_profile_ablas.html';
      }
    });