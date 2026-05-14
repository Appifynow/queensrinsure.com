import { useState, useEffect } from 'react';
import { Calendar, Phone, Mail, MessageSquare, Clock, CheckCircle, ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';


// Agent data with photos and states
interface Agent {
  id: number;
  name: string;
  photo: string;
  title: string;
  phone: string;
  email: string;
  specialty: string;
  states: string[];
}
const agents: Agent[] = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    photo: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    title: 'Senior Insurance Advisor',
    phone: '1-800-555-0101',
    email: 'sarah.mitchell@healthcarenav.com',
    specialty: 'Medicare & Life Insurance',
    states: ['California', 'Oregon', 'Washington', 'Nevada']
  },
  {
    id: 2,
    name: 'Robert Chen',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    title: 'Insurance Specialist',
    phone: '1-800-555-0102',
    email: 'robert.chen@healthcarenav.com',
    specialty: 'Medicare Advantage Plans',
    states: ['Texas', 'Arizona', 'New Mexico', 'Oklahoma']
  },
  {
    id: 3,
    name: 'Michael Thompson',
    photo: 'https://images.unsplash.com/photo-1718209881007-c0ecdfc00f9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    title: 'Client Services Manager',
    phone: '1-800-555-0103',
    email: 'michael.thompson@healthcarenav.com',
    specialty: 'Life Insurance & Estate Planning',
    states: ['Florida', 'Georgia', 'North Carolina', 'South Carolina']
  }
];

interface Provider {name: string, logo: string}
// Provider logos/names for carousel
const providers: Provider[] = [
  { name: 'Blue Cross Blue Shield', logo: 'bg-blue-600' },
  { name: 'Aetna', logo: 'bg-purple-600' },
  { name: 'UnitedHealthcare', logo: 'bg-blue-700' },
  { name: 'Humana', logo: 'bg-green-600' },
  { name: 'Cigna', logo: 'bg-orange-600' },
  { name: 'Kaiser Permanente', logo: 'bg-red-600' },
  { name: 'Anthem', logo: 'bg-indigo-600' },
  { name: 'Mutual of Omaha', logo: 'bg-teal-600' }
];

export default function App() {
  const [activeSection, setActiveSection] = useState<'home' | 'schedule' | 'faq'>('home');
  const [selectedAgent, setSelectedAgent] = useState(agents[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col">
      {/* Header - Smaller */}
      <header className="bg-white shadow-lg border-b-4 border-blue-600">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-4xl font-bold text-gray-900 text-center">HealthCare Navigator</h1>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b-2 border-gray-200 sticky top-0 z-10 shadow-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-4 py-4">
            <button
              onClick={() => setActiveSection('home')}
              className={`flex-1 py-5 px-6 rounded-xl text-2xl font-semibold transition-all ${
                activeSection === 'home'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Your Agents
            </button>
            <button
              onClick={() => setActiveSection('schedule')}
              className={`flex-1 py-5 px-6 rounded-xl text-2xl font-semibold transition-all flex items-center justify-center gap-3 ${
                activeSection === 'schedule'
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Calendar className="w-7 h-7" />
              Schedule Meeting
            </button>
            <button
              onClick={() => setActiveSection('faq')}
              className={`flex-1 py-5 px-6 rounded-xl text-2xl font-semibold transition-all flex items-center justify-center gap-3 ${
                activeSection === 'faq'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <MessageSquare className="w-7 h-7" />
              FAQs
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-6 py-12 w-full">
        {activeSection === 'home' && <AgentsSection agents={agents} onSchedule={() => setActiveSection('schedule')} />}
        {activeSection === 'schedule' && (
          <ScheduleSection
            agents={agents}
            selectedAgent={selectedAgent}
            setSelectedAgent={setSelectedAgent}
          />
        )}
        {activeSection === 'faq' && <FAQSection />}
      </main>

      {/* Footer with Provider Carousel */}
      <ProviderCarousel providers={providers} />
    </div>
  );
}

function ProviderCarousel({ providers }: { providers: Provider[] }) {
 
  return (
    <footer className="bg-white border-t-4 border-blue-600 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
          We Work With Leading Insurance Providers
        </h3>
        <div className="provider-carousel">
          <Swiper>
            {providers.map((provider, index) => (
              <SwiperSlide key={index}>
                <div className={` text-white rounded-2xl p-8 text-center shadow-lg`}>
                  <p className="text-xl font-bold">{provider.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </footer>
  );
}

function AgentsSection({ agents, onSchedule }: { agents: Agent[]; onSchedule: () => void }) {
  return (
    <div className="space-y-10">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-bold text-gray-900">Your Insurance Advisors</h2>
        <p className="text-2xl text-gray-700">Meet the team dedicated to helping you</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {agents.map((agent) => (
          <div key={agent.id} className="bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-transparent hover:border-blue-500 transition-all">
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img
                src={agent.photo}
                alt={agent.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 space-y-4">
              <div>
                <h3 className="text-3xl font-bold text-gray-900">{agent.name}</h3>
                <p className="text-xl text-blue-600 font-semibold mt-1">{agent.title}</p>
                <p className="text-lg text-gray-600 mt-2">{agent.specialty}</p>
              </div>

              <div className="pt-3 border-t-2 border-gray-200">
                <div className="flex items-start gap-2 mb-3">
                  <MapPin className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-lg font-semibold text-gray-900 mb-1">Licensed in:</p>
                    <p className="text-lg text-gray-700">{agent.states.join(', ')}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t-2 border-gray-200">
                <a
                  href={`tel:${agent.phone}`}
                  className="flex items-center gap-3 text-xl text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Phone className="w-6 h-6" />
                  <span>{agent.phone}</span>
                </a>
                <a
                  href={`mailto:${agent.email}`}
                  className="flex items-center gap-3 text-xl text-gray-700 hover:text-blue-600 transition-colors break-all"
                >
                  <Mail className="w-6 h-6" />
                  <span>{agent.email}</span>
                </a>
              </div>

              <button
                onClick={onSchedule}
                className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl px-6 py-4 text-xl font-semibold transition-colors flex items-center justify-center gap-3 mt-4"
              >
                <Calendar className="w-6 h-6" />
                Schedule Meeting
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScheduleSection({
  agents,
  selectedAgent,
  setSelectedAgent
}: {
  agents: Agent[];
  selectedAgent: Agent;
  setSelectedAgent: (agent: Agent) => void;
}) {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [meetingType, setMeetingType] = useState<'phone' | 'video' | 'office'>('phone');
  const [notes, setNotes] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);

  const availableTimes = [
    '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsConfirmed(true);
    setTimeout(() => setIsConfirmed(false), 5000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl shadow-xl p-12">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Calendar className="w-16 h-16 text-green-600" />
            <h2 className="text-5xl font-bold text-gray-900">Schedule a Meeting</h2>
          </div>
          <p className="text-2xl text-gray-700">Book time with your insurance advisor</p>
        </div>

        {isConfirmed && (
          <div className="bg-green-50 border-4 border-green-500 rounded-2xl p-8 mb-8 flex items-center gap-4">
            <CheckCircle className="w-12 h-12 text-green-600 flex-shrink-0" />
            <div>
              <p className="text-2xl font-bold text-green-900">Meeting Confirmed!</p>
              <p className="text-xl text-green-800 mt-1">
                You'll receive a confirmation email shortly.
              </p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Select Agent */}
          <div>
            <label className="block text-2xl font-semibold text-gray-900 mb-4">
              Select Your Agent
            </label>
            <div className="grid gap-4">
              {agents.map((agent) => (
                <button
                  key={agent.id}
                  type="button"
                  onClick={() => setSelectedAgent(agent)}
                  className={`flex items-center gap-6 p-6 rounded-2xl border-4 transition-all ${
                    selectedAgent.id === agent.id
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <img
                    src={agent.photo}
                    alt={agent.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div className="text-left flex-1">
                    <p className="text-2xl font-bold text-gray-900">{agent.name}</p>
                    <p className="text-xl text-gray-600">{agent.title}</p>
                    <p className="text-lg text-gray-500 mt-1">{agent.states.join(', ')}</p>
                  </div>
                  {selectedAgent.id === agent.id && (
                    <CheckCircle className="w-10 h-10 text-blue-600" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Meeting Type */}
          <div>
            <label className="block text-2xl font-semibold text-gray-900 mb-4">
              Meeting Type
            </label>
            <div className="grid md:grid-cols-3 gap-4">
              <button
                type="button"
                onClick={() => setMeetingType('phone')}
                className={`p-6 rounded-2xl border-4 text-xl font-semibold transition-all ${
                  meetingType === 'phone'
                    ? 'border-blue-600 bg-blue-50 text-blue-900'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                }`}
              >
                <Phone className="w-10 h-10 mx-auto mb-2" />
                Phone Call
              </button>
              <button
                type="button"
                onClick={() => setMeetingType('video')}
                className={`p-6 rounded-2xl border-4 text-xl font-semibold transition-all ${
                  meetingType === 'video'
                    ? 'border-blue-600 bg-blue-50 text-blue-900'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                }`}
              >
                <MessageSquare className="w-10 h-10 mx-auto mb-2" />
                Video Call
              </button>
              <button
                type="button"
                onClick={() => setMeetingType('office')}
                className={`p-6 rounded-2xl border-4 text-xl font-semibold transition-all ${
                  meetingType === 'office'
                    ? 'border-blue-600 bg-blue-50 text-blue-900'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                }`}
              >
                <Calendar className="w-10 h-10 mx-auto mb-2" />
                Office Visit
              </button>
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="block text-2xl font-semibold text-gray-900 mb-4">
              Select Date
            </label>
            <input
              type="date"
              required
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-6 py-5 text-2xl border-4 border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Time */}
          <div>
            <label className="block text-2xl font-semibold text-gray-900 mb-4">
              Select Time
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {availableTimes.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  className={`p-5 rounded-xl border-4 text-xl font-semibold transition-all ${
                    selectedTime === time
                      ? 'border-green-600 bg-green-50 text-green-900'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Clock className="w-6 h-6 mx-auto mb-1" />
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-2xl font-semibold text-gray-900 mb-4">
              What would you like to discuss? (Optional)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={5}
              className="w-full px-6 py-5 text-2xl border-4 border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Policy review, claims questions, coverage changes, etc."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!selectedDate || !selectedTime}
            className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-2xl px-8 py-6 text-3xl font-bold transition-colors flex items-center justify-center gap-4"
          >
            <CheckCircle className="w-10 h-10" />
            Confirm Meeting
          </button>
        </form>
      </div>
    </div>
  );
}

function FAQSection() {
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
