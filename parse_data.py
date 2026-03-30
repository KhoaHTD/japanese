import re

def parse_vocabulary(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    lessons = []
    current_lesson = None
    
    # Split by lines
    lines = content.split('\n')
    
    for line in lines:
        line = line.strip()
        if not line:
            continue
            
        # Check for lesson header
        if line.startswith('📘 Bài'):
             # Extract lesson number
            match = re.search(r'Bài (\d+)', line)
            if match:
                lesson_num = int(match.group(1))
                current_lesson = {'id': lesson_num, 'words': []}
                lessons.append(current_lesson)
            continue
            
        if current_lesson is None:
            continue
            
        # Parse word line
        # Format: Kanji（Kana）\tMeaning OR Word\tMeaning
        # Handle tab or space separation if tab is missing, but usually tab
        parts = re.split(r'\t+', line)
        if len(parts) < 2:
            # Maybe spaces?
            parts = re.split(r'\s{2,}', line)
        
        if len(parts) >= 2:
            jp_part = parts[0].strip()
            vi_part = parts[1].strip()
            
            # Extract Kanji and Kana
            # Pattern: Kanji（Kana）
            # Using fullwidth parentheses （）
            
            kanji = jp_part
            kana = jp_part # Default
            
            match = re.search(r'(.+?)（(.+?)）', jp_part)
            if match:
                kanji = match.group(1)
                kana = match.group(2)
            else:
                 # Check for halfwidth parens just in case
                match = re.search(r'(.+?)\((.+?)\)', jp_part)
                if match:
                    kanji = match.group(1)
                    kana = match.group(2)
            
            current_lesson['words'].append({
                'kanji': kanji,
                'kana': kana,
                'vi': vi_part
            })
            
    return lessons

def generate_js_object(lessons):
    js_output = "const vocabularyData = [\n"
    
    group_counter = 1
    
    for lesson in lessons:
        words = lesson['words']
        # Split into groups of 10
        chunk_size = 10
        for i in range(0, len(words), chunk_size):
            chunk = words[i:i + chunk_size]
            
            group_num_in_lesson = (i // chunk_size) + 1
            
            js_output += "  {\n"
            js_output += f"    id: {group_counter},\n"
            js_output += f"    lessonId: {lesson['id']},\n"
            js_output += f"    title: \"Nhóm {group_num_in_lesson}\",\n"
            js_output += "    words: [\n"
            
            for j, word in enumerate(chunk):
                word_id = f"{group_counter}-{j+1}"
                js_output += f"      {{ id: '{word_id}', kanji: '{word['kanji']}', kana: '{word['kana']}', vi: '{word['vi']}' }}"
                if j < len(chunk) - 1:
                    js_output += ","
                js_output += "\n"
                
            js_output += "    ]\n"
            js_output += "  },\n"
            
            group_counter += 1
            
    js_output += "];"
    return js_output

lessons = parse_vocabulary('d:\\Japan\\raw_data.txt')
js_code = generate_js_object(lessons)
print(js_code)
