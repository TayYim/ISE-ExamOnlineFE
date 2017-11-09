<template>
<div id="Home">
  <Row>
    <Col span="12">
    <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
    </Col>
    <Col span="12">
    <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
    </Col>
  </Row>
  <Carousel loop>
    <CarouselItem>
        TBD
      <div class="demo-carousel">1</div>
    </CarouselItem>
    <CarouselItem>
        TBD
      <div class="demo-carousel">2</div>
    </CarouselItem>
    <CarouselItem>
        TBD
      <div class="demo-carousel">3</div>
    </CarouselItem>
    <CarouselItem>
        TBD
      <div class="demo-carousel">4</div>
    </CarouselItem>
  </Carousel>
  <router-link to="/exam"><Button type="info">快开始吧</Button></router-link>
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
    margin-top: 50px;
}
</style>
