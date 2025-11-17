import React from 'react';

// --- SVG Icons for a professional look ---
const PaintBrushIcon = () => (
  <svg className="w-10 h-10 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.4-c.36.36-.59.791-.59 1.259v.375c0 .324.08.64.23.922a2.25 2.25 0 004.303 1.18 2.25 2.25 0 00.34-1.517v-.218a2.25 2.25 0 00-1.517-2.118l.738-.738a3 3 0 004.303 4.303l.738-.738a2.25 2.25 0 00-1.517 2.118v.218a2.25 2.25 0 00.34 1.517 2.25 2.25 0 004.303-1.18.25.25 0 00-.23-.922v-.375c0-.468-.23-.9-.59-1.259a2.25 2.25 0 01-2.4-2.4 3 3 0 00-5.78-1.128zM15.75 5.25a3 3 0 013 3m3 0a3 3 0 01-3 3m0 0a3 3 0 01-3-3m3 3a3 3 0 01-3-3m-9.75 9.75a3 3 0 013 3m3 0a3 3 0 01-3 3m0 0a3 3 0 01-3-3m3 3a3 3 0 01-3-3" />
  </svg>
);

const LightBulbIcon = () => (
  <svg className="w-10 h-10 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a.75.75 0 01-.75-.75V11.25a.75.75 0 011.5 0v6a.75.75 0 01-.75.75zM12 6a.75.75 0 110-1.5.75.75 0 010 1.5zM12 15a.75.75 0 110-1.5.75.75 0 010 1.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.06 13.5C10.63 15.08 11.26 16.18 12 16.5c.74-.32 1.37-1.42 1.94-3 .57-1.58.85-3.08.85-4.5a4.5 4.5 0 00-9 0c0 1.42.28 2.92.85 4.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19.5h6" />
  </svg>
);

const ChairIcon = () => (
  <svg className="w-10 h-10 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 3l7.5-7.5 7.5 7.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18h12M6 21h12" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 15h12" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h12" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15V9" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15V9" />
  </svg>
);

const RulerIcon = () => (
  <svg className="w-10 h-10 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h12A2.25 2.25 0 0020.25 14.25V3m-16.5 0h16.5M3.75 6.75h16.5M3.75 10.5h16.5M3.75 14.25h16.5M6 20.25h12" />
  </svg>
);


const OverlapContent = () => {
  return (
    // This container gives us the max-width and centering
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* This is the white card with shadow and responsive grid */}
      <div className="
        bg-white 
        rounded-xl 
        shadow-2xl 
        p-6 md:p-8
        grid grid-cols-2 sm:grid-cols-4 
        gap-6 md:gap-4
        divide-y sm:divide-y-0 sm:divide-x divide-gray-200
      ">
        {/* Item 1 */}
        <div className="flex flex-col items-center justify-center text-center p-4">
          <PaintBrushIcon />
          <h3 className="mt-3 text-lg font-semibold text-gray-800">Decoration</h3>
          <p className="mt-1 text-sm text-gray-500">Stylish finishes</p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center justify-center text-center p-4 pt-6 sm:pt-4">
          <LightBulbIcon />
          <h3 className="mt-3 text-lg font-semibold text-gray-800">Lighting</h3>
          <p className="mt-1 text-sm text-gray-500">Ambiance & Mood</p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center justify-center text-center p-4 pt-6 md:pt-4">
          <ChairIcon />
          <h3 className="mt-3 text-lg font-semibold text-gray-800">Furniture</h3>
          <p className="mt-1 text-sm text-gray-500">Custom & Curated</p>
        </div>

        {/* Item 4 */}
        <div className="flex flex-col items-center justify-center text-center p-4 pt-6 md:pt-4">
          <RulerIcon />
          <h3 className="mt-3 text-lg font-semibold text-gray-800">Designing</h3>
          <p className="mt-1 text-sm text-gray-500">Space planning</p>
        </div>
      </div>
    </div>
  );
};

export default OverlapContent;