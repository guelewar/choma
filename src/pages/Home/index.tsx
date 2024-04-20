//import download from '../../assets/download.svg';
//import facebook from '../../assets/facebook.svg';
//import google from '../../assets/google.svg';
import { Link } from 'react-router-dom';
import HeroImg from '../../assets/hero.svg';
import playlist from '../../assets/playlist.svg';
//import vk from '../../assets/vk.svg';
import youtub from '../../assets/youtub.svg';

export default function Home() {
  return (
    <section className="max-w-screen-xl mx-auto p-4 h-full font-roboto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="">
          <img src={HeroImg} alt="illustration" />
        </div>
        <div className="grid grid-cols-2 text-center mx-auto gap-6">
          <div className="border border-dotted w-[279] h-[278] p-8 relative">
            <Link to={''}>
              <img src={playlist} className="mx-auto w-[103] h-[76]" alt="" />
              <span className="whitespace-nowrap absolute left-0 right-0 bottom-1 text-lg">
                Download Playlist
              </span>
            </Link>
          </div>
          <div className="border border-dotted w-[279] h-[278] p-8 relative">
            <Link to={'download'}>
              <img src={youtub} className="mx-auto w-[103] h-[76]" alt="" />
              <span className="whitespace-nowrap absolute left-0 right-0 bottom-1 text-lg">
                Single Download
              </span>
            </Link>
          </div>
          <span className="text-center grid col-span-2 text-lg">Select Download Method</span>
        </div>
      </div>

      {/*<div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="flex md:w-1/2 items-center justify-between order-last md:-order-last">
          <span className="text-sm">Follow us on social</span>
          <div className="social-media flex items-center">
            <img src={vk} alt="vk" />
            <img src={facebook} alt="facebook" />
            <img src={google} alt="google" />
          </div>
        </div>
        <div className="relative md:w-1/2">
          <span className="absolute top-6 left-0 text-xl">Download This App</span>
          <img src={download} alt="download" />
        </div>
      </div>*/}
    </section>
  );
}
