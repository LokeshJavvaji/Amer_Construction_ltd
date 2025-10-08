export default function Welcome() {
  return (
    <section className="grid md:flex-row items-center justify-center gap-8 p-6 container mx-auto">
      <div className="w-full text-center md:text-left">
        <h1 className="text-center text-3xl md:text-4xl gap-5 p-7 font-bold">
          Building Excellence with Amer Construction Ltd.
        </h1>
        <p className="mt-9 text-xl text-black-600">
          At Amer Construction Ltd., we deliver high-quality construction
          services, ensuring your project is completed to the highest standards.
          Our team of experts offers comprehensive construction solutions,
          including building construction, renovation, project management, and
          more.
        </p>
        <div className="w-full p-10">
          <iframe
            className="w-full h-60 md:h-80 lg:h-96 rounded-lg"
            src="https://www.youtube.com/embed/_YnQ5VrtMRo?autoplay=1&loop=1&playlist=_YnQ5VrtMRo"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <p className="mt-9 text-xl text-black-600 text-center">
          With years of experience in the construction industry, we have
          developed a deep understanding of our clients needs. We offer tailored
          construction solutions, exceptional customer service, and a commitment
          to quality that sets us apart.
        </p>
      </div>
    </section>
  );
}
