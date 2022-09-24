// import Navbar from '../components/Navbar'
import Header from "../components/Header"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Navbar /> */}
      <Header />
      <main className='container'>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
