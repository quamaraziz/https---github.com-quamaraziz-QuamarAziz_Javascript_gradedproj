var id=0;
var del_id=0;
var inputData = [];
function add(){        
        var inputVal = document.getElementById("appname").value;
        inputData.push(inputVal);        
        var inputValue = "";        
        for(var i = 0; i < inputData.length; i++) {
                inputValue += '<div class="inputData"><input type="text" value="'+ inputData[i] + '" disabled="disabled"><button class="edit" onClick="edit(this)">Edit</button><button class="delete" onclick="del(this,'+i+')">Delete</button></div>';
        }
        console.log(inputValue);
        var sectionData = document.getElementById('formData');
        sectionData.innerHTML = inputValue;

     }

function del(element,itemIndex) {
        inputData.splice(itemIndex, 1);
        element.parentElement.remove();
}

function edit(element) {
     //   console.log(element);       
        element.parentElement.getElementsByTagName("input")[0].removeAttribute("disabled");  
        element.parentElement.getElementsByTagName("input")[0].setAttribute('class','active');    
        let div = document.createElement("button");  
        div.setAttribute('class','update');  
        div.setAttribute('onclick','update(this)'); 
        div.innerHTML = 'Update';
        element.parentElement.replaceChild(div,element);

}

function update(element){
       let updatedValue =  element.parentElement.getElementsByTagName("input")[0].setAttribute('disabled','disabled');
       element.parentElement.getElementsByTagName("input")[0].removeAttribute('class');
       let div = document.createElement("button");  
       div.setAttribute('class','edit');  
       div.setAttribute('onclick','edit(this)'); 
       div.innerHTML = 'Edit';
       element.parentElement.replaceChild(div,element)
}