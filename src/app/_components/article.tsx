import { notFound } from "next/navigation"
import { PostBody } from "./post-body"
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";

type Props = {
    title: string;
    slug: string;
};

export default async function Article({title, slug}: Props) {
    const post = getPostBySlug(slug)

    if (!post) {
        return notFound();
    }

    const content = await markdownToHtml(post.content || "")
    return (
      <div className="flex-col flex mt-20 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl font-bold leading-tight text-center">  
            {title}
          </h3>
        </div>
        <div>
          <PostBody content={content} />
          {/* <p className="text-lg leading-relaxed mb-4">{excerpt}</p> */}
          {/* <Avatar name={author.name} picture={author.picture} /> */}
        </div>
      </div>
    );
}