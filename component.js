window.onload=function(){
	// 全局组件注册
	Vue.component('myct',{
		template:"<div>Hi My name Is a Component!</div>"
	});

	Vue.component('test',{
		template:"<button v-on:click='count+=1'>{{count}}</button>",
		data:function(){
			return {count:0}
		}
	});

	Vue.component('enheng',{
		props:['message'],
		template:'<h3>{{message}}</h3>'
	});

	Vue.component('hell',{
		props:['myMessage'],
		template:'<h2>{{ myMessage }}</h2>',
	})

	Vue.component('single',{
		props:['singleStream'],
		template:'<button v-on:click="count += 1">{{ count }}</button>',
		data:function(){
			return {count:this.singleStream} 
		}
	});

	Vue.component('singlet',{
		props:['singleTwo'],
		template:'<button v-on:click="other">{{other}}</button>',
		computed:{
			other:function(){
				return this.singleTwo.trim().toLowerCase();
			}
		}
	})

	//props 验证
	Vue.component('check',{
		props:{

			    // 基础类型检测 （`null` 意思是任何类型都可以）
			    propA: Number,
			    // 多种类型
			    propB: [String, Number],
			    // 必传且是字符串
			    // propC: {
			    //   type: String,
			    //   required: true
			    // },
			    // 数字，有默认值
			    propD: {
			      type: Number,
			      default: 100
			    },
			    // 数组／对象的默认值应当由一个工厂函数返回
			    propE: {
			      type: Object,
			      default: function () {
			        return { message: 'hello' }
			      }
			    },
			    // 自定义验证函数
			    propF: {
			      validator: function (value) {
			        return value > 10
			      }
			    }	
		},
		// template:"<button> {{ propA }} </button>"
		template:'<input type="text" v-bind:value="propA">'
	});


	var Child = {
		template:"<h3>我是标题，标题阿三</h3>",
	}


	var app = new Vue({
		el:'#app',

		data:{
			message:'',
			a:'BBBBB',
			b:333
		},
		methods:{

		},
		// 局部组件注册
		components:{
			'myh' : Child
		}
	});
}