import drew from '../assests/images/drew.mcmillan.jpg';
import dq from '../assests/images/david_queen_sr.jpg';
export const agents: Agent[] = [
  {
    id: 1,
    name: 'Drewsilla Mcmillan',
    photo: drew,
    title: 'Senior Insurance Advisor',
    phone: '1-800-555-0101',
    email: 'd.mcmillan@healthcarenav.com',
    specialty: 'Medicare & Life Insurance',
    states: ['California', 'Oregon', 'Washington',]
  },
  {
    id: 2,
    name: 'David Queen Sr.',
    photo: dq,
    title: 'Insurance Specialist',
    phone: '6097429803',
    email: 'queensrinsure@outlook.com',
    specialty: 'Medicare, Final Expenses',
    states: ['Georgia']
  },
  {
    id: 3,
    name: 'Khalid Kareem',
    photo: 'https://images.unsplash.com/photo-1718209881007-c0ecdfc00f9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    title: 'Client Services Manager',
    phone: '1-800-555-0103',
    email: 'khalid.kareem@healthcarenav.com',
    specialty: 'Life Insurance & Estate Planning',
    states: ['Florida', 'Georgia', 'North Carolina', 'South Carolina']
  }
];