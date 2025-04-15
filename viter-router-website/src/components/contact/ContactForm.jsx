const ContactForm = () => {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm mb-1">Name</label>
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-sm mb-1">Email</label>
        <input
          type="email"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-sm mb-1">Message</label>
        <textarea className="w-full px-4 py-2 border border-gray-300 rounded h-24 focus:outline-none"></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white w-full py-2 rounded font-semibold hover:bg-blue-700 transition"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
