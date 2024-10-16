let lyricsData = [
	{ time: "00:00.00", lyric: "庆方云音乐"},
	{ time: "00:03.2", lyric: "苹果香"},
	{ time: "00:06.61", lyric: "词曲：狼戈"},
	{ time: "00:12.69", lyric: "演唱：狼戈"},
	{ time: "00:17.28", lyric: "音乐制作：叶尔江"},
	{ time: "00:33.8", lyric: "红嘴雁飞回芦苇随风摆"},
	{ time: "00:40.04", lyric: "河对面的莎吾烈泰"},
	{ time: "00:43.46", lyric: "今天在不在？"},
	{ time: "00:46.9", lyric: "那年我饮马来到了"},
	{ time: "00:50.18", lyric: "你的白毡房"},
	{ time: "00:53.22", lyric: "我曾看到你弹着冬布拉"},
	{ time: "00:56.76", lyric: "听过你把歌唱"},
	{ time: "01:02.0", lyric: "单纯的相逢"},
	{ time: "01:05.12", lyric: "平凡的晚上"},
	{ time: "01:08.5", lyric: "我就那个时候啊"},
	{ time: "01:10.79", lyric: "傻傻的等到了天亮"},
	{ time: "01:15.27", lyric: "月亮作证"},
	{ time: "01:18.35", lyric: "你毡帽上的羽毛"},
	{ time: "01:21.77", lyric: "亲吻着晚风飘啊飘"},
	{ time: "01:24.74", lyric: "啊飘到了我的心上"},
	{ time: "01:37.02", lyric: "六星街里还传来"},
	{ time: "01:40.13", lyric: "巴扬琴声吗？"},
	{ time: "01:43.39", lyric: "阿力克桑德拉的面包房"},
	{ time: "01:46.82", lyric: "列巴出炉了吗？"},
	{ time: "01:50.15", lyric: "南苑卤香是舌尖上的故事啊"},
	{ time: "01:56.66", lyric: "你让浪迹天涯的孩子啊"},
	{ time: "02:00.21", lyric: "梦中回家吧"},
	{ time: "02:05.39", lyric: "儿时的万花筒里"},
	{ time: "02:08.5", lyric: "有野鸽在飞翔"},
	{ time: "02:12.01", lyric: "这让我想起二哥和他心爱的弹弓叉"},
	{ time: "02:18.61", lyric: "湖蓝色的院墙"},
	{ time: "02:21.82", lyric: "我生命里的院落"},
	{ time: "02:25.07", lyric: "我的妈妈在那里给我的爱"},
	{ time: "02:28.19", lyric: "叫我永生不忘啊"},
	{ time: "03:02.32", lyric: "心中有个地方"},
	{ time: "03:05.12", lyric: "刻进了你的名字"},
	{ time: "03:08.5", lyric: "草原"},
	{ time: "03:09.29", lyric: "河谷"},
	{ time: "03:10.13", lyric: "月季花香"},
	{ time: "03:11.9", lyric: "都是我的歌"},
	{ time: "03:15.23", lyric: "儿时离开你"},
	{ time: "03:18.42", lyric: "正逢花开时"},
	{ time: "03:21.66", lyric: "如今往事"},
	{ time: "03:22.57", lyric: "远了"},
	{ time: "03:23.37", lyric: "模糊了"},
	{ time: "03:24.85", lyric: "我却忘不了苹果香"},
	{ time: "03:30.17", lyric: "如今往事"},
	{ time: "03:30.95", lyric: "远了"},
	{ time: "03:31.77", lyric: "模糊了"},
	{ time: "03:33.14", lyric: "我却忘不了苹果香"},
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