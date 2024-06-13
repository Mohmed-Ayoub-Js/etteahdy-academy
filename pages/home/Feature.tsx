import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { Book, BookOpenIcon, Code, LanguagesIcon } from 'lucide-react'

const features = [
  {
    name: 'تعليم اللغات',
    description:
      'لكل شخص بحاجة الى تعلم الفرنسية او الانجليزية فستكون اكادمية التحدي انسب اكادمية لتعلم هذه اللغات',
    icon: <LanguagesIcon className=' text-white' />,
  },
  {
    name: 'البرمجة و الروبوتيك',
    description:
      'اذا كنت مهتم بالبرمجة و الروبوتيك وصنع الالات واختراع اشياء جديدة فأكادمية التحدي تقدم خدمة تعليم هذا العلم',
    icon: <Code className=' text-white'/>,
  },
  {
    name: 'دروس الدعم',
    description:
      'اذا كان لديك امتحان هام ، باك او البيام فستكون اكادمية التحدي انسب مدرسة خصوصية لدروس الدعم في الرياضيات و الفيزياء و العلوم الطبيعة والحياة والمزيد من المواد طوال السنة الدراسية',
    icon: <Book className=' text-white'/>,
  },
  {
    name: 'تحفيظ القرآن الكريم',
    description:
      'قال رسول الله صلى الله عليه وسلم : خَيرُكُم من تعلَّمَ القرآنَ وعلَّمَهُ ، اذا كنت بحاجة الى مدرسة تقدم كل ما يتعلق بالقرآن الكريم من تحفيظ و تعلم احكام التجويد فانها هذه هي المدرسة المناسبة',
    icon: <BookOpenIcon className=' text-white'/>,
  },
]

export default function Feature() {
  return (
    <div id='fe' className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-green-600">
            مميزات اكادمية التحدي
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            المميزات
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
           الخدمات التي تقدمها اكادمية التحدي 
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                    {feature.icon}
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
