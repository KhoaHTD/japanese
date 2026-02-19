// Dữ liệu từ vựng
const vocabularyData = [
  {
    id: 1,
    title: "Nhóm 1",
    words: [
      { id: '1-1', kanji: 'カニ', kana: 'かに', vi: 'cua' },
      { id: '1-2', kanji: '着物', kana: 'きもの', vi: 'kimono' },
      { id: '1-3', kanji: 'ショッピングセンター', kana: 'しょっぴんぐせんたー', vi: 'trung tâm mua sắm' },
      { id: '1-4', kanji: '水族館', kana: 'すいぞくかん', vi: 'thủy cung' },
      { id: '1-5', kanji: 'スノーボード', kana: 'すのーぼーど', vi: 'ván trượt tuyết' },
      { id: '1-6', kanji: '船', kana: 'ふね', vi: 'thuyền' },
      { id: '1-7', kanji: '雰囲気', kana: 'ふんいき', vi: 'không khí' },
      { id: '1-8', kanji: '街', kana: 'まち', vi: 'phố' },
      { id: '1-9', kanji: 'こっち', kana: 'こっち', vi: 'phía đằng này' },
      { id: '1-10', kanji: 'そっち', kana: 'そっち', vi: 'phía đằng kia' }
    ]
  },
  {
    id: 2,
    title: "Nhóm 2",
    words: [
      { id: '2-1', kanji: '市内', kana: 'しない', vi: 'trong thành phố' },
      { id: '2-2', kanji: '最後', kana: 'さいご', vi: 'cuối cùng' },
      { id: '2-3', kanji: '旅館', kana: 'りょかん', vi: 'nhà khách (lữ quán)' },
      { id: '2-4', kanji: '朝食', kana: 'ちょうしょく', vi: 'bữa sáng' },
      { id: '2-5', kanji: '夕食', kana: 'ゆうしょく', vi: 'bữa tối' },
      { id: '2-6', kanji: '観光地', kana: 'かんこうち', vi: 'nơi tham quan' },
      { id: '2-7', kanji: '登山', kana: 'とざん', vi: 'leo núi' },
      { id: '2-8', kanji: '虫', kana: 'むし', vi: 'con sâu' },
      { id: '2-9', kanji: '宿泊', kana: 'しゅくはく', vi: 'ở, trú lại' },
      { id: '2-10', kanji: '代金', kana: 'だいきん', vi: 'Tiền phí, phí' }
    ]
  },
  {
    id: 3,
    title: "Nhóm 3",
    words: [
      { id: '3-1', kanji: '内容', kana: 'ないよう', vi: 'nội dung' },
      { id: '3-2', kanji: 'なし', kana: 'なし', vi: 'không có' },
      { id: '3-3', kanji: '値段', kana: 'ねだん', vi: 'giá cả' },
      { id: '3-4', kanji: '大人', kana: 'おとな', vi: 'người lớn' },
      { id: '3-5', kanji: '～付き', kana: '～つき', vi: 'kèm theo...' },
      { id: '3-6', kanji: '～泊～日', kana: '～はく～か', vi: '...ngày...đêm' },
      { id: '3-7', kanji: '～費', kana: '～ひ', vi: 'lệ phí...' },
      { id: '3-8', kanji: '待ち合わせる', kana: 'まちあわせる', vi: 'gặp gỡ' },
      { id: '3-9', kanji: 'ガイド・する', kana: 'がいど・する', vi: 'hướng dẫn' },
      { id: '3-10', kanji: '観光・する', kana: 'かんこう・する', vi: 'tham quan' }
    ]
  },
  {
    id: 4,
    title: "Nhóm 4",
    words: [
      { id: '4-1', kanji: '出発・する', kana: 'しゅっぱつ・する', vi: 'xuất phát' },
      { id: '4-2', kanji: 'キャンプ・する', kana: 'きゃんぷ・する', vi: 'cắm trại' },
      { id: '4-3', kanji: '珍しい', kana: 'めずらしい', vi: 'hiếm có' },
      { id: '4-4', kanji: '伝統的（な）', kana: 'でんとうてき（な）', vi: 'truyền thống' },
      { id: '4-5', kanji: 'それに', kana: 'それに', vi: 'hơn thế nữa' },
      { id: '4-6', kanji: 'どっち', kana: 'どっち', vi: 'bên nào, cái nào' },
      { id: '4-7', kanji: 'イルカ', kana: 'いるか', vi: 'cá heo' },
      { id: '4-8', kanji: 'ショー', kana: 'しょー', vi: 'buổi biểu diễn' },
      { id: '4-9', kanji: '手袋', kana: 'てぶくろ', vi: 'găng tay, bao tay' },
      { id: '4-10', kanji: 'マフラー', kana: 'まふらー', vi: 'khăn choàng cổ' }
    ]
  },
  {
    id: 5,
    title: "Nhóm 5",
    words: [
      { id: '5-1', kanji: '年末', kana: 'ねんまつ', vi: 'cuối năm' },
      { id: '5-2', kanji: 'ガイドブック', kana: 'がいどぶっく', vi: 'sách hướng dẫn' },
      { id: '5-3', kanji: 'パーク', kana: 'ぱーく', vi: 'công viên' },
      { id: '5-4', kanji: '早割', kana: 'はやわり', vi: 'khuyến mãi (đặt sớm)' },
      { id: '5-5', kanji: '～中', kana: '～ちゅう', vi: 'trong khi...' },
      { id: '5-6', kanji: '取る', kana: 'とる', vi: 'lấy' },
      { id: '5-7', kanji: '休みを取る', kana: 'やすみをとる', vi: 'nghỉ ngơi (xin nghỉ)' },
      { id: '5-8', kanji: 'ぬれる', kana: 'ぬれる', vi: 'ướt' },
      { id: '5-9', kanji: '用意・する', kana: 'ようい・する', vi: 'chuẩn bị' },
      { id: '5-10', kanji: '伝える', kana: 'つたえる', vi: 'truyền đạt' },
      { id: '5-11', kanji: 'コピー・する', kana: 'こぴー・する', vi: 'photo' },
      { id: '5-12', kanji: 'お願いします', kana: 'おねがいします', vi: 'nhờ vả' }
    ]
  }
];

// Trộn mảng (Fisher-Yates)
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// State app
let appState = {
  activeGroup: 1,
  activeTab: 'flashcards',
  flashcards: {
    flipped: {}
  },
  matching: {
    jpWords: [],
    vnWords: [],
    selectedJp: null,
    selectedVn: null,
    matchedIds: [],
    isComplete: false,
    errorIds: { jp: null, vn: null } // Added error state
  }
};

// Render flashcards
function renderFlashcards() {
  const currentData = vocabularyData.find(g => g.id === appState.activeGroup);
  const container = document.getElementById('main-content');
  
  // Check if we already rendered the flashcards structure to avoid full re-render
  const existingGrid = document.querySelector('.flashcard-grid');
  if (existingGrid && container.querySelector('.info-box')) {
     // If grid exists, we might not need to do anything if we handle toggles separately
     // But if group changed, we need to re-render.
     // For now, let's keep the full render for group changes, but modify toggle.
  }

  let html = `
    <div class="info-box">
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
      </svg>
      <p>Nhấp vào từng thẻ để xem cách đọc (Hiragana) và nghĩa tiếng Việt.</p>
    </div>
    <div class="flashcard-grid">
  `;
  
  currentData.words.forEach(word => {
    // Initial render state
    const isFlipped = appState.flashcards.flipped[word.id];
    html += `
      <div id="card-${word.id}" class="flashcard ${isFlipped ? 'flipped' : ''}" onclick="toggleFlashcard('${word.id}')">
        <div class="flashcard-inner">
          <div class="flashcard-front">
            <span class="kanji">${word.kanji}</span>
            <span class="kana">${word.kana}</span>
            <span class="hint">Nhấn để lật</span>
          </div>
          <div class="flashcard-back">
            <span class="meaning">${word.vi}</span>
          </div>
        </div>
      </div>
    `;
  });
  
  html += '</div>';
  container.innerHTML = html;
}

// Toggle flashcard flip
function toggleFlashcard(wordId) {
  // Update state
  appState.flashcards.flipped[wordId] = !appState.flashcards.flipped[wordId];
  
  // Update DOM directly to preserve transition
  const card = document.getElementById(`card-${wordId}`);
  if (card) {
    if (appState.flashcards.flipped[wordId]) {
      card.classList.add('flipped');
    } else {
      card.classList.remove('flipped');
    }
  }
}

// Render matching game
function renderMatching() {
  const currentData = vocabularyData.find(g => g.id === appState.activeGroup);
  const container = document.getElementById('main-content');
  
  // Render title and reset button
  let html = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
      <h3 style="font-size: 20px; font-weight: bold; color: #1f2937; display: flex; gap: 8px; align-items: center;">
        <svg style="width: 20px; height: 20px; color: #3b82f6;" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 3h18v2H3V3zm0 16h18v2H3v-2zm0-5h18v2H3v-2z"></path>
        </svg>
        Bài tập ghép từ
      </h3>
      <button onclick="resetMatching()" style="display: flex; gap: 8px; padding: 8px 16px; font-size: 14px; font-weight: 500; color: #2563eb; background-color: #eff6ff; border-radius: 8px; cursor: pointer; border: none; transition: background-color 0.3s;">
        <svg style="width: 16px; height: 16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="23 4 23 10 17 10"></polyline>
          <path d="M20.49 15a9 9 0 1 1-2-8.83"></path>
        </svg>
        Chơi lại
      </button>
    </div>
  `;
  
  // Render completion message
  if (appState.matching.isComplete) {
    html += `
      <div style="margin-bottom: 24px; padding: 24px; background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; text-align: center;">
        <svg style="width: 48px; height: 48px; color: #22c55e; margin: 0 auto 8px;" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
        </svg>
        <h4 style="font-size: 24px; font-weight: bold; color: #15803d;">Chúc mừng!</h4>
        <p style="color: #16a34a; margin-top: 4px;">Bạn đã ghép đúng tất cả các từ.</p>
      </div>
    `;
  }
  
  // Render word columns
  html += `
    <div class="matching-container">
      <div class="words-column">
        <h4 style="font-weight: 600; color: #6b7280; text-align: center; margin-bottom: 16px;">Tiếng Nhật</h4>
        <div id="jp-words"></div>
      </div>
      <div class="words-column">
        <h4 style="font-weight: 600; color: #6b7280; text-align: center; margin-bottom: 16px;">Tiếng Việt</h4>
        <div id="vn-words"></div>
      </div>
    </div>
  `;
  
  container.innerHTML = html;
  
  // Render JP words
  const jpContainer = document.getElementById('jp-words');
  appState.matching.jpWords.forEach(word => {
    const btn = document.createElement('button');
    btn.onclick = () => selectJpWord(word.id);
    btn.className = 'matching-btn ' + getMatchingBtnClass(word.id, 'jp');
    btn.disabled = appState.matching.matchedIds.includes(word.id);
    btn.textContent = word.kanji;
    jpContainer.appendChild(btn);
  });
  
  // Render VN words
  const vnContainer = document.getElementById('vn-words');
  appState.matching.vnWords.forEach(word => {
    const btn = document.createElement('button');
    btn.onclick = () => selectVnWord(word.id);
    btn.className = 'matching-btn ' + getMatchingBtnClass(word.id, 'vn');
    btn.disabled = appState.matching.matchedIds.includes(word.id);
    btn.textContent = word.vi;
    vnContainer.appendChild(btn);
  });
}

function getMatchingBtnClass(id, type) {
  const isMatched = appState.matching.matchedIds.includes(id);
  const isSelected = type === 'jp' ? appState.matching.selectedJp === id : appState.matching.selectedVn === id;
  const isError = type === 'jp' ? appState.matching.errorIds.jp === id : appState.matching.errorIds.vn === id;
  
  if (isMatched) return 'matched';
  if (isError) return 'error'; // We need to add .error style in CSS (or use existing red style logic)
  if (isSelected) return 'selected';
  return '';
}

function selectJpWord(id) {
  // Prevent selecting if already matched or currently showing error
  if (appState.matching.matchedIds.includes(id) || appState.matching.errorIds.jp) return;
  
  appState.matching.selectedJp = id;
  renderMatching(); // Update UI immediately
  
  // Use a small timeout to allow UI to update before checking match
  // This ensures the second button turns blue before the check logic runs
  if (appState.matching.selectedVn) {
      setTimeout(checkMatch, 50);
  }
}

function selectVnWord(id) {
  // Prevent selecting if already matched or currently showing error
  if (appState.matching.matchedIds.includes(id) || appState.matching.errorIds.vn) return;
  
  appState.matching.selectedVn = id;
  renderMatching(); // Update UI immediately

  if (appState.matching.selectedJp) {
      setTimeout(checkMatch, 50);
  }
}

function checkMatch() {
  if (appState.matching.selectedJp && appState.matching.selectedVn) {
    if (appState.matching.selectedJp === appState.matching.selectedVn) {
      appState.matching.matchedIds.push(appState.matching.selectedJp);
      appState.matching.selectedJp = null;
      appState.matching.selectedVn = null;
      
      const currentData = vocabularyData.find(g => g.id === appState.activeGroup);
      if (appState.matching.matchedIds.length === currentData.words.length) {
        appState.matching.isComplete = true;
      }
      renderMatching();
    } else {
      // Set error state
      appState.matching.errorIds = {
        jp: appState.matching.selectedJp,
        vn: appState.matching.selectedVn
      };
      renderMatching(); // Show error colors

      // Clear after delay
      setTimeout(() => {
        appState.matching.selectedJp = null;
        appState.matching.selectedVn = null;
        appState.matching.errorIds = { jp: null, vn: null };
        renderMatching(); // Restore UI
      }, 600);
    }
  }
}

function resetMatching() {
  const currentData = vocabularyData.find(g => g.id === appState.activeGroup);
  appState.matching.jpWords = shuffleArray(currentData.words);
  appState.matching.vnWords = shuffleArray(currentData.words);
  appState.matching.selectedJp = null;
  appState.matching.selectedVn = null;
  appState.matching.matchedIds = [];
  appState.matching.errorIds = { jp: null, vn: null };
  appState.matching.isComplete = false;
  renderMatching();
}

// Switch group
function switchGroup(groupId) {
  appState.activeGroup = groupId;
  appState.flashcards.flipped = {};
  appState.matching.matchedIds = [];
  appState.matching.selectedJp = null;
  appState.matching.selectedVn = null;
  appState.matching.isComplete = false;
  updateGroupButtons();
  render();
}

// Switch tab
function switchTab(tab) {
  appState.activeTab = tab;
  updateTabButtons();
  render();
}

// Update group buttons UI
function updateGroupButtons() {
  document.querySelectorAll('.group-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeBtn = document.querySelector(`[data-group="${appState.activeGroup}"]`);
  if (activeBtn) activeBtn.classList.add('active');
}

// Update tab buttons UI
function updateTabButtons() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeBtn = document.querySelector(`[data-tab="${appState.activeTab}"]`);
  if (activeBtn) activeBtn.classList.add('active');
}

// Main render function
function render() {
  if (appState.activeTab === 'flashcards') {
    renderFlashcards();
  } else {
    renderMatching();
  }
}

// Render group buttons
function renderGroupButtons() {
  const container = document.getElementById('group-buttons');
  let html = '';
  
  vocabularyData.forEach(group => {
    html += `
      <button class="group-btn ${appState.activeGroup === group.id ? 'active' : ''}" 
              data-group="${group.id}" 
              onclick="switchGroup(${group.id})">
        ${group.title}
      </button>
    `;
  });
  
  container.innerHTML = html;
}

// Initialize app
function initializeApp() {
  const currentData = vocabularyData.find(g => g.id === appState.activeGroup);
  appState.matching.jpWords = shuffleArray(currentData.words);
  appState.matching.vnWords = shuffleArray(currentData.words);
  renderGroupButtons();
  updateTabButtons();
  render();
}

// Start when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);
