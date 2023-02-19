/* This example requires Tailwind CSS v3.0+ */
const faqs = [
  {
    id: 1,
    question: "What can I create with anglez.io?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 2,
    question: "What languages do you support?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 3,
    question: "What is a credit?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 4,
    question: "What happens if I reach my credit limit?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 5,
    question: "What is your refund policy?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 6,
    question: "Is the content anglez.io generates original?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];

export function Faqs() {
  return (
    <section id="faqs" aria-label="FAQs for anglez">
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">
              FAQs
            </h2>
            <h2 className="text-3xl font-bold leading-10 tracking-tight text-gray-900 sm:text-4xl">
              You have questions?
              <br />
              We've got answers.
            </h2>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Have a different question and can’t find the answer you’re looking
              for? Reach out to our support team by{" "}
              <a
                href="mailto:support@anglez.io"
                className="font-semibold text-blue-600 hover:text-blue-500"
              >
                sending us an email
              </a>{" "}
              or using the chat in the bottom right, and we’ll get back to you
              as soon as we can.
            </p>
          </div>
          <div className="mt-20">
            <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
