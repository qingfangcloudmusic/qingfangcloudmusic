let lyricsData = [
	{ time: "00:00.00", lyric: "庆方云音乐"},
	{ time: "00:00.0", lyric: "做自己的光，不需要太亮"},
	{ time: "00:18.42", lyric: "人们都只看结果不看过程"},
	{ time: "00:22.14", lyric: "喜欢用分数决定人生"},
	{ time: "00:26.88", lyric: "谁又想普通平凡的过一生"},
	{ time: "00:30.75", lyric: "可手里只有普通剧本"},
	{ time: "00:34.5", lyric: "枯树还没发芽就被逼着要开花"},
	{ time: "00:38.79", lyric: "妈妈说要快乐却没告诉我方法"},
	{ time: "00:43.02", lyric: "成长它教会我失败其实不可怕"},
	{ time: "00:47.37", lyric: "可怕的是你还相信这句话"},
	{ time: "00:51.09", lyric: "做自己的光不需要太亮"},
	{ time: "00:55.32", lyric: "谁说要逆着风才算飞翔"},
	{ time: "00:59.67", lyric: "孤独的路上还要走很长"},
	{ time: "01:03.9", lyric: "成长二字本来就没有偏旁"},
	{ time: "01:08.19", lyric: "做自己的光"},
	{ time: "01:25.89", lyric: "枯树还没发芽就被逼着要开花"},
	{ time: "01:30.21", lyric: "妈妈说要快乐却没告诉我方法"},
	{ time: "01:34.44", lyric: "成长它教会我失败其实不可怕"},
	{ time: "01:38.75", lyric: "可怕的是你还相信这句话"},
	{ time: "01:42.50", lyric: "做自己的光不需要太亮"},
	{ time: "01:46.74", lyric: "谁说要逆着风才算飞翔"},
	{ time: "01:51.09", lyric: "孤独的路上还要走很长"},
	{ time: "01:55.35", lyric: "成长二字本来就没有偏旁"},
	{ time: "01:59.64", lyric: "做自己的光"},
	{ time: "02:08.16", lyric: "做自己的光不需要太亮"},
	{ time: "02:12.45", lyric: "谁说要扬着帆才会有远方"},
	{ time: "02:16.70", lyric: "那受过的伤会生出翅膀"},
	{ time: "02:21.09", lyric: "花总有天会开晚点又何妨"},
	{ time: "02:25.32", lyric: "那又能怎样 "},   
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