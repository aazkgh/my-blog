import Window from '@/components/ui/Window/Window';
import { profile } from '@/data/profile';

import InterestFolders from './InterestFolders';
import * as styles from './ProfileWindow.css';

export default function ProfileWindow() {
  return (
    <Window title="This is ME">
      <div className={styles.profile}>
        <h2 className={styles.name}>{profile.name}</h2>
        <ul className={styles.bio}>
          {profile.bio.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <InterestFolders interests={profile.interests} />
      </div>
    </Window>
  );
}
