remove.addEventListener('click', (event)=>{
    event.preventDefault();
    form.style.display = 'none';
    add.style.display = 'none';
    remove.style.display = 'none';
    update.style.display = 'none';
    dbSubmit.style.display = 'none';
    updateSubmit.style.display = 'none';
    removeSubmit.style.display = '';
    buttons.style.display = '';

    removeSubmit.addEventListener('click', (event)=>{
        event.preventDefault();
        const formData = new FormData(dbfields);
        
        const title = formData.get('title');
        const issue = formData.get('issue');
        const year = formData.get('year');
        const price = formData.get('price');

        const item = {
            title,
            issue,
            year,
            price
        };

        const options1 = {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(item)        
        };

       fetch(Remove_URL, options1).then(newItem => {
           console.log(newItem);
       });
    });   
 });