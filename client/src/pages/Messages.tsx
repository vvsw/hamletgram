import { useState } from "react";
import { ConversationItem } from "@/components/ConversationItem";
import { MessageBubble } from "@/components/MessageBubble";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { conversations, messages, getCharacterById, characters } from "@/lib/hamletData";
import { Send, Settings } from "lucide-react";

export default function Messages() {
  const [selectedConversationId, setSelectedConversationId] = useState(
    conversations[0].characterId
  );
  const [messageText, setMessageText] = useState("");

  const selectedCharacter = getCharacterById(selectedConversationId);
  const conversationMessages = messages[selectedConversationId] || [];
  const hamlet = characters.find((c) => c.id === "hamlet")!;

  const handleSend = () => {
    if (messageText.trim()) {
      console.log("Sending message:", messageText);
      setMessageText("");
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-96 border-r border-border flex flex-col">
        <div className="sticky top-0 z-10 bg-background border-b border-border p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold" data-testid="text-messages-title">
              Messages
            </h1>
            <Button variant="ghost" size="icon" data-testid="button-settings">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {conversations.map((conversation) => {
            const character = getCharacterById(conversation.characterId);
            if (!character) return null;

            return (
              <ConversationItem
                key={conversation.id}
                conversation={conversation}
                character={character}
                isActive={selectedConversationId === character.id}
                onClick={() => setSelectedConversationId(character.id)}
              />
            );
          })}
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        {selectedCharacter && (
          <>
            <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border-border p-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10" data-testid="avatar-selected">
                  <AvatarImage src={selectedCharacter.avatar} alt={selectedCharacter.name} />
                  <AvatarFallback>{selectedCharacter.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-sm" data-testid="text-selected-name">
                      {selectedCharacter.name}
                    </span>
                    {selectedCharacter.verified && (
                      <svg
                        className="h-3.5 w-3.5 text-primary"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        data-testid="icon-verified"
                      >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground" data-testid="text-selected-username">
                    {selectedCharacter.username}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4" data-testid="messages-container">
              {conversationMessages.map((message) => (
                <MessageBubble
                  key={message.id}
                  message={message}
                  isSentByCurrentUser={message.senderId === "hamlet"}
                />
              ))}
            </div>

            <div className="border-t border-border p-4">
              <div className="flex gap-3 items-end">
                <Avatar className="h-10 w-10" data-testid="avatar-hamlet">
                  <AvatarImage src={hamlet.avatar} alt={hamlet.name} />
                  <AvatarFallback>{hamlet.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <Textarea
                    placeholder="Start a new message"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    className="resize-none min-h-[60px]"
                    data-testid="input-message"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSend();
                      }
                    }}
                  />
                </div>
                <Button
                  size="icon"
                  disabled={!messageText.trim()}
                  onClick={handleSend}
                  data-testid="button-send"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
