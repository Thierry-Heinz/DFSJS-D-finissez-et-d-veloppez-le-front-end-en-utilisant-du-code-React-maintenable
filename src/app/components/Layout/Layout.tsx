type LayoutProps = {
  children: React.ReactNode;
};
export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8" role="main">
      <div className="max-w-6xl mx-auto grid grid-cols-4 lg:grid-cols-8 xl:grid-cols-12">
        {children}
      </div>
    </div>
  );
};
