
/* each of the properties of the shorthand */
.transition-properties {
    transition-property: all;         /* all | <IDENT> */
    transition-duration: 0s;
    transition-timing-function: ease; /* ease | linear | ease-in | ease-out | ease-in-out | step-start | step-end | steps(<integer>[, [ start | end ] ]?) | cubic-bezier(<number>, <number>, <number>, <number>) */
    transition-delay: 0s;             
}

/* transition case */
.transition {
    -webkit-transition: all 3s ease 0s;
       -moz-transition: all 3s ease 0s;
            transition: all 3s ease 0s;
}

/* steps(<integer>[, [ start | end ] ]?) */
.transition-timing-function-steps {
    /*
     * 第一个参数必须为正整数，指定函数的步数。
     * 第二个参数取值可以是start或end，指定每一步的值发生变化的时间点。
     * 第二个参数是可选的，默认值为end。
     */
    transition-timing-function: steps(100, start);
    transition-timing-function: steps(100, end);
    transition-timing-function: step-start; /* steps(1, start) */
    transition-timing-function: step-end;   /* steps(1, end) */
}

/* cubic-bezier(<number>, <number>, <number>, <number>) */
.transition-timing-function-cubic-bezier {
    /*
     * 贝塞尔曲线(Bézier curve)，又称贝兹曲线或贝济埃曲线，是应用于二维图形应用程序的数学曲线。
     * 图上有四点，P0-3，其中P0、P3是默认的点，对应了[0,0], [1,1]。而剩下的P1、P2两点则是我们通过cubic-bezier()自定义的。cubic-bezier(x1, y1, x2, y2) 为自定义，x1,x2,y1,y2的值范围在[0, 1]。
     * chrome Styles Pane 可以直接生成
     */
    transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1.0);
}
