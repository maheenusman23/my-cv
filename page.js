import Image from "next/image";
export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-10 bg-white shadow-lg rounded-lg my-10">

 <div className="text-center">

 <h1 className="text-4xl font-bold text-center text-black">
  MAHEEN USMAN
</h1>

  <h2 className="text-xl text-center text-gray-600 mt-2">
    Computer Science Undergraduate
  </h2>

 <div className="flex justify-center items-center gap-10 mt-5 text-gray-700 text-lg flex-wrap">

  <span>
    📞 <strong>Phone:</strong> 03360451998
  </span>

  <span>
    📧 <strong>Email:</strong> maheenusman950@gmail.com
  </span>

  <span>
    📍 <strong>Location:</strong> Rawalpindi, Pakistan
  </span>

</div>

  <div className="mt-6">
    <a
      href="/Maheen_Usman_CV.pdf"
      download
      className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800"
    >
      📄 Download CV
    </a>
  </div>

</div>

<hr className="my-10 border-gray-300" />
    
  <section>

  <h2 className="text-3xl font-bold text-blue-700 mb-5">
    Profile
  </h2>

  <div className="bg-white border border-gray-300 rounded-xl shadow-md p-6 hover:shadow-lg transition">

    <p className="leading-8 text-gray-700 text-justify">
      I am a motivated BS Computer Science student currently studying in
      the 4th semester at Foundation University Islamabad. I have a strong
      foundation in Java, Data Structures, Object-Oriented Programming,
      and Artificial Intelligence. I enjoy developing software projects,
      solving problems, and learning modern technologies. I am looking for
      a Software Development Internship where I can improve my technical
      and professional skills.
    </p>

  </div>

</section>

<hr className="my-8" />

     <section>
  <h2 className="text-3xl font-bold text-blue-700 mb-5">
    Education
  </h2>

  <div className="bg-white border border-gray-300 rounded-xl shadow-md p-6 hover:shadow-lg transition">

    <h3 className="text-2xl font-bold text-gray-800">
      Foundation University Islamabad
    </h3>

    <p className="text-lg text-gray-700 mt-2">
      BS Computer Science (4th Semester)
    </p>

    <p className="text-lg text-gray-700 mt-2">
      <strong>CGPA:</strong> 3.37
    </p>

  </div>
</section>

<hr className="my-8" />

<section>
  <h2 className="text-3xl font-bold text-blue-700 mb-5">
    Skills
  </h2>

  <div className="bg-white border border-gray-300 rounded-xl shadow-md p-6">

    <div className="grid grid-cols-3 gap-4">

      <div className="bg-blue-100 text-center py-3 rounded-lg font-semibold">
        💻 C++
      </div>

      <div className="bg-blue-100 text-center py-3 rounded-lg font-semibold">
        ☕ Java
      </div>

      <div className="bg-blue-100 text-center py-3 rounded-lg font-semibold">
        🐍 Python
      </div>

      <div className="bg-blue-100 text-center py-3 rounded-lg font-semibold">
        🤖 AI
      </div>

      <div className="bg-blue-100 text-center py-3 rounded-lg font-semibold">
        🗄️ SQL / DBMS
      </div>

      <div className="bg-blue-100 text-center py-3 rounded-lg font-semibold">
        🌐 HTML & CSS
      </div>

      <div className="bg-blue-100 text-center py-3 rounded-lg font-semibold">
        🎨 UX Design
      </div>

      <div className="bg-blue-100 text-center py-3 rounded-lg font-semibold">
        📚 Data Structures
      </div>

    </div>

  </div>
</section>

<hr className="my-8" />
<section>
  <h2 className="text-3xl font-bold text-blue-700 mb-6">
    Projects
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

   {/* Arduino */}
<div className="bg-white rounded-xl shadow-lg p-5 min-h-[340px] flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

  <div className="flex justify-center mb-3">
    <Image
      src="/arduino.png"
      alt="Arduino"
      width={110}
      height={80}
      className="object-contain rounded-lg"
    />
  </div>

  <h3 className="text-xl font-bold text-center">
    Automated Barrier System
  </h3>

  <p className="text-center text-gray-600 text-sm mt-3">
    Smart parking barrier that automatically opens and closes using sensors.
  </p>

  <div className="flex flex-wrap justify-center gap-2 mt-5">
    <span className="bg-blue-100 px-3 py-1 rounded-full text-sm">Arduino</span>
    <span className="bg-blue-100 px-3 py-1 rounded-full text-sm">IR Sensor</span>
    <span className="bg-blue-100 px-3 py-1 rounded-full text-sm">Servo</span>
  </div>

</div>

{/* Cab */}
<div className="bg-white rounded-xl shadow-lg p-5 min-h-[340px] flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

  <div className="flex justify-center mb-3">
    <Image
      src="/cab.png"
      alt="Cab Booking"
      width={110}
      height={80}
      className="object-contain rounded-lg"
    />
  </div>

  <h3 className="text-xl font-bold text-center">
    Cab Booking System
  </h3>

  <p className="text-center text-gray-600 text-sm mt-3">
    Desktop application for booking taxis and managing rides.
  </p>

  <div className="flex flex-wrap justify-center gap-2 mt-5">
    <span className="bg-yellow-100 px-3 py-1 rounded-full text-sm">Java</span>
    <span className="bg-yellow-100 px-3 py-1 rounded-full text-sm">OOP</span>
    <span className="bg-yellow-100 px-3 py-1 rounded-full text-sm">GUI</span>
  </div>

</div>

{/* Voting */}
<div className="bg-white rounded-xl shadow-lg p-5 min-h-[340px] flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

  <div className="flex justify-center mb-3">
    <Image
      src="/E-Voting.png"
      alt="E-Voting"
      width={110}
      height={80}
      className="object-contain rounded-lg"
    />
  </div>

  <h3 className="text-xl font-bold text-center">
    E-Voting System
  </h3>

  <p className="text-center text-gray-600 text-sm mt-3">
    Secure voting application using efficient data structures.
  </p>

  <div className="flex flex-wrap justify-center gap-2 mt-5">
    <span className="bg-green-100 px-3 py-1 rounded-full text-sm">C++</span>
    <span className="bg-green-100 px-3 py-1 rounded-full text-sm">Linked List</span>
    <span className="bg-green-100 px-3 py-1 rounded-full text-sm">DSA</span>
  </div>

</div>

{/* Legal */}
<div className="bg-white rounded-xl shadow-lg p-5 min-h-[340px] flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

  <div className="flex justify-center mb-3">
    <Image
      src="/Legal Aid.png"
      alt="Legal Aid"
      width={110}
      height={80}
      className="object-contain rounded-lg"
    />
  </div>

  <h3 className="text-xl font-bold text-center">
    Legal Aid System
  </h3>

  <p className="text-center text-gray-600 text-sm mt-3">
    AI-powered platform that simplifies legal information.
  </p>

  <div className="flex flex-wrap justify-center gap-2 mt-5">
    <span className="bg-purple-100 px-3 py-1 rounded-full text-sm">Python</span>
    <span className="bg-purple-100 px-3 py-1 rounded-full text-sm">AI</span>
    <span className="bg-purple-100 px-3 py-1 rounded-full text-sm">ML</span>
  </div>

</div>

{/* Jarvis */}
<div className="bg-white rounded-xl shadow-lg p-5 min-h-[340px] flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

  <div className="flex justify-center mb-3">
    <Image
      src="/Jarvis AI.png"
      alt="Jarvis AI"
      width={110}
      height={80}
      className="object-contain rounded-lg"
    />
  </div>

  <h3 className="text-xl font-bold text-center">
    Jarvis AI Assistant
  </h3>

  <p className="text-center text-gray-600 text-sm mt-3">
    Voice-controlled AI assistant with speech recognition.
  </p>

  <div className="flex flex-wrap justify-center gap-2 mt-5">
    <span className="bg-indigo-100 px-3 py-1 rounded-full text-sm">Python</span>
    <span className="bg-indigo-100 px-3 py-1 rounded-full text-sm">Speech AI</span>
    <span className="bg-indigo-100 px-3 py-1 rounded-full text-sm">NLP</span>
  </div>

</div>

{/* Railway */}
<div className="bg-white rounded-xl shadow-lg p-5 min-h-[340px] flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

  <div className="flex justify-center mb-3">
    <Image
      src="/Railway.png"
      alt="Railway"
      width={110}
      height={80}
      className="object-contain rounded-lg"
    />
  </div>

  <h3 className="text-xl font-bold text-center">
    Railway Reservation
  </h3>

  <p className="text-center text-gray-600 text-sm mt-3">
    Railway ticket booking and management system.
  </p>

  <div className="flex flex-wrap justify-center gap-2 mt-5">
    <span className="bg-red-100 px-3 py-1 rounded-full text-sm">C++</span>
    <span className="bg-red-100 px-3 py-1 rounded-full text-sm">File Handling</span>
    <span className="bg-red-100 px-3 py-1 rounded-full text-sm">OOP</span>
  </div>

</div>

{/* Cricket */}
<div className="bg-white rounded-xl shadow-lg p-5 min-h-[340px] flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

  <div className="flex justify-center mb-3">
    <Image
      src="/Cricket.png"
      alt="Cricket"
      width={110}
      height={80}
      className="object-contain rounded-lg"
    />
  </div>

  <h3 className="text-xl font-bold text-center">
    Cricket Web App
  </h3>

  <p className="text-center text-gray-600 text-sm mt-3">
    Responsive cricket website with match information.
  </p>

  <div className="flex flex-wrap justify-center gap-2 mt-5">
    <span className="bg-cyan-100 px-3 py-1 rounded-full text-sm">HTML</span>
    <span className="bg-cyan-100 px-3 py-1 rounded-full text-sm">CSS</span>
    <span className="bg-cyan-100 px-3 py-1 rounded-full text-sm">Responsive</span>
  </div>

</div>

{/* Attendance */}
<div className="bg-white rounded-xl shadow-lg p-5 min-h-[340px] flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

  <div className="flex justify-center mb-3">
    <Image
      src="/Attendance.png"
      alt="Attendance"
      width={110}
      height={80}
      className="object-contain rounded-lg"
    />
  </div>

  <h3 className="text-xl font-bold text-center">
    Attendance Management
  </h3>

  <p className="text-center text-gray-600 text-sm mt-3">
    Tracks attendance and generates reports using Excel.
  </p>

  <div className="flex flex-wrap justify-center gap-2 mt-5">
    <span className="bg-orange-100 px-3 py-1 rounded-full text-sm">Excel</span>
    <span className="bg-orange-100 px-3 py-1 rounded-full text-sm">Dashboard</span>
    <span className="bg-orange-100 px-3 py-1 rounded-full text-sm">Reports</span>
  </div>

</div>

{/* Magazine */}
<div className="bg-white rounded-xl shadow-lg p-5 min-h-[340px] flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

  <div className="flex justify-center mb-3">
    <Image
      src="/Magazine.png"
      alt="Magazine"
      width={110}
      height={80}
      className="object-contain rounded-lg"
    />
  </div>

  <h3 className="text-xl font-bold text-center">
    Digital Magazine
  </h3>

  <p className="text-center text-gray-600 text-sm mt-3">
    Creative magazine with attractive layouts and graphics.
  </p>

  <div className="flex flex-wrap justify-center gap-2 mt-5">
    <span className="bg-pink-100 px-3 py-1 rounded-full text-sm">MS Word</span>
    <span className="bg-pink-100 px-3 py-1 rounded-full text-sm">Canva</span>
    <span className="bg-pink-100 px-3 py-1 rounded-full text-sm">Design</span>
  </div>


</div>

</div>
</section>

<hr className="my-8" />
<section>

  <h2 className="text-3xl font-bold text-blue-700 mb-6">
    Certifications & Achievements
  </h2>

  <div className="grid grid-cols-3 gap-6">

    <div className="bg-white shadow-lg rounded-xl p-5 text-center hover:shadow-2xl hover:-translate-y-2 transition">
      <div className="text-5xl mb-3">🎓</div>
      <h3 className="font-bold text-lg">Google UX Design</h3>
      <p className="text-gray-600 text-sm mt-2">
        Professional Certificate
      </p>
    </div>

    <div className="bg-white shadow-lg rounded-xl p-5 text-center hover:shadow-2xl hover:-translate-y-2 transition">
      <div className="text-5xl mb-3">🏆</div>
      <h3 className="font-bold text-lg">Fauji Foundation</h3>
      <p className="text-gray-600 text-sm mt-2">
        Scholarship Recipient
      </p>
    </div>

    <div className="bg-white shadow-lg rounded-xl p-5 text-center hover:shadow-2xl hover:-translate-y-2 transition">
      <div className="text-5xl mb-3">🥇</div>
      <h3 className="font-bold text-lg">High Achiever</h3>
      <p className="text-gray-600 text-sm mt-2">
        Certificate (Matric)
      </p>
    </div>

    <div className="bg-white shadow-lg rounded-xl p-5 text-center hover:shadow-2xl hover:-translate-y-2 transition">
      <div className="text-5xl mb-3">💬</div>
      <h3 className="font-bold text-lg">English Communication</h3>
      <p className="text-gray-600 text-sm mt-2">
        Communication Skills
      </p>
    </div>

    <div className="bg-white shadow-lg rounded-xl p-5 text-center hover:shadow-2xl hover:-translate-y-2 transition">
      <div className="text-5xl mb-3">💼</div>
      <h3 className="font-bold text-lg">Freelancing</h3>
      <p className="text-gray-600 text-sm mt-2">
        E-Commerce
      </p>
    </div>

    <div className="bg-white shadow-lg rounded-xl p-5 text-center hover:shadow-2xl hover:-translate-y-2 transition">
      <div className="text-5xl mb-3">⏰</div>
      <h3 className="font-bold text-lg">Time Management</h3>
      <p className="text-gray-600 text-sm mt-2">
        HR Training
      </p>
    </div>

    <div className="bg-white shadow-lg rounded-xl p-5 text-center hover:shadow-2xl hover:-translate-y-2 transition">
      <div className="text-5xl mb-3">🛡️</div>
      <h3 className="font-bold text-lg">Survival Course</h3>
      <p className="text-gray-600 text-sm mt-2">
        Certificate
      </p>
    </div>

    <div className="bg-white shadow-lg rounded-xl p-5 text-center hover:shadow-2xl hover:-translate-y-2 transition">
      <div className="text-5xl mb-3">📈</div>
      <h3 className="font-bold text-lg">16-Week PDP</h3>
      <p className="text-gray-600 text-sm mt-2">
        Personality Development
      </p>
    </div>

  </div>

</section>

<hr className="my-8" />
     <section>

  <h2 className="text-3xl font-bold text-blue-700 mb-6">
    PAF Finishing School Training
  </h2>

  <div className="bg-white border border-gray-300 rounded-xl shadow-md p-6 hover:shadow-lg transition">

   <p className="text-gray-700 text-lg leading-7 text-justify">
  Successfully completed a 16-week training program at Pakistan Air Force
  Finishing School, Islamabad. The training focused on communication
  skills, professional etiquette, teamwork, leadership, freelancing,
  e-commerce, and graphic design, helping me improve both my technical
  and professional skills.
</p>

  </div>

</section>

    </main>
  );
}      