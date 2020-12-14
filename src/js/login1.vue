<template>
	<div>
		<h1>login的子组件{{login1msg}}</h1>
		<!-- <router-view></router-view> -->
	</div>
</template>

<script>
	export default{
		data(){
			return{
				login1msg:"login1msg"
			}
		}
	}
</script>

<style scoped>
	div{
		color: red;
	}
</style>
