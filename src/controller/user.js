const axios= require('axios');
const csv= require('express-csv');

const User= require('../model/user');

exports.getUsers= (req, res, next)=>{
    const currentPage= req.query.page || 1;

    User.findAll({where:{page_number:Number(currentPage)}})
        .then(result=>result.map(val=>val.get({plain:true})))
        .then(result=>
            res.status(200).json({
                message:'Fetched Posts Successfully',
                users:result,
                count:result.length
        }))
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
}
