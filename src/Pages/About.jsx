import CardUi from "../Layout/CardUi";

const About = () => {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <CardUi
            image="https://media.licdn.com/dms/image/v2/D4D12AQHA4SPDhRLMoA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1696403345515?e=2147483647&v=beta&t=iFMy2BTouIMesYEzfTerN5wqMN_1DrNV3pKGTQKbP40"
            title="Web Developer"
            para="Website developer by Parmar Raj"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
