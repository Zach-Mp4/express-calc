const express = require('express');
const ExpressError = require('./expressError');
const { mean, median, mode } = require('./calculate');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/mean', function(req, res, next) {
    try{
        if (!req.query.nums) throw new ExpressError("nums is required", 400);
        let nums = req.query.nums.split(',');
        nums = nums.map(parseFloat)
        const isNum = nums.every(value => Number.isInteger(value) || Number.isFinite(value));
        if (!isNum) throw new ExpressError("Invalid Input", 400);
        let value = mean(nums);
        return res.status(200).json({
            operation: 'mean',
            value
        })
    }
    catch (e){
        next(e);
    }
});

app.get('/median', function(req, res, next) {
    try{
        if (!req.query.nums) throw new ExpressError("nums is required", 400);
        let nums = req.query.nums.split(',');
        nums = nums.map(parseFloat)
        const isNum = nums.every(value => Number.isInteger(value) || Number.isFinite(value));
        if (!isNum) throw new ExpressError("Invalid Input", 400);
        let value = median(nums);
        return res.status(200).json({
            operation: 'median',
            value
        })
    }
    catch (e){
        next(e);
    }
});

app.get('/mode', function(req, res, next) {
    try{
        if (!req.query.nums) throw new ExpressError("nums is required", 400);
        let nums = req.query.nums.split(',');
        nums = nums.map(parseFloat)
        const isNum = nums.every(value => Number.isInteger(value) || Number.isFinite(value));
        if (!isNum) throw new ExpressError("Invalid Input", 400);
        let value = mode(nums);
        return res.status(200).json({
            operation: 'mode',
            value
        })
    }
    catch (e){
        next(e);
    }
});

// Error handler
app.use(function (err, req, res, next) { 
    // the default status is 500 Internal Server Error
    let status = err.status || 500;
    let message = err.msg;
  
    // set the status and alert the user
    return res.status(status).json({
      error: { message, status }
    });
  });

app.listen(3000, function() {
    console.log('Server started on port http://localhost:3000.');
  });
  