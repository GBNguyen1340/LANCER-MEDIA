import Navigation from "@/app/ui/Common/nav";
import ResponsiveCarousel from "@/app/ui/Common/ResponsiveCarousel";
import Image from "next/image";
import { CheckIcon, ArrowRightCircleIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <>
      <Navigation />
      <ResponsiveCarousel></ResponsiveCarousel>
      <main className="flex min-h-screen flex-col items-center justify-between py-20">
        
        <section id="about-us" className="grid grid-cols-2 gap-20 mb-20 px-24">
          <div>
            <h2 className="text-4xl font-bold text-amber-500 pb-3">
              Về Lancer Media
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              suscipit, neque non egestas euismod, dolor libero faucibus ex, ut
              eleifend metus ipsum eu enim. Nulla vel quam sapien. Donec
              accumsan accumsan molestie. Sed consectetur finibus nisi sed
              lobortis. Donec laoreet dolor eget suscipit scelerisque. Mauris
              pellentesque neque in neque tempor, in egestas libero bibendum.
              Duis tellus sapien, dapibus sed ipsum ut, placerat cursus mi. In
              ac dolor consequat, vestibulum erat quis, ullamcorper mauris.
              Nullam non metus vitae ante blandit efficitur sit amet vitae
              felis. Vestibulum at enim consequat, dapibus arcu sed, tincidunt
              metus.
            </p>
            <div className="pt-5 pl-5">
              <ul className="leading-8">
                <li>
                  <div className="flex flex-row">
                    <CheckIcon className="h-6 w-6 text-amber-500 mr-5" />
                    <p>Quản lý và nhận booking talent và idol.</p>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row">
                    <CheckIcon className="h-6 w-6 text-amber-500 mr-5" />
                    <p>
                      Nhận booking studio và thiết bị livestream game,
                      livestream bán hàng.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <Image
              src="/aboutus.jpg"
              alt="Chúng tôi là Lancer Media"
              width={500} //automatically provided
              height={700} //automatically provided
              blurDataURL="data:..." //automatically provided
              placeholder="blur" // Optional blur-up while loading
              className="w-full"
            />
          </div>
        </section>

        <section id="gaming" className="grid grid-cols-2 gap-20 bg-amber-400">
          <div className="p-24">
            <p className="text-sm text-gray-800 pb-3">Unleash</p>
            <h2 className="text-4xl font-bold text-gray-800 pb-3">
              Experience Gaming Like Never Before
            </h2>
            <p>
              Discover our state-of-the-art studio, designed for livestreaming
              games. With top-of-the-line equipment and a professional setup,
              you can take your gaming experience to the next level.
            </p>
            <div className="pt-5 pl-5">
              <div className="grid grid-cols-2 gap-20">
                <div>
                  <p className="text-7xl font-extrabold pb-5">50%</p>
                  <p>Book our studio for an immersive gaming experience.</p>
                </div>
                <div>
                  <p className="text-7xl font-extrabold pb-5">50%</p>
                  <p>Livestream your games to a global audience.</p>
                </div>
              </div>
            </div>
            <div className="pt-5 pl-5">
              <a
                title="Booking Now"
                target="_self"
                className="inline-flex items-center mt-8 md:mt-8 px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-amber-700 hover:bg-amber-800 focus:outline-none focus:border-amber-800 focus:shadow-outline-indigo active:bg-amber-800 transition ease-in-out duration-150"
                href="/booking"
              >
                <span className="inline-block pr-5">Booking Now</span>{" "}
                <ArrowRightCircleIcon className="h-6 w-6"></ArrowRightCircleIcon>
              </a>
            </div>
          </div>
          <div className="p-24">
            <Image
              src="/game.jpg"
              alt="Booking phòng và thiết bị live stream"
              width={500} //automatically provided
              height={700} //automatically provided
              blurDataURL="data:..." //automatically provided
              placeholder="blur" // Optional blur-up while loading
              className="w-full shadow-md"
            />
          </div>
        </section>

        <section id="equipment">
          <div className="py-24 px-40 grid grid-cols-2 gap-20">
            <div>
              <Image
                src="/equipment.jpg"
                alt="Booking phòng và thiết bị live stream"
                width={500} //automatically provided
                height={700} //automatically provided
                blurDataURL="data:..." //automatically provided
                placeholder="blur" // Optional blur-up while loading
                className="w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-800 pb-3">
                Unlock Your Creative Potential with Our Wide Range of Production
                Equipment
              </h2>
              <p>
                At LANCER MEDIA, we understand the importance of having the
                right tools to bring your creative vision to life. That's why we
                offer a diverse selection of production equipment available for
                rental, tailored to support our clients' unique needs. Whether
                you're a professional filmmaker, content creator, or live
                streamer, our top-of-the-line gear will help you capture
                stunning visuals and deliver exceptional results. Discover the
                possibilities and take your productions to the next level with
                LANCER MEDIA.
              </p>
              <div className="pt-5 pl-5">
              <a
                title="Booking Now"
                target="_self"
                className="inline-flex items-center mt-8 md:mt-8 px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-amber-700 hover:bg-amber-800 focus:outline-none focus:border-amber-800 focus:shadow-outline-indigo active:bg-amber-800 transition ease-in-out duration-150"
                href="/booking"
              >
                <span className="inline-block pr-5">Booking Now</span>{" "}
                <ArrowRightCircleIcon className="h-6 w-6"></ArrowRightCircleIcon>
              </a>
            </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
