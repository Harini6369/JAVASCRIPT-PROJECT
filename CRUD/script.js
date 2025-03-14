
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getDatabase,ref,push,onValue,remove,set} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";
const appSettings={
    databaseURL : "https://st-project-61f0a-default-rtdb.firebaseio.com/",
};
const app =initializeApp(appSettings);
const database =getDatabase(app);
const userListInDB = ref(database,"users");

const idEl= document.getElementById('id');
const nameEl= document.getElementById('name');
const ageEl= document.getElementById('age');
const cityEl= document.getElementById('city');
const frm = document.getElementById('frm');
const tblbodyEl= document.getElementById('tblbody');
 frm.addEventListener('submit',function (e){
    e.preventDefault();
    
    if(!nameEl.value.trim()||!ageEl.value.trim()|| !cityEl.value.trim()){
        alert("please fill all details")
        return;

    }
    if(idEl.value){
        set(ref(database,"users/"+ idEl.value),{
            name:nameEl.value.trim(),
            age:ageEl.value.trim(),
            city:cityEl.value.trim(),
    

        });
        clearElements();
        return;

    }
    const newUser = {
        name:nameEl.value.trim(),
        age:ageEl.value.trim(),
        city:cityEl.value.trim()

    }
    push(userListInDB,newUser)
    clearElements();
    
 })
 function clearElements(){
    idEl.value="";
    nameEl.value="";
    ageEl.value="";
    cityEl.value="";
 }
 onValue(userListInDB,function(snapshot){
    if(snapshot.exists()){
        let userArray = Object.entries( snapshot.val());
        tblbodyEl.innerHTML="";
        for(let i=0; i<userArray.length;i++){
            let currentUser = userArray[i];
            let currentUserID= currentUser[0];
            let currentUserValue  = currentUser[1];
            tblbodyEl.innerHTML += ` <tr>
            <td>${i + 1}</td>
            <td>${currentUserValue.name}</td>
            <td>${currentUserValue.age}</td>
            <td>${currentUserValue.city}</td>
            <td><button class="btn-edit" data-id="${currentUserID}">
            <span class="material-symbols-outlined" >
                edit_square</span>
                </button>
                </td>
            <td><button class="btn-delete" data-id="${currentUserID}">
            <span class="material-symbols-outlined" >
                delete</span>
                </button>
                </td>
        </tr>`
        }

    }else{
        tblbodyEl.innerHTML='<tr><td colspan="6">No Record Found</td></tr>';
    }
   
 })
 document.addEventListener('click',function(e){
    if(e.target.classList.contains("btn-edit")){
       const id = e.target.dataset.id;
       const tdElements = e.target.closest("tr").children;
       idEl.value =id;
       nameEl.value =tdElements[1].textContent;
       ageEl.value =tdElements[2].textContent;
       cityEl.value =tdElements[3].textContent;
        }
        else if(e.target.classList.contains('btn-delete')){
         if(confirm("Are you sure?")){
    let id = e.target.dataset.id;
    let data = (ref(database,`users/${id}`));
    remove(data);
}
    }
        
 })