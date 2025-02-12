import React from "react";
import Link from "next/link";
import Image from "next/image";

const hardLink = "";

export const data = [
  {
    img: "https://cdnphoto.dantri.com.vn/YtZHrxZrSoJuu04aVpENsE5t0Gc=/zoom/1032_688/2025/02/12/202502120823509535z63093559605879fd4e835f614214bf8c7d4699ecb26dc-edited-1739324036159.jpeg",
    title: "Đề xuất bổ sung trường hợp tạm đình chỉ nhiệm vụ đại biểu Quốc hội",
    tag: ["Chính trị"],
    date: "11 Th02 2025",
    link: hardLink,
  },
  {
    img: "https://cdnphoto.dantri.com.vn/SQ_DCaOjKLcjHv6QgTOJ4EGyZfM=/zoom/468_312/2025/02/11/anh-man-hinh-2025-02-11-luc-16-crop-1739266177112.jpeg",
    title: "Áp thấp nhiệt đới sắp hình thành, hướng vào vùng biển nước ta",
    tag: ["Thời tiết"],
    date: "11 Th02 2025",
    link: hardLink,
  },
  {
    img: "https://cdnphoto.dantri.com.vn/nqV581ogVLzqbxQk3k6WwugjrIg=/zoom/468_312/2025/02/11/478064052-1283870803099112-76689-9027-6102-crop-1739257429528.jpeg",
    title: "Vụ nam shipper bị đánh: Công an mời tài xế Lexus lên làm việc",
    tag: ["Giáo dục"],
    date: "11 Th02 2025",
    link: hardLink,
  },
  {
    img: "https://cdnphoto.dantri.com.vn/Euum-MoxXI_0baPxi3vE7OENV_g=/zoom/240_160/2025/02/11/trumpgetty-1-crop-1739268680277.jpeg",
    title: 'Tổng thống Trump: Ukraine có thể trở thành "một phần" của Nga',
    tag: ["Chính trị"],
    date: "11 Th02 2025",
    link: hardLink,
  },
  {
    img: "https://cdnphoto.dantri.com.vn/8qGfBOMQWuGSntjd45M4DfzWXCI=/zoom/240_160/2025/02/11/le-khac-nam-edited-1739277157452.jpeg",
    title: "Phó Chủ tịch UBND TP Hải Phòng Lê Khắc Nam xin nghỉ hưu trước tuổi",
    tag: ["Chính trị"],
    date: "11 Th02 2025",
    link: hardLink,
  },
  {
    img: "https://cdnphoto.dantri.com.vn/WiOtfo5cXQ5BJhKSbVXYQcdz-is=/zoom/240_160/2025/02/11/vien2-crop-1739265037096.jpeg?watermark=true",
    title:
      'Vợ nam shipper bị tài xế Lexus đấm tới tấp: "Họ đánh chồng tôi ác quá"',
    tag: ["Chính trị"],
    date: "11 Th02 2025",
    link: hardLink,
  },
  {
    img: "https://cdnphoto.dantri.com.vn/P_lzbx9exACSYlf5VfxY2nEsAX4=/zoom/468_312/2025/02/11/den-am-hon9-edited-1739246274599.jpeg",
    title:
      'Sức hút "Đèn âm hồn": Không ngôi sao phòng vé vẫn soán ngôi Trấn Thành?"',
    tag: ["Điện ảnh"],
    date: "11 Th02 2025",
    link: hardLink,
  },
];

const Hero = () => {
  return (
    <div className="w-screen relative py-16 bg-[#f9f4ed] dark:bg-[#2C3E50]">
      <div className="grid gap-x-6 gap-y-10 z-20 lg:grid-cols-3 xl:grid-cols-4 container m-auto px-2">
        <div className="lg:col-span-2 xl:order-2 xl:col-span-2 relative z-20">
          <div>
            <Link
              className="block group overflow-hidden relative"
              href={data[0].link}
            >
              <Image
                className="object-cover bg-cream-900 w-full transition-transform duration-1000 group-hover:scale-105"
                src={data[0].img}
                width="732"
                height="549"
                alt=""
              />
            </Link>
            <div className="pt-5 space-y-3">
              <div className="flex flex-wrap gap-2">
                {data[0].tag.map((tag, index) => (
                  <Link
                    className="block leading-none rounded-full border transition-colors pt-2 pb-1.5 px-3 text-xs font-bold uppercase border-black-900 hover:bg-black-900 hover:text-white"
                    href=""
                    key={index}
                  >
                    {tag}
                  </Link>
                ))}
              </div>

              <h2 className="font-display font-medium text-2xl sm:text-3xl">
                <Link
                  className="underline decoration-transparent transition-colors hover:decoration-black-900"
                  href={data[0].link}
                >
                  {data[0].title}
                </Link>
              </h2>
              <div>
                <time> {data[0].date} </time>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:order-1 relative z-20">
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <Link
                className="block group overflow-hidden relative"
                href={data[0].link}
              >
                <Image
                  className="object-cover bg-cream-900 w-full transition-transform duration-1000 group-hover:scale-105"
                  src={data[1].img}
                  width="732"
                  height="487"
                  alt=""
                />
              </Link>
              <div className="pt-5 space-y-3">
                <div className="flex flex-wrap gap-2">
                  {data[1].tag.map((tag, index) => (
                    <Link
                      className="block leading-none rounded-full border transition-colors pt-2 pb-1.5 px-3 text-xs font-bold uppercase border-black-900 hover:bg-black-900 hover:text-white"
                      href=""
                      key={index}
                    >
                      {tag}
                    </Link>
                  ))}
                </div>

                <h2 className="font-display font-medium text-lg">
                  <Link
                    className="underline decoration-transparent transition-colors hover:decoration-black-900"
                    href={data[0].link}
                  >
                    {data[1].title}
                  </Link>
                </h2>
                <div>
                  <time> {data[1].date} </time>
                </div>
              </div>
            </div>

            <div>
              <Link
                className="block group overflow-hidden relative"
                href={data[0].link}
              >
                <Image
                  className="object-cover bg-cream-900 w-full transition-transform duration-1000 group-hover:scale-105"
                  src={data[2].img}
                  width="732"
                  height="408"
                  alt=""
                />
              </Link>
              <div className="pt-5 space-y-3">
                <div className="flex flex-wrap gap-2">
                  {data[2].tag.map((tag, index) => (
                    <Link
                      className="block leading-none rounded-full border transition-colors pt-2 pb-1.5 px-3 text-xs font-bold uppercase border-black-900 hover:bg-black-900 hover:text-white"
                      href=""
                      key={index}
                    >
                      {tag}
                    </Link>
                  ))}
                </div>

                <h2 className="font-display font-medium text-lg">
                  <Link
                    className="underline decoration-transparent transition-colors hover:decoration-black-900"
                    href={data[0].link}
                  >
                    {data[2].title}
                  </Link>
                </h2>
                <div>
                  <time> {data[2].date} </time>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 xl:col-span-1 xl:order-3 relative z-20">
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-10 xl:grid-cols-1">
            <div className="sm:border-t sm:border-black-900 sm:pt-6 xl:first-of-type:border-t-0 xl:first-of-type:pt-0">
              <div className="sm:flex">
                <Link
                  className="block group overflow-hidden basis-1/3 relative"
                  href={data[0].link}
                >
                  <picture>
                    <source
                      media="(min-width: 640px)"
                      width="160"
                      height="160"
                    />
                    <source
                      media="(max-width: 639px)"
                      width="576"
                      height="411"
                    />
                    <Image
                      className="object-cover bg-cream-900 w-full transition-transform duration-1000 group-hover:scale-105"
                      src={data[3].img}
                      width="732"
                      height="522"
                      alt="Still from the 2025 Super Bowl ad When Sally Met Hellmann's. Image credit: Hellmann's"
                      loading="lazy"
                    />
                  </picture>
                </Link>
                <div className="pt-5 space-y-3 sm:basis-2/3 sm:pt-0 sm:pl-5">
                  <div className="flex flex-wrap gap-2">
                    {data[3].tag.map((tag, index) => (
                      <Link
                        className="block leading-none rounded-full border transition-colors pt-2 pb-1.5 px-3 text-xs font-bold uppercase border-black-900 hover:bg-black-900 hover:text-white"
                        href={data[0].link}
                        key={index}
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>

                  <h2 className="text-lg sm:text-base">
                    <Link
                      className="underline decoration-transparent transition-colors hover:decoration-black-900"
                      href={data[0].link}
                    >
                      {data[3].title}
                    </Link>
                  </h2>
                  <div>
                    <time>{data[3].date}</time>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:border-t sm:border-black-900 sm:pt-6 xl:first-of-type:border-t-0 xl:first-of-type:pt-0">
              <div className="sm:flex">
                <Link
                  className="block group overflow-hidden basis-1/3 relative"
                  href={data[0].link}
                >
                  <picture>
                    <source
                      media="(min-width: 640px)"
                      width="160"
                      height="160"
                    />
                    <source
                      media="(max-width: 639px)"
                      width="576"
                      height="411"
                    />
                    <Image
                      className="object-cover bg-cream-900 w-full transition-transform duration-1000 group-hover:scale-105"
                      src={data[4].img}
                      width="732"
                      height="522"
                      alt="Still from the 2025 Super Bowl ad When Sally Met Hellmann's. Image credit: Hellmann's"
                      loading="lazy"
                    />
                  </picture>
                </Link>
                <div className="pt-5 space-y-3 sm:basis-2/3 sm:pt-0 sm:pl-5">
                  <div className="flex flex-wrap gap-2">
                    {data[4].tag.map((tag, index) => (
                      <Link
                        className="block leading-none rounded-full border transition-colors pt-2 pb-1.5 px-3 text-xs font-bold uppercase border-black-900 hover:bg-black-900 hover:text-white"
                        href={data[0].link}
                        key={index}
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>

                  <h2 className="text-lg sm:text-base">
                    <Link
                      className="underline decoration-transparent transition-colors hover:decoration-black-900"
                      href={data[0].link}
                    >
                      {data[4].title}
                    </Link>
                  </h2>
                  <div>
                    <time>{data[3].date}</time>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:border-t sm:border-black-900 sm:pt-6 xl:first-of-type:border-t-0 xl:first-of-type:pt-0">
              <div className="sm:flex">
                <Link
                  className="block group overflow-hidden basis-1/3 relative"
                  href={data[0].link}
                >
                  <picture>
                    <source
                      media="(min-width: 640px)"
                      width="160"
                      height="160"
                    />
                    <source
                      media="(max-width: 639px)"
                      width="576"
                      height="411"
                    />
                    <Image
                      className="object-cover bg-cream-900 w-full transition-transform duration-1000 group-hover:scale-105"
                      src={data[5].img}
                      width="732"
                      height="522"
                      alt="Still from the 2025 Super Bowl ad When Sally Met Hellmann's. Image credit: Hellmann's"
                      loading="lazy"
                    />
                  </picture>
                </Link>
                <div className="pt-5 space-y-3 sm:basis-2/3 sm:pt-0 sm:pl-5">
                  <div className="flex flex-wrap gap-2">
                    {data[3].tag.map((tag, index) => (
                      <Link
                        className="block leading-none rounded-full border transition-colors pt-2 pb-1.5 px-3 text-xs font-bold uppercase border-black-900 hover:bg-black-900 hover:text-white"
                        href={data[0].link}
                        key={index}
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>

                  <h2 className="text-lg sm:text-base">
                    <Link
                      className="underline decoration-transparent transition-colors hover:decoration-black-900"
                      href={data[0].link}
                    >
                      {data[5].title}
                    </Link>
                  </h2>
                  <div>
                    <time>{data[5].date}</time>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:border-t sm:border-black-900 sm:pt-6 xl:first-of-type:border-t-0 xl:first-of-type:pt-0">
              <div className="sm:flex">
                <Link
                  className="block group overflow-hidden basis-1/3 relative"
                  href={data[0].link}
                >
                  <picture>
                    <source
                      media="(min-width: 640px)"
                      width="160"
                      height="160"
                    />
                    <source
                      media="(max-width: 639px)"
                      width="576"
                      height="411"
                    />
                    <Image
                      className="object-cover bg-cream-900 w-full transition-transform duration-1000 group-hover:scale-105"
                      src={data[6].img}
                      width="732"
                      height="522"
                      alt="Still from the 2025 Super Bowl ad When Sally Met Hellmann's. Image credit: Hellmann's"
                      loading="lazy"
                    />
                  </picture>
                </Link>
                <div className="pt-5 space-y-3 sm:basis-2/3 sm:pt-0 sm:pl-5">
                  <div className="flex flex-wrap gap-2">
                    {data[6].tag.map((tag, index) => (
                      <Link
                        className="block leading-none rounded-full border transition-colors pt-2 pb-1.5 px-3 text-xs font-bold uppercase border-black-900 hover:bg-black-900 hover:text-white"
                        href={data[0].link}
                        key={index}
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>

                  <h2 className="text-lg sm:text-base">
                    <Link
                      className="underline decoration-transparent transition-colors hover:decoration-black-900"
                      href={data[0].link}
                    >
                      {data[6].title}
                    </Link>
                  </h2>
                  <div>
                    <time>{data[3].date}</time>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          width: "50vh",
          height: "50vh",
          right: "100%",
          transform: "translateX(50%) translateY(-50%)",
          top: "50%",
          WebkitFilter: "blur(5vw)",
          filter: "blur(8vw)",
          opacity: "0.4",
          zIndex: "1",
        }}
        className="bg-gradient-to-r from-[#ffccb6] to-[#ffccb6] dark:from-[#7f8c8d] dark:to-[#7f8c8d]"
      />
      <div
        style={{
          position: "absolute",
          width: "50vh",
          height: "50vh",
          right: "100%",
          transform: "translateX(25%) translateY(-50%)",
          top: "100%",
          // background: 'linear-gradient(0deg, #ffccb6, #ffccb6), #ffccb6',
          WebkitFilter: "blur(5vw)",
          filter: "blur(12vw)",
          opacity: "0.4",
          zIndex: "1",
        }}
        className="bg-gradient-to-r from-[#ffccb6] to-[#ffccb6] dark:from-[#7f8c8d] dark:to-[#7f8c8d]"
      />
    </div>
  );
};

export default Hero;
