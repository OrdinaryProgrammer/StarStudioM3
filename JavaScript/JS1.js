//邮箱补全
function inputList(input,list){
	var mailBox = [
			"@qq.com",
			"@sina.com",
			"@163.com",
			"@126.com",
			"@yahoo.com.cn",
			"@gmail.com",
			"@sohu.com"
	];
	$('#email').bind('input propertychange', function() {
			var key = $('#email').val();
			if(key.indexOf("@") != -1){
					key = key.slice(0,key.indexOf("@"));
			}
			var mailBoxLen = mailBox.length;
			var html = "";
			for(var i=0; i<mailBoxLen; i++){
					html += '<option value="'+ key + mailBox[i] +'"></option>';
			}
			list.html(html);
	});
}
inputList($("#email"),$("#input_list"));