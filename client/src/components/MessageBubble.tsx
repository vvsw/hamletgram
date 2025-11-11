import type { Message } from "@shared/schema";

interface MessageBubbleProps {
  message: Message;
  isSentByCurrentUser: boolean;
}

export function MessageBubble({ message, isSentByCurrentUser }: MessageBubbleProps) {
  return (
    <div
      className={`flex ${isSentByCurrentUser ? "justify-end" : "justify-start"} mb-4`}
      data-testid={`message-${message.id}`}
    >
      <div className={`max-w-[70%] ${isSentByCurrentUser ? "items-end" : "items-start"} flex flex-col gap-1`}>
        <div
          className={`rounded-2xl px-4 py-2 ${
            isSentByCurrentUser
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-foreground"
          }`}
          data-testid={`bubble-${message.id}`}
        >
          <p className="text-sm leading-relaxed break-words">{message.content}</p>
        </div>
        <span className="text-xs text-muted-foreground px-2" data-testid={`timestamp-${message.id}`}>
          {message.timestamp}
        </span>
      </div>
    </div>
  );
}
