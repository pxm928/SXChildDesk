(function ($) {
    $.fn.lavaLamp = function (o) {
        o = $.extend({
            fx: "linear",
            speed: 500,
            click: function () { }
        },
        o || {});
        return this.each(function () {
            var b = $(this),
            noop = function () { },
            $back = $('<li class="back"><div class="left"></div></li>').appendTo(b),
            $li = $("li", this),
            curr = $("li.current-cat", this)[0] || $($li[0]).addClass("current-cat")[0];
            $li.click(function (e) {
                setCurr(this);
                return o.click.apply(this, [e, this])
            });
            setCurr(curr);
            function setCurr(a) {
                $back.css({
                    "left": a.offsetLeft + "px",
                    "width": a.offsetWidth + "px"
                });
                curr = a
            };
            function move(a) {
                $back.each(function () {
                    $(this).dequeue()
                }).animate({
                    width: a.offsetWidth,
                    left: a.offsetLeft
                },
                o.speed, o.fx)
            }
        })
    }
})(jQuery)