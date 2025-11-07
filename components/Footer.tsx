import { Instagram, Youtube } from "lucide-react";
export default function Footer() {
  return (
    <div className="bg-black text-white w-full py-10">
      <div className="max-w-4xl mx-auto px-4 flex justify-between">
        <div className="flex flex-col">
          <p className="font-bold uppercase text-sm">Samuele Spriano</p>
          <p className="text-xs text-gray-200">© 2044 All rights reserved.</p>
        </div>
        <div className="flex gap-2">
          <Instagram />
          <Youtube />
        </div>
      </div>
    </div>
  );
}
