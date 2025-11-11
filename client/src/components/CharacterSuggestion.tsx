import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { Character } from "@shared/schema";

interface CharacterSuggestionProps {
  character: Character;
  onFollow?: () => void;
  isFollowing?: boolean;
}

export function CharacterSuggestion({ character, onFollow, isFollowing = false }: CharacterSuggestionProps) {
  return (
    <div className="flex items-center gap-3 p-3" data-testid={`suggestion-${character.id}`}>
      <Avatar className="h-10 w-10" data-testid={`avatar-${character.id}`}>
        <AvatarImage src={character.avatar} alt={character.name} />
        <AvatarFallback>{character.name[0]}</AvatarFallback>
      </Avatar>

      <div className="flex-1 min-w-0">
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
        <p className="text-xs text-muted-foreground truncate" data-testid={`text-username-${character.id}`}>
          {character.username}
        </p>
      </div>

      <Button
        size="sm"
        variant={isFollowing ? "outline" : "secondary"}
        className="h-8"
        onClick={onFollow}
        data-testid={`button-follow-${character.id}`}
      >
        {isFollowing ? "Following" : "Follow"}
      </Button>
    </div>
  );
}
