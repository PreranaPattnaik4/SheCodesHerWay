
import React from 'react';

export interface FAQ {
    question: string;
    answer: React.ReactNode;
}

export const faqData: FAQ[] = [
    {
        question: "What is SheCodesHerWay?",
        answer: "SheCodesHerWay is a women-led startup dedicated to empowering women with digital skills, mentorship, and leadership training. Our mission is to help women build their path, lead their way, and leave their mark in the world.",
    },
    {
        question: "Who is the 'Sangini Udaan' program for?",
        answer: "Sangini Udaan is our flagship empowerment and mentorship program designed for any woman who wants to grow. Whether you're interested in tech, starting a business, exploring your creativity, or developing soft skills, there's a path for you.",
    },
    {
        question: "Is the SheCodesHerWay internship a paid program?",
        answer: "No, our internship is an unpaid, training-based program. We don't offer a stipend because our primary focus is on investing in your growth by providing hands-on experience, dedicated mentorship, and valuable learning opportunities.",
    },
    {
        question: "How can I become a mentor or partner with SheCodesHerWay?",
        answer: "We are always looking for passionate professionals, educators, and organizations to join our mission. If you're interested in becoming a mentor or partnering with us, please visit our 'Partner with Us' page to learn more and apply.",
    },
    {
        question: "What kind of skills can I learn through your programs?",
        answer: "We offer a wide range of learning tracks, including coding, web development, AI basics, graphic design, content creation, entrepreneurship, and leadership. We also focus heavily on soft skills like confidence, communication, and emotional intelligence.",
    },
    {
        question: "Do I need any prior experience to join?",
        answer: "Not at all! Our programs are designed for women at all stages of their journey, from complete beginners to those looking to advance their careers. We welcome students, learners, and women restarting their careers.",
    }
];
