import type {
  Character,
  Post,
  Message,
  Conversation,
  Comment,
} from "@shared/schema";

// To add your own profile pictures:
// 1. Add image files to the folder: attached_assets/profile-pictures/
// 2. Name them: hamlet.png, ophelia.png, claudius.png, gertrude.png, horatio.png, polonius.png, laertes.png, ghost.png
// 3. The images will automatically appear in the app!

export const characters: Character[] = [
  {
    id: "hamlet",
    name: "Hamlet",
    username: "@PrinceHamlet",
    avatar: "/attached_assets/profile-pictures/hamlet.png",
    bio: "I'm reading this play and the protagonist seems a lot like me, probably just a coincidence",
    verified: true,
    followers: 2,
    following: 25,
  },
  {
    id: "ophelia",
    name: "Ophelia",
    username: "@FlowerGirl",
    avatar: "/attached_assets/profile-pictures/ophelia.png",
    bio: "The prettiest in Denmark, Rosemary flowers are my favorite",
    verified: true,
  },
  {
    id: "claudius",
    name: "King Claudius",
    username: "@UncleClaudius",
    avatar: "/attached_assets/profile-pictures/claudius.png",
    bio: "The new King of Denmark. OFFICIALLY!",
    verified: true,
  },
  {
    id: "gertrude",
    name: "Queen Gertrude",
    username: "@QueenGertrude",
    avatar: "/attached_assets/profile-pictures/gertrude.png",
    bio: "Happily married to Claudius, Don't ask me what happened to my old husband",
    verified: true,
  },
  {
    id: "horatio",
    name: "Horatio",
    username: "@LoyalHoratio",
    avatar: "/attached_assets/profile-pictures/horatio.png",
    bio: "Can't be in the royal palace for one day without drama 🤦‍♂️",
    verified: false,
  },
  {
    id: "polonius",
    name: "Polonius",
    username: "@DenmarksWittiest",
    avatar: "/attached_assets/profile-pictures/polonius.png",
    bio: "Father of 2, Comedian, King Claudius' Advisor, What else is there to say?",
    verified: true,
  },
  {
    id: "laertes",
    name: "Laertes",
    username: "@LaertesOfDenmark",
    avatar: "/attached_assets/profile-pictures/laertes.png",
    bio: "The best fencer in Denmark",
    verified: false,
  },
  {
    id: "ghost",
    name: "Old Hamlet's Ghost",
    username: "@RealKingOfDenmark",
    avatar: "/attached_assets/profile-pictures/ghost.png",
    bio: "I don't know why I made a social media account",
    verified: true,
  },
];

// ==========================================
// EDIT POSTS HERE - All posts from all characters
// ==========================================
export const posts: Post[] = [
  {
    id: "1",
    characterId: "hamlet",
    content:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer the slings and arrows of outrageous fortune, or to take arms against a sea of troubles...",
    timestamp: "3h",
    likes: 23,
    replies: 2,
  },
  {
    id: "2",
    characterId: "ophelia",
    content:
      "There's rosemary, that's for remembrance; pray you, love, remember. And there is pansies, that's for thoughts.",
    timestamp: "2h",
    likes: 18,
    replies: 1,
  },
  {
    id: "3",
    characterId: "claudius",
    content:
      "The coronation ceremony was a magnificent event. Grateful to serve Denmark as your King. Long live Denmark! 👑",
    timestamp: "5h",
    likes: 25,
    replies: 2,
  },
  {
    id: "4",
    characterId: "hamlet",
    content: "Seems, madam? Nay, it is. I know not 'seems.'",
    timestamp: "5h",
    likes: 15,
    replies: 1,
  },
  {
    id: "5",
    characterId: "horatio",
    content:
      "Hamlet's always been my friend but hes not acting like himself right now.",
    timestamp: "5h",
    likes: 21,
    replies: 2,
  },
  {
    id: "6",
    characterId: "polonius",
    content:
      "Claudius don't you agree I'm the funniest and smartest in Denmark 🤣",
    timestamp: "5h",
    likes: 19,
    replies: 1,
  },
  {
    id: "7",
    characterId: "gertrude",
    content: "Hamlet my personal relationships are NONE of your business!",
    timestamp: "5h",
    likes: 12,
    replies: 2,
  },
  {
    id: "8",
    characterId: "hamlet",
    content: "Sooo... my mom just married my uncle",
    timestamp: "5h",
    likes: 5,
    replies: 1,
  },
  {
    id: "9",
    characterId: "ghost",
    content:
      "Hamlet what are you doing, you're supposed to avenge my death by killing Claudi- I mean the snake that bit me. Yes ban all snakes 😅",
    timestamp: "5h",
    likes: 2,
    replies: 1,
  },
  {
    id: "10",
    characterId: "hamlet",
    content:
      "Something is rotten in my house and his name rhymes with Blaudius 😂",
    timestamp: "5h",
    likes: 3,
    replies: 2,
  },
  {
    id: "11",
    characterId: "laertes",
    content: "Going to France for studies, gonna miss u! @FlowerGirl",
    timestamp: "5h",
    likes: 14,
    replies: 1,
  },
  {
    id: "12",
    characterId: "hamlet",
    content:
      "Did anyone else see this ghost roaming around the palace lately? He just told me my father was assassinated by Claudius",
    timestamp: "4h",
    likes: 2,
    replies: 2,
  },
];
// ==========================================
// Hamlet's posts are: id 1, 4, 8, 10, 12
// ==========================================

// ==========================================
// EDIT COMMENTS HERE - Organized by post
// ==========================================
export const comments: Comment[] = [
  // POST 1 - Hamlet's "To be or not to be" (2 comments)
  {
    id: "c1",
    postId: "1",
    characterId: "horatio",
    content: "My lord, these are profound thoughts indeed.",
    timestamp: "2h",
  },
  {
    id: "c2",
    postId: "1",
    characterId: "ophelia",
    content: "Such melancholy weighs upon your words...",
    timestamp: "2h",
  },

  // POST 2 - Ophelia's rosemary post (1 comment)
  {
    id: "c3",
    postId: "2",
    characterId: "hamlet",
    content: "Sweet Ophelia, your words are as flowers to my soul.",
    timestamp: "2h",
  },

  // POST 3 - Claudius's coronation (2 comments)
  {
    id: "c4",
    postId: "3",
    characterId: "polonius",
    content: "Long live the King! May Denmark prosper under your reign.",
    timestamp: "4h",
  },
  {
    id: "c5",
    postId: "3",
    characterId: "hamlet",
    content: "Indeed, uncle. Long live the King.",
    timestamp: "4h",
  },

  // POST 4 - Hamlet's "Seems, madam" (1 comment)
  {
    id: "c6",
    postId: "4",
    characterId: "gertrude",
    content: "My dear son, I wish you would find peace.",
    timestamp: "5h",
  },

  // POST 5 - Horatio's "More things in heaven and earth" (2 comments)
  {
    id: "c7",
    postId: "5",
    characterId: "gertrude",
    content: "I don't know what to do.",
    timestamp: "4h",
  },
  {
    id: "c8",
    postId: "5",
    characterId: "ophelia",
    content:
      "Maybe if he RESPONDED to my letter and communicated more he would be fine. I'm also hurt you know!",
    timestamp: "4h",
  },

  // POST 6 - Polonius's "To thine own self be true" (1 comment)
  {
    id: "c9",
    postId: "6",
    characterId: "claudius",
    content:
      "Your advice is useless, I know Hamlet's insanity is not lovesickness I mean there's no way you can't see through his trick",
    timestamp: "5h",
  },

  // POST 7 - Gertrude's "Cast thy nighted color off" (2 comments)
  {
    id: "c10",
    postId: "7",
    characterId: "hamlet",
    content: "YOU MARRIED MY UNCLE!!!",
    timestamp: "4h",
  },
  {
    id: "c11",
    postId: "7",
    characterId: "claudius",
    content:
      "Hamlet RELAX, you sound insane right now. I mean everyone grieves but you're dragging it far too long.",
    timestamp: "4h",
  },

  // POST 8 - Hamlet's "Frailty, thy name is woman" (1 comment)
  {
    id: "c12",
    postId: "8",
    characterId: "horatio",
    content:
      "It does sound really bad on paper, but maybe she did it to keep the family intact... 😅 ",
    timestamp: "5h",
  },

  // POST 9 - Ghost's "Claudius" (2 comments)
  {
    id: "c13",
    postId: "9",
    characterId: "hamlet",
    content:
      "I have to find out he's guilty first, I have to prove it, I have to..",
    timestamp: "4h",
  },

  // POST 10 - Hamlet's "Something is rotten" (2 comments)
  {
    id: "c15",
    postId: "10",
    characterId: "horatio",
    content: "Idk what you mean but good one 🤣",
    timestamp: "5h",
  },
  {
    id: "c16",
    postId: "10",
    characterId: "claudius",
    content: "Hamlet, stop babbling nonsense.",
    timestamp: "4h",
  },

  // POST 11 - Laertes's France post (1 comment)
  {
    id: "c17",
    postId: "11",
    characterId: "ophelia",
    content:
      "Safe travels! And if I stop sending letters it means I must've died LOL!",
    timestamp: "5h",
  },

  // POST 12 - Hamlet's "Ghost sighting" (2 comments)
  {
    id: "c18",
    postId: "12",
    characterId: "horatio",
    content: "Scary...",
    timestamp: "3h",
  },
  {
    id: "c19",
    postId: "12",
    characterId: "ghost",
    content: "Quiet down.",
    timestamp: "3h",
  },
];
// ==========================================

export function getCharacterById(id: string): Character | undefined {
  return characters.find((c) => c.id === id);
}

export function getPostsByCharacter(characterId: string): Post[] {
  return posts.filter((p) => p.characterId === characterId);
}

export function getCommentsByPostId(postId: string): Comment[] {
  return comments.filter((c) => c.postId === postId);
}
