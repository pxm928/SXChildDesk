function screen() {
    var screenWidth = $(window).width();
    var screenHeight = $(window).height();
    
}
function index() {
    /***************************头部导航处*******************************/
    $(".lavaLamp li").click(function () {
        var index = $(this).index();
        $(this).addClass("current-cat").siblings("li").removeClass("current-cat");
        $(".prolist").eq(index).show().siblings(".prolist").hide();

        $("#RightIco").attr("rel", index);
        $("#LeftIco").attr("rel", (index == 0 ? 4 : index - 1));
        $("#RightIco img").removeClass("e");
        $("#RightIco img").eq(index).addClass("e");
        $("#LeftIco img").removeClass("e");
        $("#LeftIco img").eq(index).addClass("e");
        if (index == 4) {
            $("#RightIco").attr("rel", -1);
        }

        if (index == 0) {
            setTimeout(function () {
                screen1_show();
                screen2_hide();
                screen3_hide();
                screen4_hide();
            }, 200)
        }
        if (index == 1) {
            setTimeout(function () {
                screen1_hide();
                screen4_show();
                screen3_hide();
                screen2_hide();
            }, 200)
        }
        if (index == 2) {
            setTimeout(function () {
                screen1_hide();
                screen2_hide();
                screen3_show();
                screen4_hide();
            }, 200)
        }
        if (index == 3) {
            setTimeout(function () {
                screen1_hide();
                screen4_hide();
                screen3_hide();
                screen2_show();
            }, 200)
        }
        if (index == 4) {
            setTimeout(function () {
                screen1_hide();
                screen2_hide();
                screen3_hide();
                screen4_hide();
            }, 200)
        }
    })
    $(".lavaLamp").lavaLamp({ fx: "backout", speed: 700 });

    /*********************中间动画处**************************/
    /*云1*/
    //var auto;
    //var auto2;
    //function cloud1() {
    //    clearInterval(auto);
    //    $(".cloud1").removeClass("yun1_1");
    //    $(".cloud1").addClass("yun1");
    //    setTimeout(function () {
    //        $(".cloud1").removeClass("yun1").addClass("yun1_1");
    //    }, 29900);
    //    setTimeout(function () {
    //        $(".cloud1").removeClass("yun1_1").addClass("yun1");
    //    }, 60000)
    //}
    //cloud1();
    //setTimeout(function () {
    //    cloud1(false);
    //    auto = setInterval(function () {
    //        $(".cloud1").removeClass("yun1_1");
    //        $(".cloud1").addClass("yun1");
    //        setTimeout(function () {
    //            $(".cloud1").removeClass("yun1").addClass("yun1_1");
    //        }, 29900);
    //        setTimeout(function () {
    //            $(".cloud1").removeClass("yun1_1").addClass("yun1");
    //        }, 60000)
    //    }, 60000);
    //}, 60000)

    //function cloud2() {
    //    clearInterval(auto2);
    //    $(".cloud2").removeClass("yun2_2");
    //    $(".cloud2").addClass("yun2");
    //    setTimeout(function () {
    //        $(".cloud2").removeClass("yun2").addClass("yun2_2");
    //    }, 44900);
    //    setTimeout(function () {
    //        $(".cloud2").removeClass("yun2_2").addClass("yun2");
    //    }, 51900)
    //}
    //setTimeout(function () {
    //    cloud2();
    //}, 500);
    //setTimeout(function () {
    //    cloud2(false);
    //    auto2 = setInterval(function () {
    //        $(".cloud2").removeClass("yun2_2");
    //        $(".cloud2").addClass("yun2");
    //        setTimeout(function () {
    //            $(".cloud2").removeClass("yun2").addClass("yun2_2");
    //        }, 44900);
    //        setTimeout(function () {
    //            $(".cloud2").removeClass("yun2_2").addClass("yun2");
    //        }, 53900)
    //    }, 53900);
    //}, 53000)
    var auto;
    var auto2;
    function cloudmove1() {
        $(".cloud1").addClass("yun1");
        $(".cloud1").removeClass("yun1_1");
        setTimeout(function () {
            $(".cloud1").removeClass("yun1");
            $(".cloud1").addClass("yun1_1");
        }, 49900)
    }
    function cloudmove2() {
        $(".cloud2").addClass("yun2");
        $(".cloud2").removeClass("yun2_2");
        setTimeout(function () {
            $(".cloud2").removeClass("yun2");
            $(".cloud2").addClass("yun2_2");
        }, 49900)
    }
    cloudmove1();
    cloudmove2();
   auto = setInterval(function () {
       cloudmove1();
   }, 99900)
   auto2 = setInterval(function () {
       cloudmove2();
   }, 69900)

    screen1_show();
}
/******************第一屏的引导动画***********************************/
function screen1_show() {
    function guide() {
        $(".tit1 b").addClass("scale");
        $(".tit1 .i1").addClass("scaleX");
        $(".tit1 .i2").addClass("scaleY");
        $(".tit1 a").addClass("widths");
        setInterval(function () {
            setTimeout(function () {
                $(".tit1 a").css("-webkit-animation", "none");
            }, 1300)
            setTimeout(function () {
                $(".tit1 a").css({ "-webkit-animation": "tiao 0.3s ease infinite", "-webkit-animation-iteration-count": "2" });
            }, 2300)
        },3000)
    }
    function guide2() {
        $(".tit2 b").addClass("scale");
        $(".tit2 .i1").addClass("scaleX");
        $(".tit2 .i2").addClass("scaleY");
        $(".tit2 a").addClass("widths");
        setInterval(function () {
            setTimeout(function () {
                $(".tit2 a").css("-webkit-animation", "none");
            }, 1300)
            setTimeout(function () {
                $(".tit2 a").css({ "-webkit-animation": "tiao 0.3s ease infinite", "-webkit-animation-iteration-count": "2" });
            }, 2300)
        }, 3000)
    }
    function guide3() {
        $(".tit3 b").addClass("scale");
        $(".tit3 .i1").addClass("scaleX");
        $(".tit3 .i2").addClass("scaleY");
        $(".tit3 a").addClass("widths");
        setInterval(function () {
            setTimeout(function () {
                $(".tit3 a").css("-webkit-animation", "none");
            }, 1300)
            setTimeout(function () {
                $(".tit3 a").css({ "-webkit-animation": "tiao2 0.3s ease infinite", "-webkit-animation-iteration-count": "2" });
            }, 2300)
        }, 3000)
    }
    guide();
    setTimeout(function () {
        guide2();
    }, 1000)
    setTimeout(function () {
        guide3();
    }, 2000);
}
function screen1_hide() {
    function guide() {
        $(".tit1 b").removeClass("scale");
        $(".tit1 .i1").removeClass("scaleX");
        $(".tit1 .i2").removeClass("scaleY");
        $(".tit1 a").removeClass("widths");
    }
    function guide2() {
        $(".tit2 b").removeClass("scale");
        $(".tit2 .i1").removeClass("scaleX");
        $(".tit2 .i2").removeClass("scaleY");
        $(".tit2 a").removeClass("widths");
    }
    function guide3() {
        $(".tit3 b").removeClass("scale");
        $(".tit3 .i1").removeClass("scaleX");
        $(".tit3 .i2").removeClass("scaleY");
        $(".tit3 a").removeClass("widths");
    }
    guide();
    setTimeout(function () {
        guide2();
    }, 1000)
    setTimeout(function () {
        guide3();
    }, 2000);
}

/**************第二屏的引导动画******************************/
function screen2_show() {
    function guide4() {
        $(".tit4 b").addClass("scale");
        $(".tit4 .i1").addClass("scaleX");
        $(".tit4 .i2").addClass("scaleY");
        $(".tit4 a").addClass("widths");
        setInterval(function () {
            setTimeout(function () {
                $(".tit4 a").css("-webkit-animation", "none");
            }, 1300)
            setTimeout(function () {
                $(".tit4 a").css({ "-webkit-animation": "tiao 0.3s ease infinite", "-webkit-animation-iteration-count": "2" });
            }, 1500)
        }, 2000)
    }
    function guide5() {
        $(".tit5 b").addClass("scale");
        $(".tit5 .i1").addClass("scaleX");
        $(".tit5 .i2").addClass("scaleY");
        $(".tit5 a").addClass("widths");
        setInterval(function () {
            setTimeout(function () {
                $(".tit5 a").css("-webkit-animation", "none");
            }, 1300)
            setTimeout(function () {
                $(".tit5 a").css({ "-webkit-animation": "tiao 0.3s ease infinite", "-webkit-animation-iteration-count": "2" });
            }, 1500)
        }, 2000)
    }
    guide4();
    setTimeout(function () {
        guide5();
    }, 1000)
}
function screen2_hide() {
    function guide4() {
        $(".tit4 b").removeClass("scale");
        $(".tit4 .i1").removeClass("scaleX");
        $(".tit4 .i2").removeClass("scaleY");
        $(".tit4 a").removeClass("widths");
    }
    function guide5() {
        $(".tit5 b").removeClass("scale");
        $(".tit5 .i1").removeClass("scaleX");
        $(".tit5 .i2").removeClass("scaleY");
        $(".tit5 a").removeClass("widths");
    }
    guide4();
    setTimeout(function () {
        guide5();
    }, 1000)
}
/******************第三屏的引导动画**********************/
function screen3_show() {
    function guide6() {
        $(".tit6 b").addClass("scale");
        $(".tit6 .i1").addClass("scaleX");
        $(".tit6 .i2").addClass("scaleY");
        $(".tit6 a").addClass("widths");
        setInterval(function () {
            setTimeout(function () {
                $(".tit6 a").css("-webkit-animation", "none");
            }, 1300)
            setTimeout(function () {
                $(".tit6 a").css({ "-webkit-animation": "tiao 0.3s ease infinite", "-webkit-animation-iteration-count": "2" });
            }, 1500)
        }, 2000)
    }
    function guide7() {
        $(".tit7 b").addClass("scale");
        $(".tit7 .i1").addClass("scaleX");
        $(".tit7 .i2").addClass("scaleY");
        $(".tit7 a").addClass("widths");
        setInterval(function () {
            setTimeout(function () {
                $(".tit7 a").css("-webkit-animation", "none");
            }, 1300)
            setTimeout(function () {
                $(".tit7 a").css({ "-webkit-animation": "tiao2 0.3s ease infinite", "-webkit-animation-iteration-count": "2" });
            }, 1500)
        }, 2000)
    }
    guide6();
    setTimeout(function () {
        guide7();
    }, 1000)
}
function screen3_hide() {
    function guide6() {
        $(".tit6 b").removeClass("scale");
        $(".tit6 .i1").removeClass("scaleX");
        $(".tit6 .i2").removeClass("scaleY");
        $(".tit6 a").removeClass("widths");
    }
    function guide7() {
        $(".tit7 b").removeClass("scale");
        $(".tit7 .i1").removeClass("scaleX");
        $(".tit7 .i2").removeClass("scaleY");
        $(".tit7 a").removeClass("widths");
    }
    guide6();
    setTimeout(function () {
        guide7();
    }, 1000)
}
/******************第四屏的引导动画**********************/
function screen4_show() {
    function guide8() {
        $(".tit8 b").addClass("scale");
        $(".tit8 .i1").addClass("scaleX");
        $(".tit8 .i2").addClass("scaleY");
        $(".tit8 a").addClass("widths");
        setInterval(function () {
            setTimeout(function () {
                $(".tit8 a").css("-webkit-animation", "none");
            }, 1300)
            setTimeout(function () {
                $(".tit8 a").css({ "-webkit-animation": "tiao 0.3s ease infinite", "-webkit-animation-iteration-count": "2" });
            }, 1500)
        }, 2000)
    }
    function guide9() {
        $(".tit9 b").addClass("scale");
        $(".tit9 .i1").addClass("scaleX");
        $(".tit9 .i2").addClass("scaleY");
        $(".tit9 a").addClass("widths");
        setInterval(function () {
            setTimeout(function () {
                $(".tit9 a").css("-webkit-animation", "none");
            }, 1300)
            setTimeout(function () {
                $(".tit9 a").css({ "-webkit-animation": "tiao 0.3s ease infinite", "-webkit-animation-iteration-count": "2" });
            }, 1500)
        }, 2000)
    }
    function guide10() {
        $(".tit10 b").addClass("scale");
        $(".tit10 .i1").addClass("scaleX");
        $(".tit10 .i2").addClass("scaleY");
        $(".tit10 a").addClass("widths");
        setInterval(function () {
            setTimeout(function () {
                $(".tit10 a").css("-webkit-animation", "none");
            }, 1300)
            setTimeout(function () {
                $(".tit10 a").css({ "-webkit-animation": "tiao 0.3s ease infinite", "-webkit-animation-iteration-count": "2" });
            }, 2000)
        }, 3000)
    }
    function guide11() {
        $(".tit11 b").addClass("scale");
        $(".tit11 a").addClass("widths");
        setInterval(function () {
            setTimeout(function () {
                $(".tit11 a").css("-webkit-animation", "none");
            }, 1300)
            setTimeout(function () {
                $(".tit11 a").css({ "-webkit-animation": "tiao3 0.5s ease infinite", "-webkit-animation-iteration-count": "2" });
            }, 2500)
        }, 3000)
    }
    function guide12() {
        $(".tit12 b").addClass("scale");
        $(".tit12 .i1").addClass("scaleX");
        $(".tit12 .i2").addClass("scaleY");
        $(".tit12 a").addClass("widths");
        setInterval(function () {
            setTimeout(function () {
                $(".tit12 a").css("-webkit-animation", "none");
            }, 1300)
            setTimeout(function () {
                $(".tit12 a").css({ "-webkit-animation": "tiao2 0.3s ease infinite", "-webkit-animation-iteration-count": "2" });
            }, 1500)
        }, 2000)

    }
    guide8();
    setTimeout(function () {
        guide9();
    }, 1000)
    setTimeout(function () {
        guide10();
    }, 2000)
    setTimeout(function () {
        guide11();
    }, 2500)
    setTimeout(function () {
        guide12();
    }, 3000)
}
function screen4_hide() {
    function guide8() {
        $(".tit8 b").removeClass("scale");
        $(".tit8 .i1").removeClass("scaleX");
        $(".tit8 .i2").removeClass("scaleY");
        $(".tit8 a").removeClass("widths");
    }
    function guide9() {
        $(".tit9 b").removeClass("scale");
        $(".tit9 .i1").removeClass("scaleX");
        $(".tit9 .i2").removeClass("scaleY");
        $(".tit9 a").removeClass("widths");
    }
    function guide10() {
        $(".tit10 b").removeClass("scale");
        $(".tit10 .i1").removeClass("scaleX");
        $(".tit10 .i2").removeClass("scaleY");
        $(".tit10 a").removeClass("widths");
    }
    function guide11() {
        $(".tit11 b").removeClass("scale");
        $(".tit11 a").removeClass("widths");
    }
    function guide12() {
        $(".tit12 b").removeClass("scale");
        $(".tit12 .i1").removeClass("scaleX");
        $(".tit12 .i2").removeClass("scaleY");
        $(".tit12 a").removeClass("widths");
    }
    guide8();
    guide9();
    guide10();
    guide11();
    guide12();
}
$(function () {
    $("#RightIco").click(function () {
        var index = $("#RightIco").attr("rel");
        index = parseInt(index) + 1;
        currentPage(index);
        if (index == 0) {
            screen1_show();
            screen2_hide();
            screen3_hide();
            screen4_hide();
        }
        if (index == 1) {
            screen1_hide();
            screen2_show();
            screen3_hide();
            screen4_hide();
        }
        if (index == 2) {
            screen1_hide();
            screen2_hide();
            screen3_show();
            screen4_hide();
        }
        if (index == 3) {
            screen1_hide();
            screen2_hide();
            screen3_hide();
            screen4_show();
        }
    })
    $("#LeftIco").click(function () {
        var index = $("#LeftIco").attr("rel");
        currentPage(index);
        if (index == 0) {
            screen1_show();
            screen2_hide();
            screen3_hide();
            screen4_hide();
        }
    })
    function currentPage(index) {
        $("#RightIco").attr("rel", index);
        $("#LeftIco").attr("rel", (index == 0 ? 4 : index - 1));
        $(".lavaLamp li").eq(index).addClass("current-cat").siblings("li").removeClass("current-cat");
        $(".lavaLamp li").eq(index).click();
        $("#RightIco img").removeClass("e");
        $("#RightIco img").eq(index).addClass("e");
        $("#LeftIco img").removeClass("e");
        $("#LeftIco img").eq(index).addClass("e");
        $(".prolist").eq(index).show().siblings(".prolist").hide();
        if (index == 4) {
            $("#RightIco").attr("rel", -1);
        }
    }
})
