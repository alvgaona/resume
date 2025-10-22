import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import avatar from '@/assets/avatar.jpg';

interface MyAvatarProps {
  className?: string;
}

const MyAvatar = ({ className = 'h-24 w-24' }: MyAvatarProps) => (
  <Avatar className={className}>
    <AvatarImage
      src={avatar.src}
      alt="Alvaro Gaona profile picture"
      loading="lazy"
    />
    <AvatarFallback>AG</AvatarFallback>
  </Avatar>
);

export default MyAvatar;
