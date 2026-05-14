import { MapPin, Phone, Mail, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { agents } from "../data/agents";


export function AgentsSection() {
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

              <Link
                to="/schedule"
                className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl px-6 py-4 text-xl font-semibold transition-colors flex items-center justify-center gap-3 mt-4"
              >
                <Calendar className="w-6 h-6" />
                Schedule Meeting
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
