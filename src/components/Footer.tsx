export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} ArdiLink. All rights reserved.
        </p>
      </div>
    </footer>
  );
}