'use strict';

var $$ = mdui.JQ;

// 去除空行
String.prototype.removeBlankLines = function () { 
  return this.replace(/(\n[\s\t]*\r*\n)/g, '\n').replace(/^[\n\r\n\t]*|[\n\r\n\t]*$/g, '');
}

// 把纯文本转成若干<p>标签包裹的段落
var txt_to_article = function (text) {
  text = text.removeBlankLines();
  text = text.replace(/\n/g, '</p>\n<p>');
  text = '<p>' + text + '</p>';
  return text;
}

var load_txt = function (url) {
    $$.ajax({
        method: 'GET',
        url: url,
        success: function (data) {
          console.log(data);
          let text = txt_to_article(data);
          $$('#article').html(text);
        }
      });
}

$$(function () {
  load_txt('/posts/论语学而篇第一.txt');
});