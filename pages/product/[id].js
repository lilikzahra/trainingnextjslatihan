export default function ProductDetail(props) {
    return(
        <div>
            <h1>Product Detail {props?.id}</h1>
        </div>
    )
}

export async function getStaticPaths(){
    const [ err, data] = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res )=> res.json())
    .then((result)=> {
        return [ null, result]
    }, 4000)
    .catch((err) => {
        return [ err, null ]
    })

    return {
        paths: data.map((item)=> ({
            params:{
                id: `${item?.id}`
            }})),
            fallback: false
    }
}

export async function getStaticProps(context) {
    let { id } = context.params
    const [ err, data] = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res )=> res.json())
    .then((result)=> {
        return [ null, result]
    }, 4000)
    .catch((err) => {
        return [ err, null ]
    })

    return {
        props: {
            id
        }
    }
}