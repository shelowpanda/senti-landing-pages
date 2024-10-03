import { showcases } from "@/config/showcases";
import { Spacer } from "@nextui-org/react";
import Image from "next/image";
import { RoughNotation } from "react-rough-notation";

const Showcase = ({ id, locale }: { id: string; locale: any }) => {
  return (
    <section
      id={id}
      className="flex flex-col justify-center max-w-7xl items-center pt-16"
    >
      <div className="flex flex-col text-center max-w-xl gap-4">
        <h2 className="text-center text-white">
          <RoughNotation type="highlight" show={true} color="#2563EB">
            {locale.title}
          </RoughNotation>
        </h2>
        <p className="text-large text-default-500">{locale.description}</p>
      </div>
      <Spacer y={8} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 justify-items-center">
        {showcases.map((showcase, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={showcase.imageSrc}
              alt={showcase.alt}
              width={300}
              height={200}
              className="rounded-lg object-cover"
            />
            <p className="mt-2 text-center text-white">{showcase.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Showcase;
