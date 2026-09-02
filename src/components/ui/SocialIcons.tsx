import {
  FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram,
  FaPinterestP, FaYoutube, FaDribbble, FaBehance,
} from 'react-icons/fa';
import type { Social, SocialKey } from '../../data/types';

const ICONS: Record<SocialKey, React.ComponentType> = {
  facebook: FaFacebookF,
  twitter: FaTwitter,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  pinterest: FaPinterestP,
  youtube: FaYoutube,
  dribbble: FaDribbble,
  behance: FaBehance,
};

type Props = { items: Social[]; className?: string };

/** Renders a list of social links using bundled icons (no icon CDN). */
export function SocialIcons({ items, className = '' }: Props) {
  return (
    <div className={className}>
      {items.map((s) => {
        const Icon = ICONS[s.key];
        return (
          <a key={s.key} href={s.href} aria-label={s.label} rel="noopener noreferrer">
            <Icon />
          </a>
        );
      })}
    </div>
  );
}
