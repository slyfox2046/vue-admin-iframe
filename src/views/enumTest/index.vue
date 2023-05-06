<template>
  <div id="test">
    <div class="title">
      测试一下enum的用法
    </div>
    <div>
      {{ $enum.getValueDescList('ROLE_NUM') }} <br>
      {{ $enum.getDescByValue('ROLE_NUM',1) }} <br>
      {{ $enum.getValueDesc('ROLE_NUM') }} <br>
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
