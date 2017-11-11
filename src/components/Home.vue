<template>
<div id="Home">
  <!-- <router-link to="/exam"><Button type="info">快开始吧</Button></router-link> -->
  <section class="hero-area bg-1">
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <div class="block">
            <h1>真的刷题 刷出声</h1>
            <p>学习者的大事，大快所有人心的大好事</p>
            <div>
              <router-link to="/exam"><a class="btn btn-home" href="#about" role="button">来呀快活呀</a></router-link>
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <div class="block">
            <div class="counter text-center">
              <ul id="countdown_dashboard">
                <li>
                  <div class="dash days_dash">
                    <div class="digit">1</div>
                    <div class="digit">0</div>
                    <div class="digit">个</div>
                    <span class="dash_title">学科</span>
                  </div>
                </li>
                <li>
                  <div class="dash hours_dash">
                    <div class="digit">7</div>
                    <div class="digit">0</div>
                    <div class="digit">套</div>
                    <span class="dash_title">试卷</span>
                  </div>
                </li>
                <li>
                  <div class="dash minutes_dash">
                    <div class="digit">7</div>
                    <div class="digit">0</div>
                    <div class="digit">9</div>
                    <div class="digit">道</div>
                    <span class="dash_title">习题</span>
                  </div>
                </li>
                <li>
                  <div class="dash seconds_dash">
                    <div class="digit">9</div>
                    <div class="digit">9</div>
                    <div class="digit">次</div>
                    <span class="dash_title">刷题</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- .row close -->
    </div>
    <!-- .container close -->
  </section>
  <!-- header close -->
</div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({

  })
}
</script>

<style lang="css" scoped>
#Home{
    /*margin-top: 50px;*/
}



.btn {
  border-radius: 0; }

.btn-home {
  background-color: #1bafb4;
  border-radius: 0px;
  color: #fff;
  font-size: 18px;
  padding: 10px 40px;
  margin-top: 30px; }
  .btn-home:hover, .btn-home:focus {
    background-color: #fff;
    color: #555;
    border: 1px solid #fff; }




    /*--
        .hero-area start ！！mark
    --*/
    .bg-1 {
      background-image: url("../../src/assets/bg.jpg");
      background-size: cover;
      background-attachment: fixed;
   }

    .bg-gray {
      background: #f8f8f8;
  }

    .hero-area {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center; }
      .hero-area h1 {
        color: #fff;
        font-size: 60px;
        text-transform: uppercase;
        font-weight: bold;
        padding-bottom: 19px;
        margin-top: 30px; }
      .hero-area p {
        color: #fff;
        font-size: 20px;
        line-height: 1.3; }
      .hero-area .counter {
        background: rgba(255, 255, 255, 0.2);
        padding: 18px; }
        .hero-area .counter ul li {
          background-color: rgba(255, 255, 255, 0.3);
          color: #fff;
          display: inline-block;
          line-height: 25px;
          padding: 25px 28px 20px;
          text-align: center;
          width: 49%;
          margin-bottom: 3px; }
          .hero-area .counter ul li span {
            display: block;
            font-size: 16px;
            font-weight: 600; }
          .hero-area .counter ul li .digit {
            display: inline-block;
            font-size: 50px;
            font-weight: bold;
            line-height: 50px;
            position: relative;
            overflow: hidden;
            height: 60px; }

</style>
