'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect } from 'react'
import luxy from 'luxy.js'
import ShiroNyanImage from "../../public/images/shiro_nyan.png"
import KuroNyanImage from "../../public/images/kuro_nyan.png"
import ToraNyanImage from "../../public/images/tora_nyan.png"

const Page = () => {
    useEffect(() => {
        console.log('useEffectしたよ!  ');
        luxy.init();
    }, [])
    return <div className="container w-screen">
        <main id="luxy" className="h-max w-screen place-content-center bg-gradient-to-b from-cyan-50 to-yellow-500">
            <div>
                <Image src={ShiroNyanImage} alt="楽しそうな白猫" className="luxy-el mx-auto" data-horizontal="1" data-speed-x="-110" data-speed-y="-10" data-offset="1024" width="512" height="512" />
                <Image src={KuroNyanImage} alt="キメキメの黒猫" className="luxy-el mx-auto" data-horizontal="1" data-speed-x="115" data-speed-y="120" data-offset="-1024" width="512" height="512" />
                <Image src={ToraNyanImage} alt="しゃきっとしたトラ猫" className="luxy-el mx-auto"  data-speed-y="-70" data-offset="500" width="512" height="512" />
            </div>
            <Link href="/" className="underline">Homeへ戻る</Link>
        </main>
    </div>
}

export default Page;