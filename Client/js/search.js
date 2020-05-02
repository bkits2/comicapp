form.addEventListener('submit', (event)=> {
    event.preventDefault();
    const formData = new FormData(form);
    const searchData = formData.get('searchText')
    const searchCriteria = formData.get('criteria')
    const searchObject = {
        searchData,
        searchCriteria
    }
    
    document.getElementById('roots').innerHTML = " ";

    const options = {
        method : 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(searchObject),
    }
     
    getData();
    async function getData(){
        const response = await fetch(Search_URL, options);
        const data = await response.json();
        
        let i = 0;

        for(item of data){
             
                const main = document.createElement('div');
                main.style.display = 'flex';
                main.style.flexDirection = 'row';
                main.style.textAlign = 'left';
                main.style.marginBottom = '-30px';

                const title = document.createElement('p');
                title.textContent = `${item.title}`;
                title.style.marginLeft = '5px';
                title.style.borderTop = '2px solid black';
                title.style.borderBottom = '2px solid black'; 
                title.style.borderLeft = '2px solid black'; 
                title.style.borderRight = '1px solid black';            
                
                const issue = document.createElement('p');
                issue.textContent = `${item.issue}`;
                issue.style.borderTop = '2px solid black';
                issue.style.borderBottom = '2px solid black'; 
                issue.style.borderLeft = '1px solid black'; 
                issue.style.borderRight = '1px solid black';            

                const year = document.createElement('p');
                year.textContent = `${item.year}`;
                year.style.borderTop = '2px solid black';
                year.style.borderBottom = '2px solid black'; 
                year.style.borderLeft = '1px solid black'; 
                year.style.borderRight = '1px solid black';            

                const price = document.createElement('p');
                price.textContent = `${item.price}`;
                price.style.borderTop = '2px solid black';
                price.style.borderBottom = '2px solid black'; 
                price.style.borderLeft = '1px solid black'; 
                price.style.borderRight = '2px solid black';            
                
                if(document.body.clientWidth === 375 ){
                    title.style.width = '200px';
                    issue.style.width = '50px';
                    year.style.width = '40px';
                    price.style.width = '100px';
                }else{
                    title.style.width = '550px';
                    issue.style.width = '100px';
                    year.style.width = '125px';
                    price.style.width = '250px';
                }

                if(i%2 === 0){ 
                    title.style.background = 'white';
                    issue.style.background = 'white';
                    year.style.background = 'white';
                    price.style.background = 'white';
                }else{     
                    title.style.background = 'lightgray';
                    issue.style.background = 'lightgray';
                    year.style.background = 'lightgray';
                    price.style.background = 'lightgray';
                }           

                main.append(title, issue, year, price);
                root.append(main);
                i++;    
        }
    }    
});