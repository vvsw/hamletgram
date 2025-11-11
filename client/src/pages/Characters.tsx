import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { characters } from "@/lib/hamletData";

export default function Characters() {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="w-full max-w-2xl border-x border-border">
        <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border-border p-4">
          <h1 className="text-xl font-bold" data-testid="text-characters-title">
            Characters
          </h1>
        </div>

        <div className="p-4 space-y-4">
          {characters.map((character) => (
            <Card key={character.id} data-testid={`character-card-${character.id}`}>
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <Avatar className="h-16 w-16" data-testid={`avatar-${character.id}`}>
                    <AvatarImage src={character.avatar} alt={character.name} />
                    <AvatarFallback>{character.name[0]}</AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-1">
                      <h3 className="font-bold text-lg" data-testid={`text-name-${character.id}`}>
                        {character.name}
                      </h3>
                      {character.verified && (
                        <svg
                          className="h-5 w-5 text-primary"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          data-testid="icon-verified"
                        >
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2" data-testid={`text-username-${character.id}`}>
                      {character.username}
                    </p>
                    <p className="text-sm leading-relaxed" data-testid={`text-bio-${character.id}`}>
                      {character.bio}
                    </p>
                  </div>

                  <Button
                    variant="secondary"
                    size="sm"
                    data-testid={`button-follow-${character.id}`}
                    onClick={() => console.log(`Follow ${character.name}`)}
                  >
                    Follow
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
