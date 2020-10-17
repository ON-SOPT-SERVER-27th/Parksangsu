const members = require('./member');

function getFemale(members) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const member = members.filter(item => item.gender === '여')
            resolve(member);
        }, 500)
    })
}

function getYB(members) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const member = members.filter(item => item.status === 'YB')
            resolve(member);
        }, 500)
    })
}

function getiOS(members) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const member = members.filter(item => item.part === 'iOS')
            resolve(member);
        }, 500)
    })
}

getFemale(members) //
    .then(members => getYB(members))
    .then(members => getiOS(members))
    .then(members => console.log(members))