let lyricsData = [
	{ time: "00:00.00", lyric: "转身即心痛-吉星出租"},
	{ time: "00:01.00", lyric: "庆方云音乐出品"},
	{ time: "00:15.93", lyric: "论我前世与你几次回眸"},
{ time: "00:22.83", lyric: "今生是否还能厘清缘由"},
{ time: "00:28.89", lyric: "情是否依旧"},
{ time: "00:30.6", lyric: "心是否依旧"},
{ time: "00:32.0", lyric: "偏爱是否依旧"},
{ time: "00:35.58", lyric: "我们却心照不宣都沉默了好久"},
{ time: "00:43.71", lyric: "论我们这宿命要转多久"},
{ time: "00:50.73", lyric: "来生是否还红着脸牵手"},
{ time: "00:56.82", lyric: "梦是否依旧"},
{ time: "00:58.5", lyric: "你是否依旧"},
{ time: "00:59.82", lyric: "心境是否依旧"},
{ time: "01:03.33", lyric: "分离时情人总絮絮叨叨好久"},
{ time: "01:07.29", lyric: "只求挥手告别无爱无怨无愁"},
{ time: "01:12.47", lyric: "怎么转身又是一阵心痛"},
{ time: "01:19.41", lyric: "只好攥紧双手任泪横流"},
{ time: "01:25.95", lyric: "你说往前走往前走别回头"},
{ time: "01:33.36", lyric: "一瞬好短怎却望穿走马灯"},
{ time: "01:55.02", lyric: "论我们这宿命要转多久"},
{ time: "02:02.01", lyric: "来生是否还红着脸牵手"},
{ time: "02:08.13", lyric: "梦是否依旧"},
{ time: "02:09.72", lyric: "你是否依旧"},
{ time: "02:11.13", lyric: "心境是否依旧"},
{ time: "02:14.61", lyric: "分离时情人总絮絮叨叨好久"},
{ time: "02:18.57", lyric: "只求挥手告别无爱无怨无愁"},
{ time: "02:23.76", lyric: "怎么转身又是一阵心痛"},
{ time: "02:30.72", lyric: "只好攥紧双手任泪横流"},
{ time: "02:37.23", lyric: "你说往前走往前走别回头"},
{ time: "02:44.67", lyric: "一瞬好短怎却望穿走马灯"},
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