const SERVER_URL = 'http://faker.hook.io/?property=helpers.userCard&amp;locale=en_US';

function getUserCards(num) {
    let promises = []
    for (let i = 0; i < num; i++) {
        promises.push(fetch(SERVER_URL).then(res => res.json()));
    }
    Promise.all(promises).then(data => console.log(data)).catch(err => console.log(err));
}

getUserCards(25);
