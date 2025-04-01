import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaSass, FaFigma, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane,FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
import work1 from "./assets/agro.jpg";
import work2 from "./assets/nft.jpg";
import work3 from "./assets/csv.png";
import work4 from "./assets/dots.jpg";
import work5 from "./assets/payment.jpg";
import work6 from "./assets/video.jpg";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [
  {
    icon: <FaInstagram />,
    url: 'https://www.instagram.com/mvrkkautilya'
  },
  {
    icon: <FaGithub />,
    url: 'https://github.com/MVRKKSK'
  },
  {
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/mvrkksk'
  },
  {
    icon: <BsMedium />,
    url: 'https://medium.com/@shivakumar.kautilya'
  }
];
export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Kautilya Miryala"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+1 518-616-3663"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "vrk.kautilya@gmail.com"
  }
]

export const icons = [<FaHtml5 />, <FaCss3 />, <DiJavascript />, <SiTypescript />, <FaReact />, <FaNodeJs />, <FaSass />, <FaFigma />]

export const experiences = [
  {
    id: 1,
    year: "2022",
    position: "Backend Developer",
    company: "plypicker.com"
  },
  {
    di: 2,
    year: "2021",
    position: "Full Stack Developer",
    company: "Betatesters.com"
  },
  {
    id: 3,
    year: "2021",
    position: "Full Stack Developer",
    company: "Google Developer Student Club"
  }
]
export const finishes = [
  {
    id: 1,
    number: '3+',
    itemName: "Years Of Experience"
  },
  {
    id: 2,
    number: "50+",
    itemName: "personal projects"
  },
  {
    id: 3,
    number: "7+",
    itemName: "International projects"
  },
]
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "Agro-Assist",
    category: "web",
    github: "https://github.com/MVRKKSK/AgroAssist-Frontend",
    website: "https://agro-assist-frontend.vercel.app/"
  },
  {
    id: 2,
    img: work2,
    name: "NFT-Marketplace",
    category: "web",
    github: "https://github.com/MVRKKSK/NFT-MARKETPLACE",
    website: null
  },
  {
    id: 3,
    img: work3,
    name: "CSV to Google Sheets",
    category: "web",
    github: "https://github.com/MVRKKSK/Csv-to-Google-Sheet-importer",
    website: "https://csv-to-google-sheet-importer.vercel.app/"
  },
  {
    id: 4,
    img: work4,
    name: "Connect-4 Game",
    category: "Games",
    github: "https://github.com/MVRKKSK/Connect-Four",
    website: "https://48dnk2-3000.csb.app/"
  },
  {
    id: 5,
    img: work5,
    name: "Payment Alert System Design",
    category: 'System Design',
    github: "https://github.com/MVRKKSK/System-Design",
    website: null
  },
  {
    id: 6,
    img: work6,
    name: "Video Streaming System Design",
    category: "System Design",
    github: "https://github.com/MVRKKSK/System-Design",
    website: null
  }
]


export const workNavs = [
  "All", "Web", "Games", "System Design"
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "New York , USA"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "vrk.kautilya@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+1-518-616-3663"
  }
]
