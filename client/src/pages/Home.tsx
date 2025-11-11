import { useState } from "react";
import { ComposePost } from "@/components/ComposePost";
import { PostCard } from "@/components/PostCard";
import { CharacterSuggestion } from "@/components/CharacterSuggestion";
import { posts as initialPosts, characters } from "@/lib/hamletData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Post } from "@shared/schema";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [followedCharacters, setFollowedCharacters] = useState<Set<string>>(new Set());
  
  const suggestedCharacters = characters.filter((c) => c.id !== "hamlet").slice(0, 3);

  const handlePost = (content: string) => {
    const newPost: Post = {
      id: `post-${Date.now()}`,
      characterId: "hamlet",
      content: content,
      timestamp: "Just now",
      likes: 0,
      replies: 0,
    };
    setPosts([newPost, ...posts]);
  };

  const handleFollow = (characterId: string) => {
    setFollowedCharacters((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(characterId)) {
        newSet.delete(characterId);
      } else {
        newSet.add(characterId);
      }
      return newSet;
    });
  };

  const handleDeletePost = (postId: string) => {
    setPosts((prev) => prev.filter((p) => p.id !== postId));
  };

  return (
    <div className="flex justify-center min-h-screen">
      <div className="flex w-full max-w-7xl">
        <main className="flex-1 border-x border-border max-w-2xl">
          <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border-border p-4">
            <h1 className="text-xl font-bold" data-testid="text-page-title">
              Home
            </h1>
          </div>

          <ComposePost onPost={handlePost} />

          <div className="divide-y divide-border">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} onDelete={handleDeletePost} />
            ))}
          </div>
        </main>

        <aside className="hidden lg:block w-96 px-6 py-4">
          <div className="sticky top-0 space-y-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Who to follow</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {suggestedCharacters.map((character) => (
                  <CharacterSuggestion
                    key={character.id}
                    character={character}
                    onFollow={() => handleFollow(character.id)}
                    isFollowing={followedCharacters.has(character.id)}
                  />
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Hamlet Creative Writing Task</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>CEO: Hansen Zou</p>
              </CardContent>
            </Card>
          </div>
        </aside>
      </div>
    </div>
  );
}
