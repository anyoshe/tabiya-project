const crypto = require('crypto');

const generateSecret = () => {
    return crypto.randomBytes(64).toString('hex'); // 64 bytes = 128 characters
};

console.log(generateSecret());
