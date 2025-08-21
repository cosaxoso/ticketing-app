import React, { useState } from "react";
import { router } from "@inertiajs/react";
import Stepper, {Step} from '@/components/Stepper';
import { error } from "console";


const ticketForm: React.FC = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    department: '',
    subject: '',
    details: '',
    urgency: '',
    assigned_names: ''
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
          <div className= "flex flex-col items-center h-auto gap-4">
            <img className="w-1/3 h-1/3" src="/images/CTA-logo.png" alt="CTA logo"/>
            <h2 className= "font-bold font-serif">Tibetan Computer Resource Center</h2>
            <p>Create a Ticket!</p>
          </div>
          
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
              placeholder="Your full name?"
              // required
              >
            </input>
            <input 
              className="border-1 rounded-md pl-2 py-2 font-s" 
              name="email"
              type="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Your email?"
              // required
              >
            </input>
            <select className="border-1 rounded-md pl-2 py-2 font-s" name="department" value={formData.department} onChange={handleChange} >
              <option className="text-opacity-75"value="">Select Department</option>
              <option value="Department of Home">Department of Home</option>
              <option value="Department of Health">Department of Health</option>
              <option value="Department of Education">Department of Education</option>
              <option value="Department of Security">Department of Security</option>
              <option value="Department of Finance">Department of Finance</option>
              <option value="Department of Information and International Relations">Department of Information and International Relations</option>
            </select>
          </div>
        </Step>
        <Step>
          <h2 className="my-4">How about an input?</h2>
          <div className="flex flex-col space-y-4">
            <input className="border-1 rounded-md px-2 py-2 font-s" name="subject" type="text" value={formData.subject} onChange={handleChange} placeholder="Subject" required/>
            <textarea className="border-1 rounded-md px-3 py-2 font-s h-25" name="details" value={formData.details} onChange={handleChange} placeholder="Details" required/>
            <select className="border-1 rounded-md pl-2 py-2 font-s" name="urgency" value={formData.urgency} onChange={handleChange} required>
              <option value="">Select Urgency</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            <label className="border-1 rounded-md pl-2 py-2 font-s">
              Choose File
              <input name="attachment" type="file" className="hidden" />
            </label>
            {/* <input name="file-input" type="file" /> */}
          </div>
        </Step>
        <Step>
          <h2>Ticket #{formData.id} </h2>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Department: {formData.department}</p>
          <p>Assigned member: {formData.assigned_names}</p>
        </Step>
      </Stepper>
    </form>
  );
};
export default ticketForm; 