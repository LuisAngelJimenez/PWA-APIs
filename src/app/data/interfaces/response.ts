export interface ResponseKanye {
    quote : string;
}


export interface Pokemon {
  name: string;
  
}

export interface ResponsePokemon {
  results: Pokemon[];
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
  