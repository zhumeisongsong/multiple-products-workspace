import { Card, CardContent, CardFooter } from '@shared/ui/card';
import { PartyPopper, Sparkles } from 'lucide-react';

import { PageContainer } from '../components/page-container';
import { LoadingButton } from '../components/loading-button';

export const TaskPage: React.FC = () => {
  return (
    <PageContainer>
      <Card>
        <CardContent className="h-64">
          <div className="flex items-center h-full">
            <div className="w-1/2"></div>

            <div className="w-1/2">
              <p className="text-lg font-semibold">
                Eat well and don't look at your phone.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-4">
          <LoadingButton
            variant="secondary"
            icon={<Sparkles strokeWidth={1.75} />}
          >
            Generate a new thing
          </LoadingButton>

          <LoadingButton icon={<PartyPopper strokeWidth={1.75} />}>
            I did it!
          </LoadingButton>
        </CardFooter>
      </Card>
    </PageContainer>
  );
};
