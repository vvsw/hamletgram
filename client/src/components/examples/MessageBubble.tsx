import { MessageBubble } from '../MessageBubble';
import { messages } from '@/lib/hamletData';

export default function MessageBubbleExample() {
  return (
    <div className="w-96 space-y-2">
      <MessageBubble message={messages.horatio[0]} isSentByCurrentUser={false} />
      <MessageBubble message={messages.horatio[1]} isSentByCurrentUser={true} />
    </div>
  );
}
