type LayoutProps = {
  children: React.ReactNode;
  error?: string | null;
  notFound?: boolean;
  empty?: boolean;
  isLoading?: boolean;
};
export const Layout = ({ children, error, empty, isLoading }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8" role="main">
      <div className="max-w-6xl mx-auto grid grid-cols-4 lg:grid-cols-8 xl:grid-cols-12">
        {error && (
          <div className="text-center bg-red-500 text-white p-4 col-span-12">
            Erreur : {error}
          </div>
        )}

        {!isLoading && empty && (
          <div className="text-center bg-gray-500 text-white p-4 col-span-12">
            Pas de données
          </div>
        )}

        {error || empty ? null : children}
      </div>
    </div>
  );
};
