'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect } from 'react'
import luxy from 'luxy.js'
import ShiroNyanImage from "../../public/images/shiro_nyan.png"
import KuroNyanImage from "../../public/images/kuro_nyan.png"
import ToraNyanImage from "../../public/images/tora_nyan.png"
import { RocknRoll_One } from 'next/font/google' 

const TitleFont = RocknRoll_One({
    weight: '400',
    preload: false
})
const Page = () => {
    useEffect(() => {
        luxy.init();
    }, [])
    return <div className="container w-screen">
        <main id="luxy" className="h-max w-screen place-content-center bg-gradient-to-b from-cyan-400 via-yellow-200 to-yellow-200">
            <div className="luxy-el mt-60 py-10" data-horizontal="1" data-speed-x="-150" data-speed-y="60">
                <h1 className="w-screen inline-block bg-red-700 p-8 my-10 rotate-[-12deg] text-7xl text-right">
                    <span className={TitleFont.className}>Luxy.jsを使ってみるテストだよ!</span>
                </h1>
            </div>
            <div className="luxy-el py-10" data-horizontal="1" data-speed-x="-150" data-speed-y="60" data-offset="-115">
                <p className="w-5/6 inline-block bg-amber-600 p-8 my-10 rotate-[-11deg] text-6xl text-right">
                    <span className={TitleFont.className}>Let's scroll down!</span>
                </p>
            </div>
            <div className="flex mt-52">
                <Image src={KuroNyanImage} alt="キメキメの黒猫" className="luxy-el flex-none" data-horizontal="1" data-speed-x="55" data-speed-y="-5" data-offset="-10" width="512" height="512" />
                <Image src={ToraNyanImage} alt="しゃきっとしたトラ猫" className="luxy-el flex-none"  data-speed-y="-10" data-offset="0" width="512" height="512" />
                <Image src={ShiroNyanImage} alt="楽しそうな白猫" className="luxy-el flex-none" data-horizontal="1" data-speed-x="-55" data-speed-y="-5" data-offset="10" width="512" height="512" />
            </div>
            <div className="text-center p-4 inline-block align-bottom w-screen">
                <Link href="/" className="underline text-gray-800">Homeへ戻る</Link>
            </div>
        </main>
    </div>
}

export default Page;