//移除数组中的元素
Array.prototype.remove = function(data){
	if(data==null){
		return this;
	}
	var arr = new Array();
	for(var i=0;i<this.length;i++){
		var bool = true;
		if(this[i]!=data && JSON.stringify(this[i])!=JSON.stringify(data)){
			arr.push(this[i]);
		}
	}
	return arr;
}

//移除数组中的元素
Array.prototype.removeAll = function(data){
	if(data==null || data.length==0){
		return this;
	}
	var arr = new Array();
	for(var i=0;i<this.length;i++){
		var bool = true;
		for(var j=0;j<data.length;j++){
			if(this[i]==data[j] || JSON.stringify(this[i])==JSON.stringify(data[j])){
				bool = false;
			}
		}
		if(bool){
			arr.push(this[i]);
		}
	}
	return arr;
}

//数组中添加多个元素,去重
Array.prototype.pushAll = function(arr,bool){
	if(arr!=null && arr.size!=0){
		for(var i=0;i<arr.length;i++){
			if(bool){//需要去重
				if(!this.contains(arr[i])){
					this.push(arr[i]);
				}
			} else {
				this.push(arr[i]);
			}
		}
	}
}

//数组是否包含元素
Array.prototype.contains = function(data){
	if(this==null || this.length==0){
		return false;
	}
	var bool = false;
	for(var i=0;i<this.length;i++){
		if(this[i]==data || JSON.stringify(this[i])==JSON.stringify(data)){
			bool = true;
			break;
		}
	}
	return bool;
}