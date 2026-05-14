import { MessageSquare, ChevronUp, ChevronDown, Phone, Mail } from "lucide-react";
import { useState } from "react";

export function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I contact my agent?',
      answer: 'You can reach your agent by phone, email, or by scheduling a meeting through this portal. Visit the "Your Agents" section to see your agent\'s contact information and schedule a meeting at your convenience.'
    },
    {
      question: 'What should I bring to my appointment?',
      answer: 'Please bring your current insurance cards, a list of your medications, any recent medical bills or statements, and a valid ID. If you\'re discussing changes to your policy, bring any relevant documentation.'
    },
    {
      question: 'How do I file a claim?',
      answer: 'Contact your agent directly to start the claims process. They will guide you through each step and help you gather the necessary documentation. You can also call our 24/7 claims hotline at 1-800-CLAIMS-1.'
    },
    {
      question: 'When is my premium payment due?',
      answer: 'Premium payments are typically due on the first of each month. You should have received a payment schedule when you enrolled. If you need to verify your payment date or discuss payment options, contact your agent.'
    },
    {
      question: 'Can I change my coverage?',
      answer: 'Yes, you can make changes to your coverage during the Annual Enrollment Period (October 15 - December 7) or if you experience a qualifying life event such as moving, losing other coverage, or changes in household. Contact your agent to discuss your options.'
    },
    {
      question: 'What is the Annual Enrollment Period?',
      answer: 'The Annual Enrollment Period (AEP) runs from October 15 to December 7 each year. During this time, you can make changes to your Medicare coverage, switch plans, or enroll in Medicare Advantage or Part D prescription drug coverage.'
    },
    {
      question: 'How do I update my personal information?',
      answer: 'Contact your agent to update your address, phone number, email, or other personal information. It\'s important to keep your information current so you receive important notices and communications about your coverage.'
    },
    {
      question: 'What if I need to cancel an appointment?',
      answer: 'You can cancel or reschedule your appointment by calling your agent directly. We ask that you provide at least 24 hours notice when possible. You can also schedule a new appointment through this portal at any time.'
    },
    {
      question: 'Are there any costs for meeting with my agent?',
      answer: 'No, consultations with your insurance agent are completely free. Your agent is here to help you understand your coverage and make the best decisions for your healthcare needs at no additional cost to you.'
    },
    {
      question: 'What if I have an urgent question after business hours?',
      answer: 'For urgent questions about your coverage or claims, you can call our 24/7 customer service line at 1-800-HELP-NOW. For emergencies requiring immediate medical attention, always call 911 or go to your nearest emergency room.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl shadow-xl p-12">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <MessageSquare className="w-16 h-16 text-purple-600" />
            <h2 className="text-5xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <p className="text-2xl text-gray-700">Quick answers to common questions</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-4 border-gray-200 rounded-2xl overflow-hidden hover:border-purple-300 transition-colors"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-2xl font-semibold text-gray-900 pr-4">{faq.question}</span>
                {openFAQ === index ? (
                  <ChevronUp className="w-10 h-10 text-purple-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-10 h-10 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openFAQ === index && (
                <div className="p-6 bg-purple-50 border-t-4 border-purple-200">
                  <p className="text-xl text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 border-4 border-blue-200 mt-10">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Still have questions?</h3>
          <p className="text-xl text-gray-700 mb-6">
            Can't find what you're looking for? Your agent is here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:1-800-555-0100"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xl font-semibold transition-colors"
            >
              <Phone className="w-6 h-6" />
              Call 1-800-HELP-NOW
            </a>
            <a
              href="mailto:support@healthcarenav.com"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-gray-50 text-blue-600 border-4 border-blue-600 rounded-xl text-xl font-semibold transition-colors"
            >
              <Mail className="w-6 h-6" />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}