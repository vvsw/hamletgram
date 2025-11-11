import { PostCard } from "@/components/PostCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { characters, posts } from "@/lib/hamletData";
import { Calendar } from "lucide-react";

export default function Profile() {
  const hamlet = characters.find((c) => c.id === "hamlet")!;
  const hamletPosts = posts.filter((p) => p.characterId === "hamlet");

  return (
    <div className="flex justify-center min-h-screen">
      <div className="w-full max-w-2xl border-x border-border">
        <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border-border p-4">
          <h1 className="text-xl font-bold" data-testid="text-profile-title">
            Profile
          </h1>
        </div>

        <div className="relative">
          <div className="h-48 bg-gradient-to-r from-primary/20 to-primary/10" data-testid="profile-banner" />
          
          <div className="px-4">
            <div className="flex justify-between items-start -mt-16 mb-4">
              <Avatar className="h-32 w-32 border-4 border-background" data-testid="avatar-profile">
                <AvatarImage src={hamlet.avatar} alt={hamlet.name} />
                <AvatarFallback>{hamlet.name[0]}</AvatarFallback>
              </Avatar>
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-1">
                <h2 className="text-2xl font-bold" data-testid="text-profile-name">
                  {hamlet.name}
                </h2>
                {hamlet.verified && (
                  <svg
                    className="h-6 w-6 text-primary"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    data-testid="icon-verified"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </div>
              <p className="text-muted-foreground" data-testid="text-profile-username">
                {hamlet.username}
              </p>
            </div>

            <p className="mb-4 leading-relaxed" data-testid="text-profile-bio">
              {hamlet.bio}
            </p>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span data-testid="text-joined">Joined January 2024</span>
              </div>
            </div>

            <div className="flex gap-4 text-sm mb-4">
              <div>
                <span className="font-bold text-foreground" data-testid="text-following-count">{hamlet.following || 0}</span>
                <span className="text-muted-foreground ml-1">Following</span>
              </div>
              <div>
                <span className="font-bold text-foreground" data-testid="text-followers-count">{hamlet.followers || 0}</span>
                <span className="text-muted-foreground ml-1">Followers</span>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="w-full justify-start rounded-none border-b border-border bg-transparent p-0 h-auto">
            <TabsTrigger
              value="posts"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4"
              data-testid="tab-posts"
            >
              Posts
            </TabsTrigger>
            <TabsTrigger
              value="replies"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4"
              data-testid="tab-replies"
            >
              Replies
            </TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="mt-0">
            {hamletPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </TabsContent>

          <TabsContent value="replies" className="mt-0">
            <div className="p-8 text-center text-muted-foreground" data-testid="text-no-replies">
              No replies yet
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
