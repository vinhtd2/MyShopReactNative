import { localhost } from '../components/global'

const changeInfo = (token, name, phone, address) => (
  fetch(`${localhost}api/change_info.php`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({ token, name, phone, address })
  })
    .then(res => res.json())
);

module.exports = changeInfo;