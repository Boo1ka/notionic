import { DiscussionEmbed } from 'disqus-react'

const DisqusComments = ({ post }) => {
  const disqusShortname = "um-dom-dev"
  const disqusConfig = {
    url: 'umdom-git-dev-boo1ka.vercel.app/' + post.slug,
    identifier: post.id, // Single post id
    title: post.title // Single post title
  }
  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
export default DisqusComments;