

在实际的项目中，我们可能随时面对各种不同的需求，它的各个方面的要素决定了我们所采用的开发模式

比如，它的复杂度如何？所有的需求是否足够清晰？开发人员对相关的业务是否足够了解？项目的工期是否合理？种种问题，不一而足。这也决定了我们可能面对不同的需求可能需要采用不同的开发模式。下面大概说几种






TDD

TDD的英文全称是Test-Driven Development，即测试驱动开发。测试驱动开发的流程是

开发人员写了一些测试代码
开发人员跑了这些测试用例，然后毫无疑问的这些测试用例失败了因为测试中提到的类和方法并没有实现
开发人员开始实现测试用例里面提到的方法
如果开发者写好了某个功能点，他会欣喜地发现之前的相对应的测试用例通过了
开发者人员可以重构代码，并添加注释，完成后期工作


mocha框架
should 是一个表述性、可读性很强的测试无关的“断言”库
supertest是一个非常棒的适用于node的模拟HTTP请求的库
断言库有很多种，mocha 并不限制使用哪一种。上面代码引入的断言库是 chai，并且指定使用它的assert断言风格。

使用karma+mocha进行前端测试驱动开发


var add = require('../src/add.js');
var assert = require('chai').assert;

describe('加法函数的测试', function() {
    it('1 加 1 应该等于 2', function() {
        assert.equal(add(1, 1), 2);
    });
});

describe块称为“测试套件”（test suite），表示一组相关的测试。它是一个函数，第一个参数是测试套件的名称（“加法函数的测试”），第二个参数是一个实际执行的函数。

it块称为“测试用例”（test case），表示一个单独的测试，是测试的最小单位。它也是一个函数，第一个参数是测试用例的名称（“1 加 1 应该等于 2”），第二个参数是一个实际执行的函数。


BDD

现在似乎有种普遍的认识，认为TDD等同于单元测试，而BDD则等同于验收测试

要进行充分的单元测试，应专门编写测试代码，并与产品代码隔离
为产品工程建立对应的测试工程，为每个类建立对应的测试类，为每个函数（很简单的除外）建立测试函数

# supertest 用来测试http请求


https://www.powershellgallery.com/packages/nvm/1.5.0


fiddler4
    setting: Tools - fiddler Options - Connetions - Allow remote computers to connet [checked]
    cmd: ipconfig
    wifi: proxy pc-ip:host


### 使用 weinre 调试移动端
weinre
    nodejs: npm -g install weinre
    cmd: ipconfig
    cmd: weinre --boundHost <pc-ip>
    pc: <pc-ip>:8080
    wifi: proxy pc-ip:host
    fiddler4: replace respond


实现模式是到着陆网站看广告去
需求是真实稳定的流量。可以是低质量的。




mocha
  可以方便的用做单元测试

  断言库的选择
    should.js - BDD style shown throughout these docs
    chai - expect(), assert() and should-style assertions

  请求测试
    supertest

  vscode 插件
    es6 mocha snippets



注释
  函数或方法必须有注释，至少公有方法应该这么做
  有效的注释和保持注释更新
  结构化的注释可以转成文档
  方法内部不清晰的上下文环境
  没有注释要好于错误的注释
  YUIDoc npm yuidocjs
  JSDoc
  Docco、Rocco
单元测试
  单元测试框架
  自动构建过程
  代码覆盖率

