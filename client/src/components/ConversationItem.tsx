import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Conversation, Character } from "@shared/schema";

interface ConversationItemProps {
  conversation: Conversation;
  character: Character;
  isActive?: boolean;
  onClick?: () => void;
}

export function ConversationItem({
  conversation,
  character,
  isActive = false,
  onClick,
}: ConversationItemProps) {
  return (
    <div
      className={`flex items-start gap-3 p-4 border-b border-border cursor-pointer hover-elevate ${
        isActive ? "bg-accent" : ""
      }`}
      onClick={onClick}
      data-testid={`conversation-${character.id}`}
    >
      <Avatar className="h-12 w-12" data-testid={`avatar-${character.id}`}>
        <AvatarImage src={character.avatar} alt={character.name} />
        <AvatarFallback>{character.name[0]}</AvatarFallback>
      </Avatar>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1">
            <span className="font-bold text-sm text-foreground truncate" data-testid={`text-name-${character.id}`}>
              {character.name}
            </span>
            {character.verified && (
              <svg
                className="h-3.5 w-3.5 text-primary flex-shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                data-testid="icon-verified"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
          </div>
          <span className="text-xs text-muted-foreground flex-shrink-0" data-testid={`text-timestamp-${character.id}`}>
            {conversation.timestamp}
          </span>
        </div>
        <p className="text-sm text-muted-foreground mt-1 truncate" data-testid={`text-username-${character.id}`}>
          {character.username}
        </p>
        <p className="text-sm text-foreground mt-1 truncate" data-testid={`text-lastmessage-${character.id}`}>
          {conversation.lastMessage}
        </p>
      </div>
    </div>
  );
}
