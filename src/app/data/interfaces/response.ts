export interface ResponseKanye {
    quote: string;
}
export interface ResponseAnime {
    data: {
      title: string;
      images:{
        jpg:{
            image_url: string;
            }
      }
    };
  }
  