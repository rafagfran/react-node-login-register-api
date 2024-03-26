const connection = require('.././config/db.js')

const allUsers = async () =>
{
    try
    {
        const results = await new Promise((resolve,reject) => 
        {
            connection.query('SELECT * FROM users', (error, result) => 
            {
                if(error)
                {
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

const validateLogin = async (email, password) => 
{
    try
    {
        const results = await new Promise((resolve, reject) =>
        {
            connection.query('SELECT COUNT(*) AS count FROM users WHERE email = ? AND password = ?', [email, password], (error, result) => 
            {
                if (error)
                {
                    reject(error)
                }else{
                    resolve(result)
                }
            }) 
        })
        const count = results[0].count
        return  count
    }catch(error){
        throw new Error(`Error fetching users: ${error.message}`);
    }
}

const registreUser = async (name, email, password) => 
{
    try
    {
        const results = await new Promise((resolve, reject) =>
        {
            connection.query('INSERT INTO users(name, email, password) VALUES(?, ?, ?)', [name, email, password], (error, result) => 
            {
                if(error)
                {
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
module.exports = 
{
    allUsers,
    validateLogin,
    registreUser
}
