import Icons from "@/components/Icons";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => (
  <div className="flex items-center text-primary">
    <Icons.logo className={cn("w-8 h-8", className)} />
    <p className="ml-2 text-inherit text-2xl font-bold">Kanbana</p>
  </div>
);

export default Logo;
