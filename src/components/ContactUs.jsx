import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-blue-600 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-white mb-1">Name *</label>
            <input type="text" id="name" className="w-full p-2 rounded" required />
          </div>
          <div>
            <label htmlFor="contact" className="block text-white mb-1">Contact No. *</label>
            <input type="tel" id="contact" className="w-full p-2 rounded" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-white mb-1">Email *</label>
            <input type="email" id="email" className="w-full p-2 rounded" required />
          </div>
          <button type="submit" className="bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-500 transition duration-300">
            SUBMIT →
          </button>
        </form>
        <div className="mt-8 text-white">
          <p>+91 70126 06474</p>
          <p>teamstriderz.saintgits@gmail.com</p>
          <p>Paul J Illickan</p>
          <p>Team Captain</p>
        </div>
        <div className="mt-4 space-x-4">
          <a href="#" className="text-white hover:text-blue-200">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-white hover:text-blue-200">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="#" className="text-white hover:text-blue-200">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;