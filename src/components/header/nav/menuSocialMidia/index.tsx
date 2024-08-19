import {
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaSpotify,
  FaTiktok,
} from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

export default function MenuSocialMidia() {
  return (
    <div className="flex items-center gap-2">
      <a
        target="_blank"
        href="https://www.linkedin.com/company/unicreddobrasil/"
      >
        <FaLinkedinIn
          size={16}
          className="fill-c4c4c4 hover:fill-blue-500 transition-colors duration-200"
        />
      </a>
      <a target="_blank" href="https://www.facebook.com/unicredbrasil">
        <FaFacebookF
          size={16}
          className="fill-c4c4c4 hover:fill-blue-600 transition-colors duration-200"
        />
      </a>
      <a target="_blank" href="https://www.youtube.com/@unicred">
        <FaYoutube
          size={16}
          className="fill-c4c4c4 hover:fill-red-500 transition-colors duration-200"
        />
      </a>
      <a target="_blank" href="https://www.instagram.com/unicredbrasil">
        <FaInstagram
          size={16}
          className="fill-c4c4c4 hover:fill-red-500 transition-colors duration-200"
        />
      </a>
      <a target="_blank" href="https://x.com/unicred_">
        <FaSquareXTwitter
          size={16}
          className="fill-c4c4c4 hover:fill-black transition-colors duration-200"
        />
      </a>
      <a
        target="_blank"
        href="https://open.spotify.com/show/0JFVXPJPe3fW2CzDC7a43I?si=nFbW9qq4RcKJmaRlLsfO-w&nd=1&dlsi=e407da5b72f3477d"
      >
        <FaSpotify
          size={16}
          className="fill-c4c4c4 hover:fill-green-600 transition-colors duration-200"
        />
      </a>
      <a target="_blank" href="https://www.unicred.com.br/fique-por-dentro">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width={16}
          height={16}
          className="fill-c4c4c4 hover:fill-black transition-colors duration-200"
        >
          <path d="M 5 5 L 5 9 C 14.93 9 23 17.07 23 27 L 27 27 C 27 14.85 17.15 5 5 5 z M 5 12 L 5 16 C 11.07 16 16 20.93 16 27 L 20 27 C 20 18.72 13.28 12 5 12 z M 8 21 A 3 3 0 0 0 8 27 A 3 3 0 0 0 8 21 z" />
        </svg>
      </a>
      <a target="_blank" href="https://www.tiktok.com/@unicredbrasil">
        <FaTiktok
          size={16}
          className="fill-c4c4c4 hover:fill-black transition-colors duration-200"
        />
      </a>
    </div>
  );
}
