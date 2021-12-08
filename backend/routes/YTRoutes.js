const express = require("express");
var http = require("http");
const axios = require("axios");
const pretty = require("pretty");
const htmlparser2 = require("htmlparser2");
const cheerio = require("cheerio");
const router = express.Router();

router.post("/search", (req, res) => {
  const { stringToSearch } = req.body;

  axios
    .get(`https://www.youtube.com/results?search_query=${stringToSearch}`)
    .then((response) => {
      // console.log(response);
      const html = response.data;
      const $ = cheerio.load(html);

      // console.log(pretty($.html()));
      // console.log(pretty($.html()));
      let results = [];
      const a = $('body ytd-app a');
      console.log(pretty(a.html()), a.length);
      a.each(function (idx, el) {
        console.log(idx, $(el).html());
      });
    });
});

module.exports = router;
