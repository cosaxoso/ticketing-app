import React, { useState } from "react";
import { router } from "@inertiajs/react";
import Stepper, {Step} from '@/components/Stepper';

const ticketForm: React.FC = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    department: '',
    subject: '',
    details: '',
    urgency: 'Medium',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting form data:', formData);
    router.post('/ticket-form', formData);
  };

  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stepper
        initialStep={1}
        onStepChange={(step) => {
          console.log(step);
        }}
        onFinalStepCompleted={() => console.log("All steps completed!")}
        backButtonText="Previous"
        nextButtonText="Next"
      >
        <Step>
          <h2>Create a Ticket!</h2>
          <p>Check out the next step!</p>
        </Step>
        <Step>
          <h2 className="my-4">Add your information</h2>
          <div className="flex flex-col space-y-4 ">
            <input 
              className="border-1 rounded-md pl-2 py-2 font-s" 
              name="name"
              type="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Your name?">
            </input>
            <input 
              className="border-1 rounded-md pl-2 py-2 font-s" 
              name="email"
              type="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Your email?">
            </input>
            <select className="border-1 rounded-md pl-2 py-2 font-s" name="department" value={formData.department} onChange={handleChange} >
              <option value="">Select Department</option>
              <option value="Home">Department of Home</option>
              <option value="Health">Department of Health</option>
              <option value="Education">Department of Education</option>
              <option value="Security">Department of Security</option>
              <option value="Finance">Department of Finance</option>
              <option value="Information and International Relations">Department of Information and International Relations</option>
            </select>
          </div>
        </Step>
        <Step>
          <h2 className="my-4">How about an input?</h2>
          <div className="flex flex-col space-y-4">
            <input className="border-1 rounded-md pl-2 py-2 font-s" name="subject" type="text" value={formData.subject} onChange={handleChange} placeholder="Subject" />
            <textarea className="border-1 rounded-md pl-2 py-2 font-s" name="details" value={formData.details} onChange={handleChange} placeholder="Details" />
            <select className="border-1 rounded-md pl-2 py-2 font-s" name="urgency" value={formData.urgency} onChange={handleChange}>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </Step>
        <Step>
          <h2>Ticket #{formData.id} </h2>
          <p>You made it!</p>
        </Step>
      </Stepper>
    </form>
  );
};
export default ticketForm; 