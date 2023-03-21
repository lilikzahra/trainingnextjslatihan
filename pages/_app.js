import { useRouter } from 'next/router'
import '../src/assets/sass/main.scss'
import ProductLayout from '@/src/components/product.layout'
import {SessionProvider, getSession} from "next-auth/react"

function AppSwitchTheme({children}) {
  const router = useRouter()
  if(router.asPath.startsWith('/product')){
    return(
      <ProductLayout> 
        {children}
      </ProductLayout>
    )
  } else if(router.asPath.startsWith('/')){
    return children
  }
}

// export default function App({ Component, pageProps }) {
  function App(props){ 
    let {
      Component,
      pageProps:{
        session,
        ...pageProps
      }
    } = props

    console.log(session, 'SESSION');
    // console.log(props, 'SESSION');

    return(
      <SessionProvider session={session}>
        <AppSwitchTheme>
          <Component {...pageProps} />
        </AppSwitchTheme>
      </SessionProvider>
      
    )
   } 


App.getInitialProps = async ({Component, ctx})=> {
  let pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  const session = await getSession(ctx);

  pageProps = {
    ...pageProps,
    session
  }

  return { pageProps }
}

export default App