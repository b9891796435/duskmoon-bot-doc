<template>
  <el-container>
    <el-aside
      :class= sidebar
      width="200px"
      style="
        height: 100vh;
        background-color: rgb(238, 241, 246);
        position: fixed;
        top: 0;
        left: 0;
        overflow: scroll;
      "
      ref="sideBar"
    >
      <el-menu @select="handleSelect">
        <el-menu-item index="/">主页</el-menu-item>
        <el-menu-item index="Ftbot">Ftbot帮助</el-menu-item>
        <el-menu-item index="DBbot">DBbot帮助</el-menu-item>
      </el-menu>
    </el-aside>

    <el-container class="contain">
      <el-header style="text-align: right; font-size: 12px">
        <div
          :class= sidebar_button
          style="width: 1.25rem; height: 1.25rem; float: left"
          v-on:click="slideToggle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            viewBox="0 0 448 512"
            class="icon"
          >
            <path
              fill="currentColor"
              d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
            ></path>
          </svg>
        </div>
        <span style="display: block; float: right">b9891796435</span>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      isSlide: false,
      sidebar: "sidebar",
      sidebar_button:"sidebar-button"
    };
  },
  methods: {
    handleSelect(key) {
      this.$router.push(key);
    },
    slideToggle() {
      this.isSlide = !this.isSlide;
    },
  },
  watch: {
    isSlide: function (val) {
      if (val == true) {
        this.sidebar="sidebar open"
        this.sidebar_button="sidebar-button open"
      } else {
        this.sidebar="sidebar"
        this.sidebar_button="sidebar-button"
      }
    },
  },
};
</script>

<style>
@media screen and (max-width: 719px) {
  .sidebar.open {
    transform: translateX(0%);
  }
  .sidebar {
    top: 0;
    padding-top: 3.6rem;
    transform: translateX(-100%);
    transition: transform 0.2s ease;
    z-index: 1000;
  }
  .sidebar-button.open {
    margin-left:200px;
  }
  .sidebar-button {
    display: block;
  }
}
@media screen and (min-width: 720px) {
  .contain {
    padding-left: 200px;
  }
  .sidebar-button {
    display: none;
  }
}

* {
  margin: 0;
}
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  margin: 0;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

code {
  background-color: #f9fafc;
  padding: 0 4px;
  border: 1px solid #eaeefb;
  border-radius: 4px;
}
</style>
