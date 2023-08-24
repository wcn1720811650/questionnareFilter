<template>
  <div class="body">
    <div style="display: flex; flex-direction: row">
      <div class="NavRight">
        <a-button @click="goWelcome" class="FreeUse">免费使用</a-button>
      </div>
    </div>
    <div class="AI">麦趣问卷数据筛选</div>
    <a-button class="GoFreeUse" @click="goWelcome">免费使用</a-button>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter()
const goWelcome = () => {
  router.push("/home");
}
</script>

<style scoped>
.body {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 97.5vh;
  background: url("/src/assets/img.png") no-repeat;
  background-size: 100% 100%;


}

.AI {
  font-size: 48px;
  color: #1FB9B9;
  line-height: 67px;
  margin-top: 160px;
  text-align: center;
  display: inline-block;
  font-weight: bold;
  text-shadow: 15px 5px 15px currentColor, -1px -1px 1px #000, 0 -1px 1px #000, 1px -1px 1px #000, 1px 0 1px #000, 1px 1px 1px #000, 0 1px 1px #000, -1px 1px 1px #000, -1px 0 1px #000;
}
.GoFreeUse {
  margin-left: 50%;
  transform: translateX(-50%);
  width: 160px;
  height: 54px;
  background: #1FB9B9;
  border-radius: 30px;
  margin-top: 34px;
  text-align: center;
  color: #FFF;
  border: 0;
}
.NavRight {
  margin-left: auto;
}
.FreeUse {
  background: #1FB9B9;
  border-radius: 20px;
  margin: 2vh 2vw 0 16px;
  color: #FFFFFF;
  border: 0;
}

</style>