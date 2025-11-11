# Design Guidelines: Hamlet Twitter-Like Social Media Interface

## Design Approach: Reference-Based (Twitter/X Inspiration)

This interface directly emulates Twitter's familiar layout and interaction patterns to create an intuitive storytelling platform for the Hamlet narrative. The design prioritizes readability, character distinction, and narrative flow through social media conventions.

## Layout System

**Three-Column Desktop Layout:**
- Left Sidebar (280px): Navigation menu with Home, Messages, Profile icons
- Center Feed (600px max-width): Main content area for posts
- Right Sidebar (350px): Character suggestions, trending topics from the play

**Mobile/Tablet:** Stack to single column, bottom navigation bar

**Container Strategy:**
- Use consistent max-width containers: Feed content max-w-2xl, sidebars fixed width
- Spacing primitives: Tailwind units of 2, 3, 4, 6, and 8 (p-4, mb-6, gap-3, etc.)

## Typography Hierarchy

**Font Stack:**
- Primary: System font stack (-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto)
- Monospace: For usernames and timestamps

**Type Scale:**
- Character Names: text-base font-bold
- Usernames/Handles: text-sm 
- Post Content: text-base leading-relaxed
- Timestamps: text-xs
- Navigation: text-xl

## Core Components

### Navigation Sidebar
- Vertical list of icon + label navigation items
- Large "Compose Post" button at bottom
- User profile summary at footer (Hamlet's avatar + name)
- Items: Home, Messages, Profile, Characters

### Feed Post Card
- Circular avatar (48px) on left
- Character name + @username + timestamp in header
- Post text content with generous line-height (leading-relaxed)
- Interaction bar: Like count, Reply count (no actual interaction needed)
- Subtle separator between posts
- Each post: p-4, border-b structure

### Character Profile Header
- Large banner area (200px height)
- Circular profile image (128px) overlapping banner
- Character name (text-2xl font-bold)
- @username (text-base)
- Bio/description (max-w-md)
- Following/Followers counts (text-sm)
- Tabs for Posts/Replies below

### Direct Messages Panel
- Conversation list on left (320px)
- Each conversation: avatar + name + last message preview
- Message thread on right showing chat bubbles
- Sender messages aligned right
- Receiver (Hamlet) messages aligned left
- Message composition box at bottom
- Timestamps above message groups

### Character Suggestion Cards (Right Sidebar)
- Small circular avatars (40px)
- Character name + username
- Brief description from play context
- "View Profile" link

## Images

**Profile Pictures:**
You'll need circular profile images for:
- Hamlet (main perspective)
- Ophelia
- Claudius
- Gertrude
- Horatio
- Polonius
- Laertes
- Ghost of Hamlet's Father

Place 48px avatars in feed posts, 40px in suggestions, 128px in profile headers.

**No Hero Section:** This is an application interface, not a marketing page.

## Spacing & Rhythm

**Vertical Spacing:**
- Between posts: Direct adjacency with border separators
- Section padding: py-4 for cards, py-6 for main sections
- Internal component spacing: gap-3 or gap-4 in flex/grid layouts

**Horizontal Spacing:**
- Feed margins: mx-auto with max-width constraints
- Component padding: px-4 consistently
- Avatar-to-content gap: gap-3

## Interaction Patterns

**Post Composition:**
- Textarea expanding as user types
- Character count indicator
- Simple "Post" button
- Tagged character mentions (@Ophelia, @Horatio)

**Feed Behavior:**
- Chronological timeline showing story progression
- Posts from multiple characters showing different perspectives
- Replies threaded beneath original posts

**Navigation:**
- Click character names to view their profiles
- Click Messages to switch to DM view
- Home returns to main feed

## Accessibility

- Maintain proper heading hierarchy (h1 for page title, h2 for sections)
- Ensure text contrast meets WCAG standards
- Use semantic HTML for posts (article elements)
- Clickable areas minimum 44px touch target
- Screen reader labels for icon-only buttons

## Content Strategy

**Feed Posts Should:**
- Progress chronologically through Hamlet's story
- Include character reactions and responses
- Show internal monologue as status updates
- Reference key plot points ("To be or not to be..." as a post)
- Display character relationships through interactions

**DM Conversations Should:**
- Show private exchanges (Hamlet & Horatio plotting)
- Reveal character motivations
- Include dramatic moments from the play

This design creates an immediately recognizable Twitter-like experience that requires no learning curve while serving as a creative narrative vehicle for the Hamlet story.