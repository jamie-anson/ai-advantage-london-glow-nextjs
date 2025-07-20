import { Metadata } from 'next';
import RequestInviteClientPage from './RequestInviteClientPage';

export const metadata: Metadata = {
  title: 'Request an Invite | AI Advantage',
  description: 'Secure your spot at our exclusive, invite-only workshop for ambitious professionals. Tell us about yourself to get on the list.',
};

export default function RequestInvitePage() {
  return <RequestInviteClientPage />;
}
