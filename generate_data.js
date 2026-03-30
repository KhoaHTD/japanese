const fs = require('fs');
const path = require('path');

function parseVocabulary(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split(/\r?\n/);
    
    let lessons = [];
    let currentLesson = null;
    
    lines.forEach(line => {
        line = line.trim();
        if (!line) return;
        
        // Check for lesson header "📘 Bài 1"
        const lessonMatch = line.match(/📘 Bài (\d+)/);
        if (lessonMatch) {
            currentLesson = {
                id: parseInt(lessonMatch[1]),
                words: []
            };
            lessons.push(currentLesson);
            return;
        }
        
        if (!currentLesson) return;
        
        // Parse word line
        // Try tab split first
        let parts = line.split('\t');
        if (parts.length < 2) {
             // Try space split if > 1 space
             parts = line.split(/\s{2,}/);
        }
        
        if (parts.length >= 2) {
            const jpPart = parts[0].trim();
            const viPart = parts[1].trim();
            
            let kanji = jpPart;
            let kana = jpPart;
            
            // Extract Kanji (Kana)
            // Fullwidth parens
            const matchFull = jpPart.match(/(.+?)（(.+?)）/);
            // Halfwidth parens
            const matchHalf = jpPart.match(/(.+?)\((.+?)\)/);
            
            if (matchFull) {
                kanji = matchFull[1];
                kana = matchFull[2];
            } else if (matchHalf) {
                kanji = matchHalf[1];
                kana = matchHalf[2];
            }
            
            currentLesson.words.push({
                kanji: kanji,
                kana: kana,
                vi: viPart
            });
        }
    });
    
    return lessons;
}

function generateJS(lessons) {
    let output = "const vocabularyData = [\n";
    let groupCounter = 1;
    
    lessons.forEach(lesson => {
        const words = lesson.words;
        const chunkSize = 10;
        
        for (let i = 0; i < words.length; i += chunkSize) {
            const chunk = words.slice(i, i + chunkSize);
            const groupNumInLesson = Math.floor(i / chunkSize) + 1;
            
            output += "  {\n";
            output += `    id: ${groupCounter},\n`;
            // Add lessonId property for easier filtering
            output += `    lessonId: ${lesson.id},\n`; 
            output += `    title: "Nhóm ${groupNumInLesson}",\n`;
            output += "    words: [\n";
            
            chunk.forEach((word, index) => {
                const wordId = `${groupCounter}-${index + 1}`;
                output += `      { id: '${wordId}', kanji: '${word.kanji}', kana: '${word.kana}', vi: '${word.vi}' }`;
                if (index < chunk.length - 1) output += ",";
                output += "\n";
            });
            
            output += "    ]\n";
            output += "  }";
            if (groupCounter > 0) output += ",\n"; // Always comma for now, fix trailing comma later if strict
            
            groupCounter++;
        }
    });
    
    // Remove last comma/newline if needed, but JS allows trailing comma
    output += "];";
    return output;
}

const lessons = parseVocabulary('d:\\Japan\\raw_data.txt');
fs.writeFileSync('d:\\Japan\\new_data.js', generateJS(lessons), 'utf8');
