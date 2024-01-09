const express = require('express');
const axios = require('axios');
const app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// * Please DO NOT INCLUDE the private app access token in your repo. Don't do this practicum in your normal account.
const PRIVATE_APP_ACCESS = 'pat-na1-f74d878a-32e3-4432-b344-38f9df643bcc';

// TODO: ROUTE 1 - Create a new app.get route for the homepage to call your custom object data. Pass this data along to the front-end and create a new pug template in the views folder.
app.get("/") 
// * Code for Route 1 goes here
app.get('/contacts', async (req, res) => {

    const contacts = 'https://app.hubspot.com/contacts/44808993/objects/2-22162480/views/all/list';
    const headers = {
        Authorization: `Bearer ${PRIVATE_APP_ACCESS}`,
        'Content-Type': 'application/json'
    }

    try {
        const resp = await axios.get(contacts, { headers });
        const data = resp.data.results;
        res.render('contacts', { title: 'Contacts | HubSpot APIs', data });      
    } catch (error) {
        console.error(error);
    }

});
// TODO: ROUTE 2 - Create a new app.get route for the form to create or update new custom object data. Send this data along in the next route.
app.get("/update-cobj")
// * Code for Route 2 goes here
<form method="GET" action="https://app.hubspot.com/contacts/44808993/objects/2-22162480/views/all/list">
   <input type="submit" value="Submit">
</form>
// TODO: ROUTE 3 - Create a new app.post route for the custom objects form to create or update your custom object data. Once executed, redirect the user to the homepage.
app.post("/update-cobj")
// * Code for Route 3 goes here
    <form id="customer-form" method="post">
  <label for="customer-name">Customer Name:</label>
  <input type="text" id="customer-name" name="customer-name"><br>
  <label for="customer-id">Customer ID:</label>
  <input type="text" id="customer-id" name="customer-id"><br>
  <label for="customer-location">Customer Location:</label>
  <input type="text" id="customer-location" name="customer-location"><br>
  <input type="submit" value="Create Record">
</form>
<meta http-equiv="refresh" content="5; url=https://app.hubspot.com/contacts/44808993/objects/2-22162480/views/all/list>
/** 
* * This is sample code to give you a reference for how you should structure your calls. 

* * App.get sample
app.get('/contacts', async (req, res) => {
    const contacts = 'https://api.hubspot.com/crm/v3/objects/contacts';
    const headers = {
        Authorization: `Bearer ${PRIVATE_APP_ACCESS}`,
        'Content-Type': 'application/json'
    }
    try {
        const resp = await axios.get(contacts, { headers });
        const data = resp.data.results;
        res.render('contacts', { title: 'Contacts | HubSpot APIs', data });      
    } catch (error) {
        console.error(error);
    }
});

* * App.post sample
app.post('/update', async (req, res) => {
    const update = {
        properties: {
            "favorite_book": req.body.newVal
        }
    }

    const email = req.query.email;
    const updateContact = `https://api.hubapi.com/crm/v3/objects/contacts/${email}?idProperty=email`;
    const headers = {
        Authorization: `Bearer ${PRIVATE_APP_ACCESS}`,
        'Content-Type': 'application/json'
    };

    try { 
        await axios.patch(updateContact, update, { headers } );
        res.redirect('back');
    } catch(err) {
        console.error(err);
    }

});
*/


// * Localhost
app.listen(3000, () => console.log('Listening on http://localhost:3000'));
