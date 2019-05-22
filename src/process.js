const path = require('path');
const fs = require('fs');

const file = fs.readFileSync(path.resolve(__dirname + '/city.list.json'));
const json = JSON.parse(file);

const length = json.length;
const melbCity = json.findIndex(({ name, country }) => name === 'Melbourne' && country === 'AU');

const names = Array.from(new Array(100), (_, idx) => {
    return `Someone ${idx}`;
});

const newJSON = [];
for (let i = 0; i < length; i++) {
    newJSON.push(Object.assign({}, json[i], {
        person_name: names[Math.floor(Math.random() * 100)]
    }));
}

fs.writeFileSync(path.resolve(__dirname + '/new-json.json'), JSON.stringify(newJSON, null, 2))
console.log(length);