import axios from "axios"

export default function ProductSsr({data}){
    return(
        <div className="w-full">
            {
                Array.isArray(data) &&
                data.length > 0 ?
                data.map((item)=> {
                    return (
                        <li>{item.id}</li>
                    )
                })
                : 'Empty'
            }   
        </div>
    )
}

export async function getServerSideProps(connect){
    const [err, data] = await axios
        .get('http://localhost:3000/api/product')
        .then((response)=> {
            console.log('response', response)
            return [null, response.data]
        })
        .catch((err)=> {
            console.log('error', err)
            return [err, null]
        })
        console.log('err', err)
        if(err){
            return{
                redirect: {
                    destination: '/about',
                    permanent: false
                }
            }
        }

        return{
            props: {
                data
            }
        }
}