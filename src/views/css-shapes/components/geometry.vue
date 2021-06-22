<template>
    <div class="container">
        <div class="triangle"/>
        <div class="heart" />
        <div class="pacman" />
        <div class="oval" />
        <div class="egg" />
        <div class="moon" />
        <div class="infinity" />
    </div>
</template>
<script>
// 样式小技巧
// border
// border-radius
// box-shadow
// transform

</script>

<style scoped>
.container {
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.container div {
    margin: 10px;
}
.pacman {
  width: 0px;
  height: 0px;
  border-right: 60px solid transparent;
  border-top: 60px solid blue;
  border-left: 60px solid blue;
  border-bottom: 60px solid blue;
  border-radius: 60px;
}
.triangle {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid blue;
}
.heart {
    width: 71px;
    height: 100px;
    position: relative;
}
.heart:before,
.heart:after {
    position: absolute;
    bottom: 0;
    content: '';
    display: block;
    width: 50px;
    height: 80px;
    background: blue;
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg);
    left: 0;
}
.heart:after {
    left: unset;
    right: 0;
    transform: rotate(45deg);
}
.oval {
    width: 200px;
    height: 100px;
    background: blue;
    border-radius: 100px / 50px;
}
.egg {
  display: block;
  width: 126px;
  height: 180px;
  background-color: blue;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}
.moon {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: 15px 15px 0 0 blue;
}
.infinity {
    width: 116px;
    height: 100px;
    position: relative;
}
.infinity:before,
.infinity:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 60px;
    height: 60px;
    border: 20px solid blue;
    border-radius: 50px 50px 0 50px;
    transform: rotate(-45deg);
}
.infinity:after {
    left: unset;
    right: 0;
    transform: rotate(135deg);
}

</style>