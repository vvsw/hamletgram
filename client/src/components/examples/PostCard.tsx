import { PostCard } from '../PostCard';
import { posts } from '@/lib/hamletData';

export default function PostCardExample() {
  return (
    <div className="max-w-2xl">
      <PostCard post={posts[0]} />
    </div>
  );
}
