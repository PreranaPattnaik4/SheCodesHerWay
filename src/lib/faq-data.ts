
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
                answer: "SheCodesHerWay was founded by Prerana Kailash Pattnaik. As the founder and developer, she built more than just a platform—she created a community and a vision for women to discover their strength and skills. Her leadership blends compassion, courage, and a deep commitment to empowering women to pursue their dreams fearlessly.",
            },
            {
                question: "What is the founder's role in platform development?",
                answer: "As the Head of Platform Development, Prerana is the sole developer responsible for the platform's architecture, full-stack development, and AI integration, shaping its technical vision and execution."
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
                question: "Who is the 'Sangini Udaan : EmpowerFly' program for?",
                answer: "Sangini Udaan : EmpowerFly is our flagship empowerment and mentorship program designed for any woman who wants to grow. Whether you're interested in tech, starting a business, exploring your creativity, or developing soft skills, there's a path for you.",
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
                question: "Is prior experience required to enroll in a specific track?",
                answer: "No, prior experience is not a prerequisite for any of our tracks. The Sangini Udaan : EmpowerFly program is designed to welcome learners at all stages, from complete beginners to those with some experience. Our curriculum is structured to build foundational knowledge from the ground up in each domain."
            },
            {
                question: "Can someone with a non-technical background join a technical track like 'Women in Tech'?",
                answer: "Absolutely. We encourage individuals from all backgrounds to explore any track that aligns with their interests. Our technical tracks are designed to be beginner-friendly, and our 'Vibe Coding' approach helps demystify complex topics, making it easier for anyone to start learning tech skills."
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
        title: "Careers & Opportunities",
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
                question: "What is the duration of the collaboration?",
                answer: "The initial collaboration period is 3 months. A second 3-month phase is possible, subject to reapplication and selection based on performance. High-performing contributors may continue for up to 1 year. Contributors may choose to conclude participation at any time.",
            },
            {
                question: "How should I represent my role at SheCodesHerWay?",
                answer: "You should identify yourself as a 'Contributor' or 'Intern.' This is an unpaid, learning-focused engagement, not a formal team role. You can tell others, 'I joined as a Contributor,' to accurately reflect your position.",
            },
            {
                question: "Will collaboration lead to a paid job?",
                answer: "While paid roles are not guaranteed, high-performing contributors may be considered for a paid part-time role after 1 year of collaboration, depending on company growth, funding, and a formal interview process. As one might say, 'If I work well, I may get a chance to become a permanent member.'",
            },
            {
                question: "What is the legal status of a collaborator?",
                answer: "Collaboration is voluntary and does not create an employer-employee, contractor, or formal internship relationship. It is a non-binding engagement focused on learning and impact.",
            },
            {
                question: "What benefits do contributors and interns receive?",
                answer: "Contributors receive recognition, including tiered certificates (Diamond for 3 months, Platinum for 6 months) and a 'Top Contributor' spotlight for exceptional work. You also gain hands-on experience for your portfolio and LinkedIn profile.",
            },
        ]
    },
    {
        title: "How to Use EmpowerFly AI Coach & Tools",
        questions: [
            {
                question: "What is the EmpowerFly Assistant?",
                answer: "The EmpowerFly Assistant is your personal AI guide, available 24/7. You can ask it questions about our programs, get career advice, or brainstorm ideas. You can access it through the chat widget on our site or on its dedicated page."
            },
            {
                question: "What is the Executive Summary Generator?",
                answer: "This is an AI tool designed to help you create a concise, professional executive summary for a startup pitch deck. Simply fill in the details about your startup, and the AI will generate a compelling summary for you. It's a great way to structure your ideas for maximum impact."
            },
            {
                question: "What is the EmpowerFly AI Coach?",
                answer: "The EmpowerFly AI Coach is an upcoming agentic AI-powered coach designed to help you learn any skill through personalized, conversational lessons. It will offer interactive exercises and real-time feedback. This feature is currently in development."
            },
            {
                question: "What is the AI Image Studio?",
                answer: "The AI Image Studio is a future feature that will allow you to generate unique visuals for your projects or social media just by describing what you want to see. It will support multiple art styles and high-resolution outputs."
            },
            {
                question: "What is the CodeCanvas Assistant?",
                answer: "CodeCanvas is our upcoming AI coding partner. It's designed to help you accelerate your development process by generating code snippets, explaining complex concepts, and assisting with debugging. It's perfect for both learning and building."
            },
            {
                question: "Are the AI tools free to use?",
                answer: "Yes, our AI-powered tools, like the Executive Summary Generator and EmpowerFly Assistant, are available for all users to explore and use as part of our commitment to providing accessible resources."
            },
            {
                question: "What technology powers these AI tools?",
                answer: "All our AI features are built using Google’s advanced technology, including Google's Genkit and Gemini models. This ensures a secure, scalable, and powerful experience."
            },
            {
                question: "Why are some AI tools marked as 'Coming Soon'?",
                answer: "Our platform is currently in a prototype stage. We are actively developing and testing our advanced AI features, like the AI Coach and Image Studio, to ensure they are powerful, responsible, and ready for our community. They will be rolled out gradually."
            },
            {
                question: "How does SheCodesHerWay ensure AI is used responsibly?",
                answer: "We are committed to developing AI tools that are ethical and responsible. We design our AI to assist, not replace, human creativity and potential, with a focus on fairness, transparency, and user privacy. Responsible AI principles are a mandatory foundation in all our programs."
            },
            {
                question: "Where can I find all the available AI tools?",
                answer: "You can explore all our current and upcoming AI-powered tools on the 'AI Coaching' page. The Executive Summary Generator has its own dedicated page under 'AI Tools'."
            }
        ]
    },
    {
        title: "User Privacy Queries",
        questions: [
            {
                question: "What personal information do you collect?",
                answer: "We collect information you voluntarily provide to us, such as your name and email address, when you register for an account, apply for a program, or contact us."
            },
            {
                question: "How do you use my information?",
                answer: "We use your information to provide our services, manage your account, communicate with you, and for other business purposes such as improving our platform, all with your consent and in compliance with legal obligations."
            },
            {
                question: "Is my information shared with third parties?",
                answer: "We do not share your personal information with third parties except with your consent, to comply with laws, to provide you with our services, to protect your rights, or to fulfill business obligations."
            },
            {
                question: "How long do you keep my data?",
                answer: "We retain your personal information only for as long as it is necessary to fulfill the purposes outlined in our privacy policy, unless a longer retention period is required by law."
            },
            {
                question: "How can I access or update my personal information?",
                answer: "You can review and update your personal information, such as your name, in your user Dashboard under the 'My Profile' section."
            },
            {
                question: "How is my account secured?",
                answer: "We use Firebase Authentication to manage user accounts, which provides a secure sign-up and login system. You are responsible for keeping your password confidential."
            },
            {
                question: "Do you collect information from minors?",
                answer: "Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13."
            },
            {
                question: "What are my privacy rights?",
                answer: "You have the right to access, correct, or delete your personal information. Please contact us if you have any questions or wish to exercise these rights."
            },
            {
                question: "How will I be notified of changes to the privacy policy?",
                answer: "We may update our privacy policy from time to time. The updated version will be indicated by a 'Last updated' date, and we encourage you to review it periodically."
            },
            {
                question: "Who can I contact for privacy-related concerns?",
                answer: "If you have any questions or concerns about our privacy policy or practices, please feel free to contact us through our official contact channels."
            }
        ]
    }
];

    