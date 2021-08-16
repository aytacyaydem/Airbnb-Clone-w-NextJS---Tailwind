import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[500px] 2xl:h-[600px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-md sm:text-lg ">Not sure where to go? Perfect.</p>
        <button className="text-purple-500 bg-white rounded-full shadow-md py-4 px-10 font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I'm Flexible
        </button>
      </div>
    </div>
  );
}

export { Banner };
