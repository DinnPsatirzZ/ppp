const fs = require('fs')
const chalk = require('chalk')
global.owner = ['6281233649676', '6287819654911', '62895611406599', '6288706574415', '79131970045', '6288808095256']
global.premium = ['6281233649676', '6287819654911', '62895611406599']
global.packname = '' 
global.author = 'DiN-aF\n\nWA : 087819654911\nIG : @dnpstrz'
global.sessionName = 'semsi'
global.prefa = ['!', '.', '🐦', '🐤', '🗿']
global.sp = ''
global.limitawal = { 
    premium: "Infinity", 
    free: "Infinity" 
    }, 
global.thumb = fs.readFileSync('./lib/hisoka.jpg'), 
global.visoka = { 
    url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' 
    }
global.mess = { 
    success: 'Berhasil !',
    admin: 'Fitur Khusus Admin Group!', 
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!', 
    owner: 'Fitur Khusus Owner Bot', 
    group: 'Fitur Digunakan Hanya Untuk Group!', 
    private: 'Fitur Digunakan Hanya Untuk Private Chat!', 
    bot: 'Fitur Khusus Pengguna Nomor Bot', 
    wait: 'Loading...', 
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12', 
    }

let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file), 
console.log(chalk.redBright(`Updated '${__filename}'`)), 
delete require.cache[file], 
require(file) })