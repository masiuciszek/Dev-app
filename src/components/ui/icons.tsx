import {
  Apple,
  ArrowLeft,
  ArrowRight,
  BadgeIcon,
  Beef,
  Check,
  CopyIcon,
  Droplet,
  Flame,
  Info,
  type LucideProps,
  Pen,
  Scale,
  Search,
  Settings,
  Settings2,
  Star,
  StarHalf,
  User2,
  Zap,
} from "lucide-react";

const ICON_SIZE = 16;
export let Icons = Object.freeze({
  Food: (props: LucideProps) => <Apple size={ICON_SIZE} {...props} />,
  Protein: (props: LucideProps) => <Beef size={ICON_SIZE} {...props} />,
  Copy: (props: LucideProps) => <CopyIcon size={ICON_SIZE} {...props} />,
  Info: (props: LucideProps) => <Info size={ICON_SIZE} {...props} />,
  Fat: (props: LucideProps) => <Droplet size={ICON_SIZE} {...props} />,
  Calories: (props: LucideProps) => <Flame size={ICON_SIZE} {...props} />,
  Scale: (props: LucideProps) => <Scale size={ICON_SIZE} {...props} />,
  Search: (props: LucideProps) => <Search size={ICON_SIZE} {...props} />,
  Star: (props: LucideProps) => <Star size={ICON_SIZE} {...props} />,
  StarHalf: (props: LucideProps) => <StarHalf size={ICON_SIZE} {...props} />,
  Carbs: (props: LucideProps) => <Zap size={ICON_SIZE} {...props} />,
  Label: (props: LucideProps) => <BadgeIcon size={ICON_SIZE} {...props} />,
  Edit: (props: LucideProps) => <Pen size={ICON_SIZE} {...props} />,
  Left: (props: LucideProps) => <ArrowLeft size={ICON_SIZE} {...props} />,
  Right: (props: LucideProps) => <ArrowRight size={ICON_SIZE} {...props} />,
  Check: (props: LucideProps) => <Check size={ICON_SIZE} {...props} />,
  Settings: (props: LucideProps) => <Settings size={ICON_SIZE} {...props} />,
  Settings2: (props: LucideProps) => <Settings2 size={ICON_SIZE} {...props} />,
  Profile: (props: LucideProps) => <User2 size={ICON_SIZE} {...props} />,
});
