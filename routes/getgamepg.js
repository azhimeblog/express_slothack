var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    fs.readFile('/app/public/json/gamepg.json', (err, data) => {
        if (err) throw err;
        let cheat = JSON.parse(data);
        res.send(cheat);
    });

});

module.exports = router;