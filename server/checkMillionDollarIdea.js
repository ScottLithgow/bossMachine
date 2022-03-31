const checkMillionDollarIdea = (req, res, next) => {
    const {numWeeks, weeklyRevenue} = req.body;
    const total = Number(numWeeks) * Number(weeklyRevenue);
    if (total >= 1000000) {
        next();
    } else{
        res.status(400).send();
    }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
