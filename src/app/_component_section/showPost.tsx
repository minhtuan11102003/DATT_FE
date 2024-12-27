'use client'
import React, { useEffect, useState } from 'react';
import CardPost from './card_post';
import { error } from 'console';

const ShowPost = () => {
    const [posts, setPosts] = useState<any>([]);
    useEffect(() => {
        const getPostsApi = async () => {
            try {
                const payPosts = await fetch('http://api-core.dsp.one/api/auth/post');
                if (!payPosts.ok) {
                    throw new Error('Lỗi rồi');
                } else {
                    const resPost = await payPosts.json();
                    setPosts([...resPost.data]);
                }

            } catch (error) {
                console.log(error);
            }
        }
        getPostsApi();
    }, [])

    return (
        <div className="lg:flex md:flex w-4/5 lg:w-[80%] md:w-[90%] mx-auto my-[50px] justify-around">
            {
                posts.map((po: any, index: number) => (
                    <CardPost data={po} key={index} />
                ))
            }

        </div>
    );
};

export default ShowPost;