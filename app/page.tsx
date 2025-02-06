import qrPic from '@/public/image-qr-code.png';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center overflow-x-hidden font-[family-name:var(--font-outfit-mono)] bg-slate-300">
      <main className="flex justify-center">
        <div className="bg-white w-[320px] h-[499px] rounded-[20px] px-4 shadow-xl shadow-black/5">
          <Image
            src={qrPic}
            width={288}
            height={288}
            alt="Qr Image"
            className="rounded-[10px] mt-4"
          />
          <h1 className="text-slate-900 text-[22px] font-bold leading-[120%] tracking-normal text-center mt-6">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-slate-500 text-[15px] leading-[140%] tracking-[0.2px] text-center mt-4">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </main>
    </div>
  );
}
