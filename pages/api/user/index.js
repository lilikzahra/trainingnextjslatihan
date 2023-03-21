import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import UserController from '@/src/controller/user.controller';
import ErrorHandler from '@/src/handlres/error.handler';

const handler = nc(ErrorHandler);

handler
    .post(async (req, res) => {
    let inputDTO = req.body;

    //check email
    let salt = bcrypt.genSaltSync(10);
    let hashpassword = bcrypt.hashSync(inputDTO.password, salt);
    Reflect.set(inputDTO, 'password' , hashpassword);
    Reflect.set(inputDTO, 'salt' , salt);

    //create user Baru
    const [err, data] = await  new UserController({
        fields: inputDTO
    }).create();

    if(err){
        res.status(400).json({
            message: err.message ?? "Error: Something went wrong"
        })
    } 

    Reflect.deleteProperty(inputDTO, 'password');
    Reflect.deleteProperty(inputDTO, 'salt');

    res.status(200).json({
        message: 'success',
        data:data,
});
})
.delete(async (req, res)=> {
    try{
        const inputDto = req.body
        const [err, data] = await new UserController({
            key: inputDto?.key ?? "id",
            // value: inputDto?.value ?? null
            value: isNumber(inputDto?.value) ?
                Number(inputDto?.value) :
                inputDto?.value ?? null
        }).delete()

        if(err){
            return res.status(400)
                .json({
                    error: true,
                    message: err?.message ?? "Bad request"
                })
        }
        return res.status(201).json({})
    } catch(err){
        return res.status(500)
            .json({
                error: true,
                message: err?.message ?? "Exeptions Error"
            })
    }
})

export default handler