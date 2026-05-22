import { MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Header: React.FC = () => {

  const location = useLocation();
    return (
      <header className=" bg-gray-800 shadow-lg">
      {/* Navigation */}
      <nav className="border-b-2 sticky top-0 z-10 shadow-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-4 py-4">
            <Link
              to="/"
              className={`flex-1 py-5 px-6 rounded-xl text-2xl font-semibold transition-all ${
                location.pathname === '/'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Home
            </Link>
            <Link
              to="/agents"
              className={`flex-1 py-5 px-6 rounded-xl text-2xl font-semibold transition-all ${
                location.pathname === '/agents'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Your Agents
            </Link>

            <Link
              to="/faq"
              className={`flex-1 py-5 px-6 rounded-xl text-2xl font-semibold transition-all flex items-center justify-center gap-3 ${
                location.pathname === '/faq'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <MessageSquare className="w-7 h-7" />
              FAQs
            </Link>
          </div>
        </div>
      </nav>
      </header>
    );
}