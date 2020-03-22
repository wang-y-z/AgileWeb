function render(){
        var html="";
        var result=[
        {id:1,title:"hello",status:0},
        {id:2,title:"hello",status:0} 
        ];
        result.forEach(function(item){
            var checked=item.status>0?"checked":"";
            var li=`<li itemId="${item.id}">
                <input type="checkbox" ${checked}>
                <input type="textbox" value="${item.title}">
                <a href="javascript:"  class="delete">删除</a>
            </li>`
            html+=li;
        })
        $("#list").html(html);
       
    
}
$(function (){
    render();
})
