import { localhost } from '../components/global';
const initData = () => (
  fetch(`${localhost}api/`)
    .then(res => res.json())
)

export default initData;