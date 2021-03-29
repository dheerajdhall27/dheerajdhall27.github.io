import React from 'react';
import EducationCard from './EducationCard';
import './Education.css'


const Education = () => {

    const education = [
        {
            university_name : ["Northeastern University"],
            college_name: ["Khoury College of Computer Sciences"],
            desc: ["Candidate for a Master of Science in Computer Science"]
        },
        {
            university_name : ["Jawaharlal Nehru Architecture and Fine Arts University"],
            college_name: ["Backstage Pass Institute of technology"],
            desc: ["Bachelor of Technology in Computer Science and Game Development"]
        },
        {
            university_name : ["Osmania University"],
            college_name: ["St. Mary's"],
            desc: ["Bachelor of Science in Computer Science"]
        }
    ]    

    return(
        <div>
            <p className="alma-mater">My Alma Mater</p>
            <div className="education">
                {
                    education.map((data, index) => {
                        return <EducationCard key={index} 
                                        university_name={data.university_name}
                                        college_name={data.college_name}
                                        desc={data.desc}/>
                    })
                }
            </div>
        </div>
    );
}

export default Education;