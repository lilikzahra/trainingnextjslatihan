export default function SSG() {
    return(
    <div className="w-full">
        <h1>Static Site Generation</h1>

        <div className={'w-full p-4 bg-grey-200'}>

        </div>
    </div>
    )
}

export async function getStaticPaths(ctx){
    let [err, data] = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=> response.json())
        .then((response)=> {
            return [ null , response]
        })
        .catch((err)=> {
            return [err, null]
        })

        if(err) {
            return {
                paths: [],
                fallback: false
            }
        }

        let paths = []
        if(Array.isArray(data) && data.length > 0){
            paths = data.map((post)=> ({
                params: {
                    ssg: `${post.id}`
                }
            }))
        }
        return{
            paths: paths,
            fallback: false
        }

}


export async function getStaticProps(context){
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