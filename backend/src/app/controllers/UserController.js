const users=[{
    id: 1,
    name: 'Rafael',
    email: 'contato@gmail.com',
    password: '123456' 
}];

class  UserController{

    index(req, res){
        res.send(users)
    }

    create(req, res){   
        const {name, email, password} = req.body;

        const newUser = {
            id: users.length + 1,
            name,
            email,
            password
        }

        users.push(newUser)

        res.status(201).json({ message: 'Usuário criado com sucesso', user: newUser });
    }

    store(req, res){
        const { email, password } = req.body;
        const user = users.find(user => user.email === email && user.password === password);
        if (user){
            res.status(200).json(user);
        }
       res.status(401).json('Invalid credentials')
    }
}
export default new UserController
