import React, { useState } from 'react';
import contactModelImg from '../assets/contact-image.png';

const OFFICES = [
  {
    title: 'PRESS',
    company: 'ICECART C&T CORPORATION (PARIS OFFICE)',
    addressLine1: 'Centro Dizentaphole, Strada 2',
    addressLine2: 'Paris, France',
  },
  {
    title: 'SALES',
    company: 'ICECART C&T CORPORATION (NEW YORK OFFICE)',
    addressLine1: 'Centro Dizentaphole, Strada 2',
    addressLine2: 'New York, USA',
  },
  {
    title: 'CUSTOMER SERVICE',
    company: 'ICECART C&T CORPORATION (PARIS OFFICE)',
    addressLine1: 'Centro Dizentaphole, Strada 2',
    addressLine2: 'Paris, France',
  },
  {
    title: 'HEAD OFFICE',
    company: 'ICECART C&T CORPORATION (HEAD OFFICE)',
    addressLine1: 'Centro Dizentaphole, Strada 2',
    addressLine2: 'New York, USA',
  },
];

const FAQS = [
  {
    question: 'How can I reach your sales team?',
    answer: 'You can contact our sales team at the New York office.',
  },
  {
    question: 'What are your business hours?',
    answer: 'Our business hours are from 9 AM to 6 PM, Monday through Friday.',
  },
  {
    question: 'How can I get in touch with your customer service team?',
    answer: 'You can reach our customer service team at the Paris office.',
  },
];

const ContactPage = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <main className="min-h-screen bg-[#f5f4f0] text-[#111111] selection:bg-black selection:text-white">
      <div className="mx-auto max-w-[1440px] px-6 py-12 md:px-14 md:py-16">

        <section className="relative">
          <h1 className="relative z-20 w-full text-[12vw] font-normal uppercase leading-[0.9] tracking-[-0.04em]">
            CONTACT{' '}
            <span className="inline-block bg-gradient-to-b from-[#111111] via-[#555555] to-[#bbbbbb] bg-clip-text text-transparent">
              US
            </span>
          </h1>


          <img
            src={contactModelImg}
            alt="Icecart model holding an ice cream cone"
            className="pointer-events-none z-10 mt-8 h-[calc(100vh+50vh)] w-full object-contain md:absolute md:-top-10 md:right-0 md:mt-0 md:w-[42%] lg:w-[38%]"
          />

          {/* Intro + Offices Grid */}
          <div className="relative z-20 mt-10 grid grid-cols-1 gap-10 md:mt-14 md:max-w-[62%] md:grid-cols-12 md:gap-8">
            <p className=" leading-relaxed md:col-span-5">
              For any inquiries, collaborations, or just to say hello, we&apos;d
              love to hear from you. Reach out and let&apos;s connect.
            </p>

            <div className="flex flex-col gap-8 md:col-span-7">
              {OFFICES.map((office) => (
                <div key={office.title} className="space-y-1">
                  <h2 className="text-xl mb-2 font-semibold uppercase text-[#111111]">
                    {office.title}
                  </h2>
                  <p className="text-base! uppercase leading-relaxed">
                    {office.company}
                  </p>
                  <p className="text-base! leading-relaxed">
                    {office.addressLine1}
                  </p>
                  <p className="text-base! leading-relaxed">
                    {office.addressLine2}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-20 mt-20 grid grid-cols-1 gap-8 pt-6 md:mt-28 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <h2 className="text-2xl! font-normal uppercase leading-[0.95] tracking-[-0.03em] text-[#111111] md:text-[42px]">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>

          <div className="divide-y divide-[#d8d6d0] border-t border-b border-[#d8d6d0] md:col-span-7">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={faq.question} className="py-4">
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="cursor-pointer flex w-full items-center justify-between gap-4 text-left font-medium text-[#111111]"
                  >
                    <span>{faq.question}</span>
                    <span className="text-base leading-none text-[#555555]">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}
                  >
                    <div className="overflow-hidden">
                      <p className="mt-2.5 pr-6 leading-relaxed text-[#555555]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ContactPage;