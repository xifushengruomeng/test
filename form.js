window.onload=function(){
	var app =  new Vue({
		el:'#app',
		data:{
			message:'',
			multimessage:'',
			check:true,
			checkArr:[],
			picked:'',
			selected:[],
			//for 渲染列表
			selected_v:'',
			options: [
		      { text: 'One', value: 'A' },
		      { text: 'Two', value: 'B' },
		      { text: 'Three', value: 'C' }
		    ],
		    toggle:'',
		    a:'aaaaaaa',
		    b:'bbbbbbb',

		    // 列表选项设置
		    selectedObj:{
		    	number:2222
		    }
		}
	});
}