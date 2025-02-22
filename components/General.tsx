import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "What is Inqube Startup Accelerator?",
    answer: "Inqube is a startup accelerator program designed to support early-stage entrepreneurs with mentorship, funding, and resources.",
  },
  {
    question: "How does it work?",
    answer: "Startups apply, get selected, and participate in a structured program involving mentorship, workshops, and funding opportunities.",
  },
  {
    question: "Am I eligible to join Inqube Accelerator?",
    answer: "Eligibility depends on the stage of your startup and your commitment. Both individuals and teams can apply.",
  },
  {
    question: "My startup is not based in India. Can I still apply?",
    answer: "Yes, international startups can apply, but they should have some connection to the India market or be willing to expand there.",
  },
  {
    question: "I am not a Indian citizen, and I don`t have a India partner. Am I eligible?",
    answer: "Yes, Inqube is open to all entrepreneurs regardless of nationality.",
  },
  {
    question: "I have received an investment already. Am I still eligible?",
    answer: "Yes! We accept both early and late-stage startups.",
  },
  {
    question: "Will the program be in-person or virtual?",
    answer: "Inqube offers a hybrid model, with both virtual and in-person events.",
  },
  {
    question: "What is the commitment required from the program?",
    answer: "Startups should actively participate in workshops, mentorship, and pitch sessions.",
  },
  {
    question: "What is the age limit for applicants?",
    answer: "There is no strict age limit, but applicants should be capable of running a startup full-time.",
  },
  {
    question: "What do we look for?",
    answer: "Inqube looks for innovative, scalable, and high-impact startups with dedicated teams.",
  },
  {
    question: "What are the entry requirements?",
    answer: "Startups should have a solid idea, early traction, and a committed team.",
  },
  {
    question: "What do accepted teams receive?",
    answer: "Selected startups receive funding, mentorship, networking opportunities, and access to investors.",
  },
];

const General = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto max-w-6xl px-10 pb-20">
      <h1 className="mb-5 text-center text-4xl font-semibold text-[#76b900] md:text-5xl">
        Unlocking Answers
      </h1>
      <h2 className="mb-10 text-center text-xl font-medium text-[#858585]">
        Your Essential FAQ Companion
      </h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {faqData.map((faq, index) => (
          <div key={index} className="border-t border-gray-300">
            <button
              className="flex w-full items-center justify-between py-4 text-left text-lg font-medium text-white hover:text-orange-500"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openIndex === index && (
              <motion.div
                className="px-4 pb-4 text-[#858585]"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                {faq.answer}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default General;
