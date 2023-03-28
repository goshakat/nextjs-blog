import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Alexander. I'm a third-year university student of BSTU "VOENMEH". 
          I'm currently learning internet technologies, my projects can be viewed <a href="https://github.com/goshakat" target="_ blank">here</a>.
        </p>
        <p>
          You can contact me on <a href="https://t.me/hramovsasha" target="_ blank">Telegram</a>.
        </p>
      </section>
    </Layout>
  );
}