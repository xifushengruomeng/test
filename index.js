window.onload = function(){
	//组件构建应用 个组件实质上是一个拥有预定义选项的一个 Vue 实例
	Vue.component('tudo-item',{ //全局组件定义需要在Vue实例化之前
		template:'<li>I Love You</li>'
	})

	//定义引入prop 使用 v-bind 将tudo 传入组件
	Vue.component('myitem', {
	  props: ['tudo'],
	  template: '<li>{{ tudo.text }}</li>'
	})

	var app = new Vue({ // Vue构造器 构建Vue实例
	  	el: '#app',
	  	data: { //变量申明 属性
	    	message: 'Hello Vue!', //申明式渲染
	    	title: 'You loaded this page on ' + new Date(), //bind 绑定 z指令 表示v下提供的元素特殊属性
	    	show:true, //v-if='show' //显示或者展示
	    	hidden:false,
	    	datas:[ //v-for 循环
	    		{text:'first'},
	    		{text:'second'},
	    		{text:'third'}
	    	],
	    	htmlText:'<span>give a html tags</span>'
	    	,firstName:'I am frist'
	    	,lastName: 'I am lastName'
	  	}
	  	,methods: { //方法定义 方法
	  		reverser:function(){
	  			// this.message = this.message.split('').reverse().join('');
	  			this.message = " I love You !"
	  		}
	  	}
	  	//生命周期钩子 如created 这个钩子在实例被创建之后被调用：
	  	,created:function(){
	  		// 在实例生命周期的不同阶段调用，如 mounted、 updated 、destroyed 。钩子的 this 指向调用它的 Vue 实例。
	  		console.log('vue 实例创建好了咯');
	  	}
	  	//过滤器 函数总是接受表达式的值作为第一个参数
	  	,filters:{
	  		func1:function(v1,v2){
	  			return v1+v2;
	  		},
	  		func2:function(v1,v2){
	  			return v1+v2
	  		}
	  	}

	  	// 计算属性 计算属性同样可以用method方式实现 但是计算属性会有缓存 只要message没有变化则reverseMessage就不会继续执行而是读取缓存。method方法则会每次执行函数
	  	,computed:{
	  		reverseMessage:function(){ //申明属性 此处方法 reverseMessage 将被用作vue实例的属性来使用 并且其值取决于message 属性
	  			return this.message.split('').reverse().join('');
	  		},
	  		fullName:{
	  			get:function(){
	  				return this.firstName + this.lastName;
	  			},
	  			set:function(newValue){
	  				var names = newValue.split(' ')
				    this.firstName = names[0]
				    this.lastName = names[names.length - 1]
	  			}

	  			// app.fullName = 'John Doe' 时， setter 会被调用， app.firstName 和 app.lastName 也会被对应更新。
	  		}
	  	}

	});


	// 除了 data 属性， Vue 实例暴露了一些有用的实例属性与方法。这些属性与方法都有前缀 $
	var b = app.$data.message === 'Hello Vue!';
	var a = app.$el === document.getElementById('#app');
	console.log('have a check console---'+b)


	// $watch是一个实例方法 如果message 发声变化则次函数会执行 该方法多用于异步执行代码
	app.$watch('message', function (newVal, oldVal) {
	  // 这个回调将在 `app.a`  改变后调用
	  alert(213)
	})

}