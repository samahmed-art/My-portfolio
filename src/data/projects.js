export const projects = [
  {
    id: "Weekly Schedule",
    title: {
      ar: "جدول أسبوعي",
      en: "Weekly Schedule"
    },
    shortDescription: {
      ar: "تطبيق جدول أسبوعي ديناميكي مصمم لاستبدال قوائم المهام الجامدة باستخدام منطق ذكي لتوزيع المهام على مدار الأسبوع.",
      en: "A dynamic weekly scheduler application designed to replace rigid to-do lists by using smart logic to distribute tasks across the week. Built with a futuristic tech-themed UI, it tracks real-time productivity analytics and locks past data using a custom chronological simulation layer."
    },
    fullDescription: {
      ar: "الجدول الأسبوعي هو مجدول ويب يستبدل صلابة قوائم المهام التقليدية بتوزيع مرن وديناميكي للمهام. يتميز التطبيق بنظام محاكاة مخصص يقفل البيانات التاريخية السابقة، ويعرض منحنيات الإنتاجية في الوقت الفعلي عبر Chart.js، ويحتفظ بالبيانات بأمان باستخدام LocalStorage. يتميز المشروع بواجهة مستخدم حديثة وعالية التباين مصممة في Figma لتقديم تجربة مستخدم غامرة وعالية الاستجابة.",
      en: "Weekly Schedule is a web scheduler that replaces the rigidity of traditional to-do lists with flexible, dynamic task distribution. the application features a custom simulation system that locks past historical data, displays real-time productivity curves via Chart.js, and safely persists data using LocalStorage. The project features a high-contrast, modern UI/UX designed in Figma to offer an immersive and highly responsive user experience."
    },
    techTags: ["Chart.js", "Vite", "HTML5", "CSS3", "JavaScript", "LocalStorage"],
    image: "/weekly_schedule_image.png",
    githubLink: "https://github.com/samahmed-art/weekly-to-do-list.git",
    liveLink: "https://my-smart-schedual.netlify.app/"
  }
  ,
  {
    id: "Ewan-halls",
    title: {
      ar: "موقع لأداره حجوزات قاعات الأفراح (Ewan)",
      en: "Wedding Hall Booking Management Website (Ewan)"
    },
    shortDescription: {
      ar: "منصة إلكترونية متكاملة لإدارة وحجز القاعات، تتيح للعملاء الحجز بسلاسة دون تعارض في المواعيد، وتمنح أصحاب القاعات لوحة تحكم متطورة لتنظيم الحجوزات، المزامنة، والتواصل الاحترافي مع المستخدمين.",
      en: "An integrated digital platform for venue management and booking that enables customers to book seamlessly without scheduling conflicts, while providing venue owners with an advanced dashboard to manage bookings, synchronization, and professional communication with users."
    },
    fullDescription: {
      ar :"نظام حجز قاعات  هو منصة ويب متكاملة متعددة الملاك (Multi-Vendor SaaS) تستبدل عشوائية السجلات الورقية بنظام حجز وإدارة ذكي، يتميز بتقويم تفاعلي يمنع الحجز المزدوج برمجياً ومحرك أمان يلغي الحجوزات الوهمية خلال 10 دقائق، مع توفير لوحات تحكم مستقلة ومحمية لكل صاحب قاعة لإدارة محتواه وصوره عبر Supabase Storage وإطلاق الحملات التسويقية بواسطة Resend API، مدمجاً ببوابة دفع إلكتروني لتأمين المعاملات وبواجهة مستخدم متجاوبة وعالية الاستجابة مصممة في Figma ومطورة بـ Next.js و Tailwind CSS.",
      en : " Halls Booking System is an integrated multi-vendor SaaS web platform that replaces traditional paper logs with a smart management and reservation engine. It features an interactive calendar that programmatically eliminates double-bookings and an automated security gate that cancels ghost reservations within 10 minutes. The system provides secure, independent dashboards for each hall owner to dynamically manage content and multi-image uploads via Supabase Storage, dispatch bulk marketing campaigns using Resend API, and process secure payments through an integrated e-payment gateway—all wrapped in a highly responsive user interface designed in Figma and developed using Next.js, Supabase, and Tailwind CSS."
    },
    techTags: ["Next.js",  "Supabase","Tailwind CSS","Shadcn UI", "Resend API", "Lucide React"],
    image: "/EWAN.png",
    githubLink: "https://github.com/samahmed-art/ewan.git",
    liveLink: "https://ewan-halls.vercel.app/"
  }
    ,
  {
    id: "Thaki-app",
    title: {
      ar: "تطبيق الذكي لإدارة التغذية وحساب السعرات(Thaki)",
      en: " AI-Powered Nutrition & Calorie Tracking Ecosystem (Thaki)"
    },
    shortDescription: {
      ar: "تطبيق ذكي هو مساعدك الشخصي المدعوم بالذكاء الاصطناعي لإدارة الوزن والتغذية. يحلل صور الوجبات لحساب السعرات بدقة، ويصمم خططاً غذائية تتكيف مع أهدافك، مع توفير أخصائي تغذية افتراضي متاح على مدار الساعة للإجابة على استفساراتك وتقديم الدعم الفوري.",
      en : " This smart app is your AI-powered personal assistant for weight management and nutrition. It analyzes meal photos to accurately calculate calories and creates personalized nutrition plans tailored to your goals, while providing a virtual nutritionist available around the clock to answer your questions and offer immediate support."
    },
    fullDescription: {
      ar :"تطبيق (ذكي): منصة رقمية متطورة لإدارة التغذية والصحة اليومية باستخدام الذكاء الاصطناعي، تم بناؤها بإطار العمل Flutter وإدارة الحالة GetX. يتيح التطبيق حساب السعرات الحرارية فوراً عبر تحليل صور الوجبات بكاميرا الجوال، وابتكار خطط غذائية مخصصة، إلى جانب توفير شات تفاعلي ذكي يعمل كأخصائي تغذية افتراضي متاح على مدار الساعة، مدعوماً بسحابة supabase الآمنة لحفظ البيانات والاستمرارية.",
      en : "(Thaki) App: A cutting-edge digital platform for nutrition and health management driven by artificial intelligence, built with the Flutter framework and GetX state management. The app enables users to instantly calculate calories by analyzing meal photos via the smartphone camera and generates personalized, adaptive nutrition plans. Additionally, it features an interactive AI chatbot that acts as a 24/7 virtual nutritionist, all backed by a secure Subabase cloud backend for data persistence and user management."
    },
    techTags: ["Flutter",  "Supabase","Dart","GetX", "Vision API", "Gemini API"],
    image: "/Thaki.png",
    githubLink: "https://github.com/samahmed-art/thaki_app.git",
    liveLink: ""
  }
];
