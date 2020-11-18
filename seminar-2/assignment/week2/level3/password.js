const fs = require('fs');
const crypto = require('crypto');

const password = "123";
const numArr = [1, 2, 3];
const fileCommonName = 'asyncPassword';

crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64');
    crypto.pbkdf2(password, salt, 100000, 64, 'sha512', (err, key) => {
        numArr.forEach((num) => {
            const fileName = fileCommonName + num;
            if(typeof password === "string" ){
                fs.writeFile(`${fileName}.txt`, key, () => {
                    console.log(`file[${fileName}] write complete`);
                });
            }
        });
        console.log(`password: ${key.toString('base64')}`);
    })
}
)



