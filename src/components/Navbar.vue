<template>
<div id="Navbar">
  <Menu mode="horizontal" theme="light" active-name="1">
    <Row>
      <Col span="12">
      <router-link to="/">
        <Menu-item id="brand" name="0">
          刷题吧！
        </Menu-item>
      </router-link>
      <router-link to="/">
        <Menu-item name="1">
          首页
        </Menu-item>
      </router-link>
      <router-link to="/exam">
        <Menu-item name="2">
          刷题
        </Menu-item>
      </router-link>
      <Menu-item name="3">
        错题本
      </Menu-item>
      </Col>
      <Col span="4" offset="8">
      <!-- //TBD resiponsive+ -->
      <Menu-item name="4">
        登陆
      </Menu-item>
      <Menu-item name="5">
        注册
      </Menu-item>
      </Col>
    </Row>
  </Menu>
</div>
</template>
<script>
export default {
  name: "Navbar",
  data: () => ({

  })

}
</script>
<style lang="css" scoped>
#Navbar{
    margin-bottom: 20px;
}

#brand{
    border: 0;
    font-size: 16px;
    color: #464c5b;
    font-family: "Hiragino Sans GB";
    font-weight: bold;
}
</style>
