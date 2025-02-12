import Image from "next/image";
import Link from "next/link";
import React from "react";
import { data } from "src/components/Hero";

const CategoryLayoutA = () => {
  return (
    <div className="py-20 bg-[rgb(241,246,246)] text-dark dark:text-[#eaeaea]">
      <div className="container m-auto">
        <div className="z-20 relative flex flex-col gap-12">
          <div className="flex justify-between items-center">
            <p className="font-bold font-quicksand text-4xl uppercase tracking-wider">
              Giáo dục
            </p>
            <a
              href="https://designobserver.com/channels/"
              className="text-sm font-do-extrablack text-do-black border-b-2 border-do-black/40 hover:border-transparent h-fit leading-4 transition-colors"
            >
              View all
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 pb-4 mb-8 bg-gr gap-y-8">
            <Link
              href={data[0].link}
              className="relative aspect-square sm:aspect-[440/350] w-full h-auto flex flex-col gap-4"
            >
              <div className="grow group overflow-hidden">
                <Image
                  width="1400"
                  height="700"
                  alt="39540-PosterPower_12.jpg"
                  // sizes="auto, (max-width: 1400px) 100vw, 1400px"
                  className="object-cover bg-cream-900 h-full w-full transition-transform duration-1000 group-hover:scale-105"
                  // decoding="async"
                  src={data[0].img}
                />
              </div>
              <div className="py-2">
                <p className="underline text-xl decoration-transparent font-semibold transition-colors hover:decoration-black-900">
                  {data[0].title}
                </p>
              </div>
            </Link>

            <div className="lg:ml-5 lg:pl-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <Link href={data[1].link}>
                  <div className="mb-2 group overflow-hidden">
                    <Image
                      width="1400"
                      height="700"
                      alt="39540-PosterPower_12.jpg"
                      // sizes="auto, (max-width: 1400px) 100vw, 1400px"
                      className="object-cover bg-cream-900 h-full w-full transition-transform duration-1000 group-hover:scale-105"
                      // decoding="async"
                      src={data[1].img}
                    />
                  </div>
                  <p className="underline text-base decoration-transparent font-semibold transition-colors hover:decoration-black-900">
                    {data[1].title}
                  </p>
                </Link>
                <Link href={data[2].link}>
                  <div className="mb-2 group overflow-hidden">
                    <Image
                      width="1400"
                      height="700"
                      alt="39540-PosterPower_12.jpg"
                      // sizes="auto, (max-width: 1400px) 100vw, 1400px"
                      className="object-cover bg-cream-900 h-full w-full transition-transform duration-1000 group-hover:scale-105"
                      // decoding="async"
                      src={data[2].img}
                    />
                  </div>
                  <p className="underline text-base decoration-transparent font-semibold transition-colors hover:decoration-black-900">
                    {data[2].title}
                  </p>
                </Link>
                <Link href={data[3].link}>
                  <div className="mb-2 group overflow-hidden">
                    <Image
                      width="1400"
                      height="700"
                      alt="39540-PosterPower_12.jpg"
                      // sizes="auto, (max-width: 1400px) 100vw, 1400px"
                      className="object-cover bg-cream-900 h-full w-full transition-transform duration-1000 group-hover:scale-105"
                      // decoding="async"
                      src={data[3].img}
                    />
                  </div>
                  <p className="underline text-base decoration-transparent font-semibold transition-colors hover:decoration-black-900">
                    {data[3].title}
                  </p>
                </Link>
                <Link href={data[4].link}>
                  <div className="mb-2 group overflow-hidden">
                    <Image
                      width="1400"
                      height="700"
                      alt="39540-PosterPower_12.jpg"
                      // sizes="auto, (max-width: 1400px) 100vw, 1400px"
                      className="object-cover bg-cream-900 h-full w-full transition-transform duration-1000 group-hover:scale-105"
                      // decoding="async"
                      src={data[4].img}
                    />
                  </div>
                  <p className="underline text-base decoration-transparent font-semibold transition-colors hover:decoration-black-900">
                    {data[4].title}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryLayoutA;
