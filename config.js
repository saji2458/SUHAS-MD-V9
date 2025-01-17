//
// ░██████╗██╗░░░██╗██╗░░██╗░█████╗░░██████╗░░░░░░███╗░░░███╗██████╗░░░░░░░██╗░░░██╗░█████╗░
// ██╔════╝██║░░░██║██║░░██║██╔══██╗██╔════╝░░░░░░████╗░████║██╔══██╗░░░░░░██║░░░██║██╔══██╗
// ╚█████╗░██║░░░██║███████║███████║╚█████╗░█████╗██╔████╔██║██║░░██║█████╗╚██╗░██╔╝╚██████║
// ░╚═══██╗██║░░░██║██╔══██║██╔══██║░╚═══██╗╚════╝██║╚██╔╝██║██║░░██║╚════╝░╚████╔╝░░╚═══██║
// ██████╔╝╚██████╔╝██║░░██║██║░░██║██████╔╝░░░░░░██║░╚═╝░██║██████╔╝░░░░░░░░╚██╔╝░░░█████╔╝
// ╚═════╝░░╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░░░░░░░╚═╝░░░░░╚═╝╚═════╝░░░░░░░░░░╚═╝░░░░╚════╝░


// * Project name - SUHAS-MD-V9 
// * Author - Suhas Pathsindu.
// * Team - 🇦🇴★ ͟͞  ͟͞ ̶❮ᓩＣ͔́ʏʙ͕֝́́ᴇʀ〴Ｄ֝֩ʀᴀ֞ͨͬͥɢᴏɴךＯ͕ͩꜰ͑́ꜰɪᴄ͚ͫɪᴀֹ֣֝ʟ❯ ͟͞ ̶ ͟͞★🇦🇴 
// * Version - 9.0.0

// World Best & Powerfull WhatsApp User Bot in Sri Lanka.
// Don't Copy My Codes. :(


const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "CREQmA5D#Xn46oaqLmj-mh-idq6jYM9RTzfoWGNdw2fwkj2cZGww", // 📌 𝗚𝗲𝘁 𝗦𝗲𝘀𝘀𝗶𝗼𝗻 𝗶𝗱 𝗶𝗻 𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗣𝗮𝗶𝗿 𝗦𝗶𝘁𝗲 📌
SUDO_NB: process.env.SUDO_NB || "601111710510", // 𝗔𝗱𝗱 𝗬𝗼𝘂𝗿 𝗡𝘂𝗺𝗯𝗲𝗿 𝗛𝗲𝗿𝗲 𝗪𝗶𝘁𝗵 𝗖𝗼𝘂𝗻𝘁𝗿𝘆 𝗖𝗼𝗱𝗲
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", // 📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌
OWNER_NUMBER: "94750177369",
MODE: process.env.MODE || "private", // 📌 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗼𝗿 𝗽𝘂𝗯𝗹𝗶𝗰 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌
};
