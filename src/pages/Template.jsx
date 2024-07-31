import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader';
import TemplateCardContainer from '../components/TemplateCardContainer';
import ToggleButton from '../components/ToggleButton';

const Template = ({ setIsHomePage }) => {
  const [isToggled, setIsToggled] = useState(false);



  useEffect(() => {
    setIsHomePage(false);
    return () => setIsHomePage(true); // Reset when component unmounts
  }, [setIsHomePage]);

  const mailTemplates = [
    {
      "title": "Application for Fresher Role",
      "description": "Dear [Hiring Manager name], \n I am writing to express my keen interest in the [Job title] position advertised on [Platform where you saw the job]. As a recent graduate with a degree in [Your degree] from [University name], I possess a strong foundation in [Relevant skills]. \n In my studies, I have gained experience in [Mention relevant coursework or projects]. I am a highly motivated and quick learner, eager to contribute to a dynamic team environment. \n My resume is attached for your review. I am available for an interview at your earliest convenience. Thank you for your time and consideration. \n Sincerely, [Your name]"
    },
    {
      "title": "MERN Stack Internship Application",
      "description": "Dear [Hiring Manager name], \n I am writing to apply for the MERN Stack Internship opportunity at [Company name]. I am a highly motivated [Year] year student at [University name] with a passion for web development. \n I have a strong understanding of MERN stack technologies, including [List relevant skills: MongoDB, Express.js, React.js, Node.js]. During my studies, I have built [Mention relevant projects] which demonstrate my ability to [Highlight key skills: design, develop, deploy web applications]. \n I am eager to learn and contribute to a real-world development environment. My resume is attached, outlining my skills and experience in more detail. \n Thank you for considering my application. I am available for interview at your earliest convenience. \n Sincerely, [Your name]"
    },
    {
      "title": "Inquiry about Job Openings",
      "description": "Dear [Recruiter name], \n I am writing to express my interest in potential job opportunities at [Company name]. I am a highly skilled [Your job title] with [Number] years of experience in [Your industry]. \n In my previous role at [Previous company name], I successfully [Highlight key achievements]. I am proficient in [List relevant skills] and possess a strong understanding of [Mention relevant industry knowledge]. \n I am particularly interested in roles related to [Areas of interest within the company]. My resume is attached for your reference. \n I would be grateful for the opportunity to discuss my qualifications further and learn more about potential openings at your company. Thank you for your time and consideration. \n Sincerely, [Your name]"
    },
    {
      "title": "Sending Resume for Specific Role",
      "description": "Dear [Hiring Manager name], \n I am writing to submit my application for the [Job title] position currently advertised on [Platform where you saw the job]. With [Number] years of experience in [Your industry], I possess a strong track record of success in [Highlight relevant accomplishments]. \n My skills and experience in [List relevant skills] make me a perfect fit for the requirements outlined in the job description. I am particularly interested in [Mention specific aspects of the job that appeal to you]. \n My resume is attached, providing a detailed overview of my qualifications. I am confident that I can make a valuable contribution to your team. \n Thank you for your time and consideration. I am available for an interview at your earliest convenience. \n Sincerely, [Your name]"
    },

  ];

  const callScripts = [
    {
      "title": "Candidate Applying for Fresher Role",
      "description": "Hi [Recruiter Name], my name is [Your Name] and I'm a recent graduate with a degree in [Your Degree]. I'm calling to inquire about any potential entry-level positions in [Industry] that might be a good fit for my skills and qualifications. I'm particularly interested in [Specific Area of Interest] and have been working on developing my skills in [Relevant Skills]."
    },
    {
      "title": "Finding Internship for MERN Stack Role",
      "description": "Hello [Recruiter Name], I'm [Your Name] and I'm a [Year] student at [University Name] majoring in [Your Major]. I'm reaching out to express my interest in potential internship opportunities focused on the MERN stack (MongoDB, Express.js, React.js, Node.js). I've been actively learning and building projects using these technologies, and I'm eager to gain practical experience in a professional setting."
    },
    {
      "title": "Asking for Vacancy from Recruiters",
      "description": "Good morning [Recruiter Name], this is [Your Name]. I came across your profile on [Platform] and was impressed with your work in [Recruiter's Area of Expertise]. I'm a highly motivated [Your Job Title] with [Number] years of experience in [Your Industry]. I'm currently seeking new opportunities and would be interested in learning more about any relevant openings at your company."
    },
    {
      "title": "Sending Resume to HR for Particular Role",
      "description": "Dear [HR Name], I hope this email finds you well. My name is [Your Name] and I'm writing to express my strong interest in the [Job Title] position advertised on [Platform]. I've attached my resume for your review and believe my skills and experience in [Relevant Skills] make me a strong candidate. I'm particularly drawn to [Specific Aspect of the Job] and would be eager to contribute to [Company Goal]."
    },
    {
      "title": "Following Up After Applying",
      "description": "Hi [Recruiter Name], this is [Your Name] following up on my application for the [Job Title] position that I submitted on [Date]. I'm very interested in this opportunity and wanted to reiterate my qualifications and enthusiasm for [Company Name]. Please let me know if there's any additional information you require or if there's a timeframe for the next steps in the hiring process. Thank you for your time and consideration."
    },
    {
      "title": "Negotiating Salary During Call",
      "description": "Thank you for offering me the [Job Title] position. I'm very excited about the opportunity and the team. I reviewed the compensation package and while I appreciate it, I was hoping to discuss a salary closer to [Your Desired Salary Range] based on my skills and experience in [Relevant Skills] and current market rates for this role. I'm confident I can make a significant contribution to your company and am flexible on other aspects of the offer.",
    },
  ];



  return (
    <div>
      <PageHeader text="words increase the chances" />
      <ToggleButton leftOption="Mail-Templates" rightOption="Call-Scripts" setIsToggled={setIsToggled} isToggled={isToggled} />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center",alignItems:"center", backgroundColor: "#f5f5f5" }} >
        {isToggled ?
          <>
       
              <h3 style={{textAlign:"center", margin:"2rem auto"}}>contact scripts:talk politely and be confident while talking</h3>
        

            <TemplateCardContainer array={callScripts} />
          </> :
          <>
            <h3 style={{textAlign:"center", margin:"2rem auto"}}>Mail templates are here</h3>
            <TemplateCardContainer array={mailTemplates} />
            <hr />
            <hr />
          </>
        }



      </div>



      {/* most effective call scripts, email templates to schedule interview, linkedin scripts section wise to ask for jobs/internships here*/}
      {/* <div className='call-scripts'></div>
      <div className='linkedin-templates'></div> */}
    </div>
  )
}

export default Template;