<template>
  <h1>ChatGPTアプリ</h1>
  <div>
    <input type="text" v-model="keyword" />
  </div>
  <div>
    <button type="button" @click="handleClick">回答を作成する</button>
  </div>
</template>

<script setup>
const keyword = ref("");

const handleClick = () => {
  // ここに生成する処理をかく
};
</script>
