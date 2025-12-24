
# Golden Prompt: SheCodesHerWay Web Application

## 1. High-Level Goal

Build a complete, production-ready, and fully deployed web application for a women-led empowerment startup named **SheCodesHerWay**. The platform, called **EmpowerFly**, should serve as an inspiring, feature-rich digital hub that reflects the startup's mission: "Build Your Path, Lead Your Way, Leave Your Mark."

The application must be modern, professional, and built with a specific tech stack: Next.js (App Router), React, TypeScript, Tailwind CSS, ShadCN UI, Firebase (Authentication and Firestore), and Genkit for AI features.

---

## 2. Core Features & Pages

Implement the following pages and features:

1.  **Homepage (`/`):**
    *   **Hero Section:** A full-screen, inspiring image with the company name and mission statement. Buttons to "Explore Our Program" and "Partner with Us."
    *   **Mission & Vision:** A clear, visually appealing section detailing the startup's purpose.
    *   **What We Offer:** A summary of the key programs and services (Sangini Udaan, AI Coaching, Community).
    *   **AI-Powered Support:** A section showcasing the AI tools available (AI Coach, Summary Generator, etc.).
    *   **Program Overview (`Sangini Udaan`):** An introduction to the flagship program.
    *   **Features Showcase:** An interactive section displaying platform features like mentorship, community, internships, etc.
    *   **Join Us / Call to Action:** A prominent section for users to either enroll as a student or apply as a mentor.
    *   **Impact Goals & Roadmap:** Sections visualizing future goals and the development timeline.
    *   **FAQ:** A concise, accordion-style FAQ section.
    *   **Community Vision & Social Links.**

2.  **About Us Page (`/about`):**
    *   A narrative-driven page telling the story of SheCodesHerWay.
    *   **Hero Section:** A modern, two-card layout with a prominent "About Us" title, company details, and a hero image.
    *   Sections on **Our Purpose, Mission & Vision, and Core Values.**
    *   Detailed information about the flagship program, **Sangini Udaan : EmpowerFly**.
    *   A section dedicated to the founder, **Prerana Kailash Pattnaik**, including her bio and a note of gratitude.

3.  **Sangini Udaan Program Page (`/sangini-udaan`):**
    *   A dedicated page explaining the flagship program in detail.
    *   An inspiring hero banner.
    *   Sections on what participants will gain, the different learning paths (Tech, Startup, Creative, Soft Skills), and the program flow.
    *   A detailed FAQ section specific to the program.

4.  **Internship Page (`/internship`):**
    *   Information about the training-based, unpaid internship program.
    *   Details on domains (Tech, Design, Content), duration, and mode (online).
    *   Explanation of benefits: hands-on learning, mentorship, certificate, and community membership.

5.  **AI Coaching & Tools Hub (`/ai-coaching`):**
    *   A central page for all AI-powered tools.
    *   Feature cards for the **EmpowerFly AI Coach**, **Executive Summary Generator**, **AI Image Studio** (coming soon), and **CodeCanvas Assistant** (coming soon).
    *   A section on the commitment to responsible AI development.

6.  **AI Tools Page (`/ai-tools`):**
    *   A dedicated page hosting the **Executive Summary Generator**, built with Genkit.
    *   The generator should have input fields for startup details (name, mission, vision, etc.) and produce a professionally worded executive summary.

7.  **Chatbot Page (`/chatbot`):**
    *   A full-page, persistent chat interface for the **EmpowerFly AI Coach**.
    *   The chatbot should manage conversation history in local storage, support multiple chat sessions, and allow renaming/deleting chats.
    *   The AI should be prompted to act as a friendly guide for SheCodesHerWay.

8.  **Community Forum Page (`/community`):**
    *   A page to display a list of forum topics in a clean table format.
    *   Should show topic title, author, category, replies, and last activity. This will be static for now.

9.  **Partner with Us / Mentor Application Page (`/partner`):**
    *   A form for professionals and students to apply as mentors.
    *   The form should include fields for name, email, LinkedIn, and areas of expertise.
    *   Include a "Learn More" dialog that explains the benefits and goals of the mentorship program.

10. **Application Form (`/apply`):**
    *   A comprehensive form for users to enroll in the **Sangini Udaan** program.
    *   Fields for personal information, program path selection, and motivation.

11. **Static & Info Pages:**
    *   `Contact Us` (`/contact`)
    *   `Careers` (`/careers`)
    *   `FAQ` (`/faq`)
    *   `Privacy Policy` (`/privacy`)
    *   `Terms and Conditions` (`/terms`)
    *   `Courses` (`/courses`) - A "Coming Soon" page.

---

## 3. Branding & Style Guidelines

*   **Logo:** Implement the provided custom SVG logo consistently in the header, footer, and auth dialogs.
*   **Color Palette:**
    *   **Primary:** Muted Green (`#8FBC8F`) - for growth and learning.
    *   **Background:** Soft Beige (`#F5F5DC`) - for a warm, inviting feel.
    *   **Accent:** Blush Pink (`#FFB6C1`) - for CTAs and highlights.
    *   **Theme:** Implement this palette in `globals.css` using HSL variables for ShadCN theming.
*   **Typography:**
    *   **Headlines:** `Playfair Display` (elegant, high-end).
    *   **Body:** `PT Sans` (clean, modern).
    *   Import these fonts from Google Fonts.
*   **UI Components:** Use **ShadCN UI** components by default. Ensure a clean, modern aesthetic with rounded corners, soft shadows, and subtle animations.
*   **Icons:** Use `lucide-react` for all iconography.

### UI Element Specifications

*   **Header:**
    *   **Layout:** A sticky header that remains at the top of the page on scroll.
    *   **Style:** Should have a subtle background blur (`backdrop-blur`) and semi-transparent background (`bg-background/95`) to create a modern, layered effect.
    *   **Content:**
        *   **Left:** The brand logo, which links to the homepage.
        *   **Center (Desktop):** A navigation bar with links to key pages (Home, Our Program, AI Coaching, etc.). Links should have a `hover` effect that changes their color to `primary`.
        *   **Right:** A `UserAuth` component for sign-up/login and user profile management. A `Sheet` (slide-out menu) trigger with a `Menu` icon for mobile navigation.
    *   **Mobile View:** The desktop navigation should be hidden, and a hamburger menu icon should trigger a slide-out `Sheet` from the left, containing all navigation links.

*   **Footer:**
    *   **Layout:** A three-column layout on larger screens, stacking vertically on mobile.
    *   **Style:** Should have a `bg-secondary` background color to distinguish it from the main content.
    *   **Content:**
        *   **Column 1:** The brand logo, the mission statement, and the copyright notice.
        *   **Column 2:** A "Quick Links" section with two columns of navigation links to important pages (About, Programs, FAQ, etc.).
        *   **Column 3:** A "Get in Touch" section with the company's contact email and social media icons (Twitter, LinkedIn, GitHub).
    *   **Overall Feel:** Professional, informative, and consistent with the site's branding.

---

## 4. Technical Specifications

*   **Framework:** **Next.js 15** with the App Router.
*   **Language:** **TypeScript**.
*   **Styling:** **Tailwind CSS** with **ShadCN UI**.
*   **Backend & Database:**
    *   **Firebase Authentication:** Implement email/password sign-up and login.
    *   **Firebase Firestore:** Use Firestore to manage user data. Define a clear data structure in `docs/backend.json` for entities like `User`, `MentorApplication`, and `ForumPost`. Implement security rules to protect user data.
*   **Generative AI:**
    *   **Genkit:** Use Genkit for all AI functionality.
    *   **Executive Summary Flow:** Create a Genkit flow (`generate-executive-summary.ts`) that takes startup details and generates a summary.
    *   **AI Coach Flow:** Create a Genkit flow (`chat.ts`) that powers the chatbot, prompted to act as the "EmpowerFly AI Coach."
*   **Images:**
    *   Use `next/image` for optimization.
    *   Manage all placeholder images through `src/lib/placeholder-images.json`. Use images from `unsplash.com` and `i.postimg.cc`.

---

## 5. Final Output

The final result should be a fully functional, professionally designed, and cohesive web application that is ready for deployment. The code should be clean, well-organized, and adhere to modern React and Next.js best practices. Create a `PROJECT_REPORT.md` and `README.md` to document the project's features and setup.
