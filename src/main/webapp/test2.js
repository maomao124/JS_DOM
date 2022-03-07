/**
 * Project name(项目名称)：JS_DOM
 * File name(文件名): test2
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/7
 * Time(创建时间)： 20:01
 * Version(版本): 1.0
 * Description(描述)：
 *
 * Document 对象中的方法
 方法                        描述
 document.addEventListener()    向文档中添加事件
 document.adoptNode(node)    从另外一个文档返回 adapded 节点到当前文档
 document.close()    关闭使用 document.open() 方法打开的输出流，并显示选定的数据
 document.createAttribute()    为指定标签添加一个属性节点
 document.createComment()    创建一个注释节点
 document.createDocumentFragment()    创建空的 DocumentFragment 对象，并返回此对象
 document.createElement()    创建一个元素节点
 document.createTextNode()    创建一个文本节点
 document.getElementsByClassName()    返回文档中所有具有指定类名的元素集合
 document.getElementById()    返回文档中具有指定 id 属性的元素
 document.getElementsByName()    返回具有指定 name 属性的对象集合
 document.getElementsByTagName()    返回具有指定标签名的对象集合
 document.importNode()    把一个节点从另一个文档复制到该文档以便应用
 document.normalize()    删除空文本节点，并合并相邻的文本节点
 document.normalizeDocument()    删除空文本节点，并合并相邻的节点
 document.open()    打开一个流，以收集来自 document.write() 或 document.writeln() 方法的输出
 document.querySelector()    返回文档中具有指定 CSS 选择器的第一个元素
 document.querySelectorAll()    返回文档中具有指定 CSS 选择器的所有元素
 document.removeEventListener()    移除文档中的事件句柄
 document.renameNode()    重命名元素或者属性节点
 document.write()    向文档中写入某些内容
 document.writeln()    等同于 write() 方法，不同的是 writeln() 方法会在末尾输出一个换行符
 */

document.addEventListener("click", function ()
{
    document.body.innerHTML = document.activeElement;
    var box = document.createElement('div');
    document.body.appendChild(box);
    var att = document.createAttribute('id');
    att.value = "myDiv";
    document.getElementsByTagName('div')[0].setAttributeNode(att);
    document.getElementById("myDiv").innerHTML = Math.random();
    var btn = document.createElement("button");
    var t = document.createTextNode("按钮");
    btn.appendChild(t);
    document.body.appendChild(btn);
    var att = document.createAttribute('onclick');
    att.value = "myfunction()";
    document.getElementsByTagName('button')[0].setAttributeNode(att);
});

function myfunction()
{
    alert(document.title);
}