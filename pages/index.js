import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Profile from '../components/profile';
import Skills from '../components/skills';
import Hobbies from '../components/hobbies';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Profile/>
      <Skills/>
      <Hobbies/>
    </Layout>
  );
}