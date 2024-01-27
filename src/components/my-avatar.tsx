import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const MyAvatar = ({ className }: { className: string }) => (
  <Avatar className={className}>
    <AvatarImage src="https://github.com/alvgaona.png" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
);

export default MyAvatar;
