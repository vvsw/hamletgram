import { ConversationItem } from '../ConversationItem';
import { conversations, getCharacterById } from '@/lib/hamletData';

export default function ConversationItemExample() {
  const character = getCharacterById(conversations[0].characterId);
  
  if (!character) return null;
  
  return (
    <div className="w-96">
      <ConversationItem
        conversation={conversations[0]}
        character={character}
        onClick={() => console.log('Conversation clicked')}
      />
    </div>
  );
}
