const Banner = () => {
  return (
    <div className="max-w-screen-2xl mt-10 md:min-h-[400px] mx-auto">
      <div className="lg:flex justify-around  gap-10">
        <div>
          <img
            className="h-auto mt-10 md:max-w-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
            src="https://www.yallatoys.com/media/App%20and%20Website%20Banners/Website/october%202023/homepage%20layout/Layout%206/cookup%20layout-6-min.jpg?width=1920&auto=webp&quality=90"
            alt="image description"
          />
        </div>
        <div>
          <img
            className="h-auto w-48 hover:origin-top-left hover:rotate-12 lg:w-full md:max-w-xs relative left-24 md:right-52 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150 duration-300"
            src="https://babytoysbd.com/wp-content/uploads/2022/01/h8-img3.png"
            alt="image description"
          />
          <div className="flex  rounded-2xl bg-cover bg-[url('https://babytoysbd.com/wp-content/uploads/2022/01/h8-banner5.jpg')]">
            <h2 className="text-3xl font-semibold text-sky-600 p-10">
              Learning Through Play
            </h2>
            <img
              className="h-auto w-60 lg:w-full  relative right-32  top-16 md:max-w-sm transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
              src="https://babytoysbd.com/wp-content/uploads/2022/01/h8-img4.png"
              alt="image description"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
