
import React from 'react';

export interface FAQ {
    question: string;
    answer: React.ReactNode;
}

export interface FaqCategory {
    title: string;
    questions: FAQ[];
}

export const faqData: FaqCategory[] = [
    {
        title: "About SheCodesHerWay",
        questions: [
            {
                question: "What is SheCodesHerWay?",
                answer: "SheCodesHerWay is a women-led empowerment startup and platform founded by Prerana Kailash Pattnaik. Its mission is to help women build their path, lead their way, and leave their mark by providing resources for growth in technology, creativity, entrepreneurship, leadership, and emotional strength.",
            },
            {
                question: "What is the mission and vision of SheCodesHerWay?",
                answer: "Our mission is to empower women with digital learning, mentorship, leadership development, and emotional strength, while building a global community that celebrates creativity, collaboration, and courage. Our vision is to create a world where every woman has the resources, opportunities, and confidence to step into her fullest potential.",
            },
            {
                question: "Who is the founder of SheCodesHerWay?",
                answer: "SheCodesHerWay was founded by Prerana Kailash Pattnaik, a visionary committed to building a world where women can rise with confidence. Her leadership blends compassion, courage, and creativity.",
            },
            {
                question: "What are the core values of the organization?",
                answer: "Our core values are Empowerment (helping women find their voice), Innovation (merging technology with purpose), Community (building sisterhood), Inclusivity (welcoming every woman), and Courage (encouraging women to dream and lead).",
            },
            {
                question: "What kind of platform is SheCodesHerWay?",
                answer: "It is a purpose-driven digital platform built with Next.js, React, and Firebase. It serves as a central hub for our community, providing access to programs, resources, AI tools, and a collaborative network.",
            },
            {
                question: "What is the overall purpose of SheCodesHerWay?",
                answer: "The platform's purpose is to be a movement, a community, and a guiding light for women aspiring to grow. It provides a safe, supportive, and inspiring ecosystem where women can learn, evolve, and soar beyond limits.",
            },
            {
                question: "How does SheCodesHerWay aim to make an impact?",
                answer: "We measure our success not just in numbers, but in the confidence built, voices found, and lives transformed. Our goals for 2025-2026 include training 1,000+ women, building a network of 100+ mentors, and growing our community to over 5,000 members.",
            },
            {
                question: "Is SheCodesHerWay just for women in tech?",
                answer: "No, while we have a strong focus on technology, our platform is for any woman looking to grow in creativity, entrepreneurship, leadership, or emotional strength. We offer diverse learning paths to cater to a wide range of interests and career goals.",
            },
            {
                question: "What is the 'Sangini Network'?",
                answer: "Every woman who joins SheCodesHerWay becomes a 'Sangini'—a friend, sister, and changemaker. The Sangini Network is our community, built on the principles of women supporting women, shared learning, and collaboration over competition.",
            },
            {
                question: "The platform seems to be in an early stage. What does this mean?",
                answer: "Yes, SheCodesHerWay is currently a pre-seed stage startup. This means we are in the foundational phase of building our platform and community. Joining now makes you part of our early journey, with opportunities to contribute, shape our direction, and grow with us.",
            },
        ]
    },
    {
        title: "About Our Program (Sangini Udaan : EmpowerFly)",
        questions: [
             {
                question: "What is the 'Sangini Udaan : EmpowerFly' program?",
                answer: "It is the flagship empowerment and mentorship program of SheCodesHerWay. It's a guided journey created to help women build skills, confidence, and clarity across technology, creativity, business, and leadership.",
            },
            {
                question: "Who can apply for this program?",
                answer: "The program is open to any woman who wants to grow. This includes students, freshers, homemakers, women restarting their careers after a break, educators, social leaders, and first-time digital learners. No prior experience is required.",
            },
            {
                question: "What are the different learning tracks available?",
                answer: "We offer six main tracks: 1. Complete Journey (All-in-One), 2. Women in Tech, 3. Women in Business/Startups, 4. Creative & Content Entrepreneurs, 5. Personal & Soft Skills Growth, and 6. Non-Tech User Empowerment.",
            },
            {
                question: "What is the 'Complete Sangini Udaan : EmpowerFly Journey' track?",
                answer: "This is our all-in-one track that provides a holistic experience, bringing together technology, AI, entrepreneurship, creativity, leadership, and emotional growth into a single, unified program.",
            },
            {
                question: "Do I need to know how to code to join?",
                answer: "Not at all. We have a dedicated 'Non-Tech Users Empowerment' track for learners seeking digital confidence without coding. We also teach 'Vibe Coding', an approach that uses AI and natural language to help beginners build things without getting stuck on complex syntax.",
            },
            {
                question: "What is 'Vibe Coding'?",
                answer: "Vibe Coding is our human-centered approach to building with technology. It focuses on using AI-assistance and intuition to solve problems, allowing beginners and non-tech users to create and experiment without the fear of complex coding.",
            },
            {
                question: "How is AI integrated into the learning process?",
                answer: "AI is a core foundation across all tracks. We teach Prompt Writing as a life skill and emphasize 'Responsible AI' principles, ensuring participants learn to use AI tools ethically and effectively for learning, creativity, and problem-solving.",
            },
            {
                question: "What are the key outcomes of completing a program track?",
                answer: "Outcomes vary by track but generally include a strong portfolio of real-world projects, enhanced digital confidence, improved leadership and communication skills, and career, startup, or independent work readiness.",
            },
            {
                question: "Is there a fee to enroll in the Sangini Udaan : EmpowerFly program?",
                answer: "No, the Sangini Udaan : EmpowerFly program is offered free of charge. We believe in investing in your growth and potential without financial barriers. Our focus is on providing skills, mentorship, and opportunities.",
            },
            {
                question: "What is the structure of the program journey?",
                answer: "The program follows a structured 7-phase flow, starting with 'Foundation & Orientation', moving through 'Core Skill Learning', 'Personal Growth', 'Real-World Projects', 'Community Collaboration', 'Career Guidance', and ending with 'Certification'.",
            },
        ]
    },
    {
        title: "About Careers & Opportunities",
        questions: [
            {
                question: "What kind of opportunities are available at SheCodesHerWay?",
                answer: "We offer several ways to get involved: you can join our training-based Internship Program, become a Mentor, or collaborate with our Core Team as an 'Early Core Contributor'.",
            },
            {
                question: "What is an 'Early Core Contributor'?",
                answer: "Early Core Contributors are passionate individuals (students, freshers, or professionals) who collaborate with us on a part-time basis to build, shape, and grow the platform. It's a high-impact, voluntary role where you can take ownership of features and contribute directly to our mission during our foundational pre-seed stage.",
            },
            {
                question: "Are the internship and contributor roles paid?",
                answer: "Our internships and Early Core Contributor roles are voluntary, unpaid collaborations. They are designed for individuals motivated by gaining hands-on experience, learning, and making an impact in a pre-seed stage startup. We focus on investing in your growth through mentorship and practical projects.",
            },
            {
                question: "What are the responsibilities of an intern?",
                answer: "Interns contribute to live projects in their chosen domain (e.g., Tech, Design, Content), collaborate with team members, participate in learning sessions, and complete assigned tasks. It is a training-based, hands-on learning experience.",
            },
            {
                question: "How can I become a mentor?",
                answer: "We welcome professionals and students who are passionate about giving back. As a mentor, you would provide guidance, share your industry experience, and help mentees achieve their goals. You can apply on our 'Become a Mentor' page.",
            },
            {
                question: "What benefits do contributors and interns receive?",
                answer: "Contributors receive recognition, including tiered certificates (Diamond for 3 months, Platinum for 6 months) and a 'Top Contributor' spotlight for exceptional work. You also gain hands-on experience for your portfolio and LinkedIn profile.",
            },
            {
                question: "Is there a fixed time commitment for collaborators?",
                answer: "The initial collaboration period is 6 months, with flexible hours. We value consistency and quality of contribution. After 6 months, you may choose to continue or conclude the collaboration.",
            },
            {
                question: "Will collaboration lead to a paid job?",
                answer: "While paid roles are not guaranteed, after 1 year of collaboration, high-performing contributors may be considered for a paid part-time role, depending on company growth, funding, and a formal interview process.",
            },
            {
                question: "What is the legal status of a collaborator?",
                answer: "Collaboration is voluntary and does not create an employer-employee, contractor, or internship relationship. It is a non-binding engagement focused on learning and impact.",
            },
            {
                question: "Where can I find the full collaboration guidelines?",
                answer: "You can read the complete 'Collaboration Policy & Guidelines' on our dedicated policy page, which outlines all terms, benefits, and expectations in detail.",
            },
        ]
    }
];
