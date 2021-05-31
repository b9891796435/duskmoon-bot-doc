<template>
    <h1>Fimtale Bot指令帮助</h1>
    <p>
        所有ft指令均以/ft开头，指令各参数间以空格隔开。
    </p>
    <ul>
        <li>
            同人金句quote：<br/>
            获取一条主页最下方的同人金句<code>/ft quote</code>,该指令无参数。
        </li>
        <li>
            公告列表anno：<br/>
            获取当前主页展示的公告列表<code>/ft anno</code>,该指令无参数。
        </li>
        <li>
            编辑推荐er：<br/>
            从当前主页的编辑推荐中随机抽取一篇小说<code>/ft er</code>，该指令无参数。
        </li>
        <li>
            近日热门np：<br/>
            从当前主页的近日热门中随机抽取一篇小说<code>/ft np</code>，该指令无参数。
        </li>
        <li>
            最近更新nu：<br/>
            从当前主页的最近更新中随机抽取一篇小说<code>/ft nu</code>，该指令无参数。
        </li>
        <li>
            小说搜索search：<br/>
            调用ft搜索功能搜索关键字，<code>/ft search keyword</code>，该指令参数为keyword，参数意义为需要搜索的关键字。指令只会返回搜索结果前两篇小说。
            例：要搜索“图书馆里的幽灵公主”，需要输入<code>/ft search 图书馆里的幽灵公主</code>
        </li>
        <p>以上指令除同人金句均有显示完整列表变种，但由于超过一定字数企鹅娘会吃掉整条消息，所以无法使用。</p>
    </ul>
    <p>
        
    </p>
</template>

<script>
export default {
  name: "FtBot",
};
</script>

<style scoped>
* {
    text-align: left;
    line-height: 1.6em;
    margin: 1.2em 0 -1.2em;
    padding-bottom: 1.2em;
    position: relative;
    z-index: 1;
}
code{
    padding-bottom: 0;
}
</style>