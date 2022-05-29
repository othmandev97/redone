import { v4 as uuidv4 } from "uuid";
// songs
// import song from "../assets/images/news/fifanews.png";
// import song2 from "../assets/images/news/fifanews2.png";
// import song3 from "../assets/images/news/fifanews3.png";
// import song4 from "../assets/images/news/fifanews4.png";
// import song5 from "../assets/images/news/fifanews4.png";
// import song6 from "../assets/images/news/fifanews4.png";
// import song7 from "../assets/images/news/fifanews4.png";
// import song8 from "../assets/images/news/fifanews4.png";
// import song9 from "../assets/images/news/fifanews4.png";
// import song10 from "../assets/images/news/fifanews4.png";


// Festival
import festivalSongAudio from "../assets/songs/Los-Polinesios&RedOne-Song-Festival.mp3";
import festivalSongPic from "../assets/songs/images/Los-Polinesios&RedOne-Festival.png";

// Hala Madrid…y nada más 
import HalaMadridSongAudio from "../assets/songs/Hala-Madrid...y-nada-más.mp3";
import HalaMadridSongPic from "../assets/songs/images/Hala-Madrid...y-nada-mas.png";

// Let it Out
import LetitOutSongAudio from "../assets/songs/Sirusho-Let-It-Out.mp3";
import LetitOutSongPic from "../assets/songs/images/Sirusho-Let-It-Out.jfif";

// Kings and Queens
import KingsandQueensSongAudio from "../assets/songs/Ava-Max-Kings&Queens.mp3";
import KingsandQueensSongPic from "../assets/songs/images/Ava-Max-Kings&Queens .png";

// All Day Night
import AllDayNightSongAudio from "../assets/songs/Faudel&RedOne-All-Day-All-Night.mp3";
import AllDayNightSongPic from "../assets/songs/images/Faudel&RedOne-All-Day-All-Night .png";

// Kick-Ass
import KickAssSongAudio from "../assets/songs/MIKA-vs-RedOne-Kick-Ass.mp3";
import KickAssSongPic from "../assets/songs/images/MIKA-vs-RedOne-Kick Ass.jfif";

// Don’t You Need Somebody
import DontYouNeedSomebodySongAudio from "../assets/songs/RedOne-Dont-You-Need-Somebody.mp3";
import DontYouNeedSomebodySongPic from "../assets/songs/images/RedOne-Dont-You-Need-Somebody.jfif";

// hayya hayya song
import hayyahayyaSongAudio from "../assets/songs/hayya-hayya-better-together-fifa-world-cup-2022.mp3";
import hayyahayyaSongPic from "../assets/songs/images/fifa-pic.jpg";




// export const songsdata = [
//   {
//     id: 1,
//     title: "Qatar 2022: Fifa for a World Cup in November December",
//     image: news_fifa,
//     imageAlt: "Qatar 2022",
//     active: false,
//   },
//   {
//     id: 2,
//     title: "Qatar 2022: Fifa for a World Cup in November December",
//     image: news2_fifa,
//     imageAlt: "Qatar 2022",
//     active: true,
//   },
//   {
//     id: 3,
//     title: "Qatar 2022: Fifa for a World Cup in November December",
//     image: news3_fifa,
//     imageAlt: "Qatar 2022",
//     active: false,
//   },
//   {
//     id: 4,
//     title: "Qatar 2022: Fifa for a World Cup in November December",
//     image: news4_fifa,
//     imageAlt: "Qatar 2022",
//     active: false,
//   },
//   {
//     id: 5,
//     title: "Qatar 2022: Fifa for a World Cup in November December",
//     image: news4_fifa,
//     imageAlt: "Qatar 2022",
//     active: false,
//   },  
//   {
//     id: 6,
//     title: "Qatar 2022: Fifa for a World Cup in November December",
//     image: news4_fifa,
//     imageAlt: "Qatar 2022",
//     active: false,
//   },  
//   {
//     id: 7,
//     title: "Qatar 2022: Fifa for a World Cup in November December",
//     image: news4_fifa,
//     imageAlt: "Qatar 2022",
//     active: false,
//   },  
//   {
//     id: 8,
//     title: "Qatar 2022: Fifa for a World Cup in November December",
//     image: news4_fifa,
//     imageAlt: "Qatar 2022",
//     active: false,
//   },  
//   {
//     id: 9,
//     title: "Qatar 2022: Fifa for a World Cup in November December",
//     image: news4_fifa,
//     imageAlt: "Qatar 2022",
//     active: false,
//   },  
//   {
//     id: 10,
//     title: "Qatar 2022: Fifa for a World Cup in November December",
//     image: news4_fifa,
//     imageAlt: "Qatar 2022",
//     active: false,
//   },
// ];


function SongPlayList() {
  return [
    {
      name: "Hayya Hayya - Fifa Song",
      nameArtists: "Aicha, Davido, Trinidad Cardona",
      cover: hayyahayyaSongPic,
      audio: hayyahayyaSongAudio,
      id: uuidv4(),
      active: false,
    },
    {
      name: "Los Polinesios & RedOne-Festival",
      nameArtists: "RedOne",
      cover: festivalSongPic,
      audio: festivalSongAudio,
      id: uuidv4(),
      active: false,
    },
    {
      name: "Hala Madrid...y nada más (feat. RedOne)",
      nameArtists: "Aicha, Davido, Trinidad Cardona",
      cover: HalaMadridSongPic,
      audio: HalaMadridSongAudio,
      id: uuidv4(),
      active: false,
    },
    {
      name: "Sirusho - Let It Out (by RedOne)",
      nameArtists: "Aicha, Davido, Trinidad Cardona",
      cover: LetitOutSongPic,
      audio: LetitOutSongAudio,
      id: uuidv4(),
      active: false,
    },
    {
      name: "Ava Max - Kings & Queens",
      nameArtists: "Aicha, Davido, Trinidad Cardona",
      cover: KingsandQueensSongPic,
      audio: KingsandQueensSongAudio,
      id: uuidv4(),
      active: false,
    },
    {
      name: "Faudel & RedOne - All Day All Night",
      nameArtists: "Aicha, Davido, Trinidad Cardona",
      cover: AllDayNightSongPic,
      audio: AllDayNightSongAudio,
      id: uuidv4(),
      active: false,
    },
    {
      name: "MIKA vs. RedOne - Kick Ass (We Are Young)",
      nameArtists: "Aicha, Davido, Trinidad Cardona",
      cover: KickAssSongPic,
      audio: KickAssSongAudio,
      id: uuidv4(),
      active: false,
    },
    {
      name: "RedOne - Don't You Need Somebody",
      nameArtists: "Aicha, Davido, Trinidad Cardona",
      cover: DontYouNeedSomebodySongPic,
      audio: DontYouNeedSomebodySongAudio,
      id: uuidv4(),
      active: false,
    },
  ];
}

export default SongPlayList;