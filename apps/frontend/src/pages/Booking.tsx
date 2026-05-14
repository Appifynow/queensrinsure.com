import { Calendar, CheckCircle, Phone, MessageSquare, Clock } from "lucide-react";
import { useState } from "react";

export function ScheduleSection({ agents }: { agents: Agent[] }) {
  const [selectedAgent, setSelectedAgent] = useState<Agent>(agents[0]);
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