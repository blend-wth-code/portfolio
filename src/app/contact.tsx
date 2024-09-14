const Contact: React.FC = () => {
  return (
    <div id="contact" className="mt-32 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-white">CONTACT</h2>
      <form className="mt-12 w-full max-w-lg flex flex-col space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none h-40"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
