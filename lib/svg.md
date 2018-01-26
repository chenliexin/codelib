
可缩放矢量图形（Scalable Vector Graphics）
使用 XML 格式定义二维图像
```xml
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red"/>
</svg>
```
type="image/svg+xml"

SVG 形状
width 和 height 属性可定义矩形的高度和宽度
style 属性用来定义 CSS 属性
CSS 的 fill 属性定义矩形的填充颜色（rgb 值、颜色名或者十六进制值）
CSS 的 fill-opacity 属性定义填充颜色透明度（合法的范围是：0 - 1）
CSS 的 stroke 属性定义矩形边框的颜色
CSS 的 stroke-width 属性定义矩形边框的宽度
CSS 的 stroke-opacity 属性定义笔触颜色的透明度（合法的范围是：0 - 1）

矩形 <rect>
x 属性定义矩形的左侧位置（例如，x="0" 定义矩形到浏览器窗口左侧的距离是 0px）
y 属性定义矩形的顶端位置（例如，y="0" 定义矩形到浏览器窗口顶端的距离是 0px）
rx 和 ry 属性可使矩形产生圆角。

圆形 <circle>
cx 和 cy 属性定义圆点的 x 和 y 坐标。如果省略 cx 和 cy，圆的中心会被设置为 (0, 0)
r 属性定义圆的半径。

椭圆 <ellipse>
cx 属性定义圆点的 x 坐标
cy 属性定义圆点的 y 坐标
rx 属性定义水平半径
ry 属性定义垂直半径

线 <line>
x1 属性在 x 轴定义线条的开始
y1 属性在 y 轴定义线条的开始
x2 属性在 x 轴定义线条的结束
y2 属性在 y 轴定义线条的结束

折线 <polyline>
points 属性定义多边形每个角的 x 和 y 坐标  points="220,100 300,210 170,250"

多边形 <polygon>
points 属性定义多边形每个角的 x 和 y 坐标  points="220,100 300,210 170,250"

路径 <path>
下面的命令可用于路径数据：
M = moveto
L = lineto
H = horizontal lineto
V = vertical lineto
C = curveto
S = smooth curveto
Q = quadratic Belzier curve
T = smooth quadratic Belzier curveto
A = elliptical Arc
Z = closepath
注释：以上所有命令均允许小写字母。大写表示绝对定位，小写表示相对定位。

SVG 滤镜
<filter> 标签用来定义 SVG 滤镜。<filter> 标签必须嵌套在 <defs> 标签内。<defs> 标签是 definitions 的缩写，它允许对诸如滤镜等特殊元素进行定义。
```xml
<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="Gaussian_Blur">
      <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
    </filter>
  </defs>
  <ellipse cx="200" cy="150" rx="70" ry="40" style="fill:#ff0000;stroke:#000000;stroke-width:2;filter:url(#Gaussian_Blur)"/>
</svg>
```
<filter> 标签的 id 属性可为滤镜定义一个唯一的名称（同一滤镜可被文档中的多个元素使用）
filter:url 属性用来把元素链接到滤镜。当链接滤镜 id 时，必须使用 # 字符
滤镜效果是通过 <feGaussianBlur> 标签进行定义的。fe 后缀可用于所有的滤镜
<feGaussianBlur> 标签的 stdDeviation 属性可定义模糊的程度
in="SourceGraphic" 这个部分定义了由整个图像创建效果
在 SVG 中，可用的滤镜有：
feBlend
feColorMatrix
feComponentTransfer
feComposite
feConvolveMatrix
feDiffuseLighting
feDisplacementMap
feFlood
feGaussianBlur
feImage
feMerge
feMorphology
feOffset
feSpecularLighting
feTile
feTurbulence
feDistantLight
fePointLight
feSpotLight

线性渐变 <linearGradient>,放射性渐变<radialGradient> 标签必须嵌套在 <defs> 的内部。
```xml
<defs>
  <linearGradient id="orange_red" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1"/>
    <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1"/>
  </linearGradient>
  <linearGradient id="grey_blue" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
    <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1"/>
    <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1"/>
  </linearGradient>
</defs>
<ellipse cx="200" cy="190" rx="85" ry="55" style="fill:url(#orange_red)"/>
```
<linearGradient> 标签的 x1、x2、y1、y2 属性可定义渐变的开始和结束位置
渐变的颜色范围可由两种或多种颜色组成。每种颜色通过一个 <stop> 标签来规定。offset 属性用来定义渐变的开始和结束位置。
<radialGradient> 标签的 cx、cy 和 r 属性定义外圈，而 fx 和 fy 定义内圈 渐变的颜色范围可由两种或多种颜色组成。


SVG 元素
元素列中的链接指向了具体元素的相关属性和更多有用的信息。

元素	描述
a	定义超链接
altGlyph	允许对象性文字进行控制，来呈现特殊的字符数据（例如，音乐符号或亚洲的文字）
altGlyphDef	定义一系列象性符号的替换（例如，音乐符号或者亚洲文字）
altGlyphItem	定义一系列候选的象性符号的替换
animate	随时间动态改变属性
animateColor	规定随时间进行的颜色转换
animateMotion	使元素沿着动作路径移动
animateTransform	对元素进行动态的属性转换
circle	定义圆
clipPath	 
color-profile	规定颜色配置描述
cursor	定义独立于平台的光标
definition-src	定义单独的字体定义源
defs	被引用元素的容器
desc	对 SVG 中的元素的纯文本描述 - 并不作为图形的一部分来显示。用户代理会将其显示为工具提示。
ellipse	定义椭圆
feBlend	SVG 滤镜。使用不同的混合模式把两个对象合成在一起。
feColorMatrix	SVG 滤镜。应用matrix转换。
feComponentTransfer	SVG 滤镜。执行数据的 component-wise 重映射。
feComposite	SVG 滤镜。
feConvolveMatrix	SVG 滤镜。
feDiffuseLighting	SVG 滤镜。
feDisplacementMap	SVG 滤镜。
feDistantLight	SVG 滤镜。 Defines a light source
feFlood	SVG 滤镜。
feFuncA	SVG 滤镜。feComponentTransfer 的子元素。
feFuncB	SVG 滤镜。feComponentTransfer 的子元素。
feFuncG	SVG 滤镜。feComponentTransfer 的子元素。
feFuncR	SVG 滤镜。feComponentTransfer 的子元素。
feGaussianBlur	SVG 滤镜。对图像执行高斯模糊。
feImage	SVG 滤镜。
feMerge	SVG 滤镜。创建累积而上的图像。
feMergeNode	SVG 滤镜。feMerge的子元素。
feMorphology	SVG 滤镜。 对源图形执行"fattening" 或者 "thinning"。
feOffset	SVG 滤镜。相对与图形的当前位置来移动图像。
fePointLight	SVG 滤镜。
feSpecularLighting	SVG 滤镜。
feSpotLight	SVG 滤镜。
feTile	SVG 滤镜。
feTurbulence	SVG 滤镜。
filter	滤镜效果的容器。
font	定义字体。
font-face	描述某字体的特点。
font-face-format	 
font-face-name	 
font-face-src	 
font-face-uri	 
foreignObject	 
g	用于把相关元素进行组合的容器元素。
glyph	为给定的象形符号定义图形。
glyphRef	定义要使用的可能的象形符号。
hkern	 
image	 
line	定义线条。
linearGradient	定义线性渐变。
marker	 
mask	 
metadata	规定元数据。
missing-glyph	 
mpath	 
path	定义路径。
pattern	 
polygon	定义由一系列连接的直线组成的封闭形状。
polyline	定义一系列连接的直线。
radialGradient	定义放射形的渐变。
rect	定义矩形。
script	脚本容器。（例如ECMAScript）
set	为指定持续时间的属性设置值
stop	 
style	可使样式表直接嵌入SVG内容内部。
svg	定义SVG文档片断。
switch	 
symbol	 
text	 
textPath	 
title	对 SVG 中的元素的纯文本描述 - 并不作为图形的一部分来显示。用户代理会将其显示为工具提示。
tref	 
tspan	 
use	 
view	 
vkern	 



