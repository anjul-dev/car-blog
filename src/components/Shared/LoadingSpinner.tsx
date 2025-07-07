export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background/80 backdrop-blur-sm px-4">
      <div className="text-center">
        <div className="mx-auto mb-6 h-16 w-16 animate-spin rounded-full border-4 border-t-transparent border-r-transparent border-primary" />
        <p className="text-lg text-muted-foreground animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
