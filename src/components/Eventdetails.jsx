import React from 'react';

function EventDetails() {
  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Event Image */}
        <div className="relative">
          <img
            src="https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735391182/dmFsb3RoYWthcnV0c29iY2xvdWRfeGFwampp/drilldown"
            alt="Event Image"
            className="w-full h-auto object-contain rounded-lg shadow-lg"
          />
        </div>

        {/* Event Details */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-xl">
          <h2 className="text-3xl font-extrabold text-center text-purple-600 mb-4">
            ভালো থাকার উৎসব – "Celebration of Life"
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            বছর ঘুরে আবারো এলো শান্তিবাড়ি’র ভালো থাকার উৎসব – "Celebration of Life" 🌿
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            নারীর জন্য প্রতিষ্ঠান শান্তিবাড়ি’র এই উদ্যোগ পুরোটাই নারীকে ঘিরে। দু’দিনের এই বর্ণিল আয়োজনে আমরা উদযাপন
            করবো নারীর সৃষ্টিশীলতা, দক্ষতা, শক্তি, সক্ষমতা ও সাহসকে; জোরেশোরে তুলে ধরবো নারীর মানসিক স্বাস্থ্য,
            আইনি অধিকার সুরক্ষার দাবিটিকে।
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            ভালো থাকার উৎসব মানে জীবনকে উদযাপন করতে শেখা। তাই এ উৎসবজুড়ে নারীর জন্য আমরা তৈরি করবো আনন্দময়
            রঙীণ আবহ, যেখানে এসে নারী শিখবে কীভাবে নিজের যত্ন নিতে হয়, নতুন করে নতুন আনন্দে বাঁচতে হয়;
            জানতে পারবে কীভাবে নিজের অধিকার আদায় করতে হয় আর নিজের পায়ে দাঁড়াতে হয়।
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            ভালো থাকার উৎসব – "Celebration of Life" by Shantibari, Season 2
          </p>

          <div className="mt-6 border-t border-gray-200 pt-6">
            <p className="text-lg text-gray-800 font-bold">স্থান:</p>
            <p className="text-lg text-gray-700 mb-4">বাংলা একাডেমী</p>

            <p className="text-lg text-gray-800 font-bold">তারিখ:</p>
            <p className="text-lg text-gray-700 mb-4">৩ ও ৪ জানুয়ারী, ২০২৫ (শুক্র ও শনিবার)</p>

            <p className="text-lg text-gray-800 font-bold">সময়:</p>
            <p className="text-lg text-gray-700 mb-4">সকাল ১০টা - সন্ধ্যা ৬টা</p>

            <p className="text-lg text-gray-700">
              ভালো থাকার উৎসবে আপনার উপস্থিতি আমাদের অনুপ্রাণিত করবে, সাহস যোগাবে। কারণ একসাথে হাতে হাত রেখে
              এগিয়ে যাওয়ার ভেতর দিয়েই নতুন দিনের সূচনা হয়।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
