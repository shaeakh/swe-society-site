"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import Link from "next/link";
import { cn } from "@/utils/cn";

// export function NavbarDemo() {
//   return (
//     <div className="relative w-full flex items-center justify-center">
//       <Navbar className="top-2" />
//       <p className="text-black dark:text-white">
//         The Navbar will show on top of the page
//       </p>
//     </div>
//   );
// }

// function Navbar({ className }: { className?: string }) {
//   const [active, setActive] = useState<string | null>(null);
//   return (
//     <div
//       className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
//     >
//       <Menu setActive={setActive}>
//         <MenuItem setActive={setActive} active={active} item="Services">
//           <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/web-dev">Web Development</HoveredLink>
//             <HoveredLink href="/interface-design">Interface Design</HoveredLink>
//             <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
//             <HoveredLink href="/branding">Branding</HoveredLink>
//           </div>
//         </MenuItem>
//         <MenuItem setActive={setActive} active={active} item="Products">
//           <div className="  text-sm grid grid-cols-2 gap-10 p-4">
//             <ProductItem
//               title="Algochurn"
//               href="https://algochurn.com"
              
//               description="Prepare for tech interviews like never before."
//             />
//             <ProductItem
//               title="Tailwind Master Kit"
//               href="https://tailwindmasterkit.com"
//               description="Production ready Tailwind css components for your next project"
//             />
//             <ProductItem
//               title="Moonbeam"
//               href="https://gomoonbeam.com"
//               description="Never write from scratch again. Go from idea to blog in minutes."
//             />
//             <ProductItem
//               title="Rogue"
//               href="https://userogue.com"
//               description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
//             />
//           </div>
//         </MenuItem>
//         <MenuItem setActive={setActive} active={active} item="Pricing">
//           <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/hobby">Hobby</HoveredLink>
//             <HoveredLink href="/individual">Individual</HoveredLink>
//             <HoveredLink href="/team">Team</HoveredLink>
//             <HoveredLink href="/enterprise">Enterprise</HoveredLink>
//           </div>
//         </MenuItem>
//       </Menu>
//     </div>
//   );
// }
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
     <Menu setActive={setActive}>
      <Link href={'/'}>
      <MenuItem setActive={setActive} active={active} item="Home">
          

      </MenuItem>
      </Link>
      <Link href={'/event'}>
      <MenuItem setActive={setActive} active={active} item="Event">

         
      </MenuItem>
      </Link>
      <Link href={'/notice'}>
      <MenuItem setActive={setActive} active={active} item="Notice">
          

          </MenuItem>
      </Link>
      <Link href={'/blog'}>
      <MenuItem setActive={setActive} active={active} item="Blog">
          

          </MenuItem>
      </Link>
      <Link href={'/achievement'}>
      <MenuItem setActive={setActive} active={active} item="Achievement">
          

          </MenuItem>
      </Link>
      <MenuItem setActive={setActive} active={active} item="Soceity">
           <div className='flex flex-col space-y-4'>
      <HoveredLink href="/exectuive-committe">Executive Committe</HoveredLink>
      <HoveredLink href="/members">Members</HoveredLink>
      <HoveredLink href="/History">History</HoveredLink>
      <HoveredLink href="/gallery">Gallery</HoveredLink>
      <HoveredLink href="/contact">Contact</HoveredLink>
             
      </div>

          </MenuItem>
      
      




    </Menu>
  </div>
)
}

export default Navbar
