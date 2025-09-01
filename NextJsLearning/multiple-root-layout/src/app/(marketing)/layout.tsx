
import "../globals.css";

export default function MarketingLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="h-10 bg-slate-500 flex justify-center items-center">
              <p>CodeCafe24</p>
        </header>
        {children}

           <header className="h-10 bg-black text-white flex justify-center items-center">
              <p>contact this no 8252250400</p>
        </header>
      </body>
    </html>
  );
}
