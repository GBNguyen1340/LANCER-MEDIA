const BookingForm = () => {
  return (
    <section>
      <div className="flex flex-col min-h-screen bg-black/60">
        <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
          <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
            <div className="mt-8 lg:w-full lg:mx-6">
              <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                <h1 className="text-xl font-medium text-gray-700 dark:text-gray-200">
                  Đặt studio
                </h1>

                <form className="mt-6">
                  <div className="flex-1">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Họ tên
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-amber-400 focus:ring-amber-300 focus:ring-opacity-40 dark:focus:border-amber-300 focus:outline-none focus:ring"
                    />
                  </div>

                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Điện thoại
                    </label>
                    <input
                      type="text"
                      placeholder="0900123456"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-amber-400 focus:ring-amber-300 focus:ring-opacity-40 dark:focus:border-amber-300 focus:outline-none focus:ring"
                    />
                  </div>

                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="johndoe@example.com"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-amber-400 focus:ring-amber-300 focus:ring-opacity-40 dark:focus:border-amber-300 focus:outline-none focus:ring"
                    />
                  </div>

                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Hình thức livestream
                    </label>
                    <select
                      id="livestreamType"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
                    >
                      <option selected>Chọn loại hình livestream</option>
                      <option value="LiveGame">Live game</option>
                      <option value="LiveShop">Live bán hàng</option>
                      <option value="LiveDance">Live nhóm nhảy</option>
                    </select>
                  </div>

                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Loại phòng studio
                    </label>
                    <select
                      id="studioType"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
                    >
                      <option selected>Chọn phòng studio</option>
                      <option value="studio1">Studio 1</option>
                      <option value="studio2">Studio 2</option>
                      <option value="studio3">Studio 3</option>
                    </select>
                  </div>

                  <div class="w-full mt-6">
                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Mô tả nội dung livestream
                    </label>
                    <textarea
                      class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-amber-600 rounded-md hover:bg-amber-500 focus:outline-none focus:ring focus:ring-amber-400 focus:ring-opacity-50">
                    Đặt lịch
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
