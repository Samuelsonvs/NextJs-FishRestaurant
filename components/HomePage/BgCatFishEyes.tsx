import Image from 'next/image';
import { Transition } from '@headlessui/react';

import BgCat from "@/public/images/content/catbg.jpg";

export default function BgCatFishEyes() {
    return (
        <div className="mt-10 p-5 max-w-5xl mx-auto">
            <div className="flex justify-between flex-col md:flex-row items-center mt-20">
                <div className="flex-shrink-0 animate-bounce">
                    <Image src={BgCat} alt="shark-menu" placeholder="blur" width={366} height={372} />
                </div>
                <p className="px-5 text-3xl font-mono leading-10 lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 via-green-500 to-red-600">
                    Gözü balıktan başkasını görmeyenlerin asla değişmeyecek lezzet noktası.
                </p>
            </div>
        </div>
    )
}
