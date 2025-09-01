
import "../globals.css";
import Link from "next/link";



const navLink=[
  {name:'Register',href:'/register'},
  {name:'Login',href:'/login'},
]
export default function AuthLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        
         <div className="flex justify-center items-center gap-6">
           {
          navLink.map((item,index)=>{
            return (
              <Link key={index} href={item.href}>{item.name}</Link>
            )
          })
        }
         </div>

        {children}

           <header className="h-10 bg-black text-white flex justify-center items-center">
              <p>contact this no 8252250400</p>
        </header>
      </body>
    </html>
  );
}
