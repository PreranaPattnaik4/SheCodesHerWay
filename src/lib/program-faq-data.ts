
import React from 'react';

export interface FAQ {
    question: string;
    answer: React.ReactNode;
}

export const programFaqData: FAQ[] = [
    {
        question: "Who is the 'Sangini Udaan' program for?",
        answer: "Sangini Udaan is our flagship empowerment and mentorship program designed for any woman who wants to grow. Whether you're interested in tech, starting a business, exploring your creativity, or developing soft skills, there's a path for you.",
    },
    {
        question: "What are the main benefits of joining Sangini Udaan?",
        answer: "Participants gain hands-on learning through real projects, dedicated mentorship from industry experts, an official completion certificate, access to exclusive events, and lifetime membership in our supportive 'Sangini Circle' community.",
    },
    {
        question: "Is there a fee to enroll in the Sangini Udaan program?",
        answer: "No, the Sangini Udaan program is offered free of charge. We believe in investing in your growth and potential without financial barriers. Our focus is on providing skills, mentorship, and opportunities.",
    },
    {
        question: "What is the 'All-in-One Track' and who should choose it?",
        answer: "The 'Complete Sangini Udaan Journey' is our recommended all-in-one track. It's best for women seeking holistic growth, as it combines tech learning, business building, creativity, and emotional empowerment into one comprehensive program.",
    },
    {
        question: "Can I choose a specialized path instead of the all-in-one track?",
        answer: "Yes, absolutely! You can choose a specialized path that aligns with your specific goals, such as Tech Journeys, Startup & Business, Creative & Content, or Personal & Soft Skills Growth.",
    },
    {
        question: "Do I need any prior experience to apply for Sangini Udaan?",
        answer: "Not at all! Our programs are designed for women at all stages of their journey. We welcome students, learners just starting out, and women looking to restart or pivot their careers.",
    }
];
