import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import populerImg from '../../../assets/assets/home/featured.jpg';
import  './PopularItem.css'

const PopularSection = () => {
    return (
        <section className="populerItem pt-8 bg-fixed">  
         
        
            <SectionTitle subHeading='check it out'
             heading='From Our Menu'>

            </SectionTitle>
            <div className="md:flex justify-center space-x-8 bg-slate-500 bg-opacity-30 items-center px-20 py-24">
                <div>
                  <img src={populerImg} alt=""/>
                </div>
                <div className="text-white">
                    <p>20 March 2023</p>
                    <p className="uppercase">Where I Can Get Some</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum ipsa saepe libero facere non incidunt aperiam iste optio culpa nemo eius ea aspernatur inventore commodi, dolore blanditiis sed quia. Nihil.
                    </p>
                    <button className="btn btn-outline border-0 border-b-4 mt-8 ">Read More</button>
                </div>
            </div>
            
        </section>

    );

};

export default PopularSection;