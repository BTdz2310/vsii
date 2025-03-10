import dayjs from "dayjs";
import Head from "next/head";
import CategoryLayoutA from "src/components/CategoryLayoutA";
import CategoryLayoutB from "src/components/CategoryLayoutB";
import Hero from "src/components/Hero";
import LiveScore from "src/components/LiveScore";
import NavBar from "src/components/NavBar";
import Politics from "src/components/Politics";

const Home = async () => {
  const matchesResult = await getMatchesResult();

  return (
    <>
      <Head>
        <title>Trang chủ - VSII</title>
        <meta name="description" content="Mô tả trang chủ" />
        <meta property="og:title" content="Trang chủ" />
        <meta property="og:description" content="Mô tả trang chủ" />
      </Head>

      <div className="pt-16 font-space-grotesk">
        <NavBar />
        <Hero />
        <LiveScore data={matchesResult} />
        <CategoryLayoutA />
        <CategoryLayoutB />
        <Politics />
        <div className="absolute inset-0 h-full w-screen overflow-hidden">
          <div style={{
              position: 'absolute',
              width: '20vw',
              height: '20vw',
              left: '100%',
              transform: 'translateX(-75%)',
              top: '-20px',
              // background: '',
              WebkitFilter: 'blur(8vw)',
              filter: 'blur(10vw)',
              opacity: '0.4',
              zIndex: '1',
            }}
            className="bg-gradient-to-r from-[#af695c] to-[#af695c] dark:from-[#7f8c8d] dark:to-[#7f8c8d]"
          />
        </div>
      </div>
    </>
  );
}


async function getMatchesResult() {
  const res = await fetch(`https://api.football-data.org/v4/matches`, {
    headers: {
      'X-Auth-Token': process.env.NEXT_PUBLIC_FOOTBALL_DATA_API
    },
    cache: "no-store"
  })
  const matchesResult = await res.json()
  return matchesResult
}

export default Home