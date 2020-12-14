<template>
	<div>
		login组件{{msg}}
		<router-link to="/login">login</router-link>
		<br/>
		
		<br/>
		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				msg:"haha"
			}
		},
		methods:{
			show(){
				console.log("jeje")
			}
		},
		components:{
			
		}
	}
</script>

<style>
</style>
