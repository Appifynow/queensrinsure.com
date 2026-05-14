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

interface Provider {name: string, logo: string}