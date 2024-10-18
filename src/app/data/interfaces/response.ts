export interface ResponseKanye {
    quote : string;
}
export interface ResponseAnime {
    data : {
      title : string;
      images : {
        jpg : {
            large_image_url : string;
            }
      }
    };
  }
  