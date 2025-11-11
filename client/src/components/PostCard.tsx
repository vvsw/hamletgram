import { Heart, MessageCircle, Trash2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Post, Character } from "@shared/schema";
import { getCharacterById, getCommentsByPostId } from "@/lib/hamletData";
import { useState } from "react";

interface PostCardProps {
  post: Post;
  onDelete?: (postId: string) => void;
}

export function PostCard({ post, onDelete }: PostCardProps) {
  const character = getCharacterById(post.characterId);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);
  const postComments = getCommentsByPostId(post.id);

  if (!character) return null;

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
      setLiked(false);
    } else {
      setLikeCount(likeCount + 1);
      setLiked(true);
    }
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(post.id);
    }
  };

  return (
    <article
      className="border-b border-border p-4 hover-elevate"
      data-testid={`post-${post.id}`}
    >
      <div className="flex gap-3">
        <Avatar className="h-12 w-12" data-testid={`avatar-${character.id}`}>
          <AvatarImage src={character.avatar} alt={character.name} />
          <AvatarFallback>{character.name[0]}</AvatarFallback>
        </Avatar>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1 flex-wrap">
            <span className="font-bold text-foreground" data-testid={`text-name-${character.id}`}>
              {character.name}
            </span>
            <span className="text-muted-foreground text-sm" data-testid={`text-username-${character.id}`}>
              {character.username}
            </span>
            <span className="text-muted-foreground text-sm">·</span>
            <span className="text-muted-foreground text-sm" data-testid={`text-timestamp-${post.id}`}>
              {post.timestamp}
            </span>
            {post.characterId === "hamlet" && onDelete && (
              <Button
                variant="ghost"
                size="icon"
                className="ml-auto h-8 w-8 text-muted-foreground hover:text-destructive"
                data-testid={`button-delete-${post.id}`}
                onClick={handleDelete}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>

          <p className="mt-2 text-foreground leading-relaxed whitespace-pre-wrap" data-testid={`text-content-${post.id}`}>
            {post.content}
          </p>

          <div className="flex items-center gap-6 mt-3">
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 h-8 px-2 text-muted-foreground hover:text-primary"
              data-testid={`button-reply-${post.id}`}
              onClick={() => setShowComments(true)}
            >
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm">{post.replies}</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className={`gap-2 h-8 px-2 ${
                liked ? "text-red-500" : "text-muted-foreground hover:text-red-500"
              }`}
              data-testid={`button-like-${post.id}`}
              onClick={handleLike}
            >
              <Heart className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
              <span className="text-sm">{likeCount}</span>
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={showComments} onOpenChange={setShowComments}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Comments</DialogTitle>
            <DialogDescription>
              {postComments.length} {postComments.length === 1 ? 'comment' : 'comments'} on this post
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 mt-4">
            {postComments.length > 0 ? (
              postComments.map((comment) => {
                const commenter = getCharacterById(comment.characterId);
                if (!commenter) return null;
                
                return (
                  <div key={comment.id} className="flex gap-3 p-3 rounded-lg bg-muted/30">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={commenter.avatar} alt={commenter.name} />
                      <AvatarFallback>{commenter.name[0]}</AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm">{commenter.name}</span>
                        <span className="text-muted-foreground text-xs">{commenter.username}</span>
                        <span className="text-muted-foreground text-xs">·</span>
                        <span className="text-muted-foreground text-xs">{comment.timestamp}</span>
                      </div>
                      <p className="text-sm mt-1">{comment.content}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-center text-muted-foreground py-8">No comments yet</p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </article>
  );
}
