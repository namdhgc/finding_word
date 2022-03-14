<!-- ABOUT THE PROJECT -->
## About The Project
* Game choose word

### Ref:
- clone from https://github.com/gjtorikian/heroku_chat_sample
- ref: https://betterprogramming.pub/how-to-build-a-concurrent-chat-app-with-golang-and-websockets-fb48562a1329


<!-- Requirement -->
## Requirement
- [ ] chọn bảng chữ cái (Hiragana, Katakana, chữ ghép, chữ Hán, lẫn lộn)
- [ ] default là hiragana
- [ ] có nhiều người cùng tham gia được (mỗi người sẽ tự điền tên khi truy cập)
- [ ] khi bấm start sẽ show ra 1 bảng 10x10 với vị trí chữ ngẫu nhiên
- [ ] khi bấm start sẽ show ra chữ cái đề bài cần đi tìm (Romaji)
- [ ] mỗi lần bấm chọn chữ cái sẽ delay 2s (tránh bấm liên tục)
- [ ] người đầu tiên tìm ra chữ cái đúng sẽ end round và tăng 1 điểm 
- [ ] khi bấm chọn đúng sẽ trừ chữ cái đó trong danh sách đề bài
- [ ] sau mỗi lần chọn đúng sẽ delay 5s để sang round kế tiếp 
