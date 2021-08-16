import Head from "next/head";
import { Header, Banner, Widget, SmallCard } from "../components/";

export default function Home({exploreData}) {
  return (
    <div className="">
      <Head>
        <title>AirBnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />

      <main className="max-w-6xl mx-auto px-8 sm:px-16">
        <Widget>
          <Widget.Title>Explore Nearby</Widget.Title>
          <Widget.Content>
            {/* Pull Some Data From a Server For Cards */}
            {exploreData?.map(({img,distance,location}) => (
             <SmallCard key={img} img={img} location={location} distance={distance}/>
            ))}
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Title>Live Anywhere</Widget.Title>
          <Widget.Content>
            <p>Deneme 2</p>
          </Widget.Content>
        </Widget>
      </main>
    </div>
  );
}

export async function getStaticProps(){
  const response = await fetch("https://links.papareact.com/pyp")
  const exploreData = await response.json();
  return { props: {
    exploreData
  }}
}
