const Axios = require('axios')
    , Fs = require('fs')
    , { to } = require('await-to-js');

const Campaign = 1767001;

let Patrons = [];

async function fetchPatrons(opt = {}) {
    let url, err, result;

    if (opt.hasOwnProperty('url'))
        url = opt.url;
    else
        url = `https://www.patreon.com/api/oauth2/api/campaigns/${Campaign}/pledges`;

    [ err, result ] = await to(
        Axios.get(url, {
            params: {
                include: 'patron.null',
                access_token: process.argv[2]
            }
        })
    );

    if (err) {
        console.log('Failed to fetch patron data');
        process.exit(1);
    }

    for (const Patron of result.data.included)
        Patrons.push({ id: Patron.id, name: Patron.attributes.first_name, avatar: Patron.attributes.image_url });

    if (result.data.links.hasOwnProperty('next'))
        fetchPatrons({ url: result.data.links.next });
    else {
        console.log(`Fetched ${Patrons.length} patrons`);

        Fs.writeFileSync('../assets/data/Patrons.json', JSON.stringify(Patrons));
    }
}

fetchPatrons();