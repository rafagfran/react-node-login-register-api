
class LoginController{

    store(req, res){
        const users=[{
            id: 1,
            name: 'Rafael',
            email: 'contato@gmail.com',
            password: '123456' 
        }];

        const { email, password } = req.body;
        const user = users.find(user => user.email === email && user.password === password);
        if (user){
            res.status(200).json(user);
        }
       res.status(401).json('Invalid credentials')
    }
}
export default new LoginController
