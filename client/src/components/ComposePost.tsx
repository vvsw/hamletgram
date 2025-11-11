import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Image, Smile } from "lucide-react";
import { characters } from "@/lib/hamletData";

interface ComposePostProps {
  onPost: (content: string) => void;
}

export function ComposePost({ onPost }: ComposePostProps) {
  const [content, setContent] = useState("");
  const hamlet = characters.find((c) => c.id === "hamlet")!;
  const maxLength = 280;

  const handlePost = () => {
    if (content.trim()) {
      onPost(content);
      setContent("");
    }
  };

  return (
    <div className="border-b border-border p-4" data-testid="compose-post">
      <div className="flex gap-3">
        <Avatar className="h-12 w-12" data-testid="avatar-hamlet">
          <AvatarImage src={hamlet.avatar} alt={hamlet.name} />
          <AvatarFallback>{hamlet.name[0]}</AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <Textarea
            placeholder="What's happening?"
            value={content}
            onChange={(e) => setContent(e.target.value.slice(0, maxLength))}
            className="min-h-[100px] resize-none border-0 p-0 text-lg focus-visible:ring-0 placeholder:text-muted-foreground"
            data-testid="input-compose"
          />

          <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 text-primary"
                data-testid="button-image"
                onClick={() => console.log('Image clicked')}
              >
                <Image className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 text-primary"
                data-testid="button-emoji"
                onClick={() => console.log('Emoji clicked')}
              >
                <Smile className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-center gap-3">
              {content.length > 0 && (
                <span
                  className={`text-sm ${
                    content.length >= maxLength
                      ? "text-destructive"
                      : "text-muted-foreground"
                  }`}
                  data-testid="text-character-count"
                >
                  {content.length}/{maxLength}
                </span>
              )}
              <Button
                disabled={content.trim().length === 0}
                onClick={handlePost}
                data-testid="button-post"
              >
                Post
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
