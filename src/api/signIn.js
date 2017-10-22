import { localhost } from '../components/global';
const signIn = (email, password) => (
  fetch(`${localhost}api/login.php`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      email,
      password,
    })
  })
    .then(res => res.json())
);
module.exports = signIn;
