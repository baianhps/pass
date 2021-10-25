let names = [
    '黃慧龍', '劉秀娟', '倪善任', '陳美惠', '蕭建佑',
    '崔珮甄', '方菁蓮', '錢方法', '顏妙興', '鄭惠如',
    '陳宥鑫', '危威廷', '袁瑤春', '梁孟儒', '鄧雅婷',
    '李昌菁', '周雅芳', '李佳靜', '吳鴻蘭', '郭江桓',
    '汪郁婷', '陳品霖', '程家宏', '王昶軒', '黃兆秀',
    '童又易', '林心柔', '王雅琪', '楊文華', '洪偉杰',
    '陳岱映', '顏凱財', '鄭泰綺', '邱蓉堯', '趙嘉偉',
    '黃俊倫', '黃裕仁', '陳麗貞', '李芷妏', '林翠能',
    '郭秀美', '黃慧萍', '林智堯', '楊雅仲', '黃承翰',
    '邊敬洋', '徐偉英', '蔡有慈', '葉浩興', '許志月',
    '張伊邦', '方湖良', '楊雅婷', '毛淑華', '吳威廷',
    '陳舜文', '馮怡蓁', '陳冠芬', '黃靜怡', '郭火英',
    '陳婕妤', '彭右俐', '李家恩', '蘇介宇', '吳玉玲',
    '江雨泰', '楊偉佐', '劉勇志', '張俊傑', '林孟青',
    '蔡智凱', '楊俊宇', '黃美惠', '陳宗憲', '王宛臻',
    '張展芳', '黃珮達', '劉慧君', '陳方芬', '劉建蓮',
    '謝家祥', '李政侑', '姚政哲', '林佩君', '王韋廷',
    '王宗翰', '余大鈞', '陳蘭喬', '劉旻人', '李竣聿',
    '林雅雯', '梁淑芬', '許建安', '袁欣怡', '許嘉秋',
    '林牧怡', '李依皓', '賴怡萍', '陳思易', '王建勇',
    '林嘉豪', '余允郁', '尤晏妃', '林文瑋', '駱芝秋',
    '張琬婷', '李佩海', '溫喜珍', '潘苑其', '林心怡',
    '鞠勇志', '江可欣', '邱柏甫', '林冠揚', '呂駿能',
    '吳宗發', '梁鎮生', '吳孟儒', '林宗琳', '蘇馨儀',
    '張雅玲', '許昆霖', '郭昶奇', '賴善舜', '李佩迪',
    '吳偉婷', '許智恩', '林育芝', '黃慧良', '李興弘',
    '陳合洋', '張均寧', '孫仁青', '張宏妮', '楊佳蓉',
    '卓彥孜', '盧韋綠', '蔡俊豪', '王愛泰', '劉燦中',
    '倪建宏', '胡貞奇', '王艾人', '謝有妹', '林秉勳',
    '沈翰琪', '曾又妍', '何琬海', '阮至枝', '馮盈如',
    '吳佩人', '陳馨忠', '蕭維奇', '彭珈恬', '鄭誠恭',
    '王科韻', '蔡宜芳', '葉筠愛', '張馨妏', '吳佳慧',
    '張芸瑜', '張建中', '王安吉', '曾宥薇', '黃淑平',
    '趙建文', '林育誠', '吳子豪', '賴怡中', '吳柏廷',
    '李合青', '謝依鑫', '溫傑發', '劉欣怡', '張俊宇',
    '蘇建勳', '李睿東', '陳宗翰', '陳育萱', '陳育倩',
    '王德康', '陳柏人', '林定月', '楊穎傑', '白惠玲',
    '童雯雲', '楊馨儀', '林孟琦', '宋雅芬', '林美慧',
    '黃芃聖', '鄭湖彥', '林曉玄', '劉雅娟', '蔡志銘',
    '吳珮雯', '王緯君', '林佳生', '楊雅瑋', '王憶迪'
]
window.onload = function () {
    document.getElementById('custum-date').innerText = date();
    document.getElementById('custum-color').classList.add('backgcolor_' + new Date().getDay());

    let name = getCookie('name');
    if (name) {
        setName(name);
        changeView();
    }
}

// 確定
document.getElementById('name-ok').onclick = function () {
    setName(document.getElementById('name-input').value);
    changeView();
}
// 隨機
document.getElementById('name-rand').onclick = function () {
    setName(names[Math.floor(Math.random() * names.length)]);
    changeView();
}
// 改名
document.getElementById('name-change').onclick = changeView;
function randName() { return names[Math.floor(Math.random() * names.length)] }

function date() {
    let d = new Date();
    let month = d.getMonth() + 1;
    if (month < 10) { month = '0' + month };
    let date = d.getDate();
    if (date < 10) { date = '0' + date };
    return month + '/' + date;
}

function setName(name) {
    document.getElementById('custum-name').innerText = name;
    document.cookie = 'name=' + name + ';expires=Oct 25 2031 16:49:07 GMT+0800 ;';
}

function changeView() {
    document.getElementById('name').classList.toggle('hidden');
    document.getElementById('pass').classList.toggle('hidden');
    document.getElementById('name-change').classList.toggle('disabled');
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}