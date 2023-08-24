<template>
  <header>
    <div class='header-content'>
      <div class='content-nav'>
        <div class="title">
          <div class="hcqStyle2">麦趣问卷数据筛选</div>
        </div>
        <div class="import">
      <a-button shape="round" size="large" class="importText" onclick="">导入</a-button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>

</script>

<style scoped>
*{
  margin : 0;
  padding : 0;
}
.hcqStyle2 {
  font-weight: bold;
  color: #def;
  text-shadow: 0 0 1px currentColor, -1px -1px 1px #000, 0 -1px 1px #000, 1px -1px 1px #000, 1px 0 1px #000, 1px 1px 1px #000, 0 1px 1px #000, -1px 1px 1px #000, -1px 0 1px #000;
  font-size: 50px;
}


header {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100px;
  background: white;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.16);
  opacity: 1;
  justify-content: space-around;

}

.content-nav {
  display: flex;
  align-items: center;

}
.import{
  margin-left: 100px;
}
.importText{
  color: #def;
  text-shadow: 0 0 1px currentColor, -1px -1px 1px #000, 0 -1px 1px #000, 1px -1px 1px #000, 1px 0 1px #000, 1px 1px 1px #000, 0 1px 1px #000, -1px 1px 1px #000, -1px 0 1px #000;
}




</style>