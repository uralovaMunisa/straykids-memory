import albumsJson from './albums.json';

const tracklists = {
  "mixtape": ["Hellevator", "Grrr 총량의 법칙", "어린 날개 (Young Wings)", "YAYAYA", "GLOW", "School Life", "4419"],
  "i-am-not": ["NOT!", "District 9", "Mirror", "Awaken", "ROCK (돌)", "잘 하고 있어 (Grow Up)", "3rd Eye", "Mixtape #1"],
  "i-am-who": ["WHO?", "My Pace", "Voices", "Question", "불면증 (Insomnia)", "M.I.A.", "갑자기 분위기 싸해질 필요 없잖아요", "Mixtape #2"],
  "i-am-you": ["YOU.", "I am YOU", "편 (My Side)", "해장국 (Hero's Soup)", "Get Cool", "극과 극 (N/S)", "0325", "Mixtape #3"],
  "cle-1-miroh": ["Entrance", "MIROH", "승전가 (Victory Song)", "잠깐의 고요 (Maze of Memories)", "Boxer", "Chronosaurus", "19", "Mixtape #4"],
  "cle-2-yellow-wood": ["밟힌 적 없는 길 (Road Not Taken)", "부작용 (Side Effects)", "별생각 (TMT)", "Mixtape #1", "Mixtape #2", "Mixtape #3", "Mixtape #4"],
  "cle-levanter": ["STOP", "Double Knot", "바람 (Levanter)", "Booster", "Astronaut", "Sunshine", "You Can STAY", "Mixtape #5"],
  "go-live": ["GO生", "神메뉴 (God's Menu)", "Easy", "Pacemaker", "비행기 (Airplane)", "일상 (Another Day)", "Phobia", "청사진 (Blueprint)", "타 (TA)", "Haven", "TOP", "SLUMP"],
  "in-life": ["토끼와 거북이", "Back Door", "B Me", "아니 (Any)", "미친 놈 (Ex)", "We Go (Bang Chan, Changbin, HAN)", "Wow (Lee Know, Hyunjin, Felix)", "My Universe (Seungmin, I.N feat. Changbin)"],
  "all-in": ["ALL IN", "FAM", "One Day", "God's Menu (Japanese Ver.)", "Back Door (Japanese Ver.)", "TOP (Japanese Ver.)", "SLUMP (Japanese Ver.)"],
  "noeasy": ["CHEESE", "소리꾼 (Thunderous)", "DOMINO", "씩 (SSICK)", "The View", "좋아해서 미안 (Sorry, I Love You)", "Silent Cry", "말할 수 없는 비밀 (Secret Secret)", "Star Lost", "강박 (Red Lights)", "Surfin'", "Gone Away", "WOLFGANG", "애 (OH)"],
  "christmas-evel": ["Christmas EveL", "24 to 25", "Winter Falls", "DOMINO (English Ver.)"],
  "oddinary": ["거미줄 (VENOM)", "MANIAC", "Charmer", "땡 (FREEZE)", "Lonely St.", "피어난 (Waiting For Us)", "Muddy Water"],
  "maxident": ["CASE 143", "식혀 (CHILL)", "Give Me Your TMI", "SUPER BOARD", "3RACHA (Bang Chan, Changbin, HAN)", "TASTE (Lee Know, Hyunjin, Felix)", "나 너 좋아하나봐 (Can't Stop)", "CIRCUS (Korean Ver.)"],
  "5-star": ["위인전 (Hall of Fame)", "특 (S-Class)", "ITEM", "Super Bowl", "TOPLINE (feat. Tiger JK)", "DLC", "죽어보자 (GET LIT)", "충돌 (Collision)", "FNF", "Youtiful", "THE SOUND (Korean Ver.)", "Time Out"],
  "the-sound": ["THE SOUND", "Battle Ground", "Lost Me", "DLMLU", "Novel", "Scars", "CASE 143 (Japanese Ver.)", "CHILL (Japanese Ver.)", "There"],
  "rock-star": ["MEGAVERSE", "락 (樂) (LALALALA)", "사각지대 (BLIND SPOT)", "COMFLEX", "가려줘 (Cover Me)", "Leave", "Social Path (feat. LiSA) (Korean Ver.)", "LALALALA (Rock Ver.)"],
  "ate": ["MOUNTAINS", "Chk Chk Boom", "JJAM", "I Like It", "Runners", "또 다시 밤 (Twilight)", "Stray Kids", "Chk Chk Boom (Festival Ver.)"],
  "giant": ["GIANT", "Chk Chk Boom (Japanese Ver.)", "NIGHT", "Falling Up", "WHY?", "Saiyan", "Christmas Love"],
  "hop": ["Walkin On Water", "Bounce Back", "U (feat. TABLO)", "Railway (Bang Chan)", "Unfair (Felix)", "Hallucination (I.N)", "Youth (Lee Know)", "Volcano (HAN)", "Hold On (Seungmin)", "Ultra (Changbin)", "Michelangelo (Hyunjin)"],
  "hollow": ["Hollow", "Phantom Beat", "Mirror Maze", "Eclipse of Heart"],
  "karma": ["Karma", "CEREMONY", "Neon Pulse", "Apex", "Iron Heart", "Vortex", "Gravity", "Red Flame", "Horizon", "Timeless STAY"],
  "do-it": ["DO IT", "Overdrive", "Ignition", "No Limits", "Breakthrough"],
  "skz-replay-2026": ["Memory Lane", "Echoes of Stay", "Drive (Bang Chan, Lee Know)", "Zone (3RACHA)", "Close (HAN)", "Streetlight (Changbin)", "Up All Night (Bang Chan, Seungmin)"],
  "this-and-that": ["THIS & THAT", "Dual Reality", "Crossroad", "Unstoppable", "8 Voices", "STAY Forever", "2026 Anthem"]
};

export const albumsData = albumsJson.map(album => ({
  ...album,
  tracks: tracklists[album.id] || [album.titleTrack || "Main Track", "Track 02", "Track 03", "Track 04"]
}));

