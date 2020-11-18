const members = require('./member');

const memberSelector = (callback, timeout) => {
    setTimeout(callback, timeout);
}

const getFemale = members => {
    return new Promise((resolve, reject) => {
        memberSelector(() => {
            const member = members.filter(member => member.gender === '여');
            resolve(member);
        }, 500)
    });
};

const getYB = members => {
    return new Promise(function (resolve, reject){
        memberSelector(() => {
            const member = members.filter(member => member.status === 'YB');
            resolve(member);
        }, 500)
    });
};

const getiOS = members => {
    return new Promise(function (resolve, reject){
        memberSelector(() => {
            const member = members.filter(member => member.part === 'iOS');
            resolve(member);
        }, 500)
    })
}

getFemale(members)
    .then(members => getYB(members))
    .then(members => getiOS(members))
    .then(members => console.log(members));