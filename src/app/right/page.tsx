
import Image from "next/image";

export default function Right() {
    return (
        <div className="grid items-center justify-items-center p-4 md:p-8 pb-20 sm:p-20 font-[family-name:var(--font-noto-sans)]">
            <section className="intro-copy-container flex flex-col items-center gap-4">
            <h1 className="intro-subhead text-indigo-700 text-center font-semibold">High Quality Images</h1>
            <h2 className="intro-heading text-center text-3xl md:text-5xl font-semibold">For Designers, By Designers</h2>
            <p className="intro-copy text-center max-w-[52ch] text-neutral-600">Unleash boundless creativity with a large repository of images optimized for designers</p>
            </section>
            <section className="2-col-feature-section flex flex-col lg:flex-row-reverse ">
            <div className="feature-list pt-16 md:px-4 lg:w-1/2">
                <div className="icon-row pb-16 flex flex-row gap-2">
                <div className="icon-wrapper min-w-[48px]">
                    <Image
                    src={'/HD-Icon.svg'}
                    alt=""
                    width={50}
                    height={50}
                    />
                </div>
                <div className="icon-copy-wrapper">
                    <h3 className="font-semibold">5K resolution support</h3>
                    <p>All images boast a minimum resolution of 5K, ensuring crisp, crystal-clear quality.</p>
                </div>
                </div>
                <div className="icon-row pb-16 flex flex-row gap-2">
                <div className="icon-wrapper min-w-[48px]">
                    <Image
                    src={'/water-icon.svg'}
                    alt=""
                    width={50}
                    height={50}
                    />
                </div>
                <div className="icon-copy-wrapper">
                <h3 className="font-semibold">From water to glass</h3>
                    <p>We offer a wide array of abstractions, ranging from water to glass, 
                        and encompassing various styles including 3D and vector.</p>
                </div>
                </div>
                <div className="icon-row pb-16 flex flex-row gap-2">
                <div className="icon-wrapper min-w-[48px]">
                    <Image
                    src={'/orientation-icon.svg'}
                    alt=""
                    width={50}
                    height={50}
                    />
                </div>
                <div className="icon-copy-wrapper">
                <h3 className="font-semibold">Portrait or landscape</h3>
                    <p>Effortlessly adapt your images for any platform - 
                        whether it's a stunning wallpaper or captivating Instagram reels and stories.</p>
                </div>
                </div>
            </div>
            <div className="feature-img lg:w-1/2 relative min-h-[180px] flex items-center">
                <Image
                src={'/unsplash_rAtzDB6hWrU.jpg'}
                width={480}
                height={180}
                alt=""
                className="cover rounded-md w-full min-h-[180px]"
                />
            </div>
            </section>
        </div>
    );
}