 


 // ---------------------------随机广告S---------------------------
       

(function(){
              //       获取广告元素节点
              var gg = document.getElementById('gg');
//               加载完页面，执行start开始函数
//              1 当鼠标离开的时候，小球运动
               gg.onmouseout = start;
//              2 当鼠标放在小球上时，小球不动
               gg.onmouseover = stop;              
//              3 当鼠标点击在小球上时，小球消失
               gg.onclick = close;
              
//               三个变量
//               1 改变水平方向的变量
              var vx =-1;
//               2 改变垂直方向的变量
              var vy =-1;
//               3 循环计时器变量
                var xh = null;
              
              
              
//              开始移动函数
              function start(){
                xh = setInterval(function(){
                       //                  获取浏览器的视窗的宽高
                 var win_w = window.innerWidth?window.innerWidth:document.documentElement.clientWidth;

                 var win_h = window.innerHeight?window.innerHeight:document.documentElement.clientHeight;

                 //                  1获取当前的位置,当前小球距离浏览器左边的距离
                 var x=  parseInt(gg.style.left);
                 //                     小球距离浏览器上边的距离
                 var y = parseInt(gg.style.top);


                 //                  3如果小球碰到了浏览器的下边框，改变垂直方向的运动方向
                 //                     if(小球距离浏览器顶部的距离>浏览器的高-小球的高)
                 if(y>(win_h-100)){
                        vy=-vy;   
                 }
                 //                  如果小球碰到了浏览器的上边框，改变垂直方向的运动方向
                 //                     if(小球距离浏览器顶部的距离<0)
                 if(y<0){
                        vy=-vy;    
                 }
                 //                  如果小球碰到了浏览器的右边框，改变水平方向的运动方向
                 //                     if(小球距离浏览器左边的距离>浏览器的宽-100)
                 if(x>(win_w-100)){
                        vx=-vx;
                 }
                 //                  如果小球碰到了浏览器的左边框，改变水平方向的运动方向
                 if(x<0){
                        vx=-vx;
                 }
                 //                  2在当前位置基础上水平方向+1，垂直方向+1 
                 y=y-vy; 
                 x=x-vx;

                 //                  将最新计算的位置赋值给小球的left和top
                 gg.style.left = x+'px';
                 gg.style.top=y+'px';      
          },10);
               
        }
              start();
              
              
       function stop(){
              clearInterval(xh);
       }
              
              
       function close(){
              clearInterval(xh);
              gg.style.display='none';
       }
              
       })();
// ---------------------------随机广告S---------------------------

// ---------------------------title滚动效果S--------------------------
       var i=0;
        var xh = setInterval(function(){
                if(i%=2){
                        document.title='☆★☆蘑菇街☆★☆';      
                }else{
                        document.title= '★☆★蘑菇街★☆★';          
                }
                i++;   
        },1000);
// ---------------------------title滚动效果E---------------------------


