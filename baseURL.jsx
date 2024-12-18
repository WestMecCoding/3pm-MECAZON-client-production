import axios from 'axios';
export default function baseURL() {
    const api = axios.create({
        // baseurl =
        // run a code space on https://github.com/WestMecCoding/3pm-MECAZON-server-production
        // use TeamC-Integration branch
        // command: npm run start:prod
        // go to ports tab in terminal and make the 3000 port public under the visibility column
        baseURL: "https://urban-telegram-69g5wqvwqjwrf5p5g-3000.app.github.dev/",
    });
    return api;
}