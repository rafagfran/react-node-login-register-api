const connection = require('.././config/db.js')


const allUsers = async () =>{
    try{
        const results = await new Promise((resolve,reject) => {
            connection.query('SELECT * FROM users', (error, result) => {
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        })
        return results
    }catch(error){
        throw new Error(`Error fetching users: ${error.message}`);
    }
}


module.exports = {
    allUsers,

}