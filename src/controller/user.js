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

exports.updateUser= (req, res, next)=>{
    const userId= req.params.userId;

    const name=req.body.name;
    const email=req.body.email;
    const gender=req.body.gender;
    const status=req.body.status;

    User.findOne({where:{id:userId}})
        .then(user=>{
            if (!user) {
                const error = new Error('Could not find User.');
                error.statusCode = 404;
                throw error;
            }
            user.name=name;
            user.email=email;
            user.gender=gender;
            user.status=status;

            return user.save();
        })
        .then(result => {
            res.status(200).json({ message: 'User updated!', user: result });
        })
        .catch(err => {
            if (!err.statusCode) {
              err.statusCode = 500;
            }
            next(err);
        });
}

function postData(url){
    axios.get(url)
         .then(result=>{
            let page_number=result.data.meta.pagination.page
            let data=result.data.data
            
            data=data.map(element=>({...element,page_number:page_number}))

            User.bulkCreate(data)
            return data.length
         })
         .catch(error=>{
             console.log(error)
             return 0;
         })

}

exports.postUsers= (req, res, next)=>{
    let count=0;
    User.max('page_number')
        .then(page_number=>{
            page_number=page_number?page_number:1
            url=`https://gorest.co.in/public-api/users?page=${page_number}`

            axios.get(url)
                 .then(result=>{
                     let max_page=result.data.meta.pagination.pages

                     for(let page=page_number;page<max_page;page++){
                         count+= postData(`https://gorest.co.in/public-api/users?page=${page}`)
                     }
                 })

        })
        .then(result => {
            res.status(200).json({ message: `New Data Points Uploaded.` });
        })
        .catch(err => {
            if (!err.statusCode) {
              err.statusCode = 500;
            }
            next(err);
        });
    
}

exports.downloadUsers= (req, res, next)=>{
    User
      .findAll({attributes:['id','name','email','gender','status']})
      .then(result=>{
          result=result.map(val=>val.get({plain:true}))
          console.log(result)
          columns=Object.keys(result[0])
          result=result.map(val=> Object.values(val))
          result.unshift(columns)
          res.csv(result)
      })
      .catch(err => {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      });
      
}
