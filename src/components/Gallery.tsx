import Image from "next/image";

interface GalleryProps {
  children: string;
  dataList: any;
}

const Gallery = ({ children, dataList }: GalleryProps) => {
  return (
    <>
      <section className="text-gray-400 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">
              {children}
            </h1>
          </div>

          <div className="flex justify-center flex-wrap">
            {dataList.map((data: any, idx: any) => (
              <div className="p-4 lg:w-1/3 md:w-1/2 w-full" key={idx}>
                <div className="h-full flex flex-col items-center text-center">
                  <Image
                    alt={children}
                    className="rounded-lg max-w-[300px] max-h-[200px]"
                    src={data.image}
                    width={300}
                    height={200}
                  />
                  <div className="w-full">
                    <h3 className="text-gray-500 mb-3">{data.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
