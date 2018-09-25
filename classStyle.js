window.onload = function(){
	var vm = new Vue({
		el:'#app',
		data:{
			// 对象语法
			isActive:true,
			isError:false,
			classObject:{
				isActive:true,
				isError:false
			},
			color:'red',
			fontSize:'56',
			styleObject:{
				color:'blue',
				fontSize:'39px',
			},
			//数组语法
			activeClass:'isActive',
			errorClass:'isError',
			fontSizeArr:{fontSize:'29px'},
			colorArr:{color:'pink'}

		}
		,computed:{
			classObjected:function(){
				return {
					isActive:this.isActive,
					isError:this.isError,
				}
			},
			styleObjected:function(){
				return {
					color:this.color,
					fontSize:this.fontSize+'px'
				}
			}
		}
	});
}