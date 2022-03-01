import React from 'react'

export interface AppState {
    posts : {
        title: string,
        imgurl: string,
        liked: boolean,
        descr: string
    }[],
    updatePosts: React.Dispatch<React.SetStateAction<{ 
      title: string;
      imgurl: string;
      liked: boolean;
      descr: string;
    }[]>>,
    authenticationDetails: {
      username: string,
      password: string
    }
    changeAuthenticationDetails:React.Dispatch<React.SetStateAction<{
      username: string;
      password: string;
    }>>
}