import { useState } from "react";
import Nava from "../../components/navigation/Nava";
import Raksha from "./Puja/August/Raksha";
import Krishna from "./Puja/August/Krishna";
import Ganesha from "./Puja/Sept.js/Ganesha";

const PoojaSteps = () => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const pujaDetails = {
    January: [{ name: 'Makar Sankranti', url:'/jan' },
      ],
    February: [{ name: 'Basant Panchami', url: '/feb' },
      ],
    March: [{ name: 'Maha Shivaratri', url: '/mar' },
      { name: 'Holi Dahan ', url: '/mar' },
      { name: 'Gangaur  ', url: '/mar' }],
    April: [{ name: 'Ram Navami ', url: '/april' },
      { name: 'Hanuman Jayanti', url: '/april' }],
    August: [{ name: 'Nag Panchami', url: '/aug' },
      { name: 'Raksha Bandhan', url: '/aug' },
      { name: 'Krishna Janmashtami', url: '/aug' }],
    September: [{ name: 'Ganesha Chaturthi', url: '/sept' },
      { name: 'Vishwakarma Puja', url: '/sept' }],
    October: [{ name: 'Navratri', url: '/oct' },
      { name: 'Karwa Chauth', url: '/oct' },
      { name: 'Dhanteras', url: '/oct' }],
    November: [{ name: 'Diwali', url: '/Nov' },
      { name: 'Govardhan', url: '/Nov' },
      { name: 'Tulsi Vivah', url: '/Nov' }],
   
  };
  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  return (
    <div>
        <Nava />
        <div className='px-7 flex justify-center font-bold text-[25px] text-[#fca400]'>
            <h1>Steps Of Different Puja's</h1>
        </div>
        <div className='w-full max-w-xs mx-auto mt-5'>
          <select
            value={selectedMonth}
            onChange={handleMonthChange}
            className='block w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm'
          >
          <option value="" disabled>Select a month</option>
          {Object.keys(pujaDetails).map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
          ))}
          </select>

      {selectedMonth && (
        <div className='mt-4'>
          <h3 className='text-lg font-medium text-gray-900'>Pujas in {selectedMonth}:</h3>
          <ul className='mt-2 space-y-2'>
            {pujaDetails[selectedMonth].map((puja, index) => (
              <li key={index}>
                <a
                  href={puja.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='text-primary-600 hover:text-primary-800'
                >
                  {puja.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
        <div className="py-2 mx-10 lg:mx-20">
        
          <div>
            <Raksha />
            <Krishna />
            <Ganesha />
          </div>
        </div>

    </div>
  )
}

export default PoojaSteps