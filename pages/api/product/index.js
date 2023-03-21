const { default: ErrorHandler } = require("@/src/handlres/error.handler");

import nc from 'next-connect'
import { ProductValidator } from '@/src/validator';

const handler = nc(ErrorHandler);

handler
    .post(
        ProductValidator.create,
        async(req, res)=> {
        return res.status(200)
            .json(req.body)
    })
    .get(async(req, res)=> {
        const [err, data] = await fetch('https://jsonplaceholder.typicode.com/posts')
        // setLoading(true)
        // fetch('https://localhost:3000/api/product')
            .then((res)=> res.json())
            .then((result)=> {
                console.log('result', result)
                return[null, result]
            })
            .catch((err)=> {
                return[err, null]
            })

            if(err){
            //     return res.status(200).json([
            //         {
            //             productId: 1,
            //             name: "Sepatu"
            //         },
            //         {
            //             productId: 2,
            //             name: "Baju"
            //         }
            //     ])
                return res.status(400).json({
                    error: true,
                    message: "Ada error nih"
                })
            }

            return res.status(200).json(data)
        
    })


export default handler