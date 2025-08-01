import React from 'react'
import { Link } from 'react-router'
import Bu from './bu'
export default  () => {
  const [data, setData] = React.useState(null);
  const [dataIMG, setDataIMG] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://srgpc-colage.onrender.com/get/681b3293e2a0f672db8f34d5');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    const fetchIMGData = async () => {
      try {
        const response = await fetch('https://srgpc-colage.onrender.com/get/681ce87762146338255866f7');
        const result = await response.json();
        setDataIMG(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    fetchIMGData();
  }, []);
  return (<>
    <div id="home">
  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100 " style={{height:"400px"}} src={dataIMG?.first_img} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" style={{height:"400px"}} src={dataIMG?.secande_img} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" style={{height:"400px"}} src={dataIMG?.therd_img} alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
<section>
  <div id="updates">
    <a id="ub"><b>Updates :</b></a>
    <div id="ud">
      <a href={data?.href} className="scroll">{data?.update}</a>
    </div>
  </div>
</section></div>
<h2>Department-</h2>
<section id="d3">
  <div id="d3-content">
    <Link to="/department/ae">
    <div className="mb-6 cart" id="d4">
      <button>
        <img id="i3" src="../public/photo-1511818966892-d7d671e672a2.jfif" alt="Architecture & Interior Design"/>
        <h2>
          <u>Architecture & Interior Design</u>
        </h2>
        <p>Interior designers are concerned about the aesthetics, functionality, and user experience of built
          structures</p>
      </button>
    </div></Link>
    <Link to="/department/cse">
    <div className="mb-6 cart">
      <button id='cse'>
        <img id="i2" src="../public/photo-1610563166150-b34df4f3bcd6.jfif" alt="Computer Science"/>
        <h2>
          <u>Computer Science</u>
        </h2>
        <p>Computer Science Engineering (CSE) is a popular undergraduate and postgraduate academic program that
          combines the fields of computer science and computer engineering</p>
      </button>
    </div></Link>
    <Link to="/department/et">
    <div className="mb-6 cart" id="d5">
      <button>
        <img id="i4" src="../public/photo-1518770660439-4636190af475.jfif" alt="Electronics & Telecommunication"/>
        <h2>
          <u>Electronics & Telecommunication</u>
        </h2>
        <p>Electronics and telecommunication engineering (ETE) is a field that involves designing, producing,
          testing,
          and supervising the manufacturing of complex electronic systems and products</p>
      </button>
    </div></Link>
    <Link to="/department/ft">
    <div className="mb-6 cart" id="d7">
      <button>
        <img id="i6" src="../public/vitaly-gariev-9pIkaC1fjEY-unsplash.jpg" alt="Fashion Technology"/>
        <h2>
          <u>Fashion Technology</u>
        </h2>
        <p>Fashion technology combines engineering and fashion design to create clothing and accessories that are
          both
          functional and aesthetically pleasing</p>
      </button>
    </div></Link>
    <Link to="/department/mom">
    <div className="cart" id="d6">
      <button>
        <img id="i5" src="../public/photo-1522071820081-009f0129c71c.jfif" alt="Modern Office Management"/>
        <h2>
          <u>Modern Office Management</u>
        </h2>
        <p>Modern Office Management (MOM) is a field that aims to improve office efficiency and productivity by
          enhancing the performance of office work</p>
      </button>
    </div></Link>
  </div>
</section>
<h2>Facilities-</h2>
<section>
  <div id="d3-content"><div className="mb-6 cart">
    <Link to="/facilities/Solar-Powered Campus"><button>
      <img id="i2" src="../" alt=""/>
      <h2>
        <u>Solar-Powered Campus</u>
      </h2>
      <p>Our campus utilizes solar energy to promote sustainability and eco-friendly practices. With an extensive network of solar panels, we ensure reduced dependency on non-renewable resources while lowering carbon footprints.</p>
    </button></Link>
  </div>
  
  <div className="mb-6 cart">
  <Link to="/facilities/Smart-Classroom">
    <button>
      <img id="i2" src="../" alt=""/>
      <h2>
        <u>Smart Classroom</u>
      </h2>
      <p>Experience advanced teaching methods with smart boards and interactive learning tools. Our classrooms are equipped with the latest technology to facilitate modern education and foster engaging learning experiences.</p>
    </button></Link>
  </div>
  <div className="mb-6 cart">
    <Link to="/facilities/Girl's-Hostel"><button>
      <img id="i2" src="../" alt=""/>
      <h2>
        <u>Girl's Hostel</u>
      </h2>
      <p>Safe and comfortable accommodation facilities exclusively for female students. The hostel provides round-the-clock security, hygienic food, and a supportive environment to ensure peace of mind for students and parents alike.</p>
    </button></Link>
  </div>
  <div className="mb-6 cart">
    <Link to="/facilities/Computer-Lab"><button>
      <img id="i2" src="../" alt=""/>
      <h2>
        <u>Computer Lab</u>
      </h2>
      <p>State-of-the-art computer labs equipped with high-speed internet and modern software. These labs provide an ideal environment for coding, research, and hands-on practice to enhance technical skills.</p>
    </button></Link>
  </div>
  <div className="mb-6 cart">
    <Link to="/facilities/Electronics-Lab"><button>
      <img id="i2" src="../" alt=""/>
      <h2>
        <u>Electronics Lab</u>
      </h2>
      <p>Fully equipped electronics lab for hands-on learning and experimentation. Students can explore circuit design, robotics, and other innovative projects in a practical setting.</p>
    </button></Link>
  </div>
  <div className="mb-6 cart">
    <Link to="/facilities/Fashion-Technology-Lab"><button>
      <img id="i2" src="../" alt=""/>
      <h2>
        <u>Fashion Technology Lab</u>
      </h2>
      <p>Explore creativity and design in a specialized lab for fashion technology. The lab features modern tools and materials to nurture innovation and craftmanship in the field of fashion design.</p>
    </button></Link>
  </div>
    </div>
</section>
</>
  )
}
