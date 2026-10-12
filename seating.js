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
