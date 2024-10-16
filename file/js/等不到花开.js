let lyricsData = [
{ time: "00:00.0", lyric: "等不来花开-pro "},
{ time: "00:01.51", lyric: "词: 不要再胖了"},
{ time: "00:03.02", lyric: "曲：不要再胖了"},
{ time: "00:04.53", lyric: "编曲: 不要再胖了&果冻"},
{ time: "00:06.04", lyric: "混音：阿良"},
{ time: "00:07.56", lyric: "策划：秦耍耍"},
{ time: "00:09.0", lyric: "]制作人：舒心"},
{ time: "00:10.58", lyric: "监制：秦耍耍"},
{ time: "00:12.09", lyric: "联合宣发：河南网益文化"},
{ time: "00:13.6", lyric: "音乐制作公司：音炬文化"},
{ time: "00:15.12", lyric: "OP：瑞辰文化"},
{ time: "00:16.63", lyric: "【未经著作权人许可，不得翻唱、翻录或使用】"},
{ time: "00:18.15", lyric: "爱就像风筝断线飘走的无奈"},
{ time: "00:22.14", lyric: "忘记爱的漂流瓶遗留在大海"},
{ time: "00:26.13", lyric: "我期待雨过之后有彩色的云彩"},
{ time: "00:30.18", lyric: "就像我等你回来"},
{ time: "00:33.15", lyric: "我们的爱   就像秋叶等不到花开"},
{ time: "00:37.2", lyric: "我们的爱   就像风中漂浮的尘埃"},
{ time: "00:41.22", lyric: "我们的爱   我在结局后忽然明白"},
{ time: "00:45.15", lyric: "我们的爱   原本只是意外"},
{ time: "00:49.89", lyric: "爱你没有错对"},
{ time: "00:50.97", lyric: "怪我没有学会"},
{ time: "00:51.99", lyric: "怎么才能把你忘记释怀"},
{ time: "00:53.91", lyric: "相爱是个误会"},
{ time: "00:54.99", lyric: "分开也无所谓"},
{ time: "00:55.98", lyric: "大不了就当我还是小孩"},
{ time: "00:57.93", lyric: "不好不坏反正是宿醉"},
{ time: "00:59.91", lyric: "不恨不爱反正是暧昧"},
{ time: "01:01.89", lyric: "不好不坏也不过狼狈"},
{ time: "01:03.93", lyric: "不恨不爱只剩下酒杯"},
{ time: "01:22.17", lyric: "爱就像风筝断线飘走的无奈"},
{ time: "01:26.13", lyric: "忘记爱的漂流瓶遗留在大海"},
{ time: "01:30.15", lyric: "我期待雨过之后有彩色的云彩"},
{ time: "01:34.2", lyric: "就像我等你回来"},
{ time: "01:37.14", lyric: "我们的爱   就像秋叶等不到花开"},
{ time: "01:41.22", lyric: "我们的爱   就像风中漂浮的尘埃"},
{ time: "01:45.42", lyric: "我们的爱   我在结局后忽然明白"},
{ time: "01:49.17", lyric: "我们的爱   原本只是意外"},
{ time: "01:53.91", lyric: "爱你没有错对"},
{ time: "01:54.96", lyric: "怪我没有学会"},
{ time: "01:55.97", lyric: "怎么才能把你忘记释怀"},
{ time: "01:57.9", lyric: "相爱是个误会"},
{ time: "01:58.97", lyric: "分开也无所谓"},
{ time: "01:59.97", lyric: "大不了就当我还是小孩"},
{ time: "02:01.95", lyric: "不好不坏反正是宿醉"},
{ time: "02:03.93", lyric: "不恨不爱反正是暧昧"},
{ time: "02:05.91", lyric: "不好不坏也不过狼狈"},
{ time: "02:07.92", lyric: "不恨不爱只剩下酒杯"},
{ time: "02:09.63", lyric: "我们的爱   就像秋叶等不到花开"},
{ time: "02:13.26", lyric: "我们的爱   就像风中漂浮的尘埃"},
{ time: "02:17.16", lyric: "我们的爱   我在结局后忽然明白"},
{ time: "02:21.15", lyric: "我们的爱   原本只是意外"},
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