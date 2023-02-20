import React from 'react';
import resumeData from './resume_data';
import ResumeCard from './ResumeCard';

const Resume = () => {
  return (
    <>
        <section className='resume' id='resume'>
            <div className="container top">
                <div className="heading text-center">
                    <h4>3 YEARS OF EXPERIENCE</h4>
                    <h1>My Resume</h1>
                </div>
                <div className='content-section mtop d_flex'>
                    <div className="left">
                        <div className="heading">
                            <h4>2011 - 2016</h4>
                            <h1>Education Quality</h1>
                        </div>
                        <div className="content">
                        {resumeData.map((data) => {
                        if (data.category === "education") {
                            return <ResumeCard key={data.id} title={data.title} year={data.year} rate={data.rate} desc={data.desc} />
                        }
                        })}
                        </div>
                    </div>
                    <div className="left">
                        <div className="heading">
                            <h4>2011 - 2016</h4>
                            <h1>Professoional Experience</h1>
                        </div>
                        <div className="content">
                        {resumeData.map((data) => {
                        if (data.category === "experience") {
                            return <ResumeCard key={data.id} title={data.title} year={data.year} rate={data.rate} desc={data.desc} />
                        }
                        })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Resume