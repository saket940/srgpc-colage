import React from 'react';
import H2 from './h2';

const Principal = () => {
  return (
    <div className='main'>
      <H2 h2="Principal's Desk"/>
      
      <div className="sahodra-container">
        <div className="sahodra-text">
          <p>
            On behalf of the entire, S. R. Govt. Polytechnic College, Sagar (MP), India family, 
            I am pleased to introduce this college. Within these electronic pages, you will be 
            able to get whatever information you seek about college. As an institution of technical 
            education, this College is committed to the discovery and transmission of knowledge. 
            But, it also seeks to integrate excellence and social commitment, to both inform and 
            form its students.
          </p>
          <p >
            The Ministry of Human Resource Development (MHRD), I invite you to join us, as a 
            prospective student, parent, or simply as a friend. Our main concern is ensuring 
            that the personal development of the student takes place in an educational environment. 
            Our vision is based on hard work, open communication, a strong emphasis on team work 
            and a high level responsibility.
          </p>
          <p>
            This visionary culture allows and emphasizes our wards not only to adopt the present 
            day challenges but also individual responsibilities to the society and our nation at large.
          </p>
          <p>
            Dr. Y. P. Singh<br/>
            Principal<br/>
            Polytechnic Campus, Principal Quarter<br/>
            Tili road Sagar (M.P.)
          </p>
        </div>

        <div className="sahodra-img-col" >
          <img 
            src="/Y. P. Singh (1).png"
            alt="Principal Dr. Y. P. Singh"
          />
        </div>
      </div>
    </div>
  );
};

export default Principal; 