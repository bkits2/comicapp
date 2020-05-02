const form = document.querySelector('.search') 

const add = document.querySelector('.add')
const remove = document.querySelector('.delete')
const update = document.querySelector('.update')

const buttons = document.querySelector('.ud')
const dbfields = document.querySelector('.udFields')
const dbSubmit = document.querySelector('.udSubmit')

const cancel = document.querySelector('.cancel')
const cancelUpdate = document.querySelector('.cancelUpdate')

const removeSubmit = document.querySelector('.remove');

const updateSubmit = document.querySelector('.updateSubmit');
const previousFields = document.querySelector('.previousFields');
const updateFields = document.querySelector('.updateFields');
const updateForm = document.querySelector('.updateForm');

const sortSelect = document.querySelector('.sorts');
const sortListener = document.querySelector('.sort');
const root = document.querySelector('.roots');

const Search_URL = window.location.hostname === 'localhost' ? 'http://localhost:5000/dbpost' : 'https://comiccrud.now.sh/dbpost';
const Add_URL = window.location.hostname === 'localhost' ? 'http://localhost:5000/dbpostAdd' : 'https://comiccrud.now.sh/dbpostAdd';
const Remove_URL = window.location.hostname === 'localhost' ? 'http://localhost:5000/dbpostRemove' : 'https://comiccrud.now.sh/dbpostRemove';
const Update_URL = window.location.hostname === 'localhost' ? 'http://localhost:5000/dbpostUpdate'  : 'https://comiccrud.now.sh/dbpostUpdate';
const allData_URL = /*window.location.hostname === 'localhost' ?*/ 'http://localhost:5000/dbpostFind';// : 'https://comiccrud.now.sh/dbpostFind';
const loadData_URL = window.location.hostname === 'localhost' ? 'http://localhost:6000/dbpostLoad' : 'https://comiccrud.now.sh/dbpostLoad';

buttons.style.display = 'none';
previousFields.style.display = 'none';
updateFields.style.display = 'none';
updateForm.style.display = 'none';

 cancel.addEventListener('click', (event)=>{       
    form.style.display= ''
    buttons.style.display = '';
    add.style.display = '';
    remove.style.display = '';
    update.style.display = '';
    buttons.style.display = 'none';
 });

 cancelUpdate.addEventListener('click', (event)=>{       
    form.style.display= ''
    buttons.style.display = '';
    add.style.display = '';
    remove.style.display = '';
    update.style.display = '';
    updateForm.style.display = 'none';

    buttons.style.display = 'none';
 });



 
 
