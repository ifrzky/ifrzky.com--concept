import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Highlight } from '@material-ui/icons'
import Link from 'next/link'
import { ListItem } from '@material-ui/core'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ifrzky</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <meta chaeset="UTF-8"/>
        <meta http-equiniv="X-UA-Compatible" content="IE=edge"/>
      <Navbar />
      <article id="1" className="article pt-36 pb-35 relative">
        {/* <div class="container"> */}
          {/* <div class="main"> */}
          {/* <div class="highlight font-sans ml-10 mt-10 pt-20 text-8xl opacity-75" className={styles.highlight}>latest works</div> */}
            <div class="article-wrapper columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-3 w-[1200ox] mx-auto ml-12 mr-12 mt-10 space-y-3 pb-28">
              <div class="content-wrapper break-inside-avoid"> 
                <Link href="/sa"> 
                  <img src="/images/sa.png"></img>
                </Link>
              </div>
              <div class="content-wrapper break-inside-avoid"> <a className="article" href=""> <img src="/images/untitled-152.png"/></a> </div>
              <div class="content-wrapper break-inside-avoid"> <a className="article" href=""> <img src="/images/before nisbi.png"/></a> </div>
              <div class="content-wrapper break-inside-avoid"> <img src="/images/h110.png"/> </div>
              <div class="content-wrapper break-inside-avoid"> <img src="/images/nananananana-short-closeip.png"/></div>
              <div class="content-wrapper break-inside-avoid"> <img src="/images/if.png"/> </div>
              <div class="content-wrapper break-inside-avoid"> <img src="/images/yu-guitar.png"/> </div>
              <div class="content-wrapper break-inside-avoid">
                <img src="/images/sa.png"/>
              </div>
              <div class="content-wrapper break-inside-avoid"> <img src="/images/untitled-152.png"/> </div>
              <div class="content-wrapper break-inside-avoid"> <img src="/images/before nisbi.png"/> </div>
              <div class="content-wrapper break-inside-avoid"> <img src="/images/h110.png"/> </div>
              <div class="content-wrapper break-inside-avoid"> <img src="/images/nananananana-short-closeip.png"/></div>
              <div class="content-wrapper break-inside-avoid"> <img src="/images/if.png"/> </div>
              <div class="content-wrapper break-inside-avoid"> <img src="/images/yu-guitar.png"/> </div>
              <div class="content-wrapper break-inside-avoid">
                <img src="/images/sa.png"/>
              </div>
              <div class="content-wrapper break-inside-avoid"> <img src="/images/untitled-152.png"/> </div>
              <div class="content-wrapper break-inside-avoid"> <img src="/images/before nisbi.png"/> </div>
              <div class="content-wrapper break-inside-avoid"> <img src="/images/h110.png"/> </div>
              <div class="content-wrapper break-inside-avoid"> <img src="/images/nananananana-short-closeip.png"/></div>
              <div class="content-wrapper break-inside-avoid"> <img src="/images/if.png"/> </div>
              <div class="content-wrapper break-inside-avoid"> <img src="/images/yu-guitar.png"/> </div>
              <div class="content-wrapper break-inside-avoid">
                <img src="/images/sa.png"/>
              </div>
              <div class="break-inside-avoid"> <img src="/images/untitled-152.png"/> </div>
              <div class="break-inside-avoid"> <img src="/images/before nisbi.png"/> </div>
              <div class="break-inside-avoid"> <img src="/images/h110.png"/> </div>
              <div class="break-inside-avoid"> <img src="/images/nananananana-short-closeip.png"/></div>
              <div class="break-inside-avoid"> <img src="/images/if.png"/> </div>
              <div class="break-inside-avoid"> <img src="/images/yu-guitar.png"/> </div>
              <div class="break-inside-avoid">
                <img src="/images/sa.png"/>
              </div>
              <div class="break-inside-avoid"> <img src="/images/untitled-152.png"/> </div>
              <div class="break-inside-avoid"> <img src="/images/before nisbi.png"/> </div>
              <div class="break-inside-avoid"> <img src="/images/h110.png"/> </div>
              <div class="break-inside-avoid"> <img src="/images/nananananana-short-closeip.png"/></div>
              <div class="break-inside-avoid"> <img src="/images/if.png"/> </div>
              <div class="break-inside-avoid"> <img src="/images/yu-guitar.png"/> </div>
              <div class="break-inside-avoid">
                <img src="/images/sa.png"/>
              </div>
              <div class="break-inside-avoid"> <img src="/images/untitled-152.png"/> </div>
              <div class="break-inside-avoid"> <img src="/images/before nisbi.png"/> </div>
              <div class="break-inside-avoid"> <img src="/images/h110.png"/> </div>
              <div class="break-inside-avoid"> <img src="/images/nananananana-short-closeip.png"/></div>
              <div class="break-inside-avoid"> <img src="/images/if.png"/> </div>
              <div class="break-inside-avoid"> <img src="/images/yu-guitar.png"/> </div>
              <div class="break-inside-avoid">
                <img src="/images/sa.png"/>
              </div>
              <div class="break-inside-avoid"> <img src="/images/untitled-152.png"/> </div>
              <div class="break-inside-avoid"> <img src="/images/before nisbi.png"/> </div>
              <div class="break-inside-avoid"> <img src="/images/h110.png"/> </div>
              <div class="break-inside-avoid"> <img src="/images/nananananana-short-closeip.png"/></div>
              <div class="break-inside-avoid"> <img src="/images/if.png"/> </div>
              <div class="break-inside-avoid"> <img src="/images/yu-guitar.png"/> </div>
            </div>
      </article>
        <Footer className="footer-relative" />
      </div>
  )
}
