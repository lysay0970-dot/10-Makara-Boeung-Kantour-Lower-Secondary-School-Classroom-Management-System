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
