import { Header, Banner, Widget, SmallCard, MediumCard, LargeCard } from "../components/";
import { Footer } from "../components/Footer";

export default function Home({exploreData,cardsData}) {
  return (
    <div className="">
      {/* Banner */}
      <Banner />

      <main className="max-w-6xl mx-auto px-8 sm:px-16">
        <Widget>
          <Widget.Title>Explore Nearby</Widget.Title>
          <Widget.Content className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Pull Some Data From a Server For Cards */}
            {exploreData?.map(({img,distance,location}) => (
             <SmallCard key={img} img={img} location={location} distance={distance}/>
            ))}
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Title>Live Anywhere</Widget.Title>
          <Widget.Content className="flex overflow-x-scroll scrollbar-hide p-3 -ml-3 space-x-3">
            {cardsData?.map(({img,title}) => (
              <MediumCard key={img} img={img} title={title}/>
            ))}
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <LargeCard img="https://links.papareact.com/4cj" title="The Greatest Outdoors" description="Wishlists created by Airbnb." buttonText="Get Inspired"/>
          </Widget.Content>
        </Widget>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps(){
  const responseExplore = await fetch("https://links.papareact.com/pyp")
  const exploreData = await responseExplore.json();

  const responseCards = await fetch("https://links.papareact.com/zp1")
  const cardsData = await responseCards.json();

  return { props: {
    exploreData,
    cardsData
  }}
}
