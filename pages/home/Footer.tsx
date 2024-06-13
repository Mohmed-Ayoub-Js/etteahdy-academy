import React from 'react'

const Footer = () => {
  return (
    <div className=' mt-5'>
        <footer className="bg-white lg:grid lg:grid-cols-5">
  <div className="relative block h-32 lg:col-span-2 lg:h-full">
    <img
      src="https://scontent.forn3-2.fna.fbcdn.net/v/t39.30808-6/438098163_937761431687700_8630179937562322770_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=p4pOd7ybg3cQ7kNvgEajs4c&_nc_ht=scontent.forn3-2.fna&oh=00_AYCqJ8l8WRcFfvNvrtHLzpWP6J877Fwz7ifryS2mcNNAUw&oe=6668E316"
      alt=""
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>

  <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      <div>
        <p>
          <span className="text-xs uppercase tracking-wide text-gray-500"> اتصل بنا </span>

          <a href="#" className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl">
          0550 31 65 53
          </a>
        </p>

        <ul className="mt-8 space-y-1 text-sm text-gray-700">
          <p>
            كل ايام الاسبوع
          </p>
        </ul>

        <ul className="mt-8 flex gap-6">
          <li>
            <a
              href="https://www.facebook.com/EttahadiAcademy"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75"
            >
              <span className="sr-only">فيسبوك</span>

              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className="font-medium text-gray-900">الخدمات</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> تعليم اللغات </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> الذكاء الاصطناعي </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> دروس الدعم </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> القرآن الكريم </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> علم الفلك </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-gray-900"> المؤسسة</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> عن المؤسسة </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> مكان المؤسسة </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> تسجيل الدخول </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75">  انشاء حساب  </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="mt-12 border-t border-gray-100 pt-12">
      <div className="sm:flex sm:items-center sm:justify-between">
        <ul className="flex flex-wrap gap-4 text-xs">
          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75"> القانون الداخلي للمؤسسة </a>
          </li>

          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75"> خصوصية البيانات </a>
          </li>

          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75"> Cookies </a>
          </li>
        </ul>

        <p className="mt-8 text-xs text-gray-500 sm:mt-0">
          &copy; 2024. اكادمية التحدي. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer