export default function SSR(props) {
    // console.log({props})
    let {data} = props
    return(
        <div>
            <h1>Server Side Rendering</h1>
            <p>Simulasi Server Side Rendering di NextJs</p>
            <div className={'w-full space-y-6'}>
                {
                    data.map((item)=> {
                        return(
                            <div className={'w-full bg-gray-400 p-4'}>
                                <p>User ID : {item.userId}</p>
                                <p>ID : {item.id}</p>
                                <p>title : {item.title}</p>
                                <p>body : {item.body}</p>  
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export async function getServerSideProps(){
    let data = []
    await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=> response.json())
        .then((response)=> {
            data = response
        })
        .catch((err)=> {
            data = []
        })
    return {
        props: {
            data
        }
    }
}