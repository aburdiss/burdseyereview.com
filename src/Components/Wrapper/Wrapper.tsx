import Header from '@/Components/Header/Header'
import Footer from '@/Components/Footer/Footer'
import SkipLink from '@/Components/SkipLink/SkipLink'
import Layout from '@/Components/Layout/Layout'

import './Wrapper.css';

export default function Wrapper({
  className,
  children,
}: Readonly<{
  className?: string
  children?: React.ReactNode
}>) {
  return (
    <div className='outer-wrapper os-n'>
      <SkipLink />
      <Header></Header>
      <main id="main-content" className={className} tabIndex={-1}>
        <Layout>{children}</Layout>
      </main>
      <Footer></Footer>
    </div>
  )
}
