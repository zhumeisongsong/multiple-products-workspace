import { Button, ButtonProps } from '@shared/ui';
import { Loader2 } from 'lucide-react';

type Props = ButtonProps & { icon: React.ReactNode };

export const LoadingButton: React.FC<Props> = (props) => {
  return (
    <Button {...props}>
      {props.disabled ? <Loader2 className="animate-spin" /> : props.icon}
      {props.children}
    </Button>
  );
};
