/**
 * Project name(项目名称)：JS_DOM
 * File name(文件名): test1
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/7
 * Time(创建时间)： 18:50
 * Version(版本): 1.0
 * Description(描述)：
 *
 * Document 对象中的属性
 属性                    描述
 document.activeElement    返回当前获取焦点的元素
 document.anchors    返回对文档中所有 Anchor 对象的引用
 document.applets    返回对文档中所有 Applet 对象的引用。注意: HTML5 已不支持 <applet> 元素
 document.baseURI    返回文档的基础 URI
 document.body    返回文档的 body 元素
 document.cookie    设置或返回与当前文档有关的所有 cookie
 document.doctype    返回与文档相关的文档类型声明 (DTD)
 document.documentElement    返回文档的根节点
 document.documentMode    返回浏览器渲染文档的模式
 document.documentURI    设置或返回文档的位置
 document.domain    返回当前文档的域名
 document.domConfig    已废弃，返回 normalizeDocument() 被调用时所使用的配置
 document.embeds    返回文档中所有嵌入内容（embed）的集合
 document.forms    返回文档中所有 Form 对象的引用
 document.images    返回文档中所有 Image 对象的引用
 document.implementation    返回处理该文档的 DOMImplementation 对象
 document.inputEncoding    返回文档的编码方式
 document.lastModified    返回文档的最后修改日期
 document.links    返回对文档中所有 Area 和 Link 对象的引用
 document.readyState    返回文档状态（载入中）
 document.referrer    返回载入当前文档的 URL
 document.scripts    返回页面中所有脚本的集合
 document.strictErrorChecking    设置或返回是否强制进行错误检查
 document.title    返回当前文档的标题
 document.URL    返回文档的完整 URL
 */


document.write(document.activeElement + "<br>");
document.write(document.anchors + "<br>");
document.write(document.baseURI + "<br>");
document.write(document.body + "<br>");
document.write(document.cookie + "<br>");
document.write(document.doctype + "<br>");
document.write(document.documentElement + "<br>");
document.write(document.documentURI + "<br>");
document.write(document.domain + "<br>");
//document.write(document.embeds+"<br>");

document.write(document.forms + "<br>");
document.write(document.images + "<br>");
document.write(document.implementation + "<br>");
document.write(document.inputEncoding + "<br>");
document.write(document.lastModified + "<br>");
document.write(document.links + "<br>");
document.write(document.readyState + "<br>");
document.write(document.referrer + "<br>");
document.write(document.scripts + "<br>");
document.write(document.title + "<br>");
document.write(document.URL + "<br>");
