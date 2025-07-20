
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ButtonPrimaryProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  glowEffect?: boolean;
  href?: string;
}

const ButtonPrimary = ({ 
  children, 
  className, 
  glowEffect = false,
  href,
  ...rest
}: ButtonPrimaryProps) => {
  const commonClasses = cn(
    'btn-primary',
    glowEffect && 'animate-glow',
    className
  );

  const content = (
    <>
      <span>{children}</span>
      <ArrowRight size={20} />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={commonClasses} {...rest as React.AnchorHTMLAttributes<HTMLAnchorElement>}>
        {content}
      </Link>
    );
  }

  return (
    <button 
      className={commonClasses}
      data-hover
      {...rest}
    >
      {content}
    </button>
  );
};

export default ButtonPrimary;
