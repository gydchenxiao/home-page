//弹窗样式
iziToast.settings({
    timeout: 10000,
    progressBar: false,
    close: false,
    closeOnEscape: true,
    position: 'topCenter',
    transitionIn: 'bounceInDown',
    transitionOut: 'flipOutX',
    displayMode: 'replace',
    layout: '1',
    backgroundColor: '#00000040',
    titleColor: '#efefef',
    messageColor: '#efefef',
    iconColor: '#efefef',
});

//加载完成后执行

window.addEventListener('load', function () {

    //载入动画
    // $('#loading-box').attr('class', 'loaded');
    // $('#bg').css("cssText", "transform: scale(1);filter: blur(0px);transition: ease 1.5s;");
    // $('.cover').css("cssText", "opacity: 1;transition: ease 1.5s;");
    $('#section').css("cssText", "transform: scale(1) !important;opacity: 1 !important;filter: blur(0px) !important");

//     //用户欢迎
//     setTimeout(function () {
//         iziToast.show({
//             timeout: 2500,
//             title: hello,
//             message: '欢迎来到我的主页'
//         });
//     }, 800);
}, false)

// setTimeout(function () {
//     $('#loading-text').html("字体及文件加载可能需要一定时间")
// }, 3000);

//延迟加载音乐播放器
// function downloadJSAtOnload() {
//     var element = document.createElement("script");
//     element.src = "./js/music.min.js";
//     document.body.appendChild(element);
// }
// if (window.addEventListener)
//     window.addEventListener("load", downloadJSAtOnload, false);
// else if (window.attachEvent)
//     window.attachEvent("onload", downloadJSAtOnload);
// else window.onload = downloadJSAtOnload;


//新春灯笼 （ 需要时取消注释 ）
/*
new_element=document.createElement("link");
new_element.setAttribute("rel","stylesheet");
new_element.setAttribute("type","text/css");
new_element.setAttribute("href","./css/lantern.min.css");
document.body.appendChild(new_element);

new_element=document.createElement("script");
new_element.setAttribute("type","text/javascript");
new_element.setAttribute("src","./js/lantern.min.js");
document.body.appendChild(new_element);
*/

//火狐浏览器独立样式
// if (isFirefox = navigator.userAgent.indexOf("Firefox") > 0) {
//     var head = document.getElementsByTagName('head')[0];
//     var link = document.createElement('link');
//     link.href = './css/firefox.css';
//     link.rel = 'stylesheet';
//     link.type = 'text/css';
//     head.appendChild(link);
//     window.addEventListener('load', function () {
//         iziToast.show({
//             timeout: 8000,
//             iconUrl: './img/icon/warn.png',
//             message: '您正在使用火狐浏览器，部分功能可能不支持'
//         });
//     }, false)
}

//获取一言
fetch('https://v1.hitokoto.cn?max_length=24')
    .then(response => response.json())
    .then(data => {
        $('#hitokoto_text').html(data.hitokoto)
        $('#from_text').html(data.from)
    })
    .catch(console.error)

//获取天气
//每日限量 100 次
//请前往 https://www.tianqiapi.com/ 申请（免费）
const add_id = "ntc1p1lsjxmgpvgd"; // app_id
const app_secret = "Z6nxqQRFCfmnSIDYOvcWVbhrLAt21vcR"; // app_secret
const key = "f7bccc1ab4c84cdb9c2f3b26fd4edfe8" // key
function getWeather() {
    fetch("https://www.mxnzp.com/api/ip/self?app_id=" + add_id + "&app_secret=" + app_secret)
        .then(response => response.json())
        .then(data => {
            let str = data.data.city
            let city = str.replace(/市/g, '')
            $('#city_text').html(city);
            fetch("https://geoapi.qweather.com/v2/city/lookup?location=" + city + "&number=1&key=" + key)
                .then(response => response.json())
                .then(location => {
                    let id = location.location[0].id
                    fetch("https://devapi.qweather.com/v7/weather/now?location=" + id + "&key=" + key)
                        .then(response => response.json())
                        .then(weather => {
                            $('#wea_text').html(weather.now.text)
                        })
                })
        })
        .catch(console.error);
}
//获取时间
var t = null;
t = setTimeout(time, 1000);

function time() {
    clearTimeout(t);
    dt = new Date();
    var y = dt.getYear() + 1900;
    var mm = dt.getMonth() + 1;
    var d = dt.getDate();
    var weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    var day = dt.getDay();
    var h = dt.getHours();
    var m = dt.getMinutes();
    var s = dt.getSeconds();
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    //document.getElementById("time").innerHTML = y + "&nbsp;年&nbsp;" + mm + "&nbsp;月&nbsp;" + d + "&nbsp;日&nbsp;" + "<span class='weekday'>" + weekday[day] + "</span><br>" + "<span class='time-text'>" + h + ":" + m + ":" + s + "</span>";
    $("#time").html(y + "&nbsp;年&nbsp;" + mm + "&nbsp;月&nbsp;" + d + "&nbsp;日&nbsp;" + "<span class='weekday'>" + weekday[day] + "</span><br>" + "<span class='time-text'>" + h + ":" + m + ":" + s + "</span>");
    t = setTimeout(time, 1000);
}

//链接提示文字
$("#social").mouseover(function () {
    $("#social").css({
        "background": "rgb(0 0 0 / 25%)",
        'border-radius': '6px',
        "backdrop-filter": "blur(5px)"
    });
    $("#link-text").css({
        "display": "block",
    });
}).mouseout(function () {
    $("#social").css({
        "background": "none",
        "border-radius": "6px",
        "backdrop-filter": "none"
    });
    $("#link-text").css({
        "display": "none"
    });
});

$("#Bilibili")
    .mouseover(function () {
      $("#link-text").html("去 Bilibili 看看");
    })
    .mouseout(function () {
      $("#link-text").html("通过这里联系我");
    }),

  $("#email")
    .mouseover(function () {
      $("#link-text").html("来封 Email");
    })
    .mouseout(function () {
      $("#link-text").html("通过这里联系我");
    }),
  $("#telegram")
    .mouseover(function () {
      $("#link-text").html("你懂的 ~");
    })
    .mouseout(function () {
      $("#link-text").html("通过这里联系我");
    })
    $(document).ready(function () {
        // 更多页面切换
        var shoemore = false;
        $('#switchmore').on('click', function () {
            shoemore = !shoemore;
            if (shoemore && $(window).width() >= 990) {
                $('#container').addClass('mores');
                $("#change").html("Oops&nbsp;!");
                $("#change1").html("哎呀，这都被你发现了（再点击一次可关闭）");
            } else {
                $('#container').removeClass('mores');
                $("#change").html("Hello&nbsp;World&nbsp;!");
                $("#change1").html("人生若只如初见,何事悲风秋画扇");
            }
        });
    
        // 更多页面关闭按钮
        $('#close').on('click', function () {
            $('#switchmore').click();
        });
    
        // 移动端菜单栏切换
        var switchmenu = false;
        $('#switchmenu').on('click', function () {
            switchmenu = !switchmenu;
            if (switchmenu) {
                $('#row').addClass('menus');
                $("#menu").html("<i class='iconfont icon-times'></i>");
            } else {
                $('#row').removeClass('menus');
                $("#menu").html("<i class='iconfont icon-bars'>");
            }
        });
    
        // 更多弹窗页面
        $('#openmore').on('click', function () {
            $('#box').show();
            $('#row').hide();
            $('#more').hide();
        });
        $('#closemore').on('click', function () {
            $('#box').hide();
            $('#row').css("display", "flex");
            $('#more').css("display", "flex");
        });
    
        // 防抖函数
        function debounce(func, wait) {
            let timeout;
            return function () {
                clearTimeout(timeout);
                timeout = setTimeout(() => func.apply(this, arguments), wait);
            };
        }
    
        // 监听网页宽度
        function handleResize() {
            if (window.innerWidth >= 600) {
                $('#row').removeClass('menus');
                $("#menu").html("<i class='iconfont icon-bars'>");
                $('#rightone').removeClass('mobile').addClass('rightone');
            }
    
            if (window.innerWidth <= 990) {
                $('#container').removeClass('mores');
                $("#change").html("Hello&nbsp;World&nbsp;!");
                $("#change1").html("江畔何年初见月?江月何年初照人");
    
                $('#box').hide();
                $('#row').css("display", "flex");
                $('#more').css("display", "flex");
            }
        }
    
        window.addEventListener('resize', debounce(handleResize, 100));
        handleResize(); // 初始化时调用一次
    
        // 移动端切换功能区
        var changemore = false;
        $('#changemore').on('click', function () {
            changemore = !changemore;
            if (changemore) {
                $('#rightone').addClass('mobile');
            } else {
                $('#rightone').removeClass('mobile');
            }
        });
    
        // 更多页面显示关闭按钮
        $("#more").hover(
            function () {
                $('#close').show();
            },
            function () {
                $('#close').hide();
            }
        );
    });
    
    (document.oncontextmenu = function () {
      return (
        iziToast.show({
          timeout: 2e3,
          iconUrl: "./img/icon/warn.png",
          message: "为了浏览体验，本站禁用右键",
        }),
        !1
      );
    });
//自动变灰
var myDate = new Date;
var mon = myDate.getMonth() + 1;
var date = myDate.getDate();
var days = ['4.4', '5.12', '7.7', '9.18', '12.13'];
for (var day of days) {
    var d = day.split('.');
    if (mon == d[0] && date == d[1]) {
        document.write(
            '<style>html{-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);_filter:none}</style>'
        )
        $("#change").html("Silence&nbsp;in&nbsp;silence");
        $("#change1").html("今天是中国国家纪念日，全站已切换为黑白模式");
        window.addEventListener('load', function () {
            iziToast.show({
                timeout: 14000,
                iconUrl: './img/icon/candle.png',
                message: '今天是中国国家纪念日'
            });
        }, false);
    }
}
