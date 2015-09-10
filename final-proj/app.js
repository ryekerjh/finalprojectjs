// ======================================================Variables======================================

var form = document.getElementById("toDoForm");

var ul = document.getElementById("toDoList");

var h1 = document.querySelector("h1");

var toDoArray = [];






// ======================================Event Listeners===============================

form.addEventListener("submit", function (evt) {
	var toDoItem = form.toDoItem.value;
	form.toDoItem.value = "";
	toDoArray.push(toDoItem);
	logLis();
	evt.preventDefault();
});



// ========================================Functions====================================


//creates DOM element
   function e(elementType, text, attributes, styles) {
        var newElement = document.createElement(elementType);
        newElement.textContent = text;

        //set the attributes on the tag
        if (attributes) {
        for (var i = 0; i < attributes.length; i++) {
        var attr = attributes[i];
        newElement.setAttribute(attr[0], attr[1]);
        }
    }


        //set the styles
        if (styles) {
        for (var j = 0; j < styles.length; j++) {
        var style = styles[j];
        newElement.style[style[0]] = style[1];
        }
}
        return newElement;
}
//turns array into lis
        function logLis(){
        	ul.innerHTML = "";
        	for (i = 0; i < toDoArray.length; i++) {
        		var item = toDoArray[i];
        		var li = e("li");
        		var checkbox = e("input", "", [["type", "checkbox"], ["id", item]]);
        		var span =e("span", item);
        		var del = e("button", "Delete", [["class", "delBtn"], ["rel", item]]);
        		var edit = e("button", "Edit", [["class", "editBtn"], ["rel", item]]);

        		checkbox.addEventListener("click", function(evt) {
        			if(this.checked) {
        				this.parentElement.classList.add("checked");
        				li.removeChild(edit);
        				
        		} 
            		else {
            			this.parentElement.classList.remove("checked");
                        li.appendChild(edit);
            			}
    			});


        		del.addEventListener("click", function(){
        			if (confirm("Are you sure you want to delete?")){
        				var delAtt = this.getAttribute("rel");
        				var delItem = toDoArray.indexOf(delAtt);
        				toDoArray.splice(delItem, 1);
        				logLis();
        			}

        		edit.addEventListener("click", function() {
					var getIt = li.getAttribute("id");
					var ret = document.getElementById(getIt);
					var newChild = document.createElement("form");
					newChild.setAttribute("input", "text");
					ret.replaceChild(newChild, ret);

        			});
        		});


        		


        		li.appendChild(checkbox);
        		li.appendChild(span);
        		li.appendChild(del);
        		ul.appendChild(li);

        	}

        }
// ======================================Execution==============================
//when checkbox is clicked, edit button must dissapear
//edit button must turn its li into a string in an input text field with the original entry, turn the edit button into a confirm button, and then when its clicked again, it must return to an li and display your new entry
