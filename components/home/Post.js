import Image from "next/image"
import moment from "moment"
import Link from "next/link"

const Post = ({ slug, title, category, description, image, createdAt }) => {

    const date = {
        badge: moment(createdAt).format('DD MMM'),
        bottom: moment(createdAt).format('MMM DD, YYYY')
    }

    return (
        <Link href={`/posts/${slug}`} passHref>
            <div className="rounded-lg overflow-hidden space-y-2 bg-snow shadow max-w-sm w-full">
                <div className="relative h-52 w-full">
                    <Image
                        layout="fill"
                        src={image}
                        alt="post_img"
                        objectFit="cover"
                    />
                    <div className="absolute top-3 right-3 px-2.5 pb-2.5 pt-1 inline-block bg-white rounded-b-2xl border-t-4 border-dolphin">
                        <p className="text-lg font-bold">{date.badge.split(' ')[0]}</p>
                        <p className="text-xs uppercase text-gray-500">{date.badge.split(' ')[1]}</p>
                    </div>
                </div>
                <div className="space-y-2.5 border-b-2 border-x-2">
                    <div className="ml-2">
                        <span className="mx-2 py-0.5 px-0.5 border-b-2 border-fun">{category}</span>
                    </div>
                    <div className="space-y-2 pl-2.5 pr-4">
                        <h2 className="text-xl text-center font-semibold tracking-wide">{title}</h2>
                        <p className="leading-5 text-[#484848] h-24 whitespace-normal truncate">{description}</p>
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
                            <span>{date.bottom}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Post
