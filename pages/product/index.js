import { useEffect, useState } from "react"

export default function ProductList() {
    const [visible, setVisible] = useState(false)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(()=> {
        // if(visible) {
            setLoading(true)
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res )=> res.json())
            .then((result)=> {
                setData(result)
                setLoading(false)
            }, 4000)
            .catch((err) => {
                setLoading(false)
            })
        // }
    }, [visible])
    // console.log(loading, 'LOADING')
    // let timeout

    return(
        <div>
            <h1>Product List</h1>
            {
                loading ? 'LOADING...'
                    :
                data.map((item)=> {
                    return(
                        <div>
                            <p>User ID : {item.userId}</p>
                            <p>ID : {item.id}</p>
                            <p>title : {item.title}</p>
                            <p>body : {item.body}</p>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}