const fs = require("fs");
const playList = fs.readFileSync('./video_1.m3u8', 'utf-8');
let chunksList = [];
for (let i =0; i < playList.length - 30; i++) {
    if (playList.substring(i, i + 5) == "video") {
        chunksList.push(playList.substring(i, i + 21));
    }
}
console.log(chunksList[chunksList.length - 1]);