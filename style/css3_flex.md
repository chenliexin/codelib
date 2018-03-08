<style>

/* container */
.flex-box {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
}
.flex-inline {
    display: -webkit-inline-box;
    display: -moz-inline-box;
    display: -ms-inline-flexbox;
    display: -webkit-inline-flex;
    display: inline-flex;
}

/* item */
.flex-item {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    -webkit-flex: 1;
    flex: 1;
}

/* container property */
.flex-row {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -moz-box-orient: horizontal;
    -moz-box-direction: normal;
    -ms-flex-flow: row;
    -webkit-flex-flow: row;
    flex-flow: row;
}
.flex-row-rev {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -moz-box-orient: horizontal;
    -moz-box-direction: reverse;
    -ms-flex-flow: row-reverse;
    -webkit-flex-flow: row-reverse;
    flex-flow: row-reverse;
}
.flex-col {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    -ms-flex-flow: column;
    -webkit-flex-flow: column;
    flex-flow: column;
}
.flex-col-rev {
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    -moz-box-orient: vertical;
    -moz-box-direction: reverse;
    -ms-flex-flow: column-reverse;
    -webkit-flex-flow: column-reverse;
    flex-flow: column-reverse;
}
.flex-wrap {
    /*warn: old syntax box-lines is invalid*/
    -webkit-box-lines: multiple;
    -webkit-box-direction: normal;
    -moz-box-lines: multiple;
    -moz-box-direction: normal;
    -ms-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
}
.flex-wrap-rev {
    /*warn: old syntax box-lines is invalid*/
    -webkit-box-lines: multiple;
    -webkit-box-direction: reverse;
    -moz-box-lines: multiple;
    -moz-box-direction: reverse;
    -ms-flex-flow: wrap-reverse;
    -webkit-flex-flow: wrap-reverse;
    flex-flow: wrap-reverse;
}
.flex-hor-start {
    -webkit-box-pack: start;
    -moz-box-pack: start;
    -ms-flex-pack: start;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
}
.flex-hor-end {
    -webkit-box-pack: end;
    -moz-box-pack: end;
    -ms-flex-pack: end;
    -webkit-justify-content: flex-end;
    justify-content: flex-end;
}
.flex-hor-center {
    -webkit-box-pack: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
}
.flex-hor-around {
    /*warn: old syntax  without around*/
    -ms-flex-pack: distribute;
    -webkit-justify-content: space-around;
    justify-content: space-around;
}
.flex-hor-between {
    -webkit-box-pack: justify;
    -moz-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
}
.flex-ver-start {
    -webkit-align-items: flex-start;
    -moz-align-items: flex-start;
    -ms-flex-align: start;
    -webkit-align-items: flex-start;
    align-items: flex-start;
}
.flex-ver-end {
    -webkit-align-items: flex-end;
    -moz-align-items: flex-end;
    -ms-flex-align: end;
    -webkit-align-items: flex-end;
    align-items: flex-end;
}
.flex-ver-center {
    -webkit-align-items: flex-center;
    -moz-align-items: flex-center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}
.flex-ver-baseline {
    -webkit-align-items: flex-baseline;
    -moz-align-items: flex-baseline;
    -ms-flex-align: baseline;
    -webkit-align-items: baseline;
    align-items: baseline;
}
.flex-ver-stretch {
    -webkit-align-items: flex-stretch;
    -moz-align-items: flex-stretch;
    -ms-flex-align: stretch;
    -webkit-align-items: stretch;
    align-items: stretch;
}
.flex-wrap-start {
    /*warn: old syntax box-lines is invalid*/
    -ms-flex-line-pack: start;
    -webkit-align-content: flex-start;
    align-content: flex-start;
}
.flex-wrap-end {
    /*warn: old syntax box-lines is invalid*/
    -ms-flex-line-pack: end;
    -webkit-align-content: flex-end;
    align-content: flex-end;
}
.flex-wrap-center {
    /*warn: old syntax box-lines is invalid*/
    -ms-flex-line-pack: center;
    -webkit-align-content: center;
    align-content: center;
}
.flex-wrap-between {
    /*warn: old syntax box-lines is invalid*/
    -ms-flex-line-pack: justify;
    -webkit-align-content: space-between;
    align-content: space-between;
}
.flex-wrap-around {
    /*warn: old syntax box-lines is invalid*/
    -ms-flex-line-pack: distribute;
    -webkit-align-content: space-around;
    align-content: space-around;
}
.flex-wrap-stretch {
    /*warn: old syntax box-lines is invalid*/
    -ms-flex-line-pack: stretch;
    -webkit-align-content: stretch;
    align-content: stretch;
}

/* item property */
.flex-self-auto {
    /*warn: old syntax align-self is invalid*/
    -ms-flex-item-align: auto;
    -webkit-align-self: auto;
    align-self: auto;
}
.flex-self-start {
    /*warn: old syntax align-self is invalid*/
    -ms-flex-item-align: start;
    -webkit-align-self: flex-start;
    align-self: flex-start;
}
.flex-self-end {
    /*warn: old syntax align-self is invalid*/
    -ms-flex-item-align: end;
    -webkit-align-self: flex-end;
    align-self: flex-end;
}
.flex-self-center {
    /*warn: old syntax align-self is invalid*/
    -ms-flex-item-align: center;
    -webkit-align-self: center;
    align-self: center;
}
.flex-self-baseline {
    /*warn: old syntax align-self is invalid*/
    -ms-flex-item-align: baseline;
    -webkit-align-self: baseline;
    align-self: baseline;
}
.flex-self-stretch {
    /*warn: old syntax align-self is invalid*/
    -ms-flex-item-align: stretch;
    -webkit-align-self: stretch;
    align-self: stretch;
}
.flex-order {
    -webkit-box-ordinal-group: 2;
    -moz-box-ordinal-group: 2;
    -ms-flex-order: 2;
    -webkit-order: 2;
    order: 2;
}

</style>