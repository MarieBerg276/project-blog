import React from 'react';

import BlogSummaryCard from '@/components/BlogSummaryCard';

import styles from './homepage.module.css';
import { getBlogPostList } from '@/helpers/file-helpers';
import RespectMotionPreferences from '@/components/RespectMotionPreferences/RespectMotionPreferences';



async function Home() {

  const blogPosts = await getBlogPostList();

  return (
    <RespectMotionPreferences>
      <div className={styles.wrapper}>
        <h1 className={styles.mainHeading}>
          Latest Content:
        </h1>
        {
          blogPosts.map(({ slug, ...rest }) =>
            <BlogSummaryCard
              key={slug}
              slug={slug}
              {...rest}
            />
          )
        }
      </div>
    </RespectMotionPreferences>
  );
}

export default Home;
