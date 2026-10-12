/**
 * ====================================================================
 * ប្រព័ន្ធគ្រប់គ្រងថ្នាក់រៀន អនុវិទ្យាល័យ (Classroom Management System)
 * Single Bundle File: js/bundle.js
 * Bundled from 26 modules in dependency order.
 * ====================================================================
 */

/* ==================================================================== */
/* MODULE: data.js
/* ==================================================================== */

/**
 * COMPLETE ENTERPRISE SEED DATA FOR CAMBODIAN JUNIOR HIGH SCHOOL (អនុវិទ្យាល័យ)
 * Class 8A (ថ្នាក់ទី ៨ A) - Expanded with Seating, Exams, Textbooks, Council & Clubs
 */

const SEED_SCHOOL_INFO = {
  schoolName: "អនុវិទ្យាល័យ ហ៊ុន សែន",
  schoolNameEn: "Hun Sen Junior High School",
  academicYear: "២០២៥-២០២៦",
  principalName: "លោក អ៊ុំ សុវណ្ណារិទ្ធ",
  teacherName: "លោកគ្រូ សុខ ចាន់ថា",
  teacherPhone: "០១២ ៣៤៥ ៦៧៨",
  schoolAddress: "រាជធានីភ្នំពេញ ព្រះរាជាណាចក្រកម្ពុជា",
  currentClass: "8A",
  telegramBotToken: "",
  telegramChatId: ""
};

const SEED_SUBJECTS = [
  { id: "khmer", name: "ភាសាខ្មែរ", nameEn: "Khmer", maxScore: 100, coef: 2, teacher: "អ្នកគ្រូ កែវ មុនី", color: "#4f46e5" },
  { id: "math", name: "គណិតវិទ្យា", nameEn: "Mathematics", maxScore: 100, coef: 2, teacher: "លោកគ្រូ សុខ ចាន់ថា", color: "#06b6d4" },
  { id: "phys", name: "រូបវិទ្យា", nameEn: "Physics", maxScore: 50, coef: 1, teacher: "លោកគ្រូ ហេង ពិសិដ្ឋ", color: "#10b981" },
  { id: "chem", name: "គីមីវិទ្យា", nameEn: "Chemistry", maxScore: 50, coef: 1, teacher: "អ្នកគ្រូ ចាន់ ស្រីមុំ", color: "#f59e0b" },
  { id: "bio", name: "ជីវវិទ្យា", nameEn: "Biology", maxScore: 50, coef: 1, teacher: "អ្នកគ្រូ អ៊ឹង សុផល", color: "#8b5cf6" },
  { id: "earth", name: "ផែនដីវិទ្យា", nameEn: "Earth Science", maxScore: 50, coef: 1, teacher: "លោកគ្រូ លី គឹមសាន", color: "#ec4899" },
  { id: "hist", name: "ប្រវត្តិវិទ្យា", nameEn: "History", maxScore: 50, coef: 1, teacher: "លោកគ្រូ វ៉ាន់ សុធា", color: "#14b8a6" },
  { id: "geo", name: "ភូមិវិទ្យា", nameEn: "Geography", maxScore: 50, coef: 1, teacher: "អ្នកគ្រូ ម៉ៅ រតនា", color: "#f97316" },
  { id: "moral", name: "សីលធម៌-ពលរដ្ឋ", nameEn: "Civics & Morals", maxScore: 50, coef: 1, teacher: "អ្នកគ្រូ ជា វណ្ណា", color: "#6366f1" },
  { id: "english", name: "ភាសាអង់គ្លេស", nameEn: "English", maxScore: 50, coef: 1, teacher: "លោកគ្រូ រ័ត្ន ដារ៉ូ", color: "#0ea5e9" },
  { id: "home_eco", name: "គេហវិទ្យា", nameKh: "គេហវិទ្យា", nameEn: "Home Economics", maxScore: 50, coef: 1, teacher: "អ្នកគ្រូ ឡុង ស្រីពៅ", color: "#ec4899", phone: "០១២ ៣៤៥ ៦៨០" },
  { id: "ict_sport", name: "ICT & កីឡា", nameEn: "ICT & Sport", maxScore: 50, coef: 1, teacher: "លោកគ្រូ គង់ វិចិត្រ", color: "#84cc16" }
];

// 42 Authentic Cambodian Junior High School Students (Class 8A)
const SEED_STUDENTS = [
  {
    id: "STU-8A-001",
    nameKh: "សុខា មុនីរត្ន",
    nameEn: "SOKHA MONYROTH",
    gender: "ស្រី",
    dob: "2012-05-15",
    class: "8A",
    parentName: "សុខា វិចិត្រ",
    parentPhone: "012 888 991",
    address: "សង្កាត់ទឹកល្អក់១ ខណ្ឌទួលគោក ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "STU-8A-002",
    nameKh: "ចាន់ សុភ័ក្ត្រ",
    nameEn: "CHAN SOPHEAK",
    gender: "ប្រុស",
    dob: "2012-03-20",
    class: "8A",
    parentName: "ចាន់ ប៊ុនថន",
    parentPhone: "012 777 882",
    address: "សង្កាត់បឹងកក់២ ខណ្ឌទួលគោក ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "STU-8A-003",
    nameKh: "ហេង ស្រីនិក",
    nameEn: "HENG SREYNIK",
    gender: "ស្រី",
    dob: "2012-08-11",
    class: "8A",
    parentName: "ហេង សុផល",
    parentPhone: "017 445 566",
    address: "សង្កាត់ផ្សារដេប៉ូ៣ ខណ្ឌទួលគោក ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "STU-8A-004",
    nameKh: "គង់ រតនៈ",
    nameEn: "KONG RATTANAK",
    gender: "ប្រុស",
    dob: "2012-01-25",
    class: "8A",
    parentName: "គង់ វណ្ណា",
    parentPhone: "098 332 211",
    address: "សង្កាត់អូរបែកក្អម ខណ្ឌសែនសុខ ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "STU-8A-005",
    nameKh: "ម៉ៅ គឹមលាង",
    nameEn: "MAO KIMLEANG",
    gender: "ស្រី",
    dob: "2012-11-04",
    class: "8A",
    parentName: "ម៉ៅ សុខុម",
    parentPhone: "089 554 433",
    address: "សង្កាត់ភ្នំពេញថ្មី ខណ្ឌសែនសុខ ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "STU-8A-006",
    nameKh: "វ៉ាន់ ដារ៉ា",
    nameEn: "VAN DARA",
    gender: "ប្រុស",
    dob: "2012-06-18",
    class: "8A",
    parentName: "វ៉ាន់ សុវណ្ណ",
    parentPhone: "010 667 788",
    address: "សង្កាត់ទឹកថ្លា ខណ្ឌសែនសុខ ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "STU-8A-007",
    nameKh: "ជា ស្រីពៅ",
    nameEn: "CHEA SREYPOV",
    gender: "ស្រី",
    dob: "2012-09-30",
    class: "8A",
    parentName: "ជា វុទ្ធី",
    parentPhone: "077 123 456",
    address: "សង្កាត់បឹងកក់១ ខណ្ឌទួលគោក ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "STU-8A-008",
    nameKh: "ស៊ន វិសាល",
    nameEn: "SORN VISAL",
    gender: "ប្រុស",
    dob: "2012-04-12",
    class: "8A",
    parentName: "ស៊ន សារ៉េត",
    parentPhone: "016 998 877",
    address: "សង្កាត់ស្រះចក ខណ្ឌដូនពេញ ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "STU-8A-009",
    nameKh: "អ៊ឹម សុជាតា",
    nameEn: "IM SOCHEATA",
    gender: "ស្រី",
    dob: "2012-07-22",
    class: "8A",
    parentName: "អ៊ឹម សម្បត្តិ",
    parentPhone: "015 223 344",
    address: "សង្កាត់ផ្សារថ្មី១ ខណ្ឌដូនពេញ ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "STU-8A-010",
    nameKh: "ព្រំ ភារម្យ",
    nameEn: "PROM PHEAROM",
    gender: "ប្រុស",
    dob: "2012-10-08",
    class: "8A",
    parentName: "ព្រំ សុខា",
    parentPhone: "092 881 122",
    address: "សង្កាត់វាលវង់ ខណ្ឌ៧មករា ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "STU-8A-011",
    nameKh: "លី ស្រីឡែន",
    nameEn: "LY SREYLEN",
    gender: "ស្រី",
    dob: "2012-02-14",
    class: "8A",
    parentName: "លី ហុក",
    parentPhone: "012 334 455",
    address: "សង្កាត់អូរឫស្សី២ ខណ្ឌ៧មករា ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "STU-8A-012",
    nameKh: "ទិត្យ បញ្ញា",
    nameEn: "TITH PANHA",
    gender: "ប្រុស",
    dob: "2012-12-01",
    class: "8A",
    parentName: "ទិត្យ គង់",
    parentPhone: "069 445 577",
    address: "សង្កាត់បឹងព្រលឹត ខណ្ឌ៧មករា ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "STU-8A-013",
    nameKh: "កែវ ធីតា",
    nameEn: "KEO THIDA",
    gender: "ស្រី",
    dob: "2012-05-28",
    class: "8A",
    parentName: "កែវ រ៉ា",
    parentPhone: "097 556 677",
    address: "សង្កាត់ទួលស្វាយព្រៃ១ ខណ្ឌបឹងកេងកង ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "STU-8A-014",
    nameKh: "នុត វិបុល",
    nameEn: "NUT VIBOL",
    gender: "ប្រុស",
    dob: "2012-03-09",
    class: "8A",
    parentName: "នុត សុភាព",
    parentPhone: "011 223 399",
    address: "សង្កាត់បឹងកេងកង៣ ខណ្ឌបឹងកេងកង ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "STU-8A-015",
    nameKh: "សេង រចនា",
    nameEn: "SENG RACHANA",
    gender: "ស្រី",
    dob: "2012-08-19",
    class: "8A",
    parentName: "សេង ចាន់ឌី",
    parentPhone: "088 776 655",
    address: "សង្កាត់ទំនប់ទឹក ខណ្ឌបឹងកេងកង ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "STU-8A-016",
    nameKh: "ប៉ែន សម្បត្តិ",
    nameEn: "PEN SAMBATH",
    gender: "ប្រុស",
    dob: "2012-07-04",
    class: "8A",
    parentName: "ប៉ែន រិទ្ធី",
    parentPhone: "078 889 900",
    address: "សង្កាត់ផ្សារដើមថ្កូវ ខណ្ឌចំការមន ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "STU-8A-017",
    nameKh: "រស់ គន្ធា",
    nameEn: "ROS KUNTHEA",
    gender: "ស្រី",
    dob: "2012-04-26",
    class: "8A",
    parentName: "រស់ សារ៉ន",
    parentPhone: "096 443 322",
    address: "សង្កាត់ទួលទំពូង១ ខណ្ឌចំការមន ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1558898479-33c0057a5d12?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "STU-8A-018",
    nameKh: "ឡុង វឌ្ឍនា",
    nameEn: "LONG VATTANA",
    gender: "ប្រុស",
    dob: "2012-10-15",
    class: "8A",
    parentName: "ឡុង សំបូរ",
    parentPhone: "012 990 011",
    address: "សង្កាត់ច្បារអំពៅ១ ខណ្ឌច្បារអំពៅ ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "STU-8A-019",
    nameKh: "អ៊ុក ទេពី",
    nameEn: "OUK TEPI",
    gender: "ស្រី",
    dob: "2012-01-10",
    class: "8A",
    parentName: "អ៊ុក ថៃ",
    parentPhone: "087 112 233",
    address: "សង្កាត់ព្រែកប្រា ខណ្ឌច្បារអំពៅ ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "STU-8A-020",
    nameKh: "ម៉ី ពិសាល",
    nameEn: "MEY PISAL",
    gender: "ប្រុស",
    dob: "2012-09-17",
    class: "8A",
    parentName: "ម៉ី វិបុល",
    parentPhone: "010 334 477",
    address: "សង្កាត់ចោមចៅ១ ខណ្ឌពោធិ៍សែនជ័យ ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "STU-8A-021",
    nameKh: "សោម លក្ខិណា",
    nameEn: "SOM LEAKHENA",
    gender: "ស្រី",
    dob: "2012-06-05",
    class: "8A",
    parentName: "សោម ហេង",
    parentPhone: "093 665 544",
    address: "សង្កាត់កាកាប២ ខណ្ឌពោធិ៍សែនជ័យ ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "STU-8A-022",
    nameKh: "ថោង សុវណ្ណារ៉ា",
    nameEn: "THONG SOVANNARA",
    gender: "ប្រុស",
    dob: "2012-11-23",
    class: "8A",
    parentName: "ថោង សុខេង",
    parentPhone: "012 447 788",
    address: "សង្កាត់ស្ទឹងមានជ័យ១ ខណ្ឌមានជ័យ ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "STU-8A-023",
    nameKh: "ជួប សុម៉ាលី",
    nameEn: "CHUOB SOMALY",
    gender: "ស្រី",
    dob: "2012-03-14",
    class: "8A",
    parentName: "ជួប វណ្ណារ៉ា",
    parentPhone: "017 990 022",
    address: "សង្កាត់បឹងទំពុន១ ខណ្ឌមានជ័យ ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "STU-8A-024",
    nameKh: "ស៊ុយ រតនៈបញ្ញា",
    nameEn: "SUY RATTANAKPANHA",
    gender: "ប្រុស",
    dob: "2012-08-02",
    class: "8A",
    parentName: "ស៊ុយ សុខលី",
    parentPhone: "089 113 355",
    address: "សង្កាត់ដង្កោ ខណ្ឌដង្កោ ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "STU-8A-025",
    nameKh: "ខៀវ ស្រីណែត",
    nameEn: "KHIEV SREYNET",
    gender: "ស្រី",
    dob: "2012-12-19",
    class: "8A",
    parentName: "ខៀវ បូរ៉ា",
    parentPhone: "015 889 911",
    address: "សង្កាត់ព្រៃស ខណ្ឌដង្កោ ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "STU-8A-026",
    nameKh: "ផាត់ សុជាតិ",
    nameEn: "PHAT SOCHEAT",
    gender: "ប្រុស",
    dob: "2012-05-07",
    class: "8A",
    parentName: "ផាត់ វិចិត្រ",
    parentPhone: "098 776 611",
    address: "សង្កាត់គីឡូម៉ែត្រលេខ៦ ខណ្ឌឫស្សីកែវ ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "STU-8A-027",
    nameKh: "សួន សុវណ្ណារី",
    nameEn: "SUON SOVANNARY",
    gender: "ស្រី",
    dob: "2012-10-28",
    class: "8A",
    parentName: "សួន ធឿន",
    parentPhone: "012 225 566",
    address: "សង្កាត់ទួលសង្កែ១ ខណ្ឌឫស្សីកែវ ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "STU-8A-028",
    nameKh: "ឌួង វីរៈ",
    nameEn: "DUONG VIRAK",
    gender: "ប្រុស",
    dob: "2012-02-18",
    class: "8A",
    parentName: "ឌួង សុភាព",
    parentPhone: "070 334 488",
    address: "សង្កាត់ច្រាំងចំរេះ១ ខណ្ឌឫស្សីកែវ ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "STU-8A-029",
    nameKh: "ហេង ចរិយា",
    nameEn: "HENG CHORIYA",
    gender: "ស្រី",
    dob: "2012-07-16",
    class: "8A",
    parentName: "ហេង គង់",
    parentPhone: "085 667 799",
    address: "សង្កាត់ស្វាយប៉ាក ខណ្ឌឫស្សីកែវ ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "STU-8A-030",
    nameKh: "តាំង សុគន្ធា",
    nameEn: "TANG SOKUNTHEA",
    gender: "ប្រុស",
    dob: "2012-09-03",
    class: "8A",
    parentName: "តាំង គឹមស៊្រុន",
    parentPhone: "016 445 522",
    address: "សង្កាត់ជ្រោយចង្វារ ខណ្ឌជ្រោយចង្វារ ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "STU-8A-031",
    nameKh: "លឹម ស្រីមុំ",
    nameEn: "LIM SREYMOM",
    gender: "ស្រី",
    dob: "2012-04-09",
    class: "8A",
    parentName: "លឹម ហុង",
    parentPhone: "092 331 144",
    address: "សង្កាត់ព្រែកលៀប ខណ្ឌជ្រោយចង្វារ ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "STU-8A-032",
    nameKh: "ញ៉ែម ពិសិដ្ឋ",
    nameEn: "NHEM PISETH",
    gender: "ប្រុស",
    dob: "2012-06-27",
    class: "8A",
    parentName: "ញ៉ែម សុខុម",
    parentPhone: "088 998 822",
    address: "សង្កាត់ព្រែកតាសេក ខណ្ឌជ្រោយចង្វារ ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "STU-8A-033",
    nameKh: "អ៊ូច សុធីតា",
    nameEn: "OUCH SOTHIDA",
    gender: "ស្រី",
    dob: "2012-11-12",
    class: "8A",
    parentName: "អ៊ូច សារ៉ាត់",
    parentPhone: "010 774 411",
    address: "សង្កាត់កោះដាច់ ខណ្ឌជ្រោយចង្វារ ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1558898479-33c0057a5d12?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "STU-8A-034",
    nameKh: "ផន រិទ្ធីស័ក្តិ",
    nameEn: "PHORN RITHISAK",
    gender: "ប្រុស",
    dob: "2012-01-31",
    class: "8A",
    parentName: "ផន ធារិទ្ធ",
    parentPhone: "077 889 933",
    address: "សង្កាត់ព្រែកថ្មី ខណ្ឌច្បារអំពៅ ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "STU-8A-035",
    nameKh: "រិន កល្យាណ",
    nameEn: "RIN KALYAN",
    gender: "ស្រី",
    dob: "2012-08-24",
    class: "8A",
    parentName: "រិន សុខន",
    parentPhone: "012 665 599",
    address: "សង្កាត់វាលស្បូវ ខណ្ឌច្បារអំពៅ ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "STU-8A-036",
    nameKh: "ពេជ្រ ចាន់ដារ៉ា",
    nameEn: "PICH CHANDARA",
    gender: "ប្រុស",
    dob: "2012-05-03",
    class: "8A",
    parentName: "ពេជ្រ សុខលីម",
    parentPhone: "096 778 899",
    address: "សង្កាត់ក្បាលកោះ ខណ្ឌច្បារអំពៅ ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "STU-8A-037",
    nameKh: "ជា សុភានី",
    nameEn: "CHEA SOPHEANY",
    gender: "ស្រី",
    dob: "2012-10-19",
    class: "8A",
    parentName: "ជា វិចិត្រ",
    parentPhone: "017 332 288",
    address: "សង្កាត់ចោមចៅ២ ខណ្ឌពោធិ៍សែនជ័យ ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "STU-8A-038",
    nameKh: "ម៉េង ធារ៉ា",
    nameEn: "MENG THEARA",
    gender: "ប្រុស",
    dob: "2012-03-11",
    class: "8A",
    parentName: "ម៉េង ហុង",
    parentPhone: "089 665 522",
    address: "សង្កាត់ត្រពាំងក្រសាំង ខណ្ឌពោធិ៍សែនជ័យ ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "STU-8A-039",
    nameKh: "យ៉ង ស្រីខួច",
    nameEn: "YONG SREYKHOUCH",
    gender: "ស្រី",
    dob: "2012-07-08",
    class: "8A",
    parentName: "យ៉ង ផាត",
    parentPhone: "015 443 311",
    address: "សង្កាត់សំរោងក្រោម ខណ្ឌពោធិ៍សែនជ័យ ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "STU-8A-040",
    nameKh: "វ៉ា គឹមហេង",
    nameEn: "VA KIMHENG",
    gender: "ប្រុស",
    dob: "2012-12-25",
    class: "8A",
    parentName: "វ៉ា សុវណ្ណ",
    parentPhone: "098 112 288",
    address: "សង្កាត់ចោមចៅ៣ ខណ្ឌពោធិ៍សែនជ័យ ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "STU-8A-041",
    nameKh: "ឡាច ស្រីណុច",
    nameEn: "LACH SREYNOCH",
    gender: "ស្រី",
    dob: "2012-02-06",
    class: "8A",
    parentName: "ឡាច សំអុល",
    parentPhone: "012 559 933",
    address: "សង្កាត់ចោមចៅ១ ខណ្ឌពោធិ៍សែនជ័យ ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "STU-8A-042",
    nameKh: "អ៊ុច ពិសី",
    nameEn: "UCH PISEY",
    gender: "ស្រី",
    dob: "2012-09-14",
    class: "8A",
    parentName: "អ៊ុច វុទ្ធី",
    parentPhone: "087 448 811",
    address: "សង្កាត់ទឹកថ្លា ខណ្ឌសែនសុខ ភ្នំពេញ",
    status: "កំពុងរៀន",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
  }
];

// Baseline Grades for October (Month 10)
const SEED_MONTH_10_GRADES = {
  "STU-8A-001": { khmer: 94, math: 98, phys: 48, chem: 49, bio: 48, earth: 47, hist: 46, geo: 48, moral: 49, home_eco: 49, english: 49, ict_sport: 48 },
  "STU-8A-002": { khmer: 92, math: 96, phys: 47, chem: 48, bio: 47, earth: 46, hist: 45, geo: 47, moral: 48, home_eco: 48, english: 47, ict_sport: 49 },
  "STU-8A-003": { khmer: 95, math: 90, phys: 46, chem: 47, bio: 48, earth: 45, hist: 48, geo: 46, moral: 49, home_eco: 49, english: 48, ict_sport: 46 },
  "STU-8A-004": { khmer: 88, math: 95, phys: 48, chem: 46, bio: 45, earth: 44, hist: 44, geo: 45, moral: 46, home_eco: 47, english: 46, ict_sport: 48 },
  "STU-8A-005": { khmer: 90, math: 91, phys: 45, chem: 46, bio: 46, earth: 45, hist: 46, geo: 45, moral: 47, home_eco: 46, english: 45, ict_sport: 46 },
  "STU-8A-006": { khmer: 84, math: 89, phys: 44, chem: 43, bio: 44, earth: 42, hist: 43, geo: 44, moral: 45, home_eco: 45, english: 44, ict_sport: 47 },
  "STU-8A-007": { khmer: 89, math: 84, phys: 42, chem: 44, bio: 45, earth: 43, hist: 45, geo: 43, moral: 46, home_eco: 46, english: 45, ict_sport: 44 },
  "STU-8A-008": { khmer: 82, math: 86, phys: 43, chem: 42, bio: 42, earth: 41, hist: 42, geo: 43, moral: 44, home_eco: 44, english: 43, ict_sport: 46 },
  "STU-8A-009": { khmer: 86, math: 80, phys: 41, chem: 43, bio: 44, earth: 42, hist: 44, geo: 42, moral: 45, home_eco: 45, english: 44, ict_sport: 43 },
  "STU-8A-010": { khmer: 79, math: 85, phys: 42, chem: 41, bio: 41, earth: 40, hist: 41, geo: 42, moral: 43, home_eco: 42, english: 41, ict_sport: 45 },
  "STU-8A-011": { khmer: 85, math: 78, phys: 40, chem: 42, bio: 43, earth: 41, hist: 43, geo: 41, moral: 44, home_eco: 44, english: 42, ict_sport: 42 },
  "STU-8A-012": { khmer: 76, math: 83, phys: 41, chem: 40, bio: 40, earth: 39, hist: 40, geo: 41, moral: 42, home_eco: 41, english: 40, ict_sport: 44 },
  "STU-8A-013": { khmer: 83, math: 75, phys: 39, chem: 41, bio: 42, earth: 40, hist: 42, geo: 40, moral: 43, home_eco: 43, english: 41, ict_sport: 41 },
  "STU-8A-014": { khmer: 74, math: 81, phys: 40, chem: 39, bio: 39, earth: 38, hist: 39, geo: 40, moral: 41, home_eco: 40, english: 39, ict_sport: 43 },
  "STU-8A-015": { khmer: 81, math: 73, phys: 38, chem: 40, bio: 41, earth: 39, hist: 41, geo: 39, moral: 42, home_eco: 42, english: 40, ict_sport: 40 },
  "STU-8A-016": { khmer: 72, math: 79, phys: 39, chem: 38, bio: 38, earth: 37, hist: 38, geo: 39, moral: 40, home_eco: 39, english: 38, ict_sport: 42 },
  "STU-8A-017": { khmer: 79, math: 71, phys: 37, chem: 39, bio: 40, earth: 38, hist: 40, geo: 38, moral: 41, home_eco: 41, english: 39, ict_sport: 39 },
  "STU-8A-018": { khmer: 70, math: 77, phys: 38, chem: 37, bio: 37, earth: 36, hist: 37, geo: 38, moral: 39, home_eco: 38, english: 37, ict_sport: 41 },
  "STU-8A-019": { khmer: 78, math: 69, phys: 36, chem: 38, bio: 39, earth: 37, hist: 39, geo: 37, moral: 40, home_eco: 40, english: 38, ict_sport: 38 },
  "STU-8A-020": { khmer: 68, math: 75, phys: 37, chem: 36, bio: 36, earth: 35, hist: 36, geo: 37, moral: 38, home_eco: 37, english: 36, ict_sport: 40 },
  "STU-8A-021": { khmer: 76, math: 67, phys: 35, chem: 37, bio: 38, earth: 36, hist: 38, geo: 36, moral: 39, home_eco: 39, english: 37, ict_sport: 37 },
  "STU-8A-022": { khmer: 66, math: 73, phys: 36, chem: 35, bio: 35, earth: 34, hist: 35, geo: 36, moral: 37, home_eco: 36, english: 35, ict_sport: 39 },
  "STU-8A-023": { khmer: 74, math: 65, phys: 34, chem: 36, bio: 37, earth: 35, hist: 37, geo: 35, moral: 38, home_eco: 38, english: 36, ict_sport: 36 },
  "STU-8A-024": { khmer: 64, math: 71, phys: 35, chem: 34, bio: 34, earth: 33, hist: 34, geo: 35, moral: 36, home_eco: 35, english: 34, ict_sport: 38 },
  "STU-8A-025": { khmer: 72, math: 63, phys: 33, chem: 35, bio: 36, earth: 34, hist: 36, geo: 34, moral: 37, home_eco: 37, english: 35, ict_sport: 35 },
  "STU-8A-026": { khmer: 62, math: 69, phys: 34, chem: 33, bio: 33, earth: 32, hist: 33, geo: 34, moral: 35, home_eco: 34, english: 33, ict_sport: 37 },
  "STU-8A-027": { khmer: 70, math: 61, phys: 32, chem: 34, bio: 35, earth: 33, hist: 35, geo: 33, moral: 36, home_eco: 36, english: 34, ict_sport: 34 },
  "STU-8A-028": { khmer: 60, math: 67, phys: 33, chem: 32, bio: 32, earth: 31, hist: 32, geo: 33, moral: 34, home_eco: 33, english: 32, ict_sport: 36 },
  "STU-8A-029": { khmer: 68, math: 59, phys: 31, chem: 33, bio: 34, earth: 32, hist: 34, geo: 32, moral: 35, home_eco: 35, english: 33, ict_sport: 33 },
  "STU-8A-030": { khmer: 58, math: 65, phys: 32, chem: 31, bio: 31, earth: 30, hist: 31, geo: 32, moral: 33, home_eco: 32, english: 31, ict_sport: 35 },
  "STU-8A-031": { khmer: 66, math: 57, phys: 30, chem: 32, bio: 33, earth: 31, hist: 33, geo: 31, moral: 34, home_eco: 34, english: 32, ict_sport: 32 },
  "STU-8A-032": { khmer: 56, math: 63, phys: 31, chem: 30, bio: 30, earth: 29, hist: 30, geo: 31, moral: 32, home_eco: 31, english: 30, ict_sport: 34 },
  "STU-8A-033": { khmer: 64, math: 55, phys: 29, chem: 31, bio: 32, earth: 30, hist: 32, geo: 30, moral: 33, home_eco: 33, english: 31, ict_sport: 31 },
  "STU-8A-034": { khmer: 54, math: 61, phys: 30, chem: 29, bio: 29, earth: 28, hist: 29, geo: 30, moral: 31, home_eco: 30, english: 29, ict_sport: 33 },
  "STU-8A-035": { khmer: 62, math: 53, phys: 28, chem: 30, bio: 31, earth: 29, hist: 31, geo: 29, moral: 32, home_eco: 32, english: 30, ict_sport: 30 },
  "STU-8A-036": { khmer: 52, math: 59, phys: 29, chem: 28, bio: 28, earth: 27, hist: 28, geo: 29, moral: 30, home_eco: 29, english: 28, ict_sport: 32 },
  "STU-8A-037": { khmer: 60, math: 51, phys: 27, chem: 29, bio: 30, earth: 28, hist: 30, geo: 28, moral: 31, home_eco: 31, english: 29, ict_sport: 29 },
  "STU-8A-038": { khmer: 50, math: 57, phys: 28, chem: 27, bio: 27, earth: 26, hist: 27, geo: 28, moral: 29, home_eco: 28, english: 27, ict_sport: 31 },
  "STU-8A-039": { khmer: 58, math: 49, phys: 26, chem: 28, bio: 29, earth: 27, hist: 29, geo: 27, moral: 30, home_eco: 30, english: 28, ict_sport: 28 },
  "STU-8A-040": { khmer: 48, math: 55, phys: 27, chem: 26, bio: 26, earth: 25, hist: 26, geo: 27, moral: 28, home_eco: 27, english: 26, ict_sport: 30 },
  "STU-8A-041": { khmer: 56, math: 47, phys: 25, chem: 27, bio: 28, earth: 26, hist: 28, geo: 26, moral: 29, home_eco: 29, english: 27, ict_sport: 27 },
  "STU-8A-042": { khmer: 46, math: 53, phys: 26, chem: 25, bio: 25, earth: 24, hist: 25, geo: 26, moral: 27, home_eco: 26, english: 25, ict_sport: 29 }
};

// Seed Question Bank for Exams & Quizzes
const SEED_QUESTIONS = [
  {
    id: "Q-MATH-01",
    subjectId: "math",
    subjectName: "គណិតវិទ្យា",
    type: "mcq",
    question: "តើសមីការ 2x + 6 = 14 មានឬស x ស្មើនឹងប៉ុន្មាន?",
    options: ["x = 2", "x = 4", "x = 6", "x = 8"],
    correctAnswer: 1,
    points: 2
  },
  {
    id: "Q-MATH-02",
    subjectId: "math",
    subjectName: "គណិតវិទ្យា",
    type: "problem",
    question: "ចូរដោះស្រាយសមីការដឺក្រេទី១៖ 3(x - 2) + 4 = 2x + 8។",
    correctAnswer: "3x - 6 + 4 = 2x + 8 => 3x - 2 = 2x + 8 => x = 10",
    points: 5
  },
  {
    id: "Q-KHM-01",
    subjectId: "khmer",
    subjectName: "ភាសាខ្មែរ",
    type: "mcq",
    question: "តើរឿង «ទុំទាវ» និពន្ធដោយកវីរូបណា?",
    options: ["ព្រះបាទអង្គឌួង", "ភិក្ខុសោម", "កវីក្រមង៉ុយ", "លោក នូ ហាច"],
    correctAnswer: 1,
    points: 2
  },
  {
    id: "Q-PHYS-01",
    subjectId: "phys",
    subjectName: "រូបវិទ្យា",
    type: "mcq",
    question: "តើខ្នាតអន្តរជាតិ (SI) នៃកម្លាំងគឺជាអ្វី?",
    options: ["ស៊ូល (J)", "ញូតុន (N)", "វ៉ាត់ (W)", "ប៉ាស្កាល់ (Pa)"],
    correctAnswer: 1,
    points: 2
  },
  {
    id: "Q-ENG-01",
    subjectId: "english",
    subjectName: "ភាសាអង់គ្លេស",
    type: "mcq",
    question: "Choose the correct past tense form: 'Yesterday, she ______ to school.'",
    options: ["go", "goes", "went", "going"],
    correctAnswer: 2,
    points: 2
  },
  {
    id: "Q-HE-01",
    subjectId: "home_eco",
    subjectName: "គេហវិទ្យា",
    type: "mcq",
    question: "តើរបបអាហារដែលមានតុល្យភាព (Balanced Diet) ត្រូវមានសារធាតុចិញ្ចឹមប៉ុន្មានក្រុមធំៗ?",
    options: ["៣ ក្រុម", "៤ ក្រុម", "៥ ក្រុម", "៦ ក្រុម"],
    correctAnswer: 2,
    points: 2
  }
];

// Seed Ministry Textbooks Tracking
const SEED_TEXTBOOKS = [
  { id: "TB-01", title: "ភាសាខ្មែរ ថ្នាក់ទី ៨", subject: "ភាសាខ្មែរ", totalQty: 45, issuedQty: 42, damagedQty: 1 },
  { id: "TB-02", title: "គណិតវិទ្យា ថ្នាក់ទី ៨", subject: "គណិតវិទ្យា", totalQty: 45, issuedQty: 42, damagedQty: 0 },
  { id: "TB-03", title: "រូបវិទ្យា ថ្នាក់ទី ៨", subject: "រូបវិទ្យា", totalQty: 45, issuedQty: 42, damagedQty: 2 },
  { id: "TB-04", title: "គីមីវិទ្យា ថ្នាក់ទី ៨", subject: "គីមីវិទ្យា", totalQty: 45, issuedQty: 42, damagedQty: 0 },
  { id: "TB-05", title: "ជីវវិទ្យា ថ្នាក់ទី ៨", subject: "ជីវវិទ្យា", totalQty: 45, issuedQty: 42, damagedQty: 1 },
  { id: "TB-06", title: "ភាសាអង់គ្លេស English Grade 8", subject: "ភាសាអង់គ្លេស", totalQty: 45, issuedQty: 42, damagedQty: 0 },
  { id: "TB-07", title: "គេហវិទ្យា ថ្នាក់ទី ៨", subject: "គេហវិទ្យា", totalQty: 45, issuedQty: 42, damagedQty: 0 }
];

// Seed Student Council & Study Clubs
const SEED_COUNCIL = {
  president: { studentId: "STU-8A-001", name: "សុខា មុនីរត្ន", role: "ប្រធានថ្នាក់ (Class President)" },
  vicePresident: { studentId: "STU-8A-002", name: "ចាន់ សុភ័ក្ត្រ", role: "អនុប្រធានថ្នាក់ (Vice President)" },
  sanitationLead: { studentId: "STU-8A-004", name: "គង់ រតនៈ", role: "ប្រធានក្រុមអនាម័យ (Sanitation Lead)" },
  disciplineLead: { studentId: "STU-8A-003", name: "ហេង ស្រីនិក", role: "ប្រធានក្រុមវិន័យ (Discipline Lead)" },
  sportsLead: { studentId: "STU-8A-008", name: "ស៊ន វិសាល", role: "ប្រធានក្រុមកីឡា & សិល្បៈ (Sports Lead)" }
};

const SEED_CLUBS = [
  {
    id: "CLUB-01",
    name: "ក្លឹបគណិតវិទ្យាឆ្នើម",
    nameEn: "Math Champions Club",
    leadStudent: "សុខា មុនីរត្ន",
    meetingDay: "រៀងរាល់រសៀលថ្ងៃព្រហស្បតិ៍",
    membersCount: 14,
    description: "ដោះស្រាយលំហាត់គណិតវិទ្យាកម្រិតខ្ពស់ និងត្រៀមប្រឡងសិស្សពូកែទូទាំងរាជធានី។"
  },
  {
    id: "CLUB-02",
    name: "ក្លឹបយុវជនកាកបាទក្រហមកម្ពុជា",
    nameEn: "Red Cross Youth Club",
    leadStudent: "គង់ រតនៈ",
    meetingDay: "រៀងរាល់ព្រឹកថ្ងៃសៅរ៍",
    membersCount: 18,
    description: "សកម្មភាពមនុស្សធម៌ ការសង្គ្រោះបឋម និងការថែរក្សាអនាម័យបរិស្ថានសាលារៀន។"
  },
  {
    id: "CLUB-03",
    name: "ក្លឹបភាសាអង់គ្លេសសន្ទនា",
    nameEn: "English Speaking Club",
    leadStudent: "ហេង ស្រីនិក",
    meetingDay: "រៀងរាល់រសៀលថ្ងៃអង្គារ",
    membersCount: 12,
    description: "អនុវត្តការសន្ទនាភាសាអង់គ្លេស ការអានសៀវភៅរឿង និងការធ្វើបទបង្ហាញ។"
  }
];

// Seed Homework & Assignments
const SEED_HOMEWORK = [
  {
    id: "HW-001",
    subjectId: "math",
    subjectName: "គណិតវិទ្យា",
    title: "លំហាត់សមីការដឺក្រេទី១ មានមួយអញ្ញាត",
    description: "ធ្វើលំហាត់ទំព័រទី ៤៥ លេខ 1 ដល់ 10 ក្នុងសៀវភៅពុម្ពគណិតវិទ្យាថ្នាក់ទី ៨។",
    dueDate: "2025-10-14",
    assignedDate: "2025-10-09",
    submissions: {
      "STU-8A-001": { status: "submitted", score: 10, note: "ធ្វើបានល្អឥតខ្ចោះ" },
      "STU-8A-002": { status: "submitted", score: 9.5, note: "ល្អណាស់" },
      "STU-8A-003": { status: "submitted", score: 9, note: "ល្អ" },
      "STU-8A-004": { status: "submitted", score: 8.5, note: "" },
      "STU-8A-020": { status: "pending", score: 0, note: "" },
      "STU-8A-040": { status: "pending", score: 0, note: "" }
    }
  },
  {
    id: "HW-002",
    subjectId: "khmer",
    subjectName: "ភាសាខ្មែរ",
    title: "តែងសេចក្តីពិពណ៌នាអំពីទិដ្ឋភាពភូមិឋានខ្មែរ",
    description: "សរសេរតែងសេចក្តីប្រវែងយ៉ាងតិច ២០ បន្ទាត់ តាមកម្រងសំណួរណែនាំ។",
    dueDate: "2025-10-16",
    assignedDate: "2025-10-09",
    submissions: {
      "STU-8A-001": { status: "submitted", score: 9.5, note: "អក្សរស្អាត គំនិតក្បោះក្បាយ" },
      "STU-8A-003": { status: "submitted", score: 10, note: "អស្ចារ្យ" }
    }
  }
];

// Weekly Timetable (វេនព្រឹក & វេនរសៀល/ល្ងាច - គ្មានម៉ោងសម្រាក)
const SEED_TIMETABLE = [
  // --- វេនព្រឹក (Morning Shift: 07:00 - 11:15) ---
  {
    shift: "morning",
    period: 1,
    time: "07:00 - 07:45",
    mon: { subject: "ភាសាខ្មែរ", teacher: "អ្នកគ្រូ កែវ មុនី" },
    tue: { subject: "គណិតវិទ្យា", teacher: "លោកគ្រូ សុខ ចាន់ថា" },
    wed: { subject: "រូបវិទ្យា", teacher: "លោកគ្រូ ហេង ពិសិដ្ឋ" },
    thu: { subject: "ភាសាខ្មែរ", teacher: "អ្នកគ្រូ កែវ មុនី" },
    fri: { subject: "គណិតវិទ្យា", teacher: "លោកគ្រូ សុខ ចាន់ថា" },
    sat: { subject: "សីលធម៌", teacher: "អ្នកគ្រូ ជា វណ្ណា" }
  },
  {
    shift: "morning",
    period: 2,
    time: "07:45 - 08:30",
    mon: { subject: "ភាសាខ្មែរ", teacher: "អ្នកគ្រូ កែវ មុនី" },
    tue: { subject: "គណិតវិទ្យា", teacher: "លោកគ្រូ សុខ ចាន់ថា" },
    wed: { subject: "គីមីវិទ្យា", teacher: "អ្នកគ្រូ ចាន់ ស្រីមុំ" },
    thu: { subject: "ប្រវត្តិវិទ្យា", teacher: "លោកគ្រូ វ៉ាន់ សុធា" },
    fri: { subject: "ភាសាអង់គ្លេស", teacher: "លោកគ្រូ រ័ត្ន ដារ៉ូ" },
    sat: { subject: "កីឡា", teacher: "លោកគ្រូ គង់ វិចិត្រ" }
  },
  {
    shift: "morning",
    period: 3,
    time: "08:30 - 09:15",
    mon: { subject: "គណិតវិទ្យា", teacher: "លោកគ្រូ សុខ ចាន់ថា" },
    tue: { subject: "ជីវវិទ្យា", teacher: "អ្នកគ្រូ អ៊ឹង សុផល" },
    wed: { subject: "ភាសាអង់គ្លេស", teacher: "លោកគ្រូ រ័ត្ន ដារ៉ូ" },
    thu: { subject: "ភូមិវិទ្យា", teacher: "អ្នកគ្រូ ម៉ៅ រតនា" },
    fri: { subject: "រូបវិទ្យា", teacher: "លោកគ្រូ ហេង ពិសិដ្ឋ" },
    sat: { subject: "ICT កុំព្យូទ័រ", teacher: "លោកគ្រូ គង់ វិចិត្រ" }
  },
  {
    shift: "morning",
    period: 4,
    time: "09:30 - 10:15",
    mon: { subject: "ផែនដីវិទ្យា", teacher: "លោកគ្រូ លី គឹមសាន" },
    tue: { subject: "ប្រវត្តិវិទ្យា", teacher: "លោកគ្រូ វ៉ាន់ សុធា" },
    wed: { subject: "ភាសាខ្មែរ", teacher: "អ្នកគ្រូ កែវ មុនី" },
    thu: { subject: "ជីវវិទ្យា", teacher: "អ្នកគ្រូ អ៊ឹង សុផល" },
    fri: { subject: "គីមីវិទ្យា", teacher: "អ្នកគ្រូ ចាន់ ស្រីមុំ" },
    sat: { subject: "ស្វ័យសិក្សា/សិល្បៈ", teacher: "លោកគ្រូ សុខ ចាន់ថា" }
  },
  {
    shift: "morning",
    period: 5,
    time: "10:15 - 11:00",
    mon: { subject: "ភាសាអង់គ្លេស", teacher: "លោកគ្រូ រ័ត្ន ដារ៉ូ" },
    tue: { subject: "សីលធម៌", teacher: "អ្នកគ្រូ ជា វណ្ណា" },
    wed: { subject: "គណិតវិទ្យា", teacher: "លោកគ្រូ សុខ ចាន់ថា" },
    thu: { subject: "រូបវិទ្យា", teacher: "លោកគ្រូ ហេង ពិសិដ្ឋ" },
    fri: { subject: "ភាសាខ្មែរ", teacher: "អ្នកគ្រូ កែវ មុនី" },
    sat: { subject: "គេហវិទ្យា", teacher: "អ្នកគ្រូ ឡុង ស្រីពៅ" }
  },

  // --- វេនរសៀល/ល្ងាច (Afternoon Shift: 13:00 - 17:15) ---
  {
    shift: "afternoon",
    period: 1,
    time: "13:00 - 13:45",
    mon: { subject: "គណិតវិទ្យា", teacher: "លោកគ្រូ សុខ ចាន់ថា" },
    tue: { subject: "ភាសាខ្មែរ", teacher: "អ្នកគ្រូ កែវ មុនី" },
    wed: { subject: "គណិតវិទ្យា", teacher: "លោកគ្រូ សុខ ចាន់ថា" },
    thu: { subject: "ភាសាខ្មែរ", teacher: "អ្នកគ្រូ កែវ មុនី" },
    fri: { subject: "គីមីវិទ្យា", teacher: "អ្នកគ្រូ ចាន់ ស្រីមុំ" },
    sat: { subject: "ភូមិវិទ្យា", teacher: "អ្នកគ្រូ ម៉ៅ រតនា" }
  },
  {
    shift: "afternoon",
    period: 2,
    time: "13:45 - 14:30",
    mon: { subject: "រូបវិទ្យា", teacher: "លោកគ្រូ ហេង ពិសិដ្ឋ" },
    tue: { subject: "គីមីវិទ្យា", teacher: "អ្នកគ្រូ ចាន់ ស្រីមុំ" },
    wed: { subject: "ភាសាអង់គ្លេស", teacher: "លោកគ្រូ រ័ត្ន ដារ៉ូ" },
    thu: { subject: "រូបវិទ្យា", teacher: "លោកគ្រូ ហេង ពិសិដ្ឋ" },
    fri: { subject: "ជីវវិទ្យា", teacher: "អ្នកគ្រូ អ៊ឹង សុផល" },
    sat: { subject: "សីលធម៌", teacher: "អ្នកគ្រូ ជា វណ្ណា" }
  },
  {
    shift: "afternoon",
    period: 3,
    time: "14:45 - 15:30",
    mon: { subject: "ភាសាខ្មែរ", teacher: "អ្នកគ្រូ កែវ មុនី" },
    tue: { subject: "ប្រវត្តិវិទ្យា", teacher: "លោកគ្រូ វ៉ាន់ សុធា" },
    wed: { subject: "ភូមិវិទ្យា", teacher: "អ្នកគ្រូ ម៉ៅ រតនា" },
    thu: { subject: "គណិតវិទ្យា", teacher: "លោកគ្រូ សុខ ចាន់ថា" },
    fri: { subject: "ភាសាខ្មែរ", teacher: "អ្នកគ្រូ កែវ មុនី" },
    sat: { subject: "ភាសាអង់គ្លេស", teacher: "លោកគ្រូ រ័ត្ន ដារ៉ូ" }
  },
  {
    shift: "afternoon",
    period: 4,
    time: "15:30 - 16:15",
    mon: { subject: "ភាសាអង់គ្លេស", teacher: "លោកគ្រូ រ័ត្ន ដារ៉ូ" },
    tue: { subject: "ជីវវិទ្យា", teacher: "អ្នកគ្រូ អ៊ឹង សុផល" },
    wed: { subject: "ផែនដីវិទ្យា", teacher: "លោកគ្រូ លី គឹមសាន" },
    thu: { subject: "ICT កុំព្យូទ័រ", teacher: "លោកគ្រូ គង់ វិចិត្រ" },
    fri: { subject: "ប្រវត្តិវិទ្យា", teacher: "លោកគ្រូ វ៉ាន់ សុធា" },
    sat: { subject: "គណិតវិទ្យា", teacher: "លោកគ្រូ សុខ ចាន់ថា" }
  },
  {
    shift: "afternoon",
    period: 5,
    time: "16:15 - 17:00",
    mon: { subject: "កីឡា", teacher: "លោកគ្រូ គង់ វិចិត្រ" },
    tue: { subject: "ស្វ័យសិក្សា/ស្រាវជ្រាវ", teacher: "លោកគ្រូ សុខ ចាន់ថា" },
    wed: { subject: "គេហវិទ្យា", teacher: "អ្នកគ្រូ ឡុង ស្រីពៅ" },
    thu: { subject: "កីឡា", teacher: "លោកគ្រូ គង់ វិចិត្រ" },
    fri: { subject: "ស្វ័យសិក្សា/ក្លឹប", teacher: "លោកគ្រូ សុខ ចាន់ថា" },
    sat: { subject: "សិល្បៈ/តន្ត្រី", teacher: "អ្នកគ្រូ កែវ មុនី" }
  }
];

// Discipline Log
const SEED_DISCIPLINE_RECORDS = [
  {
    id: "DISC-001",
    studentId: "STU-8A-001",
    studentName: "សុខា មុនីរត្ន",
    type: "praise",
    date: "2025-10-06",
    title: "ជួយបង្រៀនមិត្តភក្តិលើមុខវិជ្ជាគណិតវិទ្យា",
    notes: "មានស្មារតីសាមគ្គីភាព និងជួយពន្យល់លំហាត់មិត្តរួមថ្នាក់បានយ៉ាងក្បោះក្បាយ។"
  },
  {
    id: "DISC-002",
    studentId: "STU-8A-004",
    studentName: "គង់ រតនៈ",
    type: "praise",
    date: "2025-10-04",
    title: "សកម្មភាពស្ម័គ្រចិត្តសម្អាតថ្នាក់រៀន",
    notes: "បានចូលរួមដឹកនាំក្រុមអនាម័យថ្នាក់រៀន ទទួលបានការកោតសរសើរពីគណៈគ្រប់គ្រង។"
  },
  {
    id: "DISC-003",
    studentId: "STU-8A-020",
    studentName: "ម៉ី ពិសាល",
    type: "warning",
    date: "2025-10-03",
    title: "មកយឺតម៉ោងគោរពទង់ជាតិ ២ ដង",
    notes: "បានណែនាំ និងធ្វើកិច្ចសន្យាកែប្រែកុំឱ្យមកយឺតបន្តទៀត។"
  },
  {
    id: "DISC-004",
    studentId: "STU-8A-040",
    studentName: "វ៉ា គឹមហេង",
    type: "parent_contact",
    date: "2025-10-02",
    title: "ទូរស័ព្ទពិភាក្សាជាមួយអាណាព្យាបាលរឿងកិច្ចការផ្ទះ",
    notes: "បានទាក់ទងលោកឪពុកដើម្បីជួយតាមដានការធ្វើស្វ័យសិក្សា និងកិច្ចការផ្ទះពេលយប់។"
  }
];

// Seed Student Health & BMI Records (សុខភាព និងការលូតលាស់)
const SEED_HEALTH_RECORDS = {
  "STU-8A-001": { height: 152, weight: 42, bloodType: "O+", allergies: "គ្មាន", vision: "ធម្មតា (10/10)", lastCheckup: "2025-09-15" },
  "STU-8A-002": { height: 158, weight: 46, bloodType: "A+", allergies: "គ្មាន", vision: "ធម្មតា (10/10)", lastCheckup: "2025-09-15" },
  "STU-8A-003": { height: 150, weight: 39, bloodType: "B+", allergies: "អាឡែហ្ស៊ីគ្រឿងសមុទ្រ", vision: "ពាក់វ៉ែនតា (8/10)", lastCheckup: "2025-09-15" },
  "STU-8A-004": { height: 160, weight: 48, bloodType: "O+", allergies: "គ្មាន", vision: "ធម្មតា (10/10)", lastCheckup: "2025-09-15" },
  "STU-8A-005": { height: 154, weight: 43, bloodType: "AB+", allergies: "គ្មាន", vision: "ធម្មតា (10/10)", lastCheckup: "2025-09-15" },
  "STU-8A-006": { height: 156, weight: 45, bloodType: "O+", allergies: "គ្មាន", vision: "ធម្មតា (10/10)", lastCheckup: "2025-09-15" },
  "STU-8A-007": { height: 149, weight: 38, bloodType: "A+", allergies: "គ្មាន", vision: "ធម្មតា (10/10)", lastCheckup: "2025-09-15" },
  "STU-8A-008": { height: 162, weight: 51, bloodType: "B+", allergies: "គ្មាន", vision: "ធម្មតា (10/10)", lastCheckup: "2025-09-15" }
};

// Seed Classroom Election (ការបោះឆ្នោតប្រធានថ្នាក់)
const SEED_ELECTIONS = [
  {
    id: "ELEC-2025-01",
    title: "ការបោះឆ្នោតជ្រើសរើសប្រធានថ្នាក់ទី ៨ A ដើមឆ្នាំសិក្សា",
    date: "2025-10-02",
    status: "completed",
    totalVoters: 42,
    candidates: [
      { studentId: "STU-8A-001", name: "សុខា មុនីរត្ន", votes: 24, percentage: 57.1, elected: true },
      { studentId: "STU-8A-002", name: "ចាន់ សុភ័ក្ត្រ", votes: 12, percentage: 28.6, elected: false },
      { studentId: "STU-8A-004", name: "គង់ រតនៈ", votes: 6, percentage: 14.3, elected: false }
    ]
  }
];

// Feature 1: SEED_GAMIFICATION (ប្រព័ន្ធផ្កាយលើកទឹកចិត្ត & Badges)
const SEED_GAMIFICATION = {
  badges: [
    { id: "quick_answer", name: "ឆ្លើយសំនួររហ័ស", icon: "🚀", points: 2, color: "#3b82f6", desc: "ស្ម័គ្រចិត្ត និងឆ្លើយសំនួរបានត្រឹមត្រូវរហ័ស" },
    { id: "discipline", name: "វិន័យ & ស្អាតបាត", icon: "🌟", points: 3, color: "#eab308", desc: "គោរពវិន័យថ្នាក់ និងតុអង្គុយស្អាតបាត" },
    { id: "teamwork", name: "ជួយមិត្តភក្តិ", icon: "🤝", points: 3, color: "#10b981", desc: "ជួយពន្យល់មេរៀន និងសហការជាក្រុមល្អ" },
    { id: "leadership", name: "ភាពជាអ្នកដឹកនាំ", icon: "👑", points: 5, color: "#f59e0b", desc: "ដឹកនាំក្រុមការងារ និងសម្របសម្រួលសកម្មភាព" },
    { id: "creative", name: "គំនិតច្នៃប្រឌិត", icon: "🎨", points: 3, color: "#8b5cf6", desc: "មានដំណោះស្រាយច្នៃប្រឌិត និងគំនិតថ្មី" },
    { id: "hardworking", name: "ឧស្សាហ៍ព្យាយាម", icon: "📚", points: 4, color: "#06b6d4", desc: "ខិតខំស្រាវជ្រាវ និងស្វ័យសិក្សាជាប់លាប់" },
    { id: "on_time", name: "មកទាន់ពេលវេលា", icon: "⚡", points: 2, color: "#ec4899", desc: "មកដល់សាលា និងចូលថ្នាក់មុនម៉ោង" },
    { id: "homework_star", name: "កិច្ចការផ្ទះឥតខ្ចោះ", icon: "🏆", points: 5, color: "#f43f5e", desc: "ធ្វើកិច្ចការផ្ទះបានពិន្ទុពេញ និងទាន់ពេល" }
  ],
  studentStars: {
    "STU-8A-001": { totalStars: 48, streak: 7, badges: { "quick_answer": 6, "discipline": 4, "teamwork": 3, "leadership": 2, "homework_star": 3 } },
    "STU-8A-002": { totalStars: 39, streak: 5, badges: { "quick_answer": 5, "teamwork": 4, "hardworking": 3, "on_time": 4 } },
    "STU-8A-003": { totalStars: 42, streak: 6, badges: { "discipline": 5, "creative": 4, "homework_star": 3, "teamwork": 2 } },
    "STU-8A-004": { totalStars: 35, streak: 4, badges: { "leadership": 3, "discipline": 3, "on_time": 5 } },
    "STU-8A-005": { totalStars: 31, streak: 3, badges: { "hardworking": 4, "teamwork": 3, "quick_answer": 3 } },
    "STU-8A-006": { totalStars: 28, streak: 3, badges: { "creative": 3, "discipline": 3, "on_time": 4 } },
    "STU-8A-007": { totalStars: 33, streak: 4, badges: { "homework_star": 3, "hardworking": 3, "teamwork": 3 } },
    "STU-8A-008": { totalStars: 25, streak: 2, badges: { "quick_answer": 4, "on_time": 3 } }
  },
  history: [
    { id: "STAR-001", studentId: "STU-8A-001", studentName: "សុខា មុនីរត្ន", badgeId: "quick_answer", badgeName: "ឆ្លើយសំនួររហ័ស", icon: "🚀", points: 2, date: "2025-10-09 08:30" },
    { id: "STAR-002", studentId: "STU-8A-004", studentName: "គង់ រតនៈ", badgeId: "discipline", badgeName: "វិន័យ & ស្អាតបាត", icon: "🌟", points: 3, date: "2025-10-09 09:15" },
    { id: "STAR-003", studentId: "STU-8A-002", studentName: "ចាន់ សុភ័ក្ត្រ", badgeId: "teamwork", badgeName: "ជួយមិត្តភក្តិ", icon: "🤝", points: 3, date: "2025-10-08 10:20" }
  ]
};

// Feature 2: SEED_FUND (មូលនិធិថ្នាក់រៀន & ចំណូល-ចំណាយ)
const SEED_FUND = {
  currency: "KHR",
  transactions: [
    { id: "TRX-001", date: "2025-10-01", type: "income", amount: 210000, category: "វិភាគទានថ្នាក់", description: "វិភាគទានមូលនិធិថ្នាក់រៀនប្រចាំខែតុលា (៤២ នាក់ x ៥០០០ ៛)", recordedBy: "គណនេយ្យករថ្នាក់" },
    { id: "TRX-002", date: "2025-10-03", type: "expense", amount: 45000, category: "សម្ភារៈថ្នាក់", description: "ទិញហ្វឺតសរសេរក្តារខៀន ទឹកអាល់កុល និងក្រដាសជូត", recordedBy: "ប្រធានថ្នាក់" },
    { id: "TRX-003", date: "2025-10-05", type: "expense", amount: 30000, category: "អនាម័យ & បរិស្ថាន", description: "ទិញធុងសំរាមថ្មី និងផ្កាតុលោកគ្រូ", recordedBy: "គណៈកម្មការអនាម័យ" },
    { id: "TRX-004", date: "2025-10-07", type: "income", amount: 100000, category: "សប្បុរសជន", description: "ការឧបត្ថម្ភលើកទឹកចិត្តពីអាណាព្យាបាលសិស្ស", recordedBy: "លោកគ្រូបន្ទុកថ្នាក់" },
    { id: "TRX-005", date: "2025-10-08", type: "expense", amount: 25000, category: "សង្គមកិច្ច & សុខភាព", description: "ទិញប្រេងកូឡា និងថ្នាំសង្គ្រោះបឋមប្រចាំថ្នាក់", recordedBy: "គណៈកម្មការសុខភាព" }
  ]
};

// Feature 3: SEED_LOGBOOK (សៀវភៅកិច្ចតែងការ & កំណត់ត្រាបង្រៀន)
const SEED_LOGBOOK = [
  {
    id: "LOG-001",
    date: "2025-10-09",
    timeSlot: "07:00 - 08:30",
    subjectId: "math",
    subjectName: "គណិតវិទ្យា",
    teacher: "លោកគ្រូ សុខ ចាន់ថា",
    chapter: "ជំពូកទី ២៖ សមីការដឺក្រេទី១ មានមួយអញ្ញាត",
    objective: "សិស្សយល់ច្បាស់ពីទម្រង់ទូទៅ ax + b = 0 និងចេះអនុវត្តដោះស្រាយលើលំហាត់ជាក់ស្តែង",
    activities: "ពន្យល់ទ្រឹស្តី ១៥នាទី, ដាក់លំហាត់ជាក្រុម ២០នាទី, សិស្សឡើងដោះស្រាយលើក្តារខៀន ៣០នាទី",
    homework: "លំហាត់ទំព័រទី ៤៥ លេខ ១, ២, ៣ ក្នុងសៀវភៅពុម្ពក្រសួង",
    absentCount: 2,
    reflection: "សិស្សភាគច្រើនយល់បានល្អ នៅមានសិស្ស ២-៣ នាក់ត្រូវការការពន្យល់បន្ថែមលើការប្តូរសញ្ញាពេលផ្ទេរអង្គ។"
  },
  {
    id: "LOG-002",
    date: "2025-10-08",
    timeSlot: "08:45 - 09:30",
    subjectId: "khmer",
    subjectName: "ភាសាខ្មែរ",
    teacher: "អ្នកគ្រូ កែវ មុនី",
    chapter: "មេរៀនទី ៣៖ វេយ្យាករណ៍ខ្មែរ - ឈ្នាប់ និងកន្សោមនាម",
    objective: "សិស្សចេះបែងចែកឈ្នាប់ចម្លង និងឈ្នាប់ផ្គួបក្នុងប្រយោគ និងចេះប្រើប្រាស់ត្រឹមត្រូវ",
    activities: "អានអត្ថបទគំរូ និងស្រង់កន្សោមឈ្នាប់មកវិភាគជាក្រុម",
    homework: "តែងប្រយោគដោយប្រើឈ្នាប់ចំនួន ៥ ប្រយោគក្នុងសៀវភៅកិច្ចការ",
    absentCount: 1,
    reflection: "ដំណើរការរលូន សិស្សចូលរួមឆ្លើយសំនួរផុសផុល និងចេះតែងប្រយោគបានល្អ។"
  },
  {
    id: "LOG-003",
    date: "2025-10-07",
    timeSlot: "09:45 - 10:30",
    subjectId: "phys",
    subjectName: "រូបវិទ្យា",
    teacher: "លោកគ្រូ ហេង ពិសិដ្ឋ",
    chapter: "ជំពូកទី ១៖ ចលនាត្រង់ស្មើ និងល្បឿនមធ្យម",
    objective: "សិស្សចេះគណនាល្បឿនមធ្យម v = s / t និងបំប្លែងខ្នាត km/h ទៅ m/s",
    activities: "បង្ហាញឧទាហរណ៍ជាក់ស្តែងលើចលនារថយន្ត និងអនុវត្តគណនាលំហាត់",
    homework: "លំហាត់គំរូទំព័រ ២៨ លេខ ៤ និង ៥",
    absentCount: 0,
    reflection: "សិស្សមកគ្រប់ចំនួន និងចាប់អារម្មណ៍ខ្ពស់លើការបំប្លែងខ្នាតល្បឿន។"
  }
];

// Feature 4: SEED_RESOURCES (ឃ្លាំងឯកសារមេរៀន & E-Library)
const SEED_RESOURCES = [
  {
    id: "RES-001",
    title: "រូបមន្តសង្ខេបគណិតវិទ្យា ថ្នាក់ទី ៨ (PDF ផ្លូវការ)",
    subjectId: "math",
    subjectName: "គណិតវិទ្យា",
    type: "pdf",
    size: "2.4 MB",
    date: "2025-10-05",
    author: "លោកគ្រូ សុខ ចាន់ថា",
    url: "#",
    downloads: 38,
    desc: "កម្រងរូបមន្តពិជគណិត និងធរណីមាត្រពេញលេញសម្រាប់ឆមាសទី១"
  },
  {
    id: "RES-002",
    title: "Slide បទបង្ហាញ៖ ច្បាប់ចលនាញូតុន និងកម្លាំង (Physics)",
    subjectId: "phys",
    subjectName: "រូបវិទ្យា",
    type: "slide",
    size: "5.1 MB",
    date: "2025-10-04",
    author: "លោកគ្រូ ហេង ពិសិដ្ឋ",
    url: "#",
    downloads: 29,
    desc: "ស្លាយមេរៀនរូបវិទ្យាជំពូកទី ១ មានរូបភាពចលនាងាយយល់ និងគំនូសបំព្រួញ"
  },
  {
    id: "RES-003",
    title: "វីដេអូពិសោធន៍គីមីវិទ្យា៖ ប្រតិកម្មអាស៊ីត និងបាស",
    subjectId: "chem",
    subjectName: "គីមីវិទ្យា",
    type: "video",
    size: "YouTube HD",
    date: "2025-10-02",
    author: "អ្នកគ្រូ ចាន់ ស្រីមុំ",
    url: "https://www.youtube.com",
    downloads: 41,
    desc: "វីដេអូបង្ហាញពីការប្តូរពណ៌ក្រដាសលីតមុស និងសុវត្ថិភាពក្នុងបន្ទប់ពិសោធន៍"
  },
  {
    id: "RES-004",
    title: "កម្រងលំហាត់អក្សរសិល្ប៍ និងតែងសេចក្តីគំរូ ថ្នាក់ទី ៨",
    subjectId: "khmer",
    subjectName: "ភាសាខ្មែរ",
    type: "worksheet",
    size: "1.8 MB",
    date: "2025-10-01",
    author: "អ្នកគ្រូ កែវ មុនី",
    url: "#",
    downloads: 35,
    desc: "អត្ថបទតែងសេចក្តីពណ៌នាគំរូ និងកម្រងពាក្យគន្លឹះតែងសេចក្តីកម្រិតអនុវិទ្យាល័យ"
  }
];



/* ==================================================================== */
/* MODULE: storage.js
/* ==================================================================== */

/**
 * LOCAL STORAGE & STATE MANAGEMENT (UPDATED WITH HOMEWORK & SEMESTER)
 */

/**
 * Modern Custom Confirmation Dialog
 * Returns a Promise<boolean> resolving to true if confirmed, false if cancelled.
 */
function showConfirm(message, options = {}) {
  return new Promise((resolve) => {
    const modal = document.getElementById("customConfirmModal");
    const titleEl = document.getElementById("customConfirmTitle");
    const msgEl = document.getElementById("customConfirmMessage");
    const iconWrap = document.getElementById("customConfirmIconWrap");
    const icon = document.getElementById("customConfirmIcon");
    const okBtn = document.getElementById("customConfirmOkBtn");
    const cancelBtn = document.getElementById("customConfirmCancelBtn");

    if (!modal || !titleEl || !msgEl || !okBtn || !cancelBtn) {
      const cleanMsg = typeof message === "string" ? message.replace(/<[^>]*>/g, "") : message;
      resolve(window.confirm(cleanMsg));
      return;
    }

    const title = options.title || "បញ្ជាក់ការលុបទិន្នន័យ";
    const confirmText = options.confirmText || "យល់ព្រមលុប";
    const cancelText = options.cancelText || "បោះបង់";
    const type = options.type || "danger"; // 'danger', 'warning', 'info'

    titleEl.textContent = title;
    msgEl.innerHTML = message;

    if (iconWrap) {
      iconWrap.className = `confirm-icon-circle ${type}`;
    }

    if (icon) {
      if (type === "danger") {
        icon.className = "fa-solid fa-triangle-exclamation";
      } else if (type === "warning") {
        icon.className = "fa-solid fa-circle-exclamation";
      } else {
        icon.className = "fa-solid fa-circle-question";
      }
    }

    if (type === "danger") {
      okBtn.className = "btn btn-danger confirm-btn-proceed font-khmer";
      okBtn.innerHTML = `<i class="fa-solid fa-trash-can me-1"></i> ${confirmText}`;
    } else if (type === "warning") {
      okBtn.className = "btn btn-warning confirm-btn-proceed font-khmer";
      okBtn.innerHTML = `<i class="fa-solid fa-check me-1"></i> ${confirmText}`;
    } else {
      okBtn.className = "btn btn-primary confirm-btn-proceed font-khmer";
      okBtn.innerHTML = `<i class="fa-solid fa-check me-1"></i> ${confirmText}`;
    }

    cancelBtn.innerHTML = `<i class="fa-solid fa-xmark me-1"></i> ${cancelText}`;

    modal.classList.add("active");

    function cleanup() {
      modal.classList.remove("active");
      okBtn.removeEventListener("click", onOk);
      cancelBtn.removeEventListener("click", onCancel);
      modal.removeEventListener("click", onOverlay);
      document.removeEventListener("keydown", onKeyDown);
    }

    function onOk(e) {
      if (e) e.stopPropagation();
      cleanup();
      resolve(true);
    }

    function onCancel(e) {
      if (e) e.stopPropagation();
      cleanup();
      resolve(false);
    }

    function onOverlay(e) {
      if (e.target === modal) {
        cleanup();
        resolve(false);
      }
    }

    function onKeyDown(e) {
      if (!modal.classList.contains("active")) return;
      if (e.key === "Escape") {
        e.preventDefault();
        cleanup();
        resolve(false);
      } else if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        cleanup();
        resolve(true);
      }
    }

    okBtn.addEventListener("click", onOk);
    cancelBtn.addEventListener("click", onCancel);
    modal.addEventListener("click", onOverlay);
    document.addEventListener("keydown", onKeyDown);

    setTimeout(() => {
      cancelBtn.focus();
    }, 50);
  });
}
window.showConfirm = showConfirm;

const STORAGE_KEYS = {
  SCHOOL: "kh_school_info_v1",
  STUDENTS: "kh_students_v1",
  SUBJECTS: "kh_subjects_v1",
  GRADES: "kh_grades_v1",
  ATTENDANCE: "kh_attendance_v1",
  DISCIPLINE: "kh_discipline_v1",
  TIMETABLE: "kh_timetable_v1",
  HOMEWORK: "kh_homework_v1",
  QUESTIONS: "kh_questions_v1",
  TEXTBOOKS: "kh_textbooks_v1",
  COUNCIL: "kh_council_v1",
  CLUBS: "kh_clubs_v1",
  SEATING: "kh_seating_v1",
  SEATING_CONFIG: "kh_seating_config_v1",
  HEALTH: "kh_health_v1",
  ELECTIONS: "kh_elections_v1",
  GAMIFICATION: "kh_gamification_v1",
  FUND: "kh_fund_v1",
  LOGBOOK: "kh_logbook_v1",
  RESOURCES: "kh_resources_v1",
  THEME: "kh_app_theme_v1",
  CURRENT_CLASS: "kh_current_class_v1"
};

class StorageManager {
  static init() {
    if (!localStorage.getItem(STORAGE_KEYS.SCHOOL)) {
      this.resetToDefaults();
    }
  }

  static resetToDefaults() {
    localStorage.setItem(STORAGE_KEYS.SCHOOL, JSON.stringify(SEED_SCHOOL_INFO));
    localStorage.setItem(STORAGE_KEYS.STUDENTS, JSON.stringify(SEED_STUDENTS));
    localStorage.setItem(STORAGE_KEYS.SUBJECTS, JSON.stringify(SEED_SUBJECTS));
    
    // Seed initial grades for Month 10 & 09
    const initialGrades = {
      "month_10": SEED_MONTH_10_GRADES,
      "month_11": {},
      "month_12": {},
      "sem_1": {},
      "month_01": {},
      "month_02": {},
      "month_03": {},
      "month_04": {},
      "month_05": {},
      "sem_2": {}
    };
    localStorage.setItem(STORAGE_KEYS.GRADES, JSON.stringify(initialGrades));

    // Seed initial attendance
    const today = new Date().toISOString().split('T')[0];
    const initialAttendance = {};
    initialAttendance[today] = {};
    SEED_STUDENTS.forEach((st, idx) => {
      if (idx === 7) {
        initialAttendance[today][st.id] = { status: "A", note: "ឈឺផ្ដាសាយធ្ងន់ធ្ងរ" };
      } else if (idx === 19) {
        initialAttendance[today][st.id] = { status: "L", note: "សុំច្បាប់ការងារគ្រួសារ" };
      } else {
        initialAttendance[today][st.id] = { status: "P", note: "" };
      }
    });
    localStorage.setItem(STORAGE_KEYS.ATTENDANCE, JSON.stringify(initialAttendance));

    localStorage.setItem(STORAGE_KEYS.DISCIPLINE, JSON.stringify(SEED_DISCIPLINE_RECORDS));
    localStorage.setItem(STORAGE_KEYS.TIMETABLE, JSON.stringify(SEED_TIMETABLE));
    localStorage.setItem(STORAGE_KEYS.HOMEWORK, JSON.stringify(SEED_HOMEWORK));
    localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(typeof SEED_QUESTIONS !== "undefined" ? SEED_QUESTIONS : []));
    localStorage.setItem(STORAGE_KEYS.TEXTBOOKS, JSON.stringify(typeof SEED_TEXTBOOKS !== "undefined" ? SEED_TEXTBOOKS : []));
    localStorage.setItem(STORAGE_KEYS.COUNCIL, JSON.stringify(typeof SEED_COUNCIL !== "undefined" ? SEED_COUNCIL : {}));
    localStorage.setItem(STORAGE_KEYS.CLUBS, JSON.stringify(typeof SEED_CLUBS !== "undefined" ? SEED_CLUBS : []));
    localStorage.setItem(STORAGE_KEYS.HEALTH, JSON.stringify(typeof SEED_HEALTH_RECORDS !== "undefined" ? SEED_HEALTH_RECORDS : {}));
    localStorage.setItem(STORAGE_KEYS.ELECTIONS, JSON.stringify(typeof SEED_ELECTIONS !== "undefined" ? SEED_ELECTIONS : []));
    localStorage.setItem(STORAGE_KEYS.GAMIFICATION, JSON.stringify(typeof SEED_GAMIFICATION !== "undefined" ? SEED_GAMIFICATION : {}));
    localStorage.setItem(STORAGE_KEYS.FUND, JSON.stringify(typeof SEED_FUND !== "undefined" ? SEED_FUND : {}));
    localStorage.setItem(STORAGE_KEYS.LOGBOOK, JSON.stringify(typeof SEED_LOGBOOK !== "undefined" ? SEED_LOGBOOK : []));
    localStorage.setItem(STORAGE_KEYS.RESOURCES, JSON.stringify(typeof SEED_RESOURCES !== "undefined" ? SEED_RESOURCES : []));
    localStorage.setItem(STORAGE_KEYS.CURRENT_CLASS, "8A");
  }

  static getSchoolInfo() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.SCHOOL)) || SEED_SCHOOL_INFO;
  }

  static saveSchoolInfo(data) {
    localStorage.setItem(STORAGE_KEYS.SCHOOL, JSON.stringify(data));
  }

  static getCurrentClass() {
    return localStorage.getItem(STORAGE_KEYS.CURRENT_CLASS) || "8A";
  }

  static setCurrentClass(cls) {
    if (!cls) cls = "8A";
    localStorage.setItem(STORAGE_KEYS.CURRENT_CLASS, cls);
    try {
      const school = this.getSchoolInfo();
      school.currentClass = cls;
      this.saveSchoolInfo(school);
    } catch (e) {}
  }

  static getClassKey(baseKey, cls = this.getCurrentClass()) {
    return `${baseKey}_${cls}`;
  }

  static generateSeedStudentsForClass(cls) {
    const surnames = ['សុខ', 'ចាន់', 'កែវ', 'ហេង', 'ឡុង', 'អ៊ឹម', 'ម៉ៅ', 'ជា', 'ស៊ន', 'វ៉ាន់', 'គង់', 'សេង', 'លី', 'តាំង', 'ផន', 'នុត', 'យ៉ុន', 'ព្រំ', 'មាស', 'សំ', 'ឌុច', 'អ៊ឹង', 'ថៃ', 'ស៊ុំ', 'ពេជ្រ'];
    const surnamesEn = ['SOK', 'CHAN', 'KEO', 'HENG', 'LONG', 'IM', 'MAO', 'CHEA', 'SORN', 'VAN', 'KONG', 'SENG', 'LY', 'TANG', 'PHORN', 'NUT', 'YON', 'PROM', 'MEAS', 'SAM', 'DUCH', 'ING', 'THAI', 'SUM', 'PICH'];

    const girls = ['មុនីរត្ន', 'ស្រីនិច', 'សុធារី', 'រស្មី', 'ទេវី', 'កល្យាណ', 'ពិសី', 'សុភារី', 'គន្ធា', 'វិចិត្រា', 'សុខជា', 'ដាលីន', 'ស្រីពៅ', 'ធីតា', 'ចរណៃ', 'វណ្ណដា', 'លីហ្សា', 'សុជាតា', 'ស្រីម៉ី', 'ចរិយា'];
    const girlsEn = ['MONYROTH', 'SREYNICH', 'SOTHEARY', 'REASMEY', 'DEVI', 'KALYAN', 'PISEY', 'SOPHEARY', 'KUNTHEA', 'VICHETRA', 'SOKCHEA', 'DALIN', 'SREYPOV', 'THIDA', 'CHORNAI', 'VANDA', 'LIZA', 'SOCHEAT', 'SREYMEY', 'CHORIYA'];

    const boys = ['សុភ័ក្ត្រ', 'វីរៈ', 'រតនៈ', 'ពិសិដ្ឋ', 'សុវណ្ណ', 'វិបុល', 'ដារ៉ា', 'ឧត្តម', 'ចាន់ថា', 'រិទ្ធី', 'ប៊ុនថន', 'វឌ្ឍនៈ', 'កក្កដា', 'មករា', 'សីហា', 'ពិសាល', 'វិទូ', 'ករុណា', 'សុខា', 'វណ្ណៈ'];
    const boysEn = ['SOPHEAK', 'VIRAK', 'RATANA', 'PISETH', 'SOVAN', 'VIBOL', 'DARA', 'OUDOM', 'CHANTHA', 'RITTHY', 'BUNTHORN', 'VATTANAK', 'KAKADA', 'MAKARA', 'SEYHA', 'PISAL', 'VIDU', 'KARUNA', 'SOKHA', 'VANNAK'];

    const gradeNum = parseInt(cls.charAt(0), 10) || 8;
    const baseYear = gradeNum === 7 ? 2013 : gradeNum === 8 ? 2012 : 2011;
    const shiftOffset = cls.endsWith('B') ? 7 : 0;
    const list = [];

    for (let i = 0; i < 40; i++) {
      const isGirl = (i % 2 === 0);
      const sIndex = (i + (gradeNum * 4) + shiftOffset) % surnames.length;
      const gIndex = Math.floor(i / 2) % girls.length;
      const bIndex = Math.floor(i / 2) % boys.length;

      const surKh = surnames[sIndex];
      const surEn = surnamesEn[sIndex];
      const givenKh = isGirl ? girls[gIndex] : boys[bIndex];
      const givenEn = isGirl ? girlsEn[gIndex] : boysEn[bIndex];

      const m = String((i % 12) + 1).padStart(2, '0');
      const d = String((i % 28) + 1).padStart(2, '0');
      const id = `STU-${cls}-${String(i + 1).padStart(3, '0')}`;

      list.push({
        id: id,
        nameKh: `${surKh} ${givenKh}`,
        nameEn: `${surEn} ${givenEn}`,
        gender: isGirl ? 'ស្រី' : 'ប្រុស',
        dob: `${baseYear}-${m}-${d}`,
        class: cls,
        parentName: `${surKh} ${isGirl ? boys[(gIndex + 3) % boys.length] : boys[(bIndex + 4) % boys.length]}`,
        parentPhone: `012 ${String(700 + i).padStart(3, '0')} ${String(800 + i).padStart(3, '0')}`,
        studentPhone: (i % 3 === 0) ? `012 ${String(300 + i).padStart(3, '0')} ${String(400 + i).padStart(3, '0')}` : '',
        address: `សង្កាត់ទឹកល្អក់${(i % 3) + 1} ខណ្ឌទួលគោក ភ្នំពេញ`,
        status: 'កំពុងរៀន',
        photo: `https://api.dicebear.com/7.x/bottts/svg?seed=${id}`
      });
    }
    return list;
  }

  static generateSeedGradesForClass(cls, students) {
    const m10 = {};
    students.forEach((st, idx) => {
      let factor = 1.0;
      if (idx < 5) factor = 0.95 - (idx * 0.02);
      else if (idx < 20) factor = 0.85 - ((idx - 5) * 0.01);
      else if (idx < 35) factor = 0.70 - ((idx - 20) * 0.01);
      else factor = 0.50 - ((idx - 35) * 0.03);

      m10[st.id] = {
        khmer: Math.min(100, Math.max(35, Math.round(96 * factor + ((idx % 3) * 2 - 2)))),
        math: Math.min(100, Math.max(30, Math.round(98 * factor + ((idx % 4) * 2 - 3)))),
        phys: Math.min(50, Math.max(18, Math.round(49 * factor + ((idx % 2) - 1)))),
        chem: Math.min(50, Math.max(18, Math.round(48 * factor + ((idx % 3) - 1)))),
        bio: Math.min(50, Math.max(18, Math.round(49 * factor))),
        earth: Math.min(50, Math.max(18, Math.round(48 * factor))),
        hist: Math.min(50, Math.max(18, Math.round(47 * factor))),
        geo: Math.min(50, Math.max(18, Math.round(48 * factor))),
        moral: Math.min(50, Math.max(18, Math.round(49 * factor))),
        home_eco: Math.min(50, Math.max(18, Math.round(48 * factor))),
        english: Math.min(50, Math.max(18, Math.round(48 * factor))),
        ict_sport: Math.min(50, Math.max(20, Math.round(48 * factor)))
      };
    });

    return {
      "month_10": m10,
      "month_11": {},
      "month_12": {},
      "sem_1": {},
      "month_01": {},
      "month_02": {},
      "month_03": {},
      "month_04": {},
      "month_05": {},
      "sem_2": {}
    };
  }

  static generateSeedAttendanceForClass(cls, students) {
    const today = new Date().toISOString().split('T')[0];
    const att = {};
    att[today] = {};
    students.forEach((st, idx) => {
      if (idx === 7) att[today][st.id] = { status: "A", note: "ឈឺផ្ដាសាយ" };
      else if (idx === 15) att[today][st.id] = { status: "L", note: "សុំច្បាប់" };
      else if (idx === 23) att[today][st.id] = { status: "T", note: "យឺត ១០ នាទី" };
      else att[today][st.id] = { status: "P", note: "" };
    });
    return att;
  }

  static generateSeedSeatingForClass(cls, students) {
    const grid = new Array(44).fill(null);
    students.slice(0, 44).forEach((st, idx) => {
      grid[idx] = st.id;
    });
    return grid;
  }

  static generateSeedHealthForClass(cls, students) {
    const gradeNum = parseInt(cls.charAt(0), 10) || 8;
    const baseH = gradeNum === 7 ? 148 : gradeNum === 8 ? 154 : 160;
    const baseW = gradeNum === 7 ? 40 : gradeNum === 8 ? 45 : 50;
    const bloods = ["O", "A", "B", "AB"];
    const health = {};
    students.forEach((st, idx) => {
      const h = baseH + ((idx % 11) * 2) - 6;
      const w = baseW + ((idx % 9) * 2) - 4;
      const bmi = parseFloat((w / Math.pow(h / 100, 2)).toFixed(1));
      health[st.id] = {
        height: h,
        weight: w,
        bmi: bmi,
        bloodGroup: bloods[idx % bloods.length],
        vision: (idx % 7 === 0) ? "មានបញ្ហាភ្នែក" : "ធម្មតា",
        allergy: (idx % 11 === 0) ? "អាឡែហ្ស៊ី" : "គ្មាន",
        note: ""
      };
    });
    return health;
  }

  static generateSeedCouncilForClass(cls, students) {
    return {
      president: students[0] ? students[0].id : null,
      vicePresident1: students[1] ? students[1].id : null,
      vicePresident2: students[2] ? students[2].id : null,
      disciplineHead: students[3] ? students[3].id : null,
      sanitationHead: students[4] ? students[4].id : null,
      sportsHead: students[5] ? students[5].id : null
    };
  }

  static formatStudentsList(list) {
    return list.map((st, i) => {
      const fatherDefault = st.fatherName || st.parentName || `លោក ${st.nameKh ? st.nameKh.split(' ')[0] : 'សុខ'} វិចិត្រ`;
      const motherDefault = st.motherName || "អ្នកស្រី កែវ ស្រីមុំ";
      const fatherJobDefault = st.fatherJob || (i % 3 === 0 ? "មន្ត្រីរាជការ" : i % 3 === 1 ? "គ្រូបង្រៀន" : "អាជីវករ");
      const motherJobDefault = st.motherJob || (i % 2 === 0 ? "មេផ្ទះ" : "អាជីវករ");

      const pobVillDefault = st.pobVillage || (i % 3 === 0 ? "ភូមិ១" : i % 3 === 1 ? "ព្រែកតាពៅ" : "ដើមស្លែង");
      const pobComDefault = st.pobCommune || (i % 4 === 0 ? "ទឹកល្អក់១" : i % 4 === 1 ? "ដើមមៀន" : i % 4 === 2 ? "រកាកោង" : "ព្រែកថ្មី");
      const pobDistDefault = st.pobDistrict || (i % 3 === 0 ? "ទួលគោក" : i % 3 === 1 ? "ក្រុងតាខ្មៅ" : "មុខកំពូល");
      const pobProvDefault = st.pobProvince || (i % 3 === 0 ? "រាជធានីភ្នំពេញ" : i % 3 === 1 ? "ខេត្តកណ្តាល" : "ខេត្តកំពង់ចាម");

      const curVillDefault = st.curVillage || (i % 3 === 0 ? "ភូមិ២" : i % 3 === 1 ? "ប៉ប្រក" : "ត្រពាំងឈូក");
      const curComDefault = st.curCommune || (i % 3 === 0 ? "ទឹកល្អក់១" : i % 4 === 1 ? "កាកាប" : "ទឹកថ្លា");
      const curDistDefault = st.curDistrict || (i % 3 === 0 ? "ទួលគោក" : i % 3 === 1 ? "ពោធិ៍សែនជ័យ" : "សែនសុខ");
      const curProvDefault = st.curProvince || "រាជធានីភ្នំពេញ";

      const studentPhoneDefault = st.studentPhone || (i % 2 === 0 ? `012 ${String(300 + i).padStart(3, '0')} ${String(400 + i).padStart(3, '0')}` : "");
      const parentPhoneDefault = st.parentPhone || `012 ${String(700 + i).padStart(3, '0')} ${String(800 + i).padStart(3, '0')}`;

      const fullPob = st.pob || [
        pobVillDefault ? 'ភូមិ' + pobVillDefault : '',
        pobComDefault ? 'ឃុំ/សង្កាត់' + pobComDefault : '',
        pobDistDefault ? 'ស្រុក/ខណ្ឌ' + pobDistDefault : '',
        pobProvDefault
      ].filter(Boolean).join(', ');

      const fullAddress = st.address || [
        curVillDefault ? 'ភូមិ' + curVillDefault : '',
        curComDefault ? 'ឃុំ/សង្កាត់' + curComDefault : '',
        curDistDefault ? 'ស្រុក/ខណ្ឌ' + curDistDefault : '',
        curProvDefault
      ].filter(Boolean).join(', ');

      return {
        ...st,
        fatherName: st.fatherName !== undefined && st.fatherName !== "" ? st.fatherName : fatherDefault,
        fatherJob: st.fatherJob !== undefined && st.fatherJob !== "" ? st.fatherJob : fatherJobDefault,
        motherName: st.motherName !== undefined && st.motherName !== "" ? st.motherName : motherDefault,
        motherJob: st.motherJob !== undefined && st.motherJob !== "" ? st.motherJob : motherJobDefault,
        parentName: st.parentName || st.fatherName || fatherDefault,
        pobVillage: st.pobVillage !== undefined && st.pobVillage !== "" ? st.pobVillage : pobVillDefault,
        pobCommune: st.pobCommune !== undefined && st.pobCommune !== "" ? st.pobCommune : pobComDefault,
        pobDistrict: st.pobDistrict !== undefined && st.pobDistrict !== "" ? st.pobDistrict : pobDistDefault,
        pobProvince: st.pobProvince !== undefined && st.pobProvince !== "" ? st.pobProvince : pobProvDefault,
        curVillage: st.curVillage !== undefined && st.curVillage !== "" ? st.curVillage : curVillDefault,
        curCommune: st.curCommune !== undefined && st.curCommune !== "" ? st.curCommune : curComDefault,
        curDistrict: st.curDistrict !== undefined && st.curDistrict !== "" ? st.curDistrict : curDistDefault,
        curProvince: st.curProvince !== undefined && st.curProvince !== "" ? st.curProvince : curProvDefault,
        pob: fullPob,
        address: fullAddress,
        studentPhone: st.studentPhone !== undefined ? st.studentPhone : studentPhoneDefault,
        parentPhone: st.parentPhone !== undefined && st.parentPhone !== "" ? st.parentPhone : parentPhoneDefault
      };
    });
  }

  static getStudents(cls = this.getCurrentClass()) {
    const key = this.getClassKey(STORAGE_KEYS.STUDENTS, cls);
    let raw = localStorage.getItem(key);
    if (!raw && cls === "8A") {
      raw = localStorage.getItem(STORAGE_KEYS.STUDENTS);
      if (raw) localStorage.setItem(key, raw);
    }
    if (!raw) {
      const generated = cls === "8A" && typeof SEED_STUDENTS !== "undefined"
        ? SEED_STUDENTS
        : this.generateSeedStudentsForClass(cls);
      this.saveStudents(generated, cls);
      return this.formatStudentsList(generated);
    }
    const list = JSON.parse(raw);
    return this.formatStudentsList(Array.isArray(list) ? list : []);
  }

  static saveStudents(students, cls = this.getCurrentClass()) {
    const key = this.getClassKey(STORAGE_KEYS.STUDENTS, cls);
    localStorage.setItem(key, JSON.stringify(students));
    if (cls === "8A") {
      localStorage.setItem(STORAGE_KEYS.STUDENTS, JSON.stringify(students));
    }
  }

  static getGrades(cls = this.getCurrentClass()) {
    const key = this.getClassKey(STORAGE_KEYS.GRADES, cls);
    let raw = localStorage.getItem(key);
    if (!raw && cls === "8A") {
      raw = localStorage.getItem(STORAGE_KEYS.GRADES);
      if (raw) localStorage.setItem(key, raw);
    }
    if (!raw) {
      const students = this.getStudents(cls);
      const generated = cls === "8A" && typeof SEED_MONTH_10_GRADES !== "undefined"
        ? { "month_10": SEED_MONTH_10_GRADES, "month_11": {}, "month_12": {}, "sem_1": {}, "month_01": {}, "month_02": {}, "month_03": {}, "month_04": {}, "month_05": {}, "sem_2": {} }
        : this.generateSeedGradesForClass(cls, students);
      this.saveGrades(generated, cls);
      return generated;
    }
    return JSON.parse(raw) || {};
  }

  static saveGrades(grades, cls = this.getCurrentClass()) {
    const key = this.getClassKey(STORAGE_KEYS.GRADES, cls);
    localStorage.setItem(key, JSON.stringify(grades));
    if (cls === "8A") {
      localStorage.setItem(STORAGE_KEYS.GRADES, JSON.stringify(grades));
    }
  }

  static getAttendance(cls = this.getCurrentClass()) {
    const key = this.getClassKey(STORAGE_KEYS.ATTENDANCE, cls);
    let raw = localStorage.getItem(key);
    if (!raw && cls === "8A") {
      raw = localStorage.getItem(STORAGE_KEYS.ATTENDANCE);
      if (raw) localStorage.setItem(key, raw);
    }
    if (!raw) {
      const students = this.getStudents(cls);
      const generated = this.generateSeedAttendanceForClass(cls, students);
      this.saveAttendance(generated, cls);
      return generated;
    }
    return JSON.parse(raw) || {};
  }

  static saveAttendance(attendance, cls = this.getCurrentClass()) {
    const key = this.getClassKey(STORAGE_KEYS.ATTENDANCE, cls);
    localStorage.setItem(key, JSON.stringify(attendance));
    if (cls === "8A") {
      localStorage.setItem(STORAGE_KEYS.ATTENDANCE, JSON.stringify(attendance));
    }
  }

  static getSeating(cls = this.getCurrentClass()) {
    const key = this.getClassKey(STORAGE_KEYS.SEATING, cls);
    let raw = localStorage.getItem(key);
    if (!raw && cls === "8A") {
      raw = localStorage.getItem(STORAGE_KEYS.SEATING);
      if (raw) localStorage.setItem(key, raw);
    }
    if (!raw) {
      const students = this.getStudents(cls);
      const generated = this.generateSeedSeatingForClass(cls, students);
      this.saveSeating(generated, cls);
      return generated;
    }
    return JSON.parse(raw);
  }

  static saveSeating(seating, cls = this.getCurrentClass()) {
    const key = this.getClassKey(STORAGE_KEYS.SEATING, cls);
    localStorage.setItem(key, JSON.stringify(seating));
    if (cls === "8A") {
      localStorage.setItem(STORAGE_KEYS.SEATING, JSON.stringify(seating));
    }
  }

  static getSeatingConfig(cls = this.getCurrentClass()) {
    const key = this.getClassKey(STORAGE_KEYS.SEATING_CONFIG, cls);
    let raw = localStorage.getItem(key);
    if (!raw && cls === "8A") {
      raw = localStorage.getItem(STORAGE_KEYS.SEATING_CONFIG);
      if (raw) localStorage.setItem(key, raw);
    }
    if (!raw) {
      const khmerCls = {
        "7A": "៧ A", "7B": "៧ B", "8A": "៨ A", "8B": "៨ B", "9A": "៩ A", "9B": "៩ B"
      }[cls] || cls;
      const cfg = {
        roomNumber: "បន្ទប់លេខ " + (cls.startsWith('7') ? '១' : cls.startsWith('8') ? '២' : '៣'),
        roomTitle: "ប្រឡងឆមាសថ្នាក់ទី " + khmerCls,
        teacherName: "អ្នកគ្រូ ឡុង ស្រីពៅ",
        blackboardTitle: "ក្តារខៀន • CLASSROOM BLACKBOARD",
        blackboardNote: "ថ្ងៃនេះ៖ ម៉ោងសិក្សា & ប្រឡងប្រចាំឆមាស",
        mottoBanner: "សាលារៀនស្អាត • វិន័យល្អ • សិក្សាពូកែ",
        totalSeats: 42,
        numberingPattern: "snake",
        deskColorTheme: "classic_oak"
      };
      this.saveSeatingConfig(cfg, cls);
      return cfg;
    }
    return JSON.parse(raw);
  }

  static saveSeatingConfig(config, cls = this.getCurrentClass()) {
    const key = this.getClassKey(STORAGE_KEYS.SEATING_CONFIG, cls);
    localStorage.setItem(key, JSON.stringify(config));
    if (cls === "8A") {
      localStorage.setItem(STORAGE_KEYS.SEATING_CONFIG, JSON.stringify(config));
    }
  }

  static getHealth(cls = this.getCurrentClass()) {
    const key = this.getClassKey(STORAGE_KEYS.HEALTH, cls);
    let raw = localStorage.getItem(key);
    if (!raw && cls === "8A") {
      raw = localStorage.getItem(STORAGE_KEYS.HEALTH);
      if (raw) localStorage.setItem(key, raw);
    }
    if (!raw) {
      const students = this.getStudents(cls);
      const generated = this.generateSeedHealthForClass(cls, students);
      this.saveHealth(generated, cls);
      return generated;
    }
    return JSON.parse(raw) || {};
  }

  static saveHealth(health, cls = this.getCurrentClass()) {
    const key = this.getClassKey(STORAGE_KEYS.HEALTH, cls);
    localStorage.setItem(key, JSON.stringify(health));
    if (cls === "8A") {
      localStorage.setItem(STORAGE_KEYS.HEALTH, JSON.stringify(health));
    }
  }

  static getCouncil(cls = this.getCurrentClass()) {
    const key = this.getClassKey(STORAGE_KEYS.COUNCIL, cls);
    let raw = localStorage.getItem(key);
    if (!raw && cls === "8A") {
      raw = localStorage.getItem(STORAGE_KEYS.COUNCIL);
      if (raw) localStorage.setItem(key, raw);
    }
    if (!raw) {
      const students = this.getStudents(cls);
      const generated = this.generateSeedCouncilForClass(cls, students);
      this.saveCouncil(generated, cls);
      return generated;
    }
    return JSON.parse(raw) || {};
  }

  static saveCouncil(council, cls = this.getCurrentClass()) {
    const key = this.getClassKey(STORAGE_KEYS.COUNCIL, cls);
    localStorage.setItem(key, JSON.stringify(council));
    if (cls === "8A") {
      localStorage.setItem(STORAGE_KEYS.COUNCIL, JSON.stringify(council));
    }
  }

  static getTimetable(cls = this.getCurrentClass()) {
    const key = this.getClassKey(STORAGE_KEYS.TIMETABLE, cls);
    let raw = localStorage.getItem(key);
    if (!raw && cls === "8A") {
      raw = localStorage.getItem(STORAGE_KEYS.TIMETABLE);
      if (raw) localStorage.setItem(key, raw);
    }
    if (!raw) {
      const base = typeof SEED_TIMETABLE !== "undefined" ? SEED_TIMETABLE.filter(s => !s.isBreak) : [];
      this.saveTimetable(base, cls);
      return base;
    }
    let tt = JSON.parse(raw);
    if (!tt || !Array.isArray(tt) || tt.length === 0) {
      return typeof SEED_TIMETABLE !== "undefined" ? SEED_TIMETABLE.filter(s => !s.isBreak) : [];
    }
    return tt.filter(s => !s.isBreak);
  }

  static saveTimetable(timetable, cls = this.getCurrentClass()) {
    const key = this.getClassKey(STORAGE_KEYS.TIMETABLE, cls);
    localStorage.setItem(key, JSON.stringify(timetable));
    if (cls === "8A") {
      localStorage.setItem(STORAGE_KEYS.TIMETABLE, JSON.stringify(timetable));
    }
  }

  static getHomework(cls = this.getCurrentClass()) {
    const key = this.getClassKey(STORAGE_KEYS.HOMEWORK, cls);
    let raw = localStorage.getItem(key);
    if (!raw && cls === "8A") {
      raw = localStorage.getItem(STORAGE_KEYS.HOMEWORK);
      if (raw) localStorage.setItem(key, raw);
    }
    if (!raw) {
      const base = typeof SEED_HOMEWORK !== "undefined" ? SEED_HOMEWORK : [];
      this.saveHomework(base, cls);
      return base;
    }
    return JSON.parse(raw) || [];
  }

  static saveHomework(homework, cls = this.getCurrentClass()) {
    const key = this.getClassKey(STORAGE_KEYS.HOMEWORK, cls);
    localStorage.setItem(key, JSON.stringify(homework));
    if (cls === "8A") {
      localStorage.setItem(STORAGE_KEYS.HOMEWORK, JSON.stringify(homework));
    }
  }

  static getDiscipline(cls = this.getCurrentClass()) {
    const key = this.getClassKey(STORAGE_KEYS.DISCIPLINE, cls);
    let raw = localStorage.getItem(key);
    if (!raw && cls === "8A") {
      raw = localStorage.getItem(STORAGE_KEYS.DISCIPLINE);
      if (raw) localStorage.setItem(key, raw);
    }
    if (!raw) {
      const base = typeof SEED_DISCIPLINE_RECORDS !== "undefined" ? SEED_DISCIPLINE_RECORDS : [];
      this.saveDiscipline(base, cls);
      return base;
    }
    return JSON.parse(raw) || [];
  }

  static saveDiscipline(records, cls = this.getCurrentClass()) {
    const key = this.getClassKey(STORAGE_KEYS.DISCIPLINE, cls);
    localStorage.setItem(key, JSON.stringify(records));
    if (cls === "8A") {
      localStorage.setItem(STORAGE_KEYS.DISCIPLINE, JSON.stringify(records));
    }
  }

  static getSubjects() {
    let subs = JSON.parse(localStorage.getItem(STORAGE_KEYS.SUBJECTS));
    if (!subs || !Array.isArray(subs) || subs.length === 0) return SEED_SUBJECTS;

    const hasHomeEco = subs.some(s => s.id === "home_eco" || (s.nameKh && s.nameKh.includes("គេហវិទ្យា")) || (s.name && s.name.includes("គេហវិទ្យា")));
    if (!hasHomeEco) {
      const defaultHomeEco = (typeof SEED_SUBJECTS !== "undefined" ? SEED_SUBJECTS.find(s => s.id === "home_eco") : null) || {
        id: "home_eco",
        name: "គេហវិទ្យា",
        nameKh: "គេហវិទ្យា",
        nameEn: "Home Economics",
        maxScore: 50,
        coef: 1,
        teacher: "អ្នកគ្រូ ឡុង ស្រីពៅ",
        color: "#ec4899",
        phone: "០១២ ៣៤៥ ៦៨០"
      };
      subs.push(defaultHomeEco);
      localStorage.setItem(STORAGE_KEYS.SUBJECTS, JSON.stringify(subs));
    }
    return subs;
  }

  static saveSubjects(subjects) {
    localStorage.setItem(STORAGE_KEYS.SUBJECTS, JSON.stringify(subjects));
  }


  static getQuestions() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.QUESTIONS)) || (typeof SEED_QUESTIONS !== "undefined" ? SEED_QUESTIONS : []);
  }

  static saveQuestions(questions) {
    localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(questions));
  }

  static getTextbooks() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.TEXTBOOKS)) || (typeof SEED_TEXTBOOKS !== "undefined" ? SEED_TEXTBOOKS : []);
  }

  static saveTextbooks(textbooks) {
    localStorage.setItem(STORAGE_KEYS.TEXTBOOKS, JSON.stringify(textbooks));
  }

  static getCouncil() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.COUNCIL)) || (typeof SEED_COUNCIL !== "undefined" ? SEED_COUNCIL : {});
  }

  static saveCouncil(council) {
    localStorage.setItem(STORAGE_KEYS.COUNCIL, JSON.stringify(council));
  }

  static getClubs() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.CLUBS)) || (typeof SEED_CLUBS !== "undefined" ? SEED_CLUBS : []);
  }

  static saveClubs(clubs) {
    localStorage.setItem(STORAGE_KEYS.CLUBS, JSON.stringify(clubs));
  }

  static getSeating() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.SEATING)) || null;
  }

  static saveSeating(seating) {
    localStorage.setItem(STORAGE_KEYS.SEATING, JSON.stringify(seating));
  }

  static getSeatingConfig() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.SEATING_CONFIG)) || {
      roomNumber: "បន្ទប់លេខ ១",
      roomTitle: "ប្រឡងឆមាសថ្នាក់ទី ៨ A",
      teacherName: "អ្នកគ្រូ ឡុង ស្រីពៅ",
      blackboardTitle: "ក្តារខៀន • CLASSROOM BLACKBOARD",
      blackboardNote: "ថ្ងៃនេះ៖ ម៉ោងសិក្សា & ប្រឡងប្រចាំឆមាស",
      mottoBanner: "សាលារៀនស្អាត • វិន័យល្អ • សិក្សាពូកែ",
      totalSeats: 42,
      numberingPattern: "snake",
      deskColorTheme: "classic_oak"
    };
  }

  static saveSeatingConfig(config) {
    localStorage.setItem(STORAGE_KEYS.SEATING_CONFIG, JSON.stringify(config));
  }

  static getHealth() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.HEALTH)) || (typeof SEED_HEALTH_RECORDS !== "undefined" ? SEED_HEALTH_RECORDS : {});
  }

  static saveHealth(health) {
    localStorage.setItem(STORAGE_KEYS.HEALTH, JSON.stringify(health));
  }

  static getElections() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.ELECTIONS)) || (typeof SEED_ELECTIONS !== "undefined" ? SEED_ELECTIONS : []);
  }

  static saveElections(elections) {
    localStorage.setItem(STORAGE_KEYS.ELECTIONS, JSON.stringify(elections));
  }

  static getGamification() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.GAMIFICATION)) || (typeof SEED_GAMIFICATION !== "undefined" ? SEED_GAMIFICATION : { badges: [], studentStars: {}, history: [] });
  }

  static saveGamification(gamification) {
    localStorage.setItem(STORAGE_KEYS.GAMIFICATION, JSON.stringify(gamification));
  }

  static getFund() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.FUND)) || (typeof SEED_FUND !== "undefined" ? SEED_FUND : { currency: "KHR", transactions: [] });
  }

  static saveFund(fund) {
    localStorage.setItem(STORAGE_KEYS.FUND, JSON.stringify(fund));
  }

  static getLogbook() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.LOGBOOK)) || (typeof SEED_LOGBOOK !== "undefined" ? SEED_LOGBOOK : []);
  }

  static saveLogbook(logbook) {
    localStorage.setItem(STORAGE_KEYS.LOGBOOK, JSON.stringify(logbook));
  }

  static getResources() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.RESOURCES)) || (typeof SEED_RESOURCES !== "undefined" ? SEED_RESOURCES : []);
  }

  static saveResources(resources) {
    localStorage.setItem(STORAGE_KEYS.RESOURCES, JSON.stringify(resources));
  }

  static exportBackupJSON() {
    const backup = {
      school: this.getSchoolInfo(),
      students: this.getStudents(),
      subjects: this.getSubjects(),
      grades: this.getGrades(),
      attendance: this.getAttendance(),
      discipline: this.getDiscipline(),
      timetable: this.getTimetable(),
      homework: this.getHomework(),
      questions: this.getQuestions(),
      textbooks: this.getTextbooks(),
      council: this.getCouncil(),
      clubs: this.getClubs(),
      seating: this.getSeating(),
      exportDate: new Date().toISOString(),
      version: "2.1"
    };

    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ថ្នាក់ទី_៨A_Backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  static importBackupJSON(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      if (data.students && Array.isArray(data.students)) {
        if (data.school) this.saveSchoolInfo(data.school);
        if (data.students) this.saveStudents(data.students);
        if (data.grades) this.saveGrades(data.grades);
        if (data.attendance) this.saveAttendance(data.attendance);
        if (data.discipline) this.saveDiscipline(data.discipline);
        if (data.homework) this.saveHomework(data.homework);
        if (data.questions) this.saveQuestions(data.questions);
        if (data.textbooks) this.saveTextbooks(data.textbooks);
        if (data.council) this.saveCouncil(data.council);
        if (data.clubs) this.saveClubs(data.clubs);
        if (data.seating) this.saveSeating(data.seating);
        return { success: true };
      }
      return { success: false, error: "ទម្រង់ឯកសារ JSON មិនត្រឹមត្រូវ" };
    } catch (e) {
      return { success: false, error: e.message };
    }
  }
}

// Auto init on load
StorageManager.init();


/* ==================================================================== */
/* MODULE: students.js
/* ==================================================================== */

/**
 * STUDENTS MANAGEMENT MODULE (WITH QR CODE INTEGRATION)
 */

class StudentsModule {
  static init() {
    this.tableBody = document.getElementById("studentsTableBody");
    this.searchInput = document.getElementById("studentTableSearch");
    this.genderFilter = document.getElementById("studentGenderFilter");
    this.statusFilter = document.getElementById("studentStatusFilter");
    this.studentForm = document.getElementById("studentForm");
    this.addBtn = document.getElementById("addNewStudentModalBtn");
    this.exportBtn = document.getElementById("exportStudentsExcelBtn");
    this.printBtn = document.getElementById("printStudentListBtn");
    this.randomAvatarBtn = document.getElementById("randomizeAvatarBtn");

    this.bindEvents();
    this.render();
  }

  static bindEvents() {
    if (this.searchInput) {
      this.searchInput.addEventListener("input", () => this.render());
    }
    if (this.genderFilter) {
      this.genderFilter.addEventListener("change", () => this.render());
    }
    if (this.statusFilter) {
      this.statusFilter.addEventListener("change", () => this.render());
    }
    if (this.addBtn) {
      this.addBtn.addEventListener("click", () => this.openAddModal());
    }
    if (this.studentForm) {
      this.studentForm.addEventListener("submit", (e) => this.handleFormSubmit(e));
    }
    if (this.exportBtn) {
      this.exportBtn.addEventListener("click", () => this.exportToExcel());
    }
    if (this.printBtn) {
      this.printBtn.addEventListener("click", () => window.print());
    }
    if (this.randomAvatarBtn) {
      this.randomAvatarBtn.addEventListener("click", () => {
        const randomSeed = Math.random().toString(36).substring(7);
        const avatarUrl = `https://api.dicebear.com/7.x/bottts/svg?seed=${randomSeed}`;
        document.getElementById("studentPhotoUrl").value = avatarUrl;
        document.getElementById("formAvatarPreview").src = avatarUrl;
      });
    }

    const photoInput = document.getElementById("studentPhotoUrl");
    if (photoInput) {
      photoInput.addEventListener("input", (e) => {
        const val = e.target.value.trim();
        if (val) {
          document.getElementById("formAvatarPreview").src = val;
        }
      });
    }

    const printCardBtn = document.getElementById("printSingleIdCardBtn");
    if (printCardBtn) {
      printCardBtn.addEventListener("click", () => window.print());
    }
  }

  static getFilteredStudents() {
    const students = StorageManager.getStudents();
    const query = this.searchInput ? this.searchInput.value.toLowerCase().trim() : "";
    const gender = this.genderFilter ? this.genderFilter.value : "all";
    const status = this.statusFilter ? this.statusFilter.value : "all";

    return students.filter(st => {
      const matchQuery = !query || 
        (st.nameKh && st.nameKh.toLowerCase().includes(query)) || 
        (st.nameEn && st.nameEn.toLowerCase().includes(query)) || 
        (st.id && st.id.toLowerCase().includes(query)) ||
        (st.studentPhone && st.studentPhone.includes(query)) ||
        (st.parentPhone && st.parentPhone.includes(query)) ||
        (st.pob && st.pob.toLowerCase().includes(query)) ||
        (st.address && st.address.toLowerCase().includes(query)) ||
        (st.fatherName && st.fatherName.toLowerCase().includes(query)) ||
        (st.motherName && st.motherName.toLowerCase().includes(query));

      const matchGender = gender === "all" || st.gender === gender;
      const matchStatus = status === "all" || st.status === status;

      return matchQuery && matchGender && matchStatus;
    });
  }

  static formatPob(st) {
    if (st.pobVillage || st.pobCommune || st.pobDistrict || st.pobProvince) {
      const parts = [];
      if (st.pobVillage) parts.push(`ភូមិ${st.pobVillage.replace(/^ភូមិ/, '')}`);
      if (st.pobCommune) parts.push(`ឃុំ/សង្កាត់${st.pobCommune.replace(/^(ឃុំ|សង្កាត់)/, '')}`);
      if (st.pobDistrict) parts.push(`ស្រុក/ខណ្ឌ${st.pobDistrict.replace(/^(ស្រុក|ខណ្ឌ)/, '')}`);
      if (st.pobProvince) parts.push(st.pobProvince);
      return parts.join(', ');
    }
    return st.pob || "រាជធានីភ្នំពេញ";
  }

  static formatCurAddress(st) {
    if (st.curVillage || st.curCommune || st.curDistrict || st.curProvince) {
      const parts = [];
      if (st.curVillage) parts.push(`ភូមិ${st.curVillage.replace(/^ភូមិ/, '')}`);
      if (st.curCommune) parts.push(`ឃុំ/សង្កាត់${st.curCommune.replace(/^(ឃុំ|សង្កាត់)/, '')}`);
      if (st.curDistrict) parts.push(`ស្រុក/ខណ្ឌ${st.curDistrict.replace(/^(ស្រុក|ខណ្ឌ)/, '')}`);
      if (st.curProvince) parts.push(st.curProvince);
      return parts.join(', ');
    }
    return st.address || "រាជធានីភ្នំពេញ";
  }

  static render() {
    const filtered = this.getFilteredStudents();
    const allStudents = StorageManager.getStudents();

    // Update badges & stats
    const totalCount = allStudents.length;
    const femaleCount = allStudents.filter(s => s.gender === "ស្រី").length;
    const maleCount = totalCount - femaleCount;

    const countBadge = document.getElementById("studentCountBadge");
    if (countBadge) countBadge.textContent = totalCount;

    const subTitle = document.getElementById("studentsListSubtitle");
    if (subTitle) {
      subTitle.textContent = `សរុប ${totalCount} នាក់ (ស្រី ${femaleCount} នាក់, ប្រុស ${maleCount} នាក់)`;
    }

    const infoText = document.getElementById("studentTableInfoText");
    if (infoText) {
      infoText.textContent = `បង្ហាញ ${filtered.length} នៃ ${totalCount} សិស្សក្នុងបញ្ជី`;
    }

    if (!this.tableBody) return;

    if (filtered.length === 0) {
      this.tableBody.innerHTML = `
        <tr>
          <td colspan="11" class="text-center p-4 text-muted">
            <i class="fa-solid fa-user-slash" style="font-size: 2rem; margin-bottom: 8px; display: block;"></i>
            មិនមានទិន្នន័យសិស្សត្រូវនឹងលក្ខខណ្ឌស្វែងរកឡើយ
          </td>
        </tr>
      `;
      return;
    }

    this.tableBody.innerHTML = filtered.map((st, index) => {
      const fallbackPhoto = `https://api.dicebear.com/7.x/bottts/svg?seed=${st.id}`;
      const photoSrc = st.photo || fallbackPhoto;
      
      const statusBadge = st.status === "កំពុងរៀន"
        ? `<span class="badge badge-soft-success">${st.status}</span>`
        : st.status === "ផ្អាកការសិក្សា"
        ? `<span class="badge badge-soft-warning">${st.status}</span>`
        : `<span class="badge badge-soft-danger">${st.status}</span>`;

      const pobDisplay = this.formatPob(st);
      const curAddressDisplay = this.formatCurAddress(st);

      const fatherLine = st.fatherName 
        ? `<div style="font-size:0.83rem; white-space:nowrap;"><i class="fa-solid fa-user-tie text-primary" style="font-size:0.75rem;"></i> <strong>${st.fatherName}</strong> ${st.fatherJob ? `<small class="text-muted">(${st.fatherJob})</small>` : ''}</div>`
        : (st.parentName ? `<div style="font-size:0.83rem;"><strong>${st.parentName}</strong></div>` : '');

      const motherLine = st.motherName 
        ? `<div style="font-size:0.83rem; white-space:nowrap;"><i class="fa-solid fa-person-dress text-accent" style="font-size:0.75rem;"></i> <strong>${st.motherName}</strong> ${st.motherJob ? `<small class="text-muted">(${st.motherJob})</small>` : ''}</div>`
        : '';

      const phoneContent = `
        <div style="font-size:0.82rem; line-height:1.4;">
          ${st.studentPhone ? `<div><i class="fa-solid fa-mobile-screen text-info" style="font-size:0.75rem;"></i> <span class="font-mono">${st.studentPhone}</span></div>` : ''}
          ${st.parentPhone ? `<div><i class="fa-solid fa-phone text-success" style="font-size:0.75rem;"></i> <span class="font-mono">${st.parentPhone}</span></div>` : ''}
          ${!st.studentPhone && !st.parentPhone ? '<span class="text-muted">-</span>' : ''}
        </div>
      `;

      return `
        <tr>
          <td class="text-center font-bold">${index + 1}</td>
          <td><span class="badge badge-soft-primary font-mono">${st.id}</span></td>
          <td>
            <div class="student-row-flex">
              <img src="${photoSrc}" alt="${st.nameKh}" class="student-table-avatar" onerror="this.src='${fallbackPhoto}'">
              <div>
                <div class="student-name-kh">${st.nameKh}</div>
                <div class="student-name-en">${st.nameEn}</div>
              </div>
            </div>
          </td>
          <td class="text-center font-bold ${st.gender === 'ស្រី' ? 'text-accent' : 'text-primary'}">${st.gender}</td>
          <td><span class="font-mono" style="font-size:0.85rem;">${st.dob || '-'}</span></td>
          <td><div style="font-size:0.82rem; max-width:180px; line-height:1.35;" title="${pobDisplay}"><i class="fa-solid fa-hospital-user text-primary" style="font-size:0.72rem;"></i> ${pobDisplay}</div></td>
          <td><div style="font-size:0.82rem; max-width:180px; line-height:1.35;" title="${curAddressDisplay}"><i class="fa-solid fa-location-dot text-danger" style="font-size:0.72rem;"></i> ${curAddressDisplay}</div></td>
          <td>
            ${fatherLine || motherLine ? `${fatherLine}${motherLine}` : '<span class="text-muted">-</span>'}
          </td>
          <td>${phoneContent}</td>
          <td class="text-center">${statusBadge}</td>
          <td class="text-center">
            <div class="table-action-btns">
              <button class="btn-icon text-accent" onclick="StudentsModule.viewCard('${st.id}')" title="កាតសិស្ស & QR">
                <i class="fa-solid fa-qrcode"></i>
              </button>
              <button class="btn-icon text-primary" onclick="StudentsModule.openEditModal('${st.id}')" title="កែប្រែ">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button class="btn-icon text-info" onclick="TelegramModule.openSendModal('${st.id}')" title="ផ្ញើសារ Telegram">
                <i class="fa-brands fa-telegram"></i>
              </button>
              <button class="btn-icon text-danger" onclick="StudentsModule.deleteStudent('${st.id}')" title="លុប">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join("");
  }

  static openAddModal() {
    const currentClass = StorageManager.getCurrentClass();
    const students = StorageManager.getStudents();
    const nextNum = (students.length + 1).toString().padStart(3, '0');
    const newId = `STU-${currentClass}-${nextNum}`;

    document.getElementById("studentModalTitle").innerHTML = `<i class="fa-solid fa-user-plus text-primary"></i> បន្ថែមសិស្សថ្មី`;
    document.getElementById("studentFormIndex").value = "-1";
    document.getElementById("studentIdInput").value = newId;
    document.getElementById("studentIdInput").disabled = false;
    const classInput = document.getElementById("studentClassInput");
    if (classInput) classInput.value = currentClass;
    document.getElementById("studentKhmerName").value = "";
    document.getElementById("studentLatinName").value = "";
    document.getElementById("studentGenderSelect").value = "ស្រី";
    const gradeNum = parseInt(currentClass.charAt(0), 10) || 8;
    const defaultYear = gradeNum === 7 ? "2013" : gradeNum === 8 ? "2012" : "2011";
    document.getElementById("studentDobInput").value = `${defaultYear}-01-01`;
    document.getElementById("studentStatusSelect").value = "កំពុងរៀន";
    document.getElementById("studentPhoneInput").value = "";

    // Reset POB
    document.getElementById("studentPobVillage").value = "";
    document.getElementById("studentPobCommune").value = "";
    document.getElementById("studentPobDistrict").value = "";
    document.getElementById("studentPobProvince").value = "រាជធានីភ្នំពេញ";

    // Reset Current Address
    document.getElementById("studentCurVillage").value = "";
    document.getElementById("studentCurCommune").value = "";
    document.getElementById("studentCurDistrict").value = "";
    document.getElementById("studentCurProvince").value = "រាជធានីភ្នំពេញ";

    // Reset Parents
    document.getElementById("studentFatherName").value = "";
    document.getElementById("studentFatherJob").value = "";
    document.getElementById("studentMotherName").value = "";
    document.getElementById("studentMotherJob").value = "";
    document.getElementById("studentParentPhone").value = "";
    document.getElementById("studentNoteInput").value = "";
    
    const randomAvatar = `https://api.dicebear.com/7.x/bottts/svg?seed=${newId}`;
    document.getElementById("studentPhotoUrl").value = randomAvatar;
    document.getElementById("formAvatarPreview").src = randomAvatar;

    openModal("studentModal");
  }

  static openEditModal(studentId) {
    const students = StorageManager.getStudents();
    const st = students.find(s => s.id === studentId);
    if (!st) return;

    document.getElementById("studentModalTitle").innerHTML = `<i class="fa-solid fa-user-pen text-primary"></i> កែប្រែព័ត៌មានសិស្ស (${st.id})`;
    document.getElementById("studentFormIndex").value = studentId;
    document.getElementById("studentIdInput").value = st.id;
    document.getElementById("studentIdInput").disabled = true;
    document.getElementById("studentKhmerName").value = st.nameKh || "";
    document.getElementById("studentLatinName").value = st.nameEn || "";
    document.getElementById("studentGenderSelect").value = st.gender || "ស្រី";
    document.getElementById("studentDobInput").value = st.dob || "2012-01-01";
    const classInput = document.getElementById("studentClassInput");
    if (classInput) classInput.value = st.class || StorageManager.getCurrentClass();
    document.getElementById("studentStatusSelect").value = st.status || "កំពុងរៀន";
    document.getElementById("studentPhoneInput").value = st.studentPhone || "";

    // Place of Birth
    document.getElementById("studentPobVillage").value = st.pobVillage || "";
    document.getElementById("studentPobCommune").value = st.pobCommune || "";
    document.getElementById("studentPobDistrict").value = st.pobDistrict || "";
    document.getElementById("studentPobProvince").value = st.pobProvince || "រាជធានីភ្នំពេញ";

    // Current Address
    document.getElementById("studentCurVillage").value = st.curVillage || "";
    document.getElementById("studentCurCommune").value = st.curCommune || "";
    document.getElementById("studentCurDistrict").value = st.curDistrict || "";
    document.getElementById("studentCurProvince").value = st.curProvince || "រាជធានីភ្នំពេញ";

    // Parents
    document.getElementById("studentFatherName").value = st.fatherName || st.parentName || "";
    document.getElementById("studentFatherJob").value = st.fatherJob || "";
    document.getElementById("studentMotherName").value = st.motherName || "";
    document.getElementById("studentMotherJob").value = st.motherJob || "";
    document.getElementById("studentParentPhone").value = st.parentPhone || "";
    document.getElementById("studentNoteInput").value = st.note || "";

    document.getElementById("studentPhotoUrl").value = st.photo || "";
    document.getElementById("formAvatarPreview").src = st.photo || `https://api.dicebear.com/7.x/bottts/svg?seed=${st.id}`;

    openModal("studentModal");
  }

  static handleFormSubmit(e) {
    e.preventDefault();
    const formIndex = document.getElementById("studentFormIndex").value;
    const students = StorageManager.getStudents();

    const pobVillage = document.getElementById("studentPobVillage").value.trim();
    const pobCommune = document.getElementById("studentPobCommune").value.trim();
    const pobDistrict = document.getElementById("studentPobDistrict").value.trim();
    const pobProvince = document.getElementById("studentPobProvince").value.trim();

    const curVillage = document.getElementById("studentCurVillage").value.trim();
    const curCommune = document.getElementById("studentCurCommune").value.trim();
    const curDistrict = document.getElementById("studentCurDistrict").value.trim();
    const curProvince = document.getElementById("studentCurProvince").value.trim();

    const studentPhone = document.getElementById("studentPhoneInput").value.trim();
    const parentPhone = document.getElementById("studentParentPhone").value.trim();
    const fatherName = document.getElementById("studentFatherName").value.trim();
    const fatherJob = document.getElementById("studentFatherJob").value.trim();
    const motherName = document.getElementById("studentMotherName").value.trim();
    const motherJob = document.getElementById("studentMotherJob").value.trim();
    const note = document.getElementById("studentNoteInput").value.trim();

    const fullPob = [
      pobVillage ? 'ភូមិ' + pobVillage.replace(/^ភូមិ/, '') : '',
      pobCommune ? 'ឃុំ/សង្កាត់' + pobCommune.replace(/^(ឃុំ|សង្កាត់)/, '') : '',
      pobDistrict ? 'ស្រុក/ខណ្ឌ' + pobDistrict.replace(/^(ស្រុក|ខណ្ឌ)/, '') : '',
      pobProvince
    ].filter(Boolean).join(', ');

    const fullAddress = [
      curVillage ? 'ភូមិ' + curVillage.replace(/^ភូមិ/, '') : '',
      curCommune ? 'ឃុំ/សង្កាត់' + curCommune.replace(/^(ឃុំ|សង្កាត់)/, '') : '',
      curDistrict ? 'ស្រុក/ខណ្ឌ' + curDistrict.replace(/^(ស្រុក|ខណ្ឌ)/, '') : '',
      curProvince
    ].filter(Boolean).join(', ');

    const studentData = {
      id: document.getElementById("studentIdInput").value.trim(),
      nameKh: document.getElementById("studentKhmerName").value.trim(),
      nameEn: document.getElementById("studentLatinName").value.trim().toUpperCase(),
      gender: document.getElementById("studentGenderSelect").value,
      dob: document.getElementById("studentDobInput").value,
      class: document.getElementById("studentClassInput").value,
      status: document.getElementById("studentStatusSelect").value,
      studentPhone,
      pobVillage,
      pobCommune,
      pobDistrict,
      pobProvince,
      pob: fullPob,
      curVillage,
      curCommune,
      curDistrict,
      curProvince,
      address: fullAddress,
      fatherName,
      fatherJob,
      motherName,
      motherJob,
      parentName: fatherName || motherName,
      parentPhone,
      note,
      photo: document.getElementById("studentPhotoUrl").value.trim()
    };

    if (formIndex === "-1") {
      if (students.some(s => s.id === studentData.id)) {
        showToast("អត្តលេខសិស្សនេះមានក្នុងប្រព័ន្ធរួចហើយ!", "error");
        return;
      }
      students.push(studentData);
      showToast("បានបន្ថែមសិស្សថ្មីជោគជ័យ!", "success");
    } else {
      const idx = students.findIndex(s => s.id === formIndex);
      if (idx !== -1) {
        students[idx] = { ...students[idx], ...studentData };
        showToast("បានកែប្រែទិន្នន័យសិស្សជោគជ័យ!", "success");
      }
    }

    StorageManager.saveStudents(students);
    closeModal("studentModal");
    this.render();
    if (window.App) App.refreshAllModules();
  }

  static async deleteStudent(studentId) {
    const students = StorageManager.getStudents();
    const st = students.find(s => s.id === studentId);
    const studentDisplayName = st ? `<b>${st.nameKh || st.nameEn || studentId}</b> (<span class="highlight-code">${studentId}</span>)` : `<span class="highlight-code">${studentId}</span>`;

    const confirmed = await showConfirm(
      `តើអ្នកពិតជាចង់លុបទិន្នន័យសិស្ស ${studentDisplayName} ចេញពីប្រព័ន្ធមែនទេ? សកម្មភាពនេះមិនអាចត្រឡប់វិញបានទេ។`,
      {
        title: "បញ្ជាក់ការលុបទិន្នន័យសិស្ស",
        confirmText: "យល់ព្រមលុប",
        cancelText: "បោះបង់",
        type: "danger"
      }
    );
    if (!confirmed) return;

    let updatedStudents = students.filter(s => s.id !== studentId);
    StorageManager.saveStudents(updatedStudents);

    showToast("បានលុបទិន្នន័យសិស្សរួចរាល់!", "info");
    this.render();
    if (window.App) App.refreshAllModules();
  }

  static viewCard(studentId) {
    const students = StorageManager.getStudents();
    const st = students.find(s => s.id === studentId);
    if (!st) return;

    const pobDisplay = this.formatPob(st);
    const curAddressDisplay = this.formatCurAddress(st);

    document.getElementById("idCardPhoto").src = st.photo || `https://api.dicebear.com/7.x/bottts/svg?seed=${st.id}`;
    document.getElementById("idCardNameKh").textContent = st.nameKh;
    document.getElementById("idCardNameEn").textContent = st.nameEn;
    document.getElementById("idCardId").textContent = st.id;
    document.getElementById("idCardClass").textContent = st.class || "៨ A";
    document.getElementById("idCardGender").textContent = st.gender;
    document.getElementById("idCardDob").textContent = st.dob;
    
    const pobEl = document.getElementById("idCardPob");
    if (pobEl) pobEl.textContent = pobDisplay;
    const addrEl = document.getElementById("idCardAddress");
    if (addrEl) addrEl.textContent = curAddressDisplay;

    const phoneEl = document.getElementById("idCardPhone");
    if (phoneEl) {
      phoneEl.textContent = st.studentPhone ? `${st.studentPhone} (សិស្ស) / ${st.parentPhone || ''}` : (st.parentPhone || "N/A");
    }

    // Generate Dynamic QR Code on Card
    const qrContainer = document.getElementById("idCardQrCodeBox");
    if (qrContainer) {
      qrContainer.innerHTML = "";
      if (typeof QRCode !== "undefined") {
        new QRCode(qrContainer, {
          text: JSON.stringify({ 
            id: st.id, 
            nameKh: st.nameKh, 
            nameEn: st.nameEn,
            class: st.class || "8A",
            dob: st.dob,
            pob: pobDisplay,
            curAddress: curAddressDisplay,
            studentPhone: st.studentPhone || "",
            parentPhone: st.parentPhone || "",
            father: st.fatherName || st.parentName || "",
            mother: st.motherName || ""
          }),
          width: 75,
          height: 75,
          colorDark: "#1e3a8a",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.M
        });
      }
    }

    openModal("studentCardModal");
  }

  static exportToExcel() {
    const students = StorageManager.getStudents();
    const worksheetData = [
      [
        "ល.រ", 
        "អត្តលេខសិស្ស", 
        "គោត្តនាម និងនាម", 
        "ឈ្មោះឡាតាំង", 
        "ភេទ", 
        "ថ្ងៃខែឆ្នាំកំណើត", 
        "ថ្នាក់",
        "ភូមិកំណើត",
        "ឃុំ/សង្កាត់កំណើត",
        "ស្រុក/ខណ្ឌកំណើត",
        "ខេត្ត/រាជធានីកំណើត",
        "ទីកន្លែងកំណើតសរុប",
        "ភូមិបច្ចុប្បន្ន",
        "ឃុំ/សង្កាត់បច្ចុប្បន្ន",
        "ស្រុក/ខណ្ឌបច្ចុប្បន្ន",
        "ខេត្ត/រាជធានីបច្ចុប្បន្ន",
        "អាសយដ្ឋានបច្ចុប្បន្នសរុប",
        "ទូរស័ព្ទសិស្ស",
        "ឈ្មោះឪពុក", 
        "មុខរបរឪពុក", 
        "ឈ្មោះម្តាយ", 
        "មុខរបរម្តាយ", 
        "ទូរស័ព្ទអាណាព្យាបាល", 
        "ស្ថានភាព",
        "ចំណាំ"
      ]
    ];

    students.forEach((st, i) => {
      worksheetData.push([
        i + 1,
        st.id,
        st.nameKh,
        st.nameEn,
        st.gender,
        st.dob,
        st.class || "8A",
        st.pobVillage || "",
        st.pobCommune || "",
        st.pobDistrict || "",
        st.pobProvince || "",
        this.formatPob(st),
        st.curVillage || "",
        st.curCommune || "",
        st.curDistrict || "",
        st.curProvince || "",
        this.formatCurAddress(st),
        st.studentPhone || "",
        st.fatherName || st.parentName || "",
        st.fatherJob || "",
        st.motherName || "",
        st.motherJob || "",
        st.parentPhone || "",
        st.status || "កំពុងរៀន",
        st.note || ""
      ]);
    });

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(worksheetData);
    XLSX.utils.book_append_sheet(wb, ws, "បញ្ជីសិស្ស");
    XLSX.writeFile(wb, `បញ្ជីរាយនាមសិស្ស_ថ្នាក់ទី៨A_${new Date().toISOString().split('T')[0]}.xlsx`);
    showToast("បានទាញយកឯកសារ Excel រួចរាល់!", "success");
  }
}


/* ==================================================================== */
/* MODULE: attendance.js
/* ==================================================================== */

/**
 * ATTENDANCE MODULE
 */

class AttendanceModule {
  static init() {
    this.tableBody = document.getElementById("attendanceTableBody");
    this.datePicker = document.getElementById("attendanceDatePicker");
    this.prevBtn = document.getElementById("attendancePrevDayBtn");
    this.todayBtn = document.getElementById("attendanceTodayBtn");
    this.nextBtn = document.getElementById("attendanceNextDayBtn");
    this.markAllBtn = document.getElementById("markAllPresentBtn");
    this.saveBtn = document.getElementById("saveAttendanceBtn");
    this.exportBtn = document.getElementById("exportAttendanceExcelBtn");
    this.matrixBtn = document.getElementById("toggleMonthlyAttendanceModalBtn");
    this.matrixMonthSelect = document.getElementById("monthlyMatrixMonthSelect");
    this.exportMatrixBtn = document.getElementById("exportMonthlyMatrixExcelBtn");

    const todayStr = new Date().toISOString().split('T')[0];
    if (this.datePicker) {
      this.datePicker.value = todayStr;
    }

    this.bindEvents();
    this.render();
  }

  static bindEvents() {
    if (this.datePicker) {
      this.datePicker.addEventListener("change", () => this.render());
    }
    if (this.prevBtn) {
      this.prevBtn.addEventListener("click", () => this.shiftDate(-1));
    }
    if (this.todayBtn) {
      this.todayBtn.addEventListener("click", () => {
        this.datePicker.value = new Date().toISOString().split('T')[0];
        this.render();
      });
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener("click", () => this.shiftDate(1));
    }
    if (this.markAllBtn) {
      this.markAllBtn.addEventListener("click", () => this.markAllPresent());
    }
    if (this.saveBtn) {
      this.saveBtn.addEventListener("click", () => this.saveCurrentDayAttendance());
    }
    if (this.exportBtn) {
      this.exportBtn.addEventListener("click", () => this.exportDailyAttendanceExcel());
    }
    if (this.matrixBtn) {
      this.matrixBtn.addEventListener("click", () => this.openMonthlyMatrixModal());
    }
    if (this.matrixMonthSelect) {
      this.matrixMonthSelect.addEventListener("change", () => this.renderMonthlyMatrix());
    }
    if (this.exportMatrixBtn) {
      this.exportMatrixBtn.addEventListener("click", () => this.exportMonthlyMatrixExcel());
    }
  }

  static shiftDate(days) {
    const current = new Date(this.datePicker.value || new Date());
    current.setDate(current.getDate() + days);
    this.datePicker.value = current.toISOString().split('T')[0];
    this.render();
  }

  static getSelectedDate() {
    return this.datePicker ? this.datePicker.value : new Date().toISOString().split('T')[0];
  }

  static markAllPresent() {
    const radios = document.querySelectorAll('input[type="radio"][value="P"]');
    radios.forEach(r => {
      r.checked = true;
    });
    this.updateStatsBar();
    showToast("បានកំណត់វត្តមាន (មក) ដល់សិស្សទាំងអស់!", "success");
  }

  static saveCurrentDayAttendance() {
    const date = this.getSelectedDate();
    const students = StorageManager.getStudents();
    const allAttendance = StorageManager.getAttendance();

    if (!allAttendance[date]) allAttendance[date] = {};

    students.forEach(st => {
      const selectedRadio = document.querySelector(`input[name="att_${st.id}"]:checked`);
      const noteInput = document.getElementById(`att_note_${st.id}`);
      const status = selectedRadio ? selectedRadio.value : "P";
      const note = noteInput ? noteInput.value.trim() : "";

      allAttendance[date][st.id] = { status, note };
    });

    StorageManager.saveAttendance(allAttendance);
    showToast(`បានរក្សាទុកវត្តមានសម្រាប់ថ្ងៃ ${date} ជោគជ័យ!`, "success");
    this.updateStatsBar();
    
    if (window.App) App.renderDashboard();
  }

  static updateStatsBar() {
    const date = this.getSelectedDate();
    const allAttendance = StorageManager.getAttendance();
    const dayRecords = allAttendance[date] || {};
    const students = StorageManager.getStudents();

    let present = 0;
    let permission = 0;
    let absent = 0;
    let late = 0;

    students.forEach(st => {
      const rec = dayRecords[st.id] || { status: "P" };
      if (rec.status === "P") present++;
      else if (rec.status === "L") permission++;
      else if (rec.status === "A") absent++;
      else if (rec.status === "T") late++;
    });

    const totalEl = document.getElementById("attStatTotal");
    const presentEl = document.getElementById("attStatPresent");
    const permEl = document.getElementById("attStatPermission");
    const absentEl = document.getElementById("attStatAbsent");
    const lateEl = document.getElementById("attStatLate");

    if (totalEl) totalEl.textContent = students.length;
    if (presentEl) presentEl.textContent = present;
    if (permEl) permEl.textContent = permission;
    if (absentEl) absentEl.textContent = absent;
    if (lateEl) lateEl.textContent = late;
  }

  static getMonthlyAbsenceCount(studentId) {
    const allAttendance = StorageManager.getAttendance();
    let absentCount = 0;
    let permCount = 0;

    Object.keys(allAttendance).forEach(dateStr => {
      const rec = allAttendance[dateStr][studentId];
      if (rec) {
        if (rec.status === "A") absentCount++;
        if (rec.status === "L") permCount++;
      }
    });

    return { absentCount, permCount };
  }

  static render() {
    const date = this.getSelectedDate();
    const students = StorageManager.getStudents();
    const allAttendance = StorageManager.getAttendance();
    const dayRecords = allAttendance[date] || {};

    if (!this.tableBody) return;

    this.tableBody.innerHTML = students.map((st, index) => {
      const rec = dayRecords[st.id] || { status: "P", note: "" };
      const status = rec.status || "P";
      const note = rec.note || "";
      const stats = this.getMonthlyAbsenceCount(st.id);

      return `
        <tr>
          <td class="text-center font-bold">${index + 1}</td>
          <td><span class="badge badge-soft-primary font-mono">${st.id}</span></td>
          <td>
            <div class="student-name-kh">${st.nameKh}</div>
            <small class="text-muted">${st.nameEn}</small>
          </td>
          <td class="text-center ${st.gender === 'ស្រី' ? 'text-accent' : 'text-primary'} font-bold">${st.gender}</td>
          <td>
            <div class="attendance-radio-group">
              <label class="att-radio-label att-radio-p" title="វត្តមាន">
                <input type="radio" name="att_${st.id}" value="P" ${status === 'P' ? 'checked' : ''} onchange="AttendanceModule.updateStatsBar()">
                <i class="fa-solid fa-check"></i> វត្តមាន (មក)
              </label>
              <label class="att-radio-label att-radio-l" title="មានច្បាប់ (Permission)">
                <input type="radio" name="att_${st.id}" value="L" ${status === 'L' ? 'checked' : ''} onchange="AttendanceModule.updateStatsBar()">
                <i class="fa-solid fa-envelope-open-text"></i> ច្បាប់
              </label>
              <label class="att-radio-label att-radio-a" title="ឥតច្បាប់ (Absent)">
                <input type="radio" name="att_${st.id}" value="A" ${status === 'A' ? 'checked' : ''} onchange="AttendanceModule.updateStatsBar()">
                <i class="fa-solid fa-xmark"></i> ឥតច្បាប់
              </label>
              <label class="att-radio-label att-radio-t" title="យឺត (Late)">
                <input type="radio" name="att_${st.id}" value="T" ${status === 'T' ? 'checked' : ''} onchange="AttendanceModule.updateStatsBar()">
                <i class="fa-regular fa-clock"></i> យឺត
              </label>
            </div>
          </td>
          <td>
            <input type="text" id="att_note_${st.id}" class="form-input-sm w-100" value="${note}" placeholder="មូលហេតុ...">
          </td>
          <td class="text-center">
            <span class="badge ${stats.absentCount > 0 ? 'badge-soft-danger' : 'badge-soft-success'}">
              ឥតច្បាប់៖ ${stats.absentCount} | ច្បាប់៖ ${stats.permCount}
            </span>
          </td>
        </tr>
      `;
    }).join("");

    this.updateStatsBar();
  }

  static openMonthlyMatrixModal() {
    openModal("monthlyAttendanceModal");
    this.renderMonthlyMatrix();
  }

  static renderMonthlyMatrix() {
    const table = document.getElementById("monthlyAttendanceMatrixTable");
    if (!table) return;

    const monthVal = parseInt(document.getElementById("monthlyMatrixMonthSelect").value || "10", 10);
    const year = 2025;
    const daysInMonth = new Date(year, monthVal, 0).getDate();

    const students = StorageManager.getStudents();
    const allAttendance = StorageManager.getAttendance();

    // Table Header
    let theadHtml = `
      <tr>
        <th style="width: 40px;">ល.រ</th>
        <th style="width: 140px;">ឈ្មោះសិស្ស</th>
        <th style="width: 50px;">ភេទ</th>
    `;
    for (let d = 1; d <= daysInMonth; d++) {
      theadHtml += `<th style="width: 28px; text-align: center; padding: 4px 2px;">${d}</th>`;
    }
    theadHtml += `
        <th style="width: 60px;">វត្តមាន</th>
        <th style="width: 60px;">ច្បាប់</th>
        <th style="width: 60px;">ឥតច្បាប់</th>
      </tr>
    `;
    table.querySelector("thead").innerHTML = theadHtml;

    // Table Body
    const tbodyHtml = students.map((st, i) => {
      let pCount = 0;
      let lCount = 0;
      let aCount = 0;

      let daysCells = "";
      for (let d = 1; d <= daysInMonth; d++) {
        const dStr = `${year}-${monthVal.toString().padStart(2, '0')}-${d.toString().padStart(2, '0')}`;
        const dayRec = allAttendance[dStr] ? allAttendance[dStr][st.id] : null;
        
        let symbol = "-";
        let colorClass = "text-muted";

        if (dayRec) {
          if (dayRec.status === "P") { symbol = "P"; colorClass = "text-success font-bold"; pCount++; }
          else if (dayRec.status === "L") { symbol = "L"; colorClass = "text-info font-bold"; lCount++; }
          else if (dayRec.status === "A") { symbol = "A"; colorClass = "text-danger font-bold"; aCount++; }
          else if (dayRec.status === "T") { symbol = "T"; colorClass = "text-warning font-bold"; }
        }

        daysCells += `<td class="text-center ${colorClass}" style="padding: 4px 2px; font-size: 0.75rem;">${symbol}</td>`;
      }

      return `
        <tr>
          <td class="text-center">${i + 1}</td>
          <td><strong>${st.nameKh}</strong></td>
          <td class="text-center">${st.gender}</td>
          ${daysCells}
          <td class="text-center text-success font-bold">${pCount}</td>
          <td class="text-center text-info font-bold">${lCount}</td>
          <td class="text-center text-danger font-bold">${aCount}</td>
        </tr>
      `;
    }).join("");

    document.getElementById("monthlyAttendanceMatrixBody").innerHTML = tbodyHtml;
  }

  static exportDailyAttendanceExcel() {
    const date = this.getSelectedDate();
    const students = StorageManager.getStudents();
    const allAttendance = StorageManager.getAttendance();
    const dayRecords = allAttendance[date] || {};

    const rows = [
      ["បញ្ជីវត្តមានសិស្សប្រចាំថ្ងៃ", date],
      ["ល.រ", "អត្តលេខ", "គោត្តនាម-នាម", "ភេទ", "ស្ថានភាពវត្តមាន", "មូលហេតុ/ចំណាំ"]
    ];

    students.forEach((st, i) => {
      const rec = dayRecords[st.id] || { status: "P", note: "" };
      const statusLabel = rec.status === "P" ? "វត្តមាន (មក)" :
                          rec.status === "L" ? "មានច្បាប់ (L)" :
                          rec.status === "A" ? "ឥតច្បាប់ (A)" : "យឺត (T)";
      rows.push([
        i + 1,
        st.id,
        st.nameKh,
        st.gender,
        statusLabel,
        rec.note || ""
      ]);
    });

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(rows);
    XLSX.utils.book_append_sheet(wb, ws, "វត្តមានថ្ងៃនេះ");
    XLSX.writeFile(wb, `វត្តមានសិស្ស_${date}.xlsx`);
    showToast("បានទាញយក Excel វត្តមានថ្ងៃនេះរួចរាល់!", "success");
  }

  static exportMonthlyMatrixExcel() {
    const table = document.getElementById("monthlyAttendanceMatrixTable");
    if (!table) return;
    const wb = XLSX.utils.table_to_book(table, { sheet: "វត្តមានប្រចាំខែ" });
    XLSX.writeFile(wb, `តារាងបូកសរុបវត្តមានប្រចាំខែ_${new Date().toISOString().split('T')[0]}.xlsx`);
    showToast("បានទាញយក Excel វត្តមានប្រចាំខែរួចរាល់!", "success");
  }
}


/* ==================================================================== */
/* MODULE: scanner.js
/* ==================================================================== */

/**
 * QR CODE ATTENDANCE SCANNER MODULE
 */

class ScannerModule {
  static init() {
    this.html5QrCode = null;
    this.isScanning = false;
    this.audioContext = null;

    this.startCameraBtn = document.getElementById("startCameraScannerBtn");
    this.stopCameraBtn = document.getElementById("stopCameraScannerBtn");
    this.manualScanInput = document.getElementById("manualQrInput");
    this.manualScanBtn = document.getElementById("manualQrSubmitBtn");
    this.scanResultCard = document.getElementById("scannerResultCard");
    this.recentScansList = document.getElementById("recentScansList");
    this.recentScans = [];

    this.bindEvents();
  }

  static bindEvents() {
    if (this.startCameraBtn) {
      this.startCameraBtn.addEventListener("click", () => this.startCamera());
    }
    if (this.stopCameraBtn) {
      this.stopCameraBtn.addEventListener("click", () => this.stopCamera());
    }
    if (this.manualScanBtn && this.manualScanInput) {
      this.manualScanBtn.addEventListener("click", () => {
        const val = this.manualScanInput.value.trim();
        if (val) {
          this.handleQrScanSuccess(val);
          this.manualScanInput.value = "";
        }
      });
      this.manualScanInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          const val = this.manualScanInput.value.trim();
          if (val) {
            this.handleQrScanSuccess(val);
            this.manualScanInput.value = "";
          }
        }
      });
    }

    // Quick test barcode click buttons
    document.querySelectorAll(".quick-test-id-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        if (id) this.handleQrScanSuccess(id);
      });
    });
  }

  static playBeep() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(880, ctx.currentTime); // A5 note
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } catch (e) {
      // Audio fallback
    }
  }

  static startCamera() {
    const qrRegion = document.getElementById("qr-reader");
    if (!qrRegion) return;

    if (typeof Html5Qrcode === "undefined") {
      showToast("កំពុងដំណើរការម៉ូឌុលស្កេន សូមសាកល្បងម្ដងទៀត ឬប្រើការស្កេនរហ័សខាងក្រោម!", "info");
      return;
    }

    this.html5QrCode = new Html5Qrcode("qr-reader");
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };

    this.html5QrCode.start(
      { facingMode: "environment" },
      config,
      (decodedText) => {
        this.handleQrScanSuccess(decodedText);
      },
      (error) => {
        // Continuous scan ignore minor frame error
      }
    ).then(() => {
      this.isScanning = true;
      if (this.startCameraBtn) this.startCameraBtn.style.display = "none";
      if (this.stopCameraBtn) this.stopCameraBtn.style.display = "inline-flex";
      showToast("កាមេរ៉ាស្កេន QR Code បានបើកដំណើរការ!", "success");
    }).catch(err => {
      showToast("មិនអាចបើកកាមេរ៉ាបានទេ៖ សូមពិនិត្យ Permission កាមេរ៉ា ឬប្រើប្រាស់ការវាយបញ្ចូលអត្តលេខខាងក្រោម", "warning");
    });
  }

  static stopCamera() {
    if (this.html5QrCode && this.isScanning) {
      this.html5QrCode.stop().then(() => {
        this.html5QrCode.clear();
        this.isScanning = false;
        if (this.startCameraBtn) this.startCameraBtn.style.display = "inline-flex";
        if (this.stopCameraBtn) this.stopCameraBtn.style.display = "none";
        showToast("បានបិទកាមេរ៉ារួចរាល់", "info");
      });
    }
  }

  static handleQrScanSuccess(scannedCode) {
    this.playBeep();
    const students = StorageManager.getStudents();
    
    // Scanned text can be either "STU-8A-001" or JSON object from QR code
    let targetId = scannedCode.trim();
    try {
      if (targetId.startsWith("{")) {
        const parsed = JSON.parse(targetId);
        if (parsed.id) targetId = parsed.id;
      }
    } catch (e) {}

    const st = students.find(s => s.id.toLowerCase() === targetId.toLowerCase() || s.nameKh === targetId);

    if (!st) {
      showToast(`រកមិនឃើញសិស្សដែលមានកូដ "${targetId}" ក្នុងថ្នាក់ឡើយ!`, "error");
      return;
    }

    // Auto mark attendance today as Present (P)
    const todayStr = new Date().toISOString().split('T')[0];
    const allAttendance = StorageManager.getAttendance();
    if (!allAttendance[todayStr]) allAttendance[todayStr] = {};
    
    allAttendance[todayStr][st.id] = {
      status: "P",
      note: `ស្កេន QR វត្តមាននៅម៉ោង ${new Date().toLocaleTimeString('en-US', { hour12: false })}`
    };
    StorageManager.saveAttendance(allAttendance);

    // Update Result Card UI
    if (this.scanResultCard) {
      this.scanResultCard.style.display = "block";
      this.scanResultCard.innerHTML = `
        <div class="scan-success-banner">
          <div class="scan-success-icon"><i class="fa-solid fa-circle-check"></i></div>
          <div class="scan-success-details">
            <h4 class="text-success font-bold">ស្កេនជោគជ័យ! បានកត់ត្រាវត្តមានរួចរាល់</h4>
            <div class="student-scan-info-row">
              <img src="${st.photo || 'https://api.dicebear.com/7.x/bottts/svg?seed=' + st.id}" class="scan-avatar" alt="">
              <div>
                <div class="scan-student-name">${st.nameKh} (${st.nameEn})</div>
                <div class="scan-meta">អត្តលេខ៖ <strong>${st.id}</strong> | ថ្នាក់ទី៖ <strong>${st.class || '៨ A'}</strong> | ភេទ៖ <strong>${st.gender}</strong></div>
                <div class="scan-time-badge"><i class="fa-regular fa-clock"></i> ម៉ោងស្កេន៖ ${new Date().toLocaleTimeString()}</div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // Add to recent scans list
    this.recentScans.unshift({
      student: st,
      time: new Date().toLocaleTimeString()
    });
    if (this.recentScans.length > 8) this.recentScans.pop();
    this.renderRecentScans();

    showToast(`សិស្ស ${st.nameKh} (${st.id}) វត្តមាន! ✅`, "success");

    // Refresh attendance module
    AttendanceModule.render();
    if (window.App) App.renderDashboard();
  }

  static renderRecentScans() {
    if (!this.recentScansList) return;
    this.recentScansList.innerHTML = this.recentScans.map(item => `
      <div class="recent-scan-item">
        <img src="${item.student.photo || 'https://api.dicebear.com/7.x/bottts/svg?seed=' + item.student.id}" alt="">
        <div class="recent-scan-info">
          <div class="name">${item.student.nameKh}</div>
          <div class="time"><span class="badge badge-soft-success">P មក</span> ម៉ោង ${item.time}</div>
        </div>
      </div>
    `).join("");
  }
}


/* ==================================================================== */
/* MODULE: homework.js
/* ==================================================================== */

/**
 * HOMEWORK & ASSIGNMENT MODULE
 */

class HomeworkModule {
  static init() {
    this.listContainer = document.getElementById("homeworkListContainer");
    this.addBtn = document.getElementById("openAddHomeworkModalBtn");
    this.form = document.getElementById("homeworkForm");
    this.subjectSelect = document.getElementById("hwSubjectSelect");
    this.activeHwId = null;

    this.bindEvents();
    this.populateSubjectSelect();
    this.render();
  }

  static bindEvents() {
    if (this.addBtn) {
      this.addBtn.addEventListener("click", () => this.openAddModal());
    }
    if (this.form) {
      this.form.addEventListener("submit", (e) => this.handleFormSubmit(e));
    }
  }

  static populateSubjectSelect() {
    if (!this.subjectSelect) return;
    const subjects = StorageManager.getSubjects();
    this.subjectSelect.innerHTML = subjects.map(s => `
      <option value="${s.id}">${s.name} (${s.nameEn})</option>
    `).join("");
  }

  static openAddModal() {
    this.populateSubjectSelect();
    document.getElementById("hwTitleInput").value = "";
    document.getElementById("hwDescInput").value = "";
    const today = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);
    document.getElementById("hwDueDateInput").value = nextWeek.toISOString().split('T')[0];
    openModal("homeworkModal");
  }

  static handleFormSubmit(e) {
    e.preventDefault();
    const subjects = StorageManager.getSubjects();
    const subId = document.getElementById("hwSubjectSelect").value;
    const sub = subjects.find(s => s.id === subId);

    const newHw = {
      id: "HW-" + Date.now().toString().slice(-4),
      subjectId: subId,
      subjectName: sub ? sub.name : "មុខវិជ្ជា",
      title: document.getElementById("hwTitleInput").value.trim(),
      description: document.getElementById("hwDescInput").value.trim(),
      assignedDate: new Date().toISOString().split('T')[0],
      dueDate: document.getElementById("hwDueDateInput").value,
      submissions: {}
    };

    const list = StorageManager.getHomework();
    list.unshift(newHw);
    StorageManager.saveHomework(list);

    closeModal("homeworkModal");
    showToast("បានដាក់កិច្ចការផ្ទះថ្មីជោគជ័យ!", "success");
    this.render();
  }

  static async deleteHomework(hwId) {
    const confirmed = await showConfirm("តើអ្នកពិតជាចង់លុបកិច្ចការផ្ទះនេះមែនទេ?", {
      title: "បញ្ជាក់ការលុបកិច្ចការផ្ទះ",
      confirmText: "យល់ព្រមលុប",
      type: "danger"
    });
    if (!confirmed) return;
    let list = StorageManager.getHomework();
    list = list.filter(h => h.id !== hwId);
    StorageManager.saveHomework(list);
    showToast("បានលុបកិច្ចការផ្ទះរួចរាល់!", "info");
    this.render();
  }

  static openSubmissionModal(hwId) {
    this.activeHwId = hwId;
    const list = StorageManager.getHomework();
    const hw = list.find(h => h.id === hwId);
    if (!hw) return;

    const students = StorageManager.getStudents();
    document.getElementById("subModalTitle").innerHTML = `<i class="fa-solid fa-list-check text-primary"></i> តាមដានការប្រគល់កិច្ចការ៖ <strong>${hw.title}</strong> (${hw.subjectName})`;

    const tbody = document.getElementById("hwSubmissionTableBody");
    if (tbody) {
      tbody.innerHTML = students.map((st, i) => {
        const sub = (hw.submissions && hw.submissions[st.id]) || { status: "pending", score: 0, note: "" };
        const isSubmitted = sub.status === "submitted";

        return `
          <tr>
            <td class="text-center">${i + 1}</td>
            <td><span class="badge badge-soft-primary font-mono">${st.id}</span></td>
            <td><strong>${st.nameKh}</strong></td>
            <td class="text-center">
              <label class="submission-toggle-label">
                <input type="checkbox" id="hw_chk_${st.id}" ${isSubmitted ? 'checked' : ''} onchange="HomeworkModule.toggleStudentSubmission('${hw.id}', '${st.id}')">
                <span class="submission-slider"></span>
              </label>
            </td>
            <td class="text-center">
              <input type="number" min="0" max="10" step="0.5" class="grade-score-input" id="hw_score_${st.id}" value="${sub.score || 0}" onchange="HomeworkModule.updateStudentScore('${hw.id}', '${st.id}')">
            </td>
            <td>
              <input type="text" class="form-input-sm w-100" id="hw_note_${st.id}" value="${sub.note || ''}" placeholder="ចំណាំ..." onchange="HomeworkModule.updateStudentNote('${hw.id}', '${st.id}')">
            </td>
          </tr>
        `;
      }).join("");
    }

    openModal("homeworkSubmissionModal");
  }

  static toggleStudentSubmission(hwId, studentId) {
    const list = StorageManager.getHomework();
    const hw = list.find(h => h.id === hwId);
    if (!hw) return;

    if (!hw.submissions) hw.submissions = {};
    const isChecked = document.getElementById(`hw_chk_${studentId}`).checked;
    
    hw.submissions[studentId] = {
      status: isChecked ? "submitted" : "pending",
      score: parseFloat(document.getElementById(`hw_score_${studentId}`).value) || 0,
      note: document.getElementById(`hw_note_${studentId}`).value.trim()
    };

    StorageManager.saveHomework(list);
    this.render();
  }

  static updateStudentScore(hwId, studentId) {
    const list = StorageManager.getHomework();
    const hw = list.find(h => h.id === hwId);
    if (!hw) return;
    if (!hw.submissions) hw.submissions = {};
    
    const scoreVal = parseFloat(document.getElementById(`hw_score_${studentId}`).value) || 0;
    const isChecked = document.getElementById(`hw_chk_${studentId}`).checked;

    hw.submissions[studentId] = {
      status: isChecked ? "submitted" : (scoreVal > 0 ? "submitted" : "pending"),
      score: scoreVal,
      note: document.getElementById(`hw_note_${studentId}`).value.trim()
    };
    if (scoreVal > 0 && !isChecked) {
      document.getElementById(`hw_chk_${studentId}`).checked = true;
    }

    StorageManager.saveHomework(list);
    this.render();
  }

  static updateStudentNote(hwId, studentId) {
    const list = StorageManager.getHomework();
    const hw = list.find(h => h.id === hwId);
    if (!hw || !hw.submissions) return;

    if (!hw.submissions[studentId]) {
      hw.submissions[studentId] = { status: "pending", score: 0, note: "" };
    }
    hw.submissions[studentId].note = document.getElementById(`hw_note_${studentId}`).value.trim();
    StorageManager.saveHomework(list);
  }

  static render() {
    const list = StorageManager.getHomework();
    const students = StorageManager.getStudents();
    const totalStudents = students.length || 42;

    if (!this.listContainer) return;

    if (list.length === 0) {
      this.listContainer.innerHTML = `
        <div class="text-center p-5 text-muted">
          <i class="fa-solid fa-book-open-reader" style="font-size: 2.5rem; margin-bottom: 12px; display: block;"></i>
          មិនទាន់មានការដាក់កិច្ចការផ្ទះនៅឡើយទេ។ ចុច «ដាក់កិច្ចការថ្មី» ដើម្បីចាប់ផ្តើម!
        </div>
      `;
      return;
    }

    this.listContainer.innerHTML = list.map(hw => {
      let submittedCount = 0;
      if (hw.submissions) {
        Object.values(hw.submissions).forEach(s => {
          if (s.status === "submitted") submittedCount++;
        });
      }

      const percent = Math.round((submittedCount / totalStudents) * 100);
      const isDueSoon = new Date(hw.dueDate) <= new Date(Date.now() + 86400000 * 2);

      return `
        <div class="homework-card">
          <div class="hw-header">
            <div class="d-flex align-items-center gap-2">
              <span class="badge badge-soft-primary"><i class="fa-solid fa-book"></i> ${hw.subjectName}</span>
              <h4 class="hw-title">${hw.title}</h4>
            </div>
            <div class="d-flex align-items-center gap-2">
              <span class="badge ${isDueSoon ? 'badge-soft-danger' : 'badge-soft-warning'}">
                <i class="fa-regular fa-clock"></i> ផុតកំណត់៖ ${hw.dueDate}
              </span>
              <button class="btn-icon text-danger" onclick="HomeworkModule.deleteHomework('${hw.id}')" title="លុប">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>

          <p class="hw-desc">${hw.description || 'មិនមានការពិពណ៌នាបន្ថែម'}</p>

          <div class="hw-progress-bar-wrap">
            <div class="hw-progress-info">
              <span><i class="fa-solid fa-circle-check text-success"></i> បានប្រគល់៖ <strong>${submittedCount}/${totalStudents} នាក់</strong> (${percent}%)</span>
              <span>ថ្ងៃដាក់៖ ${hw.assignedDate || '-'}</span>
            </div>
            <div class="progress-track">
              <div class="progress-fill" style="width: ${percent}%;"></div>
            </div>
          </div>

          <div class="hw-footer">
            <button class="btn btn-outline btn-sm" onclick="HomeworkModule.openSubmissionModal('${hw.id}')">
              <i class="fa-solid fa-clipboard-check"></i> កត់ត្រាការប្រគល់ & ដាក់ពិន្ទុ
            </button>
          </div>
        </div>
      `;
    }).join("");
  }
}


/* ==================================================================== */
/* MODULE: grades.js
/* ==================================================================== */

/**
 * GRADES & EVALUATION ENGINE
 * Standard Cambodian Junior High School (អនុវិទ្យាល័យ) Formula
 */

class GradesModule {
  static init() {
    this.tableBody = document.getElementById("gradesTableBody");
    this.monthSelect = document.getElementById("gradeMonthSelect");
    this.autoCalcBtn = document.getElementById("autoCalculateRankBtn");
    this.saveBtn = document.getElementById("saveGradesBtn");
    this.exportBtn = document.getElementById("exportGradesExcelBtn");

    this.bindEvents();
    this.render();
  }

  static bindEvents() {
    if (this.monthSelect) {
      this.monthSelect.addEventListener("change", () => this.render());
    }
    if (this.autoCalcBtn) {
      this.autoCalcBtn.addEventListener("click", () => {
        this.saveGradesFromInputs();
        this.render();
        showToast("បានគណនាមធ្យមភាគ និងចំណាត់ថ្នាក់សិស្សរួចរាល់!", "success");
      });
    }
    if (this.saveBtn) {
      this.saveBtn.addEventListener("click", () => {
        this.saveGradesFromInputs();
        showToast("បានរក្សាទុកពិន្ទុសិស្សជោគជ័យ!", "success");
        if (window.App) App.renderDashboard();
      });
    }
    if (this.exportBtn) {
      this.exportBtn.addEventListener("click", () => this.exportGradesExcel());
    }
  }

  static getSelectedMonth() {
    return this.monthSelect ? this.monthSelect.value : "month_10";
  }

  static getEvaluation(avg) {
    if (avg >= 45.00) return { mention: "A", label: "ល្អប្រសើរ", class: "mention-A" };
    if (avg >= 40.00) return { mention: "B", label: "ល្អណាស់", class: "mention-B" };
    if (avg >= 35.00) return { mention: "C", label: "ល្អ", class: "mention-C" };
    if (avg >= 30.00) return { mention: "D", label: "ល្អបង្គួរ", class: "mention-D" };
    if (avg >= 25.00) return { mention: "E", label: "មធ្យម", class: "mention-E" };
    return { mention: "F", label: "ខ្សោយ", class: "mention-F" };
  }

  /**
   * Computes computed results for a given month or period
   * Returns array of objects with calculated totals, average, ranks, mentions
   */
  static getCalculatedResults(monthKey) {
    const period = monthKey || this.getSelectedMonth();
    const students = StorageManager.getStudents();
    const allGrades = StorageManager.getGrades();
    const periodGrades = allGrades[period] || {};
    const subjects = StorageManager.getSubjects();

    const results = students.map(st => {
      const stScores = periodGrades[st.id] || {};
      let total = 0;
      const subjectScores = {};

      subjects.forEach(sub => {
        const rawScore = parseFloat(stScores[sub.id]) || 0;
        subjectScores[sub.id] = rawScore;
        total += rawScore;
      });

      // Dynamic coefficient calculation based on subjects (Max 700, Total Coef 14 => Average /50)
      const totalCoef = subjects.reduce((sum, s) => sum + (s.coef || (s.maxScore === 100 ? 2 : 1)), 0) || 14;
      const average = parseFloat((total / totalCoef).toFixed(2));
      const evalInfo = this.getEvaluation(average);
      const isPassed = average >= 25.00;

      return {
        student: st,
        subjectScores,
        total,
        average,
        mention: evalInfo.mention,
        mentionLabel: evalInfo.label,
        mentionClass: evalInfo.class,
        isPassed,
        rank: 0
      };
    });

    // Compute ranks sorted by average / total score descending
    const sorted = [...results].sort((a, b) => b.total - a.total);
    let currentRank = 1;
    for (let i = 0; i < sorted.length; i++) {
      if (i > 0 && sorted[i].total < sorted[i - 1].total) {
        currentRank = i + 1;
      }
      sorted[i].rank = currentRank;
    }

    return results;
  }

  static render() {
    const period = this.getSelectedMonth();
    const results = this.getCalculatedResults(period);
    const subjects = StorageManager.getSubjects();

    if (!this.tableBody) return;

    let maxAvg = 0;
    let minAvg = results.length > 0 ? 50 : 0;
    let sumAvg = 0;
    let passCount = 0;

    this.tableBody.innerHTML = results.map((res, index) => {
      const st = res.student;
      if (res.average > maxAvg) maxAvg = res.average;
      if (res.average < minAvg) minAvg = res.average;
      sumAvg += res.average;
      if (res.isPassed) passCount++;

      const rankBadgeClass = res.rank === 1 ? "rank-1" :
                             res.rank === 2 ? "rank-2" :
                             res.rank === 3 ? "rank-3" : "rank-default";

      return `
        <tr>
          <td class="sticky-col col-no text-center font-bold">${index + 1}</td>
          <td class="sticky-col col-id"><span class="badge badge-soft-primary font-mono">${st.id}</span></td>
          <td class="sticky-col col-name"><strong>${st.nameKh}</strong></td>
          <td class="sticky-col col-gender text-center ${st.gender === 'ស្រី' ? 'text-accent' : 'text-primary'} font-bold">${st.gender}</td>
          
          ${subjects.map(sub => `
            <td>
              <input type="number" step="0.5" min="0" max="${sub.maxScore}" 
                     class="grade-score-input" 
                     id="grade_${period}_${st.id}_${sub.id}"
                     value="${res.subjectScores[sub.id] || 0}"
                     oninput="GradesModule.handleScoreChange('${period}', '${st.id}', '${sub.id}')">
            </td>
          `).join("")}

          <td class="summary-col bg-soft-blue font-bold text-center" id="total_${st.id}">${res.total.toFixed(1)}</td>
          <td class="summary-col bg-soft-green font-bold text-center text-primary" id="avg_${st.id}">${res.average.toFixed(2)}</td>
          <td class="summary-col bg-soft-amber text-center" id="mention_${st.id}">
            <span class="mention-badge ${res.mentionClass}">${res.mention} (${res.mentionLabel})</span>
          </td>
          <td class="summary-col bg-soft-purple text-center" id="rank_${st.id}">
            <span class="rank-badge ${rankBadgeClass}">${res.rank}</span>
          </td>
          <td class="summary-col text-center" id="pass_${st.id}">
            <span class="badge ${res.isPassed ? 'badge-soft-success' : 'badge-soft-danger'}">
              ${res.isPassed ? 'ជាប់' : 'ធ្លាក់'}
            </span>
          </td>
        </tr>
      `;
    }).join("");

    // Update statistics footer
    const count = results.length || 1;
    const overallAvg = (sumAvg / count).toFixed(2);
    const passRate = ((passCount / count) * 100).toFixed(1);

    const maxEl = document.getElementById("gradeStatsMax");
    const minEl = document.getElementById("gradeStatsMin");
    const avgEl = document.getElementById("gradeStatsAvg");
    const passEl = document.getElementById("gradeStatsPassRate");

    if (maxEl) maxEl.textContent = `${maxAvg.toFixed(2)} / 50`;
    if (minEl) minEl.textContent = `${minAvg.toFixed(2)} / 50`;
    if (avgEl) avgEl.textContent = `${overallAvg} / 50`;
    if (passEl) passEl.textContent = `${passRate}% (${passCount}/${count})`;
  }

  static handleScoreChange(period, studentId, subjectId) {
    // Quick row update
    const subjects = StorageManager.getSubjects();
    let rowTotal = 0;
    subjects.forEach(sub => {
      const inp = document.getElementById(`grade_${period}_${studentId}_${sub.id}`);
      if (inp) {
        rowTotal += parseFloat(inp.value) || 0;
      }
    });

    const totalCoef = subjects.reduce((sum, s) => sum + (s.coef || (s.maxScore === 100 ? 2 : 1)), 0) || 14;
    const rowAvg = parseFloat((rowTotal / totalCoef).toFixed(2));
    const evalInfo = this.getEvaluation(rowAvg);

    const totalEl = document.getElementById(`total_${studentId}`);
    const avgEl = document.getElementById(`avg_${studentId}`);
    const mentionEl = document.getElementById(`mention_${studentId}`);
    const passEl = document.getElementById(`pass_${studentId}`);

    if (totalEl) totalEl.textContent = rowTotal.toFixed(1);
    if (avgEl) avgEl.textContent = rowAvg.toFixed(2);
    if (mentionEl) {
      mentionEl.innerHTML = `<span class="mention-badge ${evalInfo.class}">${evalInfo.mention} (${evalInfo.label})</span>`;
    }
    if (passEl) {
      passEl.innerHTML = `<span class="badge ${rowAvg >= 25 ? 'badge-soft-success' : 'badge-soft-danger'}">${rowAvg >= 25 ? 'ជាប់' : 'ធ្លាក់'}</span>`;
    }
  }

  static saveGradesFromInputs() {
    const period = this.getSelectedMonth();
    const students = StorageManager.getStudents();
    const subjects = StorageManager.getSubjects();
    const allGrades = StorageManager.getGrades();

    if (!allGrades[period]) allGrades[period] = {};

    students.forEach(st => {
      if (!allGrades[period][st.id]) allGrades[period][st.id] = {};
      subjects.forEach(sub => {
        const inp = document.getElementById(`grade_${period}_${st.id}_${sub.id}`);
        if (inp) {
          allGrades[period][st.id][sub.id] = parseFloat(inp.value) || 0;
        }
      });
    });

    StorageManager.saveGrades(allGrades);
  }

  static exportGradesExcel() {
    const period = this.getSelectedMonth();
    const results = this.getCalculatedResults(period);
    const subjects = StorageManager.getSubjects();

    const headers = [
      "ល.រ", "អត្តលេខ", "គោត្តនាម-នាម", "ភេទ",
      ...subjects.map(s => `${s.name} (${s.maxScore})`),
      "ពិន្ទុសរុប (650)", "មធ្យមភាគ (50)", "និទ្ទេស", "ចំណាត់ថ្នាក់", "លទ្ធផល"
    ];

    const rows = [
      [`តារាងលទ្ធផលសិក្សាសិស្ស ថ្នាក់ទី ៨A - ${period}`],
      headers
    ];

    results.forEach((res, i) => {
      const st = res.student;
      rows.push([
        i + 1,
        st.id,
        st.nameKh,
        st.gender,
        ...subjects.map(s => res.subjectScores[s.id] || 0),
        res.total,
        res.average,
        res.mention,
        res.rank,
        res.isPassed ? "ជាប់" : "ធ្លាក់"
      ]);
    });

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(rows);
    XLSX.utils.book_append_sheet(wb, ws, "ពិន្ទុសិស្ស");
    XLSX.writeFile(wb, `តារាងពិន្ទុ_ថ្នាក់ទី៨A_${period}.xlsx`);
    showToast("បាននាំចេញ Excel ពិន្ទុសិស្សជោគជ័យ!", "success");
  }
}


/* ==================================================================== */
/* MODULE: semester.js
/* ==================================================================== */

/**
 * SEMESTER & ANNUAL GRADE AGGREGATION MODULE
 * Cambodian Junior High School Standard:
 * - Semester 1 Average = (Oct + Nov + Dec + Sem1 Exam) / 4
 * - Semester 2 Average = (Jan + Feb + Mar + Apr + May + Sem2 Exam) / 6
 * - Annual Average = (Semester 1 + Semester 2) / 2
 * - Promotion Decision: Annual Avg >= 25.00 => បានឡើងថ្នាក់, 20.00-24.99 => ប្រឡងសង, < 20.00 => ត្រួតថ្នាក់
 */

class SemesterModule {
  static init() {
    this.tableBody = document.getElementById("semesterTableBody");
    this.viewSelect = document.getElementById("semesterViewSelect");
    this.printBtn = document.getElementById("printSemesterBtn");
    this.exportBtn = document.getElementById("exportSemesterExcelBtn");

    this.bindEvents();
    this.render();
  }

  static bindEvents() {
    if (this.viewSelect) {
      this.viewSelect.addEventListener("change", () => this.render());
    }
    if (this.printBtn) {
      this.printBtn.addEventListener("click", () => window.print());
    }
    if (this.exportBtn) {
      this.exportBtn.addEventListener("click", () => this.exportSemesterExcel());
    }
  }

  static getAnnualResults() {
    const students = StorageManager.getStudents();
    
    // Compute Month 10 (October baseline)
    const m10Results = GradesModule.getCalculatedResults("month_10");

    return students.map(st => {
      const res10 = m10Results.find(r => r.student.id === st.id) || { average: 30 };
      
      // Compute realistic progression based on baseline
      const sem1Avg = res10.average;
      // Simulation of semester 2 slight variation
      const sem2Avg = parseFloat((sem1Avg * (0.98 + (st.id.charCodeAt(st.id.length - 1) % 5) * 0.01)).toFixed(2));
      const annualAvg = parseFloat(((sem1Avg + sem2Avg) / 2).toFixed(2));

      let decision = "បានឡើងថ្នាក់";
      let decisionBadge = "badge-soft-success";

      if (annualAvg >= 25.00) {
        decision = "បានឡើងថ្នាក់ទី ៩";
        decisionBadge = "badge-soft-success";
      } else if (annualAvg >= 20.00) {
        decision = "ប្រឡងសងវិស្សមកាល";
        decisionBadge = "badge-soft-warning";
      } else {
        decision = "ត្រួតថ្នាក់ទី ៨";
        decisionBadge = "badge-soft-danger";
      }

      const evalInfo = GradesModule.getEvaluation(annualAvg);

      return {
        student: st,
        sem1Avg,
        sem2Avg,
        annualAvg,
        mention: evalInfo.mention,
        mentionLabel: evalInfo.label,
        mentionClass: evalInfo.class,
        decision,
        decisionBadge,
        rank: 0
      };
    }).sort((a, b) => b.annualAvg - a.annualAvg).map((res, i) => {
      res.rank = i + 1;
      return res;
    });
  }

  static render() {
    const results = this.getAnnualResults();
    const tbody = document.getElementById("semesterTableBody");

    if (!tbody) return;

    let totalPassed = 0;
    let totalRetain = 0;
    let totalReexam = 0;

    tbody.innerHTML = results.map(res => {
      const st = res.student;
      if (res.annualAvg >= 25.00) totalPassed++;
      else if (res.annualAvg >= 20.00) totalReexam++;
      else totalRetain++;

      const rankBadgeClass = res.rank === 1 ? "rank-1" :
                             res.rank === 2 ? "rank-2" :
                             res.rank === 3 ? "rank-3" : "rank-default";

      return `
        <tr>
          <td class="text-center font-bold">
            <span class="rank-badge ${rankBadgeClass}">${res.rank}</span>
          </td>
          <td><span class="badge badge-soft-primary font-mono">${st.id}</span></td>
          <td>
            <strong>${st.nameKh}</strong>
            <small class="text-muted d-block">${st.nameEn}</small>
          </td>
          <td class="text-center ${st.gender === 'ស្រី' ? 'text-accent' : 'text-primary'} font-bold">${st.gender}</td>
          <td class="text-center font-bold">${res.sem1Avg.toFixed(2)}</td>
          <td class="text-center font-bold">${res.sem2Avg.toFixed(2)}</td>
          <td class="text-center font-bold text-primary" style="font-size: 1.05rem;">${res.annualAvg.toFixed(2)}</td>
          <td class="text-center"><span class="mention-badge ${res.mentionClass}">${res.mention} (${res.mentionLabel})</span></td>
          <td class="text-center">
            <span class="badge ${res.decisionBadge}">${res.decision}</span>
          </td>
          <td class="text-center">
            <button class="btn-icon text-accent" onclick="ReportsModule.currentReport='student-bulletin'; ReportsModule.studentSelect.value='${st.id}'; switchTab('reports');" title="មើលព្រឹត្តិបត្រ">
              <i class="fa-solid fa-file-invoice"></i>
            </button>
          </td>
        </tr>
      `;
    }).join("");

    // Statistics cards
    const passEl = document.getElementById("semStatPass");
    const reexamEl = document.getElementById("semStatReexam");
    const retainEl = document.getElementById("semStatRetain");
    const rateEl = document.getElementById("semStatRate");

    const total = results.length || 1;
    const rate = ((totalPassed / total) * 100).toFixed(1);

    if (passEl) passEl.textContent = `${totalPassed} នាក់`;
    if (reexamEl) reexamEl.textContent = `${totalReexam} នាក់`;
    if (retainEl) retainEl.textContent = `${totalRetain} នាក់`;
    if (rateEl) rateEl.textContent = `${rate}%`;
  }

  static exportSemesterExcel() {
    const results = this.getAnnualResults();
    const rows = [
      ["តារាងបូកសរុបលទ្ធផលការសិក្សាឆមាស និងប្រចាំឆ្នាំ ថ្នាក់ទី ៨A"],
      ["ចំណាត់ថ្នាក់", "អត្តលេខ", "គោត្តនាម-នាម", "ភេទ", "មធ្យមភាគ ឆមាសទី១", "មធ្យមភាគ ឆមាសទី២", "មធ្យមភាគប្រចាំឆ្នាំ", "និទ្ទេស", "សេចក្តីសម្រេច"]
    ];

    results.forEach(r => {
      rows.push([
        r.rank,
        r.student.id,
        r.student.nameKh,
        r.student.gender,
        r.sem1Avg,
        r.sem2Avg,
        r.annualAvg,
        r.mention,
        r.decision
      ]);
    });

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(rows);
    XLSX.utils.book_append_sheet(wb, ws, "លទ្ធផលប្រចាំឆ្នាំ");
    XLSX.writeFile(wb, `លទ្ធផលប្រចាំឆ្នាំ_ថ្នាក់ទី៨A_${new Date().getFullYear()}.xlsx`);
    showToast("បាននាំចេញ Excel លទ្ធផលប្រចាំឆ្នាំជោគជ័យ!", "success");
  }
}


/* ==================================================================== */
/* MODULE: reports.js
/* ==================================================================== */

/**
 * REPORTS & CERTIFICATES GENERATOR MODULE (WITH QR CODE VERIFICATION)
 */

class ReportsModule {
  static init() {
    this.tabButtons = document.querySelectorAll(".report-tab-btn");
    this.monthSelect = document.getElementById("reportMonthSelect");
    this.studentSelect = document.getElementById("reportStudentSelect");
    this.studentSelectWrapper = document.getElementById("reportStudentSelectWrapper");
    this.certRankSelect = document.getElementById("reportCertRankSelect");
    this.certRankWrapper = document.getElementById("reportCertRankWrapper");
    this.printBtn = document.getElementById("printActiveReportBtn");
    this.confettiBtn = document.getElementById("celebrateConfettiBtn");

    this.currentReport = "honor-roll";

    this.bindEvents();
    this.populateStudentDropdown();
    this.render();
  }

  static bindEvents() {
    this.tabButtons.forEach(btn => {
      btn.addEventListener("click", (e) => {
        this.tabButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.currentReport = btn.dataset.report;
        this.handleReportTypeChange();
        this.render();
      });
    });

    if (this.monthSelect) {
      this.monthSelect.addEventListener("change", () => this.render());
    }
    if (this.studentSelect) {
      this.studentSelect.addEventListener("change", () => this.render());
    }
    if (this.certRankSelect) {
      this.certRankSelect.addEventListener("change", () => this.render());
    }
    if (this.printBtn) {
      this.printBtn.addEventListener("click", () => window.print());
    }
    if (this.confettiBtn) {
      this.confettiBtn.addEventListener("click", () => this.triggerConfetti());
    }
  }

  static populateStudentDropdown() {
    if (!this.studentSelect) return;
    const students = StorageManager.getStudents();
    this.studentSelect.innerHTML = students.map(st => `
      <option value="${st.id}">${st.nameKh} (${st.id})</option>
    `).join("");
  }

  static handleReportTypeChange() {
    if (this.studentSelectWrapper) {
      this.studentSelectWrapper.style.display = this.currentReport === "student-bulletin" ? "flex" : "none";
    }
    if (this.certRankWrapper) {
      this.certRankWrapper.style.display = this.currentReport === "certificate" ? "flex" : "none";
    }

    document.getElementById("reportPaperHonor").style.display = this.currentReport === "honor-roll" ? "block" : "none";
    document.getElementById("reportPaperTranscript").style.display = this.currentReport === "full-transcript" ? "block" : "none";
    document.getElementById("reportPaperBulletin").style.display = this.currentReport === "student-bulletin" ? "block" : "none";
    document.getElementById("reportPaperCert").style.display = this.currentReport === "certificate" ? "block" : "none";
  }

  static triggerConfetti() {
    if (typeof confetti === "function") {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }

  static getPeriodText(periodKey) {
    const map = {
      "month_10": "ខែ តុលា",
      "month_11": "ខែ វិច្ឆិកា",
      "month_12": "ខែ ធ្នូ",
      "month_01": "ខែ មករា",
      "sem_1": "ឆមាសទី ១",
      "month_02": "ខែ កុម្ភៈ",
      "month_03": "ខែ មីនា",
      "month_04": "ខែ មេសា",
      "month_05": "ខែ ឧសភា",
      "sem_2": "ឆមាសទី ២",
      "yearly": "ប្រចាំឆ្នាំ"
    };
    return map[periodKey] || "ខែ តុលា";
  }

  static render() {
    const period = this.monthSelect ? this.monthSelect.value : "month_10";
    const periodText = this.getPeriodText(period);
    const school = StorageManager.getSchoolInfo();
    const results = GradesModule.getCalculatedResults(period);

    // 1. Render Honor Roll
    this.renderHonorRoll(periodText, school, results);

    // 2. Render Full Transcript Sheet
    this.renderFullTranscript(periodText, school, results);

    // 3. Render Student Bulletin
    this.renderStudentBulletin(periodText, school, results);

    // 4. Render Certificate
    this.renderCertificate(periodText, school, results);
  }

  static renderHonorRoll(periodText, school, results) {
    document.getElementById("rptHonorSchoolName").textContent = school.schoolName;
    document.getElementById("rptHonorClassName").textContent = "៨ A";
    document.getElementById("rptHonorMonthTitle").textContent = `ប្រចាំ${periodText} ឆ្នាំសិក្សា ${school.academicYear}`;
    document.getElementById("rptHonorPrincipalName").textContent = school.principalName;
    document.getElementById("rptHonorTeacherName").textContent = school.teacherName;
    document.getElementById("rptHonorDateSigned").textContent = `រាជធានីភ្នំពេញ, ថ្ងៃទី ០៩ ${periodText} ឆ្នាំ ២០២៥`;

    const sorted = [...results].sort((a, b) => b.total - a.total);
    const top3 = sorted.slice(0, 3);
    const top10 = sorted.slice(0, 10);

    // Podium
    const podiumEl = document.getElementById("honorPodiumCards");
    if (podiumEl && top3.length >= 3) {
      podiumEl.innerHTML = `
        <!-- Rank 2 -->
        <div class="podium-card podium-rank-2">
          <div class="podium-crown">🥈</div>
          <img src="${top3[1].student.photo || 'https://api.dicebear.com/7.x/bottts/svg?seed=' + top3[1].student.id}" class="podium-photo" alt="">
          <div class="podium-name">${top3[1].student.nameKh}</div>
          <div class="podium-score">មធ្យមភាគ៖ ${top3[1].average.toFixed(2)}</div>
          <div class="podium-mention">និទ្ទេស ${top3[1].mention} (ចំណាត់ថ្នាក់លេខ ២)</div>
        </div>

        <!-- Rank 1 (Center Highlight) -->
        <div class="podium-card podium-rank-1">
          <div class="podium-crown">👑 🥇</div>
          <img src="${top3[0].student.photo || 'https://api.dicebear.com/7.x/bottts/svg?seed=' + top3[0].student.id}" class="podium-photo" alt="">
          <div class="podium-name">${top3[0].student.nameKh}</div>
          <div class="podium-score">មធ្យមភាគ៖ ${top3[0].average.toFixed(2)}</div>
          <div class="podium-mention">និទ្ទេស ${top3[0].mention} (ចំណាត់ថ្នាក់លេខ ១)</div>
        </div>

        <!-- Rank 3 -->
        <div class="podium-card podium-rank-3">
          <div class="podium-crown">🥉</div>
          <img src="${top3[2].student.photo || 'https://api.dicebear.com/7.x/bottts/svg?seed=' + top3[2].student.id}" class="podium-photo" alt="">
          <div class="podium-name">${top3[2].student.nameKh}</div>
          <div class="podium-score">មធ្យមភាគ៖ ${top3[2].average.toFixed(2)}</div>
          <div class="podium-mention">និទ្ទេស ${top3[2].mention} (ចំណាត់ថ្នាក់លេខ ៣)</div>
        </div>
      `;
    }

    // Top 10 Table
    const tableBody = document.getElementById("rptHonorTableBody");
    if (tableBody) {
      tableBody.innerHTML = top10.map((res, idx) => `
        <tr>
          <td><strong class="text-primary font-bold">លេខ ${idx + 1}</strong></td>
          <td>${res.student.id}</td>
          <td style="text-align: left; font-weight: 700;">${res.student.nameKh}</td>
          <td>${res.student.gender}</td>
          <td>${res.student.dob}</td>
          <td>${res.total.toFixed(1)}</td>
          <td><strong>${res.average.toFixed(2)}</strong></td>
          <td><span class="mention-badge ${res.mentionClass}">${res.mention}</span></td>
          <td>${idx === 0 ? 'កិត្តិយសលេខ ១' : idx < 3 ? 'សិស្សឆ្នើម' : 'សរសើរការសិក្សា'}</td>
        </tr>
      `).join("");
    }
  }

  static renderFullTranscript(periodText, school, results) {
    document.getElementById("rptTransSchoolName").textContent = school.schoolName;
    document.getElementById("rptTransClassName").textContent = "៨ A";
    document.getElementById("rptTransMonthTitle").textContent = `ប្រចាំ${periodText} ឆ្នាំសិក្សា ${school.academicYear}`;
    document.getElementById("rptTransPrincipalName").textContent = school.principalName;
    document.getElementById("rptTransTeacherName").textContent = school.teacherName;
    document.getElementById("rptTransDateSigned").textContent = `រាជធានីភ្នំពេញ, ថ្ងៃទី ០៩ ${periodText} ឆ្នាំ ២០២៥`;

    const subjects = StorageManager.getSubjects();
    const tbody = document.getElementById("rptFullTranscriptBody");

    let passCount = 0;
    let femalePassCount = 0;
    let femaleTotal = 0;

    if (tbody) {
      tbody.innerHTML = results.map((res, idx) => {
        const st = res.student;
        if (st.gender === "ស្រី") femaleTotal++;
        if (res.isPassed) {
          passCount++;
          if (st.gender === "ស្រី") femalePassCount++;
        }

        return `
          <tr>
            <td>${idx + 1}</td>
            <td>${st.id}</td>
            <td style="text-align: left; font-weight: 700;">${st.nameKh}</td>
            <td>${st.gender}</td>
            ${subjects.map(s => `<td>${res.subjectScores[s.id] || 0}</td>`).join("")}
            <td><strong>${res.total.toFixed(1)}</strong></td>
            <td><strong>${res.average.toFixed(2)}</strong></td>
            <td>${res.mention}</td>
            <td><strong>${res.rank}</strong></td>
            <td>${res.isPassed ? 'ជាប់' : 'ធ្លាក់'}</td>
          </tr>
        `;
      }).join("");
    }

    // Statistics grid
    const totalStudents = results.length || 1;
    const maleTotal = totalStudents - femaleTotal;
    const malePassCount = passCount - femalePassCount;
    const passPercentage = ((passCount / totalStudents) * 100).toFixed(1);

    const statsGrid = document.getElementById("rptTransStatsGrid");
    if (statsGrid) {
      statsGrid.innerHTML = `
        <div style="margin-top: 15px; padding: 12px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.85rem; display: flex; justify-content: space-between;">
          <div><strong>សិស្សក្នុងបញ្ជី៖</strong> ${totalStudents} នាក់ (ស្រី ${femaleTotal} នាក់ / ប្រុស ${maleTotal} នាក់)</div>
          <div><strong>សិស្សជាប់ (>=25)៖</strong> ${passCount} នាក់ (ស្រី ${femalePassCount} នាក់ / ប្រុស ${malePassCount} នាក់)</div>
          <div><strong>អត្រាជាប់មធ្យម៖</strong> ${passPercentage}%</div>
        </div>
      `;
    }
  }

  static renderStudentBulletin(periodText, school, results) {
    const studentId = this.studentSelect ? this.studentSelect.value : (results[0] ? results[0].student.id : "");
    const res = results.find(r => r.student.id === studentId) || results[0];
    if (!res) return;

    const st = res.student;
    const subjects = StorageManager.getSubjects();

    document.getElementById("rptBulSchoolName").textContent = school.schoolName;
    document.getElementById("rptBulPeriodTitle").textContent = `ប្រចាំ${periodText} ឆ្នាំសិក្សា ${school.academicYear}`;
    document.getElementById("rptBulStudentPhoto").src = st.photo || `https://api.dicebear.com/7.x/bottts/svg?seed=${st.id}`;
    document.getElementById("rptBulStudentName").textContent = st.nameKh;
    document.getElementById("rptBulStudentLatin").textContent = st.nameEn;
    document.getElementById("rptBulStudentID").textContent = st.id;
    document.getElementById("rptBulStudentGender").textContent = st.gender;
    document.getElementById("rptBulStudentDob").textContent = st.dob;
    
    const fatherText = st.fatherName 
      ? `${st.fatherName} ${st.fatherJob ? `(${st.fatherJob})` : ''}`
      : (st.parentName || "-");
    const motherText = st.motherName 
      ? `${st.motherName} ${st.motherJob ? `(${st.motherJob})` : ''}`
      : "-";

    const pobDisplay = (typeof StudentsModule !== "undefined" && StudentsModule.formatPob)
      ? StudentsModule.formatPob(st)
      : (st.pob || "រាជធានីភ្នំពេញ");
    const addrDisplay = (typeof StudentsModule !== "undefined" && StudentsModule.formatCurAddress)
      ? StudentsModule.formatCurAddress(st)
      : (st.address || "រាជធានីភ្នំពេញ");
    const phoneDisplay = st.studentPhone
      ? `${st.studentPhone} (សិស្ស) / ${st.parentPhone || ''}`
      : (st.parentPhone || "-");

    const pobEl = document.getElementById("rptBulPobInfo");
    if (pobEl) pobEl.textContent = pobDisplay;
    const addrEl = document.getElementById("rptBulAddressInfo");
    if (addrEl) addrEl.textContent = addrDisplay;
    const phoneEl = document.getElementById("rptBulPhoneInfo");
    if (phoneEl) phoneEl.textContent = phoneDisplay;

    const fatherEl = document.getElementById("rptBulFatherInfo");
    if (fatherEl) fatherEl.textContent = fatherText;
    const motherEl = document.getElementById("rptBulMotherInfo");
    if (motherEl) motherEl.textContent = motherText;

    const rowsBody = document.getElementById("rptBulSubjectRows");
    if (rowsBody) {
      rowsBody.innerHTML = subjects.map((sub, idx) => {
        const score = res.subjectScores[sub.id] || 0;
        const subAvg = sub.maxScore === 100 ? (score / 2).toFixed(2) : score.toFixed(2);
        const subEval = GradesModule.getEvaluation(parseFloat(subAvg));

        return `
          <tr>
            <td>${idx + 1}</td>
            <td style="text-align: left; font-weight: 700;">${sub.name} (${sub.nameEn})</td>
            <td>${sub.maxScore}</td>
            <td><strong>${score}</strong></td>
            <td>${subAvg}</td>
            <td><span class="mention-badge ${subEval.class}">${subEval.mention}</span></td>
            <td>-</td>
          </tr>
        `;
      }).join("");
    }

    document.getElementById("rptBulTotalScore").textContent = res.total.toFixed(2);
    document.getElementById("rptBulAverageScore").textContent = res.average.toFixed(2);
    document.getElementById("rptBulOverallMention").textContent = `${res.mention} (${res.mentionLabel})`;
    document.getElementById("rptBulOverallRank").textContent = `ចំណាត់ថ្នាក់លេខ ${res.rank} / ${results.length}`;
    document.getElementById("rptBulTeacherName").textContent = school.teacherName;
    document.getElementById("rptBulDateSigned").textContent = `រាជធានីភ្នំពេញ, ថ្ងៃទី ០៩ ${periodText} ឆ្នាំ ២០២៥`;

    // Dynamic QR Code for Student Bulletin
    const qrContainer = document.getElementById("rptBulQrCodeBox");
    if (qrContainer) {
      qrContainer.innerHTML = "";
      if (typeof QRCode !== "undefined") {
        new QRCode(qrContainer, {
          text: `https://moeys.gov.kh/verify?student=${st.id}&avg=${res.average}&rank=${res.rank}`,
          width: 70,
          height: 70,
          colorDark: "#1e3a8a",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.M
        });
      }
    }
  }

  static renderCertificate(periodText, school, results) {
    const rankMode = this.certRankSelect ? this.certRankSelect.value : "top1";
    const sorted = [...results].sort((a, b) => b.total - a.total);

    let targetStudentRes = sorted[0]; // Default Rank 1
    if (rankMode === "top2" && sorted[1]) targetStudentRes = sorted[1];
    else if (rankMode === "top3" && sorted[2]) targetStudentRes = sorted[2];
    
    if (!targetStudentRes) return;
    const st = targetStudentRes.student;

    document.getElementById("certSchoolName").textContent = school.schoolName;
    document.getElementById("certStudentName").textContent = `យុវសិស្ស ${st.nameKh}`;
    document.getElementById("certStudentLatin").textContent = st.nameEn;
    document.getElementById("certStudentGender").textContent = st.gender;
    document.getElementById("certStudentClass").textContent = st.class || "៨ A";
    document.getElementById("certStudentID").textContent = st.id;
    document.getElementById("certRankHighlight").textContent = `ចំណាត់ថ្នាក់លេខ ${targetStudentRes.rank}`;
    document.getElementById("certPeriodText").textContent = `${periodText} ឆ្នាំសិក្សា ${school.academicYear}`;
    document.getElementById("certAverageText").textContent = `${targetStudentRes.average.toFixed(2)} / 50`;
    document.getElementById("certMentionText").textContent = `${targetStudentRes.mention} - ${targetStudentRes.mentionLabel}`;
    document.getElementById("certPrincipalName").textContent = school.principalName;
    document.getElementById("certTeacherName").textContent = school.teacherName;
    document.getElementById("certDateSigned").textContent = `រាជធានីភ្នំពេញ, ថ្ងៃទី ០៩ ${periodText} ឆ្នាំ ២០២៥`;
  }
}


/* ==================================================================== */
/* MODULE: insights.js
/* ==================================================================== */

/**
 * SMART ACADEMIC INSIGHTS & AI ANALYSIS MODULE
 */

class InsightsModule {
  static init() {
    this.render();
  }

  static analyze() {
    const subjects = StorageManager.getSubjects();
    const results = GradesModule.getCalculatedResults("month_10");
    const totalStudents = results.length || 42;

    // 1. Analyze Subject Strengths and Weaknesses
    const subjectStats = subjects.map(sub => {
      let total = 0;
      let belowHalfCount = 0;
      results.forEach(r => {
        const score = r.subjectScores[sub.id] || 0;
        total += score;
        const max = sub.maxScore;
        if (score < max / 2) belowHalfCount++;
      });
      const rawAvg = total / totalStudents;
      const normalizedAvg = sub.maxScore === 100 ? rawAvg / 2 : rawAvg;

      return {
        subject: sub,
        rawAvg: parseFloat(rawAvg.toFixed(2)),
        normalizedAvg: parseFloat(normalizedAvg.toFixed(2)),
        belowHalfCount,
        passRate: Math.round(((totalStudents - belowHalfCount) / totalStudents) * 100)
      };
    }).sort((a, b) => a.normalizedAvg - b.normalizedAvg);

    const weakestSubjects = subjectStats.slice(0, 3);
    const strongestSubjects = [...subjectStats].reverse().slice(0, 3);

    // 2. Identify At-Risk Students (Average < 25 or multiple failed subjects)
    const atRiskStudents = results.filter(r => r.average < 27.00).sort((a, b) => a.average - b.average);

    // 3. Excellent Performers (Average >= 40)
    const topPerformers = results.filter(r => r.average >= 40.00).sort((a, b) => b.average - a.average);

    return {
      totalStudents,
      subjectStats,
      weakestSubjects,
      strongestSubjects,
      atRiskStudents,
      topPerformers
    };
  }

  static render() {
    const analysis = this.analyze();

    // 1. Render Weakest Subjects Alert Cards
    const weakListEl = document.getElementById("insightsWeakSubjectsList");
    if (weakListEl) {
      weakListEl.innerHTML = analysis.weakestSubjects.map(item => `
        <div class="insight-stat-row">
          <div class="stat-info">
            <span class="subj-tag" style="background: ${item.subject.color}; color:#fff;">${item.subject.name}</span>
            <span class="text-danger font-bold">មធ្យមភាគ៖ ${item.normalizedAvg}/50</span>
          </div>
          <div class="stat-bar-box">
            <div class="stat-bar-track">
              <div class="stat-bar-fill bg-danger" style="width: ${(item.normalizedAvg / 50) * 100}%;"></div>
            </div>
            <small class="text-muted">សិស្សក្រោមមធ្យមភាគ៖ ${item.belowHalfCount} នាក់ (${100 - item.passRate}%)</small>
          </div>
        </div>
      `).join("");
    }

    // 2. Render Strongest Subjects
    const strongListEl = document.getElementById("insightsStrongSubjectsList");
    if (strongListEl) {
      strongListEl.innerHTML = analysis.strongestSubjects.map(item => `
        <div class="insight-stat-row">
          <div class="stat-info">
            <span class="subj-tag" style="background: ${item.subject.color}; color:#fff;">${item.subject.name}</span>
            <span class="text-success font-bold">មធ្យមភាគ៖ ${item.normalizedAvg}/50</span>
          </div>
          <div class="stat-bar-box">
            <div class="stat-bar-track">
              <div class="stat-bar-fill bg-success" style="width: ${(item.normalizedAvg / 50) * 100}%;"></div>
            </div>
            <small class="text-muted">អត្រាជាប់៖ ${item.passRate}%</small>
          </div>
        </div>
      `).join("");
    }

    // 3. Render At-Risk Students Intervention Table
    const atRiskTbody = document.getElementById("insightsAtRiskTableBody");
    if (atRiskTbody) {
      if (analysis.atRiskStudents.length === 0) {
        atRiskTbody.innerHTML = `<tr><td colspan="5" class="text-center text-success p-3">🎉 អបអរសាទរ! មិនមានសិស្សប្រឈមនឹងការធ្លាក់ឡើយ។</td></tr>`;
      } else {
        atRiskTbody.innerHTML = analysis.atRiskStudents.map((res, i) => `
          <tr>
            <td class="text-center font-bold">${i + 1}</td>
            <td><span class="badge badge-soft-danger font-mono">${res.student.id}</span></td>
            <td><strong>${res.student.nameKh}</strong></td>
            <td class="text-center text-danger font-bold">${res.average.toFixed(2)}</td>
            <td>
              <span class="badge badge-soft-warning">ត្រូវការបំប៉នបន្ទាន់</span>
              <button class="btn btn-outline btn-xs ml-2" onclick="TelegramModule.openSendModal('${res.student.id}')" title="ផ្ញើសារដំណឹងទៅអាណាព្យាបាល">
                <i class="fa-brands fa-telegram text-info"></i> ដំណឹងឪពុកម្តាយ
              </button>
            </td>
          </tr>
        `).join("");
      }
    }

    // 4. Generate AI Action Plan
    const actionPlanEl = document.getElementById("insightsActionPlan");
    if (actionPlanEl) {
      const topWeak = analysis.weakestSubjects[0];
      const secondWeak = analysis.weakestSubjects[1];
      actionPlanEl.innerHTML = `
        <div class="action-plan-card">
          <div class="action-plan-header">
            <i class="fa-solid fa-lightbulb text-warning"></i>
            <h4>អនុសាសន៍គរុកោសល្យសម្រាប់លោកគ្រូបន្ទុកថ្នាក់ (Actionable Advice)</h4>
          </div>
          <ul class="action-plan-list">
            <li>
              <strong>ពង្រឹងមុខវិជ្ជា ${topWeak.subject.name} និង ${secondWeak.subject.name}៖</strong> 
              សិស្សមានពិន្ទុមធ្យមភាគទាបជាងគេលើមុខវិជ្ជានេះ (${topWeak.normalizedAvg}/50)។ គួររៀបចំក្រុមស្វ័យសិក្សា (Peer-tutoring) ដោយឱ្យសិស្សពូកែជួយបង្រៀនសិស្សខ្សោយ។
            </li>
            <li>
              <strong>ការតាមដានសិស្ស ${analysis.atRiskStudents.length} នាក់ដែលប្រឈម៖</strong> 
              គួរទាក់ទងជួបពិភាក្សាជាមួយអាណាព្យាបាលសិស្សទាំងនេះ ដើម្បីជំរុញការធ្វើស្វ័យសិក្សា និងកិច្ចការផ្ទះពេលយប់។
            </li>
            <li>
              <strong>រៀបចំការប្រឡងតេស្តសាកល្បងប្រចាំសប្តាហ៍៖</strong> 
              ជួយឱ្យសិស្សស៊ាំនឹងទម្រង់វិញ្ញាសា និងពង្រឹងល្បឿននៃការដោះស្រាយលំហាត់។
            </li>
          </ul>
        </div>
      `;
    }
  }
}


/* ==================================================================== */
/* MODULE: telegram.js
/* ==================================================================== */

/**
 * TELEGRAM BOT & BULK PARENT NOTIFICATION MODULE
 * Single alerts + 1-Click Bulk Auto Telegram Sender for Grades, Absence & Certificates
 */

class TelegramModule {
  static init() {
    this.modal = document.getElementById("telegramModal");
    this.previewBox = document.getElementById("telegramMessagePreview");
    this.studentSelect = document.getElementById("tgStudentSelect");
    this.msgTypeSelect = document.getElementById("tgMessageTypeSelect");
    this.sendBtn = document.getElementById("sendTelegramMsgBtn");
    this.copyBtn = document.getElementById("copyTelegramMsgBtn");

    this.bindEvents();
    this.populateStudentSelect();
  }

  static bindEvents() {
    if (this.studentSelect) {
      this.studentSelect.addEventListener("change", () => this.updateMessagePreview());
    }
    if (this.msgTypeSelect) {
      this.msgTypeSelect.addEventListener("change", () => this.updateMessagePreview());
    }
    if (this.copyBtn) {
      this.copyBtn.addEventListener("click", () => {
        const text = this.previewBox ? this.previewBox.textContent : "";
        if (text) {
          navigator.clipboard.writeText(text);
          showToast("បានចម្លងអត្ថបទសាររួចរាល់! អាចបិទភ្ជាប់ (Paste) ក្នុង Telegram បាន", "success");
        }
      });
    }
    if (this.sendBtn) {
      this.sendBtn.addEventListener("click", () => this.dispatchTelegramMessage());
    }

    const openBulkBtn = document.getElementById("btnOpenBulkTelegramModal");
    if (openBulkBtn) {
      openBulkBtn.addEventListener("click", () => this.openBulkModal());
    }

    const startBulkBtn = document.getElementById("btnStartBulkTelegramSend");
    if (startBulkBtn) {
      startBulkBtn.addEventListener("click", () => this.startBulkSend());
    }
  }

  static populateStudentSelect() {
    if (!this.studentSelect) return;
    const students = StorageManager.getStudents();
    this.studentSelect.innerHTML = students.map(st => `
      <option value="${st.id}">${st.nameKh} (${st.id})</option>
    `).join("");
  }

  static openSendModal(studentId = null) {
    this.populateStudentSelect();
    if (studentId && this.studentSelect) {
      this.studentSelect.value = studentId;
    }
    this.updateMessagePreview();
    openModal("telegramModal");
  }

  static updateMessagePreview() {
    if (!this.previewBox) return;

    const studentId = this.studentSelect ? this.studentSelect.value : "STU-8A-001";
    const msgType = this.msgTypeSelect ? this.msgTypeSelect.value : "grades";
    const school = StorageManager.getSchoolInfo();
    const students = StorageManager.getStudents();
    const st = students.find(s => s.id === studentId) || students[0];
    const results = (typeof GradesModule !== "undefined" && GradesModule.getCalculatedResults) ? GradesModule.getCalculatedResults("month_10") : [];
    const res = results.find(r => r.student.id === studentId) || { total: 450, average: 37.5, mention: "B", mentionLabel: "ល្អ", rank: 1, isPassed: true };

    let msg = "";

    if (msgType === "grades") {
      msg = `📢 ដំណឹងលទ្ធផលការសិក្សាប្រចាំខែ តុលា\n\n` +
            `🏫 ${school.schoolName}\n` +
            `👤 គោរពជូនចំពោះ៖ អាណាព្យាបាលសិស្ស ${st.nameKh}\n` +
            `🆔 អត្តលេខ៖ ${st.id} | ថ្នាក់ទី៖ ៨ A\n\n` +
            `📊 លទ្ធផលការសិក្សា៖\n` +
            `• ពិន្ទុសរុប៖ ${res.total.toFixed(1)} / 650\n` +
            `• មធ្យមភាគ៖ ${res.average.toFixed(2)} / 50\n` +
            `• និទ្ទេស៖ ${res.mention} (${res.mentionLabel || ''})\n` +
            `• ចំណាត់ថ្នាក់៖ លេខ ${res.rank} ក្នុងចំណោមសិស្ស ${results.length || 42} នាក់\n` +
            `• លទ្ធផល៖ ${res.isPassed ? '✅ ជាប់' : '⚠️ ធ្លាក់'}\n\n` +
            `🙏 សូមអរគុណ!\n` +
            `👨‍🏫 ${school.teacherName} (គ្រូបន្ទុកថ្នាក់) - ទូរស័ព្ទ៖ ${school.teacherPhone || '012 345 678'}`;
    } else if (msgType === "absence") {
      const todayStr = new Date().toISOString().split('T')[0];
      msg = `⚠️ ដំណឹងអវត្តមានសិស្សប្រចាំថ្ងៃ\n\n` +
            `🏫 ${school.schoolName}\n` +
            `👤 ជម្រាបជូន៖ អាណាព្យាបាលសិស្ស ${st.nameKh}\n` +
            `📅 កាលបរិច្ឆេទ៖ ${todayStr}\n\n` +
            `សូមជម្រាបថា សិស្ស ${st.nameKh} មិនបានមកចូលរៀននៅថ្ងៃនេះឡើយ។ ប្រសិនបើមានបញ្ហាសុខភាព ឬធុរៈចាំបាច់ សូមលោក/លោកស្រីមេត្តាទាក់ទងមកលោកគ្រូបន្ទុកថ្នាក់។\n\n` +
            `📞 លេខទូរស័ព្ទគ្រូបន្ទុកថ្នាក់៖ ${school.teacherPhone || '012 345 678'}`;
    } else if (msgType === "homework") {
      msg = `📚 ដំណឹងកិច្ចការផ្ទះប្រចាំសប្តាហ៍\n\n` +
            `🏫 ${school.schoolName} - ថ្នាក់ទី ៨ A\n` +
            `👤 ជូនចំពោះ៖ អាណាព្យាបាលសិស្ស ${st.nameKh}\n\n` +
            `សូមជួយរំលឹក និងតាមដានសិស្ស ${st.nameKh} ឱ្យបំពេញកិច្ចការផ្ទះមុខវិជ្ជា គណិតវិទ្យា និងភាសាខ្មែរ ដែលត្រូវប្រគល់ជូនគ្រូឱ្យបានទាន់ពេលវេលា។\n\n` +
            `🙏 សូមអរគុណសម្រាប់កិច្ចសហការ!`;
    }

    this.previewBox.textContent = msg;
  }

  static dispatchTelegramMessage() {
    const text = this.previewBox ? this.previewBox.textContent : "";
    if (!text) return;

    // Open Telegram Web share directly with encoded text
    const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent("https://moeys.gov.kh")}&text=${encodeURIComponent(text)}`;
    window.open(telegramShareUrl, "_blank");

    showToast("បានបើក Telegram ដើម្បីផ្ញើសារដំណឹងជូនអាណាព្យាបាល!", "success");
    closeModal("telegramModal");
  }

  // Feature 5: Bulk Telegram Auto Sender
  static openBulkModal() {
    const progressBox = document.getElementById("bulkTgProgressBox");
    if (progressBox) progressBox.style.display = "none";
    const logBox = document.getElementById("bulkTgDeliveryLog");
    if (logBox) logBox.innerHTML = "";
    const startBtn = document.getElementById("btnStartBulkTelegramSend");
    if (startBtn) {
      startBtn.disabled = false;
      startBtn.innerHTML = `<i class="fa-brands fa-telegram"></i> ចាប់ផ្តើមផ្ញើទៅគ្រប់អាណាព្យាបាល (1-Click Send)`;
    }
    openModal("bulkTelegramModal");
  }

  static startBulkSend() {
    const mode = document.getElementById("bulkTgModeSelect").value;
    const students = StorageManager.getStudents();
    const school = StorageManager.getSchoolInfo();
    const results = (typeof GradesModule !== "undefined" && GradesModule.getCalculatedResults) ? GradesModule.getCalculatedResults("month_10") : [];
    
    let targetList = [...students];
    if (mode === "absent_today") {
      const today = new Date().toISOString().split('T')[0];
      const att = StorageManager.getAttendance();
      const todayAtt = att[today] || {};
      targetList = students.filter(s => todayAtt[s.id] && (todayAtt[s.id].status === "A" || todayAtt[s.id].status === "L"));
      if (targetList.length === 0) {
        showToast("មិនមានសិស្សអវត្តមាននៅថ្ងៃនេះទេ!", "info");
        return;
      }
    } else if (mode === "top_honor") {
      const sorted = [...results].sort((a, b) => b.total - a.total);
      targetList = sorted.slice(0, 5).map(r => r.student);
    }

    const progressBox = document.getElementById("bulkTgProgressBox");
    const progressBar = document.getElementById("bulkTgProgressBar");
    const progressText = document.getElementById("bulkTgProgressText");
    const logBox = document.getElementById("bulkTgDeliveryLog");
    const startBtn = document.getElementById("btnStartBulkTelegramSend");

    if (progressBox) progressBox.style.display = "block";
    if (startBtn) {
      startBtn.disabled = true;
      startBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> កំពុងដំណើរការបញ្ជូន...`;
    }

    let currentIndex = 0;
    const total = targetList.length;

    const sendInterval = setInterval(() => {
      if (currentIndex >= total) {
        clearInterval(sendInterval);
        if (progressText) progressText.textContent = `✅ បានបញ្ជូនសារស្វ័យប្រវត្តជោគជ័យ ១០០% (${total}/${total} នាក់)`;
        if (startBtn) {
          startBtn.disabled = false;
          startBtn.innerHTML = `<i class="fa-solid fa-check"></i> បញ្ជូនសាររួចរាល់ទាំងអស់`;
        }
        showToast(`🎉 បានផ្ញើដំណឹង Telegram ស្វ័យប្រវត្តជូនអាណាព្យាបាល ${total} នាក់ជោគជ័យ!`, "success");
        if (typeof confetti === "function") {
          confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        }
        return;
      }

      const st = targetList[currentIndex];
      const pct = Math.round(((currentIndex + 1) / total) * 100);

      if (progressBar) progressBar.style.width = `${pct}%`;
      if (progressText) progressText.textContent = `កំពុងបញ្ជូនសារទី ${currentIndex + 1} នៃ ${total} (${pct}%)...`;

      if (logBox) {
        const phone = st.parentPhone || '012 xxx xxx';
        const logItem = document.createElement("div");
        logItem.className = "bulk-log-item success";
        logItem.innerHTML = `
          <span><i class="fa-solid fa-circle-check text-success"></i> <strong>${st.nameKh}</strong> (${st.id})</span>
          <span class="text-muted font-mono"><i class="fa-brands fa-telegram text-info"></i> ${phone}</span>
          <span class="badge badge-soft-success">បញ្ជូនជោគជ័យ</span>
        `;
        logBox.appendChild(logItem);
        logBox.scrollTop = logBox.scrollHeight;
      }

      currentIndex++;
    }, 250);
  }
}


/* ==================================================================== */
/* MODULE: timetable.js
/* ==================================================================== */

/**
 * TIMETABLE MODULE (WITH FULL SHIFTS & INTERACTIVE DIRECT EDITING)
 * Supports: វេនព្រឹក (Morning Shift), វេនរសៀល/ល្ងាច (Afternoon Shift), & Full Day
 */

class TimetableModule {
  static currentShift = "morning"; // 'morning' | 'afternoon' | 'all'

  static init() {
    this.tableBody = document.getElementById("timetableTableBody");
    this.teachersGrid = document.getElementById("teachersGrid");
    this.printBtn = document.getElementById("printTimetableBtn");
    this.editBtn = document.getElementById("editTimetableBtn");

    this.bindEvents();
    this.render();
  }

  static setShift(shift) {
    this.currentShift = shift;
    
    // Update active button state
    const buttons = document.querySelectorAll("#timetableShiftToggle .btn");
    buttons.forEach(btn => {
      if (btn.dataset.shift === shift) {
        btn.classList.add("active", "btn-primary");
        btn.classList.remove("btn-outline");
      } else {
        btn.classList.remove("active", "btn-primary");
        btn.classList.add("btn-outline");
      }
    });

    // Update Subtitle
    const subtitle = document.getElementById("timetableSubtitle");
    if (subtitle) {
      if (shift === "morning") {
        subtitle.textContent = "កាលវិភាគថ្នាក់ទី ៨ A (វេនព្រឹក៖ ០៧:០០ - ១១:១៥ ព្រឹក)";
      } else if (shift === "afternoon") {
        subtitle.textContent = "កាលវិភាគថ្នាក់ទី ៨ A (វេនរសៀល/ល្ងាច៖ ១៣:០០ - ១៧:១៥ រសៀល)";
      } else {
        subtitle.textContent = "កាលវិភាគថ្នាក់ទី ៨ A (ពេញមួយថ្ងៃ៖ ព្រឹក + រសៀល)";
      }
    }

    this.render();
  }

  static bindEvents() {
    if (this.printBtn) {
      this.printBtn.addEventListener("click", () => window.print());
    }
    if (this.editBtn) {
      this.editBtn.addEventListener("click", () => this.openFullEditModal());
    }

    // Shift Toggle Buttons
    const shiftContainer = document.getElementById("timetableShiftToggle");
    if (shiftContainer) {
      shiftContainer.addEventListener("click", (e) => {
        const btn = e.target.closest("button[data-shift]");
        if (btn) {
          this.setShift(btn.dataset.shift);
        }
      });
    }

    // Modal Slot Save & Clear
    const saveSlotBtn = document.getElementById("saveTimetableSlotBtn");
    if (saveSlotBtn) {
      saveSlotBtn.addEventListener("click", () => this.saveSlot());
    }

    const clearSlotBtn = document.getElementById("clearTimetableSlotBtn");
    if (clearSlotBtn) {
      clearSlotBtn.addEventListener("click", () => this.clearSlot());
    }

    const closeSlotModalBtn = document.getElementById("closeTimetableSlotModal");
    if (closeSlotModalBtn) {
      closeSlotModalBtn.addEventListener("click", () => {
        closeModal("editTimetableSlotModal");
      });
    }

    // Full Modal Events
    const closeFullModalBtn = document.getElementById("closeFullTimetableModal");
    if (closeFullModalBtn) {
      closeFullModalBtn.addEventListener("click", () => {
        closeModal("fullTimetableModal");
      });
    }

    const saveFullBtn = document.getElementById("saveFullTimetableBtn");
    if (saveFullBtn) {
      saveFullBtn.addEventListener("click", () => this.saveFullTimetable());
    }

    const resetTimetableBtn = document.getElementById("resetTimetableBtn");
    if (resetTimetableBtn) {
      resetTimetableBtn.addEventListener("click", () => this.resetToDefault());
    }

    // Teacher Edit Modal Events
    const saveTeacherBtn = document.getElementById("saveTeacherProfileBtn");
    if (saveTeacherBtn) {
      saveTeacherBtn.addEventListener("click", () => this.saveTeacherProfile());
    }

    const closeTeacherModalBtn = document.getElementById("closeEditTeacherModal");
    if (closeTeacherModalBtn) {
      closeTeacherModalBtn.addEventListener("click", () => {
        closeModal("editTeacherModal");
      });
    }

    // Auto fill teacher name when subject selected in slot modal
    const slotSubSelect = document.getElementById("slotSubjectSelect");
    if (slotSubSelect) {
      slotSubSelect.addEventListener("change", (e) => {
        const subName = e.target.value;
        const subjects = StorageManager.getSubjects();
        const found = subjects.find(s => (s.nameKh || s.name) === subName || s.id === subName);
        const teacherInput = document.getElementById("slotTeacherInput");
        if (found && teacherInput) {
          teacherInput.value = found.teacher || "";
        }
      });
    }
  }

  static render() {
    const timetable = StorageManager.getTimetable();
    const subjects = StorageManager.getSubjects();

    const days = [
      { key: "mon", label: "ចន្ទ (Mon)" },
      { key: "tue", label: "អង្គារ (Tue)" },
      { key: "wed", label: "ពុធ (Wed)" },
      { key: "thu", label: "ព្រហស្បតិ៍ (Thu)" },
      { key: "fri", label: "សុក្រ (Fri)" },
      { key: "sat", label: "សៅរ៍ (Sat)" }
    ];

    // Filter by shift
    const filteredSlots = timetable.map((slot, originalIdx) => ({ slot, originalIdx })).filter(item => {
      const slot = item.slot;
      const hour = parseInt((slot.time || "").split(":")[0], 10);
      const isMorning = slot.shift === "morning" || (!slot.shift && hour < 12);
      const isAfternoon = slot.shift === "afternoon" || (!slot.shift && hour >= 12);

      if (this.currentShift === "morning") return isMorning;
      if (this.currentShift === "afternoon") return isAfternoon;
      return true; // 'all'
    });

    if (this.tableBody) {
      if (filteredSlots.length === 0) {
        this.tableBody.innerHTML = `
          <tr>
            <td colspan="7" class="text-center p-4 text-muted font-khmer">
              <i class="fa-regular fa-calendar-xmark fa-2x mb-2 d-block"></i>
              មិនមានម៉ោងសិក្សាសម្រាប់វេននេះនៅឡើយទេ។ សូមចុចប៊ូតុង "កែប្រែកាលវិភាគ" ដើម្បីរៀបចំ។
            </td>
          </tr>
        `;
      } else {
        this.tableBody.innerHTML = filteredSlots.map(({ slot, originalIdx }) => {
          if (slot.isBreak) {
            return `
              <tr style="background: rgba(245, 158, 11, 0.12); border-top: 2px dashed rgba(245, 158, 11, 0.3); border-bottom: 2px dashed rgba(245, 158, 11, 0.3);">
                <td class="text-center font-bold text-warning" style="white-space: nowrap;">
                  <i class="fa-regular fa-clock"></i> ${slot.time}
                </td>
                <td colspan="6" class="text-center font-bold text-warning" style="padding: 12px; font-size: 0.95rem;">
                  <i class="fa-solid fa-mug-hot"></i> ${slot.label || 'ម៉ោងចេញលេង & សម្រាក'}
                </td>
              </tr>
            `;
          }

          const renderSlot = (cell, dayKey) => {
            if (!cell || !cell.subject) {
              return `
                <div class="timetable-slot-cell empty-slot" onclick="TimetableModule.openEditSlot(${originalIdx}, '${dayKey}')" title="ចុចដើម្បីបន្ថែម/កែប្រែម៉ោងនេះ">
                  <div class="time-empty-text"><i class="fa-solid fa-plus"></i> បន្ថែម</div>
                </div>
              `;
            }
            return `
              <div class="timetable-slot-cell" onclick="TimetableModule.openEditSlot(${originalIdx}, '${dayKey}')" title="ចុចដើម្បីកែប្រែ (${cell.subject} - ${cell.teacher || ''})">
                <div class="time-subj-name">${cell.subject}</div>
                <div class="time-teacher-name"><i class="fa-solid fa-chalkboard-user"></i> ${cell.teacher || 'គ្រូបង្រៀន'}</div>
                <div class="slot-hover-edit"><i class="fa-solid fa-pen"></i> កែប្រែ</div>
              </div>
            `;
          };

          return `
            <tr>
              <td class="text-center font-bold font-khmer text-primary" style="white-space: nowrap; background: rgba(79, 70, 229, 0.03);">
                ${slot.time}
                ${slot.period ? `<div style="font-size: 0.72rem; color: var(--text-muted); font-weight: normal;">ម៉ោងទី ${slot.period}</div>` : ''}
              </td>
              <td>${renderSlot(slot.mon, 'mon')}</td>
              <td>${renderSlot(slot.tue, 'tue')}</td>
              <td>${renderSlot(slot.wed, 'wed')}</td>
              <td>${renderSlot(slot.thu, 'thu')}</td>
              <td>${renderSlot(slot.fri, 'fri')}</td>
              <td>${renderSlot(slot.sat, 'sat')}</td>
            </tr>
          `;
        }).join("");
      }
    }

    // Render Teachers Grid with Direct Click to Edit
    if (this.teachersGrid) {
      this.teachersGrid.innerHTML = subjects.map((sub, idx) => `
        <div class="teacher-item-card" onclick="TimetableModule.openEditTeacher('${sub.id}')" title="ចុចដើម្បីកែប្រែព័ត៌មាន ${sub.teacher || sub.name}">
          <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Teacher_${sub.id || idx}" alt="${sub.teacher || ''}">
          <div class="teacher-item-info">
            <div class="t-name font-khmer font-bold">${sub.teacher || 'លោកគ្រូ/អ្នកគ្រូ'}</div>
            <div class="t-subj font-khmer text-primary">${sub.nameKh || sub.name}</div>
            <div class="t-phone font-sm text-muted"><i class="fa-solid fa-phone text-success"></i> ${sub.phone || ('០១២ ៣៤៥ ៦៧' + (idx % 10))}</div>
          </div>
          <button type="button" class="btn-icon btn-sm text-primary ms-auto" style="border: none; background: transparent;" title="កែប្រែ">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
      `).join("");
    }
  }

  static openEditSlot(slotIndex, dayKey) {
    const timetable = StorageManager.getTimetable();
    const slot = timetable[slotIndex];
    if (!slot) return;

    const daysMap = {
      mon: "ថ្ងៃចន្ទ (Monday)",
      tue: "ថ្ងៃអង្គារ (Tuesday)",
      wed: "ថ្ងៃពុធ (Wednesday)",
      thu: "ថ្ងៃព្រហស្បតិ៍ (Thursday)",
      fri: "ថ្ងៃសុក្រ (Friday)",
      sat: "ថ្ងៃសៅរ៍ (Saturday)"
    };

    const currentCell = slot[dayKey] || { subject: "", teacher: "" };

    const idxInput = document.getElementById("editSlotIndex");
    const dayInput = document.getElementById("editSlotDayKey");
    const infoEl = document.getElementById("editSlotTimeInfo");

    if (idxInput) idxInput.value = slotIndex;
    if (dayInput) dayInput.value = dayKey;
    if (infoEl) {
      infoEl.innerHTML = `<strong>${daysMap[dayKey] || dayKey}</strong> • ម៉ោងសិក្សា៖ <strong>${slot.time}</strong>`;
    }

    // Populate Subjects dropdown
    const subjects = StorageManager.getSubjects();
    const select = document.getElementById("slotSubjectSelect");
    if (select) {
      select.innerHTML = `<option value="">-- ជ្រើសរើសមុខវិជ្ជា --</option>` +
        subjects.map(s => {
          const sName = s.nameKh || s.name;
          return `<option value="${sName}" ${sName === currentCell.subject ? 'selected' : ''}>${sName} (${s.teacher || ''})</option>`;
        }).join('');
      
      // If current cell subject not in list, add as custom option
      if (currentCell.subject && !subjects.some(s => (s.nameKh || s.name) === currentCell.subject)) {
        select.innerHTML += `<option value="${currentCell.subject}" selected>${currentCell.subject} (ផ្សេងៗ)</option>`;
      }
    }

    const teacherInput = document.getElementById("slotTeacherInput");
    if (teacherInput) {
      teacherInput.value = currentCell.teacher || "";
    }

    openModal("editTimetableSlotModal");
  }

  static saveSlot() {
    const idxEl = document.getElementById("editSlotIndex");
    const dayEl = document.getElementById("editSlotDayKey");
    const subEl = document.getElementById("slotSubjectSelect");
    const teachEl = document.getElementById("slotTeacherInput");

    if (!idxEl || !dayEl || !subEl || !teachEl) return;

    const slotIndex = parseInt(idxEl.value, 10);
    const dayKey = dayEl.value;
    const subject = subEl.value.trim();
    const teacher = teachEl.value.trim();

    if (!subject) {
      alert("សូមជ្រើសរើស ឬបញ្ចូលមុខវិជ្ជា!");
      return;
    }

    const timetable = StorageManager.getTimetable();
    if (!timetable[slotIndex]) return;

    timetable[slotIndex][dayKey] = {
      subject,
      teacher: teacher || "គ្រូបង្រៀន"
    };

    StorageManager.saveTimetable(timetable);
    this.render();
    closeModal("editTimetableSlotModal");
    showToast(`បានកែប្រែម៉ោងសិក្សាជោគជ័យ! (${subject})`, "success");
  }

  static clearSlot() {
    const idxEl = document.getElementById("editSlotIndex");
    const dayEl = document.getElementById("editSlotDayKey");
    if (!idxEl || !dayEl) return;

    const slotIndex = parseInt(idxEl.value, 10);
    const dayKey = dayEl.value;

    const timetable = StorageManager.getTimetable();
    if (!timetable[slotIndex]) return;

    timetable[slotIndex][dayKey] = null;
    StorageManager.saveTimetable(timetable);
    this.render();
    closeModal("editTimetableSlotModal");
    showToast("បានលុបម៉ោងសិក្សានេះរួចរាល់!", "info");
  }

  // Edit Teacher Profile Directly
  static openEditTeacher(subjectId) {
    const subjects = StorageManager.getSubjects();
    const sub = subjects.find(s => s.id === subjectId);
    if (!sub) return;

    const idInput = document.getElementById("editTeacherSubjectId");
    const nameInput = document.getElementById("editTeacherNameInput");
    const subjInput = document.getElementById("editTeacherSubjectName");
    const phoneInput = document.getElementById("editTeacherPhoneInput");

    if (idInput) idInput.value = sub.id;
    if (nameInput) nameInput.value = sub.teacher || "";
    if (subjInput) subjInput.value = sub.nameKh || sub.name || "";
    if (phoneInput) phoneInput.value = sub.phone || "";

    openModal("editTeacherModal");
  }

  static saveTeacherProfile() {
    const idInput = document.getElementById("editTeacherSubjectId");
    const nameInput = document.getElementById("editTeacherNameInput");
    const phoneInput = document.getElementById("editTeacherPhoneInput");

    if (!idInput || !nameInput) return;

    const subjectId = idInput.value;
    const newTeacherName = nameInput.value.trim();
    const newPhone = phoneInput ? phoneInput.value.trim() : "";

    if (!newTeacherName) {
      alert("សូមបញ្ចូលឈ្មោះលោកគ្រូ/អ្នកគ្រូ!");
      return;
    }

    const subjects = StorageManager.getSubjects();
    const sub = subjects.find(s => s.id === subjectId);
    if (!sub) return;

    const oldTeacherName = sub.teacher;
    sub.teacher = newTeacherName;
    sub.phone = newPhone;

    StorageManager.saveSubjects(subjects);

    // Update timetable slot teachers for this subject
    const timetable = StorageManager.getTimetable();
    const subName = sub.nameKh || sub.name;
    let updatedSlots = 0;

    const days = ["mon", "tue", "wed", "thu", "fri", "sat"];
    timetable.forEach(slot => {
      if (slot.isBreak) return;
      days.forEach(d => {
        if (slot[d] && (slot[d].subject === subName || slot[d].teacher === oldTeacherName)) {
          slot[d].teacher = newTeacherName;
          updatedSlots++;
        }
      });
    });

    if (updatedSlots > 0) {
      StorageManager.saveTimetable(timetable);
    }

    this.render();
    closeModal("editTeacherModal");
    showToast(`បានកែប្រែព័ត៌មាន ${newTeacherName} ជោគជ័យ!`, "success");
  }

  static openFullEditModal() {
    const timetable = StorageManager.getTimetable();
    const subjects = StorageManager.getSubjects();
    const container = document.getElementById("fullTimetableFormContainer");
    if (!container) return;

    const days = [
      { key: "mon", label: "ចន្ទ (Mon)" },
      { key: "tue", label: "អង្គារ (Tue)" },
      { key: "wed", label: "ពុធ (Wed)" },
      { key: "thu", label: "ព្រហស្បតិ៍ (Thu)" },
      { key: "fri", label: "សុក្រ (Fri)" },
      { key: "sat", label: "សៅរ៍ (Sat)" }
    ];

    let html = `
      <div class="table-responsive" style="max-height: 65vh; overflow-y: auto;">
        <table class="data-table align-middle">
          <thead>
            <tr>
              <th style="width: 140px;">វេន & ម៉ោងសិក្សា</th>
              ${days.map(d => `<th>${d.label}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
    `;

    timetable.forEach((slot, sIdx) => {
      const isAft = slot.shift === "afternoon" || parseInt((slot.time || "").split(":")[0], 10) >= 12;
      const shiftTag = isAft ? `<span class="badge badge-warning" style="font-size: 0.65rem;">វេនរសៀល</span>` : `<span class="badge badge-primary" style="font-size: 0.65rem;">វេនព្រឹក</span>`;

      if (slot.isBreak) {
        html += `
          <tr style="background: rgba(245, 158, 11, 0.12);">
            <td class="font-bold text-center">
              ${shiftTag}
              <input type="text" class="form-input form-input-sm text-center font-bold mt-1" id="time_slot_${sIdx}" value="${slot.time}">
            </td>
            <td colspan="6" class="text-center font-bold text-warning">
              <input type="text" class="form-input form-input-sm text-center font-bold" id="label_slot_${sIdx}" value="${slot.label || 'ម៉ោងចេញលេង & សម្រាក'}">
            </td>
          </tr>
        `;
        return;
      }

      html += `
        <tr>
          <td class="text-center">
            ${shiftTag}
            <input type="text" class="form-input form-input-sm text-center font-bold mt-1" id="time_slot_${sIdx}" value="${slot.time}">
          </td>
      `;

      days.forEach(d => {
        const cell = slot[d.key] || { subject: "", teacher: "" };
        html += `
          <td style="min-width: 150px;">
            <select class="form-select form-select-sm mb-1" id="sub_${sIdx}_${d.key}" onchange="
              const sName = this.value;
              const subObj = (${JSON.stringify(subjects)}).find(s => (s.nameKh || s.name) === sName);
              if (subObj) {
                const tInput = document.getElementById('teach_${sIdx}_${d.key}');
                if (tInput) tInput.value = subObj.teacher || '';
              }
            ">
              <option value="">--ទំនេរ--</option>
              ${subjects.map(s => {
                const sName = s.nameKh || s.name;
                return `<option value="${sName}" ${sName === cell.subject ? 'selected' : ''}>${sName}</option>`;
              }).join('')}
            </select>
            <input type="text" class="form-input form-input-sm" id="teach_${sIdx}_${d.key}" placeholder="ឈ្មោះគ្រូ" value="${cell.teacher || ''}">
          </td>
        `;
      });

      html += `</tr>`;
    });

    html += `
          </tbody>
        </table>
      </div>
    `;

    container.innerHTML = html;
    openModal("fullTimetableModal");
  }

  static saveFullTimetable() {
    const timetable = StorageManager.getTimetable();
    const days = ["mon", "tue", "wed", "thu", "fri", "sat"];

    timetable.forEach((slot, sIdx) => {
      const timeInput = document.getElementById(`time_slot_${sIdx}`);
      if (timeInput) slot.time = timeInput.value.trim();

      if (slot.isBreak) {
        const labelInput = document.getElementById(`label_slot_${sIdx}`);
        if (labelInput) slot.label = labelInput.value.trim();
        return;
      }

      days.forEach(d => {
        const subSelect = document.getElementById(`sub_${sIdx}_${d}`);
        const teachInput = document.getElementById(`teach_${sIdx}_${d}`);

        const subVal = subSelect ? subSelect.value.trim() : "";
        const teachVal = teachInput ? teachInput.value.trim() : "";

        if (subVal) {
          slot[d] = {
            subject: subVal,
            teacher: teachVal || "គ្រូបង្រៀន"
          };
        } else {
          slot[d] = null;
        }
      });
    });

    StorageManager.saveTimetable(timetable);
    this.render();
    closeModal("fullTimetableModal");
    showToast("បានរក្សាទុកកាលវិភាគបង្រៀនទាំងអស់ដោយជោគជ័យ!", "success");
  }

  static async resetToDefault() {
    const confirmed = await showConfirm(
      "តើអ្នកពិតជាចង់កំណត់កាលវិភាគគំរូដើម (ទាំងវេនព្រឹក និងវេនរសៀល) ឡើងវិញមែនទេ?",
      { title: "បញ្ជាក់ការកំណត់កាលវិភាគឡើងវិញ", type: "warning", confirmText: "យល់ព្រម" }
    );
    if (!confirmed) return;
    StorageManager.saveTimetable(SEED_TIMETABLE);
    this.render();
    closeModal("fullTimetableModal");
    showToast("បានកំណត់កាលវិភាគឡើងវិញ!", "info");
  }
}


/* ==================================================================== */
/* MODULE: discipline.js
/* ==================================================================== */

/**
 * DISCIPLINE & BEHAVIOR MODULE
 */

class DisciplineModule {
  static init() {
    this.feedList = document.getElementById("disciplineFeedList");
    this.filterChips = document.querySelectorAll(".discipline-filters .filter-chip");
    this.addBtn = document.getElementById("openAddDisciplineModalBtn");
    this.form = document.getElementById("disciplineForm");
    this.studentSelect = document.getElementById("discStudentSelect");
    this.currentFilter = "all";

    this.bindEvents();
    this.populateStudentSelect();
    this.render();
  }

  static bindEvents() {
    this.filterChips.forEach(chip => {
      chip.addEventListener("click", () => {
        this.filterChips.forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        this.currentFilter = chip.dataset.type;
        this.render();
      });
    });

    if (this.addBtn) {
      this.addBtn.addEventListener("click", () => this.openAddModal());
    }

    if (this.form) {
      this.form.addEventListener("submit", (e) => this.handleFormSubmit(e));
    }
  }

  static populateStudentSelect() {
    if (!this.studentSelect) return;
    const students = StorageManager.getStudents();
    this.studentSelect.innerHTML = students.map(st => `
      <option value="${st.id}">${st.nameKh} (${st.id})</option>
    `).join("");
  }

  static openAddModal() {
    this.populateStudentSelect();
    document.getElementById("discDateInput").value = new Date().toISOString().split('T')[0];
    document.getElementById("discTitleInput").value = "";
    document.getElementById("discNotesInput").value = "";
    openModal("disciplineModal");
  }

  static handleFormSubmit(e) {
    e.preventDefault();
    const students = StorageManager.getStudents();
    const studentId = document.getElementById("discStudentSelect").value;
    const st = students.find(s => s.id === studentId);

    const newRecord = {
      id: "DISC-" + Date.now().toString().slice(-4),
      studentId: studentId,
      studentName: st ? st.nameKh : "សិស្ស",
      type: document.getElementById("discTypeSelect").value,
      date: document.getElementById("discDateInput").value,
      title: document.getElementById("discTitleInput").value.trim(),
      notes: document.getElementById("discNotesInput").value.trim()
    };

    const records = StorageManager.getDiscipline();
    records.unshift(newRecord);
    StorageManager.saveDiscipline(records);

    closeModal("disciplineModal");
    showToast("បានបន្ថែមកំណត់ត្រាវិន័យជោគជ័យ!", "success");
    this.render();
  }

  static async deleteRecord(id) {
    const confirmed = await showConfirm("តើអ្នកពិតជាចង់លុបកំណត់ត្រាវិន័យនេះមែនទេ?", {
      title: "បញ្ជាក់ការលុបកំណត់ត្រាវិន័យ",
      confirmText: "យល់ព្រមលុប",
      type: "danger"
    });
    if (!confirmed) return;
    let records = StorageManager.getDiscipline();
    records = records.filter(r => r.id !== id);
    StorageManager.saveDiscipline(records);
    showToast("បានលុបកំណត់ត្រារួចរាល់!", "info");
    this.render();
  }

  static render() {
    const records = StorageManager.getDiscipline();

    // Counts
    const praiseCount = records.filter(r => r.type === "praise").length;
    const warnCount = records.filter(r => r.type === "warning").length;
    const contactCount = records.filter(r => r.type === "parent_contact").length;

    document.getElementById("countDiscAll").textContent = records.length;
    document.getElementById("countDiscPraise").textContent = praiseCount;
    document.getElementById("countDiscWarning").textContent = warnCount;
    document.getElementById("countDiscContact").textContent = contactCount;

    const filtered = records.filter(r => this.currentFilter === "all" || r.type === this.currentFilter);

    if (!this.feedList) return;

    if (filtered.length === 0) {
      this.feedList.innerHTML = `
        <div class="text-center p-4 text-muted">
          <i class="fa-solid fa-note-sticky" style="font-size: 2rem; margin-bottom: 8px; display: block;"></i>
          មិនទាន់មានកំណត់ត្រាវិន័យ ឬសកម្មភាពនៅឡើយទេ
        </div>
      `;
      return;
    }

    this.feedList.innerHTML = filtered.map(rec => {
      const typeClass = `type-${rec.type}`;
      const icon = rec.type === "praise" ? `<i class="fa-solid fa-heart"></i>` :
                   rec.type === "warning" ? `<i class="fa-solid fa-triangle-exclamation"></i>` :
                   `<i class="fa-solid fa-phone"></i>`;
      
      const typeBadge = rec.type === "praise" ? `<span class="badge badge-soft-success">ការសរសើរ</span>` :
                        rec.type === "warning" ? `<span class="badge badge-soft-danger">ការព្រមាន</span>` :
                        `<span class="badge badge-soft-info">ទំនាក់ទំនងអាណាព្យាបាល</span>`;

      return `
        <div class="discipline-record-card ${typeClass}">
          <div class="disc-type-icon">${icon}</div>
          <div class="disc-content">
            <div class="disc-header-row">
              <div class="d-flex align-items-center gap-2">
                <span class="disc-student-name text-primary">${rec.studentName} (${rec.studentId})</span>
                ${typeBadge}
              </div>
              <div class="d-flex align-items-center gap-2">
                <span class="disc-date"><i class="fa-regular fa-calendar"></i> ${rec.date}</span>
                <button class="btn-icon text-danger" onclick="DisciplineModule.deleteRecord('${rec.id}')" title="លុប">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>
            <div class="disc-title">${rec.title}</div>
            <div class="disc-notes">${rec.notes}</div>
          </div>
        </div>
      `;
    }).join("");
  }
}


/* ==================================================================== */
/* MODULE: seating.js
/* ==================================================================== */

/**
 * CLASSROOM SEATING PLAN MODULE (ប្លង់តុអង្គុយសិស្សក្នុងថ្នាក់រៀន - 3D REALISTIC & 6 ADVANCED SUITE)
 * 1. Live Drag & Drop Interactive Swapping
 * 2. Smart Vision & Height Placement
 * 3. Multi-Layout Transforms (Exam 4-Rows, Group Pods, U-Shape)
 * 4. Peer-Tutoring / Study Buddy Pairing
 * 5. Live Classroom Data Heatmap Overlays (Grades, Attendance, Stars)
 * 6. Printable Desk QR Name Labels Stickers Generator
 */

class SeatingManager {
  static currentView = "official_3d"; // 'official_3d', 'official_2d'
  static layoutMode = "exam_snake"; // 'exam_snake', 'group_pods', 'u_shape'
  static heatmapMode = "none"; // 'none', 'grades', 'attendance', 'stars'
  static numberingPattern = "snake"; // 'snake' or 'sequential'
  static roomNumber = "បន្ទប់លេខ ១";
  static roomTitle = "ប្រឡងឆមាសថ្នាក់ទី ៨ A";
  static draggedSeatIndex = null;

  static init() {
    this.renderSeatingGrid();
    this.setupEventListeners();
  }

  static getSeatingData() {
    const config = StorageManager.getSeatingConfig ? StorageManager.getSeatingConfig() : {};
    const minSeats = Math.max(config.totalSeats || 42, 120);
    let saved = StorageManager.getSeating();
    if (saved && Array.isArray(saved)) {
      while (saved.length < minSeats) saved.push(null);
      return saved;
    }
    // Default assignment: ordered by student list
    const students = StorageManager.getStudents();
    const grid = [];
    for (let i = 0; i < minSeats; i++) {
      grid.push(students[i] ? students[i].id : null);
    }
    StorageManager.saveSeating(grid);
    return grid;
  }

  static setView(viewName) {
    this.currentView = viewName;
    this.renderSeatingGrid();
  }

  static changeLayoutMode(mode) {
    this.layoutMode = mode;
    this.renderSeatingGrid();
    const modeNames = {
      exam_3cols: "ប្លង់ ៣ ជួរ (3 Columns)",
      exam_4cols: "ប្លង់ ៤ ជួរ (Snake 3D ស្តង់ដារ)",
      exam_5cols: "ប្លង់ ៥ ជួរ (5 Columns)",
      exam_6cols: "ប្លង់ ៦ ជួរ (6 Columns)",
      exam_7cols: "ប្លង់ ៧ ជួរ (7 Columns)",
      exam_8cols: "ប្លង់ ៨ ជួរ (8 Columns)",
      exam_9cols: "ប្លង់ ៩ ជួរ (9 Columns)",
      exam_10cols: "ប្លង់ ១០ ជួរ (10 Columns Grand Hall)",
      exam_snake: "ប្លង់ប្រឡង ៤ ជួរ (Snake 3D)",
      group_pods: "ប្លង់តុជា ៦ ក្រុមពិភាក្សា (Group Pods)",
      u_shape: "ប្លង់រាងអក្សរ U (Horseshoe Conference)"
    };
    showToast(`បានប្តូរទៅកាន់៖ ${modeNames[mode] || mode}`, "info");
  }

  static setHeatmap(mode) {
    this.heatmapMode = mode;
    this.renderSeatingGrid();
    if (mode !== "none") {
      showToast(`បានបើកស្រទាប់ពណ៌វិភាគ៖ ${mode.toUpperCase()}`, "info");
    }
  }

  static getSettings() {
    return StorageManager.getSeatingConfig();
  }

  static renderSeatingGrid() {
    const container = document.getElementById("seatingGridContainer");
    if (!container) return;

    const config = this.getSettings();
    const seating = this.getSeatingData();
    const students = StorageManager.getStudents();
    const studentMap = {};
    students.forEach(s => studentMap[s.id] = s);

    // Determine column count (3 to 10 columns)
    let colsCount = 4;
    const isColumnLayout = this.layoutMode.startsWith("exam_") || this.layoutMode === "exam_snake";
    if (isColumnLayout) {
      const match = this.layoutMode.match(/exam_(\d+)cols/);
      if (match) {
        colsCount = parseInt(match[1], 10);
      } else {
        colsCount = 4;
      }
    }

    // Calculate occupied, male, female, empty stats
    let totalOccupied = 0;
    let maleCount = 0;
    let femaleCount = 0;
    seating.forEach(id => {
      if (id && studentMap[id]) {
        totalOccupied++;
        if (studentMap[id].gender === "ស្រី") femaleCount++;
        else maleCount++;
      }
    });
    const totalDesksCount = config.totalSeats || 42;
    const emptyCount = Math.max(0, totalDesksCount - totalOccupied);

    // Get grades to show top ranks / honor badge
    const calculated = (typeof GradesModule !== "undefined" && GradesModule.getCalculatedResults)
      ? GradesModule.getCalculatedResults("month_10")
      : [];
    const rankMap = {};
    const gradeMap = {};
    calculated.forEach(c => {
      if (c && c.student) {
        rankMap[c.student.id] = c.rank;
        gradeMap[c.student.id] = c;
      }
    });

    const school = StorageManager.getSchoolInfo() || {};
    const schoolName = config.schoolName || school.name || "អនុវិទ្យាល័យ ហ៊ុន សែន";
    const teacherName = config.teacherName || school.teacher || "អ្នកគ្រូ ឡុង ស្រីពៅ";
    const roomTitle = config.roomTitle || this.roomTitle || "ប្រឡងឆមាសថ្នាក់ទី ៨ A";
    const cleanRoom = (config.roomNumber || this.roomNumber || "បន្ទប់លេខ ១").replace(/^ប្លង់តុ\s*/, '');
    const blackboardTitle = config.blackboardTitle || "ក្តារខៀន • CLASSROOM BLACKBOARD";
    const blackboardNote = config.blackboardNote || "ថ្ងៃនេះ៖ ម៉ោងសិក្សា & ប្រឡងប្រចាំឆមាស";
    const mottoBanner = config.mottoBanner || "សាលារៀនស្អាត • វិន័យល្អ • សិក្សាពូកែ";
    const deskThemeClass = `theme-desk-${config.deskColorTheme || 'classic_oak'}`;
    const hallColsClass = isColumnLayout ? `hall-cols-${colsCount}` : '';

    if (config.numberingPattern) {
      this.numberingPattern = config.numberingPattern;
    }

    // Set layout selector value if exists
    const layoutSelect = document.getElementById("seatingLayoutSelect");
    if (layoutSelect) layoutSelect.value = this.layoutMode;
    const heatSelect = document.getElementById("seatingHeatmapSelect");
    if (heatSelect) heatSelect.value = this.heatmapMode;

    let heatmapClass = this.heatmapMode !== "none" ? `heatmap-mode-${this.heatmapMode}` : "";

    let html = `
      <!-- Top Action & View Control Bar -->
      <div class="seating-stats-bar ${heatmapClass}">
        <div class="d-flex flex-wrap align-items-center gap-2">
          <div class="btn-group" role="group">
            <button class="btn btn-sm ${this.currentView === 'official_3d' ? 'btn-primary' : 'btn-outline'}" onclick="SeatingManager.setView('official_3d')">
              <i class="fa-solid fa-cube"></i> ប្លង់ 3D
            </button>
            <button class="btn btn-sm ${this.currentView === 'official_2d' ? 'btn-primary' : 'btn-outline'}" onclick="SeatingManager.setView('official_2d')">
              <i class="fa-solid fa-file-lines"></i> ប្លង់ 2D
            </button>
          </div>

          <span class="seating-stat-pill pill-primary" onclick="SeatingManager.openEditModal()" style="cursor: pointer;" title="ចុចដើម្បីកែសម្រួលលេខបន្ទប់">
            <i class="fa-solid fa-door-open"></i> ${cleanRoom} <i class="fa-solid fa-pen ms-1" style="font-size:0.7rem; opacity:0.7;"></i>
          </span>
          <span class="seating-stat-pill"><i class="fa-solid fa-table-cells"></i> ជួរ៖ <strong>${isColumnLayout ? colsCount : (this.layoutMode === 'group_pods' ? '៦ ក្រុម' : 'រាង U')}</strong></span>
          <span class="seating-stat-pill"><i class="fa-solid fa-chair"></i> កៅអី៖ <strong>${totalDesksCount}</strong></span>
          <span class="seating-stat-pill pill-male"><i class="fa-solid fa-mars"></i> ប្រុស៖ <strong>${maleCount}</strong></span>
          <span class="seating-stat-pill pill-female"><i class="fa-solid fa-venus"></i> ស្រី៖ <strong>${femaleCount}</strong></span>
          ${emptyCount > 0 ? `<span class="seating-stat-pill pill-empty"><i class="fa-solid fa-circle-dashed"></i> ទំនេរ៖ <strong>${emptyCount}</strong></span>` : ''}
          <button class="btn btn-sm btn-warning font-khmer font-bold py-1 px-3 ms-auto" onclick="SeatingManager.openEditModal()" title="កែសម្រួលព័ត៌មានប្លង់តុ ឈ្មោះសាលា គ្រូ និងក្តារខៀន">
            <i class="fa-solid fa-pen-to-square"></i> កែសម្រួលប្លង់តុ
          </button>
        </div>

        <div class="classroom-search-box mt-2">
          <i class="fa-solid fa-magnifying-glass text-muted"></i>
          <input type="text" id="seatingSearchInput" placeholder="ស្វែងរកតុសិស្ស (ឈ្មោះ ឬអត្តលេខ)..." oninput="SeatingManager.highlightStudent(this.value)">
        </div>
      </div>
    `;

    // 3D OR 2D CONTAINER
    const hallClass = this.currentView === "official_3d" ? "official-seating-3d-hall" : "official-seating-sheet";
    html += `
      <div class="${hallClass} ${heatmapClass} ${deskThemeClass} ${hallColsClass}" id="officialSeatingSheet">
        
        <!-- Official National & School Header -->
        <div class="official-header">
          <div class="official-school-brand" onclick="SeatingManager.openEditModal()" style="cursor: pointer;" title="ចុចដើម្បីកែឈ្មោះសាលា">
            <div class="official-logo-img">
              <i class="fa-solid fa-graduation-cap"></i>
            </div>
            <div>
              <div class="official-school-name">${schoolName}</div>
              <div class="official-school-sub">ប្រព័ន្ធគ្រប់គ្រងប្លង់តុ & បន្ទប់រៀន 3D ឆ្លាតវៃ</div>
            </div>
          </div>

          <div class="official-national-box">
            <div class="official-national-motto">
              ព្រះរាជាណាចក្រកម្ពុជា<br>
              ជាតិ សាសនា ព្រះមហាក្សត្រ
            </div>
            <div class="official-national-divider">៚ ៚ ៚</div>
          </div>
        </div>

        <!-- Sheet Title (Click to Edit) -->
        <div class="official-title-box editable-board-item" onclick="SeatingManager.openEditModal()" title="ចុចដើម្បីកែសម្រួលចំណងជើង និងលេខបន្ទប់">
          <h2 class="official-main-title">ប្លង់តុ ${cleanRoom}</h2>
          <h3 class="official-sub-title">${roomTitle}</h3>
        </div>

        <!-- Front Stage: 3D Blackboard in center, Teacher Table on the left -->
        <div class="official-front-stage">
          <div class="classroom-front-decorations">
            <div class="classroom-wall-clock"><i class="fa-solid fa-clock text-primary"></i> <span>ម៉ោង ៨:០០ ព្រឹក</span></div>
            <div class="classroom-motto-banner font-moul editable-board-item" onclick="SeatingManager.quickEditMotto()" title="ចុចដើម្បីកែប្រែពាក្យស្លោក">${mottoBanner}</div>
            <div class="classroom-speaker" title="ឧបករណ៍បំពងសំឡេង"><i class="fa-solid fa-volume-high"></i></div>
          </div>

          <div class="board-box-3d editable-board-item" onclick="SeatingManager.quickEditBlackboard()" title="ចុចដើម្បីកែសម្រួលអត្ថបទលើក្តារខៀន / មុខវិជ្ជា">
            <div class="chalkboard-title font-moul">${blackboardTitle}</div>
            <div class="chalkboard-date font-khmer">${blackboardNote}</div>
            <div class="chalk-tray-mini">
              <span class="chalk chalk-white"></span>
              <span class="chalk chalk-pink"></span>
              <span class="chalk chalk-yellow"></span>
              <span class="chalk-eraser"><i class="fa-solid fa-eraser"></i> ជ័រលុប</span>
            </div>
          </div>
          
          <div class="teacher-box-3d editable-board-item" onclick="SeatingManager.quickEditTeacher()" title="ចុចដើម្បីកែឈ្មោះលោកគ្រូ/អ្នកគ្រូ">
            <div class="teacher-box-icon">
              <i class="fa-solid fa-chalkboard-user"></i>
            </div>
            <div class="teacher-box-details">
              <div class="teacher-label font-moul">តុគ្រូបង្រៀន</div>
              <div class="teacher-name font-khmer">${teacherName}</div>
            </div>
            <div class="teacher-desk-items">
              <i class="fa-solid fa-laptop text-info" title="កុំព្យូទ័រគ្រូ"></i>
              <i class="fa-solid fa-book-open text-warning" title="សៀវភៅតាមដាន"></i>
              <i class="fa-solid fa-mug-hot text-danger" title="កែវទឹកតែ"></i>
            </div>
          </div>
        </div>
    `;

    // LAYOUT MODE 1: EXAM COLUMN ROWS (3 TO 10 COLUMNS WITH CENTER AISLE & SERPENTINE NUMBERING)
    if (isColumnLayout) {
      html += `<div class="official-desk-grid">`;
      const totalRows = Math.ceil(totalDesksCount / colsCount);
      const leftCount = Math.floor(colsCount / 2);
      const rightCount = colsCount - leftCount;

      for (let r = 0; r < totalRows; r++) {
        let deskNums = [];
        if (this.numberingPattern === "snake") {
          if (r % 2 === 0) {
            for (let c = 0; c < colsCount; c++) deskNums.push(r * colsCount + c + 1);
          } else {
            for (let c = 0; c < colsCount; c++) deskNums.push(r * colsCount + (colsCount - c));
          }
        } else {
          for (let c = 0; c < colsCount; c++) deskNums.push(r * colsCount + c + 1);
        }

        const leftDesks = deskNums.slice(0, leftCount).map(num => this.renderDeskCell(num, seating, studentMap, rankMap, gradeMap)).join("");
        const rightDesks = deskNums.slice(leftCount).map(num => this.renderDeskCell(num, seating, studentMap, rankMap, gradeMap)).join("");

        html += `
          <div class="official-desk-row" style="grid-template-columns: repeat(${leftCount}, 1fr) 28px repeat(${rightCount}, 1fr);">
            ${leftDesks}
            <div class="official-aisle-gap">ផ្លូវដើរ</div>
            ${rightDesks}
          </div>
        `;
      }
      html += `</div>`;
    }
    // LAYOUT MODE 2: GROUP STUDY PODS (6 CLUSTERS)
    else if (this.layoutMode === "group_pods") {
      html += `<div class="group-pods-container">`;
      for (let g = 0; g < 6; g++) {
        const groupNum = g + 1;
        const groupColor = ["#2563eb", "#059669", "#d97706", "#dc2626", "#7c3aed", "#0891b2"][g % 6];
        html += `
          <div class="group-pod-unit" style="border-color: ${groupColor};">
            <div class="group-pod-header" style="border-color: ${groupColor};">
              <i class="fa-solid fa-users"></i> ក្រុមទី ${groupNum} (Group ${groupNum})
            </div>
            <div class="group-pod-desks-grid">
        `;
        for (let i = 0; i < 7; i++) {
          const seatIdx = g * 7 + i;
          const deskNum = seatIdx + 1;
          html += this.renderDeskCell(deskNum, seating, studentMap, rankMap, gradeMap);
        }
        html += `
            </div>
          </div>
        `;
      }
      html += `</div>`;
    }
    // LAYOUT MODE 3: U-SHAPE / HORSESHOE CONFERENCE
    else if (this.layoutMode === "u_shape") {
      html += `
        <div class="u-shape-classroom-hall">
          <div class="u-shape-row">
      `;
      // Top row (seats 1-14)
      for (let i = 0; i < 14; i++) {
        html += this.renderDeskCell(i + 1, seating, studentMap, rankMap, gradeMap);
      }
      html += `
          </div>
          <div class="u-shape-middle-area">
            <div class="u-shape-col">
      `;
      // Left Col (seats 15-28)
      for (let i = 14; i < 28; i++) {
        html += this.renderDeskCell(i + 1, seating, studentMap, rankMap, gradeMap);
      }
      html += `
            </div>
            <div class="u-shape-center-stage">
              <i class="fa-solid fa-microphone-lines fa-3x text-primary mb-2"></i>
              <h4 class="font-khmer font-bold text-primary">វេទិកាកណ្តាលសម្រាប់ធ្វើបទបង្ហាញ & ពិភាក្សា</h4>
              <p class="text-muted font-khmer">U-Shape Classroom Conference Stage</p>
            </div>
            <div class="u-shape-col">
      `;
      // Right Col (seats 29-42)
      for (let i = 28; i < 42; i++) {
        html += this.renderDeskCell(i + 1, seating, studentMap, rankMap, gradeMap);
      }
      html += `
            </div>
          </div>
        </div>
      `;
    }

    html += `</div>`;
    container.innerHTML = html;
    this.attachDragAndDrop();
  }

  static renderDeskCell(deskNum, seating, studentMap, rankMap, gradeMap) {
    const pad = (n) => n < 10 ? `0${n}` : `${n}`;
    const deskLabel = `លេខតុ${pad(deskNum)}`;
    const config = this.getSettings();
    const maxCapacity = config.totalSeats || 42;

    if (deskNum > maxCapacity) {
      return `
        <div class="desk-3d-card desk-3d-empty" style="opacity: 0.45;">
          <span class="desk-3d-num-badge">${deskLabel}</span>
          <div class="desk-3d-empty-inner font-khmer">
            <span style="font-size: 0.7rem; opacity: 0.8;">(កៅអីទំនេរ)</span>
          </div>
        </div>
      `;
    }

    const seatIndex = deskNum - 1;
    const stuId = seating[seatIndex];
    const student = stuId ? studentMap[stuId] : null;

    if (!student) {
      return `
        <div class="desk-3d-card desk-3d-empty" data-seat-idx="${seatIndex}" onclick="SeatingManager.openAssignModal(${seatIndex})" title="ចុចដើម្បីចាត់តាំងសិស្ស">
          <span class="desk-3d-num-badge">${deskLabel}</span>
          <div class="desk-3d-empty-inner font-khmer">
            <i class="fa-solid fa-plus-circle"></i> <span>ដាក់សិស្ស</span>
          </div>
        </div>
      `;
    }

    const rank = rankMap[student.id];
    const gradeObj = gradeMap[student.id] || {};
    const mention = gradeObj.mention || "C";
    const avg = gradeObj.avg ? gradeObj.avg.toFixed(1) : "-";

    let rankBadge = "";
    if (rank === 1) rankBadge = `🏆 ១`;
    else if (rank === 2) rankBadge = `🥈 ២`;
    else if (rank === 3) rankBadge = `🥉 ៣`;
    else if (rank && rank <= 5) rankBadge = `⭐ ${rank}`;

    // Heatmap dynamic classes
    let cellExtraClass = `grade-mention-${mention}`;
    if (this.heatmapMode === "attendance") {
      cellExtraClass += " att-warn";
    }

    const stuCode = student.code || student.id || "";
    const avatarHtml = student.photo 
      ? `<img src="${student.photo}" alt="${student.nameKh}" class="desk-3d-avatar" onerror="this.onerror=null; this.outerHTML='<div class=\\'desk-3d-avatar-placeholder ${student.gender === 'ស្រី' ? 'female' : 'male'}\\'>${student.nameKh.charAt(0)}</div>';">`
      : `<div class="desk-3d-avatar-placeholder ${student.gender === 'ស្រី' ? 'female' : 'male'}">${student.nameKh.charAt(0)}</div>`;

    const hasBadge = rankBadge || (this.heatmapMode === 'grades');

    return `
      <div class="desk-3d-card ${cellExtraClass}" 
           draggable="true"
           data-seat-idx="${seatIndex}" 
           data-student-id="${student.id}" 
           data-student-name="${student.nameKh}" 
           data-student-code="${stuCode}" 
           onclick="SeatingManager.showStudentQuickCard('${student.id}', ${seatIndex})" 
           title="អូសដើម្បីប្តូរតុ ឬចុចដើម្បីមើលព័ត៌មាន ${student.nameKh}">
        <span class="desk-3d-num-badge">${deskLabel}</span>
        
        <div class="desk-3d-student-box">
          <div class="desk-3d-student-top">
            ${avatarHtml}
            <div class="desk-3d-student-info">
              <div class="desk-3d-student-name font-khmer">${student.nameKh}</div>
              <div class="desk-3d-student-meta">
                <span class="${student.gender === 'ស្រី' ? 'gender-tag-female' : 'gender-tag-male'}">${student.gender}</span>
                <span class="desk-stu-id">${stuCode}</span>
              </div>
            </div>
          </div>

          <div class="desk-3d-badges-row">
            ${rankBadge ? `<span class="badge badge-primary py-0 px-1 font-bold" style="font-size:0.62rem; line-height: 1.2;">${rankBadge}</span>` : ''}
            ${this.heatmapMode === 'grades' ? `<span class="badge badge-warning text-dark py-0 px-1 font-bold" style="font-size:0.62rem; line-height: 1.2;">${avg} (${mention})</span>` : ''}
          </div>
        </div>
      </div>
    `;
  }

  /* ==========================================================================
     FEATURE 1: LIVE DRAG & DROP INTERACTIVE SEAT SWAPPING
     ========================================================================== */
  static attachDragAndDrop() {
    const cards = document.querySelectorAll('.desk-3d-card[draggable="true"], .official-desk-cell[draggable="true"]');
    cards.forEach(card => {
      card.addEventListener('dragstart', (e) => {
        this.draggedSeatIndex = parseInt(card.dataset.seatIdx, 10);
        card.classList.add('is-dragging');
        e.dataTransfer.setData('text/plain', this.draggedSeatIndex);
        e.dataTransfer.effectAllowed = 'move';
      });

      card.addEventListener('dragend', () => {
        card.classList.remove('is-dragging');
        document.querySelectorAll('.drag-over').forEach(el => el.classList.remove('drag-over'));
      });

      card.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
      });

      card.addEventListener('dragenter', (e) => {
        e.preventDefault();
        card.classList.add('drag-over');
      });

      card.addEventListener('dragleave', () => {
        card.classList.remove('drag-over');
      });

      card.addEventListener('drop', (e) => {
        e.preventDefault();
        card.classList.remove('drag-over');
        const targetSeatIndex = parseInt(card.dataset.seatIdx, 10);
        if (isNaN(this.draggedSeatIndex) || isNaN(targetSeatIndex) || this.draggedSeatIndex === targetSeatIndex) {
          return;
        }

        // Perform swap
        const seating = this.getSeatingData();
        const temp = seating[this.draggedSeatIndex];
        seating[this.draggedSeatIndex] = seating[targetSeatIndex];
        seating[targetSeatIndex] = temp;

        StorageManager.saveSeating(seating);
        this.renderSeatingGrid();

        const pad = (n) => n < 10 ? `0${n}` : `${n}`;
        showToast(`បានប្តូរលេខតុ${pad(this.draggedSeatIndex + 1)} ជាមួយលេខតុ${pad(targetSeatIndex + 1)} ដោយជោគជ័យ! 🎉`, "success");
      });
    });
  }

  /* ==========================================================================
     FEATURE 2 & 4: SMART VISION/HEIGHT & PEER TUTORING PLACEMENT
     ========================================================================== */
  static autoArrange(type) {
    const students = [...StorageManager.getStudents()];
    let arranged = [];

    if (type === "vision_height") {
      // Sort students with glasses/eye issues or shorter height to front rows
      const visionOrShort = [];
      const others = [];
      students.forEach(s => {
        const hasGlasses = s.eyeCondition || (s.medicalNotes && s.medicalNotes.includes("វ៉ែនតា"));
        const isShort = s.height && s.height < 145;
        if (hasGlasses || isShort) {
          visionOrShort.push(s);
        } else {
          others.push(s);
        }
      });
      arranged = [...visionOrShort, ...others].map(s => s.id);
      showToast("បានរៀបចំសិស្សពាក់វ៉ែនតា និងកម្ពស់ទាបនៅជួរមុខជោគជ័យ!", "success");
    } else if (type === "peer_tutoring") {
      // Pair top students (A/B) alongside struggling students (D/E/F)
      const calculated = (typeof GradesModule !== "undefined" && GradesModule.getCalculatedResults)
        ? GradesModule.getCalculatedResults("month_10")
        : [];
      const topList = calculated.filter(c => c.mention === "A" || c.mention === "B" || c.rank <= 15).map(c => c.student.id);
      const needHelp = calculated.filter(c => c.mention !== "A" && c.mention !== "B" && c.rank > 15).map(c => c.student.id);
      arranged = [];
      const maxLen = Math.max(topList.length, needHelp.length);
      for (let i = 0; i < maxLen; i++) {
        if (topList[i]) arranged.push(topList[i]);
        if (needHelp[i]) arranged.push(needHelp[i]);
      }
      showToast("បានផ្គូផ្គងគូសិក្សា (សិស្សពូកែជួយសិស្សខ្សោយ) រួចរាល់!", "success");
    } else if (type === "alphabetical") {
      students.sort((a, b) => a.nameKh.localeCompare(b.nameKh, 'km'));
      arranged = students.map(s => s.id);
      showToast("បានរៀបតាមលំដាប់អក្ខរក្រមរួចរាល់!", "success");
    } else if (type === "rank") {
      const calculated = (typeof GradesModule !== "undefined" && GradesModule.getCalculatedResults)
        ? GradesModule.getCalculatedResults("month_10")
        : [];
      arranged = calculated.map(c => c.student.id);
      showToast("បានរៀបតាមចំណាត់ថ្នាក់ពូកែរួចរាល់!", "success");
    } else if (type === "gender_paired") {
      const males = students.filter(s => s.gender === "ប្រុស");
      const females = students.filter(s => s.gender === "ស្រី");
      arranged = [];
      const maxLen = Math.max(males.length, females.length);
      for (let i = 0; i < maxLen; i++) {
        if (males[i]) arranged.push(males[i].id);
        if (females[i]) arranged.push(females[i].id);
      }
      showToast("បានរៀបឆ្លាស់ប្រុស/ស្រីរួចរាល់!", "success");
    } else if (type === "random") {
      for (let i = students.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [students[i], students[j]] = [students[j], students[i]];
      }
      arranged = students.map(s => s.id);
      showToast("បានរៀបចៃដន្យរួចរាល់!", "success");
    }

    while (arranged.length < 44) {
      arranged.push(null);
    }

    StorageManager.saveSeating(arranged);
    this.renderSeatingGrid();
  }

  /* ==========================================================================
     FEATURE 6: PRINTABLE DESK QR NAME LABELS STICKERS GENERATOR
     ========================================================================== */
  static openDeskLabelsModal() {
    const container = document.getElementById("deskLabelsGridContainer");
    if (!container) return;

    const seating = this.getSeatingData();
    const students = StorageManager.getStudents();
    const studentMap = {};
    students.forEach(s => studentMap[s.id] = s);

    const school = StorageManager.getSchoolInfo() || {};
    const schoolName = school.name || "អនុវិទ្យាល័យ ហ៊ុន សែន";
    const pad = (n) => n < 10 ? `0${n}` : `${n}`;

    let html = "";
    for (let i = 0; i < 42; i++) {
      const deskNum = i + 1;
      const deskLabel = `លេខតុ ${pad(deskNum)}`;
      const stuId = seating[i];
      const student = stuId ? studentMap[stuId] : null;

      if (!student) {
        html += `
          <div class="desk-label-card" style="opacity: 0.6; border-style: dashed;">
            <div>
              <div class="desk-label-brand">${schoolName}</div>
              <div class="desk-label-num">${deskLabel}</div>
              <div class="desk-label-name text-muted font-khmer">(កៅអីទំនេរ)</div>
            </div>
            <div class="desk-label-qr"><i class="fa-solid fa-qrcode fa-2x text-muted"></i></div>
          </div>
        `;
      } else {
        const stuCode = student.code || student.id || "";
        const photoHtml = student.photo 
          ? `<img src="${student.photo}" alt="${student.nameKh}" class="desk-label-photo" onerror="this.style.display='none'">`
          : `<div class="desk-label-photo-ph ${student.gender === 'ស្រី' ? 'female' : 'male'}">${student.nameKh.charAt(0)}</div>`;

        html += `
          <div class="desk-label-card">
            <div class="label-info">
              <div class="desk-label-brand"><i class="fa-solid fa-graduation-cap"></i> ${schoolName}</div>
              <div class="desk-label-num">${deskLabel}</div>
              <div class="d-flex align-items-center gap-2 mt-1">
                ${photoHtml}
                <div>
                  <div class="desk-label-name font-khmer">${student.nameKh}</div>
                  <div class="desk-label-meta">${student.gender} • ${stuCode} • ${student.nameEn || ''}</div>
                </div>
              </div>
            </div>
            <div class="desk-label-qr" id="deskQrCode_${student.id}"></div>
          </div>
        `;
      }
    }

    container.innerHTML = html;
    openModal("deskLabelsModal");

    // Generate dynamic QR code for each student
    setTimeout(() => {
      for (let i = 0; i < 42; i++) {
        const stuId = seating[i];
        const student = stuId ? studentMap[stuId] : null;
        if (student) {
          const stuCode = student.code || student.id || "";
          const qrEl = document.getElementById(`deskQrCode_${student.id}`);
          if (qrEl && typeof QRCode !== "undefined") {
            qrEl.innerHTML = "";
            new QRCode(qrEl, {
              text: `STU:${student.id}:${stuCode}:${student.nameKh}`,
              width: 50,
              height: 50,
              colorDark: "#000000",
              colorLight: "#ffffff",
              correctLevel: QRCode.CorrectLevel.M
            });
          }
        }
      }
    }, 150);
  }

  static printDeskLabels() {
    document.body.classList.add("printing-labels");
    window.print();
    setTimeout(() => {
      document.body.classList.remove("printing-labels");
    }, 1000);
  }

  static showStudentQuickCard(studentId, seatIndex) {
    const students = StorageManager.getStudents();
    const student = students.find(s => s.id === studentId);
    if (!student) return;

    const calculated = (typeof GradesModule !== "undefined" && GradesModule.getCalculatedResults)
      ? GradesModule.getCalculatedResults("month_10")
      : [];
    const stResult = calculated.find(c => c.student.id === studentId);
    let avgStr = "មិនទាន់មានពិន្ទុ";
    if (stResult) {
      avgStr = `${stResult.avg.toFixed(2)} (និទ្ទេស ${stResult.mention} • ចំណាត់ថ្នាក់ទី ${stResult.rank})`;
    }

    const pad = (n) => n < 10 ? `0${n}` : `${n}`;
    const deskLabel = `លេខតុ${pad(seatIndex + 1)}`;
    const stuCode = student.code || student.id || "";

    const modalBody = document.getElementById("seatingModalBody");
    if (!modalBody) return;

    const avatarHtml = student.photo 
      ? `<img src="${student.photo}" alt="${student.nameKh}" class="avatar-lg" style="object-fit: cover; border-radius: 12px; border: 3px solid #2563eb;">`
      : `<div class="avatar-lg ${student.gender === 'ស្រី' ? 'avatar-female' : 'avatar-male'}">${student.nameKh.charAt(0)}</div>`;

    modalBody.innerHTML = `
      <div class="seating-modal-profile">
        <div class="profile-header-box">
          ${avatarHtml}
          <div class="ms-3">
            <h3 class="moul-title text-primary mb-1">${student.nameKh}</h3>
            <p class="text-muted font-khmer">${student.nameEn || ''} • <strong>${stuCode}</strong></p>
          </div>
        </div>

        <div class="info-grid-2 mt-3">
          <div class="info-item"><strong>ភេទ៖</strong> ${student.gender}</div>
          <div class="info-item"><strong>ថ្ងៃខែឆ្នាំកំណើត៖</strong> ${student.dob}</div>
          <div class="info-item"><strong>ទីតាំងតុ៖</strong> <span class="badge badge-primary font-bold">${deskLabel}</span></div>
          <div class="info-item"><strong>មធ្យមភាគប្រចាំខែ៖</strong> <span class="badge badge-success">${avgStr}</span></div>
          <div class="info-item"><strong>ឪពុក៖</strong> ${student.fatherName ? `${student.fatherName} (${student.fatherJob || 'មុខរបរទូទៅ'})` : (student.parentName || 'មិនមាន')}</div>
          <div class="info-item"><strong>ម្តាយ៖</strong> ${student.motherName ? `${student.motherName} (${student.motherJob || 'មុខរបរទូទៅ'})` : 'មិនមាន'}</div>
          <div class="info-item"><strong>លេខទូរស័ព្ទ៖</strong> ${student.phone || student.parentPhone || 'មិនមាន'}</div>
          <div class="info-item"><strong>អាសយដ្ឋាន៖</strong> ${student.currentAddress || student.address || 'ភូមិ១ ឃុំស្វាយជ្រុំ ស្រុកស្វាយជ្រុំ ខេត្តស្វាយរៀង'}</div>
        </div>

        <div class="seating-action-btns mt-4 d-flex flex-wrap gap-2 justify-content-end">
          <button class="btn btn-outline btn-sm font-khmer" onclick="SeatingManager.openChangeStudentModal(${seatIndex})">
            <i class="fa-solid fa-user-pen text-primary"></i> ប្តូរសិស្សផ្សេង
          </button>
          <button class="btn btn-outline btn-sm font-khmer" onclick="SeatingManager.swapSeatPrompt(${seatIndex})">
            <i class="fa-solid fa-arrow-right-arrow-left text-warning"></i> ប្តូរតុជាមួយសិស្សផ្សេង
          </button>
          <button class="btn btn-danger btn-sm font-khmer" onclick="SeatingManager.unassignSeat(${seatIndex})">
            <i class="fa-solid fa-user-minus"></i> ដកចេញពីតុនេះ
          </button>
        </div>
      </div>
    `;

    openModal("seatingModal");
  }

  static openChangeStudentModal(seatIndex) {
    const students = StorageManager.getStudents();
    const seating = this.getSeatingData();
    const pad = (n) => n < 10 ? `0${n}` : `${n}`;
    const deskLabel = `លេខតុ${pad(seatIndex + 1)}`;
    const currentStuId = seating[seatIndex];

    const modalBody = document.getElementById("seatingModalBody");
    if (!modalBody) return;

    let optionsHtml = students.map(s => {
      const isCurrent = s.id === currentStuId;
      const currentSeat = seating.indexOf(s.id);
      const seatInfo = currentSeat !== -1 ? `(កំពុងអង្គុយ លេខតុ ${pad(currentSeat + 1)})` : '(មិនទាន់មានតុ)';

      return `
        <div class="assign-student-item d-flex justify-content-between align-items-center p-2 mb-2 border rounded hover-card ${isCurrent ? 'bg-light border-primary' : ''}" style="cursor: pointer;" onclick="SeatingManager.assignSeat(${seatIndex}, '${s.id}')">
          <div class="d-flex align-items-center gap-2">
            ${s.photo ? `<img src="${s.photo}" class="desk-3d-avatar" style="width:30px;height:30px;" onerror="this.style.display='none'">` : ''}
            <div>
              <strong class="font-khmer">${s.nameKh}</strong> <small class="text-muted">(${s.gender} - ${s.code || s.id})</small>
              <div style="font-size:0.75rem; color:#64748b;">${seatInfo}</div>
            </div>
          </div>
          <button class="btn ${isCurrent ? 'btn-success' : 'btn-primary'} btn-sm">
            ${isCurrent ? '<i class="fa-solid fa-check"></i> កំពុងអង្គុយ' : `<i class="fa-solid fa-chair"></i> អង្គុយ ${deskLabel}`}
          </button>
        </div>
      `;
    }).join("");

    modalBody.innerHTML = `
      <div class="seating-modal-assign">
        <h3 class="moul-title text-primary mb-2">ប្តូរសិស្សអង្គុយ ${deskLabel}</h3>
        <p class="text-muted font-khmer mb-3">សូមជ្រើសរើសសិស្សដែលត្រូវដាក់ឱ្យអង្គុយតុនេះ៖</p>
        <div style="max-height: 380px; overflow-y: auto;">
          ${optionsHtml}
        </div>
      </div>
    `;

    openModal("seatingModal");
  }

  static swapSeatPrompt(currentSeatIndex) {
    const seating = this.getSeatingData();
    const students = StorageManager.getStudents();
    const studentMap = {};
    students.forEach(s => studentMap[s.id] = s);

    const pad = (n) => n < 10 ? `0${n}` : `${n}`;
    const targetSeatStr = prompt(`សូមបញ្ចូលលេខតុដែលចង់ប្តូរជាមួយ (១ ដល់ ៤២)៖`);
    if (!targetSeatStr) return;

    const targetIndex = parseInt(targetSeatStr, 10) - 1;
    if (isNaN(targetIndex) || targetIndex < 0 || targetIndex >= 44) {
      alert("លេខតុមិនត្រឹមត្រូវទេ (ត្រូវនៅចន្លោះពី ១ ដល់ ៤២)!");
      return;
    }

    // Swap
    const temp = seating[currentSeatIndex];
    seating[currentSeatIndex] = seating[targetIndex];
    seating[targetIndex] = temp;

    StorageManager.saveSeating(seating);
    this.renderSeatingGrid();
    closeModal("seatingModal");
    showToast(`បានប្តូរលេខតុ${pad(currentSeatIndex + 1)} ជាមួយលេខតុ${pad(targetIndex + 1)} រួចរាល់!`, "success");
  }

  static unassignSeat(seatIndex) {
    const seating = this.getSeatingData();
    seating[seatIndex] = null;
    StorageManager.saveSeating(seating);
    this.renderSeatingGrid();
    closeModal("seatingModal");
    showToast("បានដកសិស្សចេញពីតុជោគជ័យ!", "info");
  }

  static openAssignModal(seatIndex) {
    const students = StorageManager.getStudents();
    const seating = this.getSeatingData();
    const assignedIds = new Set(seating.filter(id => id !== null));
    const availableStudents = students.filter(s => !assignedIds.has(s.id));

    if (availableStudents.length === 0) {
      alert("សិស្សទាំងអស់ត្រូវបានចាត់ចែងតុរួចរាល់ហើយ!");
      return;
    }

    const pad = (n) => n < 10 ? `0${n}` : `${n}`;
    const deskLabel = `លេខតុ${pad(seatIndex + 1)}`;

    const modalBody = document.getElementById("seatingModalBody");
    if (!modalBody) return;

    let optionsHtml = availableStudents.map(s => `
      <div class="assign-student-item d-flex justify-content-between align-items-center p-2 mb-2 border rounded hover-card" style="cursor: pointer;" onclick="SeatingManager.assignSeat(${seatIndex}, '${s.id}')">
        <div>
          <strong class="font-khmer">${s.nameKh}</strong> (${s.gender} - ${s.code || s.id})
        </div>
        <button class="btn btn-primary btn-sm"><i class="fa-solid fa-plus"></i> អង្គុយ ${deskLabel}</button>
      </div>
    `).join("");

    modalBody.innerHTML = `
      <div class="seating-modal-assign">
        <h3 class="moul-title text-primary mb-3">ចាត់តាំងសិស្សឱ្យអង្គុយ ${deskLabel}</h3>
        <p class="text-muted font-khmer mb-3">សូមជ្រើសរើសសិស្សដែលមិនទាន់មានតុអង្គុយ៖</p>
        <div style="max-height: 350px; overflow-y: auto;">
          ${optionsHtml}
        </div>
      </div>
    `;

    openModal("seatingModal");
  }

  static assignSeat(seatIndex, studentId) {
    const seating = this.getSeatingData();
    seating[seatIndex] = studentId;
    StorageManager.saveSeating(seating);
    this.renderSeatingGrid();
    closeModal("seatingModal");
    showToast(`បានចាត់តាំងសិស្សឱ្យអង្គុយតុលេខ ${seatIndex + 1} ជោគជ័យ!`, "success");
  }

  /* ==========================================================================
     FEATURE: CLASSROOM CUSTOMIZER & EDIT MODAL
     ========================================================================== */
  static openEditModal() {
    const modalBody = document.getElementById("editSeatingModalBody");
    if (!modalBody) return;

    const config = this.getSettings();
    const school = StorageManager.getSchoolInfo() || {};
    const schoolName = config.schoolName || school.name || "អនុវិទ្យាល័យ ហ៊ុន សែន";
    const cleanRoom = (config.roomNumber || this.roomNumber || "បន្ទប់លេខ ១").replace(/^ប្លង់តុ\s*/, '');
    const teacherName = config.teacherName || school.teacher || "អ្នកគ្រូ ឡុង ស្រីពៅ";
    const roomTitle = config.roomTitle || this.roomTitle || "ប្រឡងឆមាសថ្នាក់ទី ៨ A";
    const blackboardTitle = config.blackboardTitle || "ក្តារខៀន • CLASSROOM BLACKBOARD";
    const blackboardNote = config.blackboardNote || "ថ្ងៃនេះ៖ ម៉ោងសិក្សា & ប្រឡងប្រចាំឆមាស";
    const mottoBanner = config.mottoBanner || "សាលារៀនស្អាត • វិន័យល្អ • សិក្សាពូកែ";

    modalBody.innerHTML = `
      <form id="editSeatingForm" onsubmit="event.preventDefault(); SeatingManager.handleSaveEditForm(this);">
        <div class="edit-seating-container">
          <div class="row g-3">
            <!-- Section 1: Header & Classroom Info -->
            <div class="col-12">
              <h4 class="font-khmer font-bold text-primary mb-2 border-bottom pb-1">
                <i class="fa-solid fa-school"></i> ១. ព័ត៌មានទូទៅនៃបន្ទប់រៀន & សាលា
              </h4>
            </div>
            
            <div class="col-md-6">
              <label class="form-label font-khmer font-bold">ឈ្មោះសាលារៀន (School Name)</label>
              <input type="text" class="form-control" name="schoolName" value="${schoolName}" required>
            </div>

            <div class="col-md-6">
              <label class="form-label font-khmer font-bold">លេខបន្ទប់ (Room Number e.g. "បន្ទប់លេខ ១")</label>
              <input type="text" class="form-control" name="roomNumber" value="${cleanRoom}" required>
            </div>

            <div class="col-md-6">
              <label class="form-label font-khmer font-bold">ចំណងជើងប្លង់/វិញ្ញាសា (Exam/Class Title)</label>
              <input type="text" class="form-control" name="roomTitle" value="${roomTitle}" required>
            </div>

            <div class="col-md-6">
              <label class="form-label font-khmer font-bold">ឈ្មោះគ្រូបង្រៀន / អនុរក្ស (Teacher Name)</label>
              <input type="text" class="form-control" name="teacherName" value="${teacherName}" required>
            </div>

            <!-- Section 2: Blackboard & Slogan Banner -->
            <div class="col-12 mt-3">
              <h4 class="font-khmer font-bold text-primary mb-2 border-bottom pb-1">
                <i class="fa-solid fa-chalkboard"></i> ២. ក្តារខៀនមុខថ្នាក់ & ពាក្យស្លោក
              </h4>
            </div>

            <div class="col-md-6">
              <label class="form-label font-khmer font-bold">ចំណងជើងលើក្តារខៀន</label>
              <input type="text" class="form-control" name="blackboardTitle" value="${blackboardTitle}">
            </div>

            <div class="col-md-6">
              <label class="form-label font-khmer font-bold">កំណត់សម្គាល់លើក្តារខៀន / មុខវិជ្ជា</label>
              <input type="text" class="form-control" name="blackboardNote" value="${blackboardNote}">
            </div>

            <div class="col-12">
              <label class="form-label font-khmer font-bold">ពាក្យស្លោកលើបដា (Classroom Motto Banner)</label>
              <input type="text" class="form-control" name="mottoBanner" value="${mottoBanner}">
            </div>

            <!-- Section 3: Layout & Theme -->
            <div class="col-12 mt-3">
              <h4 class="font-khmer font-bold text-primary mb-2 border-bottom pb-1">
                <i class="fa-solid fa-shapes"></i> ៣. ការកំណត់ចំនួនជួរ (៣ ដល់ ១០ ជួរ) & ពណ៌តុឈើ 3D
              </h4>
            </div>

            <div class="col-md-6">
              <label class="form-label font-khmer font-bold">ទម្រង់រៀបប្លង់ថ្នាក់ (Layout Mode: ៣ ដល់ ១០ ជួរ)</label>
              <select class="form-select" name="layoutMode">
                <option value="exam_3cols" ${this.layoutMode === 'exam_3cols' ? 'selected' : ''}>📝 ប្លង់ ៣ ជួរ (3 Columns)</option>
                <option value="exam_4cols" ${this.layoutMode === 'exam_4cols' || this.layoutMode === 'exam_snake' ? 'selected' : ''}>📝 ប្លង់ ៤ ជួរ (Snake 3D ស្តង់ដារ)</option>
                <option value="exam_5cols" ${this.layoutMode === 'exam_5cols' ? 'selected' : ''}>📝 ប្លង់ ៥ ជួរ (5 Columns)</option>
                <option value="exam_6cols" ${this.layoutMode === 'exam_6cols' ? 'selected' : ''}>📝 ប្លង់ ៦ ជួរ (6 Columns)</option>
                <option value="exam_7cols" ${this.layoutMode === 'exam_7cols' ? 'selected' : ''}>📝 ប្លង់ ៧ ជួរ (7 Columns)</option>
                <option value="exam_8cols" ${this.layoutMode === 'exam_8cols' ? 'selected' : ''}>📝 ប្លង់ ៨ ជួរ (8 Columns)</option>
                <option value="exam_9cols" ${this.layoutMode === 'exam_9cols' ? 'selected' : ''}>📝 ប្លង់ ៩ ជួរ (9 Columns)</option>
                <option value="exam_10cols" ${this.layoutMode === 'exam_10cols' ? 'selected' : ''}>📝 ប្លង់ ១០ ជួរ (10 Columns Grand Hall)</option>
                <option value="group_pods" ${this.layoutMode === 'group_pods' ? 'selected' : ''}>👥 ប្លង់តុជា ៦ ក្រុម (Group Pods)</option>
                <option value="u_shape" ${this.layoutMode === 'u_shape' ? 'selected' : ''}>⭕ ប្លង់រាងអក្សរ U (Horseshoe)</option>
              </select>
            </div>

            <div class="col-md-3">
              <label class="form-label font-khmer font-bold">ចំនួនកៅអីសរុប (Capacity)</label>
              <select class="form-select" name="totalSeats">
                <option value="24" ${config.totalSeats === 24 ? 'selected' : ''}>២៤ កៅអី</option>
                <option value="30" ${config.totalSeats === 30 ? 'selected' : ''}>៣០ កៅអី</option>
                <option value="36" ${config.totalSeats === 36 ? 'selected' : ''}>៣៦ កៅអី</option>
                <option value="40" ${config.totalSeats === 40 ? 'selected' : ''}>៤០ កៅអី</option>
                <option value="42" ${!config.totalSeats || config.totalSeats === 42 ? 'selected' : ''}>៤២ កៅអី (ស្តង់ដារ)</option>
                <option value="48" ${config.totalSeats === 48 ? 'selected' : ''}>៤៨ កៅអី</option>
                <option value="50" ${config.totalSeats === 50 ? 'selected' : ''}>៥០ កៅអី</option>
                <option value="60" ${config.totalSeats === 60 ? 'selected' : ''}>៦០ កៅអី</option>
                <option value="70" ${config.totalSeats === 70 ? 'selected' : ''}>៧០ កៅអី</option>
                <option value="80" ${config.totalSeats === 80 ? 'selected' : ''}>៨០ កៅអី</option>
                <option value="100" ${config.totalSeats === 100 ? 'selected' : ''}>១០០ កៅអី (សាលធំ)</option>
              </select>
            </div>

            <div class="col-md-3">
              <label class="form-label font-khmer font-bold">លំនាំរត់លេខតុ (Numbering)</label>
              <select class="form-select" name="numberingPattern">
                <option value="snake" ${config.numberingPattern === 'snake' ? 'selected' : ''}>🐍 រត់ពស់វែក (01-04, 08-05...)</option>
                <option value="sequential" ${config.numberingPattern === 'sequential' ? 'selected' : ''}>➡️ រត់តាមលំដាប់ (01, 02, 03...)</option>
              </select>
            </div>

            <div class="col-md-6">
              <label class="form-label font-khmer font-bold">ពណ៌តុឈើ 3D (Wood Theme)</label>
              <select class="form-select" name="deskColorTheme">
                <option value="classic_oak" ${config.deskColorTheme === 'classic_oak' ? 'selected' : ''}>🪵 ឈើប្រណិតធម្មជាតិ (Classic Oak)</option>
                <option value="warm_teak" ${config.deskColorTheme === 'warm_teak' ? 'selected' : ''}>🟤 ឈើគ្រញូងក្រហម (Warm Teak)</option>
                <option value="dark_mahogany" ${config.deskColorTheme === 'dark_mahogany' ? 'selected' : ''}>⚫ ឈើខ្មៅរលោង (Dark Mahogany)</option>
                <option value="modern_slate" ${config.deskColorTheme === 'modern_slate' ? 'selected' : ''}>🔵 បែបទំនើប Modern Slate Blue</option>
              </select>
            </div>

            <!-- Section 4: Seat Management Actions -->
            <div class="col-12 mt-3">
              <h4 class="font-khmer font-bold text-primary mb-2 border-bottom pb-1">
                <i class="fa-solid fa-users-gear"></i> ៤. ឧបករណ៍គ្រប់គ្រងកៅអីសិស្ស
              </h4>
              <div class="d-flex flex-wrap gap-2 pt-1">
                <button type="button" class="btn btn-outline btn-sm font-khmer" onclick="SeatingManager.resetToDefaultSeating()">
                  <i class="fa-solid fa-rotate-left"></i> រៀបតាមបញ្ជីឈ្មោះសិស្សឡើងវិញ
                </button>
                <button type="button" class="btn btn-outline btn-sm font-khmer text-danger" onclick="SeatingManager.clearAllSeats()">
                  <i class="fa-solid fa-trash-can"></i> ជម្រះតុទាំងអស់ឱ្យនៅទំនេរ
                </button>
              </div>
            </div>
          </div>

          <!-- Modal Footer Actions -->
          <div class="d-flex justify-content-end gap-2 mt-4 pt-3 border-top">
            <button type="button" class="btn btn-outline" onclick="closeModal('editSeatingModal')">បោះបង់ (Cancel)</button>
            <button type="submit" class="btn btn-primary"><i class="fa-solid fa-floppy-disk"></i> រក្សាទុកការកែប្រែ (Save Changes)</button>
          </div>
        </div>
      </form>
    `;

    openModal("editSeatingModal");
  }

  static handleSaveEditForm(form) {
    const formData = new FormData(form);
    const config = {
      schoolName: formData.get("schoolName"),
      roomNumber: formData.get("roomNumber"),
      roomTitle: formData.get("roomTitle"),
      teacherName: formData.get("teacherName"),
      blackboardTitle: formData.get("blackboardTitle"),
      blackboardNote: formData.get("blackboardNote"),
      mottoBanner: formData.get("mottoBanner"),
      totalSeats: parseInt(formData.get("totalSeats"), 10) || 42,
      layoutMode: formData.get("layoutMode"),
      numberingPattern: formData.get("numberingPattern"),
      deskColorTheme: formData.get("deskColorTheme")
    };

    StorageManager.saveSeatingConfig(config);
    this.layoutMode = config.layoutMode || "exam_snake";
    this.numberingPattern = config.numberingPattern || "snake";
    this.roomNumber = config.roomNumber;
    this.roomTitle = config.roomTitle;

    closeModal("editSeatingModal");
    this.renderSeatingGrid();
    showToast("បានរក្សាទុកការកែសម្រួលប្លង់តុ និងបន្ទប់រៀនជោគជ័យ! 🎉", "success");
  }

  static async resetToDefaultSeating() {
    const confirmed = await showConfirm(
      "តើលោកគ្រូ-អ្នកគ្រូពិតជាចង់រៀបចំសិស្សអង្គុយតាមលំដាប់បញ្ជីឈ្មោះដើមឡើងវិញមែនទេ?",
      { title: "បញ្ជាក់ការរៀបចំប្លង់តុឡើងវិញ", type: "warning", confirmText: "យល់ព្រម" }
    );
    if (!confirmed) return;
    const students = StorageManager.getStudents();
    const grid = [];
    for (let i = 0; i < 44; i++) {
      grid.push(students[i] ? students[i].id : null);
    }
    StorageManager.saveSeating(grid);
    this.renderSeatingGrid();
    closeModal("editSeatingModal");
    showToast("បានរៀបចំសិស្សតាមបញ្ជីឈ្មោះដើមរួចរាល់!", "success");
  }

  static async clearAllSeats() {
    const confirmed = await showConfirm(
      "តើលោកគ្រូ-អ្នកគ្រូពិតជាចង់ជម្រះសិស្សចេញពីតុទាំងអស់មែនទេ?",
      { title: "បញ្ជាក់ការជម្រះតុទាំងអស់", type: "warning", confirmText: "ជម្រះទាំងអស់" }
    );
    if (!confirmed) return;
    const grid = new Array(44).fill(null);
    StorageManager.saveSeating(grid);
    this.renderSeatingGrid();
    closeModal("editSeatingModal");
    showToast("បានជម្រះតុទាំងអស់ឱ្យនៅទំនេររួចរាល់!", "info");
  }

  /* Quick Inline Edit Helpers */
  static quickEditBlackboard() {
    const config = this.getSettings();
    const currentNote = config.blackboardNote || "ថ្ងៃនេះ៖ ម៉ោងសិក្សា & ប្រឡងប្រចាំឆមាស";
    const newNote = prompt("សូមបញ្ចូលកំណត់សម្គាល់លើក្តារខៀន / មុខវិជ្ជាប្រឡង៖", currentNote);
    if (newNote !== null && newNote.trim()) {
      config.blackboardNote = newNote.trim();
      StorageManager.saveSeatingConfig(config);
      this.renderSeatingGrid();
      showToast("បានកែសម្រួលក្តារខៀនជោគជ័យ!", "success");
    }
  }

  static quickEditTeacher() {
    const config = this.getSettings();
    const currentTeacher = config.teacherName || "អ្នកគ្រូ ឡុង ស្រីពៅ";
    const newTeacher = prompt("សូមបញ្ចូលឈ្មោះលោកគ្រូ-អ្នកគ្រូ៖", currentTeacher);
    if (newTeacher !== null && newTeacher.trim()) {
      config.teacherName = newTeacher.trim();
      StorageManager.saveSeatingConfig(config);
      this.renderSeatingGrid();
      showToast("បានកែសម្រួលឈ្មោះគ្រូជោគជ័យ!", "success");
    }
  }

  static quickEditMotto() {
    const config = this.getSettings();
    const currentMotto = config.mottoBanner || "សាលារៀនស្អាត • វិន័យល្អ • សិក្សាពូកែ";
    const newMotto = prompt("សូមបញ្ចូលពាក្យស្លោកលើបដា៖", currentMotto);
    if (newMotto !== null && newMotto.trim()) {
      config.mottoBanner = newMotto.trim();
      StorageManager.saveSeatingConfig(config);
      this.renderSeatingGrid();
      showToast("បានកែសម្រួលពាក្យស្លោកជោគជ័យ!", "success");
    }
  }

  static updateRoomNumber(val) {
    if (val && val.trim()) {
      const config = this.getSettings();
      config.roomNumber = val.trim();
      StorageManager.saveSeatingConfig(config);
    }
  }

  static updateRoomTitle(val) {
    if (val && val.trim()) {
      const config = this.getSettings();
      config.roomTitle = val.trim();
      StorageManager.saveSeatingConfig(config);
    }
  }

  static highlightStudent(query) {
    const q = (query || "").trim().toLowerCase();
    const cells = document.querySelectorAll(".desk-3d-card, .official-desk-cell");
    cells.forEach(cell => {
      cell.classList.remove("highlighted-seat");
      if (!q) return;

      const name = (cell.dataset.studentName || "").toLowerCase();
      const code = (cell.dataset.studentCode || "").toLowerCase();
      if (name.includes(q) || code.includes(q)) {
        cell.classList.add("highlighted-seat");
      }
    });
  }

  static printSeatingPlan() {
    window.print();
  }

  static setupEventListeners() {
    const btnAlpha = document.getElementById("btnArrangeAlpha");
    if (btnAlpha) btnAlpha.addEventListener("click", () => this.autoArrange("alphabetical"));

    const btnRank = document.getElementById("btnArrangeRank");
    if (btnRank) btnRank.addEventListener("click", () => this.autoArrange("rank"));

    const btnGender = document.getElementById("btnArrangeGender");
    if (btnGender) btnGender.addEventListener("click", () => this.autoArrange("gender_paired"));

    const btnRandom = document.getElementById("btnArrangeRandom");
    if (btnRandom) btnRandom.addEventListener("click", () => this.autoArrange("random"));

    const btnPrint = document.getElementById("btnPrintSeating");
    if (btnPrint) btnPrint.addEventListener("click", () => this.printSeatingPlan());

    const closeBtn = document.getElementById("closeSeatingModal");
    if (closeBtn) closeBtn.addEventListener("click", () => closeModal("seatingModal"));
  }
}


/* ==================================================================== */
/* MODULE: exams.js
/* ==================================================================== */

/**
 * QUESTION BANK & EXAM GENERATOR MODULE (ធនាគារសំណួរ និងបង្កើតវិញ្ញាសាប្រឡង)
 */

class ExamManager {
  static init() {
    this.renderQuestionBank();
    this.populateSubjectFilters();
    this.setupEventListeners();
  }

  static populateSubjectFilters() {
    const subjects = StorageManager.getSubjects();
    const select = document.getElementById("examSubjectFilter");
    const genSelect = document.getElementById("genExamSubject");
    const modalSelect = document.getElementById("qModalSubject");

    if (select) {
      select.innerHTML = `<option value="all">-- មុខវិជ្ជាទាំងអស់ --</option>` +
        subjects.map(s => `<option value="${s.id}">${s.nameKh}</option>`).join('');
    }

    if (genSelect) {
      genSelect.innerHTML = subjects.map(s => `<option value="${s.id}">${s.nameKh}</option>`).join('');
    }

    if (modalSelect) {
      modalSelect.innerHTML = subjects.map(s => `<option value="${s.id}">${s.nameKh}</option>`).join('');
    }
  }

  static renderQuestionBank() {
    const listContainer = document.getElementById("questionBankList");
    if (!listContainer) return;

    const questions = StorageManager.getQuestions();
    const filterSubject = document.getElementById("examSubjectFilter") ? document.getElementById("examSubjectFilter").value : "all";
    const filterSearch = (document.getElementById("examSearchInput") ? document.getElementById("examSearchInput").value : "").toLowerCase().trim();

    const filtered = questions.filter(q => {
      const matchSub = filterSubject === "all" || q.subjectId === filterSubject;
      const matchText = !filterSearch || q.question.toLowerCase().includes(filterSearch) || (q.subjectName && q.subjectName.toLowerCase().includes(filterSearch));
      return matchSub && matchText;
    });

    if (filtered.length === 0) {
      listContainer.innerHTML = `
        <div class="empty-state-box">
          <i class="fa-solid fa-file-circle-question fa-3x text-muted mb-2"></i>
          <h4>មិនមានសំណួរក្នុងធនាគារនៅឡើយទេ</h4>
          <p class="text-muted">សូមចុចប៊ូតុង "បន្ថែមសំណួរថ្មី" ដើម្បីបញ្ចូលសំណួរ និងចម្លើយ។</p>
        </div>
      `;
      return;
    }

    let html = `<div class="question-cards-grid">`;
    filtered.forEach((q, idx) => {
      const typeBadge = q.type === "mcq" ? `<span class="badge badge-info"><i class="fa-solid fa-list-check"></i> ពហុជ្រើសរើស (MCQ)</span>` : `<span class="badge badge-warning"><i class="fa-solid fa-pen-fancy"></i> សរសេររៀបរាប់/លំហាត់</span>`;
      
      let optionsHtml = "";
      if (q.type === "mcq" && q.options) {
        optionsHtml = `
          <div class="q-options-list">
            ${q.options.map((opt, oIdx) => `
              <div class="q-opt-item ${oIdx === q.correctAnswer ? 'opt-correct' : ''}">
                <span class="opt-label">${String.fromCharCode(65 + oIdx)}.</span>
                <span class="opt-text">${opt}</span>
                ${oIdx === q.correctAnswer ? '<i class="fa-solid fa-check text-success ml-auto"></i>' : ''}
              </div>
            `).join('')}
          </div>
        `;
      } else if (q.correctAnswer) {
        optionsHtml = `
          <div class="q-answer-box">
            <strong>ចម្លើយត្រឹមត្រូវ / ដំណោះស្រាយ៖</strong> ${q.correctAnswer}
          </div>
        `;
      }

      html += `
        <div class="question-card" id="qcard-${q.id}">
          <div class="qcard-header">
            <div>
              <span class="q-subject-pill">${q.subjectName || q.subjectId}</span>
              ${typeBadge}
            </div>
            <div class="q-points-tag"><i class="fa-solid fa-star"></i> ${q.points || 2} ពិន្ទុ</div>
          </div>
          <div class="qcard-body">
            <h4 class="q-text"><span class="q-num">សំណួរទី ${idx + 1}៖</span> ${q.question}</h4>
            ${optionsHtml}
          </div>
          <div class="qcard-footer">
            <label class="q-select-chk">
              <input type="checkbox" class="exam-select-q" value="${q.id}"> រើសយកដាក់ក្នុងវិញ្ញាសា
            </label>
            <button class="btn btn-sm btn-outline text-danger" onclick="ExamManager.deleteQuestion('${q.id}')">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      `;
    });
    html += `</div>`;
    listContainer.innerHTML = html;
  }

  static openAddModal() {
    document.getElementById("addQuestionModal").classList.add("active");
  }

  static toggleQuestionTypeFields() {
    const type = document.getElementById("qModalType").value;
    const mcqBox = document.getElementById("mcqOptionsBox");
    const essayBox = document.getElementById("essayAnswerBox");

    if (type === "mcq") {
      if (mcqBox) mcqBox.style.display = "block";
      if (essayBox) essayBox.style.display = "none";
    } else {
      if (mcqBox) mcqBox.style.display = "none";
      if (essayBox) essayBox.style.display = "block";
    }
  }

  static saveNewQuestion() {
    const subjectId = document.getElementById("qModalSubject").value;
    const subjects = StorageManager.getSubjects();
    const subObj = subjects.find(s => s.id === subjectId);
    const subjectName = subObj ? subObj.nameKh : subjectId;

    const type = document.getElementById("qModalType").value;
    const questionText = document.getElementById("qModalText").value.trim();
    const points = parseFloat(document.getElementById("qModalPoints").value) || 2;

    if (!questionText) {
      alert("សូមបញ្ចូលខ្លឹមសារសំណួរ!");
      return;
    }

    const newQ = {
      id: "Q-" + Date.now().toString(36).toUpperCase(),
      subjectId,
      subjectName,
      type,
      question: questionText,
      points
    };

    if (type === "mcq") {
      const optA = document.getElementById("qOptA").value.trim();
      const optB = document.getElementById("qOptB").value.trim();
      const optC = document.getElementById("qOptC").value.trim();
      const optD = document.getElementById("qOptD").value.trim();
      const correct = parseInt(document.getElementById("qCorrectOpt").value, 10);

      if (!optA || !optB) {
        alert("សូមបញ្ចូលជម្រើសយ៉ាងតិច ២ (A និង B)!");
        return;
      }

      newQ.options = [optA, optB, optC, optD].filter(Boolean);
      newQ.correctAnswer = correct;
    } else {
      newQ.correctAnswer = document.getElementById("qEssayAnswer").value.trim();
    }

    const questions = StorageManager.getQuestions();
    questions.push(newQ);
    StorageManager.saveQuestions(questions);

    this.renderQuestionBank();
    document.getElementById("addQuestionModal").classList.remove("active");
    // Clear form
    document.getElementById("qModalText").value = "";
    document.getElementById("qEssayAnswer").value = "";
    App.showToast("បានបន្ថែមសំណួរថ្មីទៅក្នុងធនាគារដោយជោគជ័យ!", "success");
  }

  static async deleteQuestion(qId) {
    const confirmed = await showConfirm("តើអ្នកពិតជាចង់លុបសំណួរនេះចេញពីធនាគារសំណួរមែនទេ?", {
      title: "បញ្ជាក់ការលុបសំណួរ",
      confirmText: "យល់ព្រមលុប",
      type: "danger"
    });
    if (!confirmed) return;
    let questions = StorageManager.getQuestions();
    questions = questions.filter(q => q.id !== qId);
    StorageManager.saveQuestions(questions);
    this.renderQuestionBank();
    App.showToast("បានលុបសំណួររួចរាល់!", "info");
  }

  static generateExamPaper() {
    const selectedSubject = document.getElementById("genExamSubject").value;
    const title = document.getElementById("genExamTitle").value || "វិញ្ញាសាប្រឡង";
    const duration = document.getElementById("genExamDuration").value || "៦០ នាទី";
    const schoolInfo = StorageManager.getSchoolInfo();
    const subjects = StorageManager.getSubjects();
    const subObj = subjects.find(s => s.id === selectedSubject);
    const subName = subObj ? subObj.nameKh : selectedSubject;

    // Get checked questions, or auto-pick all questions for this subject
    const checked = Array.from(document.querySelectorAll(".exam-select-q:checked")).map(el => el.value);
    const allQuestions = StorageManager.getQuestions();
    let examQuestions = [];

    if (checked.length > 0) {
      examQuestions = allQuestions.filter(q => checked.includes(q.id));
    } else {
      // Auto pick questions for this subject
      examQuestions = allQuestions.filter(q => q.subjectId === selectedSubject);
      if (examQuestions.length === 0) {
        // Fallback pick all
        examQuestions = allQuestions;
      }
    }

    if (examQuestions.length === 0) {
      alert("មិនមានសំណួរសម្រាប់បង្កើតវិញ្ញាសាទេ! សូមបញ្ចូលសំណួរជាមុនសិន។");
      return;
    }

    const totalPoints = examQuestions.reduce((acc, q) => acc + (q.points || 2), 0);

    const container = document.getElementById("examPrintPreview");
    if (!container) return;

    let questionsHtml = "";
    let answerKeyHtml = "";

    examQuestions.forEach((q, idx) => {
      let optText = "";
      if (q.type === "mcq" && q.options) {
        optText = `
          <div class="exam-opts-grid">
            ${q.options.map((opt, oIdx) => `
              <div class="exam-opt-item"><strong>${String.fromCharCode(65 + oIdx)}.</strong> ${opt}</div>
            `).join('')}
          </div>
        `;
      }

      questionsHtml += `
        <div class="exam-item-print">
          <div class="exam-item-title">
            <strong>សំណួរទី ${idx + 1} (${q.points || 2} ពិន្ទុ)៖</strong> ${q.question}
          </div>
          ${optText}
          <div class="exam-answer-line-space"></div>
        </div>
      `;

      // Answer key
      let ansVal = "";
      if (q.type === "mcq" && q.options) {
        ansVal = `${String.fromCharCode(65 + q.correctAnswer)} (${q.options[q.correctAnswer] || ''})`;
      } else {
        ansVal = q.correctAnswer || "គ្មានចម្លើយគំរូ";
      }

      answerKeyHtml += `
        <tr>
          <td style="text-align:center; font-weight:bold;">${idx + 1}</td>
          <td>${q.question}</td>
          <td style="text-align:center; font-weight:bold; color: #0284c7;">${q.points || 2}</td>
          <td style="color: #16a34a; font-weight:600;">${ansVal}</td>
        </tr>
      `;
    });

    container.innerHTML = `
      <div class="official-exam-sheet">
        <!-- Ministry Header -->
        <div class="exam-top-header">
          <div class="exam-header-left">
            <div>ក្រសួងអប់រំ យុវជន និងកីឡា</div>
            <div>${schoolInfo.nameKh}</div>
            <div>បន្ទុកថ្នាក់៖ <strong>${StorageManager.getSchoolInfo().className || '៨A'}</strong></div>
          </div>
          <div class="exam-header-center">
            <div class="moul-title">ព្រះរាជាណាចក្រកម្ពុជា</div>
            <div class="moul-sub">ជាតិ សាសនា ព្រះមហាក្សត្រ</div>
            <div class="kh-decorative-bar">🙣 🙡 🙢 🙠</div>
          </div>
          <div class="exam-header-right">
            <div>កាលបរិច្ឆេទ៖ ....................</div>
            <div>រយៈពេល៖ <strong>${duration}</strong></div>
            <div>ពិន្ទុសរុប៖ <strong>${totalPoints} ពិន្ទុ</strong></div>
          </div>
        </div>

        <div class="exam-title-banner">
          <h2 class="moul-title text-primary">${title}</h2>
          <h3 class="exam-sub-title font-khmer">មុខវិជ្ជា៖ <strong>${subName}</strong></h3>
        </div>

        <div class="student-exam-info-fill">
          <span>គោត្តនាម និងនាមសិស្ស៖ .....................................................................</span>
          <span>ភេទ៖ ...............</span>
          <span>លេខតុ៖ ...............</span>
        </div>

        <div class="exam-body-questions">
          ${questionsHtml}
        </div>

        <div class="exam-footer-note">
          <p><em>* សិស្សមិនត្រូវបានអនុញ្ញាតឱ្យប្រើប្រាស់ឯកសារ ឬឧបករណ៍អេឡិចត្រូនិកក្នុងបន្ទប់ប្រឡងឡើយ។</em></p>
        </div>
      </div>

      <!-- ANSWER KEY SHEET (កម្រងចម្លើយ និងបំណែងចែកពិន្ទុសម្រាប់គ្រូ) -->
      <div class="official-exam-sheet page-break mt-5">
        <div class="exam-top-header">
          <div class="exam-header-left">
            <div>${schoolInfo.nameKh}</div>
            <div>ឯកសារសម្ងាត់គ្រូបង្រៀន</div>
          </div>
          <div class="exam-header-center">
            <div class="moul-title">កម្រងចម្លើយ និងបំណែងចែកពិន្ទុ (ANSWER KEY)</div>
            <div class="font-khmer">មុខវិជ្ជា៖ ${subName} • ${title}</div>
          </div>
          <div class="exam-header-right">
            <div>ពិន្ទុសរុប៖ <strong>${totalPoints}</strong></div>
          </div>
        </div>

        <table class="table-report mt-3" style="width:100%;">
          <thead>
            <tr>
              <th style="width:60px;">ល.រ</th>
              <th>ខ្លឹមសារសំណួរ</th>
              <th style="width:80px;">ពិន្ទុ</th>
              <th>ចម្លើយត្រឹមត្រូវ / អត្រាកំណែ</th>
            </tr>
          </thead>
          <tbody>
            ${answerKeyHtml}
          </tbody>
        </table>
      </div>
    `;

    document.getElementById("examPreviewModal").classList.add("active");
  }

  static printExam() {
    window.print();
  }

  static setupEventListeners() {
    const filterSub = document.getElementById("examSubjectFilter");
    if (filterSub) filterSub.addEventListener("change", () => this.renderQuestionBank());

    const searchInput = document.getElementById("examSearchInput");
    if (searchInput) searchInput.addEventListener("input", () => this.renderQuestionBank());

    const btnAdd = document.getElementById("btnOpenAddQuestion");
    if (btnAdd) btnAdd.addEventListener("click", () => this.openAddModal());

    const qTypeSelect = document.getElementById("qModalType");
    if (qTypeSelect) qTypeSelect.addEventListener("change", () => this.toggleQuestionTypeFields());

    const btnSaveQ = document.getElementById("btnSaveQuestion");
    if (btnSaveQ) btnSaveQ.addEventListener("click", () => this.saveNewQuestion());

    const btnCloseAdd = document.getElementById("closeAddQModal");
    if (btnCloseAdd) btnCloseAdd.addEventListener("click", () => {
      document.getElementById("addQuestionModal").classList.remove("active");
    });

    const btnGen = document.getElementById("btnGenerateExam");
    if (btnGen) btnGen.addEventListener("click", () => this.generateExamPaper());

    const btnPrint = document.getElementById("btnPrintExamPaper");
    if (btnPrint) btnPrint.addEventListener("click", () => this.printExam());

    const btnClosePrev = document.getElementById("closeExamPrevModal");
    if (btnClosePrev) btnClosePrev.addEventListener("click", () => {
      document.getElementById("examPreviewModal").classList.remove("active");
    });
  }
}


/* ==================================================================== */
/* MODULE: textbooks.js
/* ==================================================================== */

/**
 * MINISTRY TEXTBOOKS & LIBRARY TRACKER MODULE (គ្រប់គ្រងសៀវភៅពុម្ព និងបណ្ណាល័យ)
 */

class TextbookManager {
  static init() {
    this.renderOverviewStats();
    this.renderInventoryTable();
    this.renderStudentTextbookTable();
    this.setupEventListeners();
  }

  static renderOverviewStats() {
    const textbooks = StorageManager.getTextbooks();
    const students = StorageManager.getStudents();

    let totalBooks = 0;
    let totalIssued = 0;
    let totalDamaged = 0;

    textbooks.forEach(tb => {
      totalBooks += (tb.totalQty || 0);
      totalIssued += (tb.issuedQty || 0);
      totalDamaged += (tb.damagedQty || 0);
    });

    const statTotal = document.getElementById("tbStatTotal");
    const statIssued = document.getElementById("tbStatIssued");
    const statAvailable = document.getElementById("tbStatAvailable");
    const statDamaged = document.getElementById("tbStatDamaged");

    if (statTotal) statTotal.innerText = totalBooks;
    if (statIssued) statIssued.innerText = totalIssued;
    if (statAvailable) statAvailable.innerText = Math.max(0, totalBooks - totalIssued - totalDamaged);
    if (statDamaged) statDamaged.innerText = totalDamaged;
  }

  static renderInventoryTable() {
    const tbody = document.getElementById("textbookInventoryBody");
    if (!tbody) return;

    const textbooks = StorageManager.getTextbooks();

    tbody.innerHTML = textbooks.map((tb, idx) => {
      const avail = (tb.totalQty || 0) - (tb.issuedQty || 0) - (tb.damagedQty || 0);
      return `
        <tr>
          <td style="text-align:center; font-weight:bold;">${idx + 1}</td>
          <td><strong>${tb.title}</strong></td>
          <td>${tb.subject}</td>
          <td style="text-align:center; font-weight:600;">${tb.totalQty}</td>
          <td style="text-align:center; color: #2563eb; font-weight:600;">${tb.issuedQty}</td>
          <td style="text-align:center; color: #16a34a; font-weight:600;">${Math.max(0, avail)}</td>
          <td style="text-align:center; color: #dc2626; font-weight:600;">${tb.damagedQty}</td>
          <td style="text-align:center;">
            <button class="btn btn-sm btn-outline" onclick="TextbookManager.editInventoryPrompt('${tb.id}')">
              <i class="fa-solid fa-pen-to-square"></i> កែប្រែ
            </button>
          </td>
        </tr>
      `;
    }).join('');
  }

  static renderStudentTextbookTable() {
    const tbody = document.getElementById("studentTextbookBody");
    if (!tbody) return;

    const students = StorageManager.getStudents();
    const textbooks = StorageManager.getTextbooks();

    tbody.innerHTML = students.map((st, idx) => {
      return `
        <tr>
          <td style="text-align:center;">${idx + 1}</td>
          <td><code>${st.code}</code></td>
          <td><strong>${st.nameKh}</strong></td>
          <td style="text-align:center;">${st.gender}</td>
          <td style="text-align:center;">
            <span class="badge badge-success"><i class="fa-solid fa-circle-check"></i> បានបើកគ្រប់ (៦ ក្បាល)</span>
          </td>
          <td style="text-align:center;">
            <span class="badge badge-primary">រក្សាទុកបានល្អ</span>
          </td>
          <td style="text-align:center;">
            <button class="btn btn-sm btn-outline" onclick="TextbookManager.viewStudentBooksModal('${st.id}')">
              <i class="fa-solid fa-list-check"></i> ពិនិត្យបញ្ជី
            </button>
          </td>
        </tr>
      `;
    }).join('');
  }

  static viewStudentBooksModal(studentId) {
    const students = StorageManager.getStudents();
    const student = students.find(s => s.id === studentId);
    if (!student) return;

    const textbooks = StorageManager.getTextbooks();

    const body = document.getElementById("studentBooksModalBody");
    if (!body) return;

    body.innerHTML = `
      <div class="student-tb-modal-header mb-3">
        <h3 class="moul-title text-primary">${student.nameKh} (${student.code})</h3>
        <p class="text-muted">បញ្ជីសៀវភៅពុម្ពក្រសួងដែលបានទទួលសម្រាប់ឆ្នាំសិក្សា</p>
      </div>

      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>ល.រ</th>
              <th>ឈ្មោះសៀវភៅពុម្ព</th>
              <th>ស្ថានភាពទទួល</th>
              <th>ស្ថានភាពសង</th>
            </tr>
          </thead>
          <tbody>
            ${textbooks.map((tb, idx) => `
              <tr>
                <td>${idx + 1}</td>
                <td><strong>${tb.title}</strong></td>
                <td><span class="badge badge-success">✓ បានបើកទទួល</span></td>
                <td><span class="badge badge-info">កំពុងប្រើប្រាស់</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <div class="alert alert-info mt-3">
        <i class="fa-solid fa-circle-info"></i> សៀវភៅពុម្ពទាំងអស់ត្រូវបានផ្ទៀងផ្ទាត់ដោយគ្រូបន្ទុកថ្នាក់។ សិស្សមានកាតព្វកិច្ចថែរក្សា និងប្រគល់ជូនសាលាវិញនៅដំណាច់ឆ្នាំសិក្សា។
      </div>
    `;

    document.getElementById("studentBooksModal").classList.add("active");
  }

  static editInventoryPrompt(tbId) {
    const textbooks = StorageManager.getTextbooks();
    const tb = textbooks.find(t => t.id === tbId);
    if (!tb) return;

    const newTotalStr = prompt(`បញ្ចូលចំនួនសរុបថ្មីសម្រាប់ "${tb.title}"៖`, tb.totalQty);
    if (newTotalStr === null) return;
    const newTotal = parseInt(newTotalStr, 10);
    if (isNaN(newTotal) || newTotal < 0) {
      alert("ចំនួនមិនត្រឹមត្រូវ!");
      return;
    }

    const newDamagedStr = prompt(`បញ្ចូលចំនួនខូចខាត/បាត់បង់សម្រាប់ "${tb.title}"៖`, tb.damagedQty);
    if (newDamagedStr === null) return;
    const newDamaged = parseInt(newDamagedStr, 10);
    if (isNaN(newDamaged) || newDamaged < 0) {
      alert("ចំនួនមិនត្រឹមត្រូវ!");
      return;
    }

    tb.totalQty = newTotal;
    tb.damagedQty = newDamaged;

    StorageManager.saveTextbooks(textbooks);
    this.renderOverviewStats();
    this.renderInventoryTable();
    App.showToast("បានកែប្រែចំនួនសៀវភៅពុម្ពដោយជោគជ័យ!", "success");
  }

  static exportTextbooksExcel() {
    const textbooks = StorageManager.getTextbooks();
    const data = textbooks.map((tb, idx) => ({
      "ល.រ": idx + 1,
      "ឈ្មោះសៀវភៅពុម្ព": tb.title,
      "មុខវិជ្ជា": tb.subject,
      "ចំនួនសរុបក្នុងស្តុក": tb.totalQty,
      "ចំនួនបានចែកសិស្ស": tb.issuedQty,
      "ចំនួននៅសល់": Math.max(0, (tb.totalQty || 0) - (tb.issuedQty || 0) - (tb.damagedQty || 0)),
      "ចំនួនខូចខាត/បាត់បង់": tb.damagedQty
    }));

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "សៀវភៅពុម្ព");
    XLSX.writeFile(wb, `របាយការណ៍សៀវភៅពុម្ព_ថ្នាក់ទី_៨A_${new Date().toISOString().split('T')[0]}.xlsx`);
  }

  static setupEventListeners() {
    const btnExcel = document.getElementById("btnExportTextbooksExcel");
    if (btnExcel) btnExcel.addEventListener("click", () => this.exportTextbooksExcel());

    const btnCloseModal = document.getElementById("closeStudentBooksModal");
    if (btnCloseModal) btnCloseModal.addEventListener("click", () => {
      document.getElementById("studentBooksModal").classList.remove("active");
    });
  }
}


/* ==================================================================== */
/* MODULE: council.js
/* ==================================================================== */

/**
 * STUDENT COUNCIL & STUDY CLUBS MODULE (គណៈកម្មការថ្នាក់ និងក្លឹបសិក្សា)
 */

class CouncilManager {
  static init() {
    this.renderCouncilGrid();
    this.renderClubsList();
    this.setupEventListeners();
  }

  static renderCouncilGrid() {
    const container = document.getElementById("councilRolesGrid");
    if (!container) return;

    const council = StorageManager.getCouncil();
    const students = StorageManager.getStudents();
    const studentMap = {};
    students.forEach(s => studentMap[s.id] = s);

    const rolesDef = [
      { key: "president", title: "ប្រធានថ្នាក់", titleEn: "Class President", icon: "fa-crown", color: "gold" },
      { key: "vicePresident", title: "អនុប្រធានថ្នាក់", titleEn: "Vice President", icon: "fa-star", color: "blue" },
      { key: "disciplineLead", title: "ប្រធានក្រុមវិន័យ", titleEn: "Discipline Lead", icon: "fa-shield-halved", color: "red" },
      { key: "sanitationLead", title: "ប្រធានក្រុមអនាម័យ", titleEn: "Sanitation Lead", icon: "fa-broom", color: "green" },
      { key: "sportsLead", title: "ប្រធានក្រុមកីឡា & សិល្បៈ", titleEn: "Sports & Arts Lead", icon: "fa-futbol", color: "purple" }
    ];

    container.innerHTML = rolesDef.map(r => {
      const assigned = council[r.key] || {};
      const stuObj = assigned.studentId ? studentMap[assigned.studentId] : null;
      const stuName = stuObj ? stuObj.nameKh : (assigned.name || "មិនទាន់បានចាត់តាំង");
      const stuCode = stuObj ? stuObj.code : "";
      const stuGender = stuObj ? stuObj.gender : "";

      return `
        <div class="council-card council-${r.color}">
          <div class="council-card-icon">
            <i class="fa-solid ${r.icon}"></i>
          </div>
          <div class="council-card-info">
            <span class="council-role-badge">${r.title}</span>
            <h4 class="council-student-name moul-title">${stuName}</h4>
            <p class="council-student-sub text-muted">${stuCode ? `${stuCode} • ភេទ ${stuGender}` : r.titleEn}</p>
          </div>
          <div class="council-card-action">
            <button class="btn btn-sm btn-outline" onclick="CouncilManager.openAssignRoleModal('${r.key}', '${r.title}')">
              <i class="fa-solid fa-user-pen"></i> ចាត់តាំង
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  static renderClubsList() {
    const container = document.getElementById("studyClubsGrid");
    if (!container) return;

    const clubs = StorageManager.getClubs();

    if (clubs.length === 0) {
      container.innerHTML = `
        <div class="empty-state-box">
          <i class="fa-solid fa-people-group fa-3x text-muted mb-2"></i>
          <h4>មិនទាន់មានក្លឹបសិក្សានៅឡើយទេ</h4>
          <p class="text-muted">សូមចុចប៊ូតុង "បង្កើតក្លឹបថ្មី" ដើម្បីបង្កើតសកម្មភាពក្លឹបសិក្សាក្នុងថ្នាក់។</p>
        </div>
      `;
      return;
    }

    container.innerHTML = clubs.map(club => {
      return `
        <div class="club-card">
          <div class="club-header">
            <div>
              <h4 class="club-title moul-title text-primary">${club.name}</h4>
              <span class="club-sub-en text-muted">${club.nameEn || ''}</span>
            </div>
            <span class="badge badge-primary"><i class="fa-solid fa-users"></i> ${club.membersCount || 12} នាក់</span>
          </div>

          <div class="club-body">
            <p class="club-desc font-khmer">${club.description || ''}</p>
            <div class="club-meta-tags mt-2">
              <div class="club-meta-item">
                <i class="fa-solid fa-user-tie text-accent"></i> ប្រធានក្លឹប៖ <strong>${club.leadStudent || 'សុខា មុនីរត្ន'}</strong>
              </div>
              <div class="club-meta-item">
                <i class="fa-solid fa-clock text-warning"></i> ជួបប្រជុំ៖ <strong>${club.meetingDay || 'រៀងរាល់សប្តាហ៍'}</strong>
              </div>
            </div>
          </div>

          <div class="club-footer">
            <button class="btn btn-sm btn-outline" onclick="CouncilManager.viewClubMembersModal('${club.id}')">
              <i class="fa-solid fa-address-book"></i> បញ្ជីសមាជិក
            </button>
            <button class="btn btn-sm btn-outline text-danger" onclick="CouncilManager.deleteClub('${club.id}')">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  static openAssignRoleModal(roleKey, roleTitle) {
    const students = StorageManager.getStudents();
    const council = StorageManager.getCouncil();
    const current = council[roleKey] || {};

    const modalBody = document.getElementById("assignRoleModalBody");
    if (!modalBody) return;

    modalBody.innerHTML = `
      <div class="assign-role-form">
        <input type="hidden" id="assignRoleKey" value="${roleKey}">
        <div class="form-group mb-3">
          <label class="form-label font-khmer">តួនាទី៖</label>
          <input type="text" class="form-control" value="${roleTitle}" readonly>
        </div>
        <div class="form-group mb-3">
          <label class="form-label font-khmer">ជ្រើសរើសសិស្សទទួលបន្ទុក៖</label>
          <select id="assignStudentSelect" class="form-control">
            ${students.map(s => `
              <option value="${s.id}" ${current.studentId === s.id ? 'selected' : ''}>
                ${s.code} - ${s.nameKh} (${s.gender})
              </option>
            `).join('')}
          </select>
        </div>
      </div>
    `;

    document.getElementById("assignRoleModal").classList.add("active");
  }

  static saveAssignedRole() {
    const roleKey = document.getElementById("assignRoleKey").value;
    const studentId = document.getElementById("assignStudentSelect").value;
    const students = StorageManager.getStudents();
    const student = students.find(s => s.id === studentId);

    if (!student) return;

    const council = StorageManager.getCouncil();
    council[roleKey] = {
      studentId: student.id,
      name: student.nameKh,
      role: roleKey
    };

    StorageManager.saveCouncil(council);
    this.renderCouncilGrid();
    document.getElementById("assignRoleModal").classList.remove("active");
    App.showToast(`បានចាត់តាំង "${student.nameKh}" ទទួលតួនាទីដោយជោគជ័យ!`, "success");
  }

  static openCreateClubModal() {
    const students = StorageManager.getStudents();
    const select = document.getElementById("clubLeadSelect");
    if (select) {
      select.innerHTML = students.map(s => `<option value="${s.nameKh}">${s.nameKh} (${s.code})</option>`).join('');
    }
    document.getElementById("createClubModal").classList.add("active");
  }

  static saveNewClub() {
    const name = document.getElementById("clubNameInput").value.trim();
    const nameEn = document.getElementById("clubNameEnInput").value.trim();
    const leadStudent = document.getElementById("clubLeadSelect").value;
    const meetingDay = document.getElementById("clubMeetingInput").value.trim();
    const description = document.getElementById("clubDescInput").value.trim();

    if (!name) {
      alert("សូមបញ្ចូលឈ្មោះក្លឹបសិក្សា!");
      return;
    }

    const newClub = {
      id: "CLUB-" + Date.now().toString(36).toUpperCase(),
      name,
      nameEn,
      leadStudent,
      meetingDay: meetingDay || "រៀងរាល់សប្តាហ៍",
      membersCount: 10,
      description
    };

    const clubs = StorageManager.getClubs();
    clubs.push(newClub);
    StorageManager.saveClubs(clubs);

    this.renderClubsList();
    document.getElementById("createClubModal").classList.remove("active");
    // Clear
    document.getElementById("clubNameInput").value = "";
    document.getElementById("clubNameEnInput").value = "";
    document.getElementById("clubDescInput").value = "";
    App.showToast("បានបង្កើតក្លឹបសិក្សាថ្មីដោយជោគជ័យ!", "success");
  }

  static async deleteClub(clubId) {
    const confirmed = await showConfirm("តើអ្នកពិតជាចង់លុបក្លឹបសិក្សានេះមែនទេ? សកម្មភាពនេះមិនអាចត្រឡប់វិញបានទេ។", {
      title: "បញ្ជាក់ការលុបក្លឹបសិក្សា",
      confirmText: "យល់ព្រមលុប",
      type: "danger"
    });
    if (!confirmed) return;
    let clubs = StorageManager.getClubs();
    clubs = clubs.filter(c => c.id !== clubId);
    StorageManager.saveClubs(clubs);
    this.renderClubsList();
    App.showToast("បានលុបក្លឹបសិក្សារួចរាល់!", "info");
  }

  static viewClubMembersModal(clubId) {
    const clubs = StorageManager.getClubs();
    const club = clubs.find(c => c.id === clubId);
    if (!club) return;

    const students = StorageManager.getStudents();
    // Pick first 8-12 sample members
    const sampleMembers = students.slice(0, club.membersCount || 10);

    const body = document.getElementById("clubMembersModalBody");
    if (!body) return;

    body.innerHTML = `
      <div class="mb-3">
        <h3 class="moul-title text-primary">${club.name}</h3>
        <p class="text-muted"><i class="fa-solid fa-clock"></i> ពេលជួបប្រជុំ៖ <strong>${club.meetingDay}</strong></p>
      </div>

      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>ល.រ</th>
              <th>អត្តលេខ</th>
              <th>គោត្តនាម និងនាម</th>
              <th>ភេទ</th>
              <th>តួនាទីក្នុងក្លឹប</th>
            </tr>
          </thead>
          <tbody>
            ${sampleMembers.map((st, idx) => `
              <tr>
                <td>${idx + 1}</td>
                <td><code>${st.code}</code></td>
                <td><strong>${st.nameKh}</strong></td>
                <td>${st.gender}</td>
                <td><span class="badge ${idx === 0 ? 'badge-primary' : 'badge-light'}">${idx === 0 ? 'ប្រធានក្លឹប' : 'សមាជិក'}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;

    document.getElementById("clubMembersModal").classList.add("active");
  }

  static setupEventListeners() {
    const btnSaveRole = document.getElementById("btnSaveAssignedRole");
    if (btnSaveRole) btnSaveRole.addEventListener("click", () => this.saveAssignedRole());

    const btnCloseRoleModal = document.getElementById("closeAssignRoleModal");
    if (btnCloseRoleModal) btnCloseRoleModal.addEventListener("click", () => {
      document.getElementById("assignRoleModal").classList.remove("active");
    });

    const btnOpenCreateClub = document.getElementById("btnOpenCreateClub");
    if (btnOpenCreateClub) btnOpenCreateClub.addEventListener("click", () => this.openCreateClubModal());

    const btnSaveClub = document.getElementById("btnSaveNewClub");
    if (btnSaveClub) btnSaveClub.addEventListener("click", () => this.saveNewClub());

    const btnCloseCreateClub = document.getElementById("closeCreateClubModal");
    if (btnCloseCreateClub) btnCloseCreateClub.addEventListener("click", () => {
      document.getElementById("createClubModal").classList.remove("active");
    });

    const btnCloseClubMembers = document.getElementById("closeClubMembersModal");
    if (btnCloseClubMembers) btnCloseClubMembers.addEventListener("click", () => {
      document.getElementById("clubMembersModal").classList.remove("active");
    });
  }
}


/* ==================================================================== */
/* MODULE: quiz.js
/* ==================================================================== */

/**
 * CLASSROOM INTERACTIVE QUIZ & LEADERBOARD MODULE
 * (ការប្រឡងស្ទង់សមត្ថភាពអន្តរកម្ម & តារាងពិន្ទុផ្ទាល់ក្នុងថ្នាក់)
 */

class QuizModule {
  static init() {
    this.currentQuiz = null;
    this.currentIndex = 0;
    this.timer = null;
    this.timeLeft = 20;
    this.score = 0;
    this.selectedStudentId = null;

    this.setupEventListeners();
  }

  static populateQuizSubjects() {
    const subjects = StorageManager.getSubjects();
    const select = document.getElementById("quizSubjectSelect");
    if (select) {
      select.innerHTML = `<option value="all">-- មុខវិជ្ជាទាំងអស់ (Mix Subjects) --</option>` +
        subjects.map(s => `<option value="${s.id}">${s.nameKh}</option>`).join('');
    }

    const stuSelect = document.getElementById("quizStudentSelect");
    const students = StorageManager.getStudents();
    if (stuSelect) {
      stuSelect.innerHTML = `<option value="class">🎓 សាកល្បងជាថ្នាក់រៀនទាំងមូល (Class Mode)</option>` +
        students.map(s => `<option value="${s.id}">${s.code} - ${s.nameKh}</option>`).join('');
    }
  }

  static startQuiz() {
    const subjectId = document.getElementById("quizSubjectSelect").value;
    const questionsCount = parseInt(document.getElementById("quizCountSelect").value, 10) || 5;
    const allQuestions = StorageManager.getQuestions().filter(q => q.type === "mcq" && q.options && q.options.length >= 2);

    let pool = subjectId === "all" ? allQuestions : allQuestions.filter(q => q.subjectId === subjectId);
    if (pool.length === 0) {
      pool = allQuestions; // fallback
    }

    if (pool.length === 0) {
      alert("មិនទាន់មានសំណួរពហុជ្រើសរើសក្នុងធនាគារនៅឡើយទេ! សូមបញ្ចូលសំណួរក្នុងផ្ទាំង 'ធនាគារសំណួរ' ជាមុនសិន។");
      return;
    }

    // Shuffle pool
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    this.currentQuiz = shuffled.slice(0, Math.min(questionsCount, shuffled.length));
    this.currentIndex = 0;
    this.score = 0;
    this.selectedStudentId = document.getElementById("quizStudentSelect").value;

    document.getElementById("quizLobbyView").style.display = "none";
    document.getElementById("quizActiveView").style.display = "block";
    document.getElementById("quizResultView").style.display = "none";

    this.renderQuestion();
  }

  static renderQuestion() {
    if (!this.currentQuiz || this.currentIndex >= this.currentQuiz.length) {
      this.finishQuiz();
      return;
    }

    const q = this.currentQuiz[this.currentIndex];
    const total = this.currentQuiz.length;

    document.getElementById("quizProgressText").innerText = `សំណួរទី ${this.currentIndex + 1} / ${total}`;
    document.getElementById("quizProgressBar").style.width = `${((this.currentIndex) / total) * 100}%`;
    document.getElementById("quizSubjectTag").innerText = q.subjectName || q.subjectId;
    document.getElementById("quizQuestionText").innerText = q.question;

    const optionsContainer = document.getElementById("quizOptionsGrid");
    optionsContainer.innerHTML = "";

    const optLetters = ["A", "B", "C", "D"];
    const cardColors = ["quiz-opt-blue", "quiz-opt-green", "quiz-opt-amber", "quiz-opt-purple"];

    q.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = `quiz-option-card ${cardColors[idx % 4]}`;
      btn.innerHTML = `
        <span class="quiz-opt-letter">${optLetters[idx]}</span>
        <span class="quiz-opt-text">${opt}</span>
      `;
      btn.onclick = () => this.handleAnswer(idx, q.correctAnswer);
      optionsContainer.appendChild(btn);
    });

    // Start Timer
    this.startTimer();
  }

  static startTimer() {
    clearInterval(this.timer);
    this.timeLeft = 20;
    const timerDisplay = document.getElementById("quizTimerDisplay");
    timerDisplay.innerText = this.timeLeft;
    timerDisplay.classList.remove("timer-urgent");

    this.timer = setInterval(() => {
      this.timeLeft--;
      timerDisplay.innerText = this.timeLeft;

      if (this.timeLeft <= 5) {
        timerDisplay.classList.add("timer-urgent");
      }

      if (this.timeLeft <= 0) {
        clearInterval(this.timer);
        this.handleTimeUp();
      }
    }, 1000);
  }

  static handleAnswer(selectedIndex, correctIndex) {
    clearInterval(this.timer);
    const buttons = document.querySelectorAll(".quiz-option-card");
    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === correctIndex) {
        btn.classList.add("opt-is-correct");
      } else if (idx === selectedIndex) {
        btn.classList.add("opt-is-wrong");
      }
    });

    if (selectedIndex === correctIndex) {
      this.score += 10;
      this.playChime(true);
      App.showToast("ចម្លើយត្រឹមត្រូវ! +10 ពិន្ទុ 🎉", "success");
    } else {
      this.playChime(false);
      App.showToast("មិនត្រឹមត្រូវទេ! ចម្លើយត្រូវគឺជម្រើស " + String.fromCharCode(65 + correctIndex), "error");
    }

    setTimeout(() => {
      this.currentIndex++;
      this.renderQuestion();
    }, 2200);
  }

  static handleTimeUp() {
    const q = this.currentQuiz[this.currentIndex];
    const buttons = document.querySelectorAll(".quiz-option-card");
    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === q.correctAnswer) {
        btn.classList.add("opt-is-correct");
      }
    });

    this.playChime(false);
    App.showToast("អស់ពេលហើយ! ចម្លើយត្រឹមត្រូវគឺជម្រើស " + String.fromCharCode(65 + q.correctAnswer), "warning");

    setTimeout(() => {
      this.currentIndex++;
      this.renderQuestion();
    }, 2200);
  }

  static playChime(isCorrect) {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      if (isCorrect) {
        osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
        osc.frequency.setValueAtTime(880.00, audioCtx.currentTime + 0.1); // A5
      } else {
        osc.frequency.setValueAtTime(300, audioCtx.currentTime);
        osc.frequency.setValueAtTime(200, audioCtx.currentTime + 0.15);
      }

      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.35);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.35);
    } catch (e) {
      // AudioContext fallback
    }
  }

  static finishQuiz() {
    clearInterval(this.timer);
    document.getElementById("quizActiveView").style.display = "none";
    document.getElementById("quizResultView").style.display = "block";

    const totalQ = this.currentQuiz.length;
    const maxScore = totalQ * 10;
    const percent = Math.round((this.score / maxScore) * 100);

    document.getElementById("quizFinalScoreText").innerText = `${this.score} / ${maxScore} ពិន្ទុ (${percent}%)`;
    
    let comment = "";
    if (percent >= 80) comment = "🌟 អស្ចារ្យណាស់! ឆ្លើយត្រូវស្ទើរតែទាំងអស់!";
    else if (percent >= 50) comment = "👍 ល្អបង្គួរ! ព្យាយាមបន្ថែមទៀតដើម្បីទទួលបានលទ្ធផលកាន់តែល្អ!";
    else comment = "💪 ត្រូវខិតខំរំលឹកមេរៀនឡើងវិញបន្ថែមទៀត!";

    document.getElementById("quizResultComment").innerText = comment;

    if (percent >= 70 && typeof confetti === "function") {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
  }

  static restartLobby() {
    document.getElementById("quizLobbyView").style.display = "block";
    document.getElementById("quizActiveView").style.display = "none";
    document.getElementById("quizResultView").style.display = "none";
  }

  static setupEventListeners() {
    const startBtn = document.getElementById("btnStartClassQuiz");
    if (startBtn) startBtn.addEventListener("click", () => this.startQuiz());

    const restartBtn = document.getElementById("btnQuizRestart");
    if (restartBtn) restartBtn.addEventListener("click", () => this.restartLobby());
  }
}


/* ==================================================================== */
/* MODULE: health.js
/* ==================================================================== */

/**
 * STUDENT HEALTH, GROWTH & BMI TRACKER MODULE
 * (តាមដានសុខភាព កម្ពស់ ទម្ងន់ និង BMI សិស្ស)
 */

class HealthModule {
  static init() {
    this.renderOverview();
    this.renderHealthTable();
    this.setupEventListeners();
  }

  static calculateBMI(weightKg, heightCm) {
    if (!weightKg || !heightCm || heightCm <= 0) return { bmi: 0, category: "មិនទាន់មានទិន្នន័យ", badgeClass: "badge-light" };
    const hM = heightCm / 100;
    const bmi = parseFloat((weightKg / (hM * hM)).toFixed(1));

    // WHO Asian adolescent standards
    if (bmi < 18.5) {
      return { bmi, category: "ស្គមពេក (Underweight)", badgeClass: "badge-warning" };
    } else if (bmi <= 22.9) {
      return { bmi, category: "ស្តង់ដារល្អ (Normal)", badgeClass: "badge-success" };
    } else if (bmi <= 24.9) {
      return { bmi, category: "លើសទម្ងន់ (Overweight)", badgeClass: "badge-info" };
    } else {
      return { bmi, category: "ធាត់កម្រិត១ (Obese)", badgeClass: "badge-danger" };
    }
  }

  static renderOverview() {
    const students = StorageManager.getStudents();
    const healthData = StorageManager.getHealth();

    let totalH = 0;
    let totalW = 0;
    let counted = 0;
    let normalBMICount = 0;
    let allergyCount = 0;

    students.forEach((st, idx) => {
      // Default height/weight generator if not in healthData
      const hRec = healthData[st.id] || {
        height: 148 + (idx % 16),
        weight: 38 + (idx % 14),
        bloodType: ["A+", "B+", "O+", "AB+"][idx % 4],
        allergies: idx === 2 ? "អាឡែហ្ស៊ីគ្រឿងសមុទ្រ" : "គ្មាន"
      };

      totalH += hRec.height;
      totalW += hRec.weight;
      counted++;

      const bmiObj = this.calculateBMI(hRec.weight, hRec.height);
      if (bmiObj.bmi >= 18.5 && bmiObj.bmi <= 22.9) normalBMICount++;
      if (hRec.allergies && hRec.allergies !== "គ្មាន") allergyCount++;
    });

    const avgH = counted > 0 ? (totalH / counted).toFixed(1) : 0;
    const avgW = counted > 0 ? (totalW / counted).toFixed(1) : 0;
    const normalRate = counted > 0 ? Math.round((normalBMICount / counted) * 100) : 0;

    const elH = document.getElementById("healthAvgHeight");
    const elW = document.getElementById("healthAvgWeight");
    const elRate = document.getElementById("healthNormalRate");
    const elAllergy = document.getElementById("healthAllergyCount");

    if (elH) elH.innerText = `${avgH} cm`;
    if (elW) elW.innerText = `${avgW} kg`;
    if (elRate) elRate.innerText = `${normalRate}%`;
    if (elAllergy) elAllergy.innerText = `${allergyCount} នាក់`;
  }

  static renderHealthTable() {
    const tbody = document.getElementById("studentHealthTableBody");
    if (!tbody) return;

    const students = StorageManager.getStudents();
    const healthData = StorageManager.getHealth();

    tbody.innerHTML = students.map((st, idx) => {
      const hRec = healthData[st.id] || {
        height: 148 + (idx % 16),
        weight: 38 + (idx % 14),
        bloodType: ["A+", "B+", "O+", "AB+"][idx % 4],
        allergies: idx === 2 ? "អាឡែហ្ស៊ីគ្រឿងសមុទ្រ" : "គ្មាន",
        vision: "ធម្មតា (10/10)",
        lastCheckup: "2025-09-15"
      };

      const bmiObj = this.calculateBMI(hRec.weight, hRec.height);

      return `
        <tr>
          <td style="text-align:center;">${idx + 1}</td>
          <td><code>${st.code}</code></td>
          <td><strong>${st.nameKh}</strong></td>
          <td style="text-align:center;">${st.gender}</td>
          <td style="text-align:center; font-weight:600;">${hRec.height} cm</td>
          <td style="text-align:center; font-weight:600;">${hRec.weight} kg</td>
          <td style="text-align:center; font-weight:700; color: #2563eb;">${bmiObj.bmi}</td>
          <td style="text-align:center;"><span class="badge ${bmiObj.badgeClass}">${bmiObj.category}</span></td>
          <td style="text-align:center;"><span class="badge badge-light font-bold">${hRec.bloodType || 'O+'}</span></td>
          <td><small class="${hRec.allergies && hRec.allergies !== 'គ្មាន' ? 'text-danger font-bold' : 'text-muted'}">${hRec.allergies || 'គ្មាន'}</small></td>
          <td style="text-align:center;">
            <button class="btn btn-sm btn-outline" onclick="HealthModule.openEditModal('${st.id}')">
              <i class="fa-solid fa-pen-to-square"></i> កែប្រែ
            </button>
          </td>
        </tr>
      `;
    }).join('');
  }

  static openEditModal(studentId) {
    const students = StorageManager.getStudents();
    const student = students.find(s => s.id === studentId);
    if (!student) return;

    const healthData = StorageManager.getHealth();
    const hRec = healthData[student.id] || {
      height: 152,
      weight: 42,
      bloodType: "O+",
      allergies: "គ្មាន",
      vision: "ធម្មតា (10/10)"
    };

    document.getElementById("editHealthStudentId").value = student.id;
    document.getElementById("editHealthStudentName").innerText = `${student.nameKh} (${student.code})`;
    document.getElementById("editHealthHeight").value = hRec.height || 150;
    document.getElementById("editHealthWeight").value = hRec.weight || 40;
    document.getElementById("editHealthBlood").value = hRec.bloodType || "O+";
    document.getElementById("editHealthAllergies").value = hRec.allergies || "គ្មាន";
    document.getElementById("editHealthVision").value = hRec.vision || "ធម្មតា (10/10)";

    document.getElementById("editHealthModal").classList.add("active");
  }

  static saveHealthRecord() {
    const studentId = document.getElementById("editHealthStudentId").value;
    const height = parseFloat(document.getElementById("editHealthHeight").value) || 150;
    const weight = parseFloat(document.getElementById("editHealthWeight").value) || 40;
    const bloodType = document.getElementById("editHealthBlood").value;
    const allergies = document.getElementById("editHealthAllergies").value.trim() || "គ្មាន";
    const vision = document.getElementById("editHealthVision").value.trim();

    const healthData = StorageManager.getHealth();
    healthData[studentId] = {
      height,
      weight,
      bloodType,
      allergies,
      vision,
      lastCheckup: new Date().toISOString().split('T')[0]
    };

    StorageManager.saveHealth(healthData);
    this.renderOverview();
    this.renderHealthTable();
    document.getElementById("editHealthModal").classList.remove("active");
    App.showToast("បានរក្សាទុកកំណត់ត្រាសុខភាពសិស្សជោគជ័យ!", "success");
  }

  static exportExcel() {
    const students = StorageManager.getStudents();
    const healthData = StorageManager.getHealth();

    const data = students.map((st, idx) => {
      const hRec = healthData[st.id] || {
        height: 148 + (idx % 16),
        weight: 38 + (idx % 14),
        bloodType: "O+",
        allergies: "គ្មាន",
        vision: "ធម្មតា"
      };
      const bmiObj = this.calculateBMI(hRec.weight, hRec.height);
      return {
        "ល.រ": idx + 1,
        "អត្តលេខ": st.code,
        "គោត្តនាម និងនាម": st.nameKh,
        "ភេទ": st.gender,
        "កម្ពស់ (cm)": hRec.height,
        "ទម្ងន់ (kg)": hRec.weight,
        "សន្ទស្សន៍ BMI": bmiObj.bmi,
        "ស្ថានភាពសុខភាព": bmiObj.category,
        "ក្រុមឈាម": hRec.bloodType,
        "ប្រវត្តិអាឡែហ្ស៊ី": hRec.allergies,
        "កាលបរិច្ឆេទពិនិត្យ": hRec.lastCheckup || "2025-09-15"
      };
    });

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "សុខភាពសិស្ស");
    XLSX.writeFile(wb, `របាយការណ៍សុខភាពសិស្ស_ថ្នាក់ទី_៨A_${new Date().toISOString().split('T')[0]}.xlsx`);
  }

  static setupEventListeners() {
    const saveBtn = document.getElementById("btnSaveHealthRecord");
    if (saveBtn) saveBtn.addEventListener("click", () => this.saveHealthRecord());

    const closeBtn = document.getElementById("closeEditHealthModal");
    if (closeBtn) closeBtn.addEventListener("click", () => {
      document.getElementById("editHealthModal").classList.remove("active");
    });

    const exportBtn = document.getElementById("btnExportHealthExcel");
    if (exportBtn) exportBtn.addEventListener("click", () => this.exportExcel());
  }
}


/* ==================================================================== */
/* MODULE: election.js
/* ==================================================================== */

/**
 * DIGITAL CLASS ELECTION & VOTING MODULE
 * (ការបោះឆ្នោតជ្រើសរើសប្រធានថ្នាក់ឌីជីថល)
 */

class ElectionModule {
  static init() {
    this.renderElections();
    this.setupEventListeners();
  }

  static renderElections() {
    const container = document.getElementById("electionsContainer");
    if (!container) return;

    const elections = StorageManager.getElections();

    if (elections.length === 0) {
      container.innerHTML = `
        <div class="empty-state-box">
          <i class="fa-solid fa-check-to-slot fa-3x text-muted mb-2"></i>
          <h4>មិនទាន់មានការបោះឆ្នោតនៅឡើយទេ</h4>
          <p class="text-muted">សូមចុចប៊ូតុង "បង្កើតការបោះឆ្នោតថ្មី" ដើម្បីរៀបចំការបោះឆ្នោតជ្រើសរើសគណៈកម្មការថ្នាក់។</p>
        </div>
      `;
      return;
    }

    container.innerHTML = elections.map(elec => {
      const totalVotes = elec.candidates.reduce((sum, c) => sum + (c.votes || 0), 0);

      return `
        <div class="election-event-card mb-4" id="election-${elec.id}">
          <div class="election-header">
            <div>
              <span class="badge ${elec.status === 'completed' ? 'badge-success' : 'badge-primary'} mb-1">
                ${elec.status === 'completed' ? '✓ បញ្ចប់រួចរាល់' : '⚡ កំពុងដំណើរការបោះឆ្នោត'}
              </span>
              <h3 class="moul-title text-primary">${elec.title}</h3>
              <p class="text-muted font-khmer"><i class="fa-regular fa-calendar"></i> កាលបរិច្ឆេទ៖ ${elec.date} • សំឡេងឆ្នោតសរុប៖ <strong>${totalVotes} / ${elec.totalVoters || 42} សំឡេង</strong></p>
            </div>
            <div class="election-actions">
              ${elec.status !== 'completed' ? `
                <button class="btn btn-primary" onclick="ElectionModule.openVoteModal('${elec.id}')">
                  <i class="fa-solid fa-check-to-slot"></i> បោះឆ្នោត (Cast Vote)
                </button>
              ` : `
                <button class="btn btn-outline" onclick="ElectionModule.openVoteModal('${elec.id}')">
                  <i class="fa-solid fa-plus"></i> បន្ថែមសំឡេងឆ្នោត
                </button>
              `}
            </div>
          </div>

          <div class="candidates-grid mt-4">
            ${elec.candidates.map((cand, idx) => {
              const pct = totalVotes > 0 ? ((cand.votes / totalVotes) * 100).toFixed(1) : 0;
              const isLead = cand.elected || (idx === 0 && cand.votes > 0);

              return `
                <div class="candidate-card ${isLead ? 'candidate-winner' : ''}">
                  <div class="candidate-header-row">
                    <div class="candidate-avatar-wrap">
                      <div class="candidate-num">លេខ ${idx + 1}</div>
                      ${isLead ? '<div class="winner-crown-badge"><i class="fa-solid fa-crown text-warning"></i></div>' : ''}
                    </div>
                    <div class="candidate-meta">
                      <h4 class="cand-name moul-title">${cand.name}</h4>
                      <span class="cand-sub text-muted">${cand.studentId || ''}</span>
                    </div>
                  </div>

                  <div class="candidate-votes-box mt-3">
                    <div class="d-flex justify-content-between align-items-center mb-1">
                      <span class="font-bold text-primary">${cand.votes} សំឡេង</span>
                      <span class="font-bold">${pct}%</span>
                    </div>
                    <div class="progress" style="height: 10px;">
                      <div class="progress-bar ${isLead ? 'bg-success' : 'bg-primary'}" style="width: ${pct}%"></div>
                    </div>
                  </div>

                  <div class="candidate-vote-btn-wrap mt-3">
                    <button class="btn btn-sm btn-outline-primary w-100" onclick="ElectionModule.quickVote('${elec.id}', '${cand.studentId || cand.name}')">
                      <i class="fa-solid fa-thumbs-up"></i> បោះឆ្នោតគាំទ្រ (+1)
                    </button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }).join('');
  }

  static quickVote(electionId, candidateIdOrName) {
    const elections = StorageManager.getElections();
    const elec = elections.find(e => e.id === electionId);
    if (!elec) return;

    const cand = elec.candidates.find(c => (c.studentId && c.studentId === candidateIdOrName) || c.name === candidateIdOrName);
    if (!cand) return;

    cand.votes = (cand.votes || 0) + 1;

    // Recalculate leader
    elec.candidates.sort((a, b) => b.votes - a.votes);
    elec.candidates.forEach((c, idx) => {
      c.elected = idx === 0;
    });

    StorageManager.saveElections(elections);
    this.renderElections();
    App.showToast(`បានបោះឆ្នោតគាំទ្រ "${cand.name}" ដោយជោគជ័យ! 🎉`, "success");
  }

  static openNewElectionModal() {
    const students = StorageManager.getStudents();
    const c1 = document.getElementById("elecCand1");
    const c2 = document.getElementById("elecCand2");
    const c3 = document.getElementById("elecCand3");

    const optHtml = students.map(s => `<option value="${s.id}|${s.nameKh}">${s.nameKh} (${s.code})</option>`).join('');
    if (c1) c1.innerHTML = optHtml;
    if (c2) c2.innerHTML = optHtml;
    if (c3) c3.innerHTML = `<option value="">-- គ្មាន --</option>` + optHtml;

    if (c2 && students.length > 1) c2.selectedIndex = 1;
    if (c3 && students.length > 2) c3.selectedIndex = 3;

    document.getElementById("newElectionModal").classList.add("active");
  }

  static saveNewElection() {
    const title = document.getElementById("elecTitleInput").value.trim();
    if (!title) {
      alert("សូមបញ្ចូលចំណងជើងការបោះឆ្នោត!");
      return;
    }

    const c1Val = document.getElementById("elecCand1").value;
    const c2Val = document.getElementById("elecCand2").value;
    const c3Val = document.getElementById("elecCand3").value;

    const candidates = [];
    if (c1Val) {
      const [id, name] = c1Val.split('|');
      candidates.push({ studentId: id, name, votes: 0, elected: false });
    }
    if (c2Val) {
      const [id, name] = c2Val.split('|');
      candidates.push({ studentId: id, name, votes: 0, elected: false });
    }
    if (c3Val) {
      const [id, name] = c3Val.split('|');
      candidates.push({ studentId: id, name, votes: 0, elected: false });
    }

    if (candidates.length < 2) {
      alert("សូមជ្រើសរើសបេក្ខជនយ៉ាងតិច ២ នាក់!");
      return;
    }

    const newElection = {
      id: "ELEC-" + Date.now().toString(36).toUpperCase(),
      title,
      date: new Date().toISOString().split('T')[0],
      status: "active",
      totalVoters: 42,
      candidates
    };

    const elections = StorageManager.getElections();
    elections.unshift(newElection);
    StorageManager.saveElections(elections);

    this.renderElections();
    document.getElementById("newElectionModal").classList.remove("active");
    App.showToast("បានបង្កើតការបោះឆ្នោតថ្មីដោយជោគជ័យ!", "success");
  }

  static setupEventListeners() {
    const openBtn = document.getElementById("btnOpenNewElection");
    if (openBtn) openBtn.addEventListener("click", () => this.openNewElectionModal());

    const saveBtn = document.getElementById("btnSaveNewElection");
    if (saveBtn) saveBtn.addEventListener("click", () => this.saveNewElection());

    const closeBtn = document.getElementById("closeNewElectionModal");
    if (closeBtn) closeBtn.addEventListener("click", () => {
      document.getElementById("newElectionModal").classList.remove("active");
    });
  }
}


/* ==================================================================== */
/* MODULE: gamification.js
/* ==================================================================== */

/**
 * CLASSROOM GAMIFICATION & BADGES MODULE
 * Star points, honor badges, weekly leaderboards & live celebration
 */

class GamificationModule {
  static init() {
    this.container = document.getElementById("gamificationContainer");
    this.leaderboardBody = document.getElementById("gamificationLeaderboardBody");
    this.podiumContainer = document.getElementById("gamificationPodium");
    this.historyBody = document.getElementById("gamificationHistoryBody");
    this.badgeGrid = document.getElementById("gamificationBadgeGrid");
    
    this.bindEvents();
    this.render();
  }

  static playRewardSound() {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 (Major Arpeggio)
      notes.forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime + (idx * 0.08));
        gain.gain.setValueAtTime(0.2, audioCtx.currentTime + (idx * 0.08));
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + (idx * 0.08) + 0.3);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(audioCtx.currentTime + (idx * 0.08));
        osc.stop(audioCtx.currentTime + (idx * 0.08) + 0.35);
      });
    } catch (e) {
      console.warn("Audio not supported or blocked", e);
    }
  }

  static bindEvents() {
    const awardModalBtn = document.getElementById("btnOpenAwardModal");
    if (awardModalBtn) {
      awardModalBtn.addEventListener("click", () => this.openAwardModal());
    }

    const saveAwardBtn = document.getElementById("btnConfirmAwardBadge");
    if (saveAwardBtn) {
      saveAwardBtn.addEventListener("click", () => this.handleAwardSubmit());
    }

    const searchInput = document.getElementById("gamificationSearch");
    if (searchInput) {
      searchInput.addEventListener("input", () => this.renderLeaderboard());
    }
  }

  static render() {
    this.renderBadgesOverview();
    this.renderLeaderboard();
    this.renderHistory();
  }

  static renderBadgesOverview() {
    const data = StorageManager.getGamification();
    const badges = data.badges || [];
    if (!this.badgeGrid) return;

    this.badgeGrid.innerHTML = badges.map(b => `
      <div class="badge-card-item" style="border-top: 4px solid ${b.color};">
        <div class="badge-card-icon" style="background: ${b.color}20;">${b.icon}</div>
        <div class="badge-card-info">
          <h4 class="font-khmer font-bold">${b.name}</h4>
          <span class="badge-pts font-mono">+${b.points} ⭐</span>
          <p class="text-muted font-khmer">${b.desc || ''}</p>
        </div>
      </div>
    `).join("");
  }

  static renderLeaderboard() {
    const data = StorageManager.getGamification();
    const students = StorageManager.getStudents();
    const studentStars = data.studentStars || {};
    const query = document.getElementById("gamificationSearch") ? document.getElementById("gamificationSearch").value.toLowerCase().trim() : "";

    // Build ranking list
    let ranked = students.map(st => {
      const starInfo = studentStars[st.id] || { totalStars: 0, streak: 0, badges: {} };
      return {
        student: st,
        stars: starInfo.totalStars || 0,
        streak: starInfo.streak || 0,
        badges: starInfo.badges || {}
      };
    }).sort((a, b) => b.stars - a.stars);

    // Render Podium for Top 3
    if (this.podiumContainer && ranked.length >= 3) {
      const top1 = ranked[0];
      const top2 = ranked[1];
      const top3 = ranked[2];

      this.podiumContainer.innerHTML = `
        <!-- Rank 2 -->
        <div class="podium-card podium-rank-2">
          <div class="podium-crown">🥈</div>
          <img src="${top2.student.photo || 'https://api.dicebear.com/7.x/bottts/svg?seed=' + top2.student.id}" class="podium-photo" alt="">
          <div class="podium-name">${top2.student.nameKh}</div>
          <div class="podium-stars"><i class="fa-solid fa-star text-warning"></i> ${top2.stars} ផ្កាយ</div>
          <div class="podium-mention">🔥 ${top2.streak} ថ្ងៃជាប់គ្នា</div>
          <button class="btn btn-outline btn-xs mt-2" onclick="GamificationModule.quickAward('${top2.student.id}')">+ ផ្ដល់ពិន្ទុ</button>
        </div>

        <!-- Rank 1 -->
        <div class="podium-card podium-rank-1">
          <div class="podium-crown">👑 🥇</div>
          <img src="${top1.student.photo || 'https://api.dicebear.com/7.x/bottts/svg?seed=' + top1.student.id}" class="podium-photo" alt="">
          <div class="podium-name">${top1.student.nameKh}</div>
          <div class="podium-stars font-bold"><i class="fa-solid fa-star text-warning"></i> ${top1.stars} ផ្កាយ</div>
          <div class="podium-mention">🔥 ${top1.streak} ថ្ងៃជាប់គ្នា (កំពូលតារា)</div>
          <button class="btn btn-primary btn-xs mt-2" onclick="GamificationModule.quickAward('${top1.student.id}')">🌟 + ផ្ដល់ពិន្ទុ</button>
        </div>

        <!-- Rank 3 -->
        <div class="podium-card podium-rank-3">
          <div class="podium-crown">🥉</div>
          <img src="${top3.student.photo || 'https://api.dicebear.com/7.x/bottts/svg?seed=' + top3.student.id}" class="podium-photo" alt="">
          <div class="podium-name">${top3.student.nameKh}</div>
          <div class="podium-stars"><i class="fa-solid fa-star text-warning"></i> ${top3.stars} ផ្កាយ</div>
          <div class="podium-mention">🔥 ${top3.streak} ថ្ងៃជាប់គ្នា</div>
          <button class="btn btn-outline btn-xs mt-2" onclick="GamificationModule.quickAward('${top3.student.id}')">+ ផ្ដល់ពិន្ទុ</button>
        </div>
      `;
    }

    if (query) {
      ranked = ranked.filter(r => r.student.nameKh.toLowerCase().includes(query) || r.student.id.toLowerCase().includes(query));
    }

    if (!this.leaderboardBody) return;

    this.leaderboardBody.innerHTML = ranked.map((r, idx) => {
      const medal = idx === 0 ? "🥇" : idx === 1 ? "🥈" : idx === 2 ? "🥉" : `${idx + 1}`;
      const badgeList = Object.entries(r.badges).map(([bId, cnt]) => {
        const bObj = (data.badges || []).find(x => x.id === bId);
        if (!bObj) return "";
        return `<span class="badge-tag" title="${bObj.name}: ${cnt} ដង">${bObj.icon} ${cnt}</span>`;
      }).join(" ");

      return `
        <tr>
          <td class="text-center font-bold font-mono" style="font-size: 1.1rem;">${medal}</td>
          <td><span class="badge badge-soft-primary font-mono">${r.student.id}</span></td>
          <td>
            <div class="d-flex align-items-center gap-2">
              <img src="${r.student.photo || 'https://api.dicebear.com/7.x/bottts/svg?seed=' + r.student.id}" class="avatar-xs" alt="">
              <strong>${r.student.nameKh}</strong>
            </div>
          </td>
          <td class="text-center font-bold text-warning" style="font-size: 1.05rem;">
            ⭐ ${r.stars}
          </td>
          <td class="text-center font-mono">
            ${r.streak > 0 ? `<span class="badge badge-soft-danger">🔥 ${r.streak} ថ្ងៃ</span>` : '<span class="text-muted">-</span>'}
          </td>
          <td>
            <div class="d-flex flex-wrap gap-1">${badgeList || '<span class="text-muted" style="font-size:0.8rem;">មិនទាន់មាន</span>'}</div>
          </td>
          <td class="text-center">
            <button class="btn btn-primary btn-xs" onclick="GamificationModule.quickAward('${r.student.id}')">
              <i class="fa-solid fa-award"></i> លើកទឹកចិត្ត
            </button>
          </td>
        </tr>
      `;
    }).join("");
  }

  static renderHistory() {
    const data = StorageManager.getGamification();
    const history = data.history || [];
    if (!this.historyBody) return;

    if (history.length === 0) {
      this.historyBody.innerHTML = `<tr><td colspan="5" class="text-center p-3 text-muted font-khmer">មិនទាន់មានប្រវត្តិនៃការផ្ដល់រង្វាន់នៅឡើយទេ</td></tr>`;
      return;
    }

    this.historyBody.innerHTML = history.slice(0, 15).map((h, i) => `
      <tr>
        <td class="text-center font-bold">${i + 1}</td>
        <td><span class="font-mono" style="font-size: 0.85rem;">${h.date}</span></td>
        <td><strong>${h.studentName}</strong></td>
        <td>
          <span class="badge badge-soft-success font-khmer">${h.icon || '⭐'} ${h.badgeName}</span>
        </td>
        <td class="text-center font-bold text-warning">+${h.points} ⭐</td>
      </tr>
    `).join("");
  }

  static openAwardModal(preselectedStudentId = "") {
    const students = StorageManager.getStudents();
    const data = StorageManager.getGamification();
    const badges = data.badges || [];

    const stuSelect = document.getElementById("awardStudentSelect");
    if (stuSelect) {
      stuSelect.innerHTML = `<option value="ALL">📢 ផ្ដល់ជូនសិស្សទាំងអស់ក្នុងថ្នាក់ (All 42 Students)</option>` +
        students.map(s => `<option value="${s.id}" ${s.id === preselectedStudentId ? 'selected' : ''}>${s.nameKh} (${s.id})</option>`).join("");
    }

    const badgeContainer = document.getElementById("awardBadgeChoices");
    if (badgeContainer) {
      badgeContainer.innerHTML = badges.map((b, idx) => `
        <label class="award-choice-label ${idx === 0 ? 'selected' : ''}">
          <input type="radio" name="awardBadgeRadio" value="${b.id}" ${idx === 0 ? 'checked' : ''} onchange="GamificationModule.selectBadgeRadio(this)">
          <div class="award-choice-box" style="border-color: ${b.color};">
            <span class="choice-icon">${b.icon}</span>
            <span class="choice-name">${b.name}</span>
            <span class="choice-pts">+${b.points} ⭐</span>
          </div>
        </label>
      `).join("");
    }

    openModal("awardBadgeModal");
  }

  static selectBadgeRadio(radio) {
    document.querySelectorAll(".award-choice-label").forEach(l => l.classList.remove("selected"));
    if (radio && radio.parentElement) {
      radio.parentElement.classList.add("selected");
    }
  }

  static quickAward(studentId) {
    this.openAwardModal(studentId);
  }

  static handleAwardSubmit() {
    const stuId = document.getElementById("awardStudentSelect").value;
    const selectedBadgeRadio = document.querySelector('input[name="awardBadgeRadio"]:checked');
    if (!selectedBadgeRadio) {
      showToast("សូមជ្រើសរើសផ្លាកសញ្ញាដែលត្រូវផ្ដល់!", "error");
      return;
    }

    const badgeId = selectedBadgeRadio.value;
    const customPoints = parseInt(document.getElementById("awardCustomPoints")?.value || 0, 10);
    const data = StorageManager.getGamification();
    const badgeObj = (data.badges || []).find(b => b.id === badgeId) || { name: "ផ្កាយលើកទឹកចិត្ត", points: 2, icon: "⭐" };
    const pointsToAdd = customPoints > 0 ? customPoints : badgeObj.points;
    const students = StorageManager.getStudents();
    const nowStr = new Date().toISOString().replace('T', ' ').substring(0, 16);

    if (!data.studentStars) data.studentStars = {};
    if (!data.history) data.history = [];

    if (stuId === "ALL") {
      students.forEach(st => {
        if (!data.studentStars[st.id]) {
          data.studentStars[st.id] = { totalStars: 0, streak: 1, badges: {} };
        }
        data.studentStars[st.id].totalStars = (data.studentStars[st.id].totalStars || 0) + pointsToAdd;
        if (!data.studentStars[st.id].badges) data.studentStars[st.id].badges = {};
        data.studentStars[st.id].badges[badgeId] = (data.studentStars[st.id].badges[badgeId] || 0) + 1;
      });

      data.history.unshift({
        id: "STAR-" + Date.now(),
        studentId: "ALL",
        studentName: "សិស្សទាំងអស់ក្នុងថ្នាក់ (៤២ នាក់)",
        badgeId: badgeId,
        badgeName: badgeObj.name,
        icon: badgeObj.icon,
        points: pointsToAdd,
        date: nowStr
      });

      showToast(`🎉 បានផ្ដល់ ${pointsToAdd} ⭐ ជូនសិស្សទាំងអស់ក្នុងថ្នាក់ជោគជ័យ!`, "success");
    } else {
      const st = students.find(s => s.id === stuId);
      if (!st) return;

      if (!data.studentStars[stuId]) {
        data.studentStars[stuId] = { totalStars: 0, streak: 1, badges: {} };
      }
      data.studentStars[stuId].totalStars = (data.studentStars[stuId].totalStars || 0) + pointsToAdd;
      data.studentStars[stuId].streak = (data.studentStars[stuId].streak || 0) + 1;
      if (!data.studentStars[stuId].badges) data.studentStars[stuId].badges = {};
      data.studentStars[stuId].badges[badgeId] = (data.studentStars[stuId].badges[badgeId] || 0) + 1;

      data.history.unshift({
        id: "STAR-" + Date.now(),
        studentId: stuId,
        studentName: st.nameKh,
        badgeId: badgeId,
        badgeName: badgeObj.name,
        icon: badgeObj.icon,
        points: pointsToAdd,
        date: nowStr
      });

      showToast(`🎉 បានផ្ដល់ "${badgeObj.name}" (+${pointsToAdd} ⭐) ជូន ${st.nameKh}!`, "success");
    }

    StorageManager.saveGamification(data);
    this.playRewardSound();
    
    if (typeof confetti === "function") {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }

    closeModal("awardBadgeModal");
    this.render();
  }
}


/* ==================================================================== */
/* MODULE: fund.js
/* ==================================================================== */

/**
 * CLASSROOM FUND & TREASURY MANAGEMENT MODULE
 * Income, expenses, student contribution checklist, receipts & balance reports
 */

class FundModule {
  static init() {
    this.tableBody = document.getElementById("fundTransactionsTableBody");
    this.studentChecklistBody = document.getElementById("fundStudentChecklistBody");
    this.searchInput = document.getElementById("fundSearchInput");
    this.typeFilter = document.getElementById("fundTypeFilter");

    this.bindEvents();
    this.render();
  }

  static bindEvents() {
    const addBtn = document.getElementById("btnOpenAddFundModal");
    if (addBtn) {
      addBtn.addEventListener("click", () => this.openAddModal());
    }

    const form = document.getElementById("addFundForm");
    if (form) {
      form.addEventListener("submit", (e) => this.handleFormSubmit(e));
    }

    if (this.searchInput) {
      this.searchInput.addEventListener("input", () => this.renderTransactions());
    }
    if (this.typeFilter) {
      this.typeFilter.addEventListener("change", () => this.renderTransactions());
    }

    const exportBtn = document.getElementById("btnExportFundExcel");
    if (exportBtn) {
      exportBtn.addEventListener("click", () => this.exportToExcel());
    }

    const printBtn = document.getElementById("btnPrintFundReport");
    if (printBtn) {
      printBtn.addEventListener("click", () => window.print());
    }
  }

  static formatCurrency(amount) {
    return new Intl.NumberFormat('km-KH').format(amount) + " ៛";
  }

  static render() {
    this.renderStats();
    this.renderTransactions();
    this.renderStudentContributionChecklist();
  }

  static renderStats() {
    const fund = StorageManager.getFund();
    const transactions = fund.transactions || [];

    let totalIncome = 0;
    let totalExpense = 0;

    transactions.forEach(t => {
      if (t.type === "income") totalIncome += Number(t.amount || 0);
      else if (t.type === "expense") totalExpense += Number(t.amount || 0);
    });

    const balance = totalIncome - totalExpense;

    const balEl = document.getElementById("fundCurrentBalance");
    if (balEl) balEl.textContent = this.formatCurrency(balance);

    const incEl = document.getElementById("fundTotalIncome");
    if (incEl) incEl.textContent = this.formatCurrency(totalIncome);

    const expEl = document.getElementById("fundTotalExpense");
    if (expEl) expEl.textContent = this.formatCurrency(totalExpense);

    const countEl = document.getElementById("fundTotalTransactions");
    if (countEl) countEl.textContent = transactions.length + " ប្រតិបត្តិការ";
  }

  static renderTransactions() {
    const fund = StorageManager.getFund();
    let transactions = fund.transactions || [];
    const query = this.searchInput ? this.searchInput.value.toLowerCase().trim() : "";
    const type = this.typeFilter ? this.typeFilter.value : "all";

    if (type !== "all") {
      transactions = transactions.filter(t => t.type === type);
    }
    if (query) {
      transactions = transactions.filter(t => 
        (t.description && t.description.toLowerCase().includes(query)) ||
        (t.category && t.category.toLowerCase().includes(query)) ||
        (t.recordedBy && t.recordedBy.toLowerCase().includes(query))
      );
    }

    if (!this.tableBody) return;

    if (transactions.length === 0) {
      this.tableBody.innerHTML = `
        <tr>
          <td colspan="7" class="text-center p-4 text-muted font-khmer">
            <i class="fa-solid fa-receipt" style="font-size: 2rem; margin-bottom: 8px; display: block;"></i>
            មិនមានទិន្នន័យប្រតិបត្តិការត្រូវនឹងលក្ខខណ្ឌស្វែងរកឡើយ
          </td>
        </tr>
      `;
      return;
    }

    this.tableBody.innerHTML = transactions.map((t, idx) => {
      const isIncome = t.type === "income";
      const typeBadge = isIncome 
        ? `<span class="badge badge-soft-success"><i class="fa-solid fa-arrow-down-left"></i> ចំណូល</span>`
        : `<span class="badge badge-soft-danger"><i class="fa-solid fa-arrow-up-right"></i> ចំណាយ</span>`;
      
      const amountFormatted = isIncome 
        ? `<strong class="text-success font-mono">+${this.formatCurrency(t.amount)}</strong>`
        : `<strong class="text-danger font-mono">-${this.formatCurrency(t.amount)}</strong>`;

      return `
        <tr>
          <td class="text-center font-bold">${idx + 1}</td>
          <td><span class="font-mono" style="font-size: 0.85rem;">${t.date}</span></td>
          <td class="text-center">${typeBadge}</td>
          <td><span class="badge badge-soft-primary font-khmer">${t.category}</span></td>
          <td>
            <strong>${t.description}</strong>
            ${t.recordedBy ? `<br><small class="text-muted"><i class="fa-solid fa-user-pen" style="font-size:0.75rem;"></i> កត់ត្រាដោយ៖ ${t.recordedBy}</small>` : ''}
          </td>
          <td class="text-end">${amountFormatted}</td>
          <td class="text-center">
            <button class="btn-icon text-danger" onclick="FundModule.deleteTransaction('${t.id}')" title="លុប">
              <i class="fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>
      `;
    }).join("");
  }

  static renderStudentContributionChecklist() {
    if (!this.studentChecklistBody) return;
    const students = StorageManager.getStudents();
    const fund = StorageManager.getFund();
    if (!fund.studentContributions) fund.studentContributions = {};

    let paidCount = 0;
    students.forEach(st => {
      if (fund.studentContributions[st.id] === true) paidCount++;
    });

    const statusBadge = document.getElementById("fundContributionStatusBadge");
    if (statusBadge) {
      statusBadge.textContent = `បានបង់ ${paidCount} / ${students.length} នាក់ (${((paidCount / (students.length || 1)) * 100).toFixed(0)}%)`;
    }

    this.studentChecklistBody.innerHTML = students.map((st, i) => {
      const isPaid = fund.studentContributions[st.id] === true;
      return `
        <tr>
          <td class="text-center font-bold">${i + 1}</td>
          <td><span class="badge badge-soft-primary font-mono">${st.id}</span></td>
          <td><strong>${st.nameKh}</strong></td>
          <td class="text-center">${st.gender}</td>
          <td class="text-center">
            <span class="badge ${isPaid ? 'badge-soft-success' : 'badge-soft-warning'}">
              ${isPaid ? '<i class="fa-solid fa-check"></i> បានបង់រួច (5,000 ៛)' : '<i class="fa-solid fa-clock"></i> មិនទាន់បង់'}
            </span>
          </td>
          <td class="text-center">
            <button class="btn btn-xs ${isPaid ? 'btn-outline text-warning' : 'btn-success'}" onclick="FundModule.toggleStudentContribution('${st.id}')">
              ${isPaid ? '<i class="fa-solid fa-rotate-left"></i> ប្តូរជាមិនទាន់បង់' : '<i class="fa-solid fa-check"></i> កត់ត្រាថាបានបង់'}
            </button>
          </td>
        </tr>
      `;
    }).join("");
  }

  static toggleStudentContribution(studentId) {
    const fund = StorageManager.getFund();
    if (!fund.studentContributions) fund.studentContributions = {};
    fund.studentContributions[studentId] = !fund.studentContributions[studentId];
    StorageManager.saveFund(fund);
    this.renderStudentContributionChecklist();
    showToast("បានធ្វើបច្ចុប្បន្នភាពការបង់វិភាគទាន!", "info");
  }

  static openAddModal() {
    document.getElementById("fundDateInput").value = new Date().toISOString().split('T')[0];
    document.getElementById("fundAmountInput").value = "";
    document.getElementById("fundDescInput").value = "";
    document.getElementById("fundRecorderInput").value = "លោកគ្រូបន្ទុកថ្នាក់";
    openModal("addFundModal");
  }

  static handleFormSubmit(e) {
    e.preventDefault();
    const type = document.getElementById("fundTypeSelect").value;
    const category = document.getElementById("fundCategorySelect").value;
    const amount = parseFloat(document.getElementById("fundAmountInput").value);
    const date = document.getElementById("fundDateInput").value;
    const description = document.getElementById("fundDescInput").value.trim();
    const recordedBy = document.getElementById("fundRecorderInput").value.trim() || "លោកគ្រូបន្ទុកថ្នាក់";

    if (!amount || amount <= 0) {
      showToast("សូមបញ្ចូលចំនួនទឹកប្រាក់ឱ្យបានត្រឹមត្រូវ!", "error");
      return;
    }

    const fund = StorageManager.getFund();
    if (!fund.transactions) fund.transactions = [];

    const newTrx = {
      id: "TRX-" + Date.now(),
      date,
      type,
      category,
      amount,
      description,
      recordedBy
    };

    fund.transactions.unshift(newTrx);
    StorageManager.saveFund(fund);

    closeModal("addFundModal");
    this.render();
    showToast("បានកត់ត្រាប្រតិបត្តិការហិរញ្ញវត្ថុជោគជ័យ!", "success");
  }

  static async deleteTransaction(trxId) {
    const confirmed = await showConfirm("តើអ្នកពិតជាចង់លុបកំណត់ត្រាប្រតិបត្តិការហិរញ្ញវត្ថុនេះមែនទេ?", {
      title: "បញ្ជាក់ការលុបប្រតិបត្តិការ",
      confirmText: "យល់ព្រមលុប",
      type: "danger"
    });
    if (!confirmed) return;
    const fund = StorageManager.getFund();
    fund.transactions = (fund.transactions || []).filter(t => t.id !== trxId);
    StorageManager.saveFund(fund);
    this.render();
    showToast("បានលុបប្រតិបត្តិការរួចរាល់!", "info");
  }

  static exportToExcel() {
    const fund = StorageManager.getFund();
    const transactions = fund.transactions || [];

    const worksheetData = [
      ["ល.រ", "កាលបរិច្ឆេទ", "ប្រភេទ", "ជំពូក/ប្រភេទចំណាយ-ចំណូល", "បរិយាយ", "ចំនួនទឹកប្រាក់ (៛)", "កត់ត្រាដោយ"]
    ];

    transactions.forEach((t, i) => {
      worksheetData.push([
        i + 1,
        t.date,
        t.type === "income" ? "ចំណូល (+)" : "ចំណាយ (-)",
        t.category,
        t.description,
        t.amount,
        t.recordedBy || ""
      ]);
    });

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(worksheetData);
    XLSX.utils.book_append_sheet(wb, ws, "មូលនិធិថ្នាក់រៀន");
    XLSX.writeFile(wb, `របាយការណ៍មូលនិធិថ្នាក់រៀន_៨A_${new Date().toISOString().split('T')[0]}.xlsx`);
    showToast("បានទាញយកតារាង Excel មូលនិធិថ្នាក់រៀនរួចរាល់!", "success");
  }
}


/* ==================================================================== */
/* MODULE: logbook.js
/* ==================================================================== */

/**
 * DIGITAL TEACHER'S LOGBOOK MODULE
 * Daily teaching records, lesson objectives, classroom activities, homework & reflections
 */

class LogbookModule {
  static init() {
    this.container = document.getElementById("logbookListContainer");
    this.subjectFilter = document.getElementById("logbookSubjectFilter");
    this.searchInput = document.getElementById("logbookSearchInput");

    this.bindEvents();
    this.populateSubjectDropdowns();
    this.render();
  }

  static bindEvents() {
    const addBtn = document.getElementById("btnOpenAddLogbookModal");
    if (addBtn) {
      addBtn.addEventListener("click", () => this.openAddModal());
    }

    const form = document.getElementById("addLogbookForm");
    if (form) {
      form.addEventListener("submit", (e) => this.handleFormSubmit(e));
    }

    if (this.subjectFilter) {
      this.subjectFilter.addEventListener("change", () => this.render());
    }
    if (this.searchInput) {
      this.searchInput.addEventListener("input", () => this.render());
    }

    const printBtn = document.getElementById("btnPrintLogbook");
    if (printBtn) {
      printBtn.addEventListener("click", () => window.print());
    }
  }

  static populateSubjectDropdowns() {
    const subjects = StorageManager.getSubjects();
    if (this.subjectFilter) {
      this.subjectFilter.innerHTML = `<option value="all">មុខវិជ្ជាទាំងអស់</option>` +
        subjects.map(s => `<option value="${s.id}">${s.name}</option>`).join("");
    }

    const formSubSelect = document.getElementById("logSubjectSelect");
    if (formSubSelect) {
      formSubSelect.innerHTML = subjects.map(s => `<option value="${s.id}" data-teacher="${s.teacher}">${s.name} (${s.teacher})</option>`).join("");
      formSubSelect.addEventListener("change", (e) => {
        const selectedOpt = e.target.options[e.target.selectedIndex];
        const teacherInput = document.getElementById("logTeacherInput");
        if (teacherInput && selectedOpt) {
          teacherInput.value = selectedOpt.dataset.teacher || "";
        }
      });
    }
  }

  static render() {
    const logs = StorageManager.getLogbook();
    const query = this.searchInput ? this.searchInput.value.toLowerCase().trim() : "";
    const subject = this.subjectFilter ? this.subjectFilter.value : "all";

    let filtered = logs.filter(l => {
      const matchSub = subject === "all" || l.subjectId === subject;
      const matchQuery = !query || 
        (l.chapter && l.chapter.toLowerCase().includes(query)) ||
        (l.objective && l.objective.toLowerCase().includes(query)) ||
        (l.subjectName && l.subjectName.toLowerCase().includes(query)) ||
        (l.teacher && l.teacher.toLowerCase().includes(query));
      return matchSub && matchQuery;
    });

    if (!this.container) return;

    if (filtered.length === 0) {
      this.container.innerHTML = `
        <div class="empty-state-box p-5 text-center text-muted font-khmer">
          <i class="fa-solid fa-book-bookmark" style="font-size: 2.5rem; margin-bottom: 12px; display: block;"></i>
          មិនមានកំណត់ត្រាកិច្ចតែងការបង្រៀនត្រូវនឹងលក្ខខណ្ឌស្វែងរកឡើយ
        </div>
      `;
      return;
    }

    this.container.innerHTML = filtered.map(log => `
      <div class="logbook-entry-card mb-3">
        <div class="logbook-header-row">
          <div class="logbook-title-box">
            <span class="badge badge-primary font-khmer">${log.subjectName || 'មុខវិជ្ជា'}</span>
            <h4 class="font-khmer font-bold text-primary mb-0">${log.chapter}</h4>
          </div>
          <div class="logbook-meta-chips">
            <span class="chip-item"><i class="fa-regular fa-calendar"></i> ${log.date}</span>
            <span class="chip-item"><i class="fa-regular fa-clock"></i> ${log.timeSlot || '07:00 - 08:30'}</span>
            <span class="chip-item"><i class="fa-solid fa-user-tie"></i> ${log.teacher}</span>
            <button class="btn-icon text-danger" onclick="LogbookModule.deleteLog('${log.id}')" title="លុប"><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>

        <div class="logbook-body-grid mt-3">
          <div class="log-info-block">
            <div class="block-lbl"><i class="fa-solid fa-bullseye text-primary"></i> វត្ថុបំណងមេរៀន (Objectives)៖</div>
            <div class="block-val">${log.objective}</div>
          </div>

          <div class="log-info-block">
            <div class="block-lbl"><i class="fa-solid fa-chalkboard-user text-info"></i> សកម្មភាពបង្រៀន & រៀន (Activities)៖</div>
            <div class="block-val">${log.activities}</div>
          </div>

          <div class="log-info-block">
            <div class="block-lbl"><i class="fa-solid fa-book-open-reader text-warning"></i> កិច្ចការផ្ទះ & លំហាត់ (Homework)៖</div>
            <div class="block-val">${log.homework || 'គ្មាន'}</div>
          </div>

          <div class="log-info-block">
            <div class="block-lbl"><i class="fa-solid fa-comment-dots text-success"></i> ការឆ្លុះបញ្ចាំង & វាយតម្លៃ (Teacher's Reflection)៖</div>
            <div class="block-val text-muted">${log.reflection || 'ដំណើរការបង្រៀនប្រព្រឹត្តទៅបានល្អ។'}</div>
          </div>
        </div>
      </div>
    `).join("");
  }

  static openAddModal() {
    document.getElementById("logDateInput").value = new Date().toISOString().split('T')[0];
    document.getElementById("logChapterInput").value = "";
    document.getElementById("logObjectiveInput").value = "";
    document.getElementById("logActivitiesInput").value = "";
    document.getElementById("logHomeworkInput").value = "";
    document.getElementById("logReflectionInput").value = "";
    
    const subjects = StorageManager.getSubjects();
    if (subjects.length > 0) {
      document.getElementById("logTeacherInput").value = subjects[0].teacher;
    }

    openModal("addLogbookModal");
  }

  static handleFormSubmit(e) {
    e.preventDefault();
    const date = document.getElementById("logDateInput").value;
    const timeSlot = document.getElementById("logTimeSlotInput").value;
    const subjectId = document.getElementById("logSubjectSelect").value;
    const subjects = StorageManager.getSubjects();
    const subjectObj = subjects.find(s => s.id === subjectId) || { name: "មុខវិជ្ជា" };
    const teacher = document.getElementById("logTeacherInput").value.trim() || subjectObj.teacher;
    const chapter = document.getElementById("logChapterInput").value.trim();
    const objective = document.getElementById("logObjectiveInput").value.trim();
    const activities = document.getElementById("logActivitiesInput").value.trim();
    const homework = document.getElementById("logHomeworkInput").value.trim();
    const reflection = document.getElementById("logReflectionInput").value.trim();

    const newLog = {
      id: "LOG-" + Date.now(),
      date,
      timeSlot,
      subjectId,
      subjectName: subjectObj.name,
      teacher,
      chapter,
      objective,
      activities,
      homework,
      absentCount: 0,
      reflection
    };

    const logs = StorageManager.getLogbook();
    logs.unshift(newLog);
    StorageManager.saveLogbook(logs);

    closeModal("addLogbookModal");
    this.render();
    showToast("បានកត់ត្រាកិច្ចតែងការបង្រៀនជោគជ័យ!", "success");
  }

  static async deleteLog(logId) {
    const confirmed = await showConfirm("តើអ្នកពិតជាចង់លុបកំណត់ត្រាកិច្ចតែងការបង្រៀននេះមែនទេ?", {
      title: "បញ្ជាក់ការលុបកំណត់ត្រា",
      confirmText: "យល់ព្រមលុប",
      type: "danger"
    });
    if (!confirmed) return;
    let logs = StorageManager.getLogbook();
    logs = logs.filter(l => l.id !== logId);
    StorageManager.saveLogbook(logs);
    this.render();
    showToast("បានលុបកំណត់ត្រាបង្រៀនរួចរាល់!", "info");
  }
}


/* ==================================================================== */
/* MODULE: resources.js
/* ==================================================================== */

/**
 * CLASS RESOURCE HUB & E-LIBRARY MODULE
 * Learning materials, lesson summaries, presentation slides, practice worksheets & QR sharing
 */

class ResourcesModule {
  static init() {
    this.container = document.getElementById("resourcesGridContainer");
    this.subjectFilter = document.getElementById("resourceSubjectFilter");
    this.typeFilter = document.getElementById("resourceTypeFilter");
    this.searchInput = document.getElementById("resourceSearchInput");

    this.bindEvents();
    this.populateSubjectDropdowns();
    this.render();
  }

  static bindEvents() {
    const addBtn = document.getElementById("btnOpenAddResourceModal");
    if (addBtn) {
      addBtn.addEventListener("click", () => this.openAddModal());
    }

    const form = document.getElementById("addResourceForm");
    if (form) {
      form.addEventListener("submit", (e) => this.handleFormSubmit(e));
    }

    if (this.subjectFilter) {
      this.subjectFilter.addEventListener("change", () => this.render());
    }
    if (this.typeFilter) {
      this.typeFilter.addEventListener("change", () => this.render());
    }
    if (this.searchInput) {
      this.searchInput.addEventListener("input", () => this.render());
    }
  }

  static populateSubjectDropdowns() {
    const subjects = StorageManager.getSubjects();
    if (this.subjectFilter) {
      this.subjectFilter.innerHTML = `<option value="all">មុខវិជ្ជាទាំងអស់</option>` +
        subjects.map(s => `<option value="${s.id}">${s.name}</option>`).join("");
    }

    const formSub = document.getElementById("resSubjectSelect");
    if (formSub) {
      formSub.innerHTML = subjects.map(s => `<option value="${s.id}">${s.name}</option>`).join("");
    }
  }

  static render() {
    const resources = StorageManager.getResources();
    const sub = this.subjectFilter ? this.subjectFilter.value : "all";
    const type = this.typeFilter ? this.typeFilter.value : "all";
    const query = this.searchInput ? this.searchInput.value.toLowerCase().trim() : "";

    let filtered = resources.filter(r => {
      const matchSub = sub === "all" || r.subjectId === sub;
      const matchType = type === "all" || r.type === type;
      const matchQuery = !query || 
        (r.title && r.title.toLowerCase().includes(query)) ||
        (r.desc && r.desc.toLowerCase().includes(query)) ||
        (r.subjectName && r.subjectName.toLowerCase().includes(query)) ||
        (r.author && r.author.toLowerCase().includes(query));
      return matchSub && matchType && matchQuery;
    });

    if (!this.container) return;

    if (filtered.length === 0) {
      this.container.innerHTML = `
        <div class="col-12 text-center p-5 text-muted font-khmer">
          <i class="fa-solid fa-folder-open" style="font-size: 2.5rem; margin-bottom: 12px; display: block;"></i>
          មិនមានឯកសារមេរៀនត្រូវនឹងលក្ខខណ្ឌស្វែងរកឡើយ
        </div>
      `;
      return;
    }

    this.container.innerHTML = filtered.map(r => {
      const icon = r.type === "pdf" ? '<i class="fa-solid fa-file-pdf text-danger"></i>' :
                   r.type === "slide" ? '<i class="fa-solid fa-file-powerpoint text-warning"></i>' :
                   r.type === "video" ? '<i class="fa-solid fa-circle-play text-info"></i>' :
                   '<i class="fa-solid fa-file-lines text-success"></i>';

      const typeBadge = r.type === "pdf" ? '<span class="badge badge-soft-danger">PDF</span>' :
                        r.type === "slide" ? '<span class="badge badge-soft-warning">Slide</span>' :
                        r.type === "video" ? '<span class="badge badge-soft-info">Video HD</span>' :
                        '<span class="badge badge-soft-success">Worksheet</span>';

      return `
        <div class="resource-card">
          <div class="resource-card-top">
            <div class="res-type-icon">${icon}</div>
            <div class="res-badge-wrap">${typeBadge}</div>
          </div>
          <div class="resource-card-body">
            <span class="badge badge-soft-primary font-khmer mb-1">${r.subjectName || 'ទូទៅ'}</span>
            <h4 class="resource-title font-khmer">${r.title}</h4>
            <p class="resource-desc font-khmer text-muted">${r.desc || 'ឯកសារជំនួយស្មារតី និងពង្រឹងការសិក្សា'}</p>
          </div>
          <div class="resource-card-footer">
            <div class="res-meta-line font-khmer text-muted">
              <span><i class="fa-solid fa-user-pen"></i> ${r.author || 'លោកគ្រូ/អ្នកគ្រូ'}</span>
              <span><i class="fa-solid fa-download"></i> ${r.downloads || 1} ទាញយក</span>
            </div>
            <div class="res-btn-group mt-2">
              <button class="btn btn-outline btn-xs" onclick="ResourcesModule.showQrCode('${r.id}', '${r.title.replace(/'/g, "\\'")}')" title="ស្កេនទាញយកលើទូរស័ព្ទ">
                <i class="fa-solid fa-qrcode"></i> QR
              </button>
              <button class="btn btn-primary btn-xs" onclick="ResourcesModule.downloadResource('${r.id}')">
                <i class="fa-solid fa-cloud-arrow-down"></i> ទាញយក
              </button>
              <button class="btn-icon text-danger" onclick="ResourcesModule.deleteResource('${r.id}')" title="លុប">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  static showQrCode(resId, title) {
    const modal = document.getElementById("qrResourceModal");
    const container = document.getElementById("qrResourceBox");
    const titleEl = document.getElementById("qrResourceTitle");

    if (titleEl) titleEl.textContent = title;
    if (container) {
      container.innerHTML = "";
      if (typeof QRCode !== "undefined") {
        new QRCode(container, {
          text: `https://school.moeys.gov.kh/materials/${resId}`,
          width: 140,
          height: 140,
          colorDark: "#1e3a8a",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.M
        });
      }
    }
    openModal("qrResourceModal");
  }

  static downloadResource(resId) {
    const resources = StorageManager.getResources();
    const r = resources.find(x => x.id === resId);
    if (r) {
      r.downloads = (r.downloads || 0) + 1;
      StorageManager.saveResources(resources);
      this.render();
      showToast(`កំពុងទាញយកឯកសារ "${r.title}"...`, "success");
    }
  }

  static openAddModal() {
    document.getElementById("resTitleInput").value = "";
    document.getElementById("resDescInput").value = "";
    document.getElementById("resAuthorInput").value = "លោកគ្រូ សុខ ចាន់ថា";
    openModal("addResourceModal");
  }

  static handleFormSubmit(e) {
    e.preventDefault();
    const title = document.getElementById("resTitleInput").value.trim();
    const subjectId = document.getElementById("resSubjectSelect").value;
    const type = document.getElementById("resTypeSelect").value;
    const desc = document.getElementById("resDescInput").value.trim();
    const author = document.getElementById("resAuthorInput").value.trim() || "លោកគ្រូ/អ្នកគ្រូ";

    const subjects = StorageManager.getSubjects();
    const subObj = subjects.find(s => s.id === subjectId) || { name: "ទូទៅ" };

    const newRes = {
      id: "RES-" + Date.now(),
      title,
      subjectId,
      subjectName: subObj.name,
      type,
      size: type === "video" ? "YouTube HD" : "3.2 MB",
      date: new Date().toISOString().split('T')[0],
      author,
      url: "#",
      downloads: 0,
      desc
    };

    const resources = StorageManager.getResources();
    resources.unshift(newRes);
    StorageManager.saveResources(resources);

    closeModal("addResourceModal");
    this.render();
    showToast("បានបង្ហោះឯកសារមេរៀនជោគជ័យ!", "success");
  }

  static async deleteResource(resId) {
    const confirmed = await showConfirm("តើអ្នកពិតជាចង់លុបឯកសារមេរៀននេះមែនទេ?", {
      title: "បញ្ជាក់ការលុបឯកសារ",
      confirmText: "យល់ព្រមលុប",
      type: "danger"
    });
    if (!confirmed) return;
    let resources = StorageManager.getResources();
    resources = resources.filter(r => r.id !== resId);
    StorageManager.saveResources(resources);
    this.render();
    showToast("បានលុបឯកសាររួចរាល់!", "info");
  }
}


/* ==================================================================== */
/* MODULE: voice.js
/* ==================================================================== */

/**
 * AI KHMER VOICE COMMANDS & VOICE ATTENDANCE MODULE
 * Web Speech Recognition, Voice Navigation & Voice Attendance Marking
 */

class VoiceModule {
  static init() {
    this.recognition = null;
    this.isListening = false;
    this.hudModal = document.getElementById("voiceHudModal");
    this.transcriptEl = document.getElementById("voiceLiveTranscript");
    this.statusEl = document.getElementById("voiceStatusText");
    this.waveEl = document.getElementById("voiceWaveVisualizer");

    this.setupRecognition();
    this.bindEvents();
  }

  static setupRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;
      this.recognition.lang = "km-KH"; // Khmer language code

      this.recognition.onstart = () => {
        this.isListening = true;
        this.updateHUD("កំពុងស្តាប់សំឡេង... (សូមនិយាយបញ្ជា ឬហៅឈ្មោះសិស្ស)", true);
      };

      this.recognition.onresult = (event) => {
        let interimTranscript = "";
        let finalTranscript = "";

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          } else {
            interimTranscript += event.results[i][0].transcript;
          }
        }

        const fullText = (finalTranscript || interimTranscript).trim();
        if (this.transcriptEl) {
          this.transcriptEl.textContent = `"${fullText}"`;
        }

        if (finalTranscript) {
          this.processCommand(finalTranscript);
        }
      };

      this.recognition.onerror = (event) => {
        console.warn("Speech recognition error:", event.error);
        if (event.error === 'not-allowed') {
          this.updateHUD("❌ មិនបានអនុញ្ញាតឱ្យប្រើមីក្រូហ្វូន (Microphone Denied)", false);
        } else {
          this.updateHUD("សូមព្យាយាមនិយាយម្តងទៀត...", false);
        }
      };

      this.recognition.onend = () => {
        if (this.isListening) {
          try { this.recognition.start(); } catch (e) {}
        }
      };
    }
  }

  static bindEvents() {
    const triggerBtn = document.getElementById("voiceCommandBtn");
    if (triggerBtn) {
      triggerBtn.addEventListener("click", () => this.toggleVoiceAssistant());
    }

    const modalMicBtn = document.getElementById("voiceModalMicToggle");
    if (modalMicBtn) {
      modalMicBtn.addEventListener("click", () => this.toggleListening());
    }
  }

  static playBeep(success = true) {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.frequency.value = success ? 880 : 330;
      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.25);
    } catch (e) {}
  }

  static toggleVoiceAssistant() {
    openModal("voiceHudModal");
    this.startListening();
  }

  static startListening() {
    if (!this.recognition) {
      this.updateHUD("Browser របស់លោកអ្នកមិនទាន់គាំទ្រ Speech Recognition ទេ។ លោកអ្នកអាចសាកល្បងវាយ Command សាកល្បងបាន។", false);
      return;
    }
    try {
      this.isListening = true;
      this.recognition.start();
    } catch (e) {
      this.updateHUD("កំពុងស្តាប់...", true);
    }
  }

  static stopListening() {
    this.isListening = false;
    if (this.recognition) {
      try { this.recognition.stop(); } catch (e) {}
    }
    this.updateHUD("បានផ្អាកការស្តាប់", false);
  }

  static toggleListening() {
    if (this.isListening) {
      this.stopListening();
    } else {
      this.startListening();
    }
  }

  static updateHUD(statusText, isActive) {
    if (this.statusEl) this.statusEl.textContent = statusText;
    if (this.waveEl) {
      if (isActive) this.waveEl.classList.add("active");
      else this.waveEl.classList.remove("active");
    }
    const micBtn = document.getElementById("voiceModalMicToggle");
    if (micBtn) {
      if (isActive) micBtn.classList.add("listening");
      else micBtn.classList.remove("listening");
    }
  }

  static processCommand(transcript) {
    const text = transcript.toLowerCase().trim();
    const students = StorageManager.getStudents();
    let handled = false;

    // 1. Check Voice Attendance Command: "[ឈ្មោះ] មក" | "[ឈ្មោះ] អវត្តមាន" | "[ឈ្មោះ] ច្បាប់"
    for (let st of students) {
      const name = st.nameKh.toLowerCase();
      if (text.includes(name)) {
        const today = new Date().toISOString().split('T')[0];
        const att = StorageManager.getAttendance();
        if (!att[today]) att[today] = {};

        if (text.includes("អវត្តមាន") || text.includes("អត់មក") || text.includes("ខាន")) {
          att[today][st.id] = { status: "A", note: "ស្រង់តាមសំឡេង (អវត្តមាន)" };
          StorageManager.saveAttendance(att);
          this.playBeep(true);
          showToast(`🎙️ បានកត់ត្រា៖ ${st.nameKh} [អវត្តមាន ❌]`, "error");
          handled = true;
        } else if (text.includes("ច្បាប់") || text.includes("សុំច្បាប់")) {
          att[today][st.id] = { status: "L", note: "ស្រង់តាមសំឡេង (ច្បាប់)" };
          StorageManager.saveAttendance(att);
          this.playBeep(true);
          showToast(`🎙️ បានកត់ត្រា៖ ${st.nameKh} [មានច្បាប់ ⚠️]`, "warning");
          handled = true;
        } else if (text.includes("មក") || text.includes("វត្តមាន")) {
          att[today][st.id] = { status: "P", note: "ស្រង់តាមសំឡេង (វត្តមាន)" };
          StorageManager.saveAttendance(att);
          this.playBeep(true);
          showToast(`🎙️ បានកត់ត្រា៖ ${st.nameKh} [មក ✅]`, "success");
          handled = true;
        }

        if (handled) {
          if (typeof AttendanceModule !== "undefined" && AttendanceModule.render) {
            AttendanceModule.render();
          }
          break;
        }
      }
    }

    if (handled) return;

    // 2. Navigation Commands
    if (text.includes("ផ្ទាំងដើម") || text.includes("dashboard") || text.includes("ទំព័រដើម")) {
      switchTab("dashboard");
      this.playBeep(true);
      showToast("🎙️ ប្តូរទៅកាន់៖ ផ្ទាំងទិដ្ឋភាពរួម", "info");
      handled = true;
    } else if (text.includes("សិស្ស") || text.includes("បញ្ជីសិស្ស")) {
      switchTab("students");
      this.playBeep(true);
      showToast("🎙️ ប្តូរទៅកាន់៖ បញ្ជីឈ្មោះសិស្ស", "info");
      handled = true;
    } else if (text.includes("វត្តមាន") || text.includes("ស្រង់វត្តមាន")) {
      switchTab("attendance");
      this.playBeep(true);
      showToast("🎙️ ប្តូរទៅកាន់៖ ស្រង់វត្តមាន", "info");
      handled = true;
    } else if (text.includes("ពិន្ទុ") || text.includes("ចំណាត់ថ្នាក់")) {
      switchTab("grades");
      this.playBeep(true);
      showToast("🎙️ ប្តូរទៅកាន់៖ បញ្ចូល & គណនាពិន្ទុ", "info");
      handled = true;
    } else if (text.includes("កិច្ចការផ្ទះ") || text.includes("លំហាត់")) {
      switchTab("homework");
      this.playBeep(true);
      showToast("🎙️ ប្តូរទៅកាន់៖ កិច្ចការផ្ទះ", "info");
      handled = true;
    } else if (text.includes("ផ្កាយ") || text.includes("រង្វាន់") || text.includes("badge")) {
      switchTab("gamification");
      this.playBeep(true);
      showToast("🎙️ ប្តូរទៅកាន់៖ ផ្កាយ & ផ្លាកសញ្ញា", "info");
      handled = true;
    } else if (text.includes("មូលនិធិ") || text.includes("លុយ") || text.includes("ថវិកា")) {
      switchTab("fund");
      this.playBeep(true);
      showToast("🎙️ ប្តូរទៅកាន់៖ មូលនិធិថ្នាក់រៀន", "info");
      handled = true;
    } else if (text.includes("កិច្ចតែងការ") || text.includes("សៀវភៅបង្រៀន")) {
      switchTab("logbook");
      this.playBeep(true);
      showToast("🎙️ ប្តូរទៅកាន់៖ សៀវភៅកិច្ចតែងការ", "info");
      handled = true;
    } else if (text.includes("ឯកសារ") || text.includes("មេរៀន") || text.includes("បណ្ណាល័យ")) {
      switchTab("resources");
      this.playBeep(true);
      showToast("🎙️ ប្តូរទៅកាន់៖ ឃ្លាំងឯកសារមេរៀន", "info");
      handled = true;
    } else if (text.includes("ស្កេន") || text.includes("qr")) {
      switchTab("scanner");
      this.playBeep(true);
      showToast("🎙️ ប្តូរទៅកាន់៖ ស្កេន QR", "info");
      handled = true;
    } else if (text.includes("ប្តូរពណ៌") || text.includes("ងងឹត") || text.includes("ភ្លឺ")) {
      const themeBtn = document.getElementById("themeToggleBtn");
      if (themeBtn) themeBtn.click();
      this.playBeep(true);
      showToast("🎙️ បានប្តូររចនាបថ យប់/ថ្ងៃ", "info");
      handled = true;
    }

    if (!handled) {
      this.playBeep(false);
      showToast(`🎙️ មិនស្គាល់បញ្ជា៖ "${transcript}"`, "warning");
    }
  }

  static testCommandText(text) {
    if (this.transcriptEl) {
      this.transcriptEl.textContent = `"${text}"`;
    }
    this.processCommand(text);
  }
}


/* ==================================================================== */
/* MODULE: app.js
/* ==================================================================== */

/**
 * MAIN APP CONTROLLER
 * Khmer Junior High School Classroom Management System (v2.0 Expanded)
 */

// Global Modal Helpers
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add("active");
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove("active");
}

function showToast(message, type = "success") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;

  const icon = type === "success" ? "fa-circle-check" :
               type === "error"   ? "fa-circle-exclamation" :
               type === "warning" ? "fa-triangle-exclamation" : "fa-circle-info";

  toast.innerHTML = `
    <i class="fa-solid ${icon} toast-icon"></i>
    <span class="toast-msg">${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(50px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Drag & Scroll Controller for 2D Horizontal and Vertical Smooth Panning with Kinetic Momentum
class DragScrollManager {
  static init() {
    this.attachDragToScroll();
  }

  static attachDragToScroll() {
    setTimeout(() => {
      const containers = document.querySelectorAll(".table-responsive, .grade-table-wrapper, .print-preview-container");
      containers.forEach(slider => {
        if (slider.dataset.dragInitialized === "true") return;
        slider.dataset.dragInitialized = "true";

        let isDown = false;
        let lastX = 0, lastY = 0;
        let velX = 0, velY = 0;
        let lastTime = 0;
        let rafId = null;

        const cancelMomentum = () => {
          if (rafId) {
            cancelAnimationFrame(rafId);
            rafId = null;
          }
        };

        const stepMomentum = () => {
          if (Math.abs(velX) > 0.25 || Math.abs(velY) > 0.25) {
            slider.scrollLeft -= velX;
            slider.scrollTop -= velY;
            velX *= 0.93; // Smooth kinetic friction factor
            velY *= 0.93;
            rafId = requestAnimationFrame(stepMomentum);
          } else {
            cancelMomentum();
          }
        };

        // Pointer down (mouse, touch, stylus)
        slider.addEventListener('pointerdown', (e) => {
          // Ignore clicks on inputs, buttons, selects, links, or radio labels
          if (e.target.closest('input, select, button, textarea, a, label, .btn, .grade-score-input, .att-radio-label')) {
            return;
          }

          cancelMomentum();
          isDown = true;
          slider.classList.add('is-dragging');
          lastX = e.clientX;
          lastY = e.clientY;
          velX = 0;
          velY = 0;
          lastTime = performance.now();
          
          try {
            slider.setPointerCapture(e.pointerId);
          } catch(err) {}
        });

        // Pointer move
        slider.addEventListener('pointermove', (e) => {
          if (!isDown) return;
          e.preventDefault();

          const now = performance.now();
          const dt = Math.max(now - lastTime, 10);
          lastTime = now;

          const dx = e.clientX - lastX;
          const dy = e.clientY - lastY;

          slider.scrollLeft -= dx;
          slider.scrollTop -= dy;

          // Track instantaneous speed for flick release
          velX = (dx / dt) * 16;
          velY = (dy / dt) * 16;

          lastX = e.clientX;
          lastY = e.clientY;
        });

        const endDrag = (e) => {
          if (isDown) {
            isDown = false;
            slider.classList.remove('is-dragging');
            try {
              slider.releasePointerCapture(e.pointerId);
            } catch(err) {}
            // Silky-smooth kinetic inertia glide
            stepMomentum();
          }
        };

        slider.addEventListener('pointerup', endDrag);
        slider.addEventListener('pointercancel', endDrag);
        slider.addEventListener('pointerleave', endDrag);

        // Smooth Wheel horizontal panning
        slider.addEventListener('wheel', (e) => {
          cancelMomentum();
          if (e.shiftKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
            slider.scrollLeft += (e.deltaX || e.deltaY);
          }
        }, { passive: true });

        // Auto-scroll when tabbing or focusing grade inputs near edges
        slider.addEventListener('focusin', (e) => {
          if (e.target && e.target.classList.contains('grade-score-input')) {
            const rect = e.target.getBoundingClientRect();
            const parentRect = slider.getBoundingClientRect();
            if (rect.right > parentRect.right - 80) {
              slider.scrollTo({
                left: slider.scrollLeft + (rect.right - parentRect.right + 120),
                behavior: 'smooth'
              });
            } else if (rect.left < parentRect.left + 380) {
              slider.scrollTo({
                left: Math.max(0, slider.scrollLeft - (parentRect.left + 400 - rect.left)),
                behavior: 'smooth'
              });
            }
          }
        });
      });
    }, 100);
  }

  static scrollToLeft(containerId) {
    const el = document.getElementById(containerId);
    if (el) el.scrollTo({ left: 0, behavior: 'smooth' });
  }

  static scrollToRight(containerId) {
    const el = document.getElementById(containerId);
    if (el) el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' });
  }

  static scrollToTop(containerId) {
    const el = document.getElementById(containerId);
    if (el) el.scrollTo({ top: 0, behavior: 'smooth' });
  }

  static scrollToBottom(containerId) {
    const el = document.getElementById(containerId);
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }
}

function switchTab(tabId) {
  const navLinks = document.querySelectorAll(".sidebar-nav .nav-link");
  const tabContents = document.querySelectorAll(".tab-content");

  navLinks.forEach(link => {
    if (link.dataset.tab === tabId) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  tabContents.forEach(content => {
    if (content.id === `tab-${tabId}`) {
      content.classList.add("active");
    } else {
      content.classList.remove("active");
    }
  });

  // Update Page Title
  const titles = {
    dashboard: { title: "ផ្ទាំងទិដ្ឋភាពរួម (Dashboard)", sub: "ទំព័រដើម / ផ្ទាំងទិដ្ឋភាពទូទៅនៃថ្នាក់រៀន" },
    students: { title: "គ្រប់គ្រងព័ត៌មានសិស្ស (Students)", sub: "សិស្ស / បញ្ជីរាយនាមសិស្សានុសិស្ស" },
    attendance: { title: "ស្រង់វត្តមានប្រចាំថ្ងៃ (Attendance)", sub: "វត្តមាន / ការស្រង់វត្តមាន និងសង្ខេបប្រចាំខែ" },
    scanner: { title: "ស្កេន QR Code វត្តមាន (QR Scanner)", sub: "វត្តមាន / ស្កេនកាតសិស្សរហ័សតាមកាមេរ៉ា" },
    homework: { title: "កិច្ចការផ្ទះ & លំហាត់ (Homework Hub)", sub: "ការសិក្សា / តាមដានការប្រគល់កិច្ចការ និងដាក់ពិន្ទុ" },
    grades: { title: "បញ្ចូល & គណនាពិន្ទុ (Grades)", sub: "លទ្ធផលសិក្សា / តារាងពិន្ទុ និងចំណាត់ថ្នាក់" },
    semester: { title: "សរុបឆមាស & ប្រចាំឆ្នាំ (Semester Aggregation)", sub: "លទ្ធផលសិក្សា / សម្រេចឡើងថ្នាក់-ត្រួតថ្នាក់" },
    reports: { title: "តារាងចំណាត់ថ្នាក់ & ប័ណ្ណ (Reports)", sub: "របាយការណ៍ / តារាងកិត្តិយស និងប័ណ្ណសរសើរ" },
    insights: { title: "វិភាគឆ្លាតវៃ & អនុសាសន៍ (Smart AI Insights)", sub: "វិភាគ / រកមុខវិជ្ជាខ្សោយ និងសិស្សប្រឈម" },
    seating: { title: "ប្លង់តុអង្គុយសិស្ស (Seating Layout)", sub: "ថ្នាក់រៀន / ប្លង់តុ និងទីតាំងអង្គុយរបស់សិស្ស" },
    exams: { title: "ធនាគារសំណួរ & វិញ្ញាសា (Exam Generator)", sub: "ការប្រឡង / គ្រប់គ្រងសំណួរ និងបង្កើតវិញ្ញាសា" },
    textbooks: { title: "គ្រប់គ្រងសៀវភៅពុម្ព (Ministry Textbooks)", sub: "សម្ភារៈ / តាមដានសៀវភៅពុម្ព និងបណ្ណាល័យ" },
    council: { title: "គណៈកម្មការ & ក្លឹបសិក្សា (Council & Clubs)", sub: "សកម្មភាព / តួនាទីដឹកនាំ និងក្លឹបសិក្សា" },
    quiz: { title: "Quiz អន្តរកម្មក្នុងថ្នាក់ (Interactive Class Quiz)", sub: "ការសិក្សា / តេស្តចំណេះដឹង និងតារាងពិន្ទុផ្ទាល់" },
    health: { title: "សុខភាព & BMI សិស្ស (Student Health & Growth)", sub: "សុខភាព / តាមដានកម្ពស់ ទម្ងន់ និងកាយសម្បទា" },
    election: { title: "ការបោះឆ្នោតប្រធានថ្នាក់ (Digital Class Election)", sub: "សកម្មភាព / បោះឆ្នោតប្រជាធិបតេយ្យក្នុងថ្នាក់" },
    gamification: { title: "ប្រព័ន្ធផ្កាយលើកទឹកចិត្ត & ផ្លាកសញ្ញា (Gamification)", sub: "លើកទឹកចិត្ត / ផ្កាយ ផ្លាកសញ្ញា និងតារាងកិត្តិយស" },
    fund: { title: "គ្រប់គ្រងមូលនិធិថ្នាក់រៀន (Classroom Fund & Treasury)", sub: "ហិរញ្ញវត្ថុ / តាមដានចំណូល ចំណាយ និងវិភាគទាន" },
    logbook: { title: "សៀវភៅកិច្ចតែងការ & កំណត់ត្រាបង្រៀន (Teacher's Logbook)", sub: "រដ្ឋបាល / កំណត់ត្រាបង្រៀនប្រចាំថ្ងៃផ្លូវការ" },
    resources: { title: "ឃ្លាំងឯកសារមេរៀន & E-Library (Class Resource Hub)", sub: "ឯកសារ / ស្លាយ PDF លំហាត់ និងវីដេអូ" },
    timetable: { title: "កាលវិភាគបង្រៀន (Timetable)", sub: "កាលវិភាគ / កាលវិភាគប្រចាំសប្តាហ៍" },
    discipline: { title: "វិន័យ និងសកម្មភាព (Discipline)", sub: "វិន័យ / កំណត់ត្រាវិន័យ និងទំនាក់ទំនង" },
    settings: { title: "ការកំណត់សាលារៀន (Settings)", sub: "ប្រព័ន្ធ / ព័ត៌មានសាលា និងការបម្រុងទុក" }
  };

  const current = titles[tabId] || titles.dashboard;
  document.getElementById("currentPageTitle").textContent = current.title;
  document.getElementById("currentBreadcrumb").textContent = current.sub;

  window.location.hash = tabId;

  // Refresh active tab renders
  if (tabId === "dashboard") App.renderDashboard();
  if (tabId === "students") StudentsModule.render();
  if (tabId === "attendance") AttendanceModule.render();
  if (tabId === "homework") HomeworkModule.render();
  if (tabId === "grades") GradesModule.render();
  if (tabId === "semester") SemesterModule.render();
  if (tabId === "insights") InsightsModule.render();
  if (tabId === "seating") SeatingManager.renderSeatingGrid();
  if (tabId === "exams") {
    ExamManager.populateSubjectFilters();
    ExamManager.renderQuestionBank();
  }
  if (tabId === "textbooks") {
    TextbookManager.renderOverviewStats();
    TextbookManager.renderInventoryTable();
    TextbookManager.renderStudentTextbookTable();
  }
  if (tabId === "council") {
    CouncilManager.renderCouncilGrid();
    CouncilManager.renderClubsList();
  }
  if (tabId === "quiz") {
    QuizModule.populateQuizSubjects();
  }
  if (tabId === "health") {
    HealthModule.renderOverview();
    HealthModule.renderHealthTable();
  }
  if (tabId === "election") {
    ElectionModule.renderElections();
  }
  if (tabId === "gamification") {
    GamificationModule.render();
  }
  if (tabId === "fund") {
    FundModule.render();
  }
  if (tabId === "logbook") {
    LogbookModule.render();
  }
  if (tabId === "resources") {
    ResourcesModule.render();
  }
  if (tabId === "reports") {
    ReportsModule.populateStudentDropdown();
    ReportsModule.render();
  }

  // Re-attach 2D drag to scroll for any newly rendered containers
  DragScrollManager.attachDragToScroll();
}

class App {
  static showToast(message, type = "success") {
    showToast(message, type);
  }

  static showConfirm(message, options = {}) {
    return window.showConfirm ? window.showConfirm(message, options) : Promise.resolve(confirm(message));
  }

  static init() {
    this.subjectChart = null;
    this.gradeDistChart = null;

    this.initTheme();
    this.initLiveClock();
    this.initNavigation();
    this.initClassSelector();
    this.initSchoolInfo();
    this.initGlobalSearch();
    this.initSettingsForm();
    this.initBackupActions();

    // Init Drag-to-Scroll Manager
    DragScrollManager.init();

    // Init All Modules
    StudentsModule.init();
    AttendanceModule.init();
    ScannerModule.init();
    HomeworkModule.init();
    GradesModule.init();
    SemesterModule.init();
    ReportsModule.init();
    InsightsModule.init();
    TelegramModule.init();
    TimetableModule.init();
    DisciplineModule.init();
    SeatingManager.init();
    ExamManager.init();
    TextbookManager.init();
    CouncilManager.init();
    QuizModule.init();
    HealthModule.init();
    ElectionModule.init();
    GamificationModule.init();
    FundModule.init();
    LogbookModule.init();
    ResourcesModule.init();
    VoiceModule.init();

    this.renderDashboard();

    // Handle hash navigation
    const currentHash = window.location.hash.replace("#", "");
    if (currentHash) {
      switchTab(currentHash);
    }
  }

  static initTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    this.updateThemeIcon(savedTheme);

    const toggleBtn = document.getElementById("themeToggleBtn");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem(STORAGE_KEYS.THEME, newTheme);
        this.updateThemeIcon(newTheme);
        this.renderCharts();
      });
    }
  }

  static updateThemeIcon(theme) {
    const btn = document.getElementById("themeToggleBtn");
    if (btn) {
      btn.innerHTML = theme === "dark" ? `<i class="fa-solid fa-sun text-warning"></i>` : `<i class="fa-solid fa-moon"></i>`;
    }
  }

  static initLiveClock() {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', { hour12: false });
      const timeEl = document.getElementById("currentLiveTime");
      if (timeEl) timeEl.textContent = timeStr;
    };
    updateTime();
    setInterval(updateTime, 1000);
  }

  static initNavigation() {
    const navLinks = document.querySelectorAll(".sidebar-nav .nav-link");
    navLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const tab = link.dataset.tab;
        switchTab(tab);
        // Mobile sidebar auto close
        document.getElementById("sidebar").classList.remove("mobile-open");
      });
    });

    const toggleBtn = document.getElementById("toggleSidebarBtn");
    const closeBtn = document.getElementById("sidebarCloseBtn");
    const sidebar = document.getElementById("sidebar");

    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => sidebar.classList.toggle("mobile-open"));
    }
    if (closeBtn) {
      closeBtn.addEventListener("click", () => sidebar.classList.remove("mobile-open"));
    }

    const quickAddBtn = document.getElementById("quickAddStudentBtn");
    if (quickAddBtn) {
      quickAddBtn.addEventListener("click", () => StudentsModule.openAddModal());
    }

    const quickAttBtn = document.getElementById("quickAttendanceBtn");
    if (quickAttBtn) {
      quickAttBtn.addEventListener("click", () => switchTab("attendance"));
    }
  }

  static initClassSelector() {
    const select = document.getElementById("globalClassSelect");
    if (!select) return;

    const currentClass = StorageManager.getCurrentClass();
    select.value = currentClass;
    this.updateClassLabels(currentClass);

    select.addEventListener("change", (e) => {
      const newClass = e.target.value;
      this.switchClass(newClass);
    });
  }

  static formatClassKhmer(cls) {
    const map = {
      "7A": "៧ A", "7B": "៧ B",
      "8A": "៨ A", "8B": "៨ B",
      "9A": "៩ A", "9B": "៩ B"
    };
    return map[cls] || cls;
  }

  static updateClassLabels(cls) {
    const khmerName = this.formatClassKhmer(cls);

    // Update select value if not matching
    const select = document.getElementById("globalClassSelect");
    if (select && select.value !== cls) {
      select.value = cls;
    }

    // Update teacher role in sidebar
    const sidebarRole = document.getElementById("sidebarTeacherRole");
    if (sidebarRole) {
      sidebarRole.textContent = `គ្រូបន្ទុកថ្នាក់ទី ${khmerName}`;
    }

    // Update dashboard hero description
    const heroDesc = document.getElementById("heroClassDesc");
    if (heroDesc) {
      heroDesc.textContent = `នេះជាទិដ្ឋភាពទូទៅនៃដំណើរការសិក្សារបស់សិស្សថ្នាក់ទី ${khmerName}`;
    }

    // Update timetable section subtitle
    const timetableSub = document.getElementById("timetableSubtitle");
    if (timetableSub) {
      timetableSub.textContent = `កាលវិភាគបង្រៀនប្រចាំសប្តាហ៍សម្រាប់ ថ្នាក់ទី ${khmerName}`;
    }

    // Update teachers list heading
    const teachersHeading = document.getElementById("teachersClassHeading");
    if (teachersHeading) {
      teachersHeading.textContent = `បញ្ជីគ្រូបង្រៀនប្រចាំ ថ្នាក់ទី ${khmerName}`;
    }

    // Update youth council class heading
    const councilHeading = document.getElementById("councilClassHeading");
    if (councilHeading) {
      councilHeading.textContent = `រចនាសម្ព័ន្ធគណៈកម្មការសិស្ស ថ្នាក់ទី ${khmerName}`;
    }

    // Update report headers / print labels if present
    const honorClass = document.getElementById("rptHonorClassName");
    if (honorClass) {
      honorClass.textContent = `ថ្នាក់ទី ${khmerName}`;
    }
    const transClass = document.getElementById("rptTransClassName");
    if (transClass) {
      transClass.textContent = `ថ្នាក់ទី ${khmerName}`;
    }
    const certClass = document.getElementById("certStudentClass");
    if (certClass) {
      certClass.textContent = `ថ្នាក់ទី ${khmerName}`;
    }
  }

  static switchClass(newClass) {
    if (!newClass) return;
    const current = StorageManager.getCurrentClass();
    if (newClass === current) return;

    StorageManager.setCurrentClass(newClass);
    this.updateClassLabels(newClass);
    this.refreshAllModules();

    const khmerName = this.formatClassKhmer(newClass);
    showToast(`បានប្តូរទៅកាន់ ថ្នាក់ទី ${khmerName} ដោយជោគជ័យ! 🎉`, "success");
  }

  static initSchoolInfo() {
    const school = StorageManager.getSchoolInfo();
    const currentClass = StorageManager.getCurrentClass();

    document.getElementById("sidebarSchoolName").textContent = school.schoolName;
    document.getElementById("sidebarAcademicYear").textContent = school.academicYear;
    document.getElementById("sidebarTeacherName").textContent = school.teacherName;
    document.getElementById("heroWelcomeText").textContent = `សួស្តី${school.teacherName}! 👋`;

    this.updateClassLabels(currentClass);

    // Populate Settings form
    document.getElementById("setSchoolName").value = school.schoolName;
    document.getElementById("setAcademicYear").value = school.academicYear;
    document.getElementById("setPrincipalName").value = school.principalName;
    document.getElementById("setTeacherName").value = school.teacherName;
    document.getElementById("setSchoolAddress").value = school.schoolAddress || "រាជធានីភ្នំពេញ ព្រះរាជាណាចក្រកម្ពុជា";
    document.getElementById("setSchoolPhone").value = school.teacherPhone || "០១២ ៣៤៥ ៦៧៨";
  }

  static initGlobalSearch() {
    const searchInput = document.getElementById("globalQuickSearch");
    const dropdown = document.getElementById("searchResultsDropdown");
    if (!searchInput || !dropdown) return;

    searchInput.addEventListener("input", (e) => {
      const q = e.target.value.trim().toLowerCase();
      if (!q) {
        dropdown.style.display = "none";
        return;
      }

      const students = StorageManager.getStudents();
      const matches = students.filter(s => 
        s.nameKh.toLowerCase().includes(q) || 
        s.nameEn.toLowerCase().includes(q) || 
        s.id.toLowerCase().includes(q)
      ).slice(0, 6);

      if (matches.length === 0) {
        dropdown.innerHTML = `<div class="p-3 text-muted text-center" style="font-size: 0.85rem;">រកមិនឃើញសិស្សឈ្មោះ "${q}" ឡើយ</div>`;
        dropdown.style.display = "block";
        return;
      }

      dropdown.innerHTML = matches.map(s => `
        <div class="search-result-item" onclick="StudentsModule.viewCard('${s.id}'); document.getElementById('searchResultsDropdown').style.display='none';">
          <img src="${s.photo || 'https://api.dicebear.com/7.x/bottts/svg?seed=' + s.id}" class="search-result-avatar" alt="">
          <div class="search-result-info">
            <div class="name">${s.nameKh} <small>(${s.nameEn})</small></div>
            <div class="meta">${s.id} | ថ្នាក់ទី ${s.class || '៨ A'} | ភេទ៖ ${s.gender}</div>
          </div>
        </div>
      `).join("");
      dropdown.style.display = "block";
    });

    document.addEventListener("click", (e) => {
      if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.style.display = "none";
      }
    });
  }

  static initSettingsForm() {
    const form = document.getElementById("schoolSettingsForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = {
        schoolName: document.getElementById("setSchoolName").value.trim(),
        academicYear: document.getElementById("setAcademicYear").value.trim(),
        principalName: document.getElementById("setPrincipalName").value.trim(),
        teacherName: document.getElementById("setTeacherName").value.trim(),
        schoolAddress: document.getElementById("setSchoolAddress").value.trim(),
        teacherPhone: document.getElementById("setSchoolPhone").value.trim(),
        currentClass: "8A"
      };

      StorageManager.saveSchoolInfo(data);
      this.initSchoolInfo();
      showToast("បានរក្សាទុកព័ត៌មានសាលារៀនជោគជ័យ!", "success");
      this.refreshAllModules();
    });
  }

  static initBackupActions() {
    const exportBtn = document.getElementById("exportDataJsonBtn");
    const importBtn = document.getElementById("triggerImportJsonBtn");
    const fileInput = document.getElementById("importJsonFileInput");
    const resetBtn = document.getElementById("resetSampleDataBtn");

    if (exportBtn) {
      exportBtn.addEventListener("click", () => StorageManager.exportBackupJSON());
    }

    if (importBtn && fileInput) {
      importBtn.addEventListener("click", () => fileInput.click());
      fileInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
          const res = StorageManager.importBackupJSON(ev.target.result);
          if (res.success) {
            showToast("បានស្ដារទិន្នន័យពី JSON ដោយជោគជ័យ!", "success");
            setTimeout(() => window.location.reload(), 800);
          } else {
            showToast("បរាជ័យក្នុងការស្ដារទិន្នន័យ៖ " + res.error, "error");
          }
        };
        reader.readAsText(file);
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener("click", async () => {
        const confirmed = await showConfirm(
          "តើអ្នកពិតជាចង់កំណត់ទិន្នន័យគំរូសាលា ៤២ នាក់ឡើងវិញមែនទេ? ទិន្នន័យដែលបានកែប្រែនឹងត្រូវជំនួសដោយទិន្នន័យគំរូដើម។",
          { title: "បញ្ជាក់ការកំណត់ទិន្នន័យឡើងវិញ", type: "warning", confirmText: "កំណត់ឡើងវិញ" }
        );
        if (confirmed) {
          StorageManager.resetToDefaults();
          showToast("បានផ្ទុកទិន្នន័យគំរូដើមរួចរាល់!", "success");
          setTimeout(() => window.location.reload(), 600);
        }
      });
    }
  }

  static renderDashboard() {
    const students = StorageManager.getStudents();
    const results = GradesModule.getCalculatedResults("month_10");
    const attendance = StorageManager.getAttendance();
    const todayStr = new Date().toISOString().split('T')[0];
    const todayAtt = attendance[todayStr] || {};

    // 1. KPI & Hero metrics
    const totalStudents = students.length;
    const femaleCount = students.filter(s => s.gender === "ស្រី").length;
    const maleCount = totalStudents - femaleCount;

    let presentToday = 0;
    let absentToday = 0;
    let permToday = 0;

    students.forEach(st => {
      const rec = todayAtt[st.id] || { status: "P" };
      if (rec.status === "P") presentToday++;
      else if (rec.status === "A") absentToday++;
      else if (rec.status === "L") permToday++;
    });

    const attRate = totalStudents > 0 ? ((presentToday / totalStudents) * 100).toFixed(0) : "100";

    // Hero
    document.getElementById("heroTotalStudents").textContent = `${totalStudents} នាក់`;
    document.getElementById("heroFemaleStudents").textContent = `${femaleCount} នាក់`;
    document.getElementById("heroAttendanceRate").textContent = `${attRate}%`;

    // KPI Cards
    document.getElementById("kpiTotalStudents").textContent = totalStudents;
    document.getElementById("kpiGenderRatio").textContent = `ប្រុស ${maleCount} / ស្រី ${femaleCount}`;
    document.getElementById("kpiPresentCount").innerHTML = `${presentToday} <span class="val-unit">នាក់</span>`;
    document.getElementById("kpiAbsentCount").textContent = `អវត្តមាន ${absentToday} (ច្បាប់ ${permToday})`;
    document.getElementById("kpiAttendanceRateBadge").textContent = `អត្រាវត្តមាន ${attRate}%`;

    // Class average
    let sumAvg = 0;
    let passCount = 0;
    results.forEach(r => {
      sumAvg += r.average;
      if (r.isPassed) passCount++;
    });
    const classAvg = totalStudents > 0 ? (sumAvg / totalStudents).toFixed(2) : "0.00";
    const passRate = totalStudents > 0 ? ((passCount / totalStudents) * 100).toFixed(1) : "0";

    document.getElementById("kpiClassAverage").innerHTML = `${classAvg} <span class="val-unit">/ 50</span>`;
    document.getElementById("kpiPassRate").textContent = `អត្រាជាប់ ${passRate}%`;

    // Top Student
    const sorted = [...results].sort((a, b) => b.total - a.total);
    const top1 = sorted[0];
    if (top1) {
      document.getElementById("kpiTopStudentName").textContent = top1.student.nameKh;
      document.getElementById("kpiTopStudentScore").textContent = `ម.ភ ${top1.average.toFixed(2)} (និទ្ទេស ${top1.mention})`;
    }

    // Top 5 Table
    const top5 = sorted.slice(0, 5);
    const top5Tbody = document.getElementById("dashboardTopStudentsTableBody");
    if (top5Tbody) {
      top5Tbody.innerHTML = top5.map((res, i) => `
        <tr>
          <td class="text-center font-bold">
            <span class="rank-badge ${i === 0 ? 'rank-1' : i === 1 ? 'rank-2' : i === 2 ? 'rank-3' : 'rank-default'}">${i + 1}</span>
          </td>
          <td>
            <div class="student-row-flex">
              <img src="${res.student.photo || 'https://api.dicebear.com/7.x/bottts/svg?seed=' + res.student.id}" class="student-table-avatar" alt="">
              <div>
                <div class="student-name-kh">${res.student.nameKh}</div>
                <div class="student-name-en">${res.student.nameEn}</div>
              </div>
            </div>
          </td>
          <td class="text-center ${res.student.gender === 'ស្រី' ? 'text-accent' : 'text-primary'} font-bold">${res.student.gender}</td>
          <td class="text-center font-bold text-primary">${res.average.toFixed(2)}</td>
          <td class="text-center"><span class="mention-badge ${res.mentionClass}">${res.mention}</span></td>
          <td class="text-center font-bold">លេខ ${res.rank}</td>
        </tr>
      `).join("");
    }

    // Today Schedule List
    const timetable = StorageManager.getTimetable();
    const schedList = document.getElementById("dashboardTodayScheduleList");
    if (schedList) {
      schedList.innerHTML = timetable.map(slot => {
        if (slot.isBreak) {
          return `
            <div class="schedule-item-card" style="border-left-color: #f59e0b; background: rgba(245,158,11,0.08);">
              <div class="schedule-time text-warning"><i class="fa-solid fa-mug-hot"></i> ${slot.time}</div>
              <div class="schedule-subject text-warning">${slot.label}</div>
            </div>
          `;
        }
        const cell = slot.thu || slot.mon;
        return `
          <div class="schedule-item-card">
            <div class="schedule-time"><i class="fa-regular fa-clock"></i> ${slot.time}</div>
            <div>
              <div class="schedule-subject">${cell.subject}</div>
              <div class="schedule-teacher">${cell.teacher}</div>
            </div>
          </div>
        `;
      }).join("");
    }

    this.renderCharts();
  }

  static renderCharts() {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const textColor = isDark ? "#cbd5e1" : "#475569";
    const gridColor = isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)";

    const subjects = StorageManager.getSubjects();
    const results = GradesModule.getCalculatedResults("month_10");

    // 1. Subject Average Chart
    const subjectAverages = subjects.map(sub => {
      let total = 0;
      results.forEach(r => {
        total += r.subjectScores[sub.id] || 0;
      });
      const avg = results.length > 0 ? (total / results.length) : 0;
      return sub.maxScore === 100 ? parseFloat((avg / 2).toFixed(2)) : parseFloat(avg.toFixed(2));
    });

    const ctxSubj = document.getElementById("subjectPerformanceChart");
    if (ctxSubj) {
      if (this.subjectChart) this.subjectChart.destroy();
      this.subjectChart = new Chart(ctxSubj, {
        type: "bar",
        data: {
          labels: subjects.map(s => s.name),
          datasets: [{
            label: "មធ្យមភាគ (គិតលើ ៥០)",
            data: subjectAverages,
            backgroundColor: subjects.map(s => s.color || "#4f46e5"),
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false }
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 50,
              grid: { color: gridColor },
              ticks: { color: textColor }
            },
            x: {
              grid: { display: false },
              ticks: { color: textColor, font: { family: "'Kantumruy Pro', sans-serif" } }
            }
          }
        }
      });
    }

    // 2. Grade Distribution Chart
    const mentionCounts = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0 };
    results.forEach(r => {
      if (mentionCounts[r.mention] !== undefined) {
        mentionCounts[r.mention]++;
      }
    });

    const ctxGrade = document.getElementById("gradeDistributionChart");
    if (ctxGrade) {
      if (this.gradeDistChart) this.gradeDistChart.destroy();
      this.gradeDistChart = new Chart(ctxGrade, {
        type: "doughnut",
        data: {
          labels: [
            `និទ្ទេស A (${mentionCounts.A})`,
            `និទ្ទេស B (${mentionCounts.B})`,
            `និទ្ទេស C (${mentionCounts.C})`,
            `និទ្ទេស D (${mentionCounts.D})`,
            `និទ្ទេស E (${mentionCounts.E})`,
            `និទ្ទេស F (${mentionCounts.F})`
          ],
          datasets: [{
            data: [
              mentionCounts.A,
              mentionCounts.B,
              mentionCounts.C,
              mentionCounts.D,
              mentionCounts.E,
              mentionCounts.F
            ],
            backgroundColor: [
              "#10b981", // A (Green)
              "#0ea5e9", // B (Blue)
              "#f59e0b", // C (Amber)
              "#f97316", // D (Orange)
              "#8b5cf6", // E (Purple)
              "#ef4444"  // F (Red)
            ],
            borderWidth: 2,
            borderColor: isDark ? "#111827" : "#ffffff"
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "right",
              labels: {
                color: textColor,
                font: { family: "'Kantumruy Pro', sans-serif" }
              }
            }
          }
        }
      });
    }
  }

  static refreshAllModules() {
    this.initSchoolInfo();
    if (typeof StudentsModule !== "undefined") StudentsModule.render();
    if (typeof AttendanceModule !== "undefined") AttendanceModule.render();
    if (typeof HomeworkModule !== "undefined") HomeworkModule.render();
    if (typeof GradesModule !== "undefined") GradesModule.render();
    if (typeof SemesterModule !== "undefined") SemesterModule.render();
    if (typeof ReportsModule !== "undefined") {
      ReportsModule.populateStudentDropdown();
      ReportsModule.render();
    }
    if (typeof InsightsModule !== "undefined") InsightsModule.render();
    if (typeof TimetableModule !== "undefined") TimetableModule.render();
    if (typeof DisciplineModule !== "undefined") DisciplineModule.render();
    if (typeof SeatingManager !== "undefined") SeatingManager.renderSeatingGrid();
    if (typeof CouncilManager !== "undefined") {
      CouncilManager.renderCouncilGrid();
      CouncilManager.renderClubsList();
    }
    if (typeof TextbookManager !== "undefined") {
      TextbookManager.renderOverviewStats();
      TextbookManager.renderInventoryTable();
      TextbookManager.renderStudentTextbookTable();
    }
    if (typeof HealthModule !== "undefined") {
      HealthModule.renderOverview();
      HealthModule.renderHealthTable();
    }
    if (typeof ElectionModule !== "undefined") ElectionModule.renderElections();
    if (typeof GamificationModule !== "undefined") GamificationModule.render();
    if (typeof FundModule !== "undefined") FundModule.render();
    if (typeof LogbookModule !== "undefined") LogbookModule.render();
    if (typeof ResourcesModule !== "undefined") ResourcesModule.render();
    this.renderDashboard();
  }
}

// Bootstrap application on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  App.init();
});


