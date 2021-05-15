<template>
  <div>
      {{ msg }}
      <tr v-for="item in banshees" >
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.sketch }}</td>
          <td>{{ item.upNickName }}</td>
          <td>{{ item.upNickMain }}</td>
          <td>{{ item.plays }}</td>
          <td>{{ item.comments }}</td>
          <td>{{ item.types}}</td>
          <td>{{ item.catalog}}</td>

      </tr>
  </div>
</template>

<script>
export default {
  name: "Consolegame",
  data(){
    return {
      msg:'hello banshee',
      banshees:[
        { id:1,
          title:'test',
          sketch:'test',
          upNickName:'test',
          upNickMain:'test',
          plays:'test',
          comments:'test',
          types:'test',
          catalog:'test'
        }
      ]
    }
  },
  created() {
    const _this=this
    axios.get("http://localhost:8082/consolegame/findall").then(function (resp){
      _this.banshees=resp.data
    })
  }
}
</script>

<style scoped>

</style>