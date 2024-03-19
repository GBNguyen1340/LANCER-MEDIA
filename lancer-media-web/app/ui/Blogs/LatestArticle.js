import Image from "next/image";

const LatestArticle = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
          Latest Article
        </h1>
        <div className="w-60 h-1 my-1 mb-10 bg-amber-300"></div>
        <div className="lg:flex lg:-mx-6">
          <div className="lg:w-3/4 lg:px-6">
            <Image
              src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Lancer Media map"
              width={500} //automatically provided
              height={700} //automatically provided
              blurDataURL="data:..." //automatically provided
              placeholder="blur" // Optional blur-up while loading
              className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
            />
            <div>
              <p className="mt-6 text-sm text-amber-500 uppercase">
                Want to know
              </p>

              <h1 className="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 dark:text-white">
                What do you want to know about UI
              </h1>
            </div>
          </div>

          <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
            <div>
              <h3 className="text-amber-500 capitalize">Design instument</h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
              >
                How to raise $100k+ by using blox ui kit on your design
              </a>
            </div>

            <hr className="my-6 border-gray-200 dark:border-gray-700" />

            <div>
              <h3 className="text-amber-500 capitalize">UI Resource</h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
              >
                Should you creat UI Product by using Blox?
              </a>
            </div>

            <hr className="my-6 border-gray-200 dark:border-gray-700" />

            <div>
              <h3 className="text-amber-500 capitalize">Premium Collection</h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
              >
                Top 10 Blocks you can get on Blox's collection.
              </a>
            </div>

            <hr className="my-6 border-gray-200 dark:border-gray-700" />

            <div>
              <h3 className="text-amber-500 capitalize">Premium kits</h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
              >
                Top 10 Ui kit you can get on Blox's collection.
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestArticle;