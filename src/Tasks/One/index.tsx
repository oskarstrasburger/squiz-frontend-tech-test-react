import { useEffect, useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { queryFnWithIds } from '../../Utils/fetcher';

import { Author, Image, Post, PostWithAuthorAndImages } from '../../../api/types';

export default function TaskOne() {
  const [authorsIds, setAuthorsIds] = useState<Author['id'][]>([]);
  const [imagesIds, setImagesIds] = useState<Image['id'][]>([]);

  const {
    data: posts,
    isFetched: isPostsFetched,
  } = useQuery<Post[]>({
    queryKey: ['posts']
  });
  const {
    data: authors,
    isFetched: isAuthorsFetched,
  } = useQuery<Author[]>({
    queryKey: ['authors', authorsIds],
    queryFn: queryFnWithIds<Author[]>,
    enabled: !!authorsIds.length,
  });
  const {
    data: images,
    isFetched: isImagesFetched,
  } = useQuery<Image[]>({
    queryKey: ['images', imagesIds],
    queryFn: queryFnWithIds<Image[]>,
    enabled: !!imagesIds.length,
  });

  const combinedData = useMemo(() => {
    if (!isPostsFetched || !isImagesFetched || !isAuthorsFetched) {
      return;
    }

    return posts?.map(post => ({
      ...post,
      authors: post.authors.map(authorId => authors?.find(({ id }) => id === authorId)),
      images: post.images.map(imageId => images?.find(({ id }) => id === imageId)),
    } as PostWithAuthorAndImages));
  }, [
    posts,
    images,
    authors,
    isPostsFetched,
    isImagesFetched,
    isAuthorsFetched,
  ]);

  useEffect(() => {
    if (!posts) return;

    const {
      authors,
      images,
    } = posts.reduce(({ images, authors }, post) => ({
      authors: new Set([...Array.from(authors), ...post.authors]),
      images: new Set([...Array.from(images), ...post.images]),
    }), {
      authors: new Set<Author['id']>(),
      images: new Set<Image['id']>(),
    });

    setAuthorsIds(Array.from(authors));
    setImagesIds(Array.from(images));

  }, [posts]);

  if (!isPostsFetched || !isImagesFetched || !isAuthorsFetched) {
    return <>Loading...</>;
  }

  return (
    <>
      {JSON.stringify(combinedData)}
    </>
  );
}
