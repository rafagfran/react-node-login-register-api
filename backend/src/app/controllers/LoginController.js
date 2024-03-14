
class LoginController{
    teste(req, res){
        res.send('gello word')
    }

    index(){

    }
    
    store(req, res){
        res.send('Login endpoint')
    }
}

export default new LoginController
