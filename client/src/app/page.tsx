import Timeline from "./timeline/page";
import { ThemeSwitcher } from './components/ThemeSwitcher';

export default function Home() {
    return (
        <main>
            <ThemeSwitcher />
            <Timeline />
        </main>
    );
}
