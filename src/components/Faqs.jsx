/* This example requires Tailwind CSS v3.0+ */
const faqs = [
  {
    id: 1,
    question: "What can I create with anglez.io?",
    answer:
      "Our AI is specifically tailored to create high quality video ad scripts, hooks, shots, headlines and copy. We have also trained it to think outside the box and help you find new target markets you never knew existed.",
  },
  {
    id: 2,
    question: "What languages do you support?",
    answer:
      "We currently only support content generation in english. We would love to hear if you need other languages for your use case as we are always looking to improve our product.",
  },
  {
    id: 3,
    question: "What is your refund policy?",
    answer:
      "During your 7 day free trial, make an informed decision if anglez.io meets the hype. If you decide to continue after your free trial, you'll be put on the professional plan. You can always cancel. If you ever need help with your account, simply email support@anglez.io.",
  },
  {
    id: 4,
    question: "What happens if I reach my credit limit?",
    answer:
      "If you reach your credit limit you will no longer be able to generate content. However, if you need to continue to generate content, you can buy additional credits for a one off price to top up you account in a billing period.",
  },
  {
    id: 5,
    question: "What is a credit?",
    answer:
      "Credits are how we measure usage. You can think of credits as pieces of words where around 1000 credits is 500 words.",
  },
  {
    id: 6,
    question: "Can I get a demo of the product?",
    answer:
      "Absolutely! If you're curious to see how the product works before you create an account, just get in touch via email (support@anglez.io).",
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
