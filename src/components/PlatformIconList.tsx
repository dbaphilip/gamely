import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaWind,
} from "react-icons/fa"
import { MdPhoneIphone } from "react-icons/md"
import { SiNintendo } from "react-icons/si"
import { BsGlobe2 } from "react-icons/bs"

import { Platform } from "../hooks/usePlatforms"

interface Props {
  platforms: Platform[]
}

export default function ({ platforms }: Props) {
  return (
    <ul className="icon-list">
      {platforms.map((platform) => (
        <li key={platform.id}>
          {platform.slug == "pc" && <FaWindows />}
          {platform.slug == "playstation" && <FaPlaystation />}
          {platform.slug == "xbox" && <FaXbox />}
          {platform.slug == "nintendo" && <SiNintendo />}
          {platform.slug == "mac" && <FaApple />}
          {platform.slug == "linux" && <FaLinux />}
          {platform.slug == "ios" && <MdPhoneIphone />}
          {platform.slug == "android" && <FaAndroid />}
          {platform.slug == "web" && <BsGlobe2 />}
        </li>
      ))}
    </ul>
  )
}

//   const iconMap = {
//     pc: FaWindows,
//     playstation: FaPlaystation,
//     xbox: FaXbox,
//     nintendo: SiNintendo,
//     mac: FaApple,
//     linux: FaLinux,
//     ios: MdPhoneIphone,
//     web: BsGlobe2,
//   }
