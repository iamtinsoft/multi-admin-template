import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

export const IconResolver = (icon: string) => {
  switch (icon) {
    case "BsFacebook":
      return BsFacebook;
      break;
    case "BsTwitter":
      return BsTwitter;
      break;
    case "BsInstagram":
      return BsInstagram;
      break;
    case "BsLinkedIn":
      return BsLinkedin;
      break;
    default:
      break;
  }
};
