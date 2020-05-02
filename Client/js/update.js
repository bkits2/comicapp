update.addEventListener('click', (event)=>{
    event.preventDefault();
  
    form.style.display = 'none';
    add.style.display = 'none';
    remove.style.display = 'none';
    update.style.display = 'none';
    dbSubmit.style.display = 'none';
    removeSubmit.style.display = 'none';
    updateSubmit.style.display = '';
    previousFields.style.display = '';
    updateFields.style.display = '';
    updateForm.style.display = '';
    cancelUpdate.style.display = '';
   
    updateSubmit.addEventListener('click', (event)=>{
        event.preventDefault();
        const formData = new FormData(previousFields);
        
        const title = formData.get('title');
        const issue = formData.get('issue');
        const year = formData.get('year');
        const price = formData.get('price');

        const formDatas = new FormData(updateFields);

        const uTitle = formDatas.get('updatetitle');
        const uIssue = formDatas.get('updateissue');
        const uYear = formDatas.get('updateyear');
        const uPrice = formDatas.get('updateprice');

        const item = {
            title,
            issue,
            year,
            price,
            uTitle,
            uIssue,
            uYear,
            uPrice
        };

        const options1 = {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(item)        
        };

       fetch(Update_URL, options1).then(newItem => {
           console.log(newItem);
       });
    });   
 });
