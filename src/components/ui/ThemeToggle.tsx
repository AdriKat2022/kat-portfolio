import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useTranslation } from 'react-i18next';

type Theme = 'light' | 'dark';

// To keep track the theme selection of the user.
const THEME_STORAGE_KEY = 'selected-theme';

function getSystemTheme(): Theme {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getStoredTheme(): Theme | null {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme === "light" || storedTheme === "dark") return storedTheme as Theme;
    return null;
}

function applyThemeToDocument(theme: Theme): void {
    if (theme === "dark") {
        document.documentElement.classList.add('dark');
    }
    else {
        document.documentElement.classList.remove('dark');
    }
}

export function ThemeToggle() {
    const { t } = useTranslation();

    // Initialize -> light by default, 
    const [theme, setTheme] = useState<Theme>(() =>
        (typeof window === 'undefined') ? 'light' : getStoredTheme() ?? getSystemTheme()
    );

    useEffect(() => {
        applyThemeToDocument(theme);
    }, [theme]);

    // const hasStoredPreference = useRef(getStoredTheme() !== null);

    // The following observes if the system preference changes. And if it does, update the theme.
    //   useEffect(() => {
    //     const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    //     const handleSystemThemeChange = (event: MediaQueryListEvent) => {
    //       if (hasStoredPreference.current) {
    //         return;
    //       }

    //       const nextTheme: Theme = event.matches ? 'dark' : 'light';
    //       setTheme(nextTheme);
    //     };

    //     if (typeof mediaQuery.addEventListener === 'function') {
    //       mediaQuery.addEventListener('change', handleSystemThemeChange);
    //       return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
    //     }

    //     mediaQuery.addListener(handleSystemThemeChange);
    //     return () => mediaQuery.removeListener(handleSystemThemeChange);
    //   }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem(THEME_STORAGE_KEY, newTheme);
        // hasStoredPreference.current = true;
    };

    const isDark = theme === 'dark';
    const label = isDark ? t('nav.switch-to-light-mode') : t('nav.switch-to-dark-mode');

    return (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={label}
          title={label}
        >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            <span className="sr-only">{label}</span>
        </Button>
    );
}
