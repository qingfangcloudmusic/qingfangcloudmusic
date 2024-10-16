let lyricsData = [
      { time: "00:00.00", lyric: "星光就在前方 - 抠抠"},
{ time: "00:12.07", lyric: "制作公司：匠心音乐/梨云音乐社"},
{ time: "00:13.73", lyric: "OP：匠心音乐"},
{ time: "00:16.91", lyric: "每次努力回头望"},
{ time: "00:19.73", lyric: "那姑娘 在远方"},
{ time: "00:24.97", lyric: "总会想来日方长"},
{ time: "00:27.7", lyric: "梦一场 去流浪"},
{ time: "00:33.0", lyric: "生活给我一身伤"},
{ time: "00:35.71", lyric: "或惆怅 或迷惘"},
{ time: "00:40.94", lyric: "念念不忘的姑娘"},
{ time: "00:43.79", lyric: "在心上 在远方"},
{ time: "00:48.46", lyric: "抬头看看那曾经的夕阳"},
{ time: "00:52.27", lyric: "落在我的肩上 那时心之所向"},
{ time: "00:56.96", lyric: "那些曾经努力后的失望"},
{ time: "01:00.25", lyric: "是青春的倔强 是情深一往"},
{ time: "01:06.23", lyric: "我不慌 星光就在前方"},
{ time: "01:09.49", lyric: "别再驻足眺望 背上我的行囊"},
{ time: "01:14.22", lyric: "就疯狂 答案都在路上"},
{ time: "01:17.42", lyric: "风在自由歌唱 翻山越岭飞翔"},
{ time: "01:22.27", lyric: "我不慌 梦想就在前方"},
{ time: "01:25.45", lyric: "带上心爱姑娘 明天就到远方"},
{ time: "01:30.21", lyric: "手不放 紧跟梦的方向"},
{ time: "01:33.44", lyric: "梦中就有希望 也许就在身旁"},
{ time: "01:39.45", lyric: "满目星光"},
{ time: "01:57.0", lyric: "生活给我一身伤"},
{ time: "01:59.75", lyric: "或惆怅 或迷惘"},
{ time: "02:04.91", lyric: "念念不忘的姑娘"},
{ time: "02:07.72", lyric: "在心上 在远方"},
{ time: "02:12.42", lyric: "抬头看看那曾经的夕阳"},
{ time: "02:16.24", lyric: "落在我的肩上 那时心之所向"},
{ time: "02:20.85", lyric: "那些曾经努力后的失望"},
{ time: "02:24.21", lyric: "是青春的倔强 是情深一往"},
{ time: "02:28.38", lyric: "我不慌 星光就在前方"},
{ time: "02:31.38", lyric: "别再驻足眺望 背上我的行囊"},
{ time: "02:36.2", lyric: "就疯狂 答案都在路上"},
{ time: "02:39.38", lyric: "风在自由歌唱 翻山越岭飞翔"},
{ time: "02:44.24", lyric: "我不慌 梦想就在前方"},
{ time: "02:47.36", lyric: "带上心爱姑娘 明天就到远方"},
{ time: "02:52.17", lyric: "手不放 紧跟梦的方向"},
{ time: "02:55.42", lyric: "梦中就有希望 也许就在身旁"},
{ time: "03:02.25", lyric: "我不慌 星光就在前方"},
{ time: "03:05.35", lyric: "别再驻足眺望 背上我的行囊"},
{ time: "03:10.19", lyric: "就疯狂 答案都在路上"},
{ time: "03:13.37", lyric: "风在自由歌唱 翻山越岭飞翔"},
{ time: "03:18.27", lyric: "我不慌 梦想就在前方"},
{ time: "03:21.36", lyric: "带上心爱姑娘 明天就到远方"},
{ time: "03:26.22", lyric: "手不放 紧跟梦的方向"},
{ time: "03:29.41", lyric: "梦中就有希望 也许就在身旁"},
{ time: "03:35.43", lyric: "满目星光"},
{ time: "03:44.95", lyric: "每次努力回头望"},
{ time: "03:47.72", lyric: "那姑娘 在远方"},
    // ... 更多歌词,
];
let lyricDiv = document.getElementById("lyric-content");
let audioPlayer = document.getElementById("audio-player");

// 解析时间格式，处理小数点
function parseTime(timeStr) {
    let parts = timeStr.split(':');
    let seconds = parseFloat(parts[1].split('.')) + parseFloat(parts[1].split('.')[1]) / 100;
    return parseFloat(parts) * 60 + seconds;
}

// 初始化歌词
lyricDiv.style.position = 'relative'; // 确保歌词容器可以滚动
lyricDiv.style.overflowY = 'auto'; // 设置歌词容器可滚动

let currentLine = 0;

// 初始化歌词
lyricsData.forEach(lyric => {
    let line = document.createElement("div");
    line.textContent = lyric.lyric;
    line.style.opacity = 0;
    line.style.position = 'relative';
    lyricDiv.appendChild(line);
});

// 更新歌词的显示
audioPlayer.addEventListener("timeupdate", function() {
    let currentSec = this.currentTime;
    for(let i = 0; i < lyricsData.length; ++i){
        let lyric = lyricsData[i];
        let lyricTime = parseTime(lyric.time);

        if(currentSec >= lyricTime){
            lyricDiv.children[i].style.opacity = 1; // 显示当前行
            currentLine = i;
        } else {
            break;
        }
    }
    // 滚动到当前显示的歌词行
    if(currentLine >= 0){
        lyricDiv.scrollTo({ 
            top: lyricDiv.children[currentLine].offsetTop - lyricDiv.clientHeight / 2,
            behavior: 'smooth'
        });
    }
});