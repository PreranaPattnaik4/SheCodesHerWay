
import { faqData, type FAQ } from './faq-data';

export const homeFaqData: FAQ[] = [
    faqData.find(c => c.title === 'About SheCodesHerWay')?.questions.find(q => q.question === 'What this platform is all about?'),
    faqData[0].questions[1], // What is the mission and vision of SheCodesHerWay?
    faqData.find(c => c.title === 'About Our Program (Sangini Udaan : EmpowerFly)')?.questions.find(q => q.question === 'TELL ME ABOUT THE PROGRAM THAT THIS PLATFORM OFFER'),
    faqData.find(c => c.title === 'About Our Program (Sangini Udaan : EmpowerFly)')?.questions.find(q => q.question === 'IS THIS FREE ?'),
    faqData[1].questions[2], // What are the different learning tracks available?
    faqData[1].questions[6], // Do I need to know how to code to join?
    faqData.find(c => c.title === 'Participation & Inclusivity')?.questions.find(q => q.question === 'Is this platform designed only for women, or are there opportunities and benefits available for men as well?'),
    faqData[2].questions[1], // What is an 'Early Core Contributor'?
    faqData[2].questions[2], // Are the internship and contributor roles paid?
    faqData[2].questions[7], // Will collaboration lead to a paid job?
    faqData[3].questions[0], // What is the EmpowerFly Assistant?
    faqData[3].questions[1], // What is the Executive Summary Generator?
    faqData[3].questions[7], // Why are some AI tools marked as 'Coming Soon'?
    faqData[5].questions[0], // What personal information do you collect?
    faqData[5].questions[2], // Is my information shared with third parties?
    faqData[6].questions[3], // Will completing courses on SheCodesHerWay help me earn a degree?
    faq.find(c => c.title === 'Participation & Inclusivity')?.questions.find(q => q.question === 'Is this platform designed only for women, or are there opportunities and benefits available for men as well?'),
].filter(Boolean) as FAQ[];
