
var ctJson = "/hpp/admin/api/get_config"
        $.getJSON(ctJson, function (data) {
		document.getElementById("tbody_config").innerHTML="";
            $.each(data, function (index, value) {
                $("#tbody_config").append(`
				<tr>
                          <td>
                           ${index}
                          <\/td>
                          <td>
                            ${value}
                          <\/td><td><a href="javascript:edit_config('${index}')">修改<\/td>
                `);
            })});
function edit_config(index){
			swal({
  content: {
    element: "input",
    attributes: {
	  placeholder: "输入"+index+"的键值"
    },
  },
})
.then((value) => {
if(value!="" & value!=null){
t_body={index:index,value:value}
var ajax = ajaxObject();
    ajax.open( "POST" , '/hpp/admin/api/edit_config' , true );
    ajax.setRequestHeader( "Content-Type" , "text/plain" );
    ajax.onreadystatechange = function () {
        if( ajax.readyState == 4 ) {
            if( ajax.status == 200 ) {
            swal("已更改配置！", {
  icon: "success",
  buttons: {
    yes: "是"
  },
})
.then((value) => {
  switch (value) {
    default:
	  window.location.reload();
  }
});
            }
		else{
			swal({
				title: "失败！",
				text: "配置修改失败，请检查您是否登陆",
				icon: "warning",
			});
			}
	}
}
ajax.send(JSON.stringify(t_body));
}
else{swal("配置修改已取消！","您输入了空值","success")}})};
