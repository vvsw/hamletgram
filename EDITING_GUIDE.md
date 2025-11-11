# Easy Editing Guide

## How to Edit Posts

### All Posts (from all characters)
**File:** `client/src/lib/hamletData.ts`
- Look for the section with the comment: `EDIT POSTS HERE - All posts from all characters`
- Posts from Hamlet have `characterId: "hamlet"` (posts id: 1, 4, 8, 10, 12)
- Other characters' posts are in the same array

### What You Can Edit in Each Post:
```typescript
{
  id: "1",                    // Unique identifier
  characterId: "hamlet",      // Who posted it
  content: "Your text here",  // The actual post content
  timestamp: "3h",            // When it was posted (e.g., "2h", "5h", "1d")
  likes: 23,                  // Number of likes (1-25 for palace residents)
  replies: 4,                 // Number of replies (1-5 max)
}
```

### Timestamp Guide Based on Hamlet's Acts:
- **Act 1 quotes** → "5h" (5 hours ago)
- **Act 2 quotes** → "4h" (4 hours ago)
- **Act 3 quotes** → "3h" (3 hours ago)
- **Act 4 quotes** → "2h" (2 hours ago)
- **Act 5 quotes** → "1h" (1 hour ago)

### Editing Comments
**File:** `client/src/lib/hamletData.ts`
- Look for the section: `EDIT COMMENTS HERE - Organized by post`
- Comments are grouped by post with clear headers showing which post they belong to
- Each comment has:
  - `postId`: Which post this comment is on
  - `characterId`: Who made the comment
  - `content`: The comment text
  - `timestamp`: When it was posted
- Example: `// POST 1 - Hamlet's "To be or not to be" (2 comments)`

### Current Constraints:
- **Likes:** Between 1-25 (total characters in the palace)
- **Replies:** Between 1-2 (capped at 2)
- **Hamlet's followers:** 2
- **Hamlet's following:** 25

## Quick Access
1. Open `client/src/lib/hamletData.ts`
2. Scroll to line ~80 where you'll see the big comment block
3. Edit any post directly
4. Save the file and the app will automatically reload
