import drew from '../assests/images/drew.mcmillan.jpg';
import dq from '../assests/images/david_queen_sr.jpg';
export const agents: Agent[] = [
  {
    id: 1,
    name: 'Drewsilla McMillan',
    photo: drew,
    title: 'Senior Insurance Advisor',
    phone: '9046109597',
    email: 'drewmc4rhgroup@gmail.com',
    specialty: 'Medicare Advantage, Medicare Supplements, Dental & Vision, Hospital Indemnity, Short Term Home Health',
    states: ['Georgia', 'New York'],
    calLink: 'david-queen-jr',
  },
  {
    id: 2,
    name: 'David Queen Sr.',
    photo: dq,
    title: 'Insurance Advisor',
    phone: '6097429803',
    email: 'queensrinsure@outlook.com',
    specialty: 'Medicare, Final Expenses, Dental & Vision, Hospital Indemnity',
    states: ['Georgia'],
    calLink: 'dqueensr',
  },
  {
    id: 3,
    name: 'Khalil Abdul-Kareem',
    photo: 'https://images.unsplash.com/photo-1718209881007-c0ecdfc00f9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    title: 'Insurance Advisor',
    phone: '9122227035',
    email: 'Khalilcontact786@gmail.com',
    specialty: 'Medicare Advantage, Medicare Supplements',
    states: [ 'Georgia'],
    calLink: 'khalil-abdul-kareem',
  }
];

export const events = {
  'video': 'zoom-meet-with-agent',
  'phone': 'phone-call',
  'office': 'office-visit',
}