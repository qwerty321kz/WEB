window.onload = function(){
    var todoList = [];
    var new_todoList = [];
    if(localStorage.getItem('todo') != undefined){
        todoList = JSON.parse(localStorage.getItem('todo'));
        output();
    }
    document.getElementById('text').onclick = function(){
        document.getElementById('text').value = "";
    }
    window.onmouseup = e => {
        var tar = e.target.id;
        new_todoList = []
        if(tar >= 500000 && tar <= 500100){ 
            console.log(todoList)
            tar = tar - 500000;
            console.log(tar)
            click = false;
            if(todoList.length == 1) {
                todoList = []
                
            }
            else if(tar == 0){
                for(var i = 0; i < todoList.length - 1 ; i++){
                    new_todoList[i] = todoList[i + 1];
                }
                todoList = []
                todoList = new_todoList
            }
            else{
                let j = 0;
                for(var i = 0; i < todoList.length - 1 ; i++){
                    if(tar != i){
                        new_todoList[j] = todoList[i];
                        j++;
                    }
                }
                todoList = []
                todoList = new_todoList;
            }
            // for(var i = 0; i < todoList.length; i++){
            //     todoList[i].id = i;
            // }
            output();
            localStorage.setItem('todo', JSON.stringify(todoList));
        }
        if(tar > 100000 && tar < 200000){
            var index = tar - 100000;
            if(todoList[index].check == true){
                todoList[index].check = false;
            }
            else{
                todoList[index].check = true;
            }
            output();
            localStorage.setItem('todo', JSON.stringify(todoList));
        }
    } 
    document.getElementById('add').onclick = function(){
        // for(var i = 0; i < todoList.length; i++){
        //     todoList[i].id = i;
        // }
        
        var text = document.getElementById('text').value;
        if(text.length == 0){

        }
        else{

            var list = {};
            var idxx = todoList.length;
            list.todo = text;
            list.check = false;
            list.id = idxx;
            var n = todoList.length;
            todoList[n] = list;
            console.log(todoList);
            output();
            document.getElementById('text').value = "";
        }
        
    }
    function output(){
        for(var i = 0; i < todoList.length; i++){
            todoList[i].id = i;
        }
        var out='';
        let idx = 0;
        console.log(todoList.length)
        for(var it in todoList){
            if(todoList[it].check == true){
                out += '<br>' + `
                <div id=${idx} style="font-size: 23px; color: green; text-decoration-line: line-through;">
                    <tr>
                        <td>
                            <input id="${idx + 100000}" type="checkbox" checked>
                        </td>
                        <td id="text1" class="text1" style="color: #ffffff;">
                            ${todoList[it].todo}
                        </td>
                        <td>
                            <button id="${idx + 500000}" class="delete">
                                del
                            </button>
                        </td>
                    </tr>
                </div>
                <br>
                <hr style = "width: 900px; float: left;">`;
            }
            else{
                out += '<br>' + `
                <div id=${idx} style="font-size: 23px; background-color:">
                    <tr>
                        <td>
                            <input id="${idx + 100000}" type="checkbox" >
                        </td>
                        <td id="text2" class="text2">
                            ${todoList[it].todo}
                        </td>
                        <td>
                            <button  id="${idx + 500000}" class="delete">
                            del
                            </button>
                        </td>
                    </tr>
                   
                </div>
                <br>
                <hr style = "width: 900px; float: left;">`;
            }
            idx++;
        }
        document.getElementById('out').innerHTML = out;
    }
    document.getElementById("clear").onclick = function(){
        todoList = [];
        output();
    }
}