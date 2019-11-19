$(function () {
    var index = 60;
    $(".code").tap(function () {
        var time = setInterval(function () {
            $(".code").html("("+index+"秒)重发")
            index = index -1;
            if(index < 0){
                $(".code").html("发送验证码");
                clearInterval(time);
                index=60;
            }
        },1000)
    })
})
