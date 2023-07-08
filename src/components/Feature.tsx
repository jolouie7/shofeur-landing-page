import React from "react";
import Image from "next/image";
import { features } from "@/data";

export default function Feature() {
  return (
    <div className="bg-gray-900 flex flex-col justify-center items-center py-8">
      <div className="flex justify-center items-center mx-4 my-8 md:m-16">
        <Image
          src="/images/Shofeur-youtube.png"
          alt="Shofeur Video"
          className="rounded-lg w-full"
          width={1000}
          height={800}
        />
      </div>

      <div>
        {features.map((feature, i) => (
          <div className="flex flex-wrap m-4" key={i}>
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-yellow-400 mb-5 mr-4">
              <feature.icon className="w-6 h-6" />
            </div>
            <div>
              <div>
                <h2 className="text-white text-lg title-font font-medium">
                  {feature.name}
                </h2>
                <p className="text-gray-400 text-base">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
