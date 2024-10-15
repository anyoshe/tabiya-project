// utils/generateToken.js
// const jwt = require('jsonwebtoken');

// const generateToken = (user) => {
//     const payload = {
//         id: user._id,
//         username: user.username,
//         email: user.email,
//     };

//     const token = jwt.sign(payload, process.env.JWT_SECRET, { 
//         expiresIn: '1h'
//     });

//     return token;
// };

// module.exports = generateToken;
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    const payload = {
        id: user._id,
        username: user.username,
        email: user.email,
        ...(user.fullName && { fullName: user.fullName }),  // Add fullName if it exists
        ...(user.contact && { contact: user.contact })      // Add contact if it exists
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { 
        expiresIn: '1h'
    });

    return token;
};

module.exports = generateToken;
