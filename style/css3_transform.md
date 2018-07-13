```css
.transform-properties {
    transform: none;              /* none | <transform-function>+ */
    transform-origin: 50% 50%;    /* [ <percentage> | <length> | left | center | right ] [ <percentage> | <length> | top | center | bottom ]? */
    transform-style: flat;        /* flat | preserve-3d */
    perspective: none;            /* none | <length> */
    perspective-origin: 50% 50%;  /* [ <percentage> | <length> | left | center | right ] [ <percentage> | <length> | top | center | bottom ]? */
    backface-visibility: visible; /* visible | hidden */
}

/* 2D case */
.transform-item {
    -webkit-transform: rotatey(180deg) translatez(50px);
    -moz-transform: rotatey(180deg) translatez(50px);
    transform: rotatey(180deg) translatez(50px);
    -webkit-transform-origin: 50%;
    -moz-transform-origin: 50%;
    transform-origin: 50%;
}
/* 3D case */
body {
    -webkit-perspective: 800px;
    -moz-perspective: 800px;
    perspective: 800px;
    -webkit-perspective-origin: 50%;
    -moz-perspective-origin: 50%;
    perspective-origin: 50%;
}
.transform-container {
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    transform-style: preserve-3d;
}
.transform-item {
    -webkit-transform: rotatey(180deg) translatez(50px);
    -moz-transform: rotatey(180deg) translatez(50px);
    transform: rotatey(180deg) translatez(50px);
    -webkit-transform-origin: 50%;
    -moz-transform-origin: 50%;
    transform-origin: 50%;
    -webkit-backface-visibility: visible;
    -moz-backface-visibility: visible;
    backface-visibility: visible;
}

/* some descriptions */
.transform-function {
    /* 2D Transform Functions */
    transform: translate(10px, 10px); /* 平移（水平方向，垂直方向），如果第二个参数未提供，则默认值为0 */
    transform: translateX(20%);       /* 平移（水平方向） */
    transform: translateY(20%);       /* 平移（垂直方向） */
    transform: rotate(180deg);        /* 旋转（角度） */
    transform: scale(10, 10);         /* 缩放（水平方向，垂直方向），如果第二个参数未提供，则默认取第一个参数的值 */
    transform: scaleX(.2);            /* 缩放（水平方向） */
    transform: scaleY(.2);            /* 缩放（垂直方向） */
    transform: skew(180deg, 180deg);  /* 斜切扭曲（水平方向，垂直方向），如果第二个参数未提供，则默认值为0 */
    transform: skewX(20deg);          /* 斜切扭曲（水平方向） */
    transform: skewY(20deg);          /* 斜切扭曲（垂直方向） */
    transform: matrix(1, 2, 3, 4, 5, 6); /* 矩阵 */
    /* 3D Transform Functions */
    transform: translate3d(10px, 10px, 10px); /* 3D平移（水平方向，垂直方向，透视方向），参数不允许省略 */
    transform: translateZ(20%);               /* 3D平移（透视方向） */
    transform: rotate3d(1, -1, 0, 180deg);    /* 3D旋转（水平方向，垂直方向，透视方向，角度），参数不允许省略 */
    transform: rotateX(180deg);               /* 3D旋转（水平方向） */
    transform: rotateY(180deg);               /* 3D旋转（垂直方向） */
    transform: rotateZ(180deg);               /* 3D旋转（透视方向），等同于2D旋转 */
    transform: scale3d(10, 10, 10);           /* 3D缩放（水平方向，垂直方向，透视方向），参数不允许省略 */
    transform: scaleZ(.2);                    /* 3D缩放（透视方向） */
    transform: perspective();                 /* 指定透视距离 */
    transform: matrix3d(1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4); /* 4x4矩阵 */
}
.transform-origin, .perspective-origin {
    /*
     * 指定原点的位置，指定透视点的位置。
     * 如果提供两个，第一个用于横坐标，第二个用于纵坐标。
     * 如果只提供一个，该值将用于横坐标；纵坐标将默认为50%。
    */
    transform-origin: 50% -50%;
    transform-origin: 50px -50px;
    transform-origin: left top;
    perspective-origin: center center;
    perspective-origin: right bottom;
}
.transform-style {
    transform-style: flat;        /* 默认值。指定子元素位于此元素所在平面内 */
    transform-style: preserve-3d; /* 指定子元素定位在三维空间内 */
}
.perspective {
    perspective: none;  /* 默认值。不指定透视 */
    perspective: 800px; /* 指定观察者距离z=0平面的距离，为元素及其内容应用透视变换。不允许负值 */
}
.backface-visibility {
    backface-visibility: visible; /* 默认值。指定元素背面可见，允许显示正面的镜像 */
    backface-visibility: hidden;  /*指定元素背面不可见 */
}

```
