<template>
  <div id="test">
    <div class="title">
      测试一下storage的用法
    </div>
    <div class="mb">
      <el-button type="success" @click="addInfo">存入信息</el-button>
    </div>
    <div class="mb">
      <el-button type="primary" @click="getInfo">获取信息</el-button>
      {{ name }} {{ userInfo }}
    </div>
    <div class="mb">
      <el-button type="warning" @click="delItem">删除名称</el-button>
      {{ name }}
    </div>
    <div>
      <el-button type="danger" @click="delAll">删除全部</el-button>
      {{ name }} {{ userInfo }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'StorageTest',
  data() {
    return {
      name: '',
      userInfo: ''
    }
  },
  methods: {
    addInfo() {
      this.$storage.setItem('name', '张三')
      this.$storage.setItem('userInfo', { 'A': 'a', 'B': 'b' })
      console.log('name: ', this.$storage.getItem('name'))
      console.log('userInfo: ', this.$storage.getItem('userInfo'))
    },
    getInfo() {
      this.name = this.$storage.getItem('name')
      this.userInfo = this.$storage.getItem('userInfo')
    },
    delItem() {
      this.name = this.$storage.clearItem('name')
      console.log('name:', this.$storage.getItem('name'))
    },
    delAll() {
      this.$storage.clearAll()
      this.getInfo()
      console.log('userInfo: ', this.$storage.getItem('userInfo'))
    }
  }
}
</script>
<style scoped>
.title{
  line-height:50px;
  color:cornflowerblue
}
.mb{
  margin-bottom: 10px;
}
</style>
