import { FC } from 'react';

import { Grid } from '@/components/ui';

import type { PostMeta } from 'types';

import Post from './post';

interface PostsProps {
  posts: PostMeta[];
}

const Posts: FC<PostsProps> = ({ posts }) => {
  console.log(posts);

  return (
    <Grid css={{ mt: '$8', gridRowGap: '$8' }}>
      {posts.map((post) => (
        <Post key={post.title} {...post} />
      ))}
    </Grid>
  );
};

export default Posts;
