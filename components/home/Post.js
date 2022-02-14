import Image from "next/image"

const Post = () => {
    return (
        <div className="rounded-lg overflow-hidden space-y-2 bg-snow shadow max-w-sm">
            <div className="relative h-52 w-full">
                <Image
                    layout="fill"
                    src="https://images.pexels.com/photos/997611/pexels-photo-997611.jpeg"
                    alt="post_img"
                    objectFit="cover"
                />
                <div class="absolute top-3 right-3 px-2.5 pb-2.5 pt-1 inline-block bg-white rounded-b-2xl border-t-4 border-dolphin">
                    <p class="text-lg font-bold">22</p>
                    <p class="text-xs uppercase text-gray-500">Feb</p>
                </div>
            </div>
            <div className="space-y-2.5 border-b-2 border-x-2">
                <div className="ml-2">
                    <span className="mx-2 py-0.5 px-0.5 border-b-2 border-dolphin">Lorem</span>
                </div>
                <div className="space-y-2 pl-2.5 pr-4">
                    <h2 className="text-xl text-center font-semibold tracking-wide">Is Remote Work working?</h2>
                    <p className="leading-5 text-[#484848]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere illum quo, itaque autem voluptas ea! Earum eos deserunt eligendi, suscipit odio, obcaecati veritatis aut, ad corporis distinctio ducimus assumenda incidunt...</p>
                </div>
                <div className="flex space-x-4 p-2.5 pt-5">
                    <div className="relative rounded-full w-12 h-12">
                        <Image
                            layout="fill"
                            src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg"
                            alt="avatar"
                            objectFit="cover"
                            className="rounded-full"
                        />
                    </div>
                    <div className="flex flex-col items-start justify-center leading-[22px] text-[#484848] font-medium">
                        <span className="text-gray-900">Un Carissimo Amico</span>
                        <span>Feb 12, 2022</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
