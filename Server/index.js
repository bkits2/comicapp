const express = require('express');
const cors = require('cors');
const DataStore = require('Nedb')

const app = express();
app.use(cors());

const database = new DataStore(process.env.DB_URI || 'database.db');
database.loadDatabase();

app.use(express.json());

function isValidItem(item){
    return item.title && item.title.toString().trim() !== '' &&
    item.issue && item.issue.toString().trim() !== '' &&
    item.year && item.year.toString().trim() !== ''&&
    item.price && item.price.toString().trim() !== ''; 
    
}

function isValidSearch(search){
    return search.searchData && search.searchData.toString().trim() !== '' &&
    search.searchCriteria && search.searchCriteria.toString().trim() !== '';
}

app.post('/dbpostLoad', (req, res) => {

     database.find({}).exec(function (err, data){
        res.json(data)
     });
    
});

app.post('/dbpostFind', (req, res) => {
    const sortCriteria = req.body.sortItem.toString();    
    console.log(sortCriteria);

    if(sortCriteria === 'Title A-Z'){    
    database.find({}).sort({"title": 1}).exec(function (err, data){
        res.json(data) 
     });
    }else if(sortCriteria === 'Title Z-A'){
        database.find({}).sort({"title": -1}).exec(function (err, data){
            res.json(data) 
         });
    }else if(sortCriteria === 'Year Low-High'){
        database.find({}).sort({"year": 1}).exec(function (err, data){
            res.json(data) 
         });
    }else if(sortCriteria === 'Year High-Low'){
        database.find({}).sort({"year": -1}).exec(function (err, data){
            res.json(data) 
         });
    }else if(sortCriteria === 'Prices Low-High'){
        database.find({}).sort({"price": 1}).exec(function (err, data){
            res.json(data) 
         });
    }else if(sortCriteria === 'Prices High-Low'){
        database.find({}).sort({"price": -1}).exec(function (err, data){
            res.json(data) 
         });
    }
    });

app.post('/dbpostAdd', (req, res) =>  {

    if(isValidItem(req.body)){

        const item = {
            title: req.body.title.toString(),
            issue: req.body.issue.toString(),
            year: req.body.year.toString(),
            price: parseFloat(req.body.price.toString())
        };

        const titles = req.body.title.toString();
        const issues = req.body.issue.toString();
        const years = req.body.year.toString();
        const prices = parseFloat(req.body.price.toString());
       
        
       database.find({title : titles, issue : issues, year: years, price : prices}, (err, data) => {
          
          if(data.length == 0){
            database.insert(item)
            res.json({data});
            
          }else{
            console.log("item in Database")
         }
       });

    }else{
        res.status(422);
        res.json({
            message: 'All fields are required'
        });
    }  
});

app.post('/dbpostRemove', (req, res) =>  {

    if(isValidItem(req.body)){

        const item = {
            title: req.body.title.toString(),
            issue: req.body.issue.toString(),
            year: req.body.year.toString(),
            price: req.body.price.toString()
        };

        console.log(item);
        
        database.remove(item);

    }else{
        res.status(422);
        res.json({
            message: 'All fields are required'
        });
    }  
});

app.post('/dbpostUpdate', (req, res) =>  {

    if(isValidItem(req.body)){

        const item1 = {
            title: req.body.title.toString(),
            issue: req.body.issue.toString(),
            year: req.body.year.toString(),
            price: req.body.price.toString()
        };

        const item2 = {
            title: req.body.uTitle.toString(),
            issue: req.body.uIssue.toString(),
            year: req.body.uYear.toString(),
            price: req.body.uPrice.toString()
        };

        
        console.log(item2);
        
       database.update(item1, item2);

    }else{
        res.status(422);
        res.json({
            message: 'All fields are required'
        });
    }  
});



    app.post('/dbpost' , (req, res) => {
    
    const criteria = req.body.searchCriteria.toString();    
    const item = req.body.searchData.toString();

    if(criteria === 'Title'){
    database.find({title : item}, (err, data) => {
        res.json(data) 
     });
    }else if(criteria === 'Year'){
        database.find({year : item}, (err, data) => {
            res.json(data) 
         });
    }
    });

    
    

    app.listen(5000, () => {
        console.log('Listening on http://localhost:5000');
        })