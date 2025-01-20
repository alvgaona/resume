import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import avatar from '@/assets/avatar.jpg';

const MyAvatar = ({ className }: { className: string }) => (
  <Avatar className={className}>
    <AvatarImage src={avatar.src} alt="@alvgaona" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
);

export default MyAvatar;
