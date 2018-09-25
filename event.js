window.onload = function(){
	var app = new Vue({
		el:'#app',
		data:{
			name:'Vue.js',
			greetText:''
		},
		methods:{
			greet:function(event){
				console.log(event)
				this.greetText = 'Hello' + this.name;
			}
			,warn: function (message, event) {
		    	// 现在我们可以访问原生事件对象
		    	if (event) event.preventDefault()
		    	alert(message)
		    console.log(event)
		  	}
		  	,doThis:function(){
		  		alert('Hello Vue.js Just Do This')
		  	}
		  	,doThat:function(){
		  		alert('Hello Vue.js Just Do That')
		  	}
		}
	});

}
