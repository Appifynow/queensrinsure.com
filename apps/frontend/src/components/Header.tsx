import { Calendar, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Facebook  from '../assests/images/Facebook_Logo_Primary.png'

export const Header: React.FC = () => {

  const location = useLocation();
    return (
        <>
      <header className=" flex bg-white shadow-lg border-b-4 border-blue-600">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-4xl font-bold text-gray-900 text-center">Benefit Resolutions</h1>
        </div>
        <div className="absolute right-6 top-6">
           <a href="https://www.facebook.com/BenefitResolutions" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"><img style={{ height: '40px'}} src={Facebook} alt="follow benefit resolutions on Facebook" /></a> 
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b-2 border-gray-200 sticky top-0 z-10 shadow-md">
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
              to="/schedule"
              className={`flex-1 py-5 px-6 rounded-xl text-2xl font-semibold transition-all flex items-center justify-center gap-3 ${
                location.pathname === '/schedule'
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Calendar className="w-7 h-7" />
              Schedule Meeting
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
      </>
    );
}