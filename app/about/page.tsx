const AboutPage = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold mt-8">
        Technical Vocational Livelihood
      </h1>
      <p className="mt-8 mx-auto text-center text-muted-foreground text-md max-w-md">
        education is all about giving people the practical skills and knowledge
        they need to succeed in specific trades or professions. This type of
        education covers a wide range of fields, including mechanics,
        electronics, carpentry, agriculture, culinary arts, and more. The goal
        of TVL programs is to prepare individuals for entering the workforce
        right away or continuing their education in their chosen field. TVL is
        often seen as a different path from traditional academic routes and can
        open up many exciting career opportunities in different industries.
      </p>

      <div className="mx-auto mt-16 w-[400px] h-[400px]">
        <video controls className="rounded-md">
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default AboutPage;
