<template>
    <h1>Derpibooru指令帮助</h1>
    <p>
        所有Derpibooru指令均以/db开头，指令各参数间以空格隔开。
    </p>
    <ul>
        <li>
            随机图片 rand：<br/>
            随机获取一张Db图片<code>/db rand</code>,该指令无参数。
        </li>
        <li>
            按图号取图 id：<br/>
            获取对应id的图片<code>/db id ID</code>,该指令参数为ID，参数对应图片的图号。例如获取图号为114514的图片，则需发送指令<code>/db id 114514</code>。
        </li>
        <li>
            搜索图片 search：<br/>
            按给定关键词发送一张图片<code>/ft search keyword num</code>，该指令参数为keyword与num，keyword对应搜索关键词，num对应所需图片在搜索结果中的位置，第四个关键词可留空，若留空则随机展示所有结果中的一张。注意关键词中如果存在空格请使用<code>#b</code>替换。如搜索twilight sparkle，则输入<code>/ft search twilight#bsparkle</code>
        </li>
        <li>
            以图搜图 reverse：<br/>
            发送一张图片，调用Db站以图搜图引擎进行搜索<code>/ft reverse</code>，该指令无参数，但需要在调用指令后按bot指引发送要查找的图片。
        </li>
        <p>以上指令均会自动过滤explicit、questionable、suggestive与politic四个标签。</p>
    </ul>
    <p>
        
    </p>
</template>

<script>
export default {
  name: "Dbbot",
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