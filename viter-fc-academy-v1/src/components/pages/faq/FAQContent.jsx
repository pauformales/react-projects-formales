import React from "react";
import FAQItem from "./FAQItem";

const FAQContent = ({ selected }) => {
  const data = {
    "About Our School": [
      {
        question: "What makes you different?",
        answer: `One of our key focus areas is Social Emotional Learning (in partnership with a US Youth Leadership organization: “Growing Leaders”), mentoring, and leadership development. We believe this is something that our young people need, especially in such challenging and unprecedented global times.

We also prioritize the holistic development and wellbeing of our students, their families, and our staff and faculty, providing periodic group counseling sessions for parents and students with a PRC-registered Guidance Counselor. We provide genuinely caring support for families, and host monthly Parenting Peer Groups (PPGs), which are gatherings (online/virtual if in-person is not possible) of small groups of parents to provide moral support and academic support to one another.

FCA accepts students from diverse backgrounds, religions, and walks of life. Our primary language used for teaching and communication is the English language, except for the subjects of Filipino, Araling Panlipunan, and certain topics under Home Economics and Livelihood Education/Technology and Livelihood Education.`,
        initialOpen: true,
      },
      {
        question: "What are your Core Values?",
        answer:
          "Our core values include integrity, compassion, creativity, and excellence.",
      },
      {
        question: "What are the fees?",
        answer:
          "Tuition and fees vary by program. Please visit our Admissions page or contact us.",
      },
      {
        question: "Do you have any promotions or discounts?",
        answer:
          "Yes, we offer sibling discounts and early enrollment promotions.",
      },
      {
        question: "When do classes start for SY 2024-2025?",
        answer: "Classes will begin in August 2024. Stay tuned for updates.",
      },
    ],
    "Excellent Learning and Facilities": [
      {
        question: "What curriculum, books, and learning platform do you use?",
        answer:
          "FCA follows the K-12 Curriculum of the Department of Education, and integrates its core values. Many of our books are shipped from the USA, and modules are also printed by the school. FCA does its best to not overload its students; the amount of work assigned is very doable, as long as the student can focus during class times and is given support by his/her family. For assigning online tasks, FCA uses Google Classroom, and the Google Suite for Education. Click here for a quick introduction and tutorial.",
        initialOpen: false,
      },
      {
        question: "How do you keep classes interesting and meaningful?",
        answer:
          "We acknowledge that most of today’s students are visual learners. We make use of fun videos, colorful slides, and other interesting resources and do our best to keep students engaged. Our teachers are skilled, and attend regular training and seminars to keep their teaching strategies relevant and effective. Check out our website to see photos.",
      },
      {
        question: "Do new students need to take any entrance exams?",
        answer: "Yes, we have sports, music, arts, and various student clubs.",
      },
      {
        question: "What learning modalities do you offer?",
        answer: "Yes, we have sports, music, arts, and various student clubs.",
      },
      {
        question: "Do you accept students with special needs?",
        answer:
          "Yes, if the parent/guardian can provide a certificate, letter, or recommendation from the child’s behavioral psychologist that the student is recommended for attendance to a regular school.",
      },
      {
        question:
          "What do I need to do as a parent to prepare for this school year?",
        answer: "  Click HERE to view the needed school supplies per level.",
      },
      {
        question: "Do you offer tutorials?",
        answer:
          " Yes, we do. Our academic head aligns students with available tutors. Tutorial rate is P150.00 per hour.",
      },
      {
        question: "Do you offer transportation services?",
        answer:
          " Yes. We have transportation services , and rates depend on the pick-up and drop-off locations. Click here for current SY rates.",
      },
      {
        question: "Do you offer extracurricular activities?",
        answer: "Yes, we have sports, music, arts, and various student clubs.",
      },
    ],
    "Job Opportunities": [
      {
        question: "How can I apply for a position?",
        answer:
          "Visit our Careers page or email your resume to careers@example.com.",
        initialOpen: false,
      },
      {
        question: "What are the current job openings?",
        answer:
          "We’re currently hiring teachers for elementary and high school levels.",
      },
    ],
  };

  return (
    <div>
      <h3 className="font-semibold text-xl md:text-2xl mb-6">{selected}</h3>
      <div>
        {data[selected].map((item, idx) => (
          <FAQItem
            key={idx}
            {...item}
            initialOpen={selected === "About Our School" && idx === 0} // Only open the first item in About Our School
          />
        ))}
      </div>
    </div>
  );
};

export default FAQContent;
