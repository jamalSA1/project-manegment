"use client"
import React, { useState } from 'react';

export default function Home() {
  // الحالة لتتبع البطاقة النشطة
  const [activeIndex, setActiveIndex] = useState(0);

  // بيانات البطاقات
  const cards = [
    {
      image: '/man1',
      text: "It's a Happy Day!",
      bgColor: "bg-blue-400",
    },
    {
      image: '/man2',
      text: "Peace & Love",
      bgColor: "bg-pink-400",
    },
  ];

  // نحتاج لتخزين قيمة بداية السحب
  const [startX, setStartX] = useState<number | null>(null);

  // أحداث التمرير (Touch Events) للتحكم بالبطاقات
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches && e.touches.length > 0) {
      setStartX(e.touches[0]?.clientX ?? 0); // استخدام optional chaining مع القيمة الافتراضية
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!startX) return;

    if (e.touches && e.touches.length > 0) { // تعديل الشرط هنا
      const currentX = e.touches[0]?.clientX; // استخدام optional chaining
      if (currentX !== undefined) { // تحقق من أن currentX ليس undefined
        const diffX = startX - currentX;

        // إذا كان الفرق كافي للتبديل للبطاقة التالية
        if (diffX > 50) {
          handleNext();
          setStartX(null);
        } else if (diffX < -50) {
          handlePrev();
          setStartX(null);
        }
      }
    }
  };

  // دالة التبديل للبطاقة التالية
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  // دالة التبديل للبطاقة السابقة
  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div
        className="relative w-64 h-96 overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {/* عرض البطاقات وتحريكها باستخدام translateX */}
        {cards.map((card, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full rounded-lg p-4 transform ${
              activeIndex === index ? 'z-10 -rotate-6' : 'z-0 -rotate-3'
            } ${card.bgColor}`}
            style={{
              transform: activeIndex === index ? 'none' : 'rotate(-10deg)', // إضافة الميل للبطاقات غير النشطة
              clipPath: activeIndex === index ? 'none' : 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', // الشكل الحالي
            }}
          >

            <div className="text-center">
              <span className="text-6xl">{card.image}</span>
              <p className="mt-4 text-white text-lg">{card.text}</p>
            </div>
          </div>
        ))}

{/* <div className="absolute top-0 left-0 w-full h-full bg-orange-400 rounded-lg p-4 transform -rotate-6 z-0">
          <div className="text-center">
            <span className="text-6xl">🌻</span>
            <p className="mt-4 text-white text-lg">Stay Positive!</p>
          </div>
        </div> */}

      </div>
    </div>
  );
}

