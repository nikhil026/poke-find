import axios from "axios";
import fs from 'fs';

let i = 45;
const fetchAndDownloadCronScript = async (i) => {
    // for (let i = 35; i < 35; i++) {
    let parameter = i < 10 ? `00${i}` : (i < 100) ? `0${i}` : `${i}`;

    let response = await axios({
        url: `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${parameter}.png`,
        method: 'get',
        responseType: 'stream'
    })
    const writeStream = fs.createWriteStream(`public/images/${parameter}.png`)
    response.data.pipe(writeStream);
    writeStream.on('close', (err, data) => {
        console.log('hey', i)
        setTimeout(() => {

            fetchAndDownloadCronScript(++i);

        }, i % 3 == 0 ? 6000 : 3000)
    })
    // }
}

// let i = 35;
fetchAndDownloadCronScript(97);