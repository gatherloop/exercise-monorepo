import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme';
import { AppProps } from 'next/app';
import React from 'react';
import { TamaguiProvider } from 'tamagui';
import { appConfig } from '@course-explorer-monorepo/ui';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function CustomApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useRootTheme();

  const contents = React.useMemo(
    () => <Component {...pageProps} />,
    [Component, pageProps]
  );

  return (
    <NextThemeProvider onChangeTheme={setTheme}>
      <TamaguiProvider
        disableInjectCSS
        disableRootThemeClass
        defaultTheme={theme}
        config={appConfig}
      >
        <QueryClientProvider client={queryClient}>
          {contents}
        </QueryClientProvider>
      </TamaguiProvider>
    </NextThemeProvider>
  );
}

export default CustomApp;
