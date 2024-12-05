import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    address: '',
    puja: '',
    price: '',
    samagri: '',
    message: '',
    date: '', // Added date field
  });

  const [submissionStatus, setSubmissionStatus] = useState(null); // State to manage submission status
  const [dateError, setDateError] = useState(false); // State to manage date error
  const [bypassDateCondition, setBypassDateCondition] = useState(false); // State to manage the checkbox

  // Define unique prices for each Puja
  const pujaPrices = {
    "Durga Puja": 150,
    "Lakshmi Puja": 120,
    "Kali Puja": 140,
    "Saraswati Puja": 100,
    // Add more unique prices as needed
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update formData state
    setFormData((prevData) => {
      let newPrice = prevData.price;

      if (name === "puja") {
        // Set the base price when a Puja is selected
        newPrice = pujaPrices[value] || 0;
        // Include the price for samagri if already selected
        if (prevData.samagri === 'Yes') {
          newPrice += 80;
        }
        // Include the price adjustment for bypassing the date condition
        if (bypassDateCondition) {
          newPrice += 50;
        }
      }

      if (name === "samagri") {
        // Adjust the price based on the samagri selection
        newPrice = prevData.puja ? pujaPrices[prevData.puja] : 0;
        if (value === "Yes") {
          newPrice += 80;
        }
        // Include the price adjustment for bypassing the date condition
        if (bypassDateCondition) {
          newPrice += 50;
        }
      }

      return {
        ...prevData,
        [name]: value,
        price: newPrice,
      };
    });
  };

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setBypassDateCondition(isChecked);

    // Adjust price based on checkbox
    setFormData((prevData) => ({
      ...prevData,
      price: isChecked
        ? (parseFloat(prevData.price) + 50).toFixed(2)
        : (parseFloat(prevData.price) - 50).toFixed(2),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all required fields
    const allFieldsFilled = Object.values(formData).every(field =>
      typeof field === 'string' ? field.trim() !== '' : field !== ''
    );

    if (!allFieldsFilled) {
      setSubmissionStatus('failed');
      return;
    }

    // Validate the date field if checkbox is not checked
    if (!bypassDateCondition) {
      const today = new Date();
      const selectedDate = new Date(formData.date);
      const tenDaysLater = new Date(today);
      tenDaysLater.setDate(today.getDate() + 10);

      if (selectedDate < tenDaysLater) {
        setDateError(true);
        return;
      }
    }

    // Send the form data via email using EmailJS
    emailjs.send('service_crrhtge', 'template_bgkm3qz', formData, 't4fkAJ8OjdrmSx_m_')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmissionStatus('success');
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setSubmissionStatus('failed');
      });
  };

  const closeModal = () => {
    setSubmissionStatus(null); // Close the modal
    setDateError(false); // Close the date error modal
  };

  return (
    <div className="mx-5 bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Book A Pandit Ji</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-bold">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-bold">Select Puja</label>
          <select
            name="puja"
            value={formData.puja}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select a Puja</option>
            <option value="Durga Puja">Daily Puja</option>
            <option value="Lakshmi Puja">Festival Puja</option>
            <option value="Kali Puja">Special Puja</option>
            <option value="Saraswati Puja">Personal Puja</option>
            <option value="Bad Luck">Puja For Removing Bad Luck</option>
            <option value="New Born Child">Puja New Born Child</option>
            <option value="Good luck">Puja Good Luck</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-bold">Include Puja Samagri?</label>
          <div className="flex items-center space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="samagri"
                value="Yes"
                checked={formData.samagri === 'Yes'}
                onChange={handleChange}
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="samagri"
                value="No"
                checked={formData.samagri === 'No'}
                onChange={handleChange}
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-bold">Price</label>
          <input
            type="text"
            name="price"
            value={`$${formData.price}`}
            readOnly
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-bold">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div>
          <label className="inline-flex items-center mt-3">
            <input
              type="checkbox"
              checked={bypassDateCondition}
              onChange={handleCheckboxChange}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2">Bypass 10-Day Condition (Add $50)</span>
          </label>
        </div>
        <div>
          <label className="block text-gray-700 font-bold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-bold">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-bold">Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-bold">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-bold">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          ></textarea>
        </div>

        

        <button
          type="submit"
          className="w-20 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      {submissionStatus && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 max-w-sm w-full shadow-lg">
            <h3 className={`text-lg font-bold ${submissionStatus === 'success' ? 'text-green-600' : 'text-red-600'}`}>
              {submissionStatus === 'success' ? 'Success' : 'Error'}
            </h3>
            <p className="mt-2">
              {submissionStatus === 'success'
                ? 'Form submitted successfully!'
                : 'Failed to submit the form. Please try again.'}
            </p>
            <button
              onClick={closeModal}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {dateError && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 max-w-sm w-full shadow-lg">
            <h3 className="text-lg font-bold text-red-600">Date Error</h3>
            <p className="mt-2">
              The selected date must be at least 10 days from today.
            </p>
            <button
              onClick={() => setDateError(false)}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
