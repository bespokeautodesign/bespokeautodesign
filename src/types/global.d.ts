// Global type declarations for analytics and third-party services

interface Window {
  gtag?: (
    command: 'config' | 'event' | 'exception',
    targetId: string,
    config?: Record<string, any>
  ) => void;
  clarity?: (command: string, ...args: any[]) => void;
}

declare global {
  function gtag(
    command: 'config' | 'event' | 'exception',
    targetId: string,
    config?: Record<string, any>
  ): void;
}