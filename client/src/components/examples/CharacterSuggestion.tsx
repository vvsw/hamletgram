import { CharacterSuggestion } from '../CharacterSuggestion';
import { characters } from '@/lib/hamletData';

export default function CharacterSuggestionExample() {
  return (
    <div className="w-80">
      <CharacterSuggestion 
        character={characters[1]} 
        onFollow={() => console.log('Follow clicked')} 
      />
    </div>
  );
}
