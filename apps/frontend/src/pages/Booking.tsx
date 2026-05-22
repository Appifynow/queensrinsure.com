import { Calendar, CheckCircle, Phone, MessageSquare, Clock, ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Calendar as Scheduler } from "../components/Calendar"; 
import {  useNavigate, useSearchParams } from "react-router-dom";
import { events } from "../data/agents";

export function ScheduleSection({ agents }: { agents: Agent[] }) {
  const [query] = useSearchParams()
  const agentId = query.get('agentId')
  const [selectedAgent] = useState<Agent>(agents[Number(agentId)] || agents[0]);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [meetingType, setMeetingType] = useState<"phone" | "video" | "office" | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('agentId from query:', agentId);
    if (!agentId) {
     navigate('/agents');
    }
  }, [])

  return (
    <main className="max-w-4xl mx-auto flex-1 mx-auto px-6 py-12 w-full">
       <div className="bg-white rounded-3xl shadow-xl p-12">
         {/* Meeting Type */}
          { !meetingType && (<div>
            <h2 className="block text-2xl font-semibold text-gray-900 mb-4">
              How would you like to connect with {selectedAgent.name}
            </h2>
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
              <span></span>
              <span></span>
              <a style={{ padding: '20px', fontWeight: 'bold', color: 'blue', textDecoration: 'underline' }} href="/agents">Choose a different agent</a>
            </div>
            
          </div>)}
        {meetingType && ( <>
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-4 mb-4">
              <button
              title="change appointment type"
                onClick={() => setMeetingType(null)}
                className="p-2 rounded-full border-2 border-gray-300 hover:border-gray-400"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <Calendar className="w-16 h-16 text-green-600" />
              <h2 className="text-5xl font-bold text-gray-900">Schedule a Meeting</h2>
              </div>
          <p className="text-2xl text-gray-700">Book a {meetingType} appointment with {selectedAgent.name}</p>
          <img src={selectedAgent.photo} alt={selectedAgent.name} className="w-32 h-32 rounded-full mx-auto mt-6 object-cover border-4 border-gray-200" />
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

        {!isConfirmed && (
          <Scheduler calLink={`https://cal.com/${selectedAgent.calLink}/${events[meetingType]}`} onConfirm={() => setIsConfirmed(true)} />
        )}
      </>)}
      </div>
    </main>
  );
}