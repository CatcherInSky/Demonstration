<template>
    <div class="container">
        <div class="main">   
            <div class="head">
                <div class="ear left" />
                <div class="ear right" />
                <div class="eye left" />
                <div class="eye right" />
                <div class="face left" />
                <div class="face right" />
                <div class="mouth" />
            </div>
            <div class="ball">
                <div class="belt">
                    <div class="lock">
                        <div class="but" />
                    </div>
                </div>
                <div class="light" />
            </div>
        </div>
    </div>
</template>
<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
}
.main{
    position: relative;
}
.ear.left{
    background: #ffe000;
    width:40px;
    height:90px;
    position: absolute;
    top:-44px;
    left:0;
    border-radius: 20px 20px 20px 20px/70px 070px 20px 20px;
    transform: rotate(-30deg);
    display: flex;
    justify-content: center;
    overflow: hidden;
}
.ear.left::after{
    content: "";
    display: block;
    width:30px;
    height:20px;
    background: #4E4700;
    border-radius: 15px 15px 20px 20px/70px 70px 20px 20px;
}
.ear.right{
    background:#ffe000;
    width:40px;
    height:90px;
    position: absolute;
    top:-44px;
    right:0;
    border-radius: 20px 20px 20px 20px/70px 070px 20px 20px;
    transform: rotate(35deg);
    display: flex;
    justify-content: center;
      overflow: hidden;
}
.ear.right::after{
    content: "";
    display: block;
    width:30px;
    height:20px;
    background: #4E4700;
    border-radius: 15px 15px 20px 20px/70px 70px 20px 20px;
}
.eye{
    background: #4E4700;
    width: 23px;
    height: 23px;
    border-radius: 23px;
}
.eye.left{
    position: absolute;
    left:38px;
    top:44px;
}
.eye.right{
    position: absolute;
    right:38px;
    top:44px;
}
.mouth::before{
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border: 3px solid #4E4700;
    border-top:none;
    border-right: none;
    border-bottom-left-radius: 10px ;
    transform: rotateZ(-23deg);
    position: absolute;
    top:60px;
    left:86px;
}
.mouth::after{
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border: 3px solid #4E4700;
    border-top: none;
    border-left: none;
    border-bottom-right-radius: 10px;
    transform: rotateZ(23deg);
    position: absolute;
    top:60px;
    right:86px;
}
.head{
    border-radius: 200px 200px 0 0;
    width:200px;
    height:100px;
    background:#ffe000;
}
.face{
    background:#FF9900;
    width:30px;
    height: 30px;
    border-radius: 30px;     
}
.face.left{
    position: absolute;
    left:18px;
    bottom:101px;;
}
.face.right{
    position: absolute;
    right:18px;
    bottom:101px;
}
.ball{
    border-radius:0 0 200px 200px;
    width:200px;
    height:100px;
    background:#FF0000;
}
.belt{
    width:200px;
    height:15px;
    background:#322221;
    border-radius:0 0 2px 2px/0 0 15px 15px;
    display: flex;
    justify-content: center;
}
.lock{
    border-radius: 0 0 80px 80px;
    width:80px;
    height:40px;
    background:#322221;

}
.lock::after{
    content: "";
    display:block;
    border-radius: 0 0 60px 60px;
    width:60px;
    height:30px;
    background:#FDFDFD;
    transform: translateX(10px);
}
.but{
    content: "";
    display:block;
    border-radius: 0 0 40px 40px;
    width:40px;
    height:20px;
    background:#322221;
    transform: translateX(20px);
    position: absolute;
    z-index: 10;
}
.but::after{
    content: "";
    display:block;
    border-radius: 0 0 20px 20px;
    width:20px;
    height:10px;
    background:#686160;
    transform: translateX(10px);
}
.light{
    background:#FFD7C9;
    width: 20px;
    height: 27px;
    border-radius: 10px 10px 10px 10px/15px 15px 10px 10px;
    position: absolute;
    top:150px;
    left:150px;
    transform: rotate(45deg);
}
</style>