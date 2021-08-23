import { useRouter } from "next/router";
import { FilterButton } from "../components";
import {format} from "date-fns"
import {InfoCard} from "../components/";

function Search({searchResults}) {
  const router = useRouter();
  console.log(searchResults);
  const {endDate, location, numberOfGuests, startDate} = router.query

  const formattedStartDate = format(new Date(startDate), "dd MMMM yyyy")
  const formattedEndDate = format(new Date(endDate), "dd MMMM yyyy")
  const range = `${formattedStartDate} - ${formattedEndDate}`

  return (
    <div>
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs ">300+ Stays between {range} for {numberOfGuests} guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-5">Stays in {location}</h1>
          <div className="hidden w-full relative lg:inline-flex space-x-3 text-gray-800 whitespace-nowrap">
            <FilterButton>Cancellation Flexibility</FilterButton>
            <FilterButton>Type of Place</FilterButton>
            <FilterButton>Price</FilterButton>
            <FilterButton>Room and Beds</FilterButton>
            <FilterButton>More Filters</FilterButton>
          </div>
          {searchResults?.map(item => (
            <InfoCard item={item} key={item.img}/>
          ))}
        </section>
      </main>
    </div>
  );
}
export async function getServerSideProps(){
  const response = await fetch("https://links.papareact.com/isz")
  const searchResults = await response.json();
  return {
    props : {
      searchResults
    }
  }
}

export default Search;
