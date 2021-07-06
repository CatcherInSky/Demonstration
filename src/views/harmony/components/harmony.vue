<template>
  <div class="container">
    <div>
      <div class="moon" />
      <div class="moon moon2" />
      <svg>
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0 5"/>
        </filter>
      </svg>
    </div>
  </div>  
</template>
<script>
// https://juejin.cn/post/6979042510400126983
</script>

<style scoped>
@keyframes up {
  from {
    margin-top: 50%;
  }
  to {
    margin-top: 0%;
  }
}
@keyframes down {
  from {
    margin-top: -100%;
  }
  to {
    margin-top: -50%;
  }
}
.container {
  height: 500px;
  width: 100%;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.moon {
  height: 100px;
  width: 200px;
  overflow: hidden;
}
.moon::after {
  content: '';
  display: block;
  border: 20px solid #fff;
  border-radius: 100%;
  width: 100%;
  height: 200%;
  animation: up 1.5s infinite;
  box-shadow:  0 0 10px white, inset 0 0 10px white;
}
.moon2::after {
  /* margin-top: -50%; */
  animation-name: down;
  filter: url(#blur)
}
</style>