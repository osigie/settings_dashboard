import Head from "next/head";
import TopBar from "../components/TopBar/Index"
import SideMenu from "../components/SideMenu/Index"
import SettingsMain from "../components/SettingsMain/Index"
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="md:flex h-screen bg-brand-background-1">
        <TopBar />
        <SideMenu />
        <div className=" w-full md:overflow-y-scroll md:overflow-x-hidden md:max-h-full md:pb-4 md:px-3  md:h-full md:pt-0 scrollbar scrollbar-thumb-brand-grey-2 scrollbar-track-brand-grey-3 relative  top-10 md:top-0 pt-0">
          <SettingsMain />
        </div>
      </main>
    </>
  );
}
