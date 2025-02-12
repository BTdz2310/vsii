import Image from "next/image";
import Link from "next/link";
import React from "react";
import { data } from "src/components/Hero";

const CategoryLayoutA = () => {
  return (
    <div className="py-20">
      <div className="container m-auto flex flex-col gap-12 w-full">
        <div className="flex justify-between items-center">
          <p className="font-bold font-quicksand text-4xl uppercase tracking-wider">
            Chính trị
          </p>
          <a
            href="https://designobserver.com/channels/"
            className="text-sm font-do-extrablack text-do-black border-b-2 border-do-black/40 hover:border-transparent h-fit leading-4 transition-colors"
          >
            View all
          </a>
        </div>
        <div className="flex gap-12 w-full">
          <Link
            href={data[0].link}
            className="flex flex-col items-end w-3/5 group overflow-hidden shrink-0"
          >
            <Image
              width="1400"
              height="700"
              alt="39540-PosterPower_12.jpg"
              // sizes="auto, (max-width: 1400px) 100vw, 1400px"
              className="object-cover bg-cream-900 h-full w-full transition-transform duration-1000 group-hover:scale-105"
              // decoding="async"
              src={data[0].img}
            />
            <div className="w-[calc(100%-3rem)] bg-background relative -top-12 p-4">
              <p className="text-3xl font-bold tracking-wide">{data[0].title}</p>
              <p className="text-right py-2">{data[0].date}</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita iusto voluptatum obcaecati perferendis voluptatem
                nostrum iure nam delectus! Libero dolorem maxime omnis quod
                voluptas enim cupiditate nostrum ab magni qui.
              </p>
            </div>
          </Link>
          <div className="grow flex flex-col gap-8">
            <div className="flex gap-2 items-center">
              <div>
                <p className="text-sm">{data[1].date}</p>
                <p className="text-2xl font-black tracking-tight">{data[1].title}</p>
              </div>
              <Image
                width="100"
                height="100"
                alt={data[1].title}
                // sizes="auto, (max-width: 1400px) 100vw, 1400px"
                className="object-cover bg-cream-900 transition-transform duration-1000 group-hover:scale-105"
                // decoding="async"
                src={data[1].img}
              />
            </div>
            <div className="flex gap-2">
              <div>
                <p className="text-sm">{data[2].date}</p>
                <p className="text-2xl font-black tracking-tight">{data[2].title}</p>
              </div>
              <Image
                width="100"
                height="100"
                alt={data[2].title}
                // sizes="auto, (max-width: 1400px) 100vw, 1400px"
                className="object-cover bg-cream-900 transition-transform duration-1000 group-hover:scale-105"
                // decoding="async"
                src={data[2].img}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryLayoutA;
