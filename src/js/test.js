//这是node中向外暴露成员的形式
// module.exports={}

// ES6中也通过规范的形式规定了如何导入和导出模块
// 导入模块使用 
// import  XX from '模块标识符'
// export default 和export来暴露成员
// export default{
// 	name:'zs',
// 	age:30
// }

// 通过export向外暴露的成员只能通过花括号来接收,这种形式叫做按需导出
var title = "ceshi";
var showFun = function(){
	return 1;
}

export {title,showFun};





// Node中使用
// var XX = require('');
// modules.exports={} 和exports来暴露