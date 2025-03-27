import { FaPhone, FaEnvelope } from 'react-icons/fa';

export default function HiringAd() {
  return (
    <div className="max-w-[1450px] mx-auto p-10 bg-white border border-gray-200 shadow-lg rounded-2xl transition-all hover:shadow-2xl">
      <h2 className="text-4xl font-extrabold text-green-700 mb-6 tracking-tight">🌿 We're Hiring!</h2>
      <p className="text-lg font-bold mb-4 text-gray-700 leading-relaxed">Shantibari is looking for a dedicated Office Executive to join our team!</p>
      <p className="text-gray-800 mb-8 leading-relaxed">
        If you're a passionate, punctual, and polite individual with strong communication skills, we’d love to hear from you.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-8 text-gray-900">
        <p><strong>📌 Position:</strong> Office Executive</p>
        <p>👩 Female candidates only are encouraged to apply.</p>
        <p><strong>✔️ Education:</strong> Minimum graduation degree (current students may apply).</p>
        <p><strong>✔️ Language Skills:</strong> Proficient in Bengali & English with good pronunciation.</p>
        <p><strong>✔️ Computer Literacy:</strong> Basic computer skills are a must.</p>
        <p><strong>✔️ Communication:</strong> Ability to take calls and attend clients politely and patiently.</p>
      </div>
      <p className="font-semibold text-green-600 mb-6">Application Deadline: April 5, 2025</p>
      <div className=" items-center gap-6">

      <a href="mailto:shantibari.feministfactor@gmail.com" className=" mb-5 text-gray-800 hover:text-green-800 font-bold flex items-center transition-all text-xl">
          <FaEnvelope className="w-6 h-6 mr-2" /> Apply at: shantibari.feministfactor@gmail.com
        </a>
        
        <a href="tel:+8801325167271" className="text-gray-800 font-bold hover:text-green-800 flex items-center transition-all">
          <FaPhone className="w-5 h-5 mr-2" /> 01325167271
        </a>
      </div>
      <p className="mt-6 font-semibold text-[16px] text-gray-400">Join us in creating a safe and empowering space for women. Spread the word and apply today! 💜</p>
    </div>
  );
}