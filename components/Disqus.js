import { DiscussionEmbed } from 'disqus-react';

<DiscussionEmbed
  shortname='um-dom-dev'
  config={
    {
      url: 'umdom-git-dev-boo1ka.vercel.app/' + this.props.post.slug,
      identifier: this.props.post.id,
      title: this.props.post.title,
      language: 'ru-RU' //e.g. for Traditional Chinese (Taiwan)	
    }
  }
/>