let lyricsData = [
	{ time: "00:00.00", lyric: "庆方云音乐"},
	{ time: "00:01.16", lyric: "多幸运 - 韩安旭 "},
	{ time: "00:02.23", lyric: "作词：刘家泽"},
	{ time: "00:03.08", lyric: "作曲：胜屿"},
	{ time: "00:19.58", lyric: "在亿万人海相遇"},
	{ time: "00:22.02", lyric: "有同样默契"},
	{ time: "00:24.14", lyric: "是多么不容易"},
	{ time: "00:28.4", lyric: "你懂得我的固执"},
	{ time: "00:30.58", lyric: "我懂你脾气"},
	{ time: "00:32.8", lyric: "两颗心在靠近"},
	{ time: "00:35.54", lyric: "等不及解释我的心情"},
	{ time: "00:39.9", lyric: "怕错过爱上你的时机"},
	{ time: "00:44.16", lyric: "浪漫已经准备就绪"},
	{ time: "00:48.46", lyric: "全新的旅行"},
	{ time: "00:53.07", lyric: "多幸运在最美的年纪"},
	{ time: "00:57.36", lyric: "遇见你没有遗憾和可惜"},
	{ time: "01:01.71", lyric: "抱紧你用尽全部力气"},
	{ time: "01:05.6", lyric: "不让幸福逃离"},
	{ time: "01:10.5", lyric: "多幸运爱你这件事情"},
	{ time: "01:14.85", lyric: "成为我今生最对的决定"},
	{ time: "01:19.15", lyric: "我相信你就是那唯一"},
	{ time: "01:23.29", lyric: "愿陪你到底"},
	{ time: "01:29.38", lyric: "多幸运遇见了你"},
	{ time: "01:31.5", lyric: "多幸运爱上了你"},
	{ time: "01:33.63", lyric: "多幸运能在一起"},
	{ time: "01:38.09", lyric: "多幸运遇见了你"},
	{ time: "01:40.22", lyric: "多幸运爱上了你"},
	{ time: "01:42.4", lyric: "多幸运能在一起"},
	{ time: "01:46.81", lyric: "在亿万人海相遇"},
	{ time: "01:49.22", lyric: "有同样默契"},
	{ time: "01:51.35", lyric: "是多么不容易"},
	{ time: "01:55.7", lyric: "你懂得我的固执"},
	{ time: "01:57.83", lyric: "我懂你脾气"},
	{ time: "02:00.06", lyric: "两颗心在靠近"},
	{ time: "02:02.83", lyric: "等不及解释我的心情"},
	{ time: "02:07.09", lyric: "怕错过爱上你的时机"},
	{ time: "02:11.61", lyric: "浪漫已经准备就绪"},
	{ time: "02:15.71", lyric: "全新的旅行"},
	{ time: "02:20.22", lyric: "多幸运在最美的年纪"},
	{ time: "02:24.58", lyric: "遇见你没有遗憾和可惜"},
	{ time: "02:29.03", lyric: "抱紧你用尽全部力气"},
	{ time: "02:32.93", lyric: "不让幸福逃离"},
	{ time: "02:37.74", lyric: "多幸运爱你这件事情"},
	{ time: "02:42.04", lyric: "成为我今生最对的决定"},
	{ time: "02:46.44", lyric: "我相信你就是那唯一"},
	{ time: "02:50.5", lyric: "愿陪你到底"},
	{ time: "02:56.61", lyric: "多幸运遇见了你"},
	{ time: "02:58.79", lyric: "多幸运爱上了你"},
	{ time: "03:00.96", lyric: "多幸运能在一起"},
	{ time: "03:05.32", lyric: "多幸运遇见了你"},
	{ time: "03:07.44", lyric: "多幸运爱上了你"},
	{ time: "03:09.67", lyric: "多幸运能在一起"},
	{ time: "03:12.66", lyric: "多幸运在最美的年纪"},
	{ time: "03:16.97", lyric: "遇见你没有遗憾和可惜"},
	{ time: "03:21.37", lyric: "抱紧你用尽全部力气"},
	{ time: "03:25.17", lyric: "不让幸福逃离"},
	{ time: "03:30.13", lyric: "多幸运爱你这件事情"},
	{ time: "03:34.44", lyric: "成为我今生最对的决定"},
	{ time: "03:38.84", lyric: "我相信你就是那唯一"},
	{ time: "03:42.99", lyric: "愿陪你到底"},
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