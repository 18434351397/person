$(function () {
    let list=$(".banner .list .listbox");
    let son=$(".xuanxiangka");
    // console.log(list,son);
    list.mouseenter(function () {
        let i=$(this).index();
        son.eq(i).css("display",'block');
    });
    list.mouseleave(function () {
        let i=$(this).index();
        son.eq(i).css("display",'none');
    });

    let imgs=$(".imgbox .imgboxs img");
    let dots=$(".banner .dot .yuan");
    // console.log(imgs);
    imgs.eq(0).css("opacity",1);
    dots.eq(0).addClass("active");
    let t=setInterval(move,3000);
    let next=0;
    function move() {
        next++;
        if(next==imgs.length){
            next=0;
        }
        imgs.css("opacity",0).eq(next).css("opacity",1);
        dots.removeClass("active").eq(next).addClass("active");
    }

    dots.mouseenter(function (e) {
        clearInterval(t);
        let i=$(this).index();
        dots.eq(i).addClass("active").siblings().removeClass("active");
        imgs.eq(i).css("opacity",1).siblings().css("opacity",0);
        e.stopPropagation();
        e.preventDefault();
    });
    dots.mouseleave(function () {
        t=setInterval(move,3000);
    });
    let back=$(".icon-arrow-circle-o-top");
    // console.log(back);


    $(window).scroll(function () {
        let gd=document.body.scrollTop||document.documentElement.scrollTop;
        // console.log(gd);
        if(gd>1000){
            back.css({opacity:1});
        }else{
            back.css({opacity:0});
        }
    })




    // console.log(back);
    back.click(function () {
        $(document.body).animate({scrollTop: 0},600);
        $(document.documentElement).animate({scrollTop: 0},600);
    })

    let xiala=$(".container .xiala");

    let daohang=$(".daohang .text a");
    let zibox=$(".zibox");
    // console.log(xiala, daohang,zibox);
    // daohang.mouseenter(function () {
    //     let i=$(this).index();
    //     xiala.clearQueue().slideDown(600);
    //     zibox.eq(i).clearQueue().slideDown(1000);
    // });
    // daohang.mouseleave(function () {
    //     let i=$(this).index();
    //     xiala.clearQueue().slideUp(600);
    //     zibox.eq(i).clearQueue().slideUp(600);

    // })


});
