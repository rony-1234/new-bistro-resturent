
import  chefImg from'../../../assets/assets/home/featured.jpg';  
const Feature = () => {
   
    return (
        <div
  className="hero min-h-screen my-8 "
  style={{
    backgroundImage:"url(https://i.ibb.co/jDL8KsT/chef-service.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md bg-white text-black ">
      <h1 className="mb-5 text-5xl font-bold px-8">Bistro Boss</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>

    </div>
  </div>
</div>
    );
};

export default Feature;