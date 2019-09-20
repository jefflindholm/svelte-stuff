const express = require('express');
const path = require('path');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

const quote_url = `http://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand`;
app.get('/quotes', async (req, res) => {
  // res.json({ msg: 'test'});

  axios.get(quote_url)
    .then(response => {
      res.send(response.data.map(i => ({
        author:  i.title.rendered,
        content: i.content.rendered,
      })))
      res.send(response.data)
    });
})
app.listen(8080, () => {
  console.log('App started and available at http://localhost:8080');
});
