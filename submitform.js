function submitForm() {
  var fname = document.getElementById('fname').value.trim();
  var email = document.getElementById('email').value.trim();
  var message = document.getElementById('message').value.trim();
  var errEl = document.getElementById('formError');

  errEl.style.display = 'none';
  if (!fname || !email || !message) {
    errEl.textContent = 'Please fill in your name, email, and message.';
    errEl.style.display = 'block';
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errEl.textContent = 'Please enter a valid email address.';
    errEl.style.display = 'block';
    return;
  }

  var lname = document.getElementById('lname').value.trim();
  var subject = document.getElementById('subject').value;
  var btn = document.getElementById('submitBtn');

  btn.disabled = true;
  btn.textContent = 'Sending…';

  var to = 'admin@zulit.app';
  var sub = encodeURIComponent((subject || 'Website inquiry') + ' from ' + fname + (lname ? ' ' + lname : ''));
  var body = encodeURIComponent('Name: ' + fname + (lname ? ' ' + lname : '') + '\nEmail: ' + email + '\nSubject: ' + (subject || 'General') + '\n\n' + message);

  window.location.href = 'mailto:' + to + '?subject=' + sub + '&body=' + body;

  setTimeout(function() {
    document.getElementById('formFields').style.display = 'none';
    var s = document.getElementById('formSuccess');
    s.classList.add('show');
  }, 800);
}
