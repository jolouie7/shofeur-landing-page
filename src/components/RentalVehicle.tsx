import Image from "next/image";
import React from "react";

interface DataListProps {
  image: string;
  name: string;
  description: string;
}
interface RentalVehiclesProps {
  dataList: DataListProps[];
  children: string;
}

const RentalVehicle = ({ dataList, children }: RentalVehiclesProps) => {
  console.log(dataList);
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              {children}
            </h1>
          </div>
          <div className="flex flex-wrap justify-center">
            {dataList.map((data: DataListProps, idx: number) => (
              <div className="lg:w-1/3 md:w-1/2 p-4 w-full" key={idx}>
                <a className="flex justify-center relative h-52 rounded overflow-hidden">
                  <Image
                    alt={children}
                    className="rounded-lg max-w-[300px] max-h-[200px]"
                    src={data.image}
                    width={300}
                    height={200}
                  />
                </a>
                <div className="flex justify-center">
                  <h2 className="text-white title-font text-lg font-medium mt-4">
                    {data.name}
                  </h2>
                </div>
                <div className="flex justify-center">
                  <p className="text-base">{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RentalVehicle;
