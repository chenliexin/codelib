
```css
.animation-properties {
    animation-name: none;            /* none | <IDENT> */
    animation-duration: 0s;
    animation-timing-function: ease; /* ease | linear | ease-in | ease-out | ease-in-out | step-start | step-end | steps(<integer>[, [ start | end ] ]?) | cubic-bezier(<number>, <number>, <number>, <number>) */
    animation-iteration-count: 1;    /* infinite | <number> */
    animation-direction: normal;     /* normal | reverse | alternate | alternate-reverse */
    animation-play-state: running;   /* running | paused*/
    animation-delay: 0s;
    animation-fill-mode: none;       /* none | forwards | backwards | both */
}

/* animation case */
.animation {
    -webkit-animation: my-animation 3s ease 1 normal running 0s none;
       -moz-animation: my-animation 3s ease 1 normal running 0s none;
            animation: my-animation 3s ease 1 normal running 0s none;
}

/* keyframes case */
@-webkit-keyframes my-animation { from { height: 50px; } to { height: 500px; }  }
   @-moz-keyframes my-animation { from { height: 50px; } to { height: 500px; }  }
        @keyframes my-animation { from { height: 50px; } to { height: 500px; }  }
/* keyframes case 2 */
@-webkit-keyframes my-animation-b { 
    0% { height: 50px; } 
    50% { height: 100px; } 
    100% { height: 500px; }  
}
@-moz-keyframes my-animation-b { 
    0% { height: 50px; } 
    50% { height: 100px; } 
    100% { height: 500px; }  
}
@keyframes my-animation-b { 
    0% { height: 50px; } 
    50% { height: 100px; } 
    100% { height: 500px; }  
}

/* some descriptions */
.animation-direction{
    animation-direction: normal;             /* 正常方向 */
    animation-direction: reverse;            /* 反方向运行 */
    animation-direction: alternate;          /* 动画先正常运行再反方向运行，并持续交替运行 */
    animation-direction: alternate-reverse;  /* 动画先反运行再正方向运行，并持续交替运行 */
}
.animation-fill-mode{
    animation-fill-mode: none;      /* 默认值。不设置对象动画之外的状态 */
    animation-fill-mode: forwards;  /* 设置对象状态为动画结束时的状态 */
    animation-fill-mode: backwards; /* 设置对象状态为动画开始时的状态 */
    animation-fill-mode: both;      /* 设置对象状态为动画结束或开始的状态 */
}

/* steps(<integer>[, [ start | end ] ]?) */
.animation-timing-function-steps {
    /*
     * 第一个参数必须为正整数，指定函数的步数。
     * 第二个参数取值可以是start或end，指定每一步的值发生变化的时间点。
     * 第二个参数是可选的，默认值为end。
     */
    animation-timing-function: steps(100, start);
    animation-timing-function: steps(100, end);
    animation-timing-function: step-start; /* steps(1, start) */
    animation-timing-function: step-end;   /* steps(1, end) */
}

/* cubic-bezier(<number>, <number>, <number>, <number>) */
.animation-timing-function-cubic-bezier {
    /*
     * 贝塞尔曲线(Bézier curve)，又称贝兹曲线或贝济埃曲线，是应用于二维图形应用程序的数学曲线。
     * 图上有四点，P0-3，其中P0、P3是默认的点，对应了[0,0], [1,1]。而剩下的P1、P2两点则是我们通过cubic-bezier()自定义的。cubic-bezier(x1, y1, x2, y2) 为自定义，x1,x2,y1,y2的值范围在[0, 1]。
     * chrome Styles Pane 可以直接生成
     */
    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1.0);
}

```