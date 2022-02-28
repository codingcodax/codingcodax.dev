import { FC } from 'react';

import { PostMeta } from '~/@types';
import { Grid } from '~/components/ui';

import { PostCard } from './cards';

interface PostsProps {
  posts: PostMeta[];
}

const Posts: FC<PostsProps> = ({ posts }) => {
  return (
    <Grid css={{ mt: '$8', gridRowGap: '$8' }}>
      {posts.map((post) => (
        <PostCard key={post.title} {...post} />
      ))}
    </Grid>
  );
};

export default Posts;
