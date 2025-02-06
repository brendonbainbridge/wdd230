const input = document.querySelector('favchap');
const button = document.querySelector('button');
const list = document.querySelector('favchap');


    
    if (input.value != '') { 
        li.textContent = input.value;
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
            input.value = '';        
          });

        }
    else(input.value = ''){
        document.getElementById("favchap").innerHTML = "Please actually put in a scripture";
    }




  